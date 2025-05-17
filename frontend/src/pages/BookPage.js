import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const BookPage = () => {
  const bookRef = useRef(null);
  const isBookInView = useInView(bookRef, { once: true, margin: "-100px" });
  
  const chaptersRef = useRef(null);
  const isChaptersInView = useInView(chaptersRef, { once: true, margin: "-100px" });
  
  const testimonialsRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  
  const chapters = [
    {
      number: 1,
      title: "The Decision to Return",
      description: "Exploring the emotional and practical aspects of deciding to return to India after years abroad."
    },
    {
      number: 2,
      title: "Preparing for the Move",
      description: "A comprehensive checklist and timeline for planning your relocation back to India."
    },
    {
      number: 3,
      title: "Financial Considerations",
      description: "Managing finances, taxes, investments, and banking when transitioning back to India."
    },
    {
      number: 4,
      title: "Housing and Location",
      description: "Strategies for selecting the right city and finding suitable housing upon your return."
    },
    {
      number: 5,
      title: "Family Adjustment",
      description: "Helping your spouse and children adapt to their new life in India."
    },
    {
      number: 6,
      title: "Education and Schools",
      description: "Navigating the Indian education system and finding the right schools for your children."
    },
    {
      number: 7,
      title: "Career and Employment",
      description: "Job hunting strategies and entrepreneurship opportunities for returning NRIs."
    },
    {
      number: 8,
      title: "Cultural Readjustment",
      description: "Understanding and managing reverse culture shock for a smoother transition."
    },
    {
      number: 9,
      title: "Healthcare and Wellness",
      description: "Accessing quality healthcare and maintaining well-being after your return."
    },
    {
      number: 10,
      title: "Building Your New Life",
      description: "Long-term strategies for thriving in India while maintaining your global perspective."
    }
  ];
  
  const reviews = [
    {
      text: "This book was my constant companion during our family's move back to India. The practical advice and emotional insights were exactly what we needed.",
      author: "Rajiv Mehta, Returned from USA"
    },
    {
      text: "I wish I had found this book earlier in our planning process. It addresses every aspect of returning to India that I could think of, and many I hadn't considered.",
      author: "Priya Sharma, Returned from UK"
    },
    {
      text: "The real-life stories from other NRIs who made the journey back were incredibly validating and helpful. I felt less alone in my challenges.",
      author: "Anil Kapoor, Returned from Canada"
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-semibold uppercase tracking-wider mb-4">
              Published Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              "Back Home: A Guide for NRIs Returning to India"
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              A comprehensive guide to navigating the complex journey of returning to India after years abroad.
            </p>
          </div>
        </div>
      </section>
      
      {/* Book Overview Section */}
      <section ref={bookRef} className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Book Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isBookInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-primary/10 rounded-lg p-10 md:p-16 relative">
                <img 
                  src="https://img.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg" 
                  alt="Back Home - A Guide for NRIs Returning to India" 
                  className="rounded-lg shadow-xl relative z-10 max-w-sm mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent rounded-lg transform rotate-6 scale-95"></div>
              </div>
            </motion.div>
            
            {/* Book Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isBookInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About the Book
              </h2>
              <p className="text-gray-700 mb-6">
                After helping hundreds of NRIs successfully return to India, I realized there was a need for a comprehensive resource that addressed both the practical and emotional aspects of repatriation. This book is the culmination of years of experience, research, and real-life stories from NRIs who have made the journey back home.
              </p>
              <p className="text-gray-700 mb-8">
                Whether you're in the early stages of considering a return or have already made the decision to move back, "Back Home" provides the guidance, tools, and insights you need to navigate this significant life transition with confidence and clarity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Publication Details</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-medium">Published:</span> January 2020</li>
                    <li><span className="font-medium">Pages:</span> 320</li>
                    <li><span className="font-medium">Language:</span> English</li>
                    <li><span className="font-medium">ISBN:</span> 978-X-XXXX-XXXX-X</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">What's Inside</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>10 comprehensive chapters</li>
                    <li>50+ personal stories</li>
                    <li>Practical checklists & worksheets</li>
                    <li>City-specific information</li>
                    <li>Resource directory</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button href="https://amazon.com" variant="primary">
                  Buy on Amazon
                </Button>
                <Button href="https://kindle.com" variant="secondary">
                  Kindle Edition
                </Button>
                <Button href="#" variant="accent">
                  Read Sample Chapter
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Chapters Section */}
      <section ref={chaptersRef} className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="What's Inside"
            title="Book Chapters"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isChaptersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full font-bold flex-shrink-0">
                    {chapter.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{chapter.title}</h3>
                    <p className="text-gray-600">{chapter.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Reader Reviews"
            title="What Readers Are Saying"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg relative"
              >
                <svg className="w-12 h-12 text-primary/20 absolute top-4 right-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                <p className="font-semibold">{review.author}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="https://amazon.com" variant="primary">
              See All Reviews on Amazon
            </Button>
          </div>
        </div>
      </section>
      
      {/* Author Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About the Author
              </h2>
              <p className="mb-6">
                Nupur Dave is a repatriation consultant, writer, and speaker who specializes in helping NRIs successfully transition back to India after years abroad. Having lived in the United States and Europe for over 15 years before returning to India, she experienced firsthand the challenges and opportunities of repatriation.
              </p>
              <p className="mb-6">
                Her personal journey inspired her to help others navigate this complex transition, leading to the founding of her consulting practice and the publication of "Back Home: A Guide for NRIs Returning to India."
              </p>
              <p className="mb-6">
                Nupur holds a Master's degree in Cross-Cultural Communication and has been featured in numerous publications for her expertise on NRI issues. She conducts regular workshops and webinars for NRIs planning their return to India.
              </p>
              <Button to="/about" variant="accent" className="text-dark font-bold">
                Learn More About Nupur
              </Button>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Nupur Dave" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </>
  );
};

export default BookPage;