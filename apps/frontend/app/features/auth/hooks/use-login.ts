import { useMutation } from '@tanstack/react-query'
import type { LoginPayload, LoginResponse } from '../types'
import api from '@/lib/axios'

export function useLogin() {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: async (data) => {
      const res = await api.post<LoginResponse>('/auth/login', data)
      return res.data
    },
  })
}
