import React from 'react';
import { BlogPost } from '../types/blog';
import { ArrowUpRight, Bookmark, Heart } from 'lucide-react';

interface ArticleCardProps {
  post: BlogPost;
  onSelectPost: (post: BlogPost) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  isLiked: boolean;
  onToggleLike: (id: string) => void;
  likesCount: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  post,
  onSelectPost,
  isBookmarked,
  onToggleBookmark,
  isLiked,
  onToggleLike,
  likesCount,
}) => {
  return (
    <article className="group flex flex-col bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 transition-colors">
      {/* High-Resolution Editorial Frame */}
      <div
        onClick={() => onSelectPost(post)}
        className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 dark:bg-stone-800 cursor-pointer"
      >
        <img
          src={post.heroImage}
          alt={post.imageAlt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover img-editorial-hover"
        />

        {/* Hover Read Indicator */}
        <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="px-4 py-2 bg-stone-50/90 text-stone-900 text-xs uppercase tracking-widest font-medium shadow-md backdrop-blur-xs flex items-center gap-1.5">
            Read Monograph <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Quiet Gender & Issue Marker */}
        <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-stone-100 text-[10px] uppercase tracking-widest px-2.5 py-1">
          {post.category}
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Zero-Pill Clean Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
            <span>{post.issue}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          <h3
            onClick={() => onSelectPost(post)}
            className="text-xl lg:text-2xl font-serif font-medium text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 transition-colors cursor-pointer leading-snug line-clamp-2"
          >
            {post.title}
          </h3>

          <p className="text-xs font-serif italic text-stone-600 dark:text-stone-400 line-clamp-2">
            {post.subtitle}
          </p>

          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Silhouette Tag & Silhouette Fabric Teaser */}
        <div className="pt-2 border-t border-stone-200 dark:border-stone-800 text-[11px] text-stone-500 dark:text-stone-400 flex items-center justify-between">
          <span className="truncate max-w-[200px]">{post.fabricSpecs.silhouette}</span>
          <span>{post.curator.location}</span>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-1 flex items-center justify-between">
          <button
            onClick={() => onSelectPost(post)}
            className="text-xs uppercase tracking-widest font-semibold text-stone-900 dark:text-stone-100 hover:underline flex items-center gap-1"
          >
            <span>Read Essay</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleLike(post.id)}
              className={`p-1.5 transition-colors ${
                isLiked
                  ? 'text-rose-600 dark:text-rose-400'
                  : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
              }`}
              title="Like"
            >
              <Heart className="w-3.5 h-3.5" fill={isLiked ? 'currentColor' : 'none'} />
            </button>
            <span className="text-xs tabular-nums text-stone-500">{likesCount}</span>

            <button
              onClick={() => onToggleBookmark(post.id)}
              className={`p-1.5 transition-colors ${
                isBookmarked
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
              }`}
              title={isBookmarked ? 'Remove saved' : 'Save reading'}
            >
              <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
