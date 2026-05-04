import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroCanvas from '../components/HeroCanvas';
import { COMPANY } from '../data/content';

// ── Framer variants ───────────────────────────────────────────────────────────
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}

export default function Hero() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 1024;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: isMobile ? 580 : 640, backgroundColor: '#0A1628' }}
    >
      {/* Canvas layer */}
      <HeroCanvas />

      {/* ── HERO TEXT — bottom-left ────────────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="absolute z-10 flex flex-col gap-4 sm:gap-5"
        style={{
          bottom: isMobile ? '8%' : '12%',
          left: isMobile ? '5%' : isTablet ? '6%' : '8%',
          right: isMobile ? '5%' : 'auto',
          maxWidth: isMobile ? undefined : isTablet ? 520 : 640,
        }}
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <span
            className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
            style={{
              border: '1px solid rgba(52,211,153,0.3)',
              color: '#34D399',
              backgroundColor: 'rgba(52,211,153,0.06)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Land Rising · Maharashtra
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          className="font-display leading-none text-white"
          style={{
            fontSize: 'clamp(2.2rem, 8vw, 5.5rem)',
            fontWeight: 600,
            lineHeight: 1.05,
            textShadow: '0 4px 30px rgba(0,0,0,0.3)',
          }}
        >
          Your land,<br />
          <span style={{ color: '#34D399' }}>our expertise.</span><br />
          Acquired.
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          variants={fadeUp}
          style={{
            color: '#fff',
            fontSize: 'clamp(13px, 3.5vw, 16px)',
            fontWeight: 400,
            maxWidth: isMobile ? '100%' : 480,
            lineHeight: 1.6,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          {COMPANY.tagline}. Trusted by solar developers, agro investors,
          and industrial parks across Maharashtra.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              backgroundColor: '#34D399',
              color: '#000',
              boxShadow: '0 0 24px rgba(52,211,153,0.35)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#059669')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#34D399')}
          >
            Explore Land
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#process"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 active:scale-[0.98]"
            style={{
              border: '1px solid rgba(255,255,255,0.35)',
              color: '#fff',
              backgroundColor: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
            }}
          >
            Our Process
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
