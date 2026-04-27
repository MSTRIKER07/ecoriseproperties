import React from 'react';
import { COMPANY, NAV_LINKS } from '../data/content';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-offwhite pt-24 pb-12" style={{ backgroundColor: '#0F6E56' }}>
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-display font-bold mb-6 text-gold">{COMPANY.name}</h2>
            <p className="text-offwhite/70 max-w-sm mb-8 leading-relaxed">
              {COMPANY.tagline}
            </p>
            <div className="flex gap-4">
              {/* Social Links placeholder */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors text-white">in</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors text-white">fb</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors text-white">tw</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}><a href={link.href} className="text-offwhite/70 hover:text-gold transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> {link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span className="text-offwhite/70">{COMPANY.addressShort}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span className="text-offwhite/70">{COMPANY.phones[0]}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span className="text-offwhite/70">{COMPANY.emails[0]}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-offwhite/50">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
