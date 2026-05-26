import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    return savedTheme === 'light';
  });

  // Apply theme class to document body whenever isLightMode changes
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  // Toggle theme handler
  const toggleTheme = () => {
    setIsLightMode((prev) => {
      const nextMode = !prev;
      localStorage.setItem('theme', nextMode ? 'light' : 'dark');
      return nextMode;
    });
  };

  // Scroll listeners for progress and section spy
  useEffect(() => {
    const sections = ['hero', 'projects', 'skills', 'about', 'contact'];
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar glass-panel">
      {/* Scroll Progress Indicator */}
      <div className="navbar-progress" style={{ width: `${scrollProgress}%` }} />

      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-bracket">[</span>
          <span className="logo-text">MANOJ_SYS</span>
          <span className="logo-bracket">]</span>
          <span className="logo-status-pulse"></span>
          <span className="logo-status-text">ONLINE</span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {['hero', 'projects', 'skills', 'about', 'contact'].map((sec) => (
            <button
              key={sec}
              className={`nav-link ${activeSection === sec ? 'active' : ''}`}
              onClick={() => scrollToSection(sec)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </div>

        <div className="navbar-actions">
          {/* Light/Dark Toggle Button */}
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {isLightMode ? (
              // Moon Icon for switching to dark mode
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              // Sun Icon for switching to light mode
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
