'use client';
import React, { useState } from 'react';
import { FeatureNavigation } from './FeatureNav';
import { TextToSpeechPanel } from './TextToSpeech/TextToSpeechPanel';
import { EmptyState } from './EmptyState/EmptyState';
import { CallToAction } from './CallToAction/CallToAction';
import { DEFAULT_ACTIVE_FEATURE } from '@/constants/features';
import { DEFAULT_LANGUAGE } from '@/constants/languages';
import { DEFAULT_TEXT_CONTENT } from '@/constants/voices';

export const VoiceGeneratorUI: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(DEFAULT_ACTIVE_FEATURE);
  const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LANGUAGE);
  const [textContent, setTextContent] = useState(DEFAULT_TEXT_CONTENT);
  const [selectedVoice, setSelectedVoice] = useState<string>();

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    // Reset audio when language changes
  };

  const handleVoiceSelect = (voiceId: string) => {
    setSelectedVoice(voiceId);
    // Reset audio when voice changes
  };

  const renderContent = () => {
    if (activeFeature === "Text to Speech") {
      return (
        <TextToSpeechPanel
          textContent={textContent}
          onTextChange={setTextContent}
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
          selectedVoice={selectedVoice}
          onVoiceSelect={handleVoiceSelect}
        />
      );
    }

    return <EmptyState activeFeature={activeFeature} />;
  };

  return (
    <div className="relative z-10 container mx-auto px-4 mt-20">
      <FeatureNavigation
        activeFeature={activeFeature}
        onFeatureChange={setActiveFeature}
      />
      
      {renderContent()}
      
      <CallToAction />
    </div>
  );
};