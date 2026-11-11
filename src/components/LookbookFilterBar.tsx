import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface LookbookFilterBarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSort: 'recent' | 'likes' | 'readTime';
  onSelectSort: (sort: 'recent' | 'likes' | 'readTime') => void;
  totalCount: number;
}

export const LookbookFilterBar: React.FC<LookbookFilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedSort,
  onSelectSort,
  totalCount,
}) => {
  const categories = [
    { id: 'All', label: 'All Dispatches' },
    { id: 'Womenswear', label: 'Womenswear & Gowns' },
    { id: 'Menswear', label: 'Menswear & Tailoring' },
    { id: 'Couture Dialogue', label: 'Sartorial Dialogue' },
  ];

  return (
    <div className="py-6 border-b border-stone-200 dark:border-stone-800 space-y-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 dark:bg-stone-900 border border-stone-300/80 dark:border-stone-800 rounded-sm overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs tracking-wider uppercase whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-medium shadow-xs'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[220px] sm:min-w-[260px]">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search gowns, tailoring, fabrics..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-8 pr-8 py-1.5 text-xs bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 rounded-xs placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400">
              <SlidersHorizontal className="w-3 h-3" />
              <span className="hidden sm:inline uppercase tracking-wider text-[11px]">Sort:</span>
              <select
                value={selectedSort}
                onChange={(e) => onSelectSort(e.target.value as any)}
                aria-label="Sort Dispatches"
                className="bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200 text-xs px-2 py-1.5 rounded-xs focus:outline-hidden"
              >
                <option value="recent">Chronological</option>
                <option value="likes">Most Applauded</option>
                <option value="readTime">Reading Duration</option>
              </select>
            </div>

            <span className="text-xs text-stone-400 tabular-nums">
              {totalCount} {totalCount === 1 ? 'dispatch' : 'dispatches'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
