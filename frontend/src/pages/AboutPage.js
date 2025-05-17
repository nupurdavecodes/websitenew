import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const AboutPage = () => {
  const bioRef = useRef(null);
  const isBioInView = useInView(bioRef, { once: true, margin: "-100px" });
  
  const journeyRef = useRef(null);
  const isJourneyInView = useInView(journeyRef, { once: true, margin: "-100px" });
  
  const achievements = [
    "Published author of 'Back Home: A Guide for NRIs Returning to India'",
    "Helped over 1000+ NRI families successfully return to India",
    "Featured in major publications including Times of India and Hindustan Times",
    "Conducted 50+ workshops for NRIs across the US, UK, and UAE",
    "Partnered with 10+ relocation and immigration service providers",
    "Professional background in cross-cultural consulting and career coaching"
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-semibold uppercase tracking-wider mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Helping NRIs Navigate Their Return Journey
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Dedicated to making the transition back to India smoother for Non-Resident Indians through personalized guidance and expert consulting.
            </p>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div ref={bioRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isBioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                alt="Nupur Dave" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isBioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                subtitle="My Story"
                title="Meet Nupur Dave"
                centered={false}
              />
              <p className="text-gray-700 mb-6">
                Having lived abroad for over 15 years before returning to India, I experienced firsthand the challenges and complexities of repatriation. What seemed like a simple move back home turned into a transformative journey filled with unexpected obstacles and learning experiences.
              </p>
              <p className="text-gray-700 mb-6">
                My own transition sparked a passion for helping other NRIs navigate this significant life change. With a background in cross-cultural consulting and personal experience, I founded this consulting service to provide the guidance I wish I had during my own return journey.
              </p>
              <p className="text-gray-700 mb-6">
                Today, I've helped over 1000 families successfully return to India, authored a comprehensive guide book, and continue to advocate for smoother transitions for NRIs worldwide.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="My Journey"
            title="From NRI to Repatriation Expert"
            centered={true}
          />
          
          <div ref={journeyRef} className="mt-12 max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {/* Item 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-primary font-semibold">2000 - 2015</span>
                      <h3 className="text-xl font-bold mt-2 mb-3">Life Abroad</h3>
                      <p className="text-gray-600">
                        Spent 15 years living and working across the US and Europe, building a successful career in corporate consulting.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-8 w-8 h-8 rounded-full bg-primary border-4 border-white"></div>
                  <div className="md:w-1/2 md:pl-16"></div>
                </motion.div>
                
                {/* Item 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 md:pr-16"></div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-8 w-8 h-8 rounded-full bg-primary border-4 border-white"></div>
                  <div className="md:w-1/2 md:pl-16 mb-6 md:mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-primary font-semibold">2015</span>
                      <h3 className="text-xl font-bold mt-2 mb-3">The Return</h3>
                      <p className="text-gray-600">
                        Decided to move back to India and faced numerous challenges during the repatriation process that inspired my future work.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Item 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-primary font-semibold">2017</span>
                      <h3 className="text-xl font-bold mt-2 mb-3">Consulting Service Launch</h3>
                      <p className="text-gray-600">
                        Launched specialized consulting services for NRIs, drawing from personal experience and professional expertise.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-8 w-8 h-8 rounded-full bg-primary border-4 border-white"></div>
                  <div className="md:w-1/2 md:pl-16"></div>
                </motion.div>
                
                {/* Item 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 md:pr-16"></div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-8 w-8 h-8 rounded-full bg-primary border-4 border-white"></div>
                  <div className="md:w-1/2 md:pl-16 mb-6 md:mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-primary font-semibold">2020</span>
                      <h3 className="text-xl font-bold mt-2 mb-3">Book Publication</h3>
                      <p className="text-gray-600">
                        Published "Back Home: A Guide for NRIs Returning to India" based on extensive research and client experiences.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Item 5 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-primary font-semibold">Present</span>
                      <h3 className="text-xl font-bold mt-2 mb-3">Expanding Impact</h3>
                      <p className="text-gray-600">
                        Continuing to grow the practice, hosting workshops internationally, and developing new resources for the NRI community.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-8 w-8 h-8 rounded-full bg-primary border-4 border-white"></div>
                  <div className="md:w-1/2 md:pl-16"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CTA />
    </>
  );
};

export default AboutPage;