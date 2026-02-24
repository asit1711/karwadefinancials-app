import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const reasons = [
    {
      icon: <FaShieldAlt />,
      title: 'Trusted Protection',
      description: 'Over 40 years of reliable insurance coverage and financial security for our clients.'
    },
    {
      icon: <FaUsers />,
      title: 'Personalized Service',
      description: 'Dedicated advisors who understand your unique needs and provide tailored solutions.'
    },
    {
      icon: <FaAward />,
      title: 'Industry Excellence',
      description: 'Award-winning service and consistently high customer satisfaction ratings.'
    },
    {
      icon: <FaHandshake />,
      title: 'Long-term Partnership',
      description: 'We build lasting relationships and support you through every life stage.'
    }
  ];

  return (
    <section className="about section">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Karwade Financial?</h2>
          <p>We are dedicated to providing exceptional financial services and support to help you thrive.</p>
        </div>
        
        <div className="grid grid-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="reason-card card"
            >
              <div className="icon-wrapper">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
