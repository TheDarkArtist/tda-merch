import { useAuth } from '@/features/auth/hooks/use-auth'
import type { UserRole } from '@/features/auth/types'
import { Navigate, Outlet } from 'react-router'

export default function AdminOnlyLayout({ role }: { role: UserRole }) {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated || !user?.role.includes(role)) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
