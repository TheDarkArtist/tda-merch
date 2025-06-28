import { cn } from "@/lib/utils"
import { NavLink } from "react-router"

export const Links = () => {
  const routes = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Merch",
      href: "/merch"
    },
    {
      label: "About",
      href: "/about"
    },
  ]
  return (
    <ul className="flex items-center gap-x-4">
      {routes.map(({ label, href }) => (
        <NavLink
          id={label}
          key={label}
          className={({ isActive, isPending, isTransitioning }) =>
            cn(
              "text-lg",
              isPending ? "text-blue-600" : "",
              isActive ? "text-yellow-600" : "",
              isTransitioning ? "text-green-600" : "",
            )
          }
          to={href}>
          <li>{label}</li>
        </NavLink>
      ))}
    </ul>
  )
}
