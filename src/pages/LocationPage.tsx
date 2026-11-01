import React from 'react';
import { LocationHours } from '../components/LocationHours';
import { CLUB_INFO } from '../data/clubData';
import { MapPin, Clock, Phone, MessageCircle, Instagram, ShieldCheck, Car, Navigation } from 'lucide-react';

export const LocationPage: React.FC = () => {
  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-neutral-950 via-[#0a0a0a] to-[#080808] border-b border-neutral-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-r from-sky-500/10 via-emerald-500/10 to-amber-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-900 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-md">
            <MapPin className="w-3.5 h-3.5" />
            <span>New Doornfontein • Johannesburg</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Find Us & <span className="text-gold-gradient">Operating Hours</span>
          </h1>

          <p className="text-neutral-300 text-xs sm:text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
            Conveniently located at 12 Lower Ross Street. Look for "Coconut lifestyle 1" on Google Maps, guarded on-site parking, and our illuminated red street deck entrance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a
              href={CLUB_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#F59E0B] text-black text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#D4AF37]/20 transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps ("Coconut lifestyle 1")</span>
            </a>

            <a
              href={`https://wa.me/${CLUB_INFO.whatsapp}?text=Hi%20Coconut%20Lifestyle,%20I'm%20looking%20for%20directions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-[#10B981] hover:bg-[#059669] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us ({CLUB_INFO.phone})</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Location & Hours Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <LocationHours />
      </div>

      {/* Travel & Arrival Info */}
      <section className="py-14 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <div className="p-3 rounded-xl bg-neutral-800 text-amber-400 w-fit">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold text-white">Guarded Parking & Uber Drop-Off</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Dedicated on-street car guards manage safe parking directly in front of the venue. Seamless drop-off and pickup zone for Uber and Bolt rides.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <div className="p-3 rounded-xl bg-neutral-800 text-emerald-400 w-fit">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold text-white">Day & Night Schedule</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                We open daily at 10:00 AM. On weekdays (Mon–Thu) we close at 12:00 midnight or 2:00 AM. On weekends (Fri–Sun) the party runs late until 4:00 AM!
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <div className="p-3 rounded-xl bg-neutral-800 text-pink-400 w-fit">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold text-white">Official Social Channels</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Follow us on Instagram <span className="text-white font-medium">@{CLUB_INFO.instagram}</span> and TikTok <span className="text-white font-medium">@{CLUB_INFO.tiktok}</span> for weekend DJ lineups, event flyers, and VIP recaps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
