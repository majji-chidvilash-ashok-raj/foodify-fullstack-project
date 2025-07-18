import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                    <img src={assets.logo} alt="" id="logo-footer"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero aliquid temporibus odit minima? Eligendi, in facere quisquam facilis, harum voluptate accusamus pariatur soluta excepturi voluptatem expedita consequuntur quibusdam omnis.</p>
                    <div className="footer-social-icons">
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.linkedin_icon} alt="" />
                    </div>
            </div>
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                            <li>Home</li>
                            <li>About-Us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                    </ul>
         

            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                            <li>+91-1234567890</li>
                            <li>Foodify@foodify.com</li>
                    </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Foodify. All rights reserved.
        </p>
    </div>
)
}

export default Footer
