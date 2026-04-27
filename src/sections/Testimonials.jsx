import React from 'react';
import RevealUp from '../components/RevealUp';
import { testimonials } from '../data/content';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="w-full py-32 bg-offwhite border-y border-forest/10">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <RevealUp>
          <h2 className="text-5xl md:text-7xl font-display text-forest mb-24 text-center">
            Client <span className="italic text-gold">Testimonials</span>
          </h2>
        </RevealUp>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <RevealUp key={test.name} delay={idx * 0.2} className="p-12 border border-forest/10 hover:border-gold/50 transition-colors duration-500 bg-white group rounded-2xl shadow-lg">
              <Quote className="w-10 h-10 text-gold mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-xl text-forest/80 font-medium leading-relaxed mb-12">
                "{test.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-forest/10 pt-6">
                <div className="w-12 h-12 bg-forest text-gold rounded-full flex items-center justify-center font-bold">
                  {test.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-lg font-bold text-forest">{test.name}</div>
                  <div className="text-sm text-forest/60">{test.role}</div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i} className="text-gold text-sm">★</span>
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
