import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2>Ready to Secure Your Future?</h2>
          <p>
            Get started today with a free consultation. Our experts are here to help you find the perfect insurance solution.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <a href="tel:+1234567890" className="btn btn-secondary">Call: +91 9822237375</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
