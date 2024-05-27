import React, { useState } from 'react';
import Toggle from '../components/Toggle';
import Post1 from '../assets/post1.png';
import Post2 from '../assets/post2.png';
import Post3 from '../assets/post3.png';

function PostSection() {
  const tags = [
    [
        'Thoughts',
        [Post1,Post1,Post1,Post1,Post1,Post1]
    ],
    [
        'Blogs',
        [Post2,Post2,Post2,Post2,Post2,Post2]
    ],
    [
        'Podcast',
        [Post3,Post3,Post3,Post3,Post3,Post3]
    ]
  ];

  const [active,setActive] = useState('Thoughts');
  
  const posts = tags.filter(tag => tag[0]===active );
  
  return (
    <div className='post-section' >
        <h2>
            DISCOVER THE MOST RECENT POSTS
        </h2>
        <p>
            Empower Ideas. Elevating Voices. Your Gateway to insightful
            Blogging. Thoughtful sharing and dynamic podcasting
            with Cyberguard security welcome to a World beyong Words.
        </p>
        <Toggle active={active} setActive={setActive} tags={tags} />
        <div className="post-container">
            {posts[0][1]?.map((post) =>{
                return (
                    <div className="img-card">
                       <img src={post} alt="" />
                    </div>
                );
            })}
        </div>
        <button className='small-cta' >
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

export default PostSection