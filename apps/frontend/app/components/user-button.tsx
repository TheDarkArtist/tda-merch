import { Loader } from 'lucide-react'
import { NavLink } from 'react-router'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/features/auth/hooks/use-auth'

export const UserButton = () => {
  const { user, isLoading, isAuthenticated, logout } = useAuth()

  if (isLoading) return <Loader className="animate-spin size-5" />

  return !isLoading && isAuthenticated ? (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-sm px-2 py-1">
        {user?.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <NavLink className="flex items-center gap-x-2" to="/auth/login">
      Login
    </NavLink>
  )
}
