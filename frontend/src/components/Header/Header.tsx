'use client';
import React, { useState } from 'react';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileMenu } from './MobileMenu';
import { AuthButtons } from './AuthButtons';
import { Menu } from '@/components/UI/Icons';
import { Button } from '@/components/UI/Button';
import { navigationItems, standaloneLinks } from '@/constants/navigation';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSubmenu(null);
  };

  return (
    <>
      <header className="flex items-center justify-between px-2 py-2 bg-white max-w-7xl mx-auto my-2">
        <div className="text-xl font-bold text-black">IIElevenLabs</div>

        {/* Desktop Navigation */}
        <DesktopNavigation 
          navigationItems={navigationItems}
          standaloneLinks={standaloneLinks}
        />

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex">
          <AuthButtons />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-4">
          <Button variant="primary" size="sm">
            Sign up
          </Button>
          <button onClick={toggleMobileMenu} className="text-gray-700">
            <Menu />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeSubmenu={activeSubmenu}
        navigationItems={navigationItems}
        standaloneLinks={standaloneLinks}
        onToggleMenu={toggleMobileMenu}
        onSetActiveSubmenu={setActiveSubmenu}
      />
    </>
  );
};