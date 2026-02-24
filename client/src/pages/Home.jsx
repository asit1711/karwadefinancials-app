import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import QuoteCalculator from '../components/QuoteCalculator';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Services />
      <Features />
      <QuoteCalculator />
      <Testimonials />
      <Blog />
      <CTA />
    </div>
  );
};

export default Home;
