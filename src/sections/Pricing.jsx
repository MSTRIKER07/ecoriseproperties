import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$49',
    desc: 'Perfect for small teams',
    features: ['Up to 5 projects', 'Basic analytics', 'Community support', '1GB Storage'],
    highlight: false
  },
  {
    name: 'Professional',
    price: '$99',
    desc: 'Scaling with your growth',
    features: ['Unlimited projects', 'Advanced AI insights', 'Priority support', '10GB Storage', 'Custom branding'],
    highlight: true
  },
  {
    name: 'Enterprise',
    price: '$249',
    desc: 'Custom solutions',
    features: ['Dedicated manager', 'SLA guarantees', '24/7 Phone support', 'Unlimited storage', 'Custom integration'],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif italic text-gold-light mb-6">Transparent Pricing</h2>
          <p className="text-gold/60 max-w-2xl mx-auto text-lg">
            Choose the plan that best fits your ambitions. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`glass-card p-10 rounded-[40px] relative transition-all duration-500 ${
                tier.highlight ? 'lg:scale-110 gold-glow bg-white/5 border-gold/30' : 'hover:bg-white/5'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif italic text-gold-light mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-gold">{tier.price}</span>
                <span className="text-gold/40">/month</span>
              </div>
              <p className="text-gold/60 mb-8">{tier.desc}</p>
              
              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-gold/60">
                    <Check className="w-5 h-5 text-gold shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                tier.highlight ? 'bg-gold text-dark hover:bg-gold-light gold-glow' : 'glass-card border border-white/10 hover:bg-white/5 text-gold-light'
              }`}>
                {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
