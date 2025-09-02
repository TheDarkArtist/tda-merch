export interface Product {
  id: string
  title: string
  slug: string
  description: string
  price: number
  stock: number
  images: string[]
  variants: any[]
  createdAt: string
  updatedAt: string
}

export interface ProductResponse {
  data: Product[]
  meta: {
    total: number
    page: number
    limit: number
  }
}

export interface Category {
  id: string
  name: string
  slug: string
}
