import React from 'react';
import {features} from '@/constants/features';
import { Volume2 } from 'lucide-react';

interface EmptyStateProps {
  activeFeature: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ activeFeature }) => {
  const feature = features.find(f => f.label === activeFeature);
  const Icon = feature?.icon || Volume2;

  return (
    <div className="flex flex-col items-center justify-center p-1 relative bg-[#F2F2F2] overflow-hidden w-full max-w-6xl mx-auto rounded-3xl">
      <div className="relative z-10 bg-white w-full h-[450px] rounded-3xl shadow-md flex flex-col items-center justify-center mb-5">
        <div className="text-center text-gray-500">
          <div className="mb-4">
            <Icon size={48} className="mx-auto mb-4 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">{activeFeature}</h3>
          <p className="text-sm text-gray-500">Coming soon...</p>
        </div>
      </div>
      
      <div className="relative z-10 mb-2">
        <p className="text-center text-sm text-black font-semibold">
          Powered by Eleven v3 (alpha)
        </p>
      </div>
    </div>
  );
};