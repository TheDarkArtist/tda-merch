import { useAuth } from '@/features/auth/hooks/use-auth'
import { Navigate, Outlet, useLocation } from 'react-router'

export default function ProtectedRoutesLayout() {
  const { isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) return null

  if (!isAuthenticated) {
    return (
      <Navigate to="/auth/login" replace state={{ from: location.pathname }} />
    )
  }

  return <Outlet />
}
