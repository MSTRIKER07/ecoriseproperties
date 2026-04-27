import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ActionButton({ children, onClick, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={`group flex items-center justify-between gap-4 bg-white rounded-full pl-6 pr-2 py-2 hover:scale-105 transition-transform duration-300 ${className}`}
    >
      <span className="font-medium text-zinc-900">{children}</span>
      <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center group-hover:bg-zinc-700 transition-colors duration-300 flex-shrink-0">
        <ArrowRight className="w-5 h-5 text-white" />
      </div>
    </button>
  );
}
