import { Link } from "react-router-dom"

function AdminSideBar() {
  return (
    <div className="hidden md:block p-4 w-40 top-[3.4rem] bottom-0 overflow-y-auto fixed no-scrollbar shadow-lg">
        <Link to="/admin/details">Data</Link>
    </div>
  )
}

export default AdminSideBar