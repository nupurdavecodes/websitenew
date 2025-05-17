import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from './Button';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Background Image */}
            <div className="relative h-64 lg:h-auto bg-primary-dark">
              <img 
                src="https://images.unsplash.com/photo-1541697418880-77bc1167b98a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Consultation"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
              />
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Plan Your Return to India?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Let's work together to make your transition back to India smooth and successful. Book a consultation call to discuss your specific situation and needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Personalized Guidance</h3>
                    <p className="text-white/70">Tailored advice based on your unique circumstances and requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Comprehensive Planning</h3>
                    <p className="text-white/70">Develop a detailed roadmap for your return, covering all aspects of relocation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Ongoing Support</h3>
                    <p className="text-white/70">Continue to receive assistance and guidance throughout your transition journey.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Button to="/contact" variant="accent" className="text-dark font-bold">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;