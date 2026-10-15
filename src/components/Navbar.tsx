import React from 'react';

interface NavbarProps {
  selectedCount: number;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ selectedCount, onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="font-display text-xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-800"
        >
          Karajaw Surigao
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600"
        >
          <a
            href="#destinations"
            onClick={(e) => handleNavClick(e, 'destinations')}
            className="hover:text-teal-900 hover:underline underline-offset-8 decoration-teal-800/60 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Destinations
          </a>
          <a
            href="#travel-guide"
            onClick={(e) => handleNavClick(e, 'travel-guide')}
            className="hover:text-teal-900 hover:underline underline-offset-8 decoration-teal-800/60 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Travel Guide
          </a>
          <a
            href="#culture-cuisine"
            onClick={(e) => handleNavClick(e, 'culture-cuisine')}
            className="hover:text-teal-900 hover:underline underline-offset-8 decoration-teal-800/60 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Culture &amp; Cuisine
          </a>
          <a
            href="#travel-tips"
            onClick={(e) => handleNavClick(e, 'travel-tips')}
            className="hover:text-teal-900 hover:underline underline-offset-8 decoration-teal-800/60 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Travel Tips
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hover:text-teal-900 hover:underline underline-offset-8 decoration-teal-800/60 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Inquire
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 text-xs font-semibold text-white bg-teal-900 rounded-lg hover:bg-teal-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900"
          >
            {selectedCount > 0 ? `Plan Trip (${selectedCount} Selected)` : 'Plan Your Trip'}
          </button>
        </div>
      </div>
    </header>
  );
};
