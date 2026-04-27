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
    <section id="land-types" className="w-full py-40 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <RevealUp>
          <div className="mb-24 flex justify-between items-end">
            <h2 className="text-5xl md:text-7xl font-display text-forest text-center w-full">
              Land Use <span className="italic text-gold">Types</span>
            </h2>
          </div>
        </RevealUp>

        <div className="grid md:grid-cols-2 gap-x-24 gap-y-32">
          {LAND_USES.map((title, idx) => {
            const isEven = idx % 2 !== 0; // 0-indexed, so 1, 3, 5 are the "right" column
            return (
              <RevealUp key={title} delay={0.2} className={isEven ? "md:translate-y-[100px]" : ""}>
                <div className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[3/4] rounded-[16px] overflow-hidden mb-8 shadow-xl">
                    <img 
                      src={images[idx]} 
                      alt={title} 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:scale-[1.08]"
                    />
                    
                    {/* Hover Circle */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                      <div className="w-[120px] h-[120px] bg-gold rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                        <span className="text-forest text-[11px] font-black uppercase tracking-widest text-center leading-relaxed">View<br/>Sector</span>
                      </div>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3 text-forest/50">
                      Procurement Sector
                    </div>
                    <h3 className="text-3xl font-display font-bold text-forest mb-2">
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
