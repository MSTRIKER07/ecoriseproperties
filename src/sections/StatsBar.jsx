import React, { useState, useEffect } from 'react';
import RevealUp from '../components/RevealUp';
import { stats } from '../data/content';
import { useInView } from 'react-intersection-observer';

function AnimatedCounter({ end, duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    let startTimestamp = null;
    let animationFrame = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    if (inView) {
      animationFrame = window.requestAnimationFrame(step);
    }
    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, inView]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsBar() {
  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#0F6E56', borderTop: '1px solid rgba(201,168,76,0.2)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 lg:divide-x lg:divide-offwhite/10">
          {stats.map((stat, idx) => (
            <RevealUp key={stat.label} delay={idx * 0.15} className="flex flex-col items-center justify-center text-center px-2 sm:px-4">
              <div className="font-display font-bold text-offwhite mb-2 md:mb-4 flex items-baseline" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
                <AnimatedCounter end={parseInt(stat.value)} />
                <span className="text-gold ml-1" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm font-sans uppercase font-semibold tracking-widest text-offwhite/70">
                {stat.label}
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
