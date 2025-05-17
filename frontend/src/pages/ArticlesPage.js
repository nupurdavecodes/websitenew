import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Newsletter from '../components/Newsletter';

// Mock data for articles
const allArticles = [
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
  },
  {
    slug: "job-hunting-strategies",
    title: "Job Hunting Strategies for NRIs Returning to India",
    excerpt: "Practical advice and strategies for finding suitable employment opportunities upon your return to India.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Career",
    date: "February 22, 2023",
    readTime: 9
  },
  {
    slug: "housing-options-returnees",
    title: "Housing Options for NRIs: Rent or Buy Upon Return?",
    excerpt: "An analysis of the pros and cons of renting versus buying property when returning to India as an NRI.",
    image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Housing",
    date: "January 18, 2023",
    readTime: 7
  },
  {
    slug: "healthcare-system-navigation",
    title: "Navigating India's Healthcare System as a Returning NRI",
    excerpt: "A comprehensive guide to understanding and accessing healthcare services in India after years abroad.",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Healthcare",
    date: "December 5, 2022",
    readTime: 6
  },
  {
    slug: "maintaining-global-identity",
    title: "Maintaining Your Global Identity While Reintegrating in India",
    excerpt: "How to preserve the global perspective and experiences you've gained abroad while embracing your return to India.",
    image: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Identity",
    date: "November 14, 2022",
    readTime: 5
  },
  {
    slug: "education-system-comparison",
    title: "International vs. Indian Education: Helping Your Child Adjust",
    excerpt: "A comparison of educational systems and strategies to help your children transition smoothly to Indian schools.",
    image: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Education",
    date: "October 20, 2022",
    readTime: 8
  },
  {
    slug: "banking-investments-nri",
    title: "Banking and Investment Options for Returning NRIs",
    excerpt: "An overview of banking services, investment opportunities, and financial management strategies for NRIs moving back to India.",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    category: "Finance",
    date: "September 8, 2022",
    readTime: 7
  }
];

// Categories for filtering
const categories = [
  "All",
  "Family",
  "Finance",
  "Culture",
  "Career",
  "Housing",
  "Healthcare",
  "Identity",
  "Education"
];

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/articles/${article.slug}`}>
        <div className="overflow-hidden h-56">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <span className="inline-block text-sm text-primary font-medium mb-2">{article.category}</span>
          <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">{article.title}</h3>
          <p className="text-gray-600 mb-4">{article.excerpt}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{article.date}</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

const ArticlesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter articles based on category and search query
  const filteredArticles = allArticles.filter(article => {
    // Filter by category
    const categoryMatch = activeCategory === "All" || article.category === activeCategory;
    
    // Filter by search query
    const searchMatch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-semibold uppercase tracking-wider mb-4">
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Articles for NRIs
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Insights, tips, and guidance for Non-Resident Indians planning their return to India or navigating post-return challenges.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full py-3 px-4 pl-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <svg className="w-6 h-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Articles Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <Newsletter />
    </>
  );
};

export default ArticlesPage;