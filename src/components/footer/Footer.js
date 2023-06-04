import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-md-6">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.linkedin.com/company/vj-hack-slash/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/vj_hackslash?igshid=YmMyMTA2M2Y=">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a href="https://github.com/">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
