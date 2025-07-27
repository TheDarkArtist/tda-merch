export type UserRole = 'user' | 'admin'

export interface User {
  id: string
  createdAt: Date
  email: string
  emailVerified: boolean
  failedLoginAttempts: number
  isActive: boolean
  name: string
  role: UserRole
  updatedAt: Date
}

export interface LoginPayload {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  user: User
}

export interface RegisterResponse {
  name: string
  email: string
  password: string
}

export interface RegisterPayload {
  name: string
  email: string
  password: string
}
