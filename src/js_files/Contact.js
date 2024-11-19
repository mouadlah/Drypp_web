import React from 'react'; // Removed useState since the form is gone
import '../css_files/Contact.css'; // Link to custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Contact <span>Drypp</span></h1>
        <p>We’d love to hear from you! Whether you have questions, feedback, or just want to chat, reach out to us through the details below.</p>
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <h2 id='title2'>Our Info</h2>
        <p className='deets'><FontAwesomeIcon icon={faEnvelope} /> drypp707@gmail.com</p>
        <p className='deets'>Find our Personal Info <a href='/about'>here</a> !</p>

        {/* Social Media Links */}
        <h3>Follow Us</h3>
        <div className="social-media">
          <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://www.instagram.com/the_drypp/?utm_source=ig_web_button_share_sheet" className="social-icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://x.com/DRYPP_" className="social-icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>

        {/* Incentive to Join Members List */}
        <div className="members-incentive">
        <h2>Join Our Members List</h2>
        <p>Sign up with your email to stay updated on the latest news, exclusive offers, and insights about our products!</p>
        <a href="/base" className="button-link">Click Here !</a>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="map-section">
        <iframe
          title="Drypp Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88151.06705703555!2d-82.47522530678254!3d28.057469210244045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c5948c979881%3A0x22cf2065446a0d34!2sUniversity%20of%20South%20Florida!5e0!3m2!1sen!2sus!4v1696184307894!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen={true} 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
