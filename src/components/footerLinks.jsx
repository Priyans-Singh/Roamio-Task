import React from 'react';
import logo from '../assets/logo.svg'

function footerLinks() {
  return (
    <div className='footer-container'>
        <div className="left-part">
           <img src={logo} alt="" />
           <h2>Thoughts</h2>
        </div>
        <div className="right-part">
           <div className="elements">
              <p className="heading">
                Quick Links
              </p>
              <div className="links">
                <a href="#">Thoughts</a>
                <a href="#">Blog</a>
                <a href="#">Podcasts</a>
                <a href="#">FAQs</a>
              </div>
           </div>
           <div className="elements">
              <p className="heading">
                Pricing
              </p>
              <div className="links">
                <a href="#">Changelog</a>
                <a href="#">Docs</a>
              </div>
           </div>
           <div className="elements">
              <p className="heading">
                Company
              </p>
              <div className="links">
                <a href="#">About us</a>
                <a href="#">Contact Us</a>
              </div>
           </div>
           <div className="elements">
              <p className="heading">
                Customer Support
              </p>
              <div className="links">
                <p>hello@contact.com</p>
                <p>+26 564 7899</p>
              </div>
           </div>
           <div className="elements">
              <p className="heading">
                Elsewhere
              </p>
              <div className="links">
                <a href="#">Youtube</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
              </div>
           </div>
        </div>
    </div>
  )
}

export default footerLinks