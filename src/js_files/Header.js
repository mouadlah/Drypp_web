import React from 'react';
import '../css_files/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Drypp</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
