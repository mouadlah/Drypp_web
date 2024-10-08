import React from 'react';
import '../css_files/LandingPage.css';
import ImageSlider from '../js_files/ImageSlider'; // Import the ImageSlider component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function LandingPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleBuyNowClick = () => {
    navigate('/bottle'); // Navigate to the "bottle" page
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>THE<br />BOTTLE<br /><span className="highlight">YOU NEED</span><br />EVERYDAY.</h1>
        <p>
          Drypp isn't just a water bottle—it's a smart hydration companion that helps you stay on top of your health with personalized insights and effortless reminders, empowering you to make lasting improvements to your wellness every day.        
        </p>
        <button className="cta-button" onClick={handleBuyNowClick}>BUY NOW</button>
      </div>
      <div className="hero-image">
        {/* Replace the static image with the ImageSlider component */}
        <ImageSlider />
      </div>
    </section>
  );
}

export default LandingPage;
