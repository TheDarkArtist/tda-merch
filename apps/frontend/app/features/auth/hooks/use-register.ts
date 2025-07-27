import { useMutation } from '@tanstack/react-query'
import type { RegisterPayload, RegisterResponse } from '../types'
import api from '@/lib/axios'

export function useRegister() {
  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: async (data) => {
      const res = await api.post<RegisterResponse>('/users/register', data)
      return res.data
    },
  })
}
