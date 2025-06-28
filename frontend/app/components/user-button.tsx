import { useAuth } from "@/lib/auth-context"
import { CircleUser, Loader } from "lucide-react"
import { NavLink } from "react-router";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const UserButton = () => {
  const { user, loading, logout } = useAuth();

  if (loading) return <Loader className="animate-spin size-5" />

  return !loading && user ? (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <CircleUser className="text-zinc-400 size-7" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <NavLink to="/auth/login">Login</NavLink>
  )
}



