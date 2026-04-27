import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProductivityBlock() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-full px-4 sm:px-6">
      <section id="process" className="relative max-w-[1600px] mx-auto bg-gradient-to-b from-zinc-900/80 to-zinc-950 py-32 overflow-hidden rounded-[2.5rem] border border-white/5" ref={ref}>
        
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '4rem 4rem'
          }}
        ></div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-light mb-12">
                Accelerate your <br/> procurement pipeline.
              </h3>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-xl font-bold text-zinc-500">
                  01
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary-light mb-2">Identify & Lock</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    We scan thousands of acres daily to find parcels that meet your exact topographical and infrastructural requirements.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-xl font-bold text-zinc-500">
                  02
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary-light mb-2">Clear & Acquire</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Our legal team handles title verification, family settlements, and government liaison to ensure 100% dispute-free transfer.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, rotateY: 15, rotateX: 5 }}
              animate={inView ? { opacity: 1, rotateY: 3, rotateX: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative transform perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-full aspect-[4/3] rounded-[2rem] bg-black border border-white/10 p-6 shadow-2xl relative overflow-hidden flex flex-col">
                
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                </div>

                <div className="flex-1 font-mono text-sm space-y-4">
                  <div className="text-zinc-500">// Executing Title Verification Sequence</div>
                  <div className="text-zinc-300">
                    <span className="text-emerald-highlight">await</span> DocumentParser.scan(districtId: <span className="text-emerald-400">413510</span>);
                  </div>
                  <div className="glass-panel rounded-xl p-4 mt-4 border-l-2 border-l-emerald-highlight">
                    <div className="text-xs text-zinc-500 mb-1">Response: 200 OK</div>
                    <div className="text-primary-light">7/7 Family members verified.</div>
                    <div className="text-primary-light mt-1">No encumbrances found.</div>
                  </div>
                  <div className="text-zinc-300 opacity-50">
                    <span className="text-emerald-highlight">const</span> registryUpdate = <span className="text-emerald-highlight">await</span> Mutation.init();
                  </div>
                  <div className="text-zinc-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-highlight animate-pulse"></span>
                    Processing...
                  </div>
                </div>

                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 right-6 glass-panel rounded-full px-4 py-2 flex items-center gap-2 border border-emerald-highlight/30 shadow-[0_0_20px_rgba(52,211,153,0.1)]"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-highlight"></div>
                  <span className="text-xs font-bold text-primary-light uppercase tracking-wider">Secured</span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
