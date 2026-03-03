import Hero from '../components/Hero';
import Partners from '../components/Partners';
import About from '../components/About';
import Services from '../components/Services';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Partners />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <Blog />
      <CTA />
    </div>
  );
};

export default Home;
