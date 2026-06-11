import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import router links

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-brand-dark text-white border-b border-gray-900 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo links back to Home */}
      <Link to="/" className="text-2xl font-black tracking-widest text-white cursor-pointer select-none">
        AURI<span className="text-brand-purple">X</span>
      </Link>

      {/* Functional Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-xs font-semibold tracking-wider">
        <li>
          <Link 
            to="/" 
            className={`transition-colors uppercase ${location.pathname === '/' ? 'text-brand-purple' : 'text-gray-400 hover:text-white'}`}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link 
            to="/collection" 
            className={`transition-colors uppercase ${location.pathname === '/collection' ? 'text-brand-purple' : 'text-gray-400 hover:text-white'}`}
          >
            COLLECTION
          </Link>
        </li>
       <li>
  <Link 
    to="/about" 
    className={`transition-colors uppercase ${location.pathname === '/about' ? 'text-brand-purple' : 'text-gray-400 hover:text-white'}`}
  >
    ABOUT
  </Link>
</li>
        <li>
  <Link 
    to="/contact" 
    className={`transition-colors uppercase ${location.pathname === '/contact' ? 'text-brand-purple' : 'text-gray-400 hover:text-white'}`}
  >
    CONTACT
  </Link>
</li>
      </ul>

      {/* Actions */}
      <div className="flex items-center space-x-5">
        <Link 
          to="/collection" 
          className="bg-brand-purple hover:bg-purple-700 transition-colors text-white text-xs font-bold px-4 py-2 uppercase tracking-wider"
        >
          Shop Now
        </Link>
      </div>
    </nav>
  );
}