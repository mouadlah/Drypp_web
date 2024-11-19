import React from 'react';
import '../css_files/LandingPage.css';
import ImageSlider from '../js_files/ImageSlider'; // Import the ImageSlider component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function LandingPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleBuyNowClick = () => {
    navigate('/base'); // Navigate to the "bottle" page
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>TRACK<br /><span className="highlight">HYDRATE<br /></span>ELEVATE</h1>
        <p>
        Drypp is more than just a hydration solution—it's a smart, personalized companion that helps you optimize your hydration and wellness. With intuitive tracking and customized reminders, Drypp adapts to your lifestyle, empowering you to stay at your best, every day.        </p>
        <button className="cta-button" onClick={handleBuyNowClick}>JOIN OUR WAITLIST</button>
      </div>
      <div className="hero-image">
        {/* Replace the static image with the ImageSlider component */}
        <ImageSlider />
      </div>
    </section>
  );
}

export default LandingPage;
