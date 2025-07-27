import LoginForm from '@/features/auth/components/login-form'
import { useAuth } from '@/features/auth/hooks/use-auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && user) {
      navigate('/')
    }
  }, [user, isLoading, navigate])

  if (isLoading) return null

  return <LoginForm />
}

export default Login
