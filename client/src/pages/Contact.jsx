import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import '../styles/ContactPage.css';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const presetSubject = query.get('subject');

    if (presetSubject) {
      setFormData((prev) => ({ ...prev, subject: presetSubject }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    
    try {
      const response = await axios.post('/api/contact', formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to send message. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Contact Us</h1>
            <p>Get in touch with our team. We're here to help!</p>
          </motion.div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-info-section"
            >
              <h2>Get In Touch</h2>
              <p>Have questions? We're here to help. Reach out to us through any of the following methods.</p>
              
              <div className="contact-info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <h3>Phone</h3>
                  <p><a href="tel:+919822237375">+91 9822237375</a></p>
                  <p>Monday - Friday, 9am - 6pm</p>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <h3>Email</h3>
                  <p><a href="mailto:info@karwadefinancial.com">info@karwadefinancial.com</a></p>
                  <p>We'll respond within 24 hours</p>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <h3>Office</h3>
                  <p>National Indian Mutual Building, Mount Road, Sadar</p>
                  <p>Nagpur, Maharashtra - 440001</p>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <h3>Business Hours</h3>
                  <p>Mon - Fri: 9am - 6pm</p>
                  <p>Sat: 10am - 4pm</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-form-section"
            >
              <div className="contact-form-container">
                <h2>Send Us A Message</h2>
                
                {status.message && (
                  <div className={`status-message ${status.type}`}>
                    {status.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9822237375"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us more about how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary full-width" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
