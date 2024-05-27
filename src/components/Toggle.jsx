import React from 'react'

function Toggle({tags ,active, setActive}) {
    const buttons = ['Thought','Blogs','Podcast'];
    
    const handleChange = (e) =>{
       setActive(e.target.value);
    //    console.log(active);
    };
    // console.log(tags);
  return (
    <div className='toggle-btn'>
      <div className="btn-container">
        {tags?.map( (tag) =>{
          return(
              <button onClick={handleChange} key={tag[0]} value={tag[0]}
               className={ active === tag[0]? 'active':'' }
              >
                {tag[0]}
              </button>
          );
        } )}
      </div>
    </div>
  )
}

export default Toggle