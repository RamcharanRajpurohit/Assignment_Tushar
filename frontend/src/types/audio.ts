export interface AudioState {
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
  audioUrl: string | null;
}

export interface AudioControls {
  play: () => void;
  pause: () => void;
  togglePlayPause: () => void;
  setCurrentTime: (time: number) => void;
  generateAudio: () => Promise<void>;
  downloadAudio: () => Promise<void>;
}

export interface AudioPlayerHookReturn extends AudioState, AudioControls {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  progressPercentage: number;
}