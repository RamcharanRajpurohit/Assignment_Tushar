import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Download, ChevronDown, Volume2, Bot, Music, Mic, Type, MessageCircle, Radio } from 'lucide-react';

interface VoiceOption {
    id: string;
    name: string;
    avatar: string;
    description: string;
    color: string;
}

interface LanguageOption {
    id: string;
    name: string;
    flag: string;
}

const VoiceGeneratorUI: React.FC = () => {
    const [active, setActive] = useState("Text to Speech");
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [textContent, setTextContent] = useState<string>(`In the ancient land of Eldoria, where skies shimmered and forests whispered secrets to the wind, lived a dragon named Zephyros. [sarcastically] Not the "burn it all down" kind... [giggles] but he was gentle, wise, with eyes like old stars. [whispers] Even the birds fell silent when he passed.`);

    // Audio states
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const audioRef = useRef<HTMLAudioElement>(null);
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const features = [
        { icon: Volume2, label: "Text to Speech" },
        { icon: Bot, label: "Agents" },
        { icon: Music, label: "Music" },
        { icon: Mic, label: "Speech to Text" },
        { icon: Type, label: "Dubbing" },
        { icon: MessageCircle, label: "Voice Cloning" },
        { icon: Radio, label: "ElevenReader" },
    ];

    const voiceOptions: VoiceOption[] = [
        { id: 'samara', name: 'Samara', avatar: '🌊', description: 'Narrate a story', color: 'bg-blue-100 text-blue-800' },
        { id: '2speakers', name: '2 speakers', avatar: '🌸', description: 'Create a dialogue', color: 'bg-pink-100 text-pink-800' },
        { id: 'announcer', name: 'Announcer', avatar: '🎯', description: 'Voiceover a game', color: 'bg-green-100 text-green-800' },
        { id: 'sergeant', name: 'Sergeant', avatar: '🎖️', description: 'Play a drill sergeant', color: 'bg-purple-100 text-purple-800' },
        { id: 'spuds', name: 'Spuds', avatar: '🌍', description: 'Recount an old story', color: 'bg-cyan-100 text-cyan-800' },
        { id: 'jessica', name: 'Jessica', avatar: '🌺', description: 'Provide customer support', color: 'bg-rose-100 text-rose-800' },
    ];

    const languageOptions: LanguageOption[] = [
        { id: 'en', name: 'ENGLISH', flag: '🇺🇸' },
        { id: 'ar', name: 'ARABIC', flag: '🇪🇸' }
    ];

    const currentLanguage = languageOptions.find(lang => lang.id === selectedLanguage) || languageOptions[0];

    // Audio event handlers
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
            await new Promise(resolve => setTimeout(resolve, 1500));

            const response = await fetch(`${backendUrl}/api/audio/${selectedLanguage}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const testAudioUrl = data.audioUrl;
            setAudioUrl(testAudioUrl);
            if (audioRef.current) {
                audioRef.current.src = testAudioUrl;
                audioRef.current.onloadedmetadata = () => {
                    audioRef.current?.play();
                    setIsPlaying(true);
                };
            }
        } catch (error) {
            console.error('Error loading audio:', error);
            const mockAudioUrl = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTOL1/LSgusBKHbP8N2MPwcTcsbtuokQDVGH2OG6bh0mLYzX8tGAOgEvcM3z24k+ByqO0fvP';
            setAudioUrl(mockAudioUrl);
            if (audioRef.current) {
                audioRef.current.src = mockAudioUrl;
            }
        } finally {
            setIsLoading(false);
        }
    };

    const togglePlayPause = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            if (!audioUrl) {
                generateAudio();
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!audioRef.current || !duration) return;

        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const newTime = (clickX / width) * duration;

        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleDownload = async () => {
        if (!audioUrl) {
            await generateAudio();
            return;
        }

        const link = document.createElement('a');
        link.href = audioUrl;
        link.download = `generated_audio_${selectedLanguage}.mp3`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

    const renderContent = () => {
        if (active === "Text to Speech") {
            return (
                <div className="flex flex-col items-center justify-center p-1 relative bg-[#F2F2F2] overflow-hidden w-full max-w-6xl mx-auto rounded-3xl">
                    {/* Rainbow Gradient BG */}
                    <div
                        className="absolute bottom-0 right-0 h-[220px] w-[450px] opacity-90 z-0"
                        style={{
                            background:
                                "linear-gradient(0deg, rgba(243,244,246,0) 0%, rgba(243,244,246,0.04) 62.8%, #F3F4F6 100%), linear-gradient(270deg, rgba(243,244,246,0) 32.65%, #F3F4F6 93.63%), linear-gradient(230deg, #FD7336 24.11%, #D7A7FF 42.89%, #AFFAFF 62.49%)"
                        }}
                    />

                    {/* White Card */}
                    <div className="relative z-10 bg-white w-full h-[450px] rounded-3xl shadow-md flex flex-col justify-between mb-5">
                        {/* Story textarea */}
                        <div className="p-6 flex-1">
                            <textarea
                                value={textContent}
                                onChange={(e) => setTextContent(e.target.value)}
                                className="w-full h-full text-black leading-relaxed resize-none border-none outline-none bg-transparent"
                                placeholder="Enter your text here..."
                            />
                        </div>

                        {/* Voices */}
                        <div className="px-6">
                            <div className="flex flex-nowrap overflow-x-auto pb-2 gap-2 lg:flex-wrap lg:overflow-x-visible lg:pb-0 lg:gap-1">
                                {voiceOptions.map((voice) => (
                                    <button
                                        key={voice.id}
                                        onClick={() => {
                                            setAudioUrl(null);
                                            setCurrentTime(0);
                                            setDuration(0);
                                            setIsPlaying(false);
                                        }}
                                        className="flex items-center p-2 border border-gray-200 rounded-xl bg-white transition flex-shrink-0 hover:bg-gray-100 min-w-fit"
                                    >
                                        <div className={`w-8 h-5 flex items-center justify-center text-xl rounded-full ${voice.color} mr-3`}>
                                            {voice.avatar}
                                        </div>
                                        <div className="text-left flex items-center gap-1 text-sm whitespace-nowrap">
                                            <p className="font-semibold text-black">{voice.name}</p>
                                            <p>|</p>
                                            <p className="font-semibold text-black">{voice.description}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Audio Progress Bar and Controls */}
                        <div className="py-3 rounded-b-3xl">
                            {/* Progress Bar */}
                            <div className="mb-3">
                                <div
                                    className="w-full h-px bg-gray-200 rounded-full cursor-pointer"
                                    onClick={handleProgressClick}
                                >
                                    <div
                                        className="h-full bg-black rounded-full transition-all duration-150"
                                        style={{ width: `${progressPercentage}%` }}
                                    />
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-between px-8">
                                {/* Language Dropdown */}
                                <div className="relative flex items-center gap-2">
                                    <div className="w-6 h-4 rounded-sm flex items-center justify-center">
                                        <span className="text-sm">{currentLanguage.flag}</span>
                                    </div>
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                                            className="flex items-center gap-1 text-sm font-medium text-black hover:text-gray-700"
                                        >
                                            {currentLanguage.name}
                                            <ChevronDown size={14} />
                                        </button>

                                        {isLanguageDropdownOpen && (
                                            <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-32">
                                                {languageOptions.map((language) => (
                                                    <button
                                                        key={language.id}
                                                        onClick={() => {
                                                            setSelectedLanguage(language.id);
                                                            setIsLanguageDropdownOpen(false);
                                                            setAudioUrl(null);
                                                            setCurrentTime(0);
                                                            setDuration(0);
                                                            setIsPlaying(false);
                                                        }}
                                                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-black hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                                                    >
                                                        <span>{language.flag}</span>
                                                        <span>{language.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3">
                                    <button
                                        onClick={togglePlayPause}
                                        disabled={isLoading}
                                        className="h-8 sm:h-9 md:h-10 bg-black text-white rounded-full flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 transition-colors duration-200 text-xs sm:text-sm md:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#6E6E6E]"
                                    >
                                        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                                        <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                                    </button>

                                    <button
                                        onClick={handleDownload}
                                        className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 border border-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center"
                                    >
                                        <Download size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer text */}
                    <div className="relative z-10 mb-2">
                        <p className="text-center text-xs sm:text-sm text-black font-semibold">
                            Powered by Eleven v3 (alpha)
                        </p>
                    </div>

                    {/* Hidden audio element */}
                    <audio ref={audioRef} preload="metadata" />
                </div>
            );
        } else {
            // Empty state for other options
            return (
                <div className="flex flex-col items-center justify-center p-1 relative bg-[#F2F2F2] overflow-hidden w-full max-w-6xl mx-auto rounded-3xl">
                    <div className="relative z-10 bg-white w-full h-[450px] rounded-3xl shadow-md flex flex-col items-center justify-center mb-5">
                        <div className="text-center text-gray-500">
                            <div className="mb-4">
                                {React.createElement(features.find(f => f.label === active)?.icon || Volume2, { 
                                    size: 48, 
                                    className: "mx-auto mb-4 text-gray-400" 
                                })}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">{active}</h3>
                            <p className="text-sm text-gray-500">Coming soon...</p>
                        </div>
                    </div>
                    
                    {/* Footer text */}
                    <div className="relative z-10 mb-2">
                        <p className="text-center text-sm text-black font-semibold">
                            Powered by Eleven v3 (alpha)
                        </p>
                    </div>
                </div>
            );
        }
    };

    return (
        <>
            <div className="relative z-10 container mx-auto px-4 mt-20">
                <div className="relative mb-4 flex justify-center">
                    <div className="flex gap-2 overflow-x-auto scrollbar-none">
                        {features.map(({ icon: Icon, label }) => {
                            const isActive = active === label;
                            return (
                                <button
                                    key={label}
                                    onClick={() => setActive(label)}
                                    className={`inline-flex items-center gap-2 px-2 py-2 rounded-lg border-gray-200 transition-colors border font-bold ${
                                        isActive
                                            ? "bg-[#F2F2F2] text-black text-sm hover:border-black"
                                            : "bg-white text-gray-500 hover:border-black text-sm"
                                    }`}
                                >
                                    <Icon className="w-8 h-5" />
                                    <span>{label.toUpperCase()}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
                
                {renderContent()}
                
                <div className="text-center mt-10 mb-20 font-bold text-black flex justify-center items-center gap-2 flex-col sm:flex-row">
                    <p>EXPERIENCE THE FULL AUDIO AI PLATFORM</p>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:cursor-not-allowed transition-colors duration-200 h-10 text-sm font-medium min-w-24 px-2">
                        SIGN UP
                    </button>
                </div>
            </div>
        </>
    );
};

export default VoiceGeneratorUI;