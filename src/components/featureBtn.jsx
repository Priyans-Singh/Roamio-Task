import React from 'react'

function featureBtn() {
  return (
    <div className='features'>
        <button className="feature">
            <p>
                THOUGHT SHARING
            </p>
            <span class="material-symbols-rounded">
              arrow_circle_right
            </span>
        </button>
        <button className="feature active">
            <p>
                PERSONALISED BLOG
            </p>
            <span class="material-symbols-rounded">
             arrow_circle_right
            </span>
        </button>
        <button className="feature">
            <p>
                PODCAST LISTENING
            </p>
            <span class="material-symbols-rounded">
              arrow_circle_right
            </span>
        </button>
        <button className="feature">
            <p>
                LISTEN WITH AUDIO
            </p>
            <span class="material-symbols-rounded">
              arrow_circle_right
            </span>
        </button>
        <button className="feature">
            <p>
                CYBERGUARD SECURITY
            </p>
            <span class="material-symbols-rounded">
               arrow_circle_right
            </span>
        </button>
    </div>
  )
}

export default featureBtn