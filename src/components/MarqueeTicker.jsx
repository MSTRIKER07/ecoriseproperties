import React, { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { LAND_REQUIREMENT_OPTIONS } from '../data/content';

export default function MarqueeTicker() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Duplicate items enough for seamless loop
  const duplicatedItems = [
    ...LAND_REQUIREMENT_OPTIONS,
    ...LAND_REQUIREMENT_OPTIONS,
    ...LAND_REQUIREMENT_OPTIONS,
    ...LAND_REQUIREMENT_OPTIONS,
  ];

  return (
    <div className="w-full bg-forest text-gold py-3 overflow-hidden border-y border-gold/30">
      <motion.div
        className="flex whitespace-nowrap items-center gap-10 sm:gap-12 font-sans font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-xs sm:text-sm"
        animate={prefersReducedMotion ? {} : { x: ['0%', '-33.333%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 22,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <span key={idx} className="flex items-center gap-10 sm:gap-12">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0"></span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
