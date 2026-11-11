import React, { useEffect, useState } from 'react';
import { BlogPost, Comment } from '../types/blog';
import {
  Bookmark,
  Check,
  Copy,
  Heart,
  MessageSquare,
  Minus,
  Plus,
  Share2,
  X,
} from 'lucide-react';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  isLiked: boolean;
  onToggleLike: (id: string) => void;
  likesCount: number;
  onSelectRelated: (post: BlogPost) => void;
  allPosts: BlogPost[];
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  post,
  onClose,
  isBookmarked,
  onToggleBookmark,
  isLiked,
  onToggleLike,
  likesCount,
  onSelectRelated,
  allPosts,
}) => {
  if (!post) return null;

  const [fontSizeLevel, setFontSizeLevel] = useState<'standard' | 'comfortable' | 'monograph'>('comfortable');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [comments, setComments] = useState<Comment[]>(post.comments || []);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentRole, setNewCommentRole] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleCopySwatch = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim() || !newCommentName.trim()) return;

    const newEntry: Comment = {
      id: `comment-${Date.now()}`,
      author: newCommentName.trim(),
      role: newCommentRole.trim() || 'Atelier Reader & Enthusiast',
      date: 'Just now',
      content: newCommentText.trim(),
      likes: 1,
    };

    setComments([newEntry, ...comments]);
    setNewCommentName('');
    setNewCommentRole('');
    setNewCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3000);
  };

  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const proseSizeClasses =
    fontSizeLevel === 'standard'
      ? 'text-base leading-relaxed'
      : fontSizeLevel === 'comfortable'
      ? 'text-lg leading-[1.8]'
      : 'text-xl leading-[1.85]';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm transition-all flex justify-center p-0 sm:p-4 lg:p-6">
      {/* Container Dialog */}
      <div className="relative w-full max-w-4xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden my-auto min-h-screen sm:min-h-0 sm:rounded-xs">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-30 bg-stone-50/95 dark:bg-stone-900/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.issue}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Font Size Adjuster */}
            <div className="hidden sm:flex items-center gap-1 bg-stone-200/60 dark:bg-stone-800 rounded px-2 py-1 text-xs">
              <span className="text-[10px] uppercase text-stone-500 tracking-wider mr-1">Type:</span>
              <button
                onClick={() => setFontSizeLevel('standard')}
                className={`px-1.5 py-0.5 rounded text-xs ${
                  fontSizeLevel === 'standard'
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-medium'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
                title="Standard font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeLevel('comfortable')}
                className={`px-1.5 py-0.5 rounded text-xs font-serif ${
                  fontSizeLevel === 'comfortable'
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-medium'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
                title="Comfortable reading size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSizeLevel('monograph')}
                className={`px-1.5 py-0.5 rounded text-xs font-serif font-bold ${
                  fontSizeLevel === 'monograph'
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
                title="Monograph large size"
              >
                A++
              </button>
            </div>

            {/* Like */}
            <button
              onClick={() => onToggleLike(post.id)}
              className={`p-2 transition-colors ${
                isLiked
                  ? 'text-rose-600 dark:text-rose-400'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
              title="Like this essay"
            >
              <Heart className="w-4 h-4" fill={isLiked ? 'currentColor' : 'none'} />
            </button>

            {/* Bookmark */}
            <button
              onClick={() => onToggleBookmark(post.id)}
              className={`p-2 transition-colors ${
                isBookmarked
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
              title="Save reading"
            >
              <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              title="Copy share link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            <div className="h-4 w-px bg-stone-300 dark:bg-stone-700 mx-1" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-50 hover:bg-stone-200/50 dark:hover:bg-stone-800 rounded-sm transition-colors cursor-pointer"
              aria-label="Close monograph"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-10">
          {/* Article Header & Typography Deck */}
          <header className="space-y-4 max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
              {post.date} · {post.readTime}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 dark:text-stone-50 leading-[1.14]">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-stone-600 dark:text-stone-300 leading-relaxed">
              {post.subtitle}
            </p>

            {/* Author Byline */}
            <div className="pt-2 flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800">
              <span className="font-medium text-stone-800 dark:text-stone-200">{post.curator.name}</span>
              <span aria-hidden="true">/</span>
              <span>{post.curator.role}</span>
              <span aria-hidden="true">/</span>
              <span>{post.curator.location}</span>
            </div>
          </header>

          {/* Primary High-Resolution Visual Presentation */}
          <figure className="space-y-3">
            <div className="overflow-hidden bg-stone-200 dark:bg-stone-800 border border-stone-200 dark:border-stone-800 rounded-xs">
              <img
                src={post.heroImage}
                alt={post.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full max-h-[640px] object-cover"
              />
            </div>
            <figcaption className="text-xs font-serif italic text-stone-500 dark:text-stone-400 px-1">
              {post.imageCaption}
            </figcaption>
          </figure>

          {/* Long-Form Reading Body (§2 Optimal Column Width 65-75ch) */}
          <article className="max-w-2xl mx-auto space-y-8 font-serif text-stone-800 dark:text-stone-200">
            {/* Opening with Drop Cap */}
            <p className={`${proseSizeClasses} editorial-drop-cap`}>
              {post.content.openingDropCap}
            </p>

            <p className={proseSizeClasses}>
              {post.content.bodySection1}
            </p>

            {/* Elegant Wide Pull Quote (Subtle Top/Bottom Hairline Dividers, No Left Accent Bar) */}
            <div className="my-10 py-8 border-y border-stone-300 dark:border-stone-700 text-center space-y-3">
              <blockquote className="text-2xl sm:text-3xl font-serif italic text-stone-900 dark:text-stone-100 leading-snug">
                “{post.content.pullQuote}”
              </blockquote>
              {post.content.pullQuoteAuthor && (
                <cite className="block text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 not-italic">
                  — {post.content.pullQuoteAuthor}
                </cite>
              )}
            </div>

            <p className={proseSizeClasses}>
              {post.content.bodySection2}
            </p>

            {/* Curator Verdict Callout */}
            <div className="my-8 p-6 bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 font-sans space-y-2">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-stone-500 dark:text-stone-400">
                Curator’s Styling Verdict
              </span>
              <p className="text-sm font-serif italic text-stone-800 dark:text-stone-200 leading-relaxed">
                {post.content.curatorVerdict}
              </p>
            </div>
          </article>

          {/* Garment Technical Dossier & Color Palette */}
          <section className="max-w-2xl mx-auto p-6 bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-800 space-y-6">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-900 dark:text-stone-100">
              Technical Garment Specifications
            </h3>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div>
                <dt className="text-stone-500 dark:text-stone-400 uppercase tracking-wider">Fabric</dt>
                <dd className="font-serif text-stone-900 dark:text-stone-100 font-medium mt-0.5">
                  {post.fabricSpecs.composition}
                </dd>
              </div>
              <div>
                <dt className="text-stone-500 dark:text-stone-400 uppercase tracking-wider">Mill Origin</dt>
                <dd className="font-serif text-stone-900 dark:text-stone-100 font-medium mt-0.5">
                  {post.fabricSpecs.origin}
                </dd>
              </div>
              <div>
                <dt className="text-stone-500 dark:text-stone-400 uppercase tracking-wider">Silhouette Type</dt>
                <dd className="font-serif text-stone-900 dark:text-stone-100 font-medium mt-0.5">
                  {post.fabricSpecs.silhouette}
                </dd>
              </div>
              <div>
                <dt className="text-stone-500 dark:text-stone-400 uppercase tracking-wider">Weight & Drape</dt>
                <dd className="font-serif text-stone-900 dark:text-stone-100 font-medium mt-0.5">
                  {post.fabricSpecs.weight} · {post.fabricSpecs.drapeFactor}
                </dd>
              </div>
            </dl>

            {/* Extracted Atelier Palette with One-Click Copy */}
            <div className="pt-4 border-t border-stone-200 dark:border-stone-700">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  Extracted Palette (Tap to copy HEX)
                </span>
                {copiedHex && (
                  <span className="text-emerald-600 text-[11px] font-mono flex items-center gap-1">
                    <Check className="w-3 h-3" /> Copied {copiedHex}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {post.colorPalette.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleCopySwatch(color.hex)}
                    className="flex flex-col p-2 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-left hover:border-stone-400 transition-colors cursor-pointer group"
                  >
                    <span
                      className="w-full h-8 rounded-xs mb-2 border border-stone-300 dark:border-stone-700 block"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[11px] font-medium text-stone-800 dark:text-stone-200 truncate">
                      {color.name}
                    </span>
                    <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 flex items-center justify-between">
                      <span>{color.hex}</span>
                      <Copy className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Reader Commentary Section */}
          <section className="max-w-2xl mx-auto pt-8 border-t border-stone-200 dark:border-stone-800 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-stone-500" />
                <h3 className="text-sm uppercase tracking-widest font-semibold text-stone-900 dark:text-stone-100">
                  Atelier Notes & Stylist Thoughts ({comments.length})
                </h3>
              </div>
            </div>

            {/* Add Comment Form */}
            <form onSubmit={handleAddComment} className="p-4 bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 space-y-3">
              <span className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 block font-medium">
                Contribute an Atelier Perspective
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name (e.g., Clara Vance)"
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)}
                  required
                  className="px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100"
                />
                <input
                  type="text"
                  placeholder="Role (e.g., Couture Collector, Tailor)"
                  value={newCommentRole}
                  onChange={(e) => setNewCommentRole(e.target.value)}
                  className="px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100"
                />
              </div>
              <textarea
                placeholder="Share your thoughts on the silhouette, fabric drape, or tailoring craftsmanship..."
                rows={3}
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                required
                className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 resize-none font-serif"
              />
              <div className="flex items-center justify-between pt-1">
                {commentSuccess ? (
                  <span className="text-xs text-emerald-600 font-medium">Note added to atelier dispatch!</span>
                ) : <span />}
                <button
                  type="submit"
                  className="px-4 py-2 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs uppercase tracking-widest font-medium hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Publish Note
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="p-4 bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-stone-900 dark:text-stone-100">{comment.author}</span>
                      <span aria-hidden="true" className="text-stone-400">·</span>
                      <span className="text-stone-500 dark:text-stone-400">{comment.role}</span>
                    </div>
                    <span className="text-[11px] text-stone-400">{comment.date}</span>
                  </div>
                  <p className="text-xs font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Dispatches */}
          <section className="pt-8 border-t border-stone-200 dark:border-stone-800">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-500 dark:text-stone-400 mb-6">
              Adjacent Curated Dispatches
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <div
                  key={related.id}
                  onClick={() => onSelectRelated(related)}
                  className="group cursor-pointer space-y-2"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-800">
                    <img
                      src={related.heroImage}
                      alt={related.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover img-editorial-hover"
                    />
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400">
                    {related.category} · {related.readTime}
                  </div>
                  <h4 className="text-sm font-serif font-medium text-stone-900 dark:text-stone-100 group-hover:text-stone-600 line-clamp-2">
                    {related.title}
                  </h4>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
