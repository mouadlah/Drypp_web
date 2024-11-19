import React from 'react';
import './App.css'; 
import Header from './js_files/Header';
import LandingPage from './js_files/LandingPage';
import About from './js_files/About';
import Base from './js_files/Base';
import Contact from './js_files/Contact';
import Footer from './js_files/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Define the routes here, so only one page shows at a time */}
        <Routes>
          {/* Route for the home (LandingPage) */}
          <Route path="/Drypp_web" element={<LandingPage />} />

          {/* Route for the about page */}
          <Route path="/about" element={<About />} />

          {/* Route for the about page */}
          <Route path="/base" element={<Base />} />

          {/* Route for the about page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer stays outside the Routes so it appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
