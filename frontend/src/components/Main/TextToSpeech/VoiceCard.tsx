import React from 'react';
import { VoiceOption } from '@/types/voice';

interface VoiceCardProps {
  voice: VoiceOption;
  onSelect: (voiceId: string) => void;
}

export const VoiceCard: React.FC<VoiceCardProps> = ({ voice, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(voice.id)}
      className="flex items-center p-2 border border-gray-200 rounded-xl bg-white transition flex-shrink-0 hover:bg-gray-100 min-w-fit"
    >
      <div className={`w-8 h-5 flex items-center justify-center text-xl rounded-full ${voice.color} mr-3`}>
        {voice.avatar}
      </div>
      <div className="text-left flex items-center gap-1 text-sm whitespace-nowrap">
        <p className="font-semibold text-black">{voice.name}</p>
        <p>|</p>
        <p className="font-semibold text-black">{voice.description}</p>
      </div>
    </button>
  );
};