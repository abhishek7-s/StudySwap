import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/Home';
import Order from './pages/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import ProductInfo from './pages/productInfo/ProductInfo'
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order/>
            </ProtectedRoutes>
          } />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={
            <ProtectedRoutes>
              <Dashboard/>
            </ProtectedRoutes>
          } />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={
            <ProtectedRoutes>
              <Cart/>
            </ProtectedRoutes>} />
          <Route path="/addproduct" element={
            <ProtectedRoutes>
              <AddProduct/>
            </ProtectedRoutes>} />
          <Route path="/updateproduct" element={
            <ProtectedRoutes>
              <UpdateProduct />
            </ProtectedRoutes>}  />
          <Route path="/*" element={<NoPage/>} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
  )
}

export default App


//user 

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

//Admin

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'knupadhyay784@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}