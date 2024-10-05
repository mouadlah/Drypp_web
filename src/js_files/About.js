// src/js_files/About.js
import React from 'react';
import '../css_files/About.css';
import teamMember1 from '../img/Rima.jpg';
import teamMember2 from '../img/Mathis.jpg';
import teamMember3 from '../img/Momo.jpg';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="intro">
        Welcome to Drypp! We are dedicated to enhancing hydration for everyone—whether you’re an athlete, a busy professional, or someone who simply wants to maintain a healthy lifestyle. Our mission is to provide innovative solutions that make hydration easy and effective, ensuring that everyone has access to the right information and tools to stay hydrated.
      </p>

      <h2>Our Vision</h2>
      <p className="vision">
        At Drypp, we envision a world where hydration is seamlessly integrated into the daily lives of all individuals, helping everyone perform at their best, regardless of their lifestyle or activity level. Our smart water bottle and online platform work together to provide personalized hydration insights tailored to individual needs, empowering everyone to achieve their health and wellness goals.
      </p>

      <h2>Meet Our Team</h2>
      <div className="team-container">
        <div className="team-member">
          <img src={teamMember1} alt="Rima El Brouzi" className="team-photo" />
          <h3>Rima El Brouzi</h3>
          <p>Co-Founder & CEO</p>
          <p className="description">I thrive on innovation and technology, driven by a passion for making a meaningful impact and continuously pushing boundaries to improve hydration solutions for everyone.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/rimaelbrouzi/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:relbrouzi@usf.edu">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="team-member">
          <img src={teamMember2} alt="Mathis Fürst Haugen" className="team-photo" />
          <h3>Mathis Fürst Haugen</h3>
          <p>Co-Founder & CTO</p>
          <p className="description">I blend my passion for innovation and commitment to health and wellness, striving to create smart hydration solutions that inspire everyone to reach their fullest potential.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/mathis-haugen/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:haugen1@usf.edu">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="team-member">
          <img src={teamMember3} alt="Mouad Lahmam" className="team-photo" />
          <h3>Mouad Lahmam</h3>
          <p>Head of Software Development</p>
          <p className="description">I am passionate about leveraging cutting-edge technology to create innovative hydration solutions, ensuring our platform adapts to everyone's evolving needs.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/mohamed-mouad-lahmam-229347237/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:mouadlahmam04@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
