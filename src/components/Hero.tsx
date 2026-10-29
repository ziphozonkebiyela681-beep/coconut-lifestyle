import React from 'react';
import { Sparkles, UtensilsCrossed, Wine, Flame, MapPin, Phone, MessageCircle } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { SparklingLogo } from './SparklingLogo';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreMenu }) => {
  return (
    <div className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#080808]">
      {/* Background Atmosphere Image with High-Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-10-28_at_10.09.08_PM_cfc0dbeb.jpeg"
          alt="Coconut Lifestyle Nightclub Vibe & Mezzanine"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured dark gradient overlays to guarantee WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-[#080808]/70" />
        
        {/* Ambient Pronounced Rainbow Glow Field */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-red-600/15 via-yellow-500/15 via-emerald-500/15 via-cyan-500/15 to-purple-600/15 blur-[120px] pointer-events-none rounded-full" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 flex-1 flex flex-col justify-center items-center text-center">
        {/* Location & Heritage Tagline (Unboxed text with bullet separators) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-[#D4AF37] font-medium tracking-wider mb-5">
          <a
            href={CLUB_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-neutral-200 hover:text-[#D4AF37] transition-colors"
            title="Search Coconut lifestyle 1 on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>12 Lower Ross Street, New Doornfontein ("Coconut lifestyle 1")</span>
          </a>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-300">Johannesburg</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 via-emerald-400 to-cyan-300 font-bold rainbow-text-glow">
            Love · Unity · Freedom
          </span>
        </div>

        {/* Authentic Isolated Logo with Animated Gold Sparkles */}
        <div className="mb-6 w-full max-w-xl px-4">
          <SparklingLogo size="hero" />
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl text-balance leading-tight mb-4">
          Where Nights Come Alive in <span className="text-gold-gradient">Johannesburg</span>
        </h1>

        {/* Value Proposition & Operating Times */}
        <p className="text-neutral-300 text-sm sm:text-lg max-w-2xl leading-relaxed mb-4">
          The ultimate lifestyle sanctuary in New Doornfontein. Fresh flame-grilled braai from our kitchen, premium VIP bottle service, and chilled Amaren hubblies.
        </p>

        {/* Hours pill badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-300 mb-8 bg-neutral-900/80 px-4 py-2 rounded-xl border border-neutral-800">
          <span className="text-amber-400 font-semibold">Weekdays: 10:00 AM – 12:00 / 02:00 AM</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-emerald-400 font-semibold">Weekends: 10:00 AM – 04:00 AM Late</span>
        </div>

        {/* CTAs Linked to Calling and WhatsApp Direct Booking */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 w-full max-w-2xl mb-8">
          {/* Primary VIP booking modal button */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 active:scale-95 transition-all rounded-lg shadow-lg shadow-[#D4AF37]/30 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book VIP Table</span>
          </button>

          {/* Direct WhatsApp Call/Chat Button */}
          <a
            href={`https://wa.me/${CLUB_INFO.whatsapp}?text=Hi%20Coconut%20Lifestyle,%20I'd%20like%20to%20reserve%20a%20VIP%20table%20at%2012%20Lower%20Ross%20Street.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#10B981] hover:bg-[#059669] active:scale-95 transition-all rounded-lg shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp (078 737 9295)</span>
          </a>

          {/* Direct Phone Call Button */}
          <a
            href={`tel:${CLUB_INFO.phoneTel}`}
            className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-white bg-neutral-900/90 hover:bg-neutral-800 border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all rounded-lg flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call 078 737 9295</span>
          </a>

          {/* Explore Menus */}
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 underline decoration-[#D4AF37]/50 hover:decoration-[#D4AF37]"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Explore Food & Drink Menus</span>
          </button>
        </div>

        {/* Pronounced Rainbow Divider Ribbon */}
        <div className="w-64 h-1 rainbow-gradient-bar rounded-full rainbow-glow-sm" />
      </div>

      {/* 4-Column Feature Strip */}
      <div className="relative z-10 border-t border-neutral-800 bg-[#0c0c0c]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                <Flame className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Flame-Grilled Kitchen</h4>
                <p className="text-xs text-neutral-400 mt-0.5">Chicken Q legs, brisket steak, platters & dombolo</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                <Wine className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Prestige Bottle Service</h4>
                <p className="text-xs text-neutral-400 mt-0.5">Hennessy, Don Julio, Rémy Martin & Cruz on ice</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Amaren Hubbly Lounge</h4>
                <p className="text-xs text-neutral-400 mt-0.5">6 exotic flavours including Gum & Mint, Ice Cream</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                <MapPin className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">New Doornfontein Hotspot</h4>
                <p className="text-xs text-neutral-400 mt-0.5">12 Lower Ross St • Street deck & guarded parking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
