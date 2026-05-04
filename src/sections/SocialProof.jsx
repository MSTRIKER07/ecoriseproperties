import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, CheckCircle } from 'lucide-react';

export function SocialProofGrid() {
  const testimonials = [
    { name: 'Dr. Rahul Mehta', role: 'Infrastructure Investor', text: 'The level of diligence provided by Ecorise is unheard of in the Latur real estate market. They caught title issues that two other law firms missed.' },
    { name: 'Sameer Deshpande', role: 'Industrialist', text: 'Smooth, clinical, and efficient. We acquired 15 acres for our new processing plant in record time. Zero hidden costs.' },
    { name: 'Priya Kulkarni', role: 'Real Estate Developer', text: 'A single-window solution that actually works. From identification to NA conversion, they handled everything with absolute professionalism.' }
  ];

  return (
    <section id="testimonials" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-gold font-bold uppercase tracking-[0.4em] text-[12px] mb-4 block">Social Proof</span>
          <h2 className="font-display font-bold text-charcoal" style={{ fontSize: 'clamp(1.75rem, 6vw, 3.75rem)' }}>Trusted by Professionals.</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-4xl border border-[#E2E8E4] shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-lg text-charcoal/70 italic mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center font-bold text-charcoal">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-charcoal flex items-center gap-2">
                    {t.name} <CheckCircle className="w-4 h-4 text-forest-light" />
                  </div>
                  <div className="text-[12px] font-bold uppercase tracking-widest text-charcoal/40">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 45, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) { m--; s = 59; }
        else if (h > 0) { h--; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-sage rounded-[24px] sm:rounded-[40px] md:rounded-[60px] mx-3 sm:mx-6 md:mx-12 mb-8 md:mb-12 overflow-hidden relative">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-charcoal mb-8 md:mb-12 leading-[0.9] tracking-tighter" style={{ fontSize: 'clamp(2.2rem, 10vw, 6rem)' }}>
          SECURE YOUR<br/>FUTURE YIELD.
        </h2>

        {/* Countdown */}
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-8 mb-10 md:mb-16">
          <TimeBlock val={timeLeft.h} label="Hours" />
          <TimeBlock val={timeLeft.m} label="Minutes" />
          <TimeBlock val={timeLeft.s} label="Seconds" />
        </div>

        <button className="bg-charcoal text-white px-8 sm:px-16 py-4 sm:py-6 rounded-full text-base sm:text-xl font-bold flex items-center justify-center gap-3 sm:gap-4 mx-auto hover:scale-105 transition-all shadow-2xl">
          Secure This Plot Now <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
        </button>

        <p className="mt-8 text-[12px] font-bold uppercase tracking-widest text-charcoal/40">
          *Guaranteed Price Lock for 48 Hours
        </p>
      </div>
    </section>
  );
}

function TimeBlock({ val, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 bg-charcoal/5 backdrop-blur-md rounded-2xl md:rounded-3xl flex items-center justify-center font-mono font-bold text-charcoal" style={{ fontSize: 'clamp(1.5rem, 5vw, 3.75rem)' }}>
        {val < 10 ? `0${val}` : val}
      </div>
      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-charcoal/40 mt-2 sm:mt-4">{label}</span>
    </div>
  );
}

export function MobileStickyCart() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-md border-t border-[#F3F4F6] px-6 py-4 flex items-center justify-between md:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-charcoal">₹2.4 Cr</span>
          <span className="text-xs text-charcoal/30 line-through">₹3.1 Cr</span>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-urgency animate-pulse">Selling Fast</div>
      </div>
      <button className="bg-charcoal text-white px-8 py-3 rounded-full font-bold text-sm">
        Inquire Now
      </button>
    </div>
  );
}
