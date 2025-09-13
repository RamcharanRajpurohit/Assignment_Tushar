import React from 'react';
import { NavigationDropdown } from './NavigationDropdown';
import { NavigationItem, StandaloneLink } from '@/types/navigation';

interface DesktopNavigationProps {
  navigationItems: NavigationItem[];
  standaloneLinks: StandaloneLink[];
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navigationItems,
  standaloneLinks
}) => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navigationItems.map((navItem) => (
        <NavigationDropdown key={navItem.id} navItem={navItem} />
      ))}

      {standaloneLinks.map((link) => (
        <a 
          key={link.title} 
          href={link.href} 
          className="text-gray-900 hover:text-gray-1000 transition-colors duration-200 text-sm font-semibold"
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
};