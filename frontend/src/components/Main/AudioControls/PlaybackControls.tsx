import React from 'react';
import { Play, Pause, Download } from 'lucide-react';

interface PlaybackControlsProps {
  isPlaying: boolean;
  isLoading: boolean;
  onTogglePlayPause: () => void;
  onDownload: () => void;
}

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  isPlaying,
  isLoading,
  onTogglePlayPause,
  onDownload,
}) => {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <button
        onClick={onTogglePlayPause}
        disabled={isLoading}
        className="h-9 sm:h-9 md:h-10 bg-black text-white rounded-full flex items-center gap-1 sm:gap-2 rounded-full px-3 py-4 sm:px-3 md:px-4 transition-colors duration-200 text-xs sm:text-sm md:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#6E6E6E]"
      >
        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        <span className='md:flex hidden'>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
      </button>

      <button
        onClick={onDownload}
        className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 border border-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200  hidden md:flex items-center justify-center"
      >
        <Download size={14} />
      </button>
    </div>
  );
};