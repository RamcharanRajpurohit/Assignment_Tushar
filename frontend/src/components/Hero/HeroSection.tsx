import React from 'react';
import { HeroActions } from './HeroActions';
import { heroContent } from '@/constants/hero';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 mt-20">
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-12 lg:col-span-8 lg:col-start-3 order-1 lg:order-0">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-12"></div>
        </div>
        
        <div className="col-span-12 lg:col-span-8 lg:col-start-3 order-1 lg:order-0">
          <div className="flex items-center gap-4 justify-center">
            <h1 className="text-3xl lg:text-5xl font-sm text-center text-gray-1000 leading-tight">
              {heroContent.title}
            </h1>
          </div>
          
          <p className="text-lg lg:text-xl text-center text-gray-900 mt-4 whitespace-pre-wrap lg:-mx-10 leading-relaxed min-h-[7.5rem] lg:min-h-[4.875rem]">
            {heroContent.description}
          </p>
          
          <HeroActions />
          
          <div aria-hidden="true" className="-mt-1 h-1 w-full"></div>
        </div>
      </div>
    </div>
  );
};