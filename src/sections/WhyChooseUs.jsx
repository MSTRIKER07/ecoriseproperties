import React from 'react';
import { motion } from 'framer-motion';
import { WHY_US } from '../data/content';
import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {

  return (
    <section className="py-32 px-6 lg:px-12 relative bg-offwhite">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display text-forest mb-6"
          >
            Why Choose <span className="italic text-gold">Us</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 rounded-2xl shadow-xl transition-all border-l-4 border-gold hover:-translate-y-2 group flex items-center gap-4"
            >
              <CheckCircle className="w-8 h-8 text-gold shrink-0" />
              <span className="text-xl font-display font-bold text-forest">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
