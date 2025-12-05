import { Outlet } from 'react-router-dom'
import Navbar from '../Common/Navbar'
import FilterSideBar from '../Common/FilterSideBar'

const RestaurantLayout = () => {
  return (
    <>
      <Navbar />
      <FilterSideBar/>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RestaurantLayout