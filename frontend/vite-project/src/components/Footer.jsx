function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-text">
          &copy; {currentYear} Manoj Katwal. All rights reserved.
        </div>
        
        <div className="footer-links">
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
