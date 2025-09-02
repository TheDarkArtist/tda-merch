import { createContext, useEffect, useState, type ReactNode } from 'react'
import type { User } from './types'
import { setAccessToken, clearAuth, getAccessToken } from './utils'
import type { LoginPayload } from './schema'
import { useLogin } from './hooks/use-login'
import api from '@/lib/axios'

type AuthContextValue = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (data: LoginPayload) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { mutateAsync } = useLogin()

  useEffect(() => {
    const bootstrapAuth = async () => {
      const token = getAccessToken()
      if (!token) {
        setIsLoading(false)
        return
      }

      try {
        const res = await api.get<User>('/auth/me')
        setUser(res.data)
      } catch (err) {
        console.error('Auth bootstrap failed:', err)
        clearAuth()
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    bootstrapAuth()
  }, [])

  const login = async (data: LoginPayload) => {
    setIsLoading(true)
    try {
      const res = await mutateAsync(data)
      setAccessToken(res.accessToken)
      setUser(res.user)
    } catch (error) {
      console.error('Login failed:', error)
      clearAuth()
      setUser(null)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    clearAuth()
    setUser(null)

    window.location.href = '/'
  }

  const value: AuthContextValue = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
