import React, { useState } from 'react'
import Toggle from '../components/Toggle'
import Topic1 from '../assets/Topic1.png'
import Topic2 from '../assets/Topic2.png'

function TopicsSection() {
    const topics = [
        [
           'Health Care',
           [Topic1,Topic1,Topic1,Topic1,Topic1,Topic1]
        ],
        [
           'Technology',
           [Topic2,Topic2,Topic2,Topic2,Topic2,Topic2]
        ],
        [
           'Fashion',
           [Topic1,Topic1,Topic1,Topic1,Topic1,Topic1]
        ],
        [
           'Self Growth',
           [Topic2,Topic2,Topic2,Topic2,Topic2,Topic2]
        ],
        [
           'Business',
           [Topic1,Topic1,Topic1,Topic1,Topic1,Topic1]
        ],
        [
           'Sports',
           [Topic2,Topic2,Topic2,Topic2,Topic2,Topic2]
        ]
    ]
    
    const [active,setActive] = useState('Health Care');

    const posts = topics.filter(tag => tag[0]===active );
  return (
    <div className='topic-section'>
        <h2>
            EXPLORE YOUR FAVORITE TOPICS
        </h2>
        <p>
            Empower Ideas. Elevating Voices. Your Gateway to insightful
            Blogging. Thoughtful sharing and dynamic podcasting
            with Cyberguard security welcome to a World beyong Words.
        </p>
        <Toggle  active={active} setActive={setActive} tags={topics} />
        <div className="post-container">
            {posts[0][1].map((post) =>{
                return (
                    <div className="img-card">
                       <img src={post} alt="" />
                    </div>
                );
            })}
        </div>
        <button className='small-cta'>
            <p>
                VIEW MORE
            </p>
            <span class="material-symbols-rounded">
                arrow_forward
            </span>
        </button>
    </div>
  )
}

export default TopicsSection