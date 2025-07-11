import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const[currentState,setCurrentState] = useState("Sign Up")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            <input type="text" placeholder='your name' required />
            <input type="email" placeholder='your email' required />
            <input type="password" placeholder='Password' required />

        </div>
        <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
      </form>
    </div>
  )
}

export default LoginPopup
