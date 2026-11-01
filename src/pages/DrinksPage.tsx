import React from 'react';
import { BarHubblySection } from '../components/BarHubblySection';
import { MenuItem } from '../types';
import { Wine, Sparkles, Flame, CheckCircle, Shield, GlassWater } from 'lucide-react';

interface DrinksPageProps {
  onAddToCart: (item: MenuItem) => void;
}

export const DrinksPage: React.FC<DrinksPageProps> = ({ onAddToCart }) => {
  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-neutral-950 via-[#0a0a0a] to-[#080808] border-b border-neutral-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-md">
            <Wine className="w-3.5 h-3.5" />
            <span>Nightclub Bar & Amaren Hubbly Lounge</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            VIP Bottles & Exotic <span className="text-gold-gradient">Hubbly Clouds</span>
          </h1>

          <p className="text-neutral-300 text-xs sm:text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
            Premium Hennessy Cognac, Don Julio Tequila, and ice-cold beers paired with our renowned smooth Amaren tobacco hubblies prepared with coconut coals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs text-neutral-300">
            <div className="flex items-center gap-1.5 text-cyan-400">
              <CheckCircle className="w-4 h-4" />
              <span>Chilled Mixers & Fresh Ice</span>
            </div>
            <div className="flex items-center gap-1.5 text-pink-400">
              <CheckCircle className="w-4 h-4" />
              <span>Sparkler Bottle Presentations</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400">
              <CheckCircle className="w-4 h-4" />
              <span>Premium Amaren Tobacco</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Unlimited Clean Coal Refills</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Bar & Hubbly Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <BarHubblySection onAddToCart={onAddToCart} />
      </div>

      {/* Amaren Hubbly Hookah Guide */}
      <section className="py-14 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" />
                <span>The Amaren Hubbly Experience</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Smooth Clouds, Clean Coals, Long Sessions
              </h2>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Our hubblies are sanitized after every session using medical-grade cleaning protocols and fitted with fresh disposable hygiene pipes. We use natural coconut husk coals that burn clean without ash aftertaste.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-amber-400 font-bold text-sm block">Gum & Mint</span>
                  <p className="text-neutral-400 text-xs mt-1">Our #1 best-seller: intensely refreshing icy mint sensation with sweet spearmint gum notes.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-pink-400 font-bold text-sm block">Love 66</span>
                  <p className="text-neutral-400 text-xs mt-1">Tropical blend of honeydew melon, passion fruit, and delicate mint cooling.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-cyan-400 font-bold text-sm block">Blueberry Ice</span>
                  <p className="text-neutral-400 text-xs mt-1">Sweet wild blueberries layered over an invigorating frosty menthol breeze.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-yellow-400 font-bold text-sm block">Vanilla Ice Cream</span>
                  <p className="text-neutral-400 text-xs mt-1">Creamy rich dessert smoke with silky Madagascar vanilla undertones.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
              <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <span>Bottle Service Guidelines</span>
              </h3>

              <ul className="space-y-3 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                  <span>All full bottles include an ice bucket and a complimentary selection of mixers (soda, tonic, Red Bull, or cranberry).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                  <span>Sparkler presentations with siren bottle parade are available on all premium bottles (Hennessy, Don Julio, Jameson Black Barrel).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                  <span>Dedicated waitress service for bottle refills, clean glassware, and table clearing throughout the night.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                  <span>Secure bottle holding available if you do not finish your bottle during your session.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
