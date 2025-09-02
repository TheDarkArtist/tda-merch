import { Card, CardContent } from '@/components/ui/card'
import type { Product } from '../types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { title, price, images } = product

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <img src={images[0]} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4 space-y-1">
        <h3 className="text-base font-semibold truncate">{title}</h3>
        <p className="text-sm text-muted-foreground">₹{price.toFixed(2)}</p>
      </CardContent>
    </Card>
  )
}
