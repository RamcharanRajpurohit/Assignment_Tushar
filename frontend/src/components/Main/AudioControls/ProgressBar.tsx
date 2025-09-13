import React from 'react';
import { calculateTimeFromClick } from '@/utils/audioUtils';
import { getProgressPercentage } from '@/utils/timeUtils';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onTimeChange: (time: number) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentTime,
  duration,
  onTimeChange,
}) => {
  const progressPercentage = getProgressPercentage(currentTime, duration);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newTime = calculateTimeFromClick(e, duration);
    onTimeChange(newTime);
  };

  return (
    <div className="mb-3">
      <div
        className="w-full h-px bg-gray-200 rounded-full cursor-pointer"
        onClick={handleClick}
      >
        <div
          className="h-full bg-black rounded-full transition-all duration-150"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};