import React from 'react'
import pic from '../assets/ss2.png'

function secondarySectioin() {
  return (
    <div className='secondary-section' >
        <div className="left-part">
          <h2>
              IMMERSE IN ENGAGING CONTENT     
          </h2>
          <p>
              Dive into the ocean of content from thought-provoking ideas, in-depth blogs,
              and insightful podcasts
          </p>
          <button className='small-cta' >
              <p>
                  EXPLORE NOW
              </p>
              <span class="material-symbols-rounded">
                  arrow_forward
              </span>
          </button>
        </div>
        <div className="img-card">
         <img src={pic} alt="" />
        </div>
    </div>
  )
}

export default secondarySectioin