import Hero from '../components/Hero';
import FeaturedIn from '../components/FeaturedIn';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Book from '../components/Book';
import Articles from '../components/Articles';
import Newsletter from '../components/Newsletter';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedIn />
      <Services />
      <Testimonials />
      <Book />
      <Articles />
      <Newsletter />
      <CTA />
    </>
  );
};

export default HomePage;