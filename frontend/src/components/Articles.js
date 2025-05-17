import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import Button from './Button';

const ArticleCard = ({ article, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/articles/${article.slug}`}>
        <div className="overflow-hidden rounded-lg mb-4">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="space-y-2">
          <span className="inline-block text-sm text-primary font-medium">{article.category}</span>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{article.title}</h3>
          <p className="text-gray-600">{article.excerpt}</p>
          <span className="inline-block text-sm text-gray-500">
            {article.date} • {article.readTime} min read
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const Articles = () => {
  const articles = [
    {
      slug: "preparing-children-for-transition",
      title: "Preparing Your Children for the Transition Back to India",
      excerpt: "Tips and strategies to help your children adapt to the new environment, culture, and education system in India.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80",
      category: "Family",
      date: "May 15, 2023",
      readTime: 6
    },
    {
      slug: "financial-planning-nri-return",
      title: "Financial Planning for NRIs: What to Consider Before Returning",
      excerpt: "Essential financial considerations, from tax implications to investment strategies, for a smooth transition back to India.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Finance",
      date: "April 28, 2023",
      readTime: 8
    },
    {
      slug: "cultural-shock-returning-nris",
      title: "Reverse Cultural Shock: What Returning NRIs Need to Know",
      excerpt: "Understanding and navigating the cultural differences and challenges faced by NRIs returning to India after years abroad.",
      image: "https://images.unsplash.com/photo-1598539962625-6c7e59a5c7a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "Culture",
      date: "March 12, 2023",
      readTime: 7
    }
  ];
  
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Latest Insights"
          title="Articles for NRIs"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.slug}
              article={article}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button to="/articles" variant="primary">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;