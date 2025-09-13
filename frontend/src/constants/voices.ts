import { VoiceOption } from '@/types/voice';

export const voiceOptions: VoiceOption[] = [
  { 
    id: 'samara', 
    name: 'Samara', 
    avatar: '🌊', 
    description: 'Narrate a story', 
    color: 'bg-blue-100 text-blue-800' 
  },
  { 
    id: '2speakers', 
    name: '2 speakers', 
    avatar: '🌸', 
    description: 'Create a dialogue', 
    color: 'bg-pink-100 text-pink-800' 
  },
  { 
    id: 'announcer', 
    name: 'Announcer', 
    avatar: '🎯', 
    description: 'Voiceover a game', 
    color: 'bg-green-100 text-green-800' 
  },
  { 
    id: 'sergeant', 
    name: 'Sergeant', 
    avatar: '🎖️', 
    description: 'Play a drill sergeant', 
    color: 'bg-purple-100 text-purple-800' 
  },
  { 
    id: 'spuds', 
    name: 'Spuds', 
    avatar: '🌍', 
    description: 'Recount an old story', 
    color: 'bg-cyan-100 text-cyan-800' 
  },
  { 
    id: 'jessica', 
    name: 'Jessica', 
    avatar: '🌺', 
    description: 'Provide customer support', 
    color: 'bg-rose-100 text-rose-800' 
  },
];

export const DEFAULT_TEXT_CONTENT = `In the ancient land of Eldoria, where skies shimmered and forests whispered secrets to the wind, lived a dragon named Zephyros. [sarcastically] Not the "burn it all down" kind... [giggles] but he was gentle, wise, with eyes like old stars. [whispers] Even the birds fell silent when he passed.`;