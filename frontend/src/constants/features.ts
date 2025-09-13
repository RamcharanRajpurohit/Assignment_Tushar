import { Volume2, Bot, Music, Mic, Type, MessageCircle, Radio } from 'lucide-react';
import { FeatureOption } from '@/types/voice';

export const features: FeatureOption[] = [
  { id: 'text-to-speech', label: 'Text to Speech', icon: Volume2 },
  { id: 'agents', label: 'Agents', icon: Bot },
  { id: 'music', label: 'Music', icon: Music },
  { id: 'speech-to-text', label: 'Speech to Text', icon: Mic },
  { id: 'dubbing', label: 'Dubbing', icon: Type },
  { id: 'voice-cloning', label: 'Voice Cloning', icon: MessageCircle },
  { id: 'eleven-reader', label: 'ElevenReader', icon: Radio },
];

export const DEFAULT_ACTIVE_FEATURE = 'Text to Speech';