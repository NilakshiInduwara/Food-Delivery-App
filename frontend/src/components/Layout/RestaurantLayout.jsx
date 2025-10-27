import { Outlet } from 'react-router-dom'
import Navbar from '../Common/Navbar'

const RestaurantLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RestaurantLayout