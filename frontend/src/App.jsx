import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import TodaysOffers from './pages/TodaysOffers'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} >
          <Route index element={<Home />} />
          <Route path="/offers" element={< TodaysOffers/>} />
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}

export default App