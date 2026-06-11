import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  // State to control if the origin story dossier modal is open or closed
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <section className="relative bg-brand-dark text-white pt-4 pb-8 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Design Detail: Subtle Tech Grid Lines Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Design Detail: Top Page Indicator */}
      <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-brand-purple mb-6 relative z-10">
        <span>01.</span>
        <span className="uppercase opacity-80">Home Page</span>
        <div className="h-[1px] w-12 bg-brand-purple/30" />
      </div>

      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10 relative z-10">
        
        {/* Left Section: Expanded Typography & Premium Content Story */}
        <div className="space-y-6">
          {/* Subtle Tagline Above Header */}
          <div className="text-[11px] font-bold tracking-[0.3em] text-gray-500 uppercase flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-brand-purple rounded-full animate-ping" />
            New Season Drop / Series Alpha
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none uppercase">
            Move Different.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">
              Wear Aurix.
            </span>
          </h1>
          
          {/* Expanded Copy Stream */}
          <div className="space-y-4 max-w-xl text-gray-400 text-sm leading-relaxed font-medium">
            <p>
              Aurix is born at the intersection of high-performance technical engineering and clean, aggressive streetwear architecture. We don't build footwear for the masses; we craft responsive gear for creators, runners, and urban explorers who define their own pace in a rapid world.
            </p>
            <p className="hidden md:block text-gray-500 text-xs">
              Every curve, fabric layer, and stitching metric is calculated to deliver absolute freedom of motion. Utilizing an adaptive cellular structure, our designs absorb high-impact shock while providing unprecedented lightweight kinetic energy return with every step you take.
            </p>
            <p className="border-l-2 border-brand-purple/40 pl-4 text-xs italic text-gray-400">
              "The goal wasn't just to build a sneaker you wear, but to engineer an interface between your feet and the concrete world." — Aurix Design Lab
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/collection">
              <button className="bg-brand-purple hover:bg-purple-700 transition-all duration-300 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/40 cursor-pointer">
                Explore Collection
              </button>
            </Link>
            
            <button 
              onClick={() => setIsStoryOpen(true)}
              className="border border-gray-800 hover:border-gray-600 bg-brand-dark/50 hover:bg-brand-card transition-all duration-300 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 flex items-center gap-2 cursor-pointer"
            >
              Watch Story
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3 text-brand-purple">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section: Maximized Shoe Size & Expanded Ambient Glow */}
        <div className="relative flex justify-center items-center py-2 select-none w-full">
          {/* Deep ambient fog layout */}
          <div className="absolute w-80 h-80 md:w-[500px] md:h-[500px] bg-brand-purple/20 rounded-full blur-[100px] md:blur-[130px] z-0 pointer-events-none" />
          
          {/* Transparent Sneaker PNG */}
          <img 
            src="/hero-shoe.png" 
            alt="Aurix Premium Sneaker" 
            className="w-full max-w-sm md:max-w-lg object-contain z-10 transform -rotate-12 hover:rotate-[-3deg] transition-transform duration-700 ease-out filter drop-shadow-[0_35px_45px_rgba(0,0,0,0.95)]"
          />
        </div>
      </div>

      {/* Statistics Counter Row */}
      <div className="grid grid-cols-3 gap-4 max-w-lg mb-10 border-t border-b border-gray-900/40 py-4 relative z-10">
        <div>
          <div className="text-xl md:text-2xl font-black tracking-tight text-white">10K+</div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mt-0.5">Happy Customers</div>
        </div>
        <div>
          <div className="text-xl md:text-2xl font-black tracking-tight text-white">50+</div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mt-0.5">Countries</div>
        </div>
        <div>
          <div className="text-xl md:text-2xl font-black tracking-tight text-white">25+</div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mt-0.5">Limited Drops</div>
        </div>
      </div>

      {/* Info Perks Grid (Bottom Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-900/60 pt-8 relative z-10">
        
        {/* Feature 1 */}
        <div className="group flex items-start gap-3 p-1 rounded-lg transition-colors duration-300 hover:bg-brand-card/30">
          <div className="text-brand-purple p-2 bg-brand-card border border-gray-900 rounded-sm group-hover:border-brand-purple/30 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-0.5 text-white group-hover:text-brand-purple transition-colors">Lightweight</h3>
            <p className="text-gray-400 text-[11px] leading-relaxed">Engineered for all-day performance and absolute freedom.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="group flex items-start gap-3 p-1 rounded-lg transition-colors duration-300 hover:bg-brand-card/30">
          <div className="text-brand-purple p-2 bg-brand-card border border-gray-900 rounded-sm group-hover:border-brand-purple/30 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l-4.64 4.64A2.652 2.652 0 0 1 3 16.065l4.64-4.64a4.914 4.914 0 0 0 5.34 4.635ZM11.42 15.17 15.17 11.42M15.17 11.42l5.877-5.877A2.652 2.652 0 0 0 17.25 2l-5.877 5.877M15.17 11.42a4.914 4.914 0 0 0-4.635-5.34l-4.64 4.64a2.652 2.652 0 0 0 3.75 3.75l4.64-4.64Z" /></svg>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-0.5 text-white group-hover:text-brand-purple transition-colors">Premium Materials</h3>
            <p className="text-gray-400 text-[11px] leading-relaxed">Crafted with high-tech mesh fabrics and premium components.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="group flex items-start gap-3 p-1 rounded-lg transition-colors duration-300 hover:bg-brand-card/30">
          <div className="text-brand-purple p-2 bg-brand-card border border-gray-900 rounded-sm group-hover:border-brand-purple/30 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" /></svg>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-0.5 text-white group-hover:text-brand-purple transition-colors">Built to Last</h3>
            <p className="text-gray-400 text-[11px] leading-relaxed">Durable outer sole grip units built for every daily stride.</p>
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* BRAND ORIGIN STORY CUSTOM MODAL LAYOUT                    */}
      {/* ========================================================= */}
      {isStoryOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex justify-center items-center z-50 p-4 md:p-8 animate-fadeIn">
          <div className="relative w-full max-w-5xl bg-brand-card border border-gray-900 p-6 md:p-10 rounded-sm shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Top Close Button */}
            <button 
              onClick={() => setIsStoryOpen(false)}
              className="absolute top-4 right-6 text-gray-500 hover:text-brand-purple font-bold text-xs uppercase tracking-widest cursor-pointer transition-colors"
            >
              Close Story ✕
            </button>

            {/* Two-Column Story Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-4">
              
              {/* Left Column: Story Typography Write-up */}
              <div className="space-y-4 text-left">
                <span className="text-[10px] font-bold text-brand-purple tracking-[0.3em] uppercase block">
                  Est. 2026 / Laboratory Genesis
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                  The Genesis of Aurix
                </h3>
                <div className="h-[1px] w-16 bg-brand-purple/40 my-2" />
                
                <div className="space-y-3 text-gray-400 text-xs md:text-sm leading-relaxed">
                  <p>
                    Aurix didn't start in a corporate boardroom—it began in a cramped modular garage workshop under the neon haze of late-night design sessions. Our founders, a collective of technical footwear engineers and progressive apparel designers, grew tired of the stagnant sneaker market that prioritized mass-production over tactical performance.
                  </p>
                  <p>
                    The mission was simple yet radical: build a high-performance shoe that behaves like a second skin while projecting a hyper-modern urban aesthetic. We spent 14 months prototyping raw cellular frameworks, adjusting impact curves by fractions of a millimeter.
                  </p>
                  <p>
                    On the twelfth trial iteration, the signature kinetic energy matrix clicked into place. Aurix was officially born—engineered not just to follow trends, but to physically move different.
                  </p>
                </div>
              </div>

              {/* Right Column: Clean Custom Image Container */}
              <div className="relative w-full aspect-square bg-brand-dark border border-gray-900 flex justify-center items-center overflow-hidden rounded-sm select-none">
                <img 
                  src="/your-story-image.png" 
                  alt="Aurix Design Blueprint Prototype" 
                  className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all duration-500"
                  onError={(e) => {
                    // Safety backup display if your file is not uploaded yet
                    e.target.src = "/hero-shoe.png";
                    e.target.className = "w-full max-w-xs object-contain transform rotate-12 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]";
                  }}
                />
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}