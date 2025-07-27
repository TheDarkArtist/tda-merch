import { Outlet } from 'react-router'
import { cn } from '@/lib/utils'
import { NavLink } from 'react-router'

const index = () => {
  const routes = [
    {
      label: 'Dashboard',
      href: '/admin',
    },
    {
      label: 'Products',
      href: '/admin/products',
    },
    {
      label: 'Orders',
      href: '/admin/orders',
    },
    {
      label: 'Users',
      href: '/admin/users',
    },
    {
      label: 'Settings',
      href: '/admin/settings',
    },
  ]
  return (
    <div className="h-full">
      <nav className="bg-zinc-800">
        <ul className="h-10 flex items-center gap-x-1 max-w-screen-2xl mx-auto w-full text-zinc-400">
          {routes.map(({ label, href }) => (
            <NavLink
              id={label}
              key={label}
              end
              className={({ isActive, isPending, isTransitioning }) =>
                cn(
                  'text-lg px-2 hover:bg-zinc-900 rounded-xs',
                  isPending ? 'text-blue-600' : '',
                  isActive ? 'bg-zinc-900 text-zinc-300' : '',
                  isTransitioning ? 'text-green-600' : '',
                )
              }
              to={href}
            >
              <li>{label}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default index
