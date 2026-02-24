import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../styles/QuoteCalculator.css';

const QuoteCalculator = () => {
  const [formData, setFormData] = useState({
    type: 'home',
    coverage: '100000',
    age: '30'
  });
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('/api/quote', formData);
      setQuote(response.data.quote);
    } catch (error) {
      console.error('Error calculating quote:', error);
      alert('Failed to calculate quote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="quote-calculator section" id="quote">
      <div className="container">
        <div className="section-title">
          <h2>Get Your Insurance Quote</h2>
          <p>Calculate your insurance premium in just a few clicks. Fast, easy, and reliable.</p>
        </div>
        
        <div className="quote-wrapper">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="quote-form-container"
          >
            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-group">
                <label>Insurance Type</label>
                <select name="type" value={formData.type} onChange={handleChange}>
                  <option value="home">Home Insurance</option>
                  <option value="auto">Auto Insurance</option>
                  <option value="life">Life Insurance</option>
                  <option value="health">Health Insurance</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Coverage Amount ($)</label>
                <input
                  type="number"
                  name="coverage"
                  value={formData.coverage}
                  onChange={handleChange}
                  min="10000"
                  step="10000"
                  required
                />
              </div>
              
              {(formData.type === 'life' || formData.type === 'health') && (
                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    min="18"
                    max="100"
                    required
                  />
                </div>
              )}
              
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Calculating...' : 'Calculate Quote'}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="quote-result"
          >
            {quote ? (
              <div className="result-card">
                <h3>Your Estimated Quote</h3>
                <div className="quote-details">
                  <div className="quote-item">
                    <span>Insurance Type:</span>
                    <strong>{quote.type.charAt(0).toUpperCase() + quote.type.slice(1)}</strong>
                  </div>
                  <div className="quote-item">
                    <span>Coverage Amount:</span>
                    <strong>${quote.coverage.toLocaleString()}</strong>
                  </div>
                  <div className="quote-highlight">
                    <div className="premium">
                      <span>Monthly Premium</span>
                      <h2>${quote.monthlyPremium}</h2>
                    </div>
                    <div className="premium">
                      <span>Annual Premium</span>
                      <h2>${quote.annualPremium}</h2>
                    </div>
                  </div>
                  <div className="savings">
                    💰 Save ${quote.savings} by paying annually!
                  </div>
                </div>
                <button className="btn btn-primary full-width">Apply Now</button>
              </div>
            ) : (
              <div className="result-placeholder">
                <div className="placeholder-icon">📊</div>
                <h3>Calculate Your Quote</h3>
                <p>Fill out the form to see your estimated insurance premium</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
