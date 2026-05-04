import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProductivityBlock() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-full px-3 sm:px-4 lg:px-6">
      <section id="process" className="relative max-w-[1600px] mx-auto bg-gradient-to-b from-zinc-900/80 to-zinc-950 py-20 md:py-32 overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/5" ref={ref}>
        
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '4rem 4rem'
          }}
        ></div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            
            <div className="space-y-6 md:space-y-8">
              <h3
                className="font-bold tracking-tight text-primary-light mb-6 md:mb-12"
                style={{ fontSize: 'clamp(1.6rem, 5vw, 3rem)' }}
              >
                Accelerate your <br/> procurement pipeline.
              </h3>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 md:gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-black border border-white/10 flex items-center justify-center text-base md:text-xl font-bold text-zinc-500">
                  01
                </div>
                <div>
                  <h4 className="text-base md:text-xl font-semibold text-primary-light mb-2">Identify &amp; Lock</h4>
                  <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                    We scan thousands of acres daily to find parcels that meet your exact topographical and infrastructural requirements.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 md:gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-black border border-white/10 flex items-center justify-center text-base md:text-xl font-bold text-zinc-500">
                  02
                </div>
                <div>
                  <h4 className="text-base md:text-xl font-semibold text-primary-light mb-2">Clear &amp; Acquire</h4>
                  <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
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
              <div className="w-full aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] bg-black border border-white/10 p-4 sm:p-6 shadow-2xl relative overflow-hidden flex flex-col">
                
                <div className="flex gap-2 mb-4 md:mb-6">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-800"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-800"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-800"></div>
                </div>

                <div className="flex-1 font-mono text-[10px] sm:text-xs md:text-sm space-y-3 md:space-y-4 overflow-hidden">
                  <div className="text-zinc-500 truncate">// Executing Title Verification Sequence</div>
                  <div className="text-zinc-300 break-all">
                    <span className="text-emerald-highlight">await</span> DocumentParser.scan(<span className="text-emerald-400">413510</span>);
                  </div>
                  <div className="glass-panel rounded-xl p-3 md:p-4 mt-2 md:mt-4 border-l-2 border-l-emerald-highlight">
                    <div className="text-[10px] text-zinc-500 mb-1">Response: 200 OK</div>
                    <div className="text-primary-light text-[11px] sm:text-sm">7/7 Family members verified.</div>
                    <div className="text-primary-light mt-1 text-[11px] sm:text-sm">No encumbrances found.</div>
                  </div>
                  <div className="text-zinc-300 opacity-50 text-[10px] sm:text-xs md:text-sm">
                    <span className="text-emerald-highlight">const</span> registryUpdate = <span className="text-emerald-highlight">await</span> Mutation.init();
                  </div>
                  <div className="text-zinc-300 flex items-center gap-2 text-[10px] sm:text-xs md:text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-highlight animate-pulse flex-shrink-0"></span>
                    Processing...
                  </div>
                </div>

                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 glass-panel rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2 border border-emerald-highlight/30 shadow-[0_0_20px_rgba(52,211,153,0.1)]"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-highlight"></div>
                  <span className="text-[9px] sm:text-xs font-bold text-primary-light uppercase tracking-wider">Secured</span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
