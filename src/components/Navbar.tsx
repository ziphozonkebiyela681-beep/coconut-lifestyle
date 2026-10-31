import React, { useState } from 'react';
import { Menu, X, Sparkles, MapPin, Phone, MessageCircle } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { SmallTopStripPrideDancers } from './SmallTopStripPrideDancers';

interface NavbarProps {
  onOpenBooking: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partyKey, setPartyKey] = useState<number>(0);

  const navLinks = [
    { label: 'The Vibe', href: '#vibe' },
    { label: 'Kitchen & Braai', href: '#kitchen-menu' },
    { label: 'Bottles & Hubbly', href: '#bar-hubbly' },
    { label: 'VIP Booths', href: '#vip-booths' },
    { label: 'Location & Hours', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#080808]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-lg shadow-black/80">
      {/* Small Top Strip: 5 people dancing & partying under a disco ball with softly blended Pride stripes */}
      <div
        onClick={() => setPartyKey((p) => p + 1)}
        className="cursor-pointer group"
        title="Coconut Lifestyle Pride Party • Tap to replay"
      >
        <SmallTopStripPrideDancers key={partyKey} />
        {/* Pronounced Animated Rainbow Top Accent Ribbon */}
        <div className="h-1 w-full rainbow-gradient-bar shadow-sm transition-all group-hover:h-1.5" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-6 h-16 sm:h-20">
          {/* Zone 1: Authentic Gold Skyline Logo & Wordmark */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
            <img
              src={CLUB_INFO.logoUrl}
              alt="Coconut Lifestyle Gold Skyline Logo"
              className="h-8 sm:h-11 w-auto max-w-[95px] sm:max-w-[150px] object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.45)] transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display text-xs sm:text-base tracking-[0.15em] sm:tracking-[0.2em] font-bold text-white group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                COCONUT
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.35em] text-[#D4AF37] font-semibold -mt-0.5 sm:-mt-1 uppercase whitespace-nowrap">
                Lifestyle
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#D4AF37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D4AF37] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Booking & WhatsApp Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Quick WhatsApp Link in header (tablet and up) */}
            <a
              href={`https://wa.me/${CLUB_INFO.whatsapp}?text=Hi%20Coconut%20Lifestyle,%20I'd%20like%20to%20inquire%20about%20a%20table%20reservation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-neutral-900 border border-emerald-500/40 text-emerald-400 hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0"
              title="Chat with VIP booking on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Quick Call Link (desktop) */}
            <a
              href={`tel:${CLUB_INFO.phoneTel}`}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-neutral-900 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0"
              title={`Call ${CLUB_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CLUB_INFO.phone}</span>
            </a>

            {cartCount > 0 && (
              <button
                onClick={onOpenCart}
                className="relative px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-lg bg-neutral-900 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-neutral-800 transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
                aria-label="View Order Tab"
              >
                <span>Tab</span>
                <span className="w-4 h-4 rounded-full bg-[#D4AF37] text-black font-bold text-[10px] flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              </button>
            )}

            <button
              onClick={onOpenBooking}
              className="px-2.5 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-md shadow-[#D4AF37]/25 whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden xs:inline sm:inline">Book VIP</span>
              <span className="xs:hidden">VIP</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0D] border-b border-[#D4AF37]/20 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 text-xs text-neutral-400 pb-2 border-b border-neutral-800">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="truncate">12 Lower Ross St, New Doornfontein</span>
          </div>

          <div className="flex flex-col space-y-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-neutral-200 hover:text-[#D4AF37] hover:bg-neutral-900 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${CLUB_INFO.whatsapp}?text=Hi%20Coconut%20Lifestyle,%20I'd%20like%20to%20book%20a%20VIP%20table.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#10B981] hover:bg-[#059669] rounded-md transition-colors text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Booking (078 737 9295)</span>
            </a>

            <a
              href={`tel:${CLUB_INFO.phoneTel}`}
              className="w-full py-2.5 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-900 border border-neutral-700 rounded-md transition-colors text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call 078 737 9295</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
