import { Outlet } from "react-router"

const index = () => {
  return (
    <>
      <div>Index file for Dashboard at pages/dashboard/index.tsx</div>
      <Outlet />
    </>
  )
}

export default index
