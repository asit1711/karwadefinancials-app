import { motion } from 'framer-motion';
import { FaMobileAlt, FaClock, FaChartLine, FaLock } from 'react-icons/fa';
import '../styles/Features.css';

const Features = () => {
  const features = [
    // {
    //   icon: <FaMobileAlt />,
    //   title: 'Mobile App Access',
    //   description: 'Manage your policies, file claims, and get quotes anytime, anywhere with our mobile app.'
    // },
    {
      icon: <FaClock />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service ready to assist you whenever you need help.'
    },
    {
      icon: <FaChartLine />,
      title: 'Competitive Rates',
      description: 'Get the best value for your money with our competitive pricing and money-saving offers.'
    },
    {
      icon: <FaLock />,
      title: 'Secure & Private',
      description: 'Your information is protected with industry-leading security and privacy measures.'
    }
  ];

  return (
    <section className="features section">
      <div className="container">
        <div className="section-title">
          <h2>Legendary Service & Simple Tools</h2>
          <p>Karwade Financial provides the best insurance experience with modern tools and exceptional service.</p>
        </div>
        
        <div className="grid grid-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-item"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
