import React from 'react';
import pic from '../assets/cyberguard.png'

function cyberguardSection() {
  return (
    <div className='guard-section'>
        <h2>
            POWERFUL SECURITY BY <br /> <span>CYBERGUARD</span>
        </h2>
        <p>
            Empower Ideas. Elevating Voices. Your Gateway to insightful
            Blogging. Thoughtful sharing and dynamic podcasting
            with Cyberguard security welcome to a World beyong Words.
        </p>
        <div className="img-card">
           <img src={pic} alt="" />
        </div>
    </div>
  )
}

export default cyberguardSection