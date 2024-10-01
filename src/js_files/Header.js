import React from 'react';
import '../css_files/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
     <Link to="/Drypp_web" className="logo"></Link>
      <nav className="nav">
        <Link to="/Drypp_web">Home</Link>
        <Link to="/about">About Us</Link> 
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
