import React from 'react';

export default function About() {
  return (
    <section className="bg-brand-dark text-white pt-4 pb-16 px-6 max-w-7xl mx-auto relative z-10">
      
      {/* 01. PAGE INDICATOR & MAIN HEADER */}
      <div className="border-b border-gray-900 pb-4 mb-12">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-brand-purple mb-2">
          <span>03.</span>
          <span className="uppercase opacity-80">Company Dossier</span>
          <div className="h-[1px] w-12 bg-brand-purple/30" />
        </div>
        <h2 className="text-4xl font-black uppercase tracking-tight">The Aurix Manifesto</h2>
      </div>

      {/* 02. EXTENSIVE TWO-COLUMN MAIN STORY LAYER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Left Column: Comprehensive Storytelling (How, When, What) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-brand-purple tracking-widest uppercase block">
              [ Chapter I // The Foundation ]
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">
              Founded In Late 2026
            </h3>
            <div className="h-[1px] w-16 bg-brand-purple/40 my-2" />
          </div>

          <div className="space-y-4 text-gray-400 text-sm leading-relaxed font-medium">
            <p>
              Aurix was officially organized in the final quarter of 2026. We did not emerge from standard corporate acceleration or deep venture financing. Instead, the blueprint for Aurix was forged in a decentralized, modular workshop layout by a rogue collective of master footwear molders, ergonomic medical researchers, and underground streetwear architects. 
            </p>
            <p>
              The industry was broken. The major international footwear distribution houses had completely abandoned functional innovation in favor of predatory, hyper-accelerated fast fashion manufacturing cycles. We saw a global street collective forced to buy footwear that looked futuristic but degraded anatomical posture, offered zero kinetic support, and collapsed under structural stress within months.
            </p>
            <p>
              We established our design center to sever ties with mass production entirely. For the first 14 months, we operated strictly in secret, analyzing structural load-displacement data, running stress trials on carbon-weave filaments, and rebuilding sneaker silhouettes from the ground up until the architecture matched our rigid expectations.
            </p>
          </div>

          <div className="space-y-2 pt-4">
            <span className="text-[10px] font-bold text-brand-purple tracking-widest uppercase block">
              [ Chapter II // What We Do ]
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">
              Engineering Human Interfaces
            </h3>
            <div className="h-[1px] w-16 bg-brand-purple/40 my-2" />
          </div>

          <div className="space-y-4 text-gray-400 text-sm leading-relaxed font-medium">
            <p>
              At Aurix, we do not merely build fashion pieces; we engineer responsive kinetic interfaces between the human body and the concrete environment. Our development team creates adaptive footwear out of specialized modular polymer structures that dynamically absorb heavy impact forces while instantly converting that downward energy into clean, forward momentum.
            </p>
            <p>
              We run a completely vertical design ecosystem. Every single yarn configuration, multi-tier mesh panel, and high-traction rubber composition is formulated inside our own local labs. By maintaining total mastery over our raw production streams, we create gear optimized for high-intensity movement, long-range urban exploration, and extreme structural durability.
            </p>
          </div>

        </div>

        {/* Right Column: Clean Picture View (No styling boxes) */}
        <div className="lg:col-span-5 w-full aspect-square select-none overflow-hidden rounded-sm">
          <img 
            src="/about.jpg" 
            alt="Custom Aurix Production Detail" 
            className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all duration-500"
            onError={(e) => {
              // Safety backup layout if your about.jpg file location is ever misplaced
              e.target.src = "/hero-shoe.png";
              e.target.className = "w-full max-w-xs mx-auto my-auto object-contain transform -rotate-12 p-8 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]";
            }}
          />
        </div>

      </div>

      {/* 03. EXTENSIVE GLOBAL IMPACT WRITE-UP (How & Why We Impact The World) */}
      <div className="border-t border-gray-900/60 pt-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-bold text-brand-purple tracking-widest uppercase block">
              [ Global Footprint ]
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">
              Our Impact & Purpose
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Why we challenge international distribution networks and how we alter the conscious manufacturing ecosystem.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6 text-gray-400 text-sm leading-relaxed font-medium">
            <p>
              We impact the world by systematically proving that ultra-premium, high-performance tactical gear can be created responsibly without relying on exploitative global supply layers. The international shoe manufacturing system is one of the leading global industrial polluters, filling up waste channels with millions of discarded plastic composites every season. 
            </p>
            <p>
              Aurix breaks this destructive feedback loop by implementing localized, low-waste manufacturing models. Our external weave units are engineered out of 100% upcycled ocean polymers and industrial nylon filaments, giving raw waste a secondary life as an ultra-strong structural frame.
            </p>
            <p>
              We drive this impact because the future requires absolute accountability. We believe a modern creator should never have to make a choice between top-tier aesthetic design, raw performance metrics, and ethical ecological preservation. We do this to set an aggressive standard that forces the rest of the footwear market to clean up their production layers or be left completely behind.
            </p>
          </div>

        </div>
      </div>

      {/* 04. CORE MANIFESTO STANDS (What We Stand For) */}
      <div className="border-t border-gray-900/60 pt-12">
        <div className="text-[10px] font-bold text-brand-purple tracking-[0.3em] uppercase mb-8">
          [ Core Pillars // What We Stand For ]
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          <div className="bg-brand-card/30 border border-gray-900 p-6 rounded-sm hover:border-brand-purple/20 transition-colors duration-300">
            <div className="text-brand-purple text-xs font-black tracking-widest mb-2">01 / STOIC COMPROMISE</div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-2">Uncompromising Performance</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              We stand for raw utility. We completely refuse to soften structural edges or weaken our material thresholds for commercial visual appeal. If a design element does not contribute directly to the stabilization or kinetic output of the wearer, it is immediately cut from the blueprint.
            </p>
          </div>

          <div className="bg-brand-card/30 border border-gray-900 p-6 rounded-sm hover:border-brand-purple/20 transition-colors duration-300">
            <div className="text-brand-purple text-xs font-black tracking-widest mb-2">02 / SERIALIZED DISTRIBUTION</div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-2">Absolute Scarcity</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              We stand against commercial oversaturation. By dropping our collections in strictly audited, limited production batches, we eliminate deadstock accumulation completely. Every pair of Aurix sneakers is serialized, tracked, and distributed directly to creators who value true design integrity.
            </p>
          </div>

          <div className="bg-brand-card/30 border border-gray-900 p-6 rounded-sm hover:border-brand-purple/20 transition-colors duration-300">
            <div className="text-brand-purple text-xs font-black tracking-widest mb-2">03 / OPEN PLATFORM</div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-2">Radical Transparency</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              We stand for direct consumer awareness. We provide clear, itemized overviews detailing our exact synthetic fabric compounds, component sources, and factory locations. We believe an elite community has a complete right to know exactly how and where their performance apparel is built.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}