'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema, type RegisterPayload } from '../schema'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRegister } from '../hooks/use-register'
import { NavLink, useNavigate } from 'react-router'
import { toast } from 'sonner'

export default function RegisterForm() {
  const registerMutation = useRegister()
  const [serverError, setServerError] = useState('')
  const navigate = useNavigate()

  const form = useForm<RegisterPayload>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: RegisterPayload) => {
    try {
      await registerMutation.mutateAsync(data)
      navigate('/auth/login')
      toast('User registration successful, please login')
    } catch (err) {
      setServerError((err as Error).message)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto py-12 px-6 bg-zinc-900 rounded-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-green-600">TDAMerch</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Create an account to start selling or shopping
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={registerMutation.isPending}
          >
            {registerMutation.isPending ? 'Registering...' : 'Register'}
          </Button>

          {serverError && (
            <p className="text-sm text-red-500 text-center">{serverError}</p>
          )}
          <div className="flex flex-col sm:flex-row justify-between text-sm text-zinc-400 mt-4">
            <span>
              Already have an account?{' '}
              <NavLink
                to="/auth/login"
                className="text-green-500 hover:underline"
              >
                Log in
              </NavLink>
            </span>
            <NavLink
              to="/forgot-password"
              className="text-green-500 hover:underline mt-2 sm:mt-0"
            >
              Forgot password?
            </NavLink>
          </div>
        </form>
      </Form>
    </div>
  )
}
