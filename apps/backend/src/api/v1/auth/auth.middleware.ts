import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { AuthenticationError } from '../../../utils/app-error'
import { getUserById } from '../users/users.service'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET || 'your_refresh_secret'
const ACCESS_SECRET = process.env.JWT_SECRET || 'your_access_secret'
const ACCESS_EXPIRES_IN = '15m'

export interface RefreshRequest extends Request {
  user?: { id: string; email?: string; role?: string }
}

export interface AuthenticatedRequest extends Request {
  user?: { id: string; email: string; role: string }
}

export function protectRoute(
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(
      new AuthenticationError('Authorization header missing or malformed'),
    )
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string
      email: string
      role: string
    }
    req.user = decoded
    next()
  } catch (err) {
    next(new AuthenticationError('Invalid or expired token'))
  }
}

export async function verifyRefresh(
  req: RefreshRequest,
  res: Response,
  next: NextFunction,
) {
  const token = req.cookies?.refreshToken
  if (!token) {
    return next(new AuthenticationError('Refresh token missing'))
  }

  let payload: { id: string }
  try {
    payload = jwt.verify(token, REFRESH_SECRET) as { id: string }
  } catch {
    return next(new AuthenticationError('Invalid or expired refresh token'))
  }

  const user = await getUserById(payload.id)
  if (!user) {
    return next(new AuthenticationError('User not found'))
  }
  next()
}
