import React, { useState } from 'react';
import { Check, Mail } from 'lucide-react';

export const AtelierCircle: React.FC = () => {
  const [email, setEmail] = useState('');
  const [preference, setPreference] = useState<'both' | 'women' | 'men'>('both');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <section className="py-20 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
          The Private Gazette
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 dark:text-stone-50 leading-tight">
          Join the Atelier Circle
        </h2>

        <p className="max-w-xl mx-auto text-xs sm:text-sm font-serif italic text-stone-600 dark:text-stone-400 leading-relaxed">
          Receive seasonal printed monograph previews, private runway critiques, and pattern-cutting technical dossiers from our European couture bureaus.
        </p>

        {subscribed ? (
          <div className="p-6 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 max-w-md mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2 text-stone-900 dark:text-stone-100 text-sm font-serif font-medium">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Welcome to the Atelier Circle</span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Our inaugural Autumn/Winter Monograph dossier has been dispatched to {email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            {/* Preference Selector */}
            <div className="flex items-center justify-center gap-2 text-xs text-stone-600 dark:text-stone-400">
              <span className="text-[11px] uppercase tracking-wider">Focus:</span>
              <button
                type="button"
                onClick={() => setPreference('both')}
                className={`px-2.5 py-1 text-xs rounded-xs transition-colors ${
                  preference === 'both'
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-medium'
                    : 'bg-stone-200/70 dark:bg-stone-800'
                }`}
              >
                All Couture
              </button>
              <button
                type="button"
                onClick={() => setPreference('women')}
                className={`px-2.5 py-1 text-xs rounded-xs transition-colors ${
                  preference === 'women'
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-medium'
                    : 'bg-stone-200/70 dark:bg-stone-800'
                }`}
              >
                Womenswear
              </button>
              <button
                type="button"
                onClick={() => setPreference('men')}
                className={`px-2.5 py-1 text-xs rounded-xs transition-colors ${
                  preference === 'men'
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-medium'
                    : 'bg-stone-200/70 dark:bg-stone-800'
                }`}
              >
                Menswear
              </button>
            </div>

            {/* Email input and button */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your private correspondence email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 text-xs bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 rounded-xs"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200 text-xs uppercase tracking-widest font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </div>

            <p className="text-[11px] text-stone-400">
              Strictly quarterly publications. No promotional spam. Unsubscribe with one click anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
