import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const FeaturedIn = () => {
  const features = [
    { name: 'Times of India', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_Times_of_India_logo.png/1280px-The_Times_of_India_logo.png' },
    { name: 'Hindustan Times', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Hindustan_Times_logo.svg/1280px-Hindustan_Times_logo.svg.png' },
    { name: 'The Hindu', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/The_Hindu_logo.svg/1280px-The_Hindu_logo.svg.png' },
    { name: 'India Today', logo: 'https://cdn.indiatvnews.com/itlogo/it_logo.png' },
    { name: 'Economic Times', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/The_Economic_Times_logo.svg/1280px-The_Economic_Times_logo.svg.png' }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Recognition"
          title="Featured In"
          centered={true}
        />
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {features.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={item.logo} 
                alt={`${item.name} logo`} 
                className="h-8 md:h-10 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;