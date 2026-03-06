import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendar, FaUser } from 'react-icons/fa';
import '../styles/Blog.css';

const Blog = () => {
  const posts = [
    {
      image: '📊',
      date: 'February 15, 2026',
      author: 'Advisory Desk',
      title: 'Understanding Life Insurance: A Complete Guide',
      excerpt:
        'Understand core policy types and how to choose a life cover structure that truly matches your family obligations.'
    },
    {
      image: '🏠',
      date: 'February 10, 2026',
      author: 'Advisory Desk',
      title: '5 Ways to Save on Home Insurance',
      excerpt:
        'Practical ways to lower premiums while keeping dependable protection and reducing out-of-pocket risk.'
    },
    {
      image: '💼',
      date: 'February 5, 2026',
      author: 'Advisory Desk',
      title: 'Essential Insurance for Small Businesses',
      excerpt:
        'Build a reliable insurance stack for your business with the right mix of liability and continuity coverage.'
    }
  ];

  return (
    <section className="blog section">
      <div className="container">
        <div className="section-title">
          <h2>Insights From Our Advisory Team</h2>
          <p>Short, practical reads to help you make better insurance and financial decisions.</p>
        </div>

        <div className="grid grid-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="blog-card card"
            >
              <div className="blog-image">{post.image}</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>
                    <FaCalendar /> {post.date}
                  </span>
                  <span>
                    <FaUser /> {post.author}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link
                  to={`/contact?subject=${encodeURIComponent(`Consultation - ${post.title}`)}`}
                  className="read-more"
                >
                  Discuss This Topic
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
