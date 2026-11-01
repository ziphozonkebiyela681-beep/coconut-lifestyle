import React from 'react';
import { Link } from 'react-router-dom';
import { CLUB_INFO } from '../data/clubData';
import { MapPin, Phone, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-neutral-400 text-xs border-t border-neutral-900">
      {/* Pronounced Rainbow Top Accent Bar */}
      <div className="h-1 w-full rainbow-gradient-bar shadow-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={CLUB_INFO.logoUrl}
                alt="Coconut Lifestyle Gold Skyline Logo"
                className="h-12 w-auto max-w-[140px] object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="font-display text-base font-bold text-white tracking-[0.2em] block group-hover:text-[#D4AF37] transition-colors">
                  COCONUT
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-semibold -mt-1 block">
                  — LIFESTYLE —
                </span>
              </div>
            </Link>

            <p className="text-neutral-400 text-xs leading-relaxed">
              Johannesburg's premier lifestyle club & kitchen lounge. Where nights come alive with luxury bottle service, flame-grilled food, and Amaren hubbly clouds.
            </p>

            <div className="text-[11px] text-amber-400/90 font-medium tracking-wide">
              Love • Unity • Freedom
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={CLUB_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span className="text-[11px]">@{CLUB_INFO.instagram}</span>
              </a>

              <span className="text-neutral-700">·</span>

              <a
                href={CLUB_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-neutral-300 hover:text-white transition-colors"
              >
                <span className="font-bold text-pink-400 text-xs">#</span>
                <span className="text-[11px]">@{CLUB_INFO.tiktok}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/vibe" className="hover:text-[#D4AF37] transition-colors">
                  The Atmosphere & Vibe
                </Link>
              </li>
              <li>
                <Link to="/kitchen" className="hover:text-[#D4AF37] transition-colors">
                  Flame-Grilled Kitchen Menu
                </Link>
              </li>
              <li>
                <Link to="/drinks" className="hover:text-[#D4AF37] transition-colors">
                  Bottles, Spirits & Mixers
                </Link>
              </li>
              <li>
                <Link to="/drinks" className="hover:text-[#D4AF37] transition-colors">
                  Amaren Hubbly Hookah Lounge
                </Link>
              </li>
              <li>
                <Link to="/vip" className="hover:text-[#D4AF37] transition-colors">
                  VIP Booth Reservations
                </Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-[#D4AF37] transition-colors">
                  Location & Operating Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Find & Contact Us
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>12 Lower Ross Street, New Doornfontein, Johannesburg, 2094</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <a
                  href={`tel:${CLUB_INFO.phoneTel}`}
                  className="hover:text-white underline decoration-neutral-700"
                >
                  {CLUB_INFO.phone}
                </a>
              </div>

              <p className="text-[11px] text-neutral-500 pt-1">
                Direct WhatsApp reservations available 24/7 at {CLUB_INFO.phone}.
              </p>
            </div>
          </div>

          {/* Col 4: Party Responsibly & Door Code */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Door & Safety Policy
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Strictly 18+. Right of admission reserved. Smart casual / dress to impress dress code. Guarded secure parking with on-site security personnel.
            </p>
            <div className="pt-2 flex items-center gap-3 text-neutral-400">
              <span className="text-[11px] text-[#D4AF37] font-semibold">Party Responsibly</span>
              <span aria-hidden="true">·</span>
              <span className="text-[11px] text-neutral-500">Don't Drink & Drive</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} Coconut Lifestyle Nightclub. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Good Food</span>
            <span aria-hidden="true">·</span>
            <span>Good Vibes</span>
            <span aria-hidden="true">·</span>
            <span>Great Memories</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
