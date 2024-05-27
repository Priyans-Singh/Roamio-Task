import React,{ useState } from 'react';
import logo from '../assets/logo.svg';
import Stats from '../components/stats';
import profilePic from '../assets/26.png';
import videoImg from '../assets/Screenshot 2024-05-23 130430.png';

function HeroSection() {

    const [active, setActive] = useState(false);
   
    const statsData = [
        {
            'quantity': '30K',
            'tag': 'Daily Thoughts'
        },
        {
            'quantity': '25K',
            'tag': 'Daily Blogs'
        },
        {
            'quantity': '30K',
            'tag': 'Daily Podcast'
        }
    ]

    const toggleEvent = () =>{
        setActive(!active);
    }

  return (
    <div>
        <nav>
            <div className="menubar">
                <span onClick={toggleEvent} class="material-symbols-rounded">
                    menu
                </span>
                <div className={ active ? "hidden-bar-active":"hidden-bar" }>
                  <a href="">Thoughts</a>
                  <a href="">Blog</a>
                  <a href="">Podcasts</a>
                  <a href="">Pricing</a>
                  <a href="">Contact Us</a>  
                </div>
            </div>
            <div className="logo">
                <img src={logo} alt="" />
                <h4>Thoughts</h4>
            </div>
            <div className="right-part">
              <div className="links">
                <a href="">Thoughts</a>
                <a href="">Blog</a>
                <a href="">Podcasts</a>
                <a href="">Pricing</a>
                <a href="">Contact Us</a>  
              </div>
              <div className="auth-buttons">
                <button className='login'>
                    Login
                </button>
                <button className='signup'>
                    Signup
                </button>
              </div>
            </div>
        </nav>
        <div className="main">
            <h1>
                WHERE EVERY THOUGHT IS HEARD.
            </h1>
            <div className="users">
                <div className="image-section">
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                    <img src={profilePic} alt="" />
                </div>
                +100K WorldWide users
            </div>
            <p className="intro">
                Introducing Thoughts- Where every voice and every thought can be shared effortlessly via tweets or
                in the form of engaging blogs
            </p>
            <button className="cta">
               <p>GET STARTED</p>
               <span class="material-symbols-rounded">
                 arrow_forward
               </span>
            </button>
            <div className="video-section">
              <div className="img-card">
                 <img src={videoImg} alt="" />
              </div>
              <div className="stats-container">
                {statsData.map( (data) => {
                    return(
                        <Stats key={data.tag} quantity={data.quantity} tag = {data.tag} />
                    )
                })}
              </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;