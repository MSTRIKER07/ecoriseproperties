import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroCanvas from '../components/HeroCanvas';
import { COMPANY, STATS } from '../data/content';

// ── Animated counter ──────────────────────────────────────────────────────────
function CountUp({ end, suffix }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const duration = 2000;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Framer variants ───────────────────────────────────────────────────────────
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: 600, backgroundColor: '#0A1628' }}
    >
      {/* Canvas layer */}
      <HeroCanvas />

      {/* ── HERO TEXT — bottom-left ────────────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="absolute z-10 flex flex-col gap-5"
        style={{
          bottom: '12%',
          left: isMobile ? '5%' : '8%',
          maxWidth: isMobile ? '90%' : 640,
        }}
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full"
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
            fontSize: isMobile ? '3rem' : '5.5rem',
            fontWeight: 600,
            lineHeight: 1.0,
            textShadow: '0 2px 40px rgba(0,0,0,0.5)',
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
            color: 'rgba(255,255,255,0.55)',
            fontSize: 15,
            fontWeight: 300,
            maxWidth: 440,
            lineHeight: 1.65,
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
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.03]"
            style={{
              backgroundColor: '#34D399',
              color: '#000',
              boxShadow: '0 0 24px rgba(52,211,153,0.35)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#059669')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#34D399')}
          >
            Explore Land
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#process"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300"
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.65)',
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

        {/* Mobile stat row */}
        {isMobile && (
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-2">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="px-4 py-2 rounded-xl text-center"
                style={{
                  backgroundColor: 'rgba(10,22,40,0.65)',
                  border: '1px solid rgba(52,211,153,0.18)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <div className="font-display text-xl font-semibold" style={{ color: '#34D399' }}>
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>


    </section>
  );
}
