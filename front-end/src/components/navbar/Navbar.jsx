import React, {useState}from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'


const navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("Home")
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
      <Link onClick={()=>setMenu("Home")}  className={menu==="Home"?"active":""}>Home</Link>
        <a  href='#explore-menu'onClick={()=>setMenu("Menu")}  className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile-app")}  className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("Contact")}  className={menu==="Contact"?"active":""}>Contact</a>

      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart' >  <img src={assets.basket_icon} alt="" /></Link>
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default navbar
