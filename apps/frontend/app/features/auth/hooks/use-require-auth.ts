import { useEffect } from 'react'
import type { AuthContextValue } from '../auth-provider'
import { useAuth } from './use-auth'

export function useRequireAuth(): AuthContextValue {
  const auth = useAuth()

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) {
      window.location.href = '/auth/login'
    }
  }, [auth.isLoading, auth.isAuthenticated])

  return auth
}
