import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-gray-900 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="text-2xl font-black tracking-widest text-white">
            AURI<span className="text-brand-purple">X</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
            Shoes built for motion. <br />
            Designed for presence.
          </p>
        </div>

        {/* Shop Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Shop</h4>
          <ul className="space-y-2 text-xs text-gray-400 font-medium">
            <li className="hover:text-brand-purple cursor-pointer transition-colors">All Products</li>
            <li className="hover:text-brand-purple cursor-pointer transition-colors">Running</li>
            <li className="hover:text-brand-purple cursor-pointer transition-colors">Lifestyle</li>
            <li className="hover:text-brand-purple cursor-pointer transition-colors">Basketball</li>
            <li className="hover:text-brand-purple cursor-pointer transition-colors">Limited Edition</li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Company</h4>
          <ul className="space-y-2 text-xs text-gray-400 font-medium">
            <li className="hover:text-brand-purple cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-brand-purple cursor-pointer transition-colors">Our Story</li>
            <li className="hover:text-brand-purple cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-brand-purple cursor-pointer transition-colors">Sustainability</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Subscribe</h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            Be the first to know about new drops and exclusive offers.
          </p>
          <div className="flex border border-gray-800 focus-within:border-brand-purple transition-colors">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent text-xs px-3 py-2 w-full outline-none text-white placeholder-gray-600"
            />
            <button className="bg-brand-purple hover:bg-purple-700 text-white px-4 text-xs font-bold transition-colors">
              →
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-950 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-semibold tracking-wider text-gray-500">
        <div>
          © 2026 AURIX. All rights reserved.
        </div>
        <div className="flex gap-6 uppercase">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}