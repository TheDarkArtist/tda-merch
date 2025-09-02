import { FullScreenError } from '@/components/full-screen-error'
import { FullScreenLoader } from '@/components/full-screen-loader'
import { ProductCard } from '@/features/product/components/card'
import { useProducts } from '@/features/product/hooks/use-products'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import { useState } from 'react'

const MerchPage = () => {
  const [page, setPage] = useState(1)
  const limit = 10

  const {
    data: products,
    isError,
    isLoading,
    isFetching,
  } = useProducts(page, limit)

  if (isLoading) return <FullScreenLoader />
  if (isError) return <FullScreenError />

  const totalPages = products ? Math.ceil(products.meta.total / limit) : 1

  return (
    <div className="max-w-screen-2xl mx-auto w-full px-4 py-8 space-y-8 h-full">
      {products?.data.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No products available.
        </p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products?.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
        >
          Prev
        </Button>

        <span className="text-sm text-muted-foreground">
          Page <span className="font-semibold">{page}</span>
          {totalPages > 1 && <> / {totalPages}</>}
          {isFetching && (
            <Loader className="ml-2 h-4 w-4 animate-spin inline-block" />
          )}
        </span>

        <Button
          variant="outline"
          onClick={() => setPage((p) => p + 1)}
          disabled={products?.data.length < limit}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default MerchPage
