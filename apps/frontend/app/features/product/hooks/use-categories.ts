import { useQuery } from '@tanstack/react-query'
import api from '@/lib/axios'
import type { Category } from '../types'

export function useCategories() {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await api.get('/categories')
      return res.data
    },
  })
}
