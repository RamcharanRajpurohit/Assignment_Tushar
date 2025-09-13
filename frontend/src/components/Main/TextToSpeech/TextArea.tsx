import React from 'react';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder = "Enter your text here...",
}) => {
  return (
    <div className="p-6 flex-1">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full text-black leading-relaxed resize-none border-none outline-none bg-transparent"
        placeholder={placeholder}
      />
    </div>
  );
};