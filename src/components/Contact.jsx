import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate high-tech form ingestion
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section className="bg-brand-dark text-white pt-4 pb-16 px-6 max-w-7xl mx-auto relative z-10">
      
      {/* 01. PAGE INDICATOR & HEADER */}
      <div className="border-b border-gray-900 pb-4 mb-12">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-brand-purple mb-2">
          <span>04.</span>
          <span className="uppercase opacity-80">Secure Channel</span>
          <div className="h-[1px] w-12 bg-brand-purple/30" />
        </div>
        <h2 className="text-4xl font-black uppercase tracking-tight">Establish Contact</h2>
      </div>

      {/* 02. SPLIT INTERFACE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Secure Communications Form Ingestion */}
        <div className="lg:col-span-7 bg-brand-card/20 border border-gray-900 p-6 md:p-10 rounded-sm">
          <div className="mb-6">
            <h3 className="text-lg font-black uppercase tracking-wider text-white">Transmission Node</h3>
            <p className="text-gray-500 text-xs mt-1">Fields must be fully verified before sending to the database matrix.</p>
          </div>

          {submitted ? (
            <div className="border border-brand-purple/30 bg-brand-purple/10 p-6 rounded-sm animate-fadeIn">
              <div className="text-brand-purple text-xs font-black tracking-widest uppercase mb-1">
                // DATA ENCRYPTED & SENT
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Your message has been processed through the system queue. The design laboratory team will respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Identity Name
                </label>
                <input 
                  type="text" 
                  required
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full bg-brand-dark border border-gray-800 focus:border-brand-purple focus:outline-none p-3 text-sm text-white rounded-sm transition-colors"
                  placeholder="e.g. ALEX CHEN"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Digital Mail Address
                </label>
                <input 
                  type="email" 
                  required
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  className="w-full bg-brand-dark border border-gray-800 focus:border-brand-purple focus:outline-none p-3 text-sm text-white rounded-sm transition-colors"
                  placeholder="name@domain.com"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Message Payload
                </label>
                <textarea 
                  rows="5"
                  required
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full bg-brand-dark border border-gray-800 focus:border-brand-purple focus:outline-none p-3 text-sm text-white rounded-sm transition-colors resize-none"
                  placeholder="Describe your design request, order inquiry, or collaboration parameters..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-purple hover:bg-purple-700 transition-all duration-300 text-white font-bold text-xs uppercase tracking-widest py-4 shadow-lg shadow-brand-purple/10 hover:shadow-brand-purple/20 cursor-pointer"
              >
                Transmit Payload
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Laboratory Headquarters Details */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="border-l-2 border-brand-purple/40 pl-6 space-y-2">
            <div className="text-[10px] font-mono text-gray-500 tracking-widest">// LOC_01 // CORE LAB</div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white">Physical Inquiries</h4>
            <p className="text-gray-400 text-xs leading-relaxed font-medium">
              Aurix Design Architecture Laboratory<br />
              882 Techwear Grid Circle, Sector 7<br />
              Austin, TX 78701
            </p>
          </div>

          <div className="border-l-2 border-brand-purple/40 pl-6 space-y-2">
            <div className="text-[10px] font-mono text-gray-500 tracking-widest">// LOC_02 // DIGITAL WIRE</div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white">Direct Desks</h4>
            <p className="text-gray-400 text-xs leading-relaxed font-medium">
              General Inquiries: <span className="text-white font-mono select-all">core@aurixlabs.com</span><br />
              Logistics & Distribution: <span className="text-white font-mono select-all">drops@aurixlabs.com</span>
            </p>
          </div>

          <div className="border-l-2 border-brand-purple/40 pl-6 space-y-2">
            <div className="text-[10px] font-mono text-gray-500 tracking-widest">// LOC_03 // CHRONO TRACKING</div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white">Operation Parameters</h4>
            <p className="text-gray-400 text-xs leading-relaxed font-medium">
              Monday through Friday / 09:00 – 18:00 CST<br />
              Digital monitoring queues remain operational 24/7.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}