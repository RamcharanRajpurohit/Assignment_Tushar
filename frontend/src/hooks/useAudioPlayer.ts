import { useState, useRef, useEffect } from 'react';
import { AudioPlayerHookReturn } from '@/types/audio';
import { generateAudioFromText } from '@/services/audioService';
import { getMockAudioUrl, downloadFile } from '@/utils/audioUtils';
import { getProgressPercentage } from '@/utils/timeUtils';

interface UseAudioPlayerProps {
  text: string;
  language: string;
  voiceId?: string;
}

export const useAudioPlayer = ({
  text,
  language,
  voiceId,
}: UseAudioPlayerProps): AudioPlayerHookReturn => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioLanguage, setAudioLanguage] = useState(language); // track current audio language

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioUrl]);

  const generateAudio = async () => {
    setIsLoading(true);
    try {
      const result = await generateAudioFromText(text, language, voiceId);
      if (result.success && result.audioUrl) {
        setAudioUrl(result.audioUrl);
        setAudioLanguage(language); // update audio language
        if (audioRef.current) {
          audioRef.current.src = result.audioUrl;
        }
      } else {
        const mockUrl = getMockAudioUrl();
        setAudioUrl(mockUrl);
        if (audioRef.current) audioRef.current.src = mockUrl;
      }
    } catch (error) {
      console.error('Error generating audio:', error);
      const mockUrl = getMockAudioUrl();
      setAudioUrl(mockUrl);
      if (audioRef.current) audioRef.current.src = mockUrl;
    } finally {
      setIsLoading(false);
    }
  };

  const play = async () => {
    if (!audioRef.current) return;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlayPause = async () => {
    if (!audioRef.current) return;

    // lazy fetch: generate only if no audio or language changed
    if (!audioUrl || audioLanguage !== language) {
      await generateAudio();
    }

    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleSetCurrentTime = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const downloadAudio = async () => {
    if (!audioUrl) await generateAudio();
    if (audioUrl) downloadFile(audioUrl, `generated_audio_${language}.mp3`);
  };

  const progressPercentage = getProgressPercentage(currentTime, duration);

  return {
    isPlaying,
    isLoading,
    currentTime,
    duration,
    audioUrl,
    play,
    pause,
    togglePlayPause,
    setCurrentTime: handleSetCurrentTime,
    generateAudio,
    downloadAudio,
    audioRef,
    progressPercentage,
  };
};
