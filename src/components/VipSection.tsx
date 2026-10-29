import React from 'react';
import { VIP_BOOTHS, CLUB_INFO } from '../data/clubData';
import { VipBooth } from '../types';
import { Sparkles, Users, Wine, Check, MessageCircle, Phone, CalendarCheck } from 'lucide-react';

interface VipSectionProps {
  onSelectBooth: (booth: VipBooth) => void;
}

export const VipSection: React.FC<VipSectionProps> = ({ onSelectBooth }) => {
  return (
    <section id="vip-booths" className="py-24 bg-[#080808] relative">
      {/* Pronounced Rainbow Section Accent Bar */}
      <div className="h-1 w-full rainbow-gradient-bar mb-16 rainbow-glow-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct VIP Desk Reservations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white text-balance">
            VIP Booths & <span className="text-gold-gradient">Table Reservations</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
            All bookings connect directly to our VIP hosting team via WhatsApp or direct phone call. Enjoy dedicated bottle hostesses, plush velvet booths, and front-row party energy.
          </p>

          {/* Quick Direct Desk Contacts */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${CLUB_INFO.whatsapp}?text=Hi%20Coconut%20Lifestyle,%20I'd%20like%20to%20reserve%20a%20VIP%20table.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-emerald-500/25 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Desk: {CLUB_INFO.phone}</span>
            </a>

            <a
              href={`tel:${CLUB_INFO.phoneTel}`}
              className="px-5 py-2.5 rounded-lg bg-neutral-900 border border-[#D4AF37]/50 hover:bg-neutral-800 text-white font-semibold text-xs flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call {CLUB_INFO.phone} to Reserve</span>
            </a>
          </div>
        </div>

        {/* Booths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIP_BOOTHS.map((booth) => {
            const waBoothText = encodeURIComponent(
              `Hi Coconut Lifestyle, I want to book the *${booth.name}* (Capacity: ${booth.capacity}, Min Spend: R${booth.minSpend}) at 12 Lower Ross Street, New Doornfontein. Please let me know available dates.`
            );

            return (
              <div
                key={booth.id}
                className="flex flex-col bg-neutral-900/70 border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#D4AF37]/60 transition-all duration-300 group shadow-lg shadow-black/60"
              >
                {/* Booth Image with overlay */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={booth.image}
                    alt={booth.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />

                  {/* Capacity & Min Spend Badges */}
                  <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-md border border-[#D4AF37]/50 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs">
                    <Wine className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="text-neutral-300">Min Spend:</span>
                    <span className="font-mono font-bold text-[#D4AF37] tabular-nums">
                      R{booth.minSpend}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-md flex items-center gap-1.5 text-xs text-neutral-200">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>{booth.capacity}</span>
                  </div>
                </div>

                {/* Booth Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                      {booth.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                      {booth.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block">
                        VIP Privileges Included:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                        {booth.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons Linked to Calling and WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <a
                      href={`https://wa.me/${CLUB_INFO.whatsapp}?text=${waBoothText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all text-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Book</span>
                    </a>

                    <a
                      href={`tel:${CLUB_INFO.phoneTel}`}
                      className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 active:scale-95 transition-all rounded-lg flex items-center justify-center gap-2 shadow-md shadow-[#D4AF37]/25 text-center"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call to Book</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onSelectBooth(booth)}
                      className="sm:col-span-2 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center justify-center gap-1.5 underline decoration-neutral-700 hover:decoration-[#D4AF37]"
                    >
                      <CalendarCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Or fill custom date & guest reservation form</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
