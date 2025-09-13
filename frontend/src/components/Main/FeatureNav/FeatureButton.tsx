import React from 'react';
import { FeatureOption } from '@/types/voice';

interface FeatureButtonProps {
  feature: FeatureOption;
  isActive: boolean;
  onClick: () => void;
}

export const FeatureButton: React.FC<FeatureButtonProps> = ({
  feature,
  isActive,
  onClick,
}) => {
  const { icon: Icon, label } = feature;

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-2 py-2 rounded-lg border-gray-200 transition-colors border font-bold ${
        isActive
          ? "bg-[#F2F2F2] text-black text-sm hover:border-black"
          : "bg-white text-gray-500 hover:border-black text-sm"
      }`}
    >
      <Icon className="w-8 h-5" />
      <span>{label.toUpperCase()}</span>
    </button>
  );
};