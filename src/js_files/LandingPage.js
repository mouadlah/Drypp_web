import React from 'react';
import '../css_files/LandingPage.css';
import ImageSlider from '../js_files/ImageSlider'; // Import the ImageSlider component

function LandingPage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>BOTTLE<br />WHICH<br /><span className="highlight">NEEDED</span><br />EVERYDAY.</h1>
        <p>
          Drypp water bottle is not just a water bottle, it's BPA-free & drinking more water every day can make a huge impact on your health.
        </p>
        <button className="cta-button">BUY NOW</button>
      </div>
      <div className="hero-image">
        {/* Replace the static image with the ImageSlider component */}
        <ImageSlider />
      </div>
    </section>
  );
}

export default LandingPage;
