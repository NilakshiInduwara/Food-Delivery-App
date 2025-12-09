import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import RestaurantLayout from './components/Layout/RestaurantLayout'
import Home from './pages/Home'
import TodaysOffers from './pages/TodaysOffers'
import { Toaster } from "sonner";
import RestaurantForm from './pages/RestaurantForm'
import UserForm from './pages/UserForm'
import AdminLayout from './components/Layout/AdminLayout'
import AdminUser from './components/Admin/AdminUser'
import AllDetails from './components/Admin/AllDetails'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { Provider } from 'react-redux'
import { store } from './state/store'
import HomeLayout from './components/Layout/HomeLayout'
import CreateFoodItemForm from './pages/CreateFoodItemForm'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />  
          </Route>

          <Route path="/" element={<UserLayout />}>
            <Route path="/offers" element={<TodaysOffers />} />
          </Route>

          <Route path="/restaurant" element={<RestaurantLayout />}>
            <Route
              path="createFoodItem"
              element={
                <ProtectedRoute allowedRoles={["restaurant"]}>
                  <CreateFoodItemForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="createRestaurant"
              element={
                <ProtectedRoute allowedRoles={["restaurant"]}>
                  <RestaurantForm />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/admin" 
            element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminLayout />
                </ProtectedRoute>
              }>
            <Route path="/admin/details" element={<AllDetails />} />
            <Route path="/admin/users" element={<AdminUser />} />
          </Route>

          <Route path="/register" element={<UserForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App