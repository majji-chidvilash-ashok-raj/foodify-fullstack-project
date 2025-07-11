import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import {Route,Routes} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopUp/LoginPopup'
const App = () => {
  const [showLogin,setShowLogin]= useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='App'>
        <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<cart/>} />
            <Route path="/order" element={<placeorder/>} />
          </Routes>
        

      </div>
    <Footer/>
    </>
  )
}

export default App
