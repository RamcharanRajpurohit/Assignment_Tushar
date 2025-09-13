import React from 'react';
import { TextArea } from './TextArea';
import { VoiceSelector } from './VoiceSelector';
import { AudioPlayer } from '../AudioControls/AudioPlayer';

interface TextToSpeechPanelProps {
  textContent: string;
  onTextChange: (text: string) => void;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  selectedVoice?: string;
  onVoiceSelect: (voiceId: string) => void;
}

export const TextToSpeechPanel: React.FC<TextToSpeechPanelProps> = ({
  textContent,
  onTextChange,
  selectedLanguage,
  onLanguageChange,
  selectedVoice,
  onVoiceSelect,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-1 relative bg-[#F2F2F2] overflow-hidden w-full max-w-6xl mx-auto rounded-3xl">
      {/* Rainbow Gradient Background */}
      <div
        className="absolute bottom-0 right-0 h-[220px] w-[450px] opacity-90 z-0"
        style={{
          background: "linear-gradient(0deg, rgba(243,244,246,0) 0%, rgba(243,244,246,0.04) 62.8%, #F3F4F6 100%), linear-gradient(270deg, rgba(243,244,246,0) 32.65%, #F3F4F6 93.63%), linear-gradient(230deg, #FD7336 24.11%, #D7A7FF 42.89%, #AFFAFF 62.49%)"
        }}
      />

      {/* White Card */}
      <div className="relative z-10 bg-white w-full h-[450px] rounded-3xl shadow-md flex flex-col justify-between mb-5">
        <TextArea
          value={textContent}
          onChange={onTextChange}
        />

        <VoiceSelector
          selectedVoice={selectedVoice}
          onVoiceSelect={onVoiceSelect}
        />

        <AudioPlayer
          text={textContent}
          selectedLanguage={selectedLanguage}
          onLanguageChange={onLanguageChange}
          selectedVoice={selectedVoice}
        />
      </div>

      {/* Footer text */}
      <div className="relative z-10 mb-2">
        <p className="text-center text-xs sm:text-sm text-black font-semibold">
          Powered by Eleven v3 (alpha)
        </p>
      </div>
    </div>
  );
};