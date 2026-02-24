import { motion } from 'framer-motion';
import { FaCheckCircle, FaBullseye, FaEye } from 'react-icons/fa';
import '../styles/About.css';
import '../styles/AboutPage.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Karwade Financial</h1>
            <p>Your trusted financial partner for over 40 years</p>
          </motion.div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="about-content-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                Founded in 1986, Karwade Financial has been at the forefront of providing comprehensive insurance
                and financial solutions. What started as a small family-owned agency has grown into a trusted partner
                for over 50,000 clients across the nation.
              </p>
              <p>
                Our commitment to personalized service, integrity, and excellence has remained unchanged throughout
                our journey. We believe in building long-term relationships with our clients and providing solutions
                that truly meet their unique needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="about-image-placeholder"
            >
              <div className="placeholder-content">
                <span>🏢</span>
                <p>Serving clients since 1986</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="value-card card"
            >
              <FaBullseye className="value-icon" />
              <h3>Our Mission</h3>
              <p>
                To provide exceptional financial security solutions that protect what matters most to our clients,
                delivered with integrity and personalized service.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="value-card card"
            >
              <FaEye className="value-icon" />
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and preferred financial services provider, recognized for innovation,
                excellence, and unwavering commitment to client success.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="value-card card"
            >
              <FaCheckCircle className="value-icon" />
              <h3>Our Promise</h3>
              <p>
                We promise to always put our clients first, provide transparent advice, and be there when you
                need us most with reliable support and solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <h3>40+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-box">
              <h3>50,000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-box">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-box">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
