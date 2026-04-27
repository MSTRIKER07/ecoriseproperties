import React from 'react';
import { COMPANY } from '../data/content';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=Hello%20Ecorise%20Properties`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full shadow-2xl transition-transform hover:scale-110"
    >
      {/* Pulse Ring Animation via CSS (Tailwind arbitrary values or custom class) */}
      <div className="absolute inset-0 rounded-full border-2 border-emerald-400 opacity-0 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white z-10"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.031 0C5.385 0 0 5.388 0 12.031c0 2.656.84 5.158 2.378 7.251L.484 23.515l4.37-1.428A11.968 11.968 0 0012.031 24c6.646 0 12.03-5.385 12.03-12.031S18.677 0 12.031 0zm0 22.016c-2.222 0-4.372-.594-6.26-1.716l-.45-.266-2.6.85.864-2.534-.293-.464A9.972 9.972 0 012.016 12.03c0-5.54 4.508-10.046 10.046-10.046 5.54 0 10.046 4.506 10.046 10.046 0 5.54-4.506 10.045-10.045 10.045z" />
        <path d="M17.432 14.86c-.274-.136-1.62-.798-1.87-.888-.25-.09-.434-.136-.616.138-.182.274-.707.888-.868 1.07-.16.182-.32.204-.594.068-.274-.136-1.155-.426-2.198-1.355-.81-.72-1.356-1.61-1.516-1.884-.16-.274-.017-.422.12-.558.123-.122.274-.32.41-.478.136-.158.182-.274.274-.456.09-.182.046-.342-.022-.478-.068-.136-.616-1.482-.844-2.03-.222-.53-.448-.458-.616-.466h-.526c-.182 0-.478.068-.73.342-.25.274-.958.934-.958 2.278 0 1.344.98 2.644 1.118 2.826.136.182 1.926 2.94 4.664 4.12 1.83.788 2.535.84 3.44.704.905-.136 2.827-1.155 3.224-2.27.396-1.116.396-2.072.276-2.27-.12-.198-.432-.314-.706-.45z" />
      </svg>
    </a>
  );
}
