import API from '@/lib/axios'

export async function getProducts(data: any) {
  const res = await API.get('/api/products', data)
  return res.data
}
