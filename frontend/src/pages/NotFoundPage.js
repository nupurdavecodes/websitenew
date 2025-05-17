import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen flex items-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn btn-primary">
              Return Home
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;