// src/js_files/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../css_files/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p><FontAwesomeIcon icon={faPhone} /> +1-555-555-5555</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> info@drypp.com</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Drypp Street, Ottawa, Canada</p>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
