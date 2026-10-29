import React, { useState } from 'react';
import { Wine, Sparkles, Plus, ShieldCheck, Info } from 'lucide-react';
import {
  BOTTLE_ITEMS,
  MIXER_ITEMS,
  HUBBLY_ITEMS,
  CLUB_INFO,
} from '../data/clubData';
import { MenuItem } from '../types';

interface BarHubblySectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const BarHubblySection: React.FC<BarHubblySectionProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'bottles' | 'hubbly' | 'mixers'>('all');
  const [addedToast, setAddedToast] = useState<string | null>(null);

  const handleQuickAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedToast(`${item.name} added to your Tab`);
    setTimeout(() => setAddedToast(null), 2500);
  };

  return (
    <section id="bar-hubbly" className="py-24 bg-[#080808] relative">
      {/* Pronounced Rainbow Section Accent Bar */}
      <div className="h-1 w-full rainbow-gradient-bar mb-16 rainbow-glow-sm" />

      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161616] border border-[#D4AF37] text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-fade-in">
          <div className="w-5 h-5 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold text-xs">
            ✓
          </div>
          <span className="text-sm font-medium">{addedToast}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
            <Wine className="w-3.5 h-3.5" />
            <span>Nightclub Bar & Shisha Lounge</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white text-balance">
            VIP Bottles & <span className="text-gold-gradient">Amaren Hubbly</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
            Where Nights Come Alive • Love • Unity • Freedom. Premium cognacs, 100% blue agave Jalisco tequila, chilled mixers, and smooth icy Amaren hookah sessions.
          </p>
        </div>

        {/* Visual Spotlight Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: VIP Bottle Service */}
          <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 flex flex-col group shadow-xl">
            <div className="h-64 sm:h-72 overflow-hidden relative">
              <img
                src={CLUB_INFO.menuImages.bottles}
                alt="VIP Nightclub Bottle Service on Ice with Hennessy and Don Julio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30">
                Bottle Service & Sparklers
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Top-Shelf Spirits & Cognacs
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  Served in illuminated gold ice buckets with crystal tumblers, mixers, and table sparklers. Featuring Hennessy VS & VSOP, Don Julio, Rémy Martin, and Cruz.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span className="text-[#D4AF37] font-semibold">Bottles from R650 to R1,750</span>
                <span className="flex items-center gap-1 text-neutral-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  100% Authentic Sealed Bottles
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Amaren Hubbly Lounge */}
          <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 flex flex-col group shadow-xl">
            <div className="h-64 sm:h-72 overflow-hidden relative">
              <img
                src={CLUB_INFO.menuImages.hubbly}
                alt="Amaren Hookah Hubbly Pipe with aromatic dense clouds"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                Amaren Hookah Lounge
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Signature Amaren Hubbly Flavours
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  Thick, chilled aromatic clouds from genuine Amaren blends. Complete modern designer pipe setup with fresh coal changes provided throughout your night.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span className="font-mono text-emerald-400 font-bold">R250 / Full Premium Pipe</span>
                <span>6 Signature Flavours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-10 px-2">
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Drinks & Hubblies' },
              { id: 'bottles', label: 'VIP Bottles' },
              { id: 'hubbly', label: 'Hubbly Flavours' },
              { id: 'mixers', label: 'Mixers' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#F59E0B] to-[#D4AF37] text-black shadow-md font-bold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 1: BOTTLES */}
        {(activeTab === 'all' || activeTab === 'bottles') && (
          <div className="mb-16">
            <div className="pb-3 mb-6 border-b border-neutral-800 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-white tracking-wide">
                VIP Bottle Menu
              </h3>
              <span className="text-xs text-[#D4AF37]">750ml Premium Bottles on Ice</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BOTTLE_ITEMS.map((bottle) => (
                <div
                  key={bottle.id}
                  className="flex flex-col justify-between bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 hover:border-[#D4AF37]/60 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-display text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                        {bottle.name}
                      </h4>
                      <span className="font-mono text-lg font-bold text-[#D4AF37] whitespace-nowrap tabular-nums">
                        R{bottle.price}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-400 mb-3">{bottle.subtitle}</p>
                    <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                      {bottle.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(bottle)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-neutral-200 bg-neutral-800 hover:bg-[#D4AF37] hover:text-black transition-colors rounded-lg flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Bottle to Tab (R{bottle.price})</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: HUBBLY FLAVOURS */}
        {(activeTab === 'all' || activeTab === 'hubbly') && (
          <div className="mb-16">
            <div className="pb-3 mb-6 border-b border-neutral-800 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-white tracking-wide">
                Amaren Hubbly Flavours
              </h3>
              <span className="font-mono text-emerald-400 font-bold text-xs">
                R250 / Full Premium Pipe
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {HUBBLY_ITEMS.map((hub) => (
                <div
                  key={hub.id}
                  className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-display text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {hub.name}
                      </h4>
                      <span className="font-mono text-base font-bold text-[#D4AF37] tabular-nums">
                        R{hub.price}
                      </span>
                    </div>

                    <p className="text-xs text-emerald-400 font-medium mb-2">
                      {hub.subtitle}
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                      {hub.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(hub)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-neutral-800 hover:bg-emerald-600 hover:text-white transition-colors rounded-lg flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Order {hub.name}</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-lg bg-neutral-950 border border-neutral-800/80 flex items-center justify-center gap-2 text-xs text-neutral-300 text-center">
              <Info className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>
                Dress to impress • Party responsibly • Regular coal refreshes included with all VIP table bookings.
              </span>
            </div>
          </div>
        )}

        {/* SECTION 3: MIXERS */}
        {(activeTab === 'all' || activeTab === 'mixers') && (
          <div>
            <div className="pb-3 mb-6 border-b border-neutral-800 flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-white tracking-wide">
                Chilled Mixers
              </h3>
              <span className="text-xs text-neutral-400">Available all night</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {MIXER_ITEMS.map((mixer) => (
                <div
                  key={mixer.id}
                  className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between hover:border-neutral-700 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm text-white">{mixer.name}</h4>
                      <span className="font-mono text-sm font-bold text-[#D4AF37] tabular-nums">
                        R{mixer.price}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mb-3">{mixer.subtitle}</p>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(mixer)}
                    className="w-full py-1.5 text-xs text-neutral-300 hover:text-black hover:bg-[#D4AF37] bg-neutral-800 rounded transition-colors flex items-center justify-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Mixer</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
