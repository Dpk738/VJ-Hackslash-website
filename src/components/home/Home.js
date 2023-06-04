import React, { useEffect } from 'react';
import img1 from '../images/vj_hackslash_logo-removebg-preview.png';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card-animate');

      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;

        // Add the corresponding animation class based on the card's position
        if (cardTop < window.innerHeight && cardBottom >= 0) {
          card.classList.add(getAnimationClass(card));
        } else {
          card.classList.remove(getAnimationClass(card));
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getAnimationClass = (card) => {
    const index = Array.from(card.parentNode.children).indexOf(card);
    switch (index) {
      case 0:
        return 'fade-left';
      case 2:
        return 'fade-right';
      case 3:
        return 'fade-bottom';
      case 4:
        return 'fade-bottom';
      default:
        return '';
    }
  };

  return (
    <div className='Home'>
      <div className="container">
        <div className="logo">
          <img src={img1} alt="Card" />
          <div className="logo-body">
            <h2>Get. Set. Code.</h2>
          </div>
        </div>
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
      <div className="row objectives">
        <div className="column">
          <div className="card card-animate">
            <i className="fas fa-code fa-3x"></i>
            <h3>Competitive Programming</h3>
            <p>Engage in competitive programming challenges and contests to improve problem-solving skills and algorithmic thinking.</p>
          </div>
        </div>
        <div className="column">
          <div className="card card-animate">
            <i className="fas fa-briefcase fa-3x"></i>
            <h3>Freelancing</h3>
            <p>Explore freelance opportunities to gain practical experience, work on real-world projects, and enhance professional skills.</p>
          </div>
        </div>
        <div className="column">
          <div className="card card-animate">
            <i className="fas fa-laptop-code fa-3x"></i>
            <h3>Real-World Coding Problems</h3>
            <p>Tackle and solve coding problems inspired by real-life scenarios, applying programming concepts in practical situations.</p>
          </div>
        </div>
        <div className="column">
          <div className="card card-animate">
            <i className="fas fa-comments fa-3x"></i>
            <h3>Debates/Discussions</h3>
            <p>Engage in debates and discussions on coding-related topics to broaden knowledge, gain different perspectives, and enhance critical thinking.</p>
          </div>
        </div>
        <div className="column">
          <div className="card card-animate">
            <i className="fas fa-chart-line fa-3x"></i>
            <h3>Monthly Reviews and Analysis</h3>
            <p>Conduct monthly reviews and analysis of coding progress and achievements, identify areas for improvement, and set new goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
