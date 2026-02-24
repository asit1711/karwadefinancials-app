import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Karwade Financial</h3>
              <p>
                Your trusted partner in financial security since 1986. We provide comprehensive insurance and financial solutions for individuals and businesses.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#quote">Home Insurance</a></li>
                <li><a href="#quote">Auto Insurance</a></li>
                <li><a href="#quote">Life Insurance</a></li>
                <li><a href="#quote">Business Insurance</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul className="contact-list">
                <li>
                  <FaMapMarkerAlt />
                  <span>National Indian Mutual Building, Mount Road, Sadar, Nagpur Maharashtra - 440001</span>
                </li>
                <li>
                  <FaPhone />
                  <a href="tel:+1234567890">+91 9822237375</a>
                </li>
                <li>
                  <FaEnvelope />
                  <a href="mailto:info@karwadefinancial.com">info@karwadefinancial.com</a>
                </li>
              </ul>
              <div className="hours">
                <strong>Open Hours:</strong>
                <p>Mon - Fri: 9am - 6pm<br />Sat: 10am - 4pm<br />Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Karwade Financial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
