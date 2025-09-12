'use client';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 mt-20">
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-12 lg:col-span-8 lg:col-start-3 order-1 lg:order-0">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-12"></div>
        </div>
        
        <div className="col-span-12 lg:col-span-8 lg:col-start-3 order-1 lg:order-0">
          <div className="flex items-center gap-4 justify-center">
            <h1 className="text-3xl lg:text-5xl font-sm text-center text-gray-1000 leading-tight">
              The most realistic voice AI platform
            </h1>
          </div>
          
          <p className="text-lg lg:text-xl text-center text-gray-900 mt-4 whitespace-pre-wrap lg:-mx-10 leading-relaxed min-h-[7.5rem] lg:min-h-[4.875rem]">
            AI voice models and products powering millions of developers, creators, and enterprises. From low‑latency conversational agents to the leading AI voice generator for voiceovers and audiobooks.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-x-2 gap-y-2 lg:flex-row lg:items-center justify-center">
            <div className="opacity-0 animate-[fadeInUp_0.6s_0.2s_ease-out_forwards]">
              <a 
                href="/app/sign-up" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:cursor-not-allowed transition-colors duration-200 h-10  text-sm font-medium min-w-24 px-2"
              >
                SIGN UP
              </a>
            </div>
            
            <div className="opacity-0 animate-[fadeInUp_0.6s_0.5s_ease-out_forwards]">
              <a 
                href="/contact-sales" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#E5E5E5] text-black text-bold hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:cursor-not-allowed transition-colors duration-200 h-10  text-sm font-medium min-w-32 px-2"
              >
                CONTACT SALES
              </a>
            </div>
          </div>
          
          <div aria-hidden="true" className="-mt-1 h-1 w-full"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;