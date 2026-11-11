import React from 'react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer className="bg-stone-100 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Editorial Mandate */}
          <div className="space-y-3 md:col-span-1">
            <span className="text-xl font-serif font-semibold tracking-widest uppercase text-stone-900 dark:text-stone-100 block">
              ÉTOILE JOURNAL
            </span>
            <p className="text-xs font-serif italic text-stone-500 leading-relaxed">
              A curatorial review and visual monograph dedicated to contemporary women’s couture gowns and men’s bespoke tailoring architecture.
            </p>
            <div className="text-[11px] text-stone-400">
              ISSN 2940-184X · Published in Paris & Milan
            </div>
          </div>

          {/* Editorial Sections */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-stone-900 dark:text-stone-100 block">
              Atelier Dispatches
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory('All')}
                  className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  All Monograph Issues
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Womenswear')}
                  className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  Womenswear Couture & Evening Gowns
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Menswear')}
                  className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  Bespoke Tailoring & Menswear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Couture Dialogue')}
                  className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  Sartorial Dialogue & Comparative Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Bureaus & Archive */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-stone-900 dark:text-stone-100 block">
              Editorial Bureaus
            </span>
            <div className="space-y-2 text-xs text-stone-500 dark:text-stone-400">
              <div>
                <strong className="text-stone-800 dark:text-stone-200 font-sans block">Paris Atelier</strong>
                14 Rue de la Paix, 75002 Paris
              </div>
              <div>
                <strong className="text-stone-800 dark:text-stone-200 font-sans block">Milan Studio</strong>
                Via Montenapoleone 8, 20121 Milano
              </div>
              <div>
                <strong className="text-stone-800 dark:text-stone-200 font-sans block">London Mayfair</strong>
                Savile Row Archive, W1S 3PR London
              </div>
            </div>
          </div>

          {/* Operational Hours & Archive Reading */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-stone-900 dark:text-stone-100 block">
              Atelier Reading Room
            </span>
            <p className="text-xs text-stone-500 leading-relaxed">
              Open to fashion scholars, textile conservators, and sartorial researchers by appointment Tuesday through Saturday.
            </p>
            <div className="text-xs font-mono text-stone-400">
              Hours: 10:00 — 18:00 CET
            </div>
          </div>
        </div>

        {/* Hairline Divider & Quiet Copyright */}
        <div className="pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} ÉTOILE Sartorial Monograph. All photographic compositions and essays curated under international editorial rights.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-wider">Independent Fashion Journal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
