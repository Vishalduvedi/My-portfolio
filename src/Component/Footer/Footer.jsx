import React from 'react'
import './Footer.css'
// import footer_logo from '../../assets/vishal.png'
import user_icon from '../../assets/user_icon.svg'
// import theme_patern from '../../assets/theme_pattern.svg'


const Footer = () => {
  return (
    <div id='footer' className='footer'>
      
      <div className="footer-top">
        <div className="footer-top-left">
          {/* { <img src={theme_patern} alt="" /> } */}
            <h1>vishal</h1>
            <p>I am front end developer from Una himachal pradesh , with six month training experience in meander software company in Mohali</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src= {user_icon} alt="" />
                    <input type="email" name="email" placeholder='Enter your Email'  />
                </div>
                <div className="footer-subscribe"> subscribe</div>
            </div>
      </div>
<hr />
<div className="footer-bottom">
    <p className='footer-bottom-left'> @2024 vishal duvedi , All rights reserved. </p>
    <div className="footer-bottom-right">
        <p>Term of services</p>
        <p> privacy policy </p>
        <p> Connect With me </p>
    </div>
</div>
    </div>
  )
}

export default Footer
