'use client';

import {
  Volume2,
  Bot,
  Music,
  Mic,
  Type,
  MessageCircle,
  Radio
} from "lucide-react";
import { useState } from "react";

export default function Main() {
  const [active, setActive] = useState("Text to Speech");

  const features = [
    { icon: Volume2, label: "Text to Speech" },
    { icon: Bot, label: "Agents" },
    { icon: Music, label: "Music" },
    { icon: Mic, label: "Speech to Text" },
    { icon: Type, label: "Dubbing" },
    { icon: MessageCircle, label: "Voice Cloning" },
    { icon: Radio, label: "ElevenReader" },
  ];

  return (
    <div className="relative z-10 container mx-auto px-4 mt-20">
      <div className="relative mb-4 flex justify-center">
        <div className="flex gap-2 overflow-x-auto scrollbar-none">
          {features.map(({ icon: Icon, label }) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={`inline-flex items-center gap-2 px-2 py-2 rounded-lg  border-gray-200 transition-colors border font-bold
  ${isActive
                    ? "bg-[#F2F2F2] text-black  text-sm  hover:border-black"
                    : "bg-white text-gray-500   hover:border-black text-sm "
                  }`}

              >
                <Icon className="w-8 h-5" />
                <span>{label.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
