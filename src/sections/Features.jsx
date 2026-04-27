import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Speed',
    desc: 'Real-time updates with zero latency. Built for speed and performance.'
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    desc: 'End-to-end encryption for all your data. Your security is our priority.'
  },
  {
    icon: Cpu,
    title: 'AI-Powered Insights',
    desc: 'Advanced machine learning models to help you make better decisions.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    desc: 'Infrastructure that scales with your business, anywhere in the world.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif italic text-gold-light mb-6">Core Capabilities</h2>
          <p className="text-gold/60 max-w-2xl mx-auto text-lg">
            Empowering your workflow with state-of-the-art technology and intuitive design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-[32px] hover:bg-white/5 transition-all group"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-serif italic text-gold-light mb-4">{feature.title}</h3>
              <p className="text-gold/40 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
