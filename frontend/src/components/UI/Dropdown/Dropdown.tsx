import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from '@/components/UI/Icons';

interface DropdownOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  options: DropdownOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  placeholder?: string;
  className?: string;
  dropdownClassName?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedId,
  onSelect,
  placeholder = 'Select option',
  className = '',
  dropdownClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.id === selectedId);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (optionId: string) => {
    onSelect(optionId);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium text-black hover:text-gray-700"
      >
        <span className='md:flex hidden'>{selectedOption?.label || placeholder}</span>
        <ChevronDown  />
      </button>

      {isOpen && (
        <div className={`absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-32 ${dropdownClassName}`}>
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-black hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
            >
              {option.icon}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};