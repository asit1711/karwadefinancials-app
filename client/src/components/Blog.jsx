import { motion } from 'framer-motion';
import { FaCalendar, FaUser } from 'react-icons/fa';
import '../styles/Blog.css';

const Blog = () => {
  const posts = [
    {
      image: '📊',
      date: 'February 15, 2026',
      author: 'Admin',
      title: 'Understanding Life Insurance: A Complete Guide',
      excerpt: 'Learn about different types of life insurance and how to choose the right coverage for your family\'s needs.'
    },
    {
      image: '🏠',
      date: 'February 10, 2026',
      author: 'Admin',
      title: '5 Ways to Save on Home Insurance',
      excerpt: 'Discover practical tips to reduce your home insurance premiums while maintaining comprehensive coverage.'
    },
    {
      image: '💼',
      date: 'February 5, 2026',
      author: 'Admin',
      title: 'Essential Insurance for Small Businesses',
      excerpt: 'Protect your business with the right insurance coverage. Learn what policies every small business needs.'
    }
  ];

  return (
    <section className="blog section">
      <div className="container">
        <div className="section-title">
          <h2>Latest From Our Blog</h2>
          <p>Stay informed with the latest news and insights about insurance and financial planning.</p>
        </div>
        
        <div className="grid grid-3">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="blog-card card"
            >
              <div className="blog-image">{post.image}</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><FaCalendar /> {post.date}</span>
                  <span><FaUser /> {post.author}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
