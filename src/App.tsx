import React, { useEffect, useMemo, useState } from 'react';
import { BlogPost } from './types/blog';
import { FASHION_POSTS } from './data/fashionPosts';
import { Header } from './components/Header';
import { HeroEditorial } from './components/HeroEditorial';
import { LookbookFilterBar } from './components/LookbookFilterBar';
import { ArticleCard } from './components/ArticleCard';
import { AnatomySection } from './components/AnatomySection';
import { CuratorDialogue } from './components/CuratorDialogue';
import { AtelierCircle } from './components/AtelierCircle';
import { ArticleModal } from './components/ArticleModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { Footer } from './components/Footer';

export default function App() {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('etoile_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('etoile_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('etoile_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  // Bookmarking state
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('etoile_bookmarks');
      return saved ? JSON.parse(saved) : ['post-1', 'post-2'];
    } catch {
      return ['post-1', 'post-2'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('etoile_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Likes state
  const [likedIds, setLikedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('etoile_likes');
      return saved ? JSON.parse(saved) : ['post-1'];
    } catch {
      return ['post-1'];
    }
  });

  const [likesMap, setLikesMap] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    FASHION_POSTS.forEach((p) => {
      map[p.id] = p.likesCount;
    });
    return map;
  });

  const toggleLike = (id: string) => {
    if (likedIds.includes(id)) {
      setLikedIds((prev) => prev.filter((item) => item !== id));
      setLikesMap((prev) => ({ ...prev, [id]: (prev[id] || 1) - 1 }));
    } else {
      setLikedIds((prev) => [...prev, id]);
      setLikesMap((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    }
  };

  // Filter & Search state
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSort, setSelectedSort] = useState<'recent' | 'likes' | 'readTime'>('recent');

  // Modal & Drawer state
  const [selectedPostForModal, setSelectedPostForModal] = useState<BlogPost | null>(null);
  const [isBookmarksDrawerOpen, setIsBookmarksDrawerOpen] = useState(false);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    return FASHION_POSTS.filter((post) => {
      // Category filter
      if (activeCategory !== 'All' && post.category !== activeCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(query);
        const matchesSubtitle = post.subtitle.toLowerCase().includes(query);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(query);
        const matchesFabric = post.fabricSpecs.composition.toLowerCase().includes(query);
        const matchesTags = post.tags.some((t) => t.toLowerCase().includes(query));
        const matchesSilhouette = post.fabricSpecs.silhouette.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSubtitle && !matchesExcerpt && !matchesFabric && !matchesTags && !matchesSilhouette) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (selectedSort === 'likes') {
        const likesA = likesMap[a.id] || a.likesCount;
        const likesB = likesMap[b.id] || b.likesCount;
        return likesB - likesA;
      }
      if (selectedSort === 'readTime') {
        const numA = parseInt(a.readTime) || 5;
        const numB = parseInt(b.readTime) || 5;
        return numA - numB;
      }
      // 'recent' by default order
      return 0;
    });
  }, [activeCategory, searchQuery, selectedSort, likesMap]);

  // Featured Lead Story
  const leadStory = FASHION_POSTS.find((p) => p.featured) || FASHION_POSTS[0];

  // Secondary stories for grid
  const secondaryStories = useMemo(() => {
    // If filtering by category or searching, show all matching filteredPosts
    if (activeCategory !== 'All' || searchQuery.trim()) {
      return filteredPosts;
    }
    // Otherwise show other stories excluding the lead in the grid
    return filteredPosts.filter((p) => p.id !== leadStory.id);
  }, [filteredPosts, activeCategory, searchQuery, leadStory.id]);

  const savedPostsList = useMemo(() => {
    return FASHION_POSTS.filter((p) => bookmarkedIds.includes(p.id));
  }, [bookmarkedIds]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 flex flex-col font-sans transition-colors duration-200">
      {/* 3-Zone Top Bar Navigation */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
        }}
        savedCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarksDrawerOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Viewport */}
      <main className="flex-1">
        {/* Lead Story Hero Section (Visible when looking at All or Dialogue with no search) */}
        {activeCategory === 'All' && !searchQuery.trim() && (
          <HeroEditorial
            post={leadStory}
            onReadPost={(post) => setSelectedPostForModal(post)}
            isBookmarked={bookmarkedIds.includes(leadStory.id)}
            onToggleBookmark={toggleBookmark}
            isLiked={likedIds.includes(leadStory.id)}
            onToggleLike={toggleLike}
            likesCount={likesMap[leadStory.id] || leadStory.likesCount}
          />
        )}

        {/* Filter Bar */}
        <LookbookFilterBar
          selectedCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
          selectedSort={selectedSort}
          onSelectSort={(sort) => setSelectedSort(sort)}
          totalCount={secondaryStories.length}
        />

        {/* Article Cards Grid */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200 dark:border-stone-800">
            <div>
              <h2 className="text-2xl lg:text-3xl font-serif font-medium text-stone-900 dark:text-stone-50">
                {activeCategory === 'All'
                  ? 'Seasonal Dispatches & Sartorial Catalog'
                  : activeCategory === 'Womenswear'
                  ? 'Womenswear Couture & Gowns'
                  : activeCategory === 'Menswear'
                  ? 'Menswear Bespoke & Tailoring'
                  : 'Couture Dialogue Monographs'}
              </h2>
            </div>
            <span className="text-xs font-serif italic text-stone-500 dark:text-stone-400">
              Curated European Bureau Editions
            </span>
          </div>

          {secondaryStories.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <p className="text-lg font-serif italic text-stone-600 dark:text-stone-400">
                No couture dispatches found matching “{searchQuery}”.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="px-4 py-2 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs uppercase tracking-widest font-medium"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {secondaryStories.map((post) => (
                <ArticleCard
                  key={post.id}
                  post={post}
                  onSelectPost={(p) => setSelectedPostForModal(p)}
                  isBookmarked={bookmarkedIds.includes(post.id)}
                  onToggleBookmark={toggleBookmark}
                  isLiked={likedIds.includes(post.id)}
                  onToggleLike={toggleLike}
                  likesCount={likesMap[post.id] || post.likesCount}
                />
              ))}
            </div>
          )}
        </section>

        {/* Comparative Study Section: Womenswear Fluidity vs Menswear Structure */}
        <CuratorDialogue
          onSelectPost={(post) => setSelectedPostForModal(post)}
          posts={FASHION_POSTS}
        />

        {/* Interactive Anatomy of Dresses & Tailoring */}
        <AnatomySection
          posts={FASHION_POSTS}
          onOpenArticle={(post) => setSelectedPostForModal(post)}
        />

        {/* Private Gazette / Newsletter Section */}
        <AtelierCircle />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={(cat) => setActiveCategory(cat)} />

      {/* Deep Reading Monograph Modal */}
      {selectedPostForModal && (
        <ArticleModal
          post={selectedPostForModal}
          onClose={() => setSelectedPostForModal(null)}
          isBookmarked={bookmarkedIds.includes(selectedPostForModal.id)}
          onToggleBookmark={toggleBookmark}
          isLiked={likedIds.includes(selectedPostForModal.id)}
          onToggleLike={toggleLike}
          likesCount={likesMap[selectedPostForModal.id] || selectedPostForModal.likesCount}
          onSelectRelated={(post) => setSelectedPostForModal(post)}
          allPosts={FASHION_POSTS}
        />
      )}

      {/* Bookmarks Saved Reading Slide-Over */}
      <BookmarksDrawer
        isOpen={isBookmarksDrawerOpen}
        onClose={() => setIsBookmarksDrawerOpen(false)}
        savedPosts={savedPostsList}
        onSelectPost={(post) => setSelectedPostForModal(post)}
        onRemoveBookmark={toggleBookmark}
        onClearAll={() => setBookmarkedIds([])}
      />
    </div>
  );
}
