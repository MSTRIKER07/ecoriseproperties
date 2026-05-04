import React from 'react';
import RevealUp from '../components/RevealUp';
import { testimonials } from '../data/content';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="w-full py-20 md:py-32 bg-offwhite border-y border-forest/10">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <RevealUp>
          <h2 className="font-display text-forest mb-12 md:mb-24 text-center" style={{ fontSize: 'clamp(2rem, 7vw, 4.5rem)' }}>
            Client <span className="italic text-gold">Testimonials</span>
          </h2>
        </RevealUp>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {testimonials.map((test, idx) => (
            <RevealUp key={test.name} delay={idx * 0.15} className="p-6 sm:p-8 md:p-10 lg:p-12 border border-forest/10 hover:border-gold/50 transition-colors duration-500 bg-white group rounded-2xl shadow-lg">
              <Quote className="w-7 h-7 md:w-10 md:h-10 text-gold mb-5 md:mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-base md:text-xl text-forest/80 font-medium leading-relaxed mb-8 md:mb-12">
                &ldquo;{test.text}&rdquo;
              </p>
              
              <div className="flex items-center gap-3 md:gap-4 border-t border-forest/10 pt-5 md:pt-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-forest text-gold rounded-full flex items-center justify-center font-bold text-sm md:text-base flex-shrink-0">
                  {test.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-base md:text-lg font-bold text-forest">{test.name}</div>
                  <div className="text-xs md:text-sm text-forest/60">{test.role}</div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i} className="text-gold text-xs md:text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
