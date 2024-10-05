// src/js_files/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../css_files/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p><FontAwesomeIcon icon={faEnvelope} /> drypp707@gmail.com</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Tampa, FL</p>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.instagram.com/the_drypp/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com/DRYPP_" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      <div className="footer-section">
        <h4>Company</h4>
        <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/bottle">Bottle</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
