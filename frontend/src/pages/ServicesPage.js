import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const ServiceSection = ({ service, index, isEven }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className={`py-16 ${isEven ? 'bg-secondary' : 'bg-white'}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image (Left for even, Right for odd) */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
            transition={{ duration: 0.6 }}
            className={`${!isEven && 'lg:order-2'}`}
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          
          {/* Content (Right for even, Left for odd) */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
            transition={{ duration: 0.6 }}
            className={`${!isEven && 'lg:order-1'}`}
          >
            <span className="inline-block text-primary font-semibold uppercase tracking-wider mb-4">
              Service {index + 1}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {service.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {service.description}
            </p>
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button to="/contact" variant="primary">
              Book This Service
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Relocation Consulting",
      description: "Comprehensive guidance for NRIs planning to move back to India, covering all aspects of the relocation process from initial planning to final settlement.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "Personalized relocation timeline and checklist",
        "Documentation and paperwork guidance",
        "City selection and housing recommendations",
        "Shipping and logistics coordination",
        "Post-arrival support and integration assistance"
      ]
    },
    {
      title: "Family Transition Support",
      description: "Specialized support for families, particularly focusing on helping children adapt to their new environment, education system, and cultural context in India.",
      image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "School selection and admission assistance",
        "Cultural adjustment programs for children",
        "Family counseling sessions",
        "Extracurricular activities and community integration",
        "Parent support groups and resources"
      ]
    },
    {
      title: "Career Guidance",
      description: "Expert advice on career opportunities, job market trends, and professional networking in India, helping NRIs navigate their professional transition successfully.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "Job market analysis and industry trends",
        "Resume and LinkedIn profile optimization",
        "Interview preparation and salary negotiation",
        "Networking strategies and introductions",
        "Entrepreneurship and business setup guidance"
      ]
    },
    {
      title: "Legal & Financial Planning",
      description: "Assistance with legal and financial matters, including tax planning, property acquisition, and investment options to ensure a financially smooth transition back to India.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      features: [
        "Tax implications and planning strategies",
        "Property purchase and rental guidance",
        "Investment options and wealth management",
        "Banking and financial account setup",
        "Insurance and healthcare planning"
      ]
    },
    {
      title: "Cultural Readjustment",
      description: "Helping NRIs navigate the cultural differences and readjust to life in India after years abroad, addressing the phenomenon of reverse culture shock.",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      features: [
        "Reverse culture shock management",
        "Community integration strategies",
        "Local customs and etiquette refreshers",
        "Language and communication adaptation",
        "Social networking opportunities"
      ]
    },
    {
      title: "Personalized Counseling",
      description: "One-on-one sessions to address specific concerns and challenges faced during the transition process, providing emotional support and practical solutions.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "Initial assessment and goal setting",
        "Regular progress check-ins",
        "Crisis management and problem-solving",
        "Emotional support and stress management",
        "Long-term adjustment strategies"
      ]
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-semibold uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert NRI Consulting Services
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Comprehensive services designed to address every aspect of your transition back to India, ensuring a smooth and successful repatriation experience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Sections */}
      {services.map((service, index) => (
        <ServiceSection
          key={index}
          service={service}
          index={index}
          isEven={index % 2 === 0}
        />
      ))}
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="How It Works"
            title="Our Consulting Process"
            centered={true}
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative flex flex-col">
              {/* Process Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary ml-6 md:ml-8"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold z-10">
                    1
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">Initial Consultation</h3>
                    <p className="text-gray-600">
                      We begin with a comprehensive consultation to understand your unique situation, goals, and concerns regarding your return to India.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold z-10">
                    2
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">Personalized Plan Development</h3>
                    <p className="text-gray-600">
                      Based on our initial assessment, we create a tailored plan that addresses your specific needs and provides a clear roadmap for your transition.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold z-10">
                    3
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">Implementation Support</h3>
                    <p className="text-gray-600">
                      We provide ongoing guidance and support as you implement your plan, helping you navigate challenges and make necessary adjustments along the way.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold z-10">
                    4
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">Post-Arrival Assistance</h3>
                    <p className="text-gray-600">
                      Our support continues after you arrive in India, helping you and your family settle in and adjust to your new environment.
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="flex">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold z-10">
                    5
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">Long-Term Follow-Up</h3>
                    <p className="text-gray-600">
                      We check in regularly to ensure your transition continues smoothly and address any new challenges that may arise during your reintegration process.
                    </p>
                  </div>
                </div>
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

export default ServicesPage;