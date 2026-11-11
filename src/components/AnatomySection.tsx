import React, { useState } from 'react';
import { BlogPost, AnatomySpot } from '../types/blog';
import { Check, Info, Layers, Scissors } from 'lucide-react';

interface AnatomySectionProps {
  posts: BlogPost[];
  onOpenArticle: (post: BlogPost) => void;
}

export const AnatomySection: React.FC<AnatomySectionProps> = ({ posts, onOpenArticle }) => {
  const [selectedPostIndex, setSelectedPostIndex] = useState(0);
  const activePost = posts[selectedPostIndex] || posts[0];
  const [activeSpot, setActiveSpot] = useState<AnatomySpot | null>(
    activePost.anatomyHotspots[0] || null
  );

  const handleSelectPost = (idx: number) => {
    setSelectedPostIndex(idx);
    setActiveSpot(posts[idx]?.anatomyHotspots[0] || null);
  };

  return (
    <section id="anatomy-section" className="py-16 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-2">
              <Scissors className="w-3.5 h-3.5" />
              <span>Sartorial Anatomy & Craftsmanship</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-medium text-stone-900 dark:text-stone-50">
              The Architecture of Seams, Folds & Silhouettes
            </h2>
          </div>
          <p className="max-w-md text-xs lg:text-sm text-stone-600 dark:text-stone-400 font-serif italic">
            Select a piece below and hover or tap the anatomical pins to reveal how master couturiers and Savile Row cutters sculpt drape, tension, and volume.
          </p>
        </div>

        {/* Garment Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-stone-200 dark:border-stone-800">
          {posts.map((post, idx) => (
            <button
              key={post.id}
              onClick={() => handleSelectPost(idx)}
              className={`px-4 py-2.5 text-xs uppercase tracking-wider whitespace-nowrap shrink-0 transition-colors ${
                selectedPostIndex === idx
                  ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-medium'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 dark:bg-stone-800/80 dark:text-stone-300 dark:hover:bg-stone-800'
              }`}
            >
              {post.category === 'Womenswear'
                ? '♀ '
                : post.category === 'Menswear'
                ? '♂ '
                : '⚥ '}
              {post.title.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Anatomy Canvas & Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Interactive Hotspot Stage */}
          <div className="lg:col-span-7 relative bg-stone-900 rounded-xs overflow-hidden border border-stone-300 dark:border-stone-800">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full">
              <img
                src={activePost.heroImage}
                alt={activePost.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-95"
              />

              {/* Hotspot Markers */}
              {activePost.anatomyHotspots.map((spot, index) => {
                const isSelected = activeSpot?.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveSpot(spot)}
                    onMouseEnter={() => setActiveSpot(spot)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-amber-400 text-stone-950 scale-110 shadow-lg ring-4 ring-amber-400/40'
                        : 'bg-stone-950/80 text-stone-100 hover:bg-amber-400 hover:text-stone-950 border border-stone-400/50'
                    }`}
                    aria-label={spot.title}
                  >
                    <span className="text-xs font-bold font-mono">{index + 1}</span>
                  </button>
                );
              })}

              <div className="absolute bottom-3 left-3 bg-stone-950/85 backdrop-blur-md px-3 py-1.5 text-[11px] text-stone-300 uppercase tracking-widest flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-amber-400" />
                <span>Tap numbers on garment to inspect tailoring</span>
              </div>
            </div>
          </div>

          {/* Right Column: Active Tailoring Secret & Technical Spec Sheet */}
          <div className="lg:col-span-5 space-y-6">
            {/* Active Hotspot Callout Box */}
            <div className="p-6 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Anatomy Point {activeSpot ? activePost.anatomyHotspots.findIndex(s => s.id === activeSpot.id) + 1 : 1}</span>
                </span>
                <span className="text-xs text-stone-400 uppercase tracking-widest font-mono">
                  {activePost.category}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-medium text-stone-900 dark:text-stone-100 mb-2">
                {activeSpot ? activeSpot.title : 'Select an anatomical marker'}
              </h3>

              <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300 font-serif">
                {activeSpot ? activeSpot.description : 'Hover or tap over any marker on the model to read the pattern-cutting specifications.'}
              </p>
            </div>

            {/* Fabric & Silhouette Dossier */}
            <div className="p-6 bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="text-xs uppercase tracking-widest font-semibold text-stone-500 dark:text-stone-400">
                Garment Dossier & Fabric Architecture
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <dt className="text-stone-500 dark:text-stone-400 uppercase tracking-wider">Silhouette</dt>
                  <dd className="font-serif text-stone-900 dark:text-stone-200 font-medium">
                    {activePost.fabricSpecs.silhouette}
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-stone-500 dark:text-stone-400 uppercase tracking-wider">Mill Origin</dt>
                  <dd className="font-serif text-stone-900 dark:text-stone-200 font-medium">
                    {activePost.fabricSpecs.origin}
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-stone-500 dark:text-stone-400 uppercase tracking-wider">Fabric Weight</dt>
                  <dd className="font-serif text-stone-900 dark:text-stone-200 font-medium tabular-nums">
                    {activePost.fabricSpecs.weight}
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-stone-500 dark:text-stone-400 uppercase tracking-wider">Drape Behavior</dt>
                  <dd className="font-serif text-stone-900 dark:text-stone-200 font-medium">
                    {activePost.fabricSpecs.drapeFactor}
                  </dd>
                </div>
                <div className="sm:col-span-2 space-y-1 pt-2 border-t border-stone-200 dark:border-stone-800">
                  <dt className="text-stone-500 dark:text-stone-400 uppercase tracking-wider">Material Composition</dt>
                  <dd className="text-stone-900 dark:text-stone-200">
                    {activePost.fabricSpecs.composition}
                  </dd>
                </div>
              </dl>

              {/* Color Swatches */}
              <div className="pt-3 border-t border-stone-200 dark:border-stone-800">
                <div className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                  Extracted Atelier Swatches
                </div>
                <div className="flex flex-wrap gap-2">
                  {activePost.colorPalette.map((color) => (
                    <div
                      key={color.name}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-stone-100 dark:bg-stone-800 rounded-xs text-[11px] text-stone-700 dark:text-stone-300"
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-stone-300 dark:border-stone-600 block shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                      <span className="font-mono text-[10px] text-stone-400">({color.hex})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open full essay */}
              <div className="pt-4">
                <button
                  onClick={() => onOpenArticle(activePost)}
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Read Curatorial Essay on This Piece</span>
                  <Scissors className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
