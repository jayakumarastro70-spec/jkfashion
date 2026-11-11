import React from 'react';
import { BlogPost } from '../types/blog';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';

interface CuratorDialogueProps {
  onSelectPost: (post: BlogPost) => void;
  posts: BlogPost[];
}

export const CuratorDialogue: React.FC<CuratorDialogueProps> = ({ onSelectPost, posts }) => {
  const womenPost = posts.find((p) => p.category === 'Womenswear') || posts[1];
  const menPost = posts.find((p) => p.category === 'Menswear') || posts[2];

  return (
    <section className="py-16 border-b border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 flex items-center justify-center gap-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Curatorial Comparative Study</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-medium text-stone-900 dark:text-stone-50">
            Drape vs. Structure: The Dual Dialectic
          </h2>
          <p className="text-xs lg:text-sm font-serif italic text-stone-600 dark:text-stone-400">
            How contemporary dressing achieves poetic synergy when the fluid kinetic movement of women’s eveningwear meets the architectural gravity of tailored menswear.
          </p>
        </div>

        {/* Side-by-side Comparative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Womenswear Drape Thesis */}
          <div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
                <span>The Archetype of Fluidity</span>
                <span>Womenswear Couture</span>
              </div>

              <div
                onClick={() => womenPost && onSelectPost(womenPost)}
                className="aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-800 cursor-pointer"
              >
                {womenPost && (
                  <img
                    src={womenPost.heroImage}
                    alt={womenPost.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover img-editorial-hover"
                  />
                )}
              </div>

              <h3 className="text-2xl font-serif font-medium text-stone-900 dark:text-stone-100">
                Kinetic Memory & Unconstructed Bias
              </h3>

              <p className="text-xs font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                Whether cut from stiff silk faille that carves crystalline planes or 45-degree bias-cut crepe that spirals organically with the stride, women’s couture dresses treat fabric as an extension of atmosphere. The garment moves dynamically in response to room air and motion.
              </p>

              <div className="pt-2 text-xs text-stone-500 dark:text-stone-400 space-y-1">
                <div><strong className="text-stone-800 dark:text-stone-200 font-sans">Key Principle:</strong> Kinetic Gravity & Radial Swell</div>
                <div><strong className="text-stone-800 dark:text-stone-200 font-sans">Leading Weaves:</strong> Silk Faille, Crepe Marocain, Organza</div>
              </div>
            </div>

            {womenPost && (
              <button
                onClick={() => onSelectPost(womenPost)}
                className="w-full py-2.5 border border-stone-300 dark:border-stone-700 hover:bg-stone-200/50 dark:hover:bg-stone-800 text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Examine Women’s Monograph</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Card 2: Menswear Structure Thesis */}
          <div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
                <span>The Archetype of Structure</span>
                <span>Menswear Sartorial</span>
              </div>

              <div
                onClick={() => menPost && onSelectPost(menPost)}
                className="aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-800 cursor-pointer"
              >
                {menPost && (
                  <img
                    src={menPost.heroImage}
                    alt={menPost.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover img-editorial-hover"
                  />
                )}
              </div>

              <h3 className="text-2xl font-serif font-medium text-stone-900 dark:text-stone-100">
                Canvassed Restraint & Clean Verticality
              </h3>

              <p className="text-xs font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                Menswear sartorialism achieves its impact through surgical line and subtle volume. From bespoke double-breasted overcoats with unpadded shoulders to relaxed wide-leg raw silk tunics, the modern man’s wardrobe commands presence through immaculate proportion and natural drape.
              </p>

              <div className="pt-2 text-xs text-stone-500 dark:text-stone-400 space-y-1">
                <div><strong className="text-stone-800 dark:text-stone-200 font-sans">Key Principle:</strong> Architectural Balance & Pitch</div>
                <div><strong className="text-stone-800 dark:text-stone-200 font-sans">Leading Weaves:</strong> Scottish Cashmere, English Barathea, Raw Noil Silk</div>
              </div>
            </div>

            {menPost && (
              <button
                onClick={() => onSelectPost(menPost)}
                className="w-full py-2.5 border border-stone-300 dark:border-stone-700 hover:bg-stone-200/50 dark:hover:bg-stone-800 text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Examine Menswear Monograph</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
