import { Outlet } from 'react-router-dom'
import Navbar from '../Common/Navbar'
import SideBar from '../Common/SideBar'

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <main>
        <Outlet />      {/* Render the matched child route component in APP.jsx */}
      </main>
    </>
  )
}

export default UserLayout