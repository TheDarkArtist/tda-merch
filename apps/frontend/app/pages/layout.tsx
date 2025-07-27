import { Outlet } from 'react-router'
import Footer from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/sonner'
import { AuthProvider } from '@/features/auth/auth-provider'

const Layout = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="flex flex-col h-full">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default Layout
