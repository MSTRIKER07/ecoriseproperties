import React from 'react';
import { motion } from 'framer-motion';
import { LAND_REQUIREMENT_OPTIONS } from '../data/content';

export default function MarqueeTicker() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Duplicate items to ensure smooth infinite loop
  const duplicatedItems = [...LAND_REQUIREMENT_OPTIONS, ...LAND_REQUIREMENT_OPTIONS, ...LAND_REQUIREMENT_OPTIONS];

  return (
    <div className="w-full bg-forest text-gold py-3 overflow-hidden border-y border-gold/30">
      <motion.div
        className="flex whitespace-nowrap items-center gap-12 font-sans font-bold uppercase tracking-[0.2em] text-sm"
        animate={prefersReducedMotion ? {} : { x: [0, -1035] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <span key={idx} className="flex items-center gap-12">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
