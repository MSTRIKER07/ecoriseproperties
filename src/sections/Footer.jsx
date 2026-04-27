import React from 'react';

export default function Footer() {
  return (
    <footer className="py-24 px-6 lg:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="text-3xl font-serif italic font-bold text-gold-light mb-6">Antigravity.</div>
            <p className="text-gold/40 text-lg max-w-md leading-relaxed">
              Pushing the boundaries of interface design. Experience the future of SaaS interaction today.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-[32px] border border-white/5">
            <h3 className="text-xl font-serif italic text-gold-light mb-4">Stay ahead of the curve</h3>
            <p className="text-gold/40 mb-6">Join our newsletter for the latest design trends and product updates.</p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-all text-gold flex-grow"
              />
              <button className="bg-gold text-dark px-8 py-4 rounded-2xl font-bold hover:bg-gold-light gold-glow transition-all whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-16 border-t border-white/5">
          <div className="flex gap-12 text-sm font-medium text-gold/40">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <p className="text-gold/20 text-sm">
            © 2026 Antigravity. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
