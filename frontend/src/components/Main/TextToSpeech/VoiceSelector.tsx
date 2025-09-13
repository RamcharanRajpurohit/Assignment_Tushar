import React from 'react';
import { VoiceCard } from './VoiceCard';
import { voiceOptions } from '@/constants/voices';

interface VoiceSelectorProps {
  selectedVoice?: string;
  onVoiceSelect: (voiceId: string) => void;
}

export const VoiceSelector: React.FC<VoiceSelectorProps> = ({
  selectedVoice,
  onVoiceSelect,
}) => {
  return (
    <div className="px-6">
      <div className="flex flex-nowrap overflow-x-auto pb-2 gap-2 lg:flex-wrap lg:overflow-x-visible lg:pb-0 lg:gap-1">
        {voiceOptions.map((voice) => (
          <VoiceCard
            key={voice.id}
            voice={voice}
            onSelect={onVoiceSelect}
          />
        ))}
      </div>
    </div>
  );
};