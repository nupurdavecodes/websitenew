import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Returned from USA after 12 years",
    quote: "Nupur's guidance made our transition back to India so much smoother than we expected. Her insights on schools for our children and navigating the property market were invaluable.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    name: "Amit Patel",
    role: "Returned from UK after 8 years",
    quote: "I was anxious about resuming my career in India after so many years abroad. Nupur's career counseling and networking strategies helped me secure a great position within just two months.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Deepa and Rajesh Kapoor",
    role: "Family returned from Canada",
    quote: "Nupur's holistic approach to repatriation addressed not just the logistical aspects but also the emotional challenges our family faced. Her book was our bible throughout the process!",
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    id: 4,
    name: "Sanjay Mehta",
    role: "Entrepreneur returned from Singapore",
    quote: "As someone planning to start a business upon return, Nupur's insights into India's business landscape and regulatory environment were crucial for my successful launch.",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonialsRef = useRef(null);
  const isInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section bg-primary text-white">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Success Stories"
          title="What My Clients Say"
          centered={true}
          className="text-white"
        />
        
        <div ref={testimonialsRef} className="relative mt-12 overflow-hidden">
          <FaQuoteLeft className="text-white/10 text-9xl absolute top-0 left-0" />
          
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === current ? 1 : 0,
                  x: index === current ? 0 : (index < current ? '-100%' : '100%')
                }}
                transition={{ duration: 0.5 }}
                className={`${index === current ? 'block' : 'hidden'} max-w-4xl mx-auto`}
              >
                <div className="flex flex-col items-center text-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-6 border-4 border-white"
                  />
                  <p className="text-xl lg:text-2xl italic mb-6">"{testimonial.quote}"</p>
                  <h4 className="font-bold text-xl">{testimonial.name}</h4>
                  <p className="text-primary-light">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10 gap-4">
            <button 
              onClick={prev}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={next}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <FaArrowRight />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;