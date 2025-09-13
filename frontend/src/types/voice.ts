export interface VoiceOption {
  id: string;
  name: string;
  avatar: string;
  description: string;
  color: string;
}

export interface LanguageOption {
  id: string;
  name: string;
  flag: string;
}

export interface FeatureOption {
  id: string;
  label: string;
  icon: any; // LucideIcon type
}