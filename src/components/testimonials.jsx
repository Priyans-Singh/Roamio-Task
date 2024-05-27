import React from 'react';
import tpic from '../assets/testimonail1.png'

function testimonials() {
  return (
    <div className='testimonial'>
      <div className="img-card">
        <img src={tpic} alt="" />
      </div>
      <div className="t-content">
        <div className="ratings">
          <p>4.0</p>
          <span class="material-symbols-rounded">
             star
          </span>
          <span class="material-symbols-rounded">
             star
          </span>
          <span class="material-symbols-rounded">
             star
          </span>
          <span class="material-symbols-rounded">
             star
          </span>
        </div>
        <p className="text">
          Thoughts is a platofrm that gives voice to the voiceless
          in a metaphorical sense. I've been here for 1 and a half years
          and I've successfully changed the lives of many through my thoughts
          about life as a whole.
        </p>
        <div className="statistics">
          <div className="number">
              <span>
                36K
              </span>
              Thoughts
          </div>
          <div className="number">
              <span>
                189
              </span>
              Blogs
          </div>
          <div className="number">
              <span>
                122
              </span>
              Podcasts
          </div>
        </div>
      </div>
    </div>
  )
}

export default testimonials