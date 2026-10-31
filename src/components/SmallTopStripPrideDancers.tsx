import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface SmallTopStripPrideDancersProps {
  onPartyEnd?: () => void;
}

export const SmallTopStripPrideDancers: React.FC<SmallTopStripPrideDancersProps> = ({ onPartyEnd }) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [fading, setFading] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(true);
    setFading(false);

    // Fade out softly at 5.2s
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 5200);

    // Completely disappear at 6.0s
    const stopTimer = setTimeout(() => {
      setIsActive(false);
      setFading(false);
      if (onPartyEnd) onPartyEnd();
    }, 6000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(stopTimer);
    };
  }, [onPartyEnd]);

  if (!isActive) return null;

  return (
    <div
      className={`relative w-full overflow-hidden transition-all duration-700 ease-out ${
        fading ? 'opacity-0 max-h-0' : 'opacity-100 max-h-12'
      }`}
      aria-label="5 people dancing under a disco ball with blended Pride rainbow stripes"
    >
      {/* Pride SVG Soft-Blended Rainbow Gradients */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true" focusable="false">
        <defs>
          {/* Smooth, soft-blended continuous Pride gradient */}
          <linearGradient id="softBlendedPride" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF1E56" />
            <stop offset="18%" stopColor="#FF7A00" />
            <stop offset="38%" stopColor="#FFD000" />
            <stop offset="58%" stopColor="#05D686" />
            <stop offset="78%" stopColor="#00A3FF" />
            <stop offset="100%" stopColor="#8F40FF" />
          </linearGradient>

          {/* Soft-blended Vertical Pride gradient for silhouettes */}
          <linearGradient id="softBlendedPrideV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF1E56" />
            <stop offset="20%" stopColor="#FF7A00" />
            <stop offset="40%" stopColor="#FFD000" />
            <stop offset="60%" stopColor="#05D686" />
            <stop offset="80%" stopColor="#00A3FF" />
            <stop offset="100%" stopColor="#8F40FF" />
          </linearGradient>

          {/* Soft luminous disco ball radial fill */}
          <radialGradient id="softBlendedDiscoBall" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FFD000" />
            <stop offset="55%" stopColor="#05D686" />
            <stop offset="80%" stopColor="#00A3FF" />
            <stop offset="100%" stopColor="#8F40FF" />
          </radialGradient>
        </defs>
      </svg>

      {/* Slim, elegant top strip container */}
      <div className="w-full bg-[#070707] border-b border-[#D4AF37]/20 flex items-center justify-center py-1 sm:py-1.5 px-3 relative">
        {/* Ambient soft blended glow behind the dancers */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-amber-400/10 via-emerald-400/10 via-sky-400/10 to-purple-500/10 blur-md pointer-events-none" />

        {/* The 5 Dancers and Disco Ball growing with softness and elegance */}
        <div className="relative flex items-center justify-center gap-1.5 sm:gap-4 animate-soft-grow">
          {/* Subtle elegant left tag */}
          <div className="hidden xs:flex items-center gap-1 text-[9px] sm:text-[10px] text-amber-300/80 font-medium tracking-widest uppercase">
            <Sparkles className="w-2.5 h-2.5 text-pink-400 animate-pulse" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">
              Love & Unity
            </span>
          </div>

          {/* Mini Crew: 2 Dancers on Left */}
          <div className="flex items-end gap-1 select-none">
            {/* Dancer 1 (Miniature - Arm wave & sway) */}
            <div className="w-4 h-5 sm:w-5 sm:h-6 animate-elegant-sway-1 filter drop-shadow-[0_0_4px_rgba(255,30,86,0.6)]">
              <svg viewBox="0 0 60 120" className="w-full h-full">
                <g fill="url(#softBlendedPrideV)">
                  <circle cx="30" cy="16" r="8" />
                  <path d="M22,26 L38,26 L35,62 L25,62 Z" />
                  <path d="M23,28 L10,12 L6,15 L18,34 Z" />
                  <path d="M37,28 L50,10 L54,14 L42,34 Z" />
                  <path d="M25,60 L16,92 L22,94 L30,64 Z" />
                  <path d="M16,92 L10,112 L18,114 L24,94 Z" />
                  <circle cx="12" cy="113" r="3" />
                  <path d="M35,60 L44,88 L38,90 L31,64 Z" />
                  <path d="M44,88 L52,110 L44,113 L38,90 Z" />
                  <circle cx="50" cy="112" r="3" />
                </g>
              </svg>
            </div>

            {/* Dancer 2 (Miniature - Disco point groove) */}
            <div className="w-4 h-5 sm:w-5 sm:h-6 animate-elegant-sway-2 filter drop-shadow-[0_0_4px_rgba(255,122,0,0.6)]">
              <svg viewBox="0 0 60 120" className="w-full h-full">
                <g fill="url(#softBlendedPrideV)">
                  <circle cx="32" cy="18" r="8" />
                  <path d="M24,28 C28,26 38,28 38,30 L36,64 L24,62 Z" />
                  <path d="M38,30 L55,14 L57,18 L40,36 Z" />
                  <path d="M24,30 L12,42 L16,46 L24,40 Z" />
                  <path d="M25,62 L20,90 L26,92 L30,64 Z" />
                  <path d="M20,90 L18,114 L25,114 L26,92 Z" />
                  <circle cx="19" cy="114" r="3" />
                  <path d="M36,64 L42,90 L36,92 L31,64 Z" />
                  <path d="M42,90 L46,112 L39,114 L36,92 Z" />
                  <circle cx="45" cy="113" r="3" />
                </g>
              </svg>
            </div>
          </div>

          {/* Mini Hanging Disco Ball (Center overhead) */}
          <div className="flex flex-col items-center px-1 animate-disco-soft-pulse select-none">
            {/* Tiny hanging string */}
            <div className="w-[1px] h-1.5 sm:h-2 bg-neutral-400/80" />
            {/* Delicate Disco Ball with soft blended colors */}
            <div className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full p-[0.5px] shadow-[0_0_8px_rgba(255,208,0,0.8)]">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="18" fill="url(#softBlendedPride)" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
                <line x1="4" y1="20" x2="36" y2="20" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
                <line x1="8" y1="12" x2="32" y2="12" stroke="rgba(255,255,255,0.4)" strokeWidth="0.7" />
                <line x1="8" y1="28" x2="32" y2="28" stroke="rgba(255,255,255,0.4)" strokeWidth="0.7" />
                <ellipse cx="20" cy="20" rx="9" ry="18" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.7" />
              </svg>
              {/* Soft sparkle glint */}
              <span className="absolute top-0.5 left-1 w-1 h-1 bg-white rounded-full animate-ping opacity-90" />
            </div>
          </div>

          {/* Mini Crew: 3 Dancers on Right (Total 5 people partying) */}
          <div className="flex items-end gap-1 select-none">
            {/* Dancer 3 (Miniature - Both arms raised in hype) */}
            <div className="w-4 h-5 sm:w-5 sm:h-6 animate-elegant-sway-3 filter drop-shadow-[0_0_4px_rgba(5,214,134,0.6)]">
              <svg viewBox="0 0 60 120" className="w-full h-full">
                <g fill="url(#softBlendedPrideV)">
                  <circle cx="30" cy="17" r="7.5" />
                  <path d="M22,27 L38,27 L34,60 L24,60 Z" />
                  <path d="M23,28 L12,12 L8,15 L18,32 Z" />
                  <path d="M37,28 L46,14 L50,17 L40,32 Z" />
                  <path d="M24,60 L18,88 L24,90 L28,62 Z" />
                  <path d="M18,88 L14,112 L22,112 L24,90 Z" />
                  <circle cx="15" cy="112" r="3" />
                  <path d="M34,60 L40,88 L34,90 L30,62 Z" />
                  <path d="M40,88 L46,112 L38,113 L34,90 Z" />
                  <circle cx="44" cy="112" r="3" />
                </g>
              </svg>
            </div>

            {/* Dancer 4 (Miniature - Shoulder groove pop) */}
            <div className="w-4 h-5 sm:w-5 sm:h-6 animate-elegant-sway-1 filter drop-shadow-[0_0_4px_rgba(0,163,255,0.6)]">
              <svg viewBox="0 0 60 120" className="w-full h-full">
                <g fill="url(#softBlendedPrideV)">
                  <circle cx="28" cy="16" r="8" />
                  <path d="M20,26 L36,26 L34,62 L22,62 Z" />
                  <path d="M21,28 L5,34 L6,39 L20,36 Z" />
                  <path d="M36,26 L46,12 L51,15 L40,32 Z" />
                  <path d="M22,62 L15,86 L22,88 L27,63 Z" />
                  <path d="M15,86 L10,112 L17,113 L22,88 Z" />
                  <circle cx="11" cy="113" r="3" />
                  <path d="M34,62 L42,86 L36,88 L30,63 Z" />
                  <path d="M42,86 L48,110 L41,112 L36,88 Z" />
                  <circle cx="47" cy="111" r="3" />
                </g>
              </svg>
            </div>

            {/* Dancer 5 (Miniature - Party kick step) */}
            <div className="w-4 h-5 sm:w-5 sm:h-6 animate-elegant-sway-2 filter drop-shadow-[0_0_4px_rgba(143,64,255,0.6)]">
              <svg viewBox="0 0 60 120" className="w-full h-full">
                <g fill="url(#softBlendedPrideV)">
                  <circle cx="32" cy="16" r="7.5" />
                  <path d="M24,26 L38,26 L35,60 L24,60 Z" />
                  <path d="M24,28 L12,18 L15,14 L27,27 Z" />
                  <path d="M38,27 L50,16 L53,20 L40,32 Z" />
                  <path d="M25,60 L22,90 L28,91 L30,62 Z" />
                  <path d="M22,90 L20,114 L27,114 L28,91 Z" />
                  <circle cx="21" cy="114" r="3" />
                  <path d="M35,60 L46,80 L42,84 L32,62 Z" />
                  <path d="M46,80 L56,98 L50,102 L42,84 Z" />
                  <circle cx="55" cy="100" r="3" />
                </g>
              </svg>
            </div>
          </div>

          {/* Subtle elegant right tag */}
          <div className="hidden xs:flex items-center gap-1 text-[9px] sm:text-[10px] text-purple-300/80 font-medium tracking-widest uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400">
              Coconut Lifestyle
            </span>
            <Sparkles className="w-2.5 h-2.5 text-sky-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
