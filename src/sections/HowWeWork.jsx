import React from 'react';
import { motion } from 'framer-motion';
import RevealUp from '../components/RevealUp';
import { PROCESS } from '../data/content';
import { MapPin, FileCheck, Search, CheckSquare, Key } from 'lucide-react';

export default function Process() {
  const icons = [MapPin, FileCheck, Search, CheckSquare, Key];

  return (
    <section id="process" className="py-20 md:py-32 bg-offwhite border-y border-forest/10 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-24">
          <RevealUp>
            <h2 className="font-display text-forest mb-6" style={{ fontSize: 'clamp(1.75rem, 6vw, 3.75rem)' }}>
              How We <span className="italic text-gold">Work</span>
            </h2>
          </RevealUp>
        </div>

        <div className="relative">
          {/* Horizontal Line — only visible on lg+ */}
          <div className="absolute top-[3rem] left-0 right-0 h-[2px] bg-forest/10 hidden lg:block"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {PROCESS.map((step, idx) => {
              const Icon = icons[idx] || MapPin;
              return (
                <RevealUp key={idx} delay={idx * 0.08} className="relative z-10 flex flex-col items-center text-center group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold text-xs md:text-sm shadow-md">
                    {step.id}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center border-4 border-offwhite shadow-xl mb-6 md:mb-8 group-hover:border-gold transition-colors duration-500">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-forest" />
                  </div>

                  <h3 className="text-lg md:text-xl font-display font-bold text-forest mb-3 md:mb-4 min-h-[48px] md:min-h-[56px] flex items-center justify-center">{step.title}</h3>
                  <p className="text-xs md:text-sm text-forest/70 max-w-[180px] md:max-w-[200px]">
                    {step.desc}
                  </p>
                </RevealUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
