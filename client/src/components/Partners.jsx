import { motion } from 'framer-motion';
import '../styles/Partners.css';

const Partners = () => {
  // This will be populated with actual partner logos
  const partners = [
    { name: 'LenDen', logo: '/partners/lenden.png' },
    { name: 'LIC-Customer', logo: '/partners/LIC-Customer.jpg' },
    { name: 'Lic', logo: '/partners/Lic.png' },
    { name: 'NewIndia', logo: '/partners/NewIndia.png' },
    { name: 'Star', logo: '/partners/star.png' },
    { name: 'HDFC Mutual Fund', logo: '/partners/hdfc.jpg' },
  ];

  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="partners section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>Our Mutual Fund Partners</h2>
          <p>Trusted partnerships with India's leading financial institutions</p>
        </motion.div>

        <div className="partners-carousel">
          <div className="partners-track">
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
