import React from 'react';
import { ProgressBar } from './ProgressBar';
import { PlaybackControls } from './PlaybackControls';
import { LanguageSelector } from './LanguageSelector';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';

interface AudioPlayerProps {
  text: string;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  selectedVoice?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  text,
  selectedLanguage,
  onLanguageChange,
  selectedVoice,
}) => {
  const {
    isPlaying,
    isLoading,
    currentTime,
    duration,
    togglePlayPause,
    setCurrentTime,
    downloadAudio,
    audioRef,
  } = useAudioPlayer({
    text,
    language: selectedLanguage,
    voiceId: selectedVoice,
  });

  return (
    <div className="py-3 rounded-b-3xl">
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onTimeChange={setCurrentTime}
      />

      <div className="flex items-center justify-between px-8">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onLanguageChange={onLanguageChange}
        />

        <PlaybackControls
          isPlaying={isPlaying}
          isLoading={isLoading}
          onTogglePlayPause={togglePlayPause}
          onDownload={downloadAudio}
        />
      </div>

      <audio ref={audioRef} preload="metadata" />
    </div>
  );
};
