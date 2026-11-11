import React from 'react';
import { BlogPost } from '../types/blog';
import { ArrowUpRight, Bookmark, Trash2, X } from 'lucide-react';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedPosts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  savedPosts,
  onSelectPost,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/70 backdrop-blur-xs flex justify-end">
      <div className="relative w-full max-w-md bg-stone-50 dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 shadow-2xl h-full flex flex-col justify-between">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-stone-900 dark:text-stone-100" />
            <h2 className="text-sm uppercase tracking-widest font-semibold text-stone-900 dark:text-stone-100">
              Saved Atelier Reading ({savedPosts.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {savedPosts.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Bookmark className="w-8 h-8 text-stone-400 mx-auto stroke-[1.2]" />
              <p className="text-sm font-serif italic text-stone-600 dark:text-stone-400">
                Your private reading catalog is currently empty.
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Tap the bookmark ribbon on any couture essay or sartorial dispatch to save it for quiet contemplation.
              </p>
            </div>
          ) : (
            savedPosts.map((post) => (
              <div
                key={post.id}
                className="group p-3 bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 flex gap-4 transition-colors hover:border-stone-400"
              >
                <div
                  onClick={() => {
                    onSelectPost(post);
                    onClose();
                  }}
                  className="w-20 h-24 shrink-0 overflow-hidden bg-stone-200 dark:bg-stone-700 cursor-pointer"
                >
                  <img
                    src={post.heroImage}
                    alt={post.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover img-editorial-hover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400">
                      {post.category} · {post.readTime}
                    </span>
                    <h3
                      onClick={() => {
                        onSelectPost(post);
                        onClose();
                      }}
                      className="text-sm font-serif font-medium text-stone-900 dark:text-stone-100 line-clamp-2 cursor-pointer hover:underline"
                    >
                      {post.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => {
                        onSelectPost(post);
                        onClose();
                      }}
                      className="text-[11px] uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Read</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => onRemoveBookmark(post.id)}
                      className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors p-1"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedPosts.length > 0 && (
          <div className="p-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors cursor-pointer"
            >
              Clear Catalog
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs uppercase tracking-widest font-medium cursor-pointer"
            >
              Done Reading
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
