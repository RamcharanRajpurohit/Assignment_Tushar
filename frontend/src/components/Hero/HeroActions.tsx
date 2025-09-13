import React from 'react';

import { heroContent } from '@/constants/hero';

export const HeroActions: React.FC = () => {
  const { ctaButtons } = heroContent;

  return (
    <div className="mt-10 flex flex-wrap gap-x-2 gap-y-2 lg:flex-row lg:items-center justify-center">
     
        <a
          href={ctaButtons.primary.href}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:cursor-not-allowed transition-colors duration-200 h-10 text-sm font-medium min-w-24 px-2"
        >
          {ctaButtons.primary.text}
        </a>
   

        <a
          href={ctaButtons.secondary.href}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#E5E5E5] text-black text-bold hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:cursor-not-allowed transition-colors duration-200 h-10 text-sm font-medium min-w-32 px-2"
        >
          {ctaButtons.secondary.text}
        </a>
    
    </div>
  );
};