import React from 'react'
import './NavigationBar.css'
import img1 from '../images/vj_hackslash_logo-removebg-preview.png'
import img2 from '../images/Capture-removebg-preview.png'
import { Link } from 'react-router-dom';
const NavigationBar = () => {
  return (
    <div className='navbar'>
        
        <Link to='/home'>
        <img src={img1} width="60px" alt="image" />
      </Link>
      <Link to='/home'>
        <img src={img2} width="130px" alt="image" />
      </Link>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/register'>Crew</Link>
        <Link to='/userprofile'>User Profile</Link>
        <Link to='/aboutus'>About Us</Link>
        <Link to='/login'>Login</Link>
        <div class="animation start-home"></div>
      </nav>
    </div>
  )
}

export default NavigationBar;