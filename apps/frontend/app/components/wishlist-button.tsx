import { Bookmark } from 'lucide-react'
import { Link } from 'react-router'

export const WishlistButton = () => {
  return (
    <div>
      <Link to="wishlist">
        <Bookmark className="text-zinc-400" />
      </Link>
    </div>
  )
}
