import { motion } from 'framer-motion';
import { FaHome, FaCar, FaHeartbeat, FaBriefcase, FaUmbrella, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import '../styles/ServicesPage.css';

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      title: 'Home Insurance',
      description: 'Comprehensive coverage for your home and belongings. Protect your investment with flexible plans.',
      features: [
        'Property damage coverage',
        'Personal belongings protection',
        'Liability coverage',
        'Additional living expenses',
        'Natural disaster protection'
      ]
    },
    {
      icon: <FaCar />,
      title: 'Auto Insurance',
      description: 'Full protection for your vehicles with competitive rates and excellent roadside assistance.',
      features: [
        'Collision coverage',
        'Comprehensive coverage',
        'Liability coverage',
        '24/7 roadside assistance',
        'Rental car reimbursement'
      ]
    },
    {
      icon: <FaHeartbeat />,
      title: 'Life Insurance',
      description: 'Secure your family\'s future with our range of life insurance products and financial planning.',
      features: [
        'Term life insurance',
        'Whole life insurance',
        'Universal life insurance',
        'Critical illness coverage',
        'Financial planning support'
      ]
    },
    {
      icon: <FaBriefcase />,
      title: 'Business Insurance',
      description: 'Safeguard your business with comprehensive commercial insurance solutions.',
      features: [
        'General liability',
        'Property insurance',
        'Workers compensation',
        'Professional liability',
        'Business interruption'
      ]
    },
    {
      icon: <FaUmbrella />,
      title: 'Umbrella Coverage',
      description: 'Extra liability protection beyond your standard policy limits for complete peace of mind.',
      features: [
        'Extended liability limits',
        'Coverage beyond home/auto',
        'Legal defense costs',
        'Personal injury protection',
        'Worldwide coverage'
      ]
    },
    {
      icon: <FaGraduationCap />,
      title: 'Education Planning',
      description: 'Save for your children\'s future education with our specialized investment plans.',
      features: [
        'College savings plans',
        'Tax-advantaged accounts',
        'Investment guidance',
        'Flexible contribution options',
        'Goal-based planning'
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Services</h1>
            <p>Comprehensive financial solutions tailored to your needs</p>
          </motion.div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="services-detailed">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}
              >
                <div className="service-detail-icon">
                  {service.icon}
                </div>
                <div className="service-detail-content">
                  <h2>{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle /> {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#quote" className="btn btn-primary">Get a Quote</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
