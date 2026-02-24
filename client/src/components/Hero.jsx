import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>Your Trusted Partner in Financial Security</h1>
            <p>
              Since 1986, Karwade Financial has been dedicated to protecting what matters most to you and your family. 
              Experience personalized service with comprehensive insurance and financial solutions.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-stats"
          >
            <div className="stat-item">
              <h3>25+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
