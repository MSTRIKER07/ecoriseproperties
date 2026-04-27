import React from 'react';
import { motion } from 'framer-motion';
import RevealUp from '../components/RevealUp';
import { SERVICES } from '../data/content';
import { Map, TrendingUp, Search, Scale, Users, Hammer } from 'lucide-react';

const iconMap = { Map, TrendingUp, Search, Scale, Users, Hammer };

export default function Services() {
  return (
    <section id="services" className="py-32 bg-forest relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-24">
          <RevealUp>
            <h2 className="text-4xl md:text-6xl font-display text-offwhite mb-6">
              Our <span className="italic text-gold">Services</span>
            </h2>
            <p className="text-offwhite/70 max-w-2xl mx-auto">
              Comprehensive land procurement solutions designed for seamless and secure transactions across Maharashtra.
            </p>
          </RevealUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || Map;
            return (
              <RevealUp key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-2xl shadow-xl transition-all h-full"
                >
                  <div className="w-16 h-16 bg-forest/5 rounded-2xl flex items-center justify-center mb-8">
                    <span className="text-3xl font-display font-bold text-forest/30">{service.id}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-forest mb-4">{service.title}</h3>
                  <p className="text-forest/70 leading-relaxed">{service.desc || "Professional land procurement and management services across Maharashtra."}</p>
                </motion.div>
              </RevealUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
