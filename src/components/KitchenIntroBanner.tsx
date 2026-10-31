import React from 'react';
import { ChefHat, Clock, Gem } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';

export const KitchenIntroBanner: React.FC = () => {
  return (
    <div className="relative mb-10 max-w-3xl mx-auto text-center flex flex-col items-center px-2">
      {/* Compact Top Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-semibold tracking-wider uppercase mb-3 shadow-md">
        <Gem className="w-3 h-3 text-pink-400" />
        <span>Authentic Braai & Kitchen</span>
        <ChefHat className="w-3 h-3 text-amber-400 ml-0.5" />
      </div>

      {/* Rainbow Gemstone-Incrusted Kitchen Logo Emblem */}
      <div className="relative w-full max-w-[210px] sm:max-w-[250px] my-2 group transition-transform duration-300 hover:scale-105 select-none">
        <img
          src={CLUB_INFO.kitchenLogoUrl}
          alt="Welcome to Coconut Lifestyle Kitchen - Rainbow Gemstone Encrusted Text & Skyline"
          className="w-full h-auto object-contain drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)]"
          draggable={false}
        />
      </div>

      {/* Clean Tagline and Hours Badge */}
      <p className="text-neutral-300 text-xs sm:text-sm mt-2 font-medium tracking-wide">
        Good Food • Good Vibes • Great Memories
      </p>

      <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] text-amber-400">
        <Clock className="w-3 h-3 text-amber-400" />
        <span>Open Weekdays & Weekends from 10:00 AM</span>
      </div>
    </div>
  );
};

