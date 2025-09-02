import api from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import type { ProductResponse } from '../types'

export function useProducts(page = 1, limit = 10) {
  return useQuery<ProductResponse>({
    queryKey: ['products', page, limit],
    queryFn: async () => {
      const res = await api.get<ProductResponse>(
        `/products?page=${page}&limit=${limit}`,
      )
      return res.data
    },
  })
}
