import React from 'react';
import { Link } from 'react-router-dom';
import { VibeGallery } from '../components/VibeGallery';
import { CLUB_INFO } from '../data/clubData';
import { Sparkles, Music, Volume2, Shield, Calendar, ArrowRight, Camera } from 'lucide-react';

interface VibePageProps {
  onOpenBooking: () => void;
}

export const VibePage: React.FC<VibePageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Page Hero Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-neutral-950 via-[#0a0a0a] to-[#080808] border-b border-neutral-900 overflow-hidden">
        {/* Soft Ambient Glow Field */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/90 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-md">
            <Camera className="w-3.5 h-3.5" />
            <span>Nightclub Atmosphere & Energy</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            The Vibe at <span className="text-gold-gradient">Coconut Lifestyle</span>
          </h1>

          <p className="text-neutral-300 text-xs sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            From our outdoor wooden street deck under the Johannesburg sky to the pulsating blue-and-neon lit bar, immerse yourself in our sanctuary of sound and luxury.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] text-black text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 transition-all"
            >
              Book a Table for Tonight
            </button>

            <Link
              to="/drinks"
              className="px-5 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <span>Explore Bottles & Hubbly</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Interactive Gallery Component */}
      <VibeGallery />

      {/* Music, Sound & Club Culture Details */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1: Music Lineup */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-4">
              <div className="p-3 rounded-xl bg-neutral-800 w-fit text-pink-400">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">The Sound Experience</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                State-of-the-art concert sound tuned for heavy bass, pristine vocals, and goosebump-inducing drops. Resident and guest DJs spin Amapiano, Deep Tech, Afro House, and Hip-Hop.
              </p>
              <div className="pt-2 text-[11px] text-amber-400 font-medium">
                Live Sets Every Friday, Saturday & Sunday
              </div>
            </div>

            {/* Box 2: Dress Code & Door Policy */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-4">
              <div className="p-3 rounded-xl bg-neutral-800 w-fit text-[#D4AF37]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Dress Code & Door Policy</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Smart casual to glam luxury. We welcome trendy streetwear, sneakers in pristine condition, and chic nightlife fashion. Strict 18+ policy; valid ID required at the door.
              </p>
              <div className="pt-2 text-[11px] text-emerald-400 font-medium">
                Guarded Parking & Security On-Site
              </div>
            </div>

            {/* Box 3: Operating Rhythm */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-4">
              <div className="p-3 rounded-xl bg-neutral-800 w-fit text-cyan-400">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Day to Late-Night Flow</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Open from 10:00 AM daily for relaxed lunch, street deck chilling, and daytime braai platters, transitioning smoothly into high-energy club nights closing at 2 AM weekdays and 4 AM on weekends.
              </p>
              <div className="pt-2 text-[11px] text-cyan-400 font-medium">
                Open 7 Days a Week from 10 AM
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
