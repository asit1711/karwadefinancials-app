import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaCar, FaHeartbeat, FaGraduationCap } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      title: 'Home Insurance',
      description: 'Comprehensive coverage for your home and belongings with flexible plans for every budget.'
    },
    {
      icon: <FaCar />,
      title: 'Auto Insurance',
      description: 'Smart vehicle protection with dependable claim support and competitive premium options.'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Life Insurance',
      description: 'Secure your family with structured life cover and long-term protection planning.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Education Planning',
      description: 'Goal-driven plans to build education funds for your children with disciplined growth.'
    }
  ];

  return (
    <section className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Solutions Built Around Real Life</h2>
          <p>Choose from core coverage and planning services that are tailored to your goals.</p>
        </div>

        <div className="grid grid-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="service-card card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link
                to={`/contact?subject=${encodeURIComponent(`Quote Request - ${service.title}`)}`}
                className="learn-more"
              >
                Get Quote
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
