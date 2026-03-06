import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2>Ready to Secure Your Financial Future?</h2>
          <p>
            Start with a focused consultation and get a coverage plan aligned to your life stage, risks, and goals.
          </p>
          <div className="cta-buttons">
            <Link to="/contact?subject=Free%20Consultation" className="btn btn-primary">
              Get Started
            </Link>
            <a href="tel:+919822237375" className="btn btn-secondary">
              Call +91 9822237375
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
