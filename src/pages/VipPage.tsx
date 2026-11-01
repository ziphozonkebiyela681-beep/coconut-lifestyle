import React from 'react';
import { VipSection } from '../components/VipSection';
import { VipBooth } from '../types';
import { CLUB_INFO } from '../data/clubData';
import { Crown, Sparkles, MessageCircle, Phone, CheckCircle, Shield, Award } from 'lucide-react';

interface VipPageProps {
  onSelectBooth: (booth: VipBooth) => void;
  onOpenBooking: () => void;
}

export const VipPage: React.FC<VipPageProps> = ({ onSelectBooth, onOpenBooking }) => {
  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-neutral-950 via-[#0a0a0a] to-[#080808] border-b border-neutral-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-r from-amber-500/10 via-yellow-500/15 to-orange-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-900 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4 shadow-md">
            <Crown className="w-3.5 h-3.5" />
            <span>Luxury VIP Table & Booth Sanctuary</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Experience Johannesburg’s <span className="text-gold-gradient">Finest VIP Service</span>
          </h1>

          <p className="text-neutral-300 text-xs sm:text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
            Elevated booth seating, priority door bypass, dedicated hostess service, and show-stopping sparkler bottle presentations for birthdays, squads, and elite nights out.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] text-black text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Reserve a Booth Online</span>
            </button>

            <a
              href={`https://wa.me/${CLUB_INFO.whatsapp}?text=Hi%20Coconut%20Lifestyle,%20I'd%20like%20to%20reserve%20a%20VIP%20booth.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-[#10B981] hover:bg-[#059669] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp ({CLUB_INFO.phone})</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main VIP Section with Booth Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <VipSection onSelectBooth={onSelectBooth} />
      </div>

      {/* VIP Perks Grid */}
      <section className="py-14 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Every VIP Reservation Includes
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-2">
              Unmatched nightlife prestige tailored for you and your guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 text-[#D4AF37] flex items-center justify-center mx-auto">
                <Crown className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white text-sm">Priority Door Bypass</h4>
              <p className="text-neutral-400 text-xs">Skip general admission queues with expedited VIP check-in for your party.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white text-sm">Dedicated Hostess</h4>
              <p className="text-neutral-400 text-xs">Personal table service all night long for seamless bottle, hubbly, and food orders.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-pink-500/10 text-pink-400 flex items-center justify-center mx-auto">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white text-sm">Sparkler Presentations</h4>
              <p className="text-neutral-400 text-xs">Grand bottle delivery with club illumination, sparklers, and spotlight announcement.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white text-sm">Dedicated Security</h4>
              <p className="text-neutral-400 text-xs">Exclusive roped-off perimeter with attentive guards ensuring personal safety.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
