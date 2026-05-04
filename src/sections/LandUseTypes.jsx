import React from 'react';
import RevealUp from '../components/RevealUp';
import { LAND_USES } from '../data/content';

export default function LandUseTypes() {
  // Curated, working Unsplash images for each land use type
  const images = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=900&auto=format&fit=crop", // Solar
    "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=900&auto=format&fit=crop", // Wind
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=900&auto=format&fit=crop", // Agro Farming (aerial farmland)
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop", // Industry
    "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=900&auto=format&fit=crop", // Logistics (warehouse/shipping)
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop"  // Residential
  ];

  return (
    <section id="land-types" className="w-full py-20 md:py-32 lg:py-40 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <RevealUp>
          <div className="mb-12 md:mb-20 lg:mb-24">
            <h2 className="font-display text-forest text-center w-full" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
              Land Use <span className="italic text-gold">Types</span>
            </h2>
          </div>
        </RevealUp>

        <div className="grid sm:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-20 gap-y-12 md:gap-y-20">
          {LAND_USES.map((title, idx) => {
            return (
              <RevealUp key={title} delay={0.15 * (idx % 2)}>
                <div className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden mb-5 shadow-xl">
                    <img 
                      src={images[idx]} 
                      alt={title} 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:scale-[1.08]"
                      loading="lazy"
                    />
                  </div>

                  {/* Metadata */}
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2 text-forest/50">
                      Procurement Sector
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-forest">
                      {title}
                    </h3>
                  </div>
                </div>
              </RevealUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
