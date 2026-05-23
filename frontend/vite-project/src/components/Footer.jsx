import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Manoj Katuwal</h4>
          <p>Full-Stack Developer | Creative Problem Solver</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="social-links">
            <a href="#" title="GitHub">GitHub</a>
            <a href="#" title="LinkedIn">LinkedIn</a>
            <a href="#" title="Twitter">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Manoj Katuwal. All rights reserved.</p>
        <p>Built with ❤️ using React & Vite</p>
      </div>
    </footer>
  );
}

export default Footer;
