import React from 'react';
import pic from '../assets/Insight1.png'

function insightsSection() {
  return (
    <div className='insight-section'>
        <h1>
            OUR LATEST INSIGHTS
        </h1>
        <p>
            Stay updated and inspired with our latest insights into a varierty of topics, ranging from technology trends to lifestyle tips.
        </p>
        <div className="insights-container">
            <div className="img-card">
               <img src={pic} alt="" />
           </div>
           <div className="img-card">
               <img src={pic} alt="" />
           </div>
           <div className="img-card">
               <img src={pic} alt="" />
           </div>
        </div>
        <button className='small-cta' >
            <p>
                SIGN UP NOW
            </p>
            <span class="material-symbols-rounded">
                arrow_forward
            </span>
        </button>
    </div>
  )
}

export default insightsSection