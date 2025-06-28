import { Outlet } from "react-router"
import Footer from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthProvider } from "@/lib/auth-context"
import { Toaster } from "@/components/ui/sonner"

const Layout = () => {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient} >
        <div className="flex flex-col h-full">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default Layout
