import { motion } from 'framer-motion';
import { FaHome, FaCar, FaHeartbeat, FaBriefcase, FaUmbrella, FaGraduationCap } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      title: 'Home Insurance',
      description: 'Comprehensive coverage for your home and belongings. Protect your investment with flexible plans.'
    },
    {
      icon: <FaCar />,
      title: 'Auto Insurance',
      description: 'Full protection for your vehicles with competitive rates and excellent roadside assistance.'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Life Insurance',
      description: 'Secure your family\'s future with our range of life insurance products and financial planning.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Business Insurance',
      description: 'Safeguard your business with comprehensive commercial insurance solutions.'
    },
    {
      icon: <FaUmbrella />,
      title: 'Umbrella Coverage',
      description: 'Extra liability protection beyond your standard policy limits for complete peace of mind.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Education Planning',
      description: 'Save for your children\'s future education with our specialized investment plans.'
    }
  ];

  return (
    <section className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We provide comprehensive financial services across multiple fields to meet all your needs.</p>
        </div>
        
        <div className="grid grid-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#quote" className="learn-more">Get Quote →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
