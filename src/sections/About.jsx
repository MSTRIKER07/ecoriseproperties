import React from 'react';
import RevealUp from '../components/RevealUp';
import { COMPANY } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-32 bg-offwhite relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <RevealUp>
              <div className="text-sm font-bold uppercase tracking-[0.3em] text-forest/40 mb-8">
                About Our Legacy
              </div>
            </RevealUp>
            
            <RevealUp delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-display text-forest mb-12">
                Legacy of <span className="italic text-gold">The Land</span>
              </h2>
            </RevealUp>

            <RevealUp delay={0.2}>
              <p className="text-xl font-sans text-forest/70 leading-relaxed max-w-xl">
                {COMPANY.name} is a {COMPANY.tagline.toLowerCase()} with a focus on large-scale procurement. Since our incorporation on {COMPANY.incorporated}, we have established ourselves as a trusted partner for {COMPANY.status} land acquisition across Maharashtra.
              </p>
              <p className="mt-6 text-lg font-sans text-forest/60 max-w-xl">
                Headquartered in {COMPANY.addressShort}, we provide end-to-end solutions for renewable energy, industrial, and agricultural sectors.
              </p>
            </RevealUp>
          </div>

          <RevealUp delay={0.4} className="relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
                alt="Maharashtra Landscape" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </RevealUp>
        </div>
      </div>
    </section>
  );
}
