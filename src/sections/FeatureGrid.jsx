import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Search, ShieldCheck, Map, Clock, FileText } from 'lucide-react';

export default function FeatureGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    { icon: Search, label: 'Title Search' },
    { icon: Database, label: 'Record Analysis' },
    { icon: ShieldCheck, label: 'Legal Clearance' },
    { icon: Map, label: 'Topography' },
    { icon: Clock, label: 'History Track' },
    { icon: FileText, label: 'Documentation' },
  ];

  return (
    <section id="features" className="py-32 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-20">
        
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <div className="sticky top-32">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-primary-light mb-6 leading-tight"
            >
              Comprehensive Land <br />
              <span className="text-zinc-500">Intelligence System.</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-zinc-400 mb-16 max-w-md font-light"
            >
              Our proprietary platform integrates local registry data with real-time analytics to ensure zero-risk acquisitions.
            </motion.p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center group-hover:border-emerald-highlight transition-colors duration-300">
                      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-emerald-highlight transition-colors duration-300" />
                    </div>
                    <span className="text-primary-light font-medium group-hover:text-emerald-highlight transition-colors duration-300">{feature.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column Display Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden group h-[800px] bg-zinc-900 border border-white/5"
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Satellite View" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[2s] ease-out mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>

          {/* Internal Glass Component */}
          <div className="absolute bottom-12 left-12 right-12 glass-panel rounded-3xl p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-lg font-bold text-primary-light tracking-tight">Land Analysis</h4>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-highlight bg-emerald-900/30 px-3 py-1 rounded-full">Active</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-400">Owner Verification</span>
                  <span className="text-primary-light">100%</span>
                </div>
                <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-highlight h-full w-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-400">Encumbrance Check</span>
                  <span className="text-primary-light">Scanning</span>
                </div>
                <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden relative">
                  <div className="bg-emerald-highlight h-full w-2/3"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 animate-[translateX_2s_infinite]"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
