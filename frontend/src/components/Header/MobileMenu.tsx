import React from 'react';
import { Close, ChevronRight, Back } from '@/components/UI/Icons';
import { AuthButtons } from './AuthButtons';
import { NavigationItem, StandaloneLink } from '@/types/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  activeSubmenu: string | null;
  navigationItems: NavigationItem[];
  standaloneLinks: StandaloneLink[];
  onToggleMenu: () => void;
  onSetActiveSubmenu: (submenu: string | null) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeSubmenu,
  navigationItems,
  standaloneLinks,
  onToggleMenu,
  onSetActiveSubmenu
}) => {
  return (
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onToggleMenu} />
      )}

      {/* Main Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">IIElevenLabs</h2>
          <button onClick={onToggleMenu} className="text-gray-700 hover:text-gray-900">
            <Close />
          </button>
        </div>

        <div className="p-4 space-y-2 pb-24">
          {navigationItems.map((navItem) => (
            <button 
              key={navItem.id}
              onClick={() => onSetActiveSubmenu(navItem.id)}
              className="flex items-center justify-between w-full py-3 text-left text-sm font-medium text-gray-900 hover:text-gray-700 border-b border-gray-200"
            >
              {navItem.title}
              <ChevronRight />
            </button>
          ))}

          {standaloneLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              className="block py-3 text-sm font-semibold text-gray-900 hover:text-gray-700 border-b border-gray-200"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <AuthButtons layout="vertical" />
        </div>
      </div>

      {/* Dynamic Submenu Panels */}
      {navigationItems.map((navItem) => (
        <div key={`submenu-${navItem.id}`} className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-60 transform transition-transform duration-300 ease-in-out lg:hidden ${
          activeSubmenu === navItem.id ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-4 border-b">
            <button 
              onClick={() => onSetActiveSubmenu(null)} 
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <Back />
              Back
            </button>
            <button onClick={onToggleMenu} className="text-gray-700 hover:text-gray-900">
              <Close />
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">{navItem.title}</h3>
            <div className="space-y-2">
              {navItem.items.map((item, index) => (
                <a 
                  key={item.title} 
                  href={item.href} 
                  className={`block py-3 text-sm text-gray-700 hover:text-gray-900 ${
                    index < navItem.items.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};