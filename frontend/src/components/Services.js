import { motion } from 'framer-motion';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';

const ServiceCard = ({ icon, title, description, delay, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <span className="text-primary text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button to="/services" variant="secondary" className="mt-2">
        Learn More
      </Button>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "🏡",
      title: "Relocation Consulting",
      description: "Comprehensive guidance for NRIs planning to move back to India, covering all aspects of the relocation process."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Transition",
      description: "Support for families, especially children, to adjust to the new environment, culture, and education system."
    },
    {
      icon: "💼",
      title: "Career Guidance",
      description: "Expert advice on career opportunities, job market trends, and professional networking in India."
    },
    {
      icon: "📝",
      title: "Legal & Financial",
      description: "Assistance with legal and financial matters, including tax planning, property acquisition, and investment options."
    },
    {
      icon: "🏛️",
      title: "Cultural Readjustment",
      description: "Helping NRIs navigate the cultural differences and readjust to life in India after years abroad."
    },
    {
      icon: "🤝",
      title: "Personalized Counseling",
      description: "One-on-one sessions to address specific concerns and challenges faced during the transition process."
    }
  ];
  
  return (
    <section className="section bg-secondary">
      <div className="container-custom">
        <SectionTitle 
          subtitle="What I Offer"
          title="Specialized Services for NRIs"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button to="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;