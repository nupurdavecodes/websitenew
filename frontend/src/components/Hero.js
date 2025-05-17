import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary rounded-full"></div>
        <div className="absolute -left-24 bottom-1/3 w-64 h-64 bg-accent rounded-full"></div>
        <div className="absolute right-1/3 -bottom-24 w-80 h-80 bg-primary-light rounded-full"></div>
      </div>
      
      <div className="container-custom relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-primary font-semibold uppercase tracking-wider mb-4">
              Expert NRI Consulting
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Guiding NRIs on Their Journey Home
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Specialized consulting services for Non-Resident Indians planning their transition back to India, making the journey smoother and more successful.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary">
                Book a Consultation
              </Button>
              <Button to="/services" variant="secondary">
                Explore Services
              </Button>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
              alt="NRI returning to India" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="font-semibold">Trusted by 1000+ NRIs</p>
              </div>
              <p className="text-sm text-gray-600">Expert guidance for a smooth transition back to India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;