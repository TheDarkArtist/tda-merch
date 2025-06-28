import { Outlet } from "react-router"
import Footer from "~/components/footer"
import { Navbar } from "~/components/navbar"

const Layout = () => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
