import React from 'react';
import FooterLinks from '../components/footerLinks';

function footerSection() {
  return (
    <footer>
        <h1>LET'S GET STARTED</h1>
        <div className="contact-us">
            <div className="left-part">
                <h3>
                    FEEL FREE TO CONTACT US
                </h3>
                <p>
                    Reach out to us with any questions, feedback, or 
                    inquiries you may have. Our team is here to assist
                    you every step of way.
                </p>
            </div>
            <form action="">
                <div className='part1'>
                  <input type="text" placeholder='First Name'/>
                  <input type="text" placeholder='Last Name'/>
                  <input type='number' placeholder='Phone Number'/>
                  <select name="City" id="city">
                      <option value="">City</option>
                      <option value="">Mumbai</option>
                      <option value="">Pune</option>
                      <option value="">Banglore</option>
                      <option value="">Delhi</option>
                  </select>
                </div>
                <textarea rows='4' name="query" id="query" placeholder='Write your queries'></textarea>
                <div className='check-btn'>
                 <div className="checkbox">
                   <input type="checkbox" name='T&C' />
                   <label htmlFor="T&C">By checking this box you are agreeeing to our <a href="">Terms of service</a></label>
                 </div>
                 <button>SUBMIT</button>
                </div>
            </form>
        </div>
        <FooterLinks/>
        <div className="bottom-part">
            <p>
             © 2024 Thoughts. All rights reserved
            </p>
            <div className="right-part">
                <a href="#">Privacy Policy</a>
                <a href="#">Sitemap</a>
            </div>
        </div>
    </footer>
  )
}

export default footerSection