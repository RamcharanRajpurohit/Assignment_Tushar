import React from 'react';
import { ChevronDown } from '@/components/UI/Icons';
import { NavigationItem } from '@/types/navigation';

interface NavigationDropdownProps {
  navItem: NavigationItem;
}

export const NavigationDropdown: React.FC<NavigationDropdownProps> = ({ navItem }) => {
  return (
    <div className="relative group">
      <button className="flex items-center text-gray-900 hover:text-gray-1000 transition-colors duration-200 text-sm font-medium">
        {navItem.title}
        <ChevronDown />
      </button>
      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {navItem.items.map((item) => (
          <a 
            key={item.title} 
            href={item.href} 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};