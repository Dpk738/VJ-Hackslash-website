import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';


import '@fortawesome/fontawesome-free/css/all.min.css';
import img1 from './components/images/vj_hackslash_logo-removebg-preview.png';
import './App.css';
import Home from './components/home/Home';
import Crew from './components/crew/Crew';
import About from './components/about/About';
import Events from './components/events/Events';
import Footer from './components/footer/Footer';

function App() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 700) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <Router>
      <div className='App'>
        <div>
          <nav className={`navbar ${navbarScrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="navbar-link">
              <img src={img1} alt="Card" className="navbar-image" />
            </Link>
            <h1 className="navbar-brand">VJ Hack/slash</h1>
            <ul className="navbar-list">
              <li className="navbar-item">
                <NavLink
                  to="/"
                  className="navbar-link"
                  activeClassName="active"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/crew"
                  className="navbar-link"
                  activeClassName="active"
                >
                  Crew
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/about"
                  className="navbar-link"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/events"
                  className="navbar-link"
                  activeClassName="active"
                >
                  Events
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
