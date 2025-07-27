import { useProducts } from '@/features/product/hooks/use-get-products'

const MerchPage = () => {
  const { data } = useProducts()

  console.log(data)

  return (
    <div className="h-full max-w-screen-2xl mx-auto w-full">
      {data?.map((product) => (
        <div>{product?.title}</div>
      ))}
    </div>
  )
}

export default MerchPage
