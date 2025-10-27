import { Outlet } from "react-router-dom"
import AdminSideBar from "../Admin/AdminSideBar"
import Navbar from "../Common/Navbar"

function AdminLayout() {
  return (
    <>
      <Navbar />
      <AdminSideBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AdminLayout