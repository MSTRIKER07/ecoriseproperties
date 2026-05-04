import React from 'react';
import { motion } from 'framer-motion';
import RevealUp from '../components/RevealUp';
import { SERVICES } from '../data/content';
import { Map, TrendingUp, Search, Scale, Users, Hammer } from 'lucide-react';

const iconMap = { Map, TrendingUp, Search, Scale, Users, Hammer };

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-forest relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-24">
          <RevealUp>
            <h2 className="font-display text-offwhite mb-4 md:mb-6" style={{ fontSize: 'clamp(1.75rem, 6vw, 3.75rem)' }}>
              Our <span className="italic text-gold">Services</span>
            </h2>
            <p className="text-offwhite/70 max-w-2xl mx-auto text-sm md:text-base">
              Comprehensive land procurement solutions designed for seamless and secure transactions across Maharashtra.
            </p>
          </RevealUp>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || Map;
            return (
              <RevealUp key={idx} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl transition-all h-full"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-forest/5 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-8">
                    <span className="text-xl md:text-3xl font-display font-bold text-forest/30">{service.id}</span>
                  </div>
                  <h3 className="font-display font-bold text-forest mb-3 md:mb-4" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>{service.title}</h3>
                  <p className="text-forest/70 leading-relaxed text-sm md:text-base">{service.desc || "Professional land procurement and management services across Maharashtra."}</p>
                </motion.div>
              </RevealUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
