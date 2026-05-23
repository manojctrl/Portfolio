import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Manoj</span>
          <span className="logo-bracket">{'</>'}</span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button className="nav-link" onClick={() => scrollToSection('hero')}>
            Home
          </button>
          <button className="nav-link" onClick={() => scrollToSection('projects')}>
            Projects
          </button>
          <button className="nav-link" onClick={() => scrollToSection('skills')}>
            Skills
          </button>
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            About
          </button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
