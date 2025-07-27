import { getAccessToken } from '@/features/auth/utils'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  const token = getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
