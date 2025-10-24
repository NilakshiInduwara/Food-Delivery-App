import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import RestaurantLayout from './components/Layout/RestaurantLayout'
import Home from './pages/Home'
import TodaysOffers from './pages/TodaysOffers'
import { Toaster } from "sonner";
import OfferForm from './pages/OfferForm';

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right"/>
      <Routes>
        <Route path="/" element={<UserLayout />} >
          <Route index element={<Home />} />
          <Route path="/offers" element={< TodaysOffers/>} />
        </Route>       
        <Route path="/restaurant" element={<RestaurantLayout />} >
          <Route path="/restaurant/createOffer" element={< OfferForm/>} />
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App