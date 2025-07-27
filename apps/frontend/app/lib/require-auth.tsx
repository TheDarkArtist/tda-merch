import { useAuth } from '@/features/auth/hooks/use-auth'
import type { UserRole } from '@/features/auth/types'
import { Navigate, Outlet, useLocation } from 'react-router'

interface RequireAuthLayoutProps {
  roleCheck: UserRole
}

export default function RequireAuthLayout({
  roleCheck,
}: RequireAuthLayoutProps) {
  const { isAuthenticated, isLoading, user } = useAuth()
  const location = useLocation()

  if (isLoading) return null
  if (!isAuthenticated) {
    return (
      <Navigate to="/auth/login" replace state={{ from: location.pathname }} />
    )
  }
  if (roleCheck && !user?.role.includes(roleCheck)) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
