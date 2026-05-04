import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

export function ProductSpotlight() {
  return (
    <section className="section-padding bg-primary">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: Product Image */}
        <div className="relative group">
          <div className="aspect-square bg-[#E8E6E1] rounded-5xl overflow-hidden relative flex items-center justify-center p-20 shadow-inner">
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop" 
              alt="Strategic Land Asset" 
              className="w-full h-full object-cover rounded-3xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Urgency Badge */}
          <div className="absolute top-10 left-10">
            <div className="bg-urgency text-white px-6 py-2 rounded-xl text-[12px] font-bold uppercase tracking-widest shadow-xl animate-pulse-fast">
              Premium Yield
            </div>
          </div>
        </div>

        {/* Right: Copy */}
        <div className="max-w-xl">
          <div className="text-gold font-bold uppercase tracking-[0.3em] text-[12px] mb-6">Featured Opportunity</div>
          <h2 className="font-display font-bold text-charcoal mb-8 leading-tight" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>Murud Industrial Corridor.</h2>
          
          <div className="flex items-center gap-6 mb-10">
            <span className="text-3xl font-bold text-charcoal">₹2.4 Cr / Acre</span>
            <span className="text-xl text-charcoal/30 line-through">₹3.1 Cr / Acre</span>
          </div>

          <p className="text-xl font-sans text-charcoal/60 mb-12 leading-relaxed">
            A meticulously vetted 40-acre land parcel situated within the prime industrial zone of Murud, Latur. Title-cleared and ready for immediate possession.
          </p>

          <ul className="space-y-6 mb-16">
            <li className="flex items-center gap-4 text-charcoal font-medium">
              <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center">
                <Check className="w-4 h-4 text-charcoal" />
              </div>
              Pre-approved for Industrial Use (NA)
            </li>
            <li className="flex items-center gap-4 text-charcoal font-medium">
              <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center">
                <Check className="w-4 h-4 text-charcoal" />
              </div>
              Direct Highway Access (4-Lane)
            </li>
            <li className="flex items-center gap-4 text-charcoal font-medium">
              <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center">
                <Check className="w-4 h-4 text-charcoal" />
              </div>
              Verified 30-Year Title Search
            </li>
          </ul>

          <button className="w-full md:w-auto bg-charcoal text-white px-12 py-5 rounded-full font-bold flex items-center justify-center gap-4 group transition-all hover:pr-10">
            Request Full Prospectus <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  const rows = [
    { feature: 'Verified Title Search', us: true, them: false },
    { feature: 'Liaison & NA Support', us: true, them: false },
    { feature: 'Market Valuation Accuracy', us: true, them: true },
    { feature: 'Direct Ground Presence', us: true, them: false },
    { feature: 'Post-Sale Possession Help', us: true, them: false }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-display font-bold text-charcoal mb-6" style={{ fontSize: 'clamp(1.75rem, 6vw, 3.75rem)' }}>Why Professionals <br/> Choose Us.</h2>
        </div>

        <div className="bg-primary rounded-3xl md:rounded-5xl overflow-hidden border border-[#E2E8E4] shadow-sm">
          {/* Scrollable wrapper for mobile */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="bg-sage/30">
                  <th className="py-5 md:py-8 px-4 sm:px-6 md:px-10 text-left text-[12px] md:text-[14px] font-bold uppercase tracking-widest text-charcoal/40">Capability</th>
                  <th className="py-5 md:py-8 px-4 sm:px-6 md:px-10 text-center text-[12px] md:text-[14px] font-bold uppercase tracking-widest text-charcoal">Ecorise</th>
                  <th className="py-5 md:py-8 px-4 sm:px-6 md:px-10 text-center text-[12px] md:text-[14px] font-bold uppercase tracking-widest text-charcoal/40">Standard Brokers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8E4]">
                {rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/50' : 'bg-transparent'}>
                    <td className="py-5 md:py-8 px-4 sm:px-6 md:px-10 font-medium text-charcoal text-sm md:text-base">{row.feature}</td>
                    <td className="py-5 md:py-8 px-4 sm:px-6 md:px-10 text-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-sage/50 flex items-center justify-center mx-auto">
                        <Check className="w-5 h-5 md:w-6 md:h-6 text-charcoal" />
                      </div>
                    </td>
                    <td className="py-5 md:py-8 px-4 sm:px-6 md:px-10 text-center opacity-30">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-urgency/10 flex items-center justify-center mx-auto">
                        {row.them ? <Check className="w-5 h-5 md:w-6 md:h-6 text-urgency" /> : <X className="w-5 h-5 md:w-6 md:h-6 text-urgency" />}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
