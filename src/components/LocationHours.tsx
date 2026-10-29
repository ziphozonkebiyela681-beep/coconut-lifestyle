import React, { useState } from 'react';
import { MapPin, Clock, Phone, Copy, Check, Navigation, Shield, Heart, Instagram } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLUB_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Hours & Information */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Us in Johannesburg</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
                Location & <span className="text-gold-gradient">Operating Hours</span>
              </h2>
              <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                Conveniently located at 12 Lower Ross Street in New Doornfontein, Johannesburg. Step onto our wooden street patio and enter into Johannesburg's most electric nightlife vibe.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-base font-bold text-white">
                        Coconut Lifestyle
                      </h3>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        "Coconut lifestyle 1" on Google Maps
                      </span>
                    </div>
                    <p className="text-sm text-neutral-300 mt-1">
                      12 Lower Ross Street, New Doornfontein
                    </p>
                    <p className="text-xs text-neutral-400">Johannesburg, 2094, South Africa</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="p-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-lg transition-colors flex items-center gap-1.5 text-xs"
                    title="Copy address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#10B981]" />
                        <span className="text-[#10B981] font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#D4AF37]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={CLUB_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2.5 bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-semibold rounded-lg transition-colors flex items-center gap-1.5 text-xs shadow-sm"
                    title="Open Coconut lifestyle 1 on Google Maps"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2">
                <span className="text-neutral-300">
                  <strong className="text-white">Uber & Bolt:</strong> Search <span className="text-amber-400 font-semibold">"Coconut lifestyle 1"</span> or set pin to 12 Lower Ross St
                </span>
                <span className="text-[#D4AF37] font-medium">Safe Guarded Street Parking Available</span>
              </div>
            </div>

            {/* Hours Table with Clear Weekday and Weekend Times */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Club & Kitchen Operating Times
                </h3>
              </div>

              <div className="divide-y divide-neutral-800/80 text-xs">
                {CLUB_INFO.hours.map((schedule, idx) => (
                  <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-white sm:w-44">{schedule.day}</span>
                    <span className="font-mono text-[#D4AF37] tabular-nums font-bold sm:text-right">
                      {schedule.hours}
                    </span>
                    <span className="text-[11px] text-neutral-400 sm:text-right">
                      {schedule.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links: Instagram & TikTok */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display text-sm font-bold text-white">
                  Follow Coconut Lifestyle
                </h4>
                <p className="text-xs text-neutral-400">
                  Tag us in your stories and stay tuned for weekend DJ lineups
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={CLUB_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold flex items-center gap-1.5 hover:brightness-110 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@{CLUB_INFO.instagram}</span>
                </a>

                <a
                  href={CLUB_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-neutral-700"
                >
                  <span className="font-mono font-bold text-pink-400">#</span>
                  <span>TikTok: @{CLUB_INFO.tiktok}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Outside Street View & Policies */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 relative overflow-hidden">
              {/* Subtle Rainbow Hairline Border Top */}
              <div className="absolute top-0 left-0 right-0 h-1 rainbow-gradient-bar" />

              <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-4">
                <Heart className="w-4 h-4 text-pink-500" />
                <span>Our Ethos</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Love • Unity • Freedom
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Coconut Lifestyle is built on celebrating life, friendship, and diversity in Johannesburg. Everyone who walks through our doors is family.
              </p>

              {/* Outside Entrance Photo as provided */}
              <div className="mb-6 rounded-xl overflow-hidden border border-neutral-800/80 aspect-[16/9] relative group">
                <img
                  src={CLUB_INFO.entranceImageUrl}
                  alt="Coconut Lifestyle street entrance at 12 Lower Ross Street with neon sign and patio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-white">
                    12 Lower Ross Street Entrance & Front Patio Deck
                  </span>
                </div>
              </div>

              {/* Policy Highlights */}
              <div className="space-y-4 pt-4 border-t border-neutral-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-800 text-[#D4AF37] shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Dress to Impress</h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      {CLUB_INFO.dressCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-800 text-[#D4AF37] shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Party Responsibly</h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      {CLUB_INFO.agePolicy}. Don't drink and drive — request an e-hailing ride or nominate a driver.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-800 text-[#10B981] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Direct Door & VIP Desk</h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Call or WhatsApp: <a href={`tel:${CLUB_INFO.phoneTel}`} className="text-white hover:text-[#D4AF37] underline">{CLUB_INFO.phone}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
