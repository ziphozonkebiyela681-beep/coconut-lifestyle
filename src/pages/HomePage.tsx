import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { CLUB_INFO } from '../data/clubData';
import {
  Flame,
  Wine,
  Sparkles,
  Crown,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Music,
  Users,
} from 'lucide-react';

interface HomePageProps {
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#080808] text-white">
      {/* Hero Section */}
      <Hero
        onOpenBooking={onOpenBooking}
        onExploreMenu={() => {
          // Handled via router link below
        }}
      />

      {/* Multi-Page Portal Highlights */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Explore Coconut Lifestyle</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Discover Every Side of the <span className="text-gold-gradient">Sanctuary</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
            From our authentic open-flame braai kitchen to late-night bottle service and exotic Amaren hubbly clouds.
          </p>
        </div>

        {/* 4 Feature Pages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: The Vibe */}
          <Link
            to="/vibe"
            className="group relative rounded-2xl overflow-hidden border border-neutral-800 hover:border-[#D4AF37]/50 bg-neutral-950 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[#D4AF37]/10 flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={CLUB_INFO.barImageUrl}
                alt="Coconut Lifestyle Bar Vibe"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/WhatsApp_Image_2026-10-29_at_8.28.53_PM_1f33cc5c.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm border border-neutral-700/60 text-[11px] font-semibold text-pink-400 flex items-center gap-1">
                <Music className="w-3 h-3" />
                <span>The Atmosphere</span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  The Vibe & Club
                </h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  Step inside our vibrant lounge, bar counter, sound system, and street wooden deck entrance.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-900 flex items-center text-xs font-semibold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                <span>View Gallery & Vibe</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </div>
            </div>
          </Link>

          {/* Card 2: Kitchen & Braai */}
          <Link
            to="/kitchen"
            className="group relative rounded-2xl overflow-hidden border border-neutral-800 hover:border-[#D4AF37]/50 bg-neutral-950 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-amber-500/10 flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={CLUB_INFO.menuImages.platters}
                alt="Flame-Grilled Authentic Braai Platter"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/menu/club_braai_platter_1793297804070.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm border border-neutral-700/60 text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                <Flame className="w-3 h-3" />
                <span>Authentic Braai</span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  Kitchen & Food Menu
                </h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  Succulent quarter legs, brisket steak, dombolo dumpling, crispy chips, pap, and spicy chakalaka.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-900 flex items-center text-xs font-semibold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                <span>Explore Food Menu</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </div>
            </div>
          </Link>

          {/* Card 3: Drinks & Hubbly */}
          <Link
            to="/drinks"
            className="group relative rounded-2xl overflow-hidden border border-neutral-800 hover:border-[#D4AF37]/50 bg-neutral-950 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10 flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={CLUB_INFO.menuImages.hubbly}
                alt="Bar & Amaren Hubbly Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = CLUB_INFO.menuImages.bottles;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm border border-neutral-700/60 text-[11px] font-semibold text-cyan-400 flex items-center gap-1">
                <Wine className="w-3 h-3" />
                <span>Bar & Amaren Lounge</span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  Bottles & Hubbly
                </h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  Hennessy, Don Julio, Jameson, chilled ciders, and 6 exotic Amaren hubbly hookah flavors.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-900 flex items-center text-xs font-semibold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                <span>View Drinks & Flavors</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </div>
            </div>
          </Link>

          {/* Card 4: VIP Booths */}
          <Link
            to="/vip"
            className="group relative rounded-2xl overflow-hidden border border-neutral-800 hover:border-[#D4AF37]/50 bg-neutral-950 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-yellow-500/10 flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-28_at_10.09.08_PM_cfc0dbeb.jpeg"
                alt="VIP Lounge Booths"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm border border-neutral-700/60 text-[11px] font-semibold text-yellow-400 flex items-center gap-1">
                <Crown className="w-3 h-3" />
                <span>VIP Service</span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  VIP Booth Reservations
                </h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  Reserve your table with dedicated waitress service, sparkler bottle delivery, and stage view.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-900 flex items-center text-xs font-semibold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                <span>Reserve VIP Table</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Street Entrance & Security Preview */}
      <section className="py-12 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>12 Lower Ross Street • New Doornfontein</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                How to Spot Us in <span className="text-gold-gradient">Johannesburg</span>
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Look for our illuminated red neon sign, timber outdoor street deck, and welcoming entrance. Guarded parking is available on-site with round-the-clock security.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                    <Clock className="w-4 h-4" />
                    <span>Weekdays</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 mt-1">10:00 AM – 12:00 / 02:00 AM</p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <Clock className="w-4 h-4" />
                    <span>Weekends</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 mt-1">10:00 AM – 04:00 AM Late</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/location"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#F59E0B] text-black text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions on Maps</span>
                </Link>

                <a
                  href={`tel:${CLUB_INFO.phoneTel}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-semibold transition-colors"
                >
                  <span>Call {CLUB_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-xl group">
              <img
                src={CLUB_INFO.entranceImageUrl}
                alt="Coconut Lifestyle Outside Street Entrance with Timber Deck and Neon Sign"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-semibold bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-neutral-700">
                  Outside Street Entrance & Deck
                </span>
                <span className="text-amber-400 font-medium">Guarded Parking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Perks Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-neutral-900 text-[#D4AF37] border border-[#D4AF37]/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Guarded & Secure</h4>
              <p className="text-neutral-400 text-xs mt-1">Dedicated car guards and professional bouncers ensure complete peace of mind.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-neutral-900 text-emerald-400 border border-emerald-500/30">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">VIP Celebrations</h4>
              <p className="text-neutral-400 text-xs mt-1">Celebrate birthdays, bachelor parties, and reunions with dedicated hostesses.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-neutral-900 text-cyan-400 border border-cyan-500/30">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Top Resident DJs</h4>
              <p className="text-neutral-400 text-xs mt-1">Immersive sound delivering the best in Amapiano, Afro House, and Deep Beats.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
