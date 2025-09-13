import React from 'react';
import { Dropdown } from '@/components/UI/Dropdown';
import { languageOptions } from '@/constants/languages';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  const dropdownOptions = languageOptions.map(lang => ({
    id: lang.id,
    label: lang.name,
    icon: <span className="text-sm">{lang.flag}</span>,
  }));

  const currentLanguage = languageOptions.find(lang => lang.id === selectedLanguage);

  return (
    <div className="relative flex items-center gap-1 border border-gray-300 rounded-full px-2 py-3 hover:border-black transition-colors duration-200">
      <div className="w-6 h-4 rounded-sm flex items-center justify-center">
        <span className="text-sm">{currentLanguage?.flag}</span>
      </div>
      <Dropdown
        options={dropdownOptions}
        selectedId={selectedLanguage}
        onSelect={onLanguageChange}
      />
    </div>
  );
};
