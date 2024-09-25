// src/js_files/ImageSlider.js
import React, { useState, useEffect } from 'react';
import '../css_files/ImageSlider.css';
import image1 from '../img/img1.jpeg'; 
import image2 from '../img/img2.jpeg'; 
import image3 from '../img/img3.jpg'; 

function ImageSlider() {
  const images = [image1, image2, image3]; // Add more images if needed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <div className="image-slider">
      <img src={images[currentImageIndex]} alt="Slider Image" className="slider-image" />
    </div>
  );
}

export default ImageSlider;
