import React, { useState } from 'react';
import RevealUp from '../components/RevealUp';
import { titleVerification } from '../data/content';
import { Plus, Minus } from 'lucide-react';

export default function TitleVerification() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-offwhite py-20 md:py-32">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
        
        <div>
          <RevealUp>
            <h2 className="font-display text-forest mb-6 md:mb-8 leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
              Title <br/>
              <span className="italic text-gold">Verification</span>
            </h2>
            <p className="text-base md:text-xl text-forest/70 leading-relaxed max-w-md">
              We ensure absolute legal clarity before any transaction. Our meticulous 4-step framework guarantees 100% clean and undisputed land ownership.
            </p>
          </RevealUp>
        </div>

        <div>
          <RevealUp delay={0.2}>
            <div className="border-t border-forest/10">
              {titleVerification.map((step, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="border-b border-forest/10">
                    <button 
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="w-full py-5 md:py-8 flex justify-between items-center text-left gap-4 group"
                    >
                      <h3 className={`text-lg md:text-2xl font-bold transition-colors duration-500 ${isOpen ? 'text-gold' : 'text-forest group-hover:text-gold'}`}>
                        {step.title}
                      </h3>
                      <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full border flex items-center justify-center transition-colors duration-500 ${isOpen ? 'border-gold bg-gold text-white' : 'border-forest/20 text-forest/50 group-hover:border-gold group-hover:text-gold'}`}>
                        {isOpen ? <Minus className="w-3 h-3 md:w-4 md:h-4" /> : <Plus className="w-3 h-3 md:w-4 md:h-4" />}
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-64 pb-6 md:pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-base md:text-lg text-forest/70 leading-relaxed max-w-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealUp>
        </div>

      </div>
    </section>
  );
}
