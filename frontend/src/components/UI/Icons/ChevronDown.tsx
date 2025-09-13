import React from 'react';

interface ChevronDownProps {
  className?: string;
}

export const ChevronDown: React.FC<ChevronDownProps> = ({ 
  className = "ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" 
}) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);