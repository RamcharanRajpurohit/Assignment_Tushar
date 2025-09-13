import React from 'react';
import { FeatureButton } from './FeatureButton';
import { features } from '@/constants/features';

interface FeatureNavigationProps {
  activeFeature: string;
  onFeatureChange: (feature: string) => void;
}

export const FeatureNavigation: React.FC<FeatureNavigationProps> = ({
  activeFeature,
  onFeatureChange,
}) => {
  return (
    <div className="relative mb-4 flex justify-center">
      <div className="flex gap-2 overflow-x-auto scrollbar-none">
        {features.map((feature) => (
          <FeatureButton
            key={feature.id}
            feature={feature}
            isActive={activeFeature === feature.label}
            onClick={() => onFeatureChange(feature.label)}
          />
        ))}
      </div>
    </div>
  );
};