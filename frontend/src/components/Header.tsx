'use client';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSubmenu(null);
  };

  const navigationItems = [
    {
      id: 'creative',
      title: 'Creative Platform',
      items: [
        { title: 'Voice Library', href: '#' },
        { title: 'Speech Synthesis', href: '#' },
        { title: 'Voice Cloning', href: '#' }
      ]
    },
    {
      id: 'agents',
      title: 'Agents Platform',
      items: [
        { title: 'Conversational AI', href: '#' },
        { title: 'Voice Agents', href: '#' }
      ]
    },
    {
      id: 'developers',
      title: 'Developers',
      items: [
        { title: 'API Documentation', href: '#' },
        { title: 'SDKs', href: '#' },
        { title: 'Tutorials', href: '#' }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      items: [
        { title: 'Blog', href: '#' },
        { title: 'Help Center', href: '#' },
        { title: 'Case Studies', href: '#' }
      ]
    }
  ];

  const standaloneLinks = [
    { title: 'Enterprise', href: '#' },
    { title: 'Pricing', href: '#' }
  ];

  const ChevronDownIcon = () => (
    <svg className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const BackIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <>
      <header className="flex items-center justify-between px-2 py-2 bg-white max-w-7xl mx-auto my-2">
        <div className="text-xl font-bold text-black">IIElevenLabs</div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((navItem) => (
            <div key={navItem.id} className="relative group">
              <button className="flex items-center text-gray-900 hover:text-gray-1000 transition-colors duration-200 text-sm font-medium">
                {navItem.title}
                <ChevronDownIcon />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {navItem.items.map((item) => (
                  <a key={item.title} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {standaloneLinks.map((link) => (
            <a key={link.title} href={link.href} className="text-gray-900 hover:text-gray-1000 transition-colors duration-200 text-sm font-semibold">
              {link.title}
            </a>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-gray-900 hover:text-gray-1000 transition-colors duration-400 text-sm font-medium hover:bg-gray-400 transition-colors duration-200 px-4 py-1 rounded-full">
            Log in
          </button>
          <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-600 transition-colors duration-400 text-sm font-medium whitespace-nowrap">
  Sign up
</button>

        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-600 transition-colors duration-400 text-sm font-medium">
            Sign up
          </button>
          <button onClick={toggleMobileMenu} className="text-gray-700">
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleMobileMenu} />
      )}

      {/* Main Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">IIElevenLabs</h2>
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900">
            <CloseIcon />
          </button>
        </div>

        <div className="p-4 space-y-2 pb-24">
          {navigationItems.map((navItem) => (
            <button 
              key={navItem.id}
              onClick={() => setActiveSubmenu(navItem.id)}
              className="flex items-center justify-between w-full py-3 text-left text-sm font-medium text-gray-900 hover:text-gray-700 border-b border-gray-200"
            >
              {navItem.title}
              <ChevronRightIcon />
            </button>
          ))}

          {standaloneLinks.map((link) => (
            <a key={link.title} href={link.href} className="block py-3 text-sm font-semibold text-gray-900 hover:text-gray-700 border-b border-gray-200">
              {link.title}
            </a>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <div className="space-y-2">
            <button className="w-full text-center py-3 text-sm font-medium text-gray-900 hover:text-gray-700">
              Log in
            </button>
            <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Submenu Panels */}
      {navigationItems.map((navItem) => (
        <div key={`submenu-${navItem.id}`} className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-60 transform transition-transform duration-300 ease-in-out lg:hidden ${
          activeSubmenu === navItem.id ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-4 border-b">
            <button onClick={() => setActiveSubmenu(null)} className="flex items-center text-gray-700 hover:text-gray-900">
              <BackIcon />
              Back
            </button>
            <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900">
              <CloseIcon />
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

export default Header;