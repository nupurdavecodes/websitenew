import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, we would send this to an API
    // For this demo, we'll just simulate success
    setIsSubmitted(true);
  };
  
  const services = [
    { value: '', label: 'Select a service' },
    { value: 'relocation', label: 'Relocation Consulting' },
    { value: 'family', label: 'Family Transition Support' },
    { value: 'career', label: 'Career Guidance' },
    { value: 'financial', label: 'Legal & Financial Planning' },
    { value: 'cultural', label: 'Cultural Readjustment' },
    { value: 'counseling', label: 'Personalized Counseling' },
    { value: 'other', label: 'Other' }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-semibold uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Have questions about returning to India? Ready to book a consultation? We're here to help you navigate your journey home.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                subtitle="Reach Out"
                title="Send Us a Message"
                centered={false}
              />
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-8 text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-gray-700 mb-6">
                    Your message has been received. We'll get back to you within 24-48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: ''
                      });
                      setIsSubmitted(false);
                    }}
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {services.map(service => (
                          <option key={service.value} value={service.value}>{service.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                subtitle="Contact Info"
                title="How to Reach Us"
                centered={false}
              />
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <FaPhone className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-700">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">Monday-Friday, 9AM-6PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-700">contact@nupurdave.in</p>
                    <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Location</h3>
                    <p className="text-gray-700">123 Consulting Hub</p>
                    <p className="text-gray-700">Indiranagar, Bangalore</p>
                    <p className="text-gray-700">Karnataka, India 560038</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Book a Consultation</h3>
                <p className="text-gray-700 mb-4">
                  Prefer to schedule a call directly? Use our online booking system to find a time that works for you.
                </p>
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Schedule via Calendly
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Find Us"
            title="Our Location"
            centered={true}
          />
          
          <div className="mt-8 rounded-lg overflow-hidden shadow-xl h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.944118095341!2d77.63756331482166!3d12.978345918385985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16963e3fffff%3A0x544e98058bf12923!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1622212841957!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Questions & Answers"
            title="Frequently Asked Questions"
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do I book a consultation?</h3>
                <p className="text-gray-700">
                  You can book a consultation by filling out the contact form on this page, emailing us directly at contact@nupurdave.in, or using our Calendly link to schedule a call at your convenience.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What are your consultation fees?</h3>
                <p className="text-gray-700">
                  Consultation fees vary depending on the service and package you choose. We offer both one-time consultation sessions and comprehensive packages. Please contact us for a customized quote based on your specific needs.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Do you offer virtual consultations?</h3>
                <p className="text-gray-700">
                  Yes, we offer virtual consultations via Zoom, Skype, or phone for clients located outside of Bangalore or those who prefer remote sessions. Our services are available to NRIs worldwide.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How far in advance should I start planning my return to India?</h3>
                <p className="text-gray-700">
                  We recommend starting the planning process at least 6-12 months before your intended return date. This allows sufficient time to address all aspects of your transition, from financial planning to logistical arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;