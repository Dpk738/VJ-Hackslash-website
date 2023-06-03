import React from 'react'
import img1 from '../images/vj_hackslash_logo-removebg-preview.png'
import im1 from './Competitive Programming vj.png';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Fade from 'react-reveal/Fade';
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
      
      <div className="container">
      

      
      
      
      <div className="logo">
        <img src={img1} alt="Card" />
        <div className="logo-body">
        
          <h2>Get. Set. Code.</h2>
          
        </div>
      </div>
      
      <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
    </div>
    
    <div className="row objectives">
      <div className="column">
        <Fade left>
          <div className="card">
            <i className="fas fa-code fa-3x"></i>
            <h3>Competitive Programming</h3>
            <p>Engage in competitive programming challenges and contests to improve problem-solving skills and algorithmic thinking.</p>
          </div>
          </Fade>
      </div>
      <div className="column">
        
          <div className="card">
            <i className="fas fa-briefcase fa-3x"></i>
            <h3>Freelancing</h3>
            <p>Explore freelance opportunities to gain practical experience, work on real-world projects, and enhance professional skills.</p>
          </div>
        
      </div>
      <div className="column">
        <Fade right>
          <div className="card">
            <i className="fas fa-laptop-code fa-3x"></i>
            <h3>Real-World Coding Problems</h3>
            <p>Tackle and solve coding problems inspired by real-life scenarios, applying programming concepts in practical situations.</p>
          </div>
          </Fade>
      </div>
      <div className="column">
        <Fade bottom>
          <div className="card">
            <i className="fas fa-comments fa-3x"></i>
            <h3>Debates/Discussions</h3>
            <p>Engage in debates and discussions on coding-related topics to broaden knowledge, gain different perspectives, and enhance critical thinking.</p>
          </div>
          </Fade>
      </div>
      <div className="column">
        <Fade bottom>
          <div className="card">
            <i className="fas fa-chart-line fa-3x"></i>
            <h3>Monthly Reviews and Analysis</h3>
            <p>Conduct monthly reviews and analysis of coding progress and achievements, identify areas for improvement, and set new goals.</p>
          </div>
          </Fade>
      </div>
    </div>

    </div>
  )
}

export default Home;