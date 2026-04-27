import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import { services } from '../data/content';

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-24 bg-brand-offwhite" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-3">Our Services</h2>
          <h3 className="text-4xl font-serif font-bold text-brand-green mb-6">Comprehensive Land Solutions</h3>
          <p className="text-gray-600">We provide end-to-end services to ensure a seamless and legally sound land acquisition process.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = Icons[service.icon] || Icons.HelpCircle;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white p-8 group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl border-t-4 border-transparent hover:border-brand-gold"
              >
                <div className="w-14 h-14 bg-brand-offwhite rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-green group-hover:text-brand-gold" />
                </div>
                <h4 className="text-xl font-serif font-bold text-brand-green mb-3">{service.title}</h4>
                <div className="w-8 h-1 bg-brand-gold/30 group-hover:bg-brand-gold transition-colors duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
