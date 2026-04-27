import React from 'react';

export function TrustSignalBar() {
  const logos = ['Sephora', 'Vogue', 'Elle', 'Forbes', 'GQ'];
  
  return (
    <section className="bg-white py-16 border-y border-[#F3F4F6]">
      <div className="section-padding">
        <div className="text-center mb-10">
          <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-charcoal/40">Trusted by Industry Leaders</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-60">
          {logos.map((logo, idx) => (
            <div key={idx} className="text-3xl font-display font-black tracking-tighter hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueStatsBar() {
  const stats = [
    { value: '50K+', label: 'Acres Evaluated' },
    { value: '1000+', label: 'Successful Deeds' },
    { value: '50+', label: 'Latur Locations' },
    { value: '15Yrs', label: 'Market Leadership' }
  ];

  return (
    <section className="bg-charcoal py-16">
      <div className="section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className={`text-center flex flex-col items-center justify-center relative ${idx !== stats.length - 1 ? 'lg:after:content-[""] lg:after:absolute lg:after:right-0 lg:after:h-12 lg:after:w-[1px] lg:after:bg-white/10' : ''}`}>
              <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">{stat.value}</div>
              <div className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
