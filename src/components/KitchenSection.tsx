import React, { useState } from 'react';
import { Flame, Clock, Plus, Check, Sparkles, ChefHat } from 'lucide-react';
import {
  MEAL_ITEMS,
  PLATTER_ITEMS,
  BASTING_OPTIONS,
  STARCH_OPTIONS,
  SIDE_OPTIONS,
  CLUB_INFO,
} from '../data/clubData';
import { MenuItem } from '../types';

interface KitchenSectionProps {
  onAddToCart: (
    item: MenuItem,
    customization?: { basting?: string; starch?: string; sides?: string[] }
  ) => void;
}

export const KitchenSection: React.FC<KitchenSectionProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'meals' | 'platters'>('all');
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [selectedBasting, setSelectedBasting] = useState<string>(BASTING_OPTIONS[0]);
  const [selectedStarch, setSelectedStarch] = useState<string>(STARCH_OPTIONS[0].name);
  const [selectedSides, setSelectedSides] = useState<string[]>([
    SIDE_OPTIONS[0].name,
    SIDE_OPTIONS[2].name,
  ]);
  const [addedToast, setAddedToast] = useState<string | null>(null);

  const toggleSide = (sideName: string) => {
    if (selectedSides.includes(sideName)) {
      if (selectedSides.length > 1) {
        setSelectedSides(selectedSides.filter((s) => s !== sideName));
      }
    } else {
      if (selectedSides.length < 2) {
        setSelectedSides([...selectedSides, sideName]);
      } else {
        setSelectedSides([selectedSides[0], sideName]);
      }
    }
  };

  const handleStartCustomization = (item: MenuItem) => {
    setCustomizingItem(item);
    setSelectedBasting(BASTING_OPTIONS[0]);
    setSelectedStarch(STARCH_OPTIONS[0].name);
    setSelectedSides([SIDE_OPTIONS[0].name, SIDE_OPTIONS[2].name]);
  };

  const handleConfirmCustomization = () => {
    if (!customizingItem) return;
    onAddToCart(customizingItem, {
      basting: selectedBasting,
      starch: selectedStarch,
      sides: selectedSides,
    });
    setAddedToast(`${customizingItem.name} added to your Tab`);
    setTimeout(() => setAddedToast(null), 2800);
    setCustomizingItem(null);
  };

  const foodItems =
    activeTab === 'meals'
      ? MEAL_ITEMS
      : activeTab === 'platters'
      ? PLATTER_ITEMS
      : [...MEAL_ITEMS, ...PLATTER_ITEMS];

  return (
    <section id="kitchen-menu" className="py-24 bg-[#0a0a0a] relative">
      {/* Toast */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161616] border border-[#D4AF37] text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-fade-in">
          <div className="w-5 h-5 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold text-xs">
            ✓
          </div>
          <span className="text-sm font-medium">{addedToast}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
            <ChefHat className="w-3.5 h-3.5" />
            <span>Authentic Braai & Kitchen</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white text-balance">
            Coconut Lifestyle <span className="text-gold-gradient">Kitchen & Grill</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
            Good Food • Good Vibes • Great Memories. Kitchen opens at 10:00 AM daily for lunch, afternoon braai, and late-night party dining.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-amber-400">
            <Clock className="w-3.5 h-3.5" />
            <span>Open Weekdays & Weekends from 10:00 AM</span>
          </div>
        </div>

        {/* Feature Spotlight: Food Showcase Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Flame-Grilled Individual Meals */}
          <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 flex flex-col group shadow-xl">
            <div className="h-64 sm:h-72 overflow-hidden relative">
              <img
                src={CLUB_INFO.menuImages.grilledMeals}
                alt="Flame-Grilled Chicken Q Leg and Beef Steak Brisket with pap and chakalaka"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30">
                Fresh Off The Fire
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Flame-Grilled Chicken & Beef Brisket
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  Marinated in secret chef bastings and flame-seared for tender, smoky perfection. Served with your choice of traditional starch, 1 vegetable, and 2 home-style sides.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span className="text-amber-400 font-semibold">Meals from R110</span>
                <span>Includes 1 Starch + 1 Veg + 2 Sides</span>
              </div>
            </div>
          </div>

          {/* Card 2: Braai Sharing Platters */}
          <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 flex flex-col group shadow-xl">
            <div className="h-64 sm:h-72 overflow-hidden relative">
              <img
                src={CLUB_INFO.menuImages.platters}
                alt="Braai Sharing Platter with boerewors, ribs, winglets and dombolo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30">
                Sharing Platters
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Signature Braai Sharing Platters
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  The ultimate feast for couples and VIP squads. Succulent farm boerewors, tender short ribs, juicy brisket steak, and crispy glazed chicken winglets accompanied by warm dombolo and sides.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span className="text-amber-400 font-semibold">Platter 1+ (R150) · Platter 2 (R250)</span>
                <span>Serves 1 to 3 People</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Filters for Meals vs Platters */}
        <div className="flex justify-center mb-10 px-2">
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Kitchen Food' },
              { id: 'meals', label: 'Flame-Grilled Meals' },
              { id: 'platters', label: 'Braai Platters' },
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

        {/* Food Items Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-xl group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {item.name}
                  </h4>
                  <span className="font-mono text-lg font-bold text-[#D4AF37] whitespace-nowrap tabular-nums">
                    R{item.price}
                  </span>
                </div>

                {item.subtitle && (
                  <p className="text-xs text-amber-400 font-medium mb-3">
                    {item.subtitle}
                  </p>
                )}

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.includes && (
                  <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/80 text-[11px] text-neutral-400 mb-4">
                    <strong className="text-neutral-200 block mb-0.5">Includes:</strong>
                    {item.includes}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleStartCustomization(item)}
                className="w-full mt-2 py-2.5 px-4 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#F59E0B] active:scale-95 transition-all rounded-lg flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Customize & Order (Sides / Basting)</span>
              </button>
            </div>
          ))}
        </div>

        {/* ACCURATE & DETAILED BREAKDOWN OF STARCHES & SIDES */}
        <div className="border border-neutral-800 rounded-2xl bg-neutral-900/50 p-6 sm:p-8 space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                Clear Guide to Starches & Home-Style Sides
              </h3>
            </div>
            <p className="text-xs text-neutral-300">
              Every meal at Coconut Lifestyle is served with your choice of <strong className="text-white">1 Starch</strong>, <strong className="text-white">1 Vegetable</strong>, and <strong className="text-white">2 Home-Style Sides</strong>. Here is exactly what each option is:
            </p>
          </div>

          {/* Starches Detailed Grid */}
          <div>
            <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>Complimentary Starches (Pick 1 with every meal)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STARCH_OPTIONS.map((starch) => (
                <div
                  key={starch.id}
                  className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                >
                  <h5 className="font-semibold text-sm text-white mb-1.5">
                    {starch.name}
                  </h5>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {starch.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sides Detailed Grid */}
          <div>
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Home-Style Sides & Vegetables (1 Veg + 2 Sides included)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SIDE_OPTIONS.map((side) => (
                <div
                  key={side.id}
                  className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                >
                  <h5 className="font-semibold text-sm text-white mb-1.5">
                    {side.name}
                  </h5>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {side.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bastings Grid */}
          <div className="pt-4 border-t border-neutral-800">
            <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>Flavoursome Basting Options</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {BASTING_OPTIONS.map((basting, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 text-neutral-300"
                >
                  <span className="font-medium text-white block mb-0.5">• {basting}</span>
                  <span className="text-[11px] text-neutral-500">
                    {i === 0 && 'Sweet, rich and sticky braai glaze'}
                    {i === 1 && 'Pure salt, coarse spices and open flame char'}
                    {i === 2 && 'Balanced warmth with fresh garlic and chilli'}
                    {i === 3 && 'Fiery hot pepper blend for true chilli lovers'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-2">
            <span className="text-xs text-neutral-400 italic">
              * Catering services, large corporate bookings, and event braai platters available on request.
            </span>
          </div>
        </div>
      </div>

      {/* CUSTOMIZE MODAL */}
      {customizingItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setCustomizingItem(null)}
        >
          <div
            className="bg-[#121212] border border-[#D4AF37]/50 rounded-2xl max-w-lg w-full p-6 text-white max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-neutral-800 mb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {customizingItem.name}
                </h3>
                <span className="text-xs text-neutral-400">
                  Select your basting sauce, starch & home-style sides
                </span>
              </div>
              <span className="font-mono text-lg font-bold text-[#D4AF37] tabular-nums">
                R{customizingItem.price}
              </span>
            </div>

            {/* Basting Sauce Choice */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                1. Choose Basting Sauce
              </label>
              <div className="space-y-2">
                {BASTING_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedBasting(option)}
                    className={`w-full text-left p-3 rounded-lg border text-xs font-medium transition-colors flex items-center justify-between ${
                      selectedBasting === option
                        ? 'bg-amber-500/10 border-[#D4AF37] text-white'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <span>{option}</span>
                    {selectedBasting === option && (
                      <Check className="w-4 h-4 text-[#D4AF37]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Starch Choice */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                2. Choose Starch (1 Included)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {STARCH_OPTIONS.map((starch) => (
                  <button
                    key={starch.id}
                    type="button"
                    onClick={() => setSelectedStarch(starch.name)}
                    className={`p-2.5 rounded-lg border text-xs font-medium transition-colors text-left flex items-center justify-between ${
                      selectedStarch === starch.name
                        ? 'bg-amber-500/10 border-[#D4AF37] text-white'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <span className="truncate">{starch.name}</span>
                    {selectedStarch === starch.name && (
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sides Choice */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  3. Choose Home-Style Sides (Pick up to 2)
                </label>
                <span className="text-[11px] text-neutral-400 tabular-nums">
                  {selectedSides.length}/2 selected
                </span>
              </div>
              <div className="space-y-2">
                {SIDE_OPTIONS.map((side) => {
                  const isChecked = selectedSides.includes(side.name);
                  return (
                    <button
                      key={side.id}
                      type="button"
                      onClick={() => toggleSide(side.name)}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs font-medium transition-colors flex items-center justify-between ${
                        isChecked
                          ? 'bg-amber-500/10 border-[#D4AF37] text-white'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <span>{side.name}</span>
                      {isChecked && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
              <button
                type="button"
                onClick={() => setCustomizingItem(null)}
                className="w-1/3 py-2.5 text-xs text-neutral-400 hover:text-white bg-neutral-900 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmCustomization}
                className="w-2/3 py-2.5 text-xs font-bold text-black bg-[#D4AF37] hover:bg-[#F59E0B] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#D4AF37]/20"
              >
                <span>Add to Party Tab (R{customizingItem.price})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
