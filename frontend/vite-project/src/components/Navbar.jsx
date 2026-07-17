import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Basic scroll spy
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(navItems[i].href);
          break;
        }
      }
      if (window.scrollY < 100) {
        setActiveItem('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    setActiveItem(href);
  };

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container navbar-container">
          <a href="#" className="logo" onClick={() => handleLinkClick('')}>
            MANOJ <span className="logo-dot" />
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeItem === item.href ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.href)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
              Connect
            </a>
          </div>

          {/* Mobile Hamburguer Toggler */}
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              className="menu-toggle" 
              onClick={() => setIsOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px' }}
            >
              <X size={28} />
            </button>
            
            <div className="mobile-nav-links">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link ${activeItem === item.href ? 'active' : ''}`}
                  onClick={() => handleLinkClick(item.href)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn btn-primary" 
                style={{ marginTop: '1rem', padding: '0.85rem 2rem' }}
                onClick={() => handleLinkClick('#contact')}
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
