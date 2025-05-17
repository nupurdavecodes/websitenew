import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';

const Book = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-primary/10 rounded-lg p-6 md:p-10">
              <img 
                src="https://img.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg" 
                alt="Back Home - A Guide for NRIs Returning to India" 
                className="rounded-lg shadow-xl relative z-10 w-full max-w-sm mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent rounded-lg transform rotate-6 scale-95"></div>
            </div>
          </motion.div>
          
          {/* Book Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold uppercase tracking-wider mb-4">
              Published Book
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              "Back Home: A Guide for NRIs Returning to India"
            </h2>
            <p className="text-gray-700 mb-6">
              This comprehensive guide addresses the challenges and opportunities that await NRIs planning to return to India. From emotional readjustment to practical matters like housing, schools, and career transitions, this book offers valuable insights based on real experiences.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Personal stories from 50+ NRI families</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Practical checklists and timelines</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Expert guidance on financial planning</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>City-specific information and resources</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button href="https://amazon.com" variant="primary">
                Buy on Amazon
              </Button>
              <Button to="/book" variant="secondary">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Book;