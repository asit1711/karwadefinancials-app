import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Owner',
      image: '👩‍💼',
      rating: 5,
      text: 'Karwade Financial has been instrumental in protecting my business. Their personalized service and comprehensive coverage give me peace of mind.'
    },
    {
      name: 'Michael Chen',
      role: 'Family of 4',
      image: '👨‍👩‍👧‍👦',
      rating: 5,
      text: 'We switched to Karwade for our home and auto insurance. Not only did we save money, but the customer service is outstanding. Highly recommended!'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Retired Teacher',
      image: '👩‍🏫',
      rating: 5,
      text: 'The life insurance planning services were excellent. My advisor took time to understand my needs and created a perfect plan for my retirement.'
    }
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>Our clients are very happy to work with us. Read their experiences below.</p>
        </div>
        
        <div className="grid grid-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="testimonial-card card"
            >
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="client-info">
                <div className="client-image">{testimonial.image}</div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
