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
        <Link to="/bottle">Bottel</Link> 
        <Link to="/contact">Contact</Link> 
      </nav>
    </header>
  );
}

export default Header;
