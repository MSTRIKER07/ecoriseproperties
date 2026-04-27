import React from 'react';
import RevealUp from '../components/RevealUp';

export default function PortfolioGrid() {
  const items = [
    {
      title: "Aman Tokyo Escape",
      category: "URBAN SANCTUARY",
      meta: "7 Days • Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Alpine Retreat",
      category: "WINTER CHALET",
      meta: "14 Days • Swiss Alps",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Maldivian Atoll",
      category: "PRIVATE ISLAND",
      meta: "10 Days • Indian Ocean",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Tuscan Villa",
      category: "ESTATE LEASE",
      meta: "21 Days • Tuscany, Italy",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="w-full py-40 bg-offwhite">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <RevealUp>
          <div className="mb-24 flex justify-between items-end">
            <h2 className="text-6xl md:text-8xl font-black text-charcoal tracking-tighter">
              CASE <span className="italic text-rose-accent">studies</span>
            </h2>
            <button className="hidden md:block uppercase text-xs font-bold tracking-[0.2em] border-b-2 border-charcoal pb-1 hover:text-rose-accent hover:border-rose-accent transition-all duration-300">
              View All
            </button>
          </div>
        </RevealUp>

        <div className="grid md:grid-cols-2 gap-x-24 gap-y-32">
          {items.map((item, idx) => {
            const isEven = idx % 2 !== 0; // 0-indexed, so 1 and 3 are the "right" column (even items visually)
            return (
              <RevealUp key={item.title} delay={0.2} className={isEven ? "md:translate-y-[100px]" : ""}>
                <div className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[3/4] rounded-[16px] overflow-hidden mb-8 shadow-xl">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:scale-[1.08]"
                    />
                    
                    {/* Hover Circle */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none">
                      <div className="w-[96px] h-[96px] bg-black rounded-full flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest text-center">View<br/>Case</span>
                      </div>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div>
                    <div className="text-rose-accent text-[10px] font-black uppercase tracking-[0.4em] mb-3">
                      {item.category}
                    </div>
                    <h3 className="text-3xl font-black text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-charcoal/50">
                      {item.meta}
                    </p>
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
