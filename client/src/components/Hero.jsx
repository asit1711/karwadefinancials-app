import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const slides = [
  {
    id: 1,
    subtitle: 'Investments. Retirement. Insurance.',
    title: 'We can help you plan for that.',
    description: 'Since 1986, Karwade Financial has been dedicated to protecting what matters most to you and your family.',
    buttonText: 'Get Started Now',
    buttonLink: '/contact'
  },
  {
    id: 2,
    subtitle: 'Comprehensive Financial Solutions',
    title: 'Your Trusted Partner in Financial Security',
    description: 'Experience personalized service with comprehensive insurance and financial solutions tailored to your needs.',
    buttonText: 'Our Services',
    buttonLink: '/services'
  },
  {
    id: 3,
    subtitle: 'Protecting Your Future',
    title: 'Secure Your Family\'s Tomorrow Today',
    description: 'With over 40 years of experience, we provide reliable insurance and investment solutions for your peace of mind.',
    buttonText: 'Learn More',
    buttonLink: '/about'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 8 seconds

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
      <div className="hero-overlay"></div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-slide"
        >
          <div className="container">
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-text"
              >
                <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
                <h1>{slides[currentSlide].title}</h1>
                <p className="hero-description">
                  {slides[currentSlide].description}
                </p>
                <div className="hero-buttons">
                  <Link to={slides[currentSlide].buttonLink} className="btn btn-primary">
                    {slides[currentSlide].buttonText}
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
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

      {/* Navigation Arrows */}
      <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide} aria-label="Previous slide">
        ‹
      </button>
      <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide} aria-label="Next slide">
        ›
      </button>

      {/* Carousel Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
