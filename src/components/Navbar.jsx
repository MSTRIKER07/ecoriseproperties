import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full h-24 z-50 transition-all duration-[var(--speed-base)] ease-[var(--ease-custom)] ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-forest/5' : 'bg-transparent'}`}>
      <div className="w-full max-w-[1400px] h-full mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-xl md:text-2xl font-display font-bold transition-colors ${scrolled ? 'text-forest' : 'text-white'}`}
        >
          {COMPANY.name.split(' ')[0]} <span className={scrolled ? 'font-light' : 'font-light text-gold'}>{COMPANY.name.split(' ').slice(1).join(' ')}</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-sans font-medium uppercase text-sm tracking-wider transition-colors hover:text-gold ${scrolled ? 'text-forest/80' : 'text-white/90 hover:text-gold'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-6 py-2 rounded-full font-bold uppercase tracking-wider transition-all duration-[var(--speed-base)] ease-[var(--ease-custom)] ${scrolled ? 'bg-forest text-white hover:bg-forest/90' : 'bg-gold text-dark hover:bg-white shadow-lg'}`}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-forest' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
            className="lg:hidden absolute top-24 left-0 w-full bg-white shadow-xl overflow-hidden border-t border-forest/10"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-xl text-forest font-bold"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-forest text-white w-full py-4 rounded-lg font-bold uppercase tracking-wider mt-4"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
