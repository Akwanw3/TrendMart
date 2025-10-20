import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12 pt-10 pb-6">
      <div className="container mx-auto px-4">
        
        {/* Top Section: Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-700 pb-8 mb-8">
          
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center text-2xl font-bold text-indigo-400 hover:text-indigo-300">
              <ShoppingBag className="mr-2" />
              TrendMart
            </Link>
            <p className="mt-2 text-gray-400 max-w-sm text-sm">
              Your modern destination for the latest trends in tech, apparel, and jewelry. 
              Built with React, Tailwind, and a passion for clean UI.
            </p>
          </div>

          {/* Navigation Links Group */}
          <div className="grid grid-cols-2 gap-8 md:gap-x-16">
            <div>
              <h3 className="text-lg font-semibold mb-3">Shop</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Products</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
                <li><Link to="/cart" className="hover:text-white transition-colors">Cart</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TrendMart. All rights reserved. Project by Developer.
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;