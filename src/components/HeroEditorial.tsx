import React from 'react';
import { BlogPost } from '../types/blog';
import { ArrowUpRight, Bookmark, Heart, Sparkles } from 'lucide-react';

interface HeroEditorialProps {
  post: BlogPost;
  onReadPost: (post: BlogPost) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  isLiked: boolean;
  onToggleLike: (id: string) => void;
  likesCount: number;
}

export const HeroEditorial: React.FC<HeroEditorialProps> = ({
  post,
  onReadPost,
  isBookmarked,
  onToggleBookmark,
  isLiked,
  onToggleLike,
  likesCount,
}) => {
  return (
    <section className="relative pt-6 pb-14 border-b border-stone-200 dark:border-stone-800">
      {/* Editorial Header Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-wrap items-center justify-between gap-4 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400">
        <div className="flex items-center gap-2">
          <span>{post.issue}</span>
          <span aria-hidden="true">·</span>
          <span>Curated by {post.curator.name}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
        <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
          <span>Paris — Milan — London Haute Couture Monograph</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Thesis */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-stone-500 dark:text-stone-400">
                Lead Monograph Feature
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-[1.12] text-stone-900 dark:text-stone-50 tracking-tight text-balance">
                {post.title}
              </h1>
              <p className="text-sm lg:text-base font-serif italic text-stone-600 dark:text-stone-300 leading-relaxed">
                {post.subtitle}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Quick Palette Preview */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                Atelier Color Palette
              </div>
              <div className="flex items-center gap-2">
                {post.colorPalette.map((c) => (
                  <div
                    key={c.name}
                    className="group relative flex items-center gap-1.5 cursor-pointer"
                    title={`${c.name} (${c.hex})`}
                  >
                    <span
                      className="w-5 h-5 rounded-full border border-stone-300 dark:border-stone-700 shadow-xs block"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-xs text-stone-500 dark:text-stone-400 hidden group-hover:inline">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onReadPost(post)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer group"
              >
                <span>Read Full Essay</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => onToggleBookmark(post.id)}
                className={`p-3 border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors ${
                  isBookmarked
                    ? 'text-amber-600 dark:text-amber-400 border-amber-500'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
                aria-label={isBookmarked ? 'Remove from saved' : 'Save reading'}
                title="Save for Later"
              >
                <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>

              <button
                onClick={() => onToggleLike(post.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-2.5 border border-stone-300 dark:border-stone-700 text-xs transition-colors ${
                  isLiked
                    ? 'text-rose-600 dark:text-rose-400 border-rose-500'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
                title="Applaud Dispatch"
              >
                <Heart className="w-3.5 h-3.5" fill={isLiked ? 'currentColor' : 'none'} />
                <span className="tabular-nums">{likesCount}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Monumental High-Fashion Visual */}
          <div className="lg:col-span-7">
            <div
              onClick={() => onReadPost(post)}
              className="group relative cursor-pointer overflow-hidden rounded-xs bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm"
            >
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src={post.heroImage}
                  alt={post.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover img-editorial-hover"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-stone-100 text-xs tracking-wider flex items-center justify-between w-full">
                  <span>Click to open full monograph & garment anatomy</span>
                  <span className="inline-flex items-center gap-1 font-serif italic text-sm">
                    Examine Folds & Lapels <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Hotspot indicator prompt */}
              <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur-md text-stone-100 text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-xs flex items-center gap-1.5 border border-stone-700/50">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Interactive Anatomy Hotspots</span>
              </div>
            </div>

            {/* Museum Figure Caption */}
            <p className="mt-2.5 text-xs font-serif italic text-stone-500 dark:text-stone-400">
              {post.imageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
