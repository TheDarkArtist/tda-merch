import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router'

export const CartButton = () => {
  return (
    <div>
      <Link to="/cart">
        <ShoppingCart className="text-zinc-400" />
      </Link>
    </div>
  )
}
