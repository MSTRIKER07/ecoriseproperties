import React from 'react';
import RevealUp from '../components/RevealUp';
import { whyChooseUs, advancedServices } from '../data/content';

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-forest text-cream rounded-section mx-4 md:mx-12 my-12">
      <div className="section-container">
        <div className="text-center mb-24">
          <RevealUp>
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-cream/40 mb-8">
              Reliability
            </div>
          </RevealUp>
          <RevealUp delay={0.1}>
            <h2 className="text-[10vw] font-display uppercase leading-[0.75] mb-8">
              WHY CHOOSE<br/>THE LEADERS.
            </h2>
          </RevealUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, idx) => (
            <RevealUp key={idx} delay={idx * 0.1}>
              <div className="p-8 border border-white/10 rounded-organic hover:bg-white/5 transition-colors group h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-display uppercase text-cream mb-6 group-hover:text-moss transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-cream/60 font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="w-12 h-1 bg-moss mt-8 group-hover:w-full transition-all duration-700"></div>
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdvancedServices() {
  return (
    <section className="py-32 bg-cream">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <RevealUp>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/40 mb-8">
                Specialized
              </div>
            </RevealUp>
            <RevealUp delay={0.1}>
              <h2 className="text-[10vw] font-display uppercase leading-[0.75] text-forest">
                ADVANCED<br/>CLEARENCE.
              </h2>
            </RevealUp>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advancedServices.map((item, idx) => (
            <RevealUp key={idx} delay={idx * 0.1}>
              <div className="organic-card flex items-start gap-8 hover:bg-forest hover:text-cream group transition-colors duration-500">
                <div className="text-6xl font-display uppercase leading-none opacity-10 group-hover:opacity-20 transition-opacity">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-3xl font-display uppercase mb-4">{item.title}</h3>
                  <p className="text-forest/60 group-hover:text-cream/60 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
