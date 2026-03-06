import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-marquee" aria-label="Contact details">
              <div className="marquee-content">
                <a href="tel:+919822237375">
                  <FaPhone /> +91 9822237375
                </a>
                <span className="marquee-separator">|</span>
                <a href="mailto:info@karwadefinancial.com">
                  <FaEnvelope /> info@karwadefinancial.com
                </a>
                <span className="marquee-separator">|</span>
                <span>Trusted financial guidance since 1986</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="logo" aria-label="Karwade Financial home">
              <h2>Karwade Financial</h2>
            </Link>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                About
              </NavLink>
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
                Services
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contact
              </NavLink>
              <Link to="/contact?subject=Free%20Consultation" className="btn btn-primary nav-cta">
                Book Consultation
              </Link>
            </div>

            <button
              className="mobile-toggle"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
