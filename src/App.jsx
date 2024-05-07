import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Place Order/PlaceOrder'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'

const App = () => {
  const [showlogin, setShowLogin] = useState(false)
  return (
    <>
    {showlogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='w-[80%] m-auto'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
