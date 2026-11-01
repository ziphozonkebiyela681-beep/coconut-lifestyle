import React from 'react';
import { KitchenIntroBanner } from '../components/KitchenIntroBanner';
import { KitchenSection } from '../components/KitchenSection';
import { MenuItem } from '../types';
import { Flame, ChefHat, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

interface KitchenPageProps {
  onAddToCart: (
    item: MenuItem,
    customization?: { basting?: string; starch?: string; sides?: string[] }
  ) => void;
}

export const KitchenPage: React.FC<KitchenPageProps> = ({ onAddToCart }) => {
  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-b from-neutral-950 via-[#0a0a0a] to-[#080808] border-b border-neutral-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 blur-[90px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Kitchen Intro Banner with Rainbow Gemstone-Incrusted Emblem */}
          <KitchenIntroBanner />

          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Flame-Grilled Kitchen & <span className="text-gold-gradient">Braai Platters</span>
          </h1>

          <p className="text-neutral-300 text-xs sm:text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
            Every cut is seasoned with our signature house spice blend, grilled over smoking coals, and served with traditional South African starches and freshly prepared sides.
          </p>

          {/* Quick Chef Guarantee Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 text-xs text-neutral-300">
            <div className="flex items-center gap-1.5 text-amber-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Fresh Daily Cuts</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Authentic Braai Coals</span>
            </div>
            <div className="flex items-center gap-1.5 text-yellow-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Fluffy Dombolo & Pap</span>
            </div>
            <div className="flex items-center gap-1.5 text-rose-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Spicy Chakalaka</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Kitchen Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <KitchenSection onAddToCart={onAddToCart} />
      </div>

      {/* Starches & Sides Breakdown Section */}
      <section className="py-14 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <ChefHat className="w-3.5 h-3.5" />
              <span>Our Starches & Sides Explained</span>
            </div>
            <h2 className="font-display text-xl sm:text-3xl font-bold text-white">
              The Soul Behind Every Meal
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-2">
              Choose your starch and pairing sides with every quarter leg, steak, or braai platter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800">
              <div className="text-amber-400 font-display font-bold text-sm flex items-center justify-between">
                <span>Traditional Steamed Dombolo</span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-300">Starch</span>
              </div>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                Pillowy, warm traditional South African steamed bread. Soft and absorbent, ideal for soaking up braai basting and rich meat juices.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800">
              <div className="text-amber-400 font-display font-bold text-sm flex items-center justify-between">
                <span>Hot Crispy Golden Chips</span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-300">Starch</span>
              </div>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                Hand-cut, twice-fried potato chips dusted with our signature braai salt. Crispy on the outside, fluffy on the inside.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800">
              <div className="text-amber-400 font-display font-bold text-sm flex items-center justify-between">
                <span>Fluffy Traditional Pap</span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-300">Starch</span>
              </div>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                Hearty, classic maize meal porridge prepared with the perfect balance of firmness and fluffy texture.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800">
              <div className="text-rose-400 font-display font-bold text-sm flex items-center justify-between">
                <span>House Spicy Chakalaka</span>
                <span className="text-xs px-2 py-0.5 rounded bg-rose-500/10 text-rose-300">Side</span>
              </div>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                Braised grated carrots, bell peppers, baked beans, garlic, and fresh chillies simmered in aromatic curry spices.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800">
              <div className="text-emerald-400 font-display font-bold text-sm flex items-center justify-between">
                <span>Creamy Tangy Coleslaw</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">Side</span>
              </div>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                Finely shredded purple and white cabbage with sweet carrots tossed in a rich, tangy house dressing to cut through the smoky meats.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800">
              <div className="text-sky-400 font-display font-bold text-sm flex items-center justify-between">
                <span>Garden Fresh Green Salad</span>
                <span className="text-xs px-2 py-0.5 rounded bg-sky-500/10 text-sky-300">Side</span>
              </div>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                Crisp crisp lettuce, English cucumber slices, cherry tomatoes, and red onion rings with a light herb vinaigrette.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
