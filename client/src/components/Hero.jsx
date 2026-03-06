import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/Hero.css';

const slides = [
  {
    id: 1,
    subtitle: 'Investments. Retirement. Insurance.',
    title: 'We can help you plan for that.',
    description:
      'Since 1986, Karwade Financial has helped families and businesses protect wealth and make confident long-term decisions.',
    buttonText: 'Get Started',
    buttonLink: '/contact?subject=Free%20Consultation'
  },
  {
    id: 2,
    subtitle: 'Comprehensive Financial Solutions',
    title: 'Personalized Advice, Practical Coverage',
    description:
      'From policy selection to financial planning, our team gives you transparent recommendations built around your goals.',
    buttonText: 'Explore Services',
    buttonLink: '/services'
  },
  {
    id: 3,
    subtitle: 'Protecting Your Future',
    title: 'Build Financial Security With Confidence',
    description:
      'We combine trusted insurers, responsive service, and decades of domain knowledge to keep your plan resilient.',
    buttonText: 'Know Our Story',
    buttonLink: '/about'
  }
];

const heroHighlights = ['Trusted Since 1986', '50K+ Clients Served', 'Dedicated Advisors'];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      <div className="hero-overlay" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="hero-slide"
        >
          <div className="container">
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12 }}
                className="hero-text"
              >
                <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
                <h1>{slides[currentSlide].title}</h1>
                <p className="hero-description">{slides[currentSlide].description}</p>

                <div className="hero-highlight-row">
                  {heroHighlights.map((item) => (
                    <span key={item} className="hero-highlight-pill">
                      <FaCheckCircle /> {item}
                    </span>
                  ))}
                </div>

                <div className="hero-buttons">
                  <Link to={slides[currentSlide].buttonLink} className="btn btn-primary">
                    {slides[currentSlide].buttonText}
                  </Link>
                  <a href="tel:+919822237375" className="btn btn-secondary">
                    Speak to an Advisor
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="hero-stats"
              >
                <div className="stat-item">
                  <h3>40+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>50K+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat-item">
                  <h3>98%</h3>
                  <p>Satisfaction Rate</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide} aria-label="Previous slide">
        ‹
      </button>
      <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide} aria-label="Next slide">
        ›
      </button>

      <div className="carousel-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hero-progress" aria-hidden="true">
        <span style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
      </div>
    </section>
  );
};

export default Hero;
