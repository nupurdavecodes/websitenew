import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nupur Dave</h3>
            <p className="mb-4">
              Helping NRIs transitioning back to India with expert guidance and personalized consulting services.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/articles" className="hover:text-accent transition-colors">Articles</Link></li>
              <li><Link to="/book" className="hover:text-accent transition-colors">Book</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-accent transition-colors">Relocation Consulting</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Family Transition</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Career Guidance</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Legal & Financial</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Cultural Readjustment</Link></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">Bangalore, India</p>
            <p className="mb-2">contact@nupurdave.in</p>
            <p className="mb-4">+91 98765 43210</p>
            <Link to="/contact" className="bg-white text-primary px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="border-t border-green-600 mt-12 pt-8 text-center">
          <p>© {currentYear} Nupur Dave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;