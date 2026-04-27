import React from 'react';
import { motion } from 'framer-motion';
import { Map, TrendingUp, Search, Scale, Users, Hammer } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    { title: "Land Procurement", icon: Map, color: "bg-sage" },
    { title: "Strategic Consultation", icon: TrendingUp, color: "bg-[#FEE2E2]" }, // Peach
    { title: "Title Verification", icon: Search, color: "bg-[#E0E7FF]" }, // Lavender
    { title: "Legal Solutions", icon: Scale, color: "bg-sage" },
    { title: "Liaison Support", icon: Users, color: "#FEE2E2" },
    { title: "Development", icon: Hammer, color: "#E0E7FF" }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-charcoal mb-6 text-center">Clinical Precision <br/> in Every Service.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              whileHover={{ backgroundColor: '#F5F5F0', y: -5 }}
              className="bg-white p-8 rounded-4xl border border-[#E2E8E4] transition-all duration-500 group"
            >
              <div className={`w-16 h-16 ${benefit.color || 'bg-sage'} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <benefit.icon className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-2xl font-display font-bold text-charcoal mb-4">{benefit.title}</h3>
              <p className="text-charcoal/60 leading-relaxed">
                Expert-led execution of {benefit.title.toLowerCase()} with a focus on risk mitigation and long-term asset growth.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
