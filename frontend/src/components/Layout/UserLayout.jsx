import { Outlet } from 'react-router-dom'
import Navbar from '../Common/Navbar'
import SideBar from '../Common/SideBar'
import FilterSideBar from '../Common/FilterSideBar'

const UserLayout = () => {
  return (
    <>
      <Navbar />
      {/* <SideBar /> */}
      <FilterSideBar/>
      <main>
        <Outlet />      {/* Render the matched child route component in APP.jsx */}
      </main>
    </>
  )
}

export default UserLayout