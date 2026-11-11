import React from 'react';
import { Bookmark, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  savedCount: number;
  onOpenBookmarks: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  savedCount,
  onOpenBookmarks,
  isDark,
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      {/* 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSelectCategory('All');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-2xl lg:text-3xl font-serif font-semibold tracking-widest uppercase text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          ÉTOILE JOURNAL
        </a>

        {/* Zone 2: 4–5 single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest font-medium text-stone-600 dark:text-stone-400">
          <button
            onClick={() => onSelectCategory('All')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 ${
              activeCategory === 'All'
                ? 'border-stone-900 text-stone-900 dark:border-stone-100 dark:text-stone-100 font-semibold'
                : 'border-transparent hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            All Dispatches
          </button>
          <button
            onClick={() => onSelectCategory('Womenswear')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 ${
              activeCategory === 'Womenswear'
                ? 'border-stone-900 text-stone-900 dark:border-stone-100 dark:text-stone-100 font-semibold'
                : 'border-transparent hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            Womenswear & Gowns
          </button>
          <button
            onClick={() => onSelectCategory('Menswear')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 ${
              activeCategory === 'Menswear'
                ? 'border-stone-900 text-stone-900 dark:border-stone-100 dark:text-stone-100 font-semibold'
                : 'border-transparent hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            Menswear & Tailoring
          </button>
          <button
            onClick={() => onSelectCategory('Couture Dialogue')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 ${
              activeCategory === 'Couture Dialogue'
                ? 'border-stone-900 text-stone-900 dark:border-stone-100 dark:text-stone-100 font-semibold'
                : 'border-transparent hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            Sartorial Dialogue
          </button>
          <a
            href="#anatomy-section"
            className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            Garment Anatomy
          </a>
        </nav>

        {/* Zone 3: 1 primary action area */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Atmosphere Mode"
            className="p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 rounded-md hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-colors"
            title={isDark ? 'Switch to Daylight Salon' : 'Switch to Midnight Salon'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenBookmarks}
            className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-medium text-stone-900 dark:text-stone-100 bg-stone-200/70 hover:bg-stone-300/80 dark:bg-stone-800 dark:hover:bg-stone-700 rounded-sm transition-colors whitespace-nowrap shrink-0"
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved ({savedCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
};
