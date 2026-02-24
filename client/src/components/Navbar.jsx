import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-marquee">
              <div className="marquee-content">
                <a href="tel:+91 +91 9822237375">
                  <FaPhone /> +91 +91 9822237375
                </a>
                <span className="marquee-separator">|</span>
                <a href="mailto:info@karwadefinancial.com">
                  <FaEnvelope /> info@karwadefinancial.com
                </a>
                <span className="marquee-separator">|</span>
                <span>Welcome to KarwadeFinancial!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="logo">
              <h2>KarwadeFinancial</h2>
            </Link>
            
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
            
            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
