import { CartButton } from "../cart-button"
import { NotificationButton } from "../notification-button"
import { SearchBar } from "../search-bar"
import { UserButton } from "../user-button"
import { WishlistButton } from "../wishlist-button"
import { Links } from "./links"
import { Logo } from "./logo"

export const Navbar = () => {
  return (
    <div className="bg-zinc-900 px-4 2xl:px-0 border-b border-zinc-700">
      <nav className="flex items-center justify-between h-14 max-w-screen-2xl w-full mx-auto">
        <Logo />
        <SearchBar />
        <div className="flex items-center gap-x-10">
          <Links />
          <div className="flex items-center gap-x-4">
            <NotificationButton />
            <WishlistButton />
            <CartButton />
            <UserButton />
          </div>
        </div>
      </nav>
    </div>
  )
}

