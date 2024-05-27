import React from 'react';
import TestimonialContainer from '../components/testimonialContainer';

function testimonialSection() {
  return (
    <div className='t-section'>
       <h2>
        WHAT OUR USERS SAY ABOUT US
       </h2>
       <p>
        Thoughts is rulling in the digital world and
        our users have something to say about the same.
        Do check their individual stories of transformation and get inspired today.
       </p>
       <TestimonialContainer/>
       <button className='small-cta'>
            <p>
                ALL REVIEW
            </p>
            <span class="material-symbols-rounded">
                arrow_forward
            </span>
        </button>
    </div>
  )
}

export default testimonialSection