import React from 'react'
import studying from '../assets/Screenshot 2024-05-23 214736.png'

function featureCard() {
  return (
    <div className='feature-card'>
       <div className="img-card">
         <img src={studying} alt="" />
       </div>
       <div className="right-section">
         <h3>
            Explore a rich collection
            of thought-provoking blogs or share your own insights.
            Our user-friendly platform allows seamless reading and effortlees
            uploading to foster a vibrant community of ideas
         </h3>
         <button className='small-cta' >
            <p>
                TRY NOW
            </p>
            <span class="material-symbols-rounded">
                arrow_forward
            </span>
         </button>
       </div>
    </div>
  )
}

export default featureCard