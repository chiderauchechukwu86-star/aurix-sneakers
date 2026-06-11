import React from 'react';
import { useCart } from '../context/CartContext';

// Dataset pointing directly to your downloaded public folder images
const SNEAKER_DATA = [
  { id: 1, name: 'AURIX V1 NEON', price: '$180', category: 'RUNNING', img: '/shoe1.png' },
  { id: 2, name: 'AURIX STEALTH ECLIPSE', price: '$195', category: 'LIFESTYLE', img: '/shoe2.png' },
  { id: 3, name: 'AURIX PHANTOM PURPLE', price: '$210', category: 'LIMITED', img: '/shoe3.png' },
  { id: 4, name: 'AURIX APEX KINETIC', price: '$175', category: 'RUNNING', img: '/shoe4.png' },
  { id: 5, name: 'AURIX CYBER GHOST', price: '$220', category: 'LIMITED', img: '/shoe5.png' },
  { id: 6, name: 'AURIX STREET CORE V2', price: '$160', category: 'LIFESTYLE', img: '/shoe6.png' },
];

export default function Collection() {
  const { addToCart } = useCart();

  return (
    <section className="bg-brand-dark text-white pt-4 pb-12 px-6 max-w-7xl mx-auto relative z-10">
      
      {/* Page Header Area */}
      <div className="border-b border-gray-900 pb-4 mb-12">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-brand-purple mb-2">
          <span>02.</span>
          <span className="uppercase opacity-80">Catalog Database</span>
          <div className="h-[1px] w-12 bg-brand-purple/30" />
        </div>
        <h2 className="text-3xl font-black uppercase tracking-tight">The Series Alpha Array</h2>
      </div>

      {/* Main Shoes Array Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SNEAKER_DATA.map((shoe) => (
          <div 
            key={shoe.id} 
            className="group bg-brand-card border border-gray-900 p-4 rounded-sm hover:border-gray-800 transition-all duration-300 flex flex-col justify-between"
          >
            
            {/* Visual Presentation Frame Wrapper */}
            <div className="relative aspect-square w-full bg-brand-dark flex justify-center items-center overflow-hidden mb-4 rounded-sm p-4 select-none">
              <span className="absolute top-3 left-3 text-[9px] font-bold text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded-sm tracking-wider uppercase">
                {shoe.category}
              </span>
              <img 
                src={shoe.img} 
                alt={shoe.name} 
                className="w-full max-w-[180px] object-contain transform group-hover:scale-105 group-hover:-rotate-3 transition-all duration-500 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)]"
                onError={(e) => {
                  // Standard backup display icon in case a file name doesn't match perfectly
                  e.target.src = "/hero-shoe.png";
                }}
              />
            </div>

            {/* Typography Description & Bottom Row */}
            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-black tracking-wider uppercase text-white group-hover:text-brand-purple transition-colors">
                  {shoe.name}
                </h4>
                <p className="text-gray-500 font-mono text-xs mt-0.5">{shoe.price}</p>
              </div>

              {/* Functional Add Action Button */}
              <button 
                onClick={() => addToCart(shoe)}
                className="w-full border border-gray-800 hover:border-brand-purple bg-brand-dark/40 group-hover:bg-brand-purple text-white font-bold text-[10px] uppercase tracking-widest py-2.5 transition-all duration-300 flex justify-center items-center gap-2 cursor-pointer"
              >
                Add To Cart
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}