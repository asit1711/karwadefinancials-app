import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaCar, FaHeartbeat, FaBriefcase, FaUmbrella, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import '../styles/ServicesPage.css';

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      title: 'Home Insurance',
      description: 'Comprehensive coverage for your home and belongings. Protect your investment with flexible plans.',
      features: [
        'Property damage coverage',
        'Personal belongings protection',
        'Liability coverage',
        'Additional living expenses'
      ]
    },
    {
      icon: <FaCar />,
      image:
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
      title: 'Auto Insurance',
      description: 'Full protection for your vehicles with competitive rates and excellent roadside assistance.',
      features: [
        'Collision coverage',
        'Comprehensive coverage',
        'Liability coverage',
        '24/7 roadside assistance'
      ]
    },
    {
      icon: <FaHeartbeat />,
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
      title: 'Life Insurance',
      description: "Secure your family's future with our range of life insurance products and financial planning.",
      features: ['Term life insurance', 'Whole life insurance', 'Universal life insurance', 'Critical illness coverage']
    },
    {
      icon: <FaBriefcase />,
      image:
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
      title: 'Business Insurance',
      description: 'Safeguard your business with comprehensive commercial insurance solutions.',
      features: ['General liability', 'Property insurance', 'Workers compensation', 'Business interruption']
    },
    {
      icon: <FaUmbrella />,
      image:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      title: 'Umbrella Coverage',
      description: 'Extra liability protection beyond your standard policy limits for complete peace of mind.',
      features: ['Extended liability limits', 'Coverage beyond home/auto', 'Legal defense costs', 'Worldwide coverage']
    },
    {
      icon: <FaGraduationCap />,
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      title: 'Education Planning',
      description: "Save for your children's future education with our specialized investment plans.",
      features: ['College savings plans', 'Tax-advantaged accounts', 'Investment guidance', 'Goal-based planning']
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
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="service-detail"
              >
                <img src={service.image} alt={service.title} className="service-detail-image" loading="lazy" />

                <div className="service-detail-content">
                  <div className="service-heading">
                    <span className="service-detail-icon">{service.icon}</span>
                    <h2>{service.title}</h2>
                  </div>

                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <FaCheckCircle /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/contact?subject=${encodeURIComponent(`Quote Request - ${service.title}`)}`}
                    className="btn btn-primary"
                  >
                    Get a Quote
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
