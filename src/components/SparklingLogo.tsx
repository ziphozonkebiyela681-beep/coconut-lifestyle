import React from 'react';
import { CLUB_INFO } from '../data/clubData';

interface SparklingLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const SparklingLogo: React.FC<SparklingLogoProps> = ({
  className = '',
  size = 'hero',
}) => {
  // Sparkle stars placed relatively around the skyline and letters
  const sparkles = [
    // Top of Brixton Tower (Needle)
    { top: '3%', left: '49%', delay: '0s', size: 'w-4 h-4 text-amber-200' },
    // Top of Hillbrow Tower
    { top: '8%', left: '77%', delay: '1.2s', size: 'w-5 h-5 text-yellow-300' },
    // Left skyline highrise
    { top: '24%', left: '31%', delay: '0.6s', size: 'w-3.5 h-3.5 text-amber-100' },
    // Far left skyline corner
    { top: '32%', left: '23%', delay: '1.8s', size: 'w-3 h-3 text-yellow-200' },
    // Skyline divider bar right
    { top: '41%', left: '85%', delay: '0.9s', size: 'w-3.5 h-3.5 text-amber-200' },
    // Skyline divider bar left
    { top: '41%', left: '15%', delay: '2.1s', size: 'w-3.5 h-3.5 text-yellow-300' },
    // "C" of COCONUT
    { top: '62%', left: '12%', delay: '1.5s', size: 'w-4 h-4 text-amber-100' },
    // Center "O" dot of COCONUT
    { top: '56%', left: '37%', delay: '0.3s', size: 'w-4 h-4 text-yellow-200' },
    // "N" / "U" of COCONUT
    { top: '63%', left: '68%', delay: '2.4s', size: 'w-3.5 h-3.5 text-amber-200' },
    // "T" of COCONUT
    { top: '58%', left: '89%', delay: '1.1s', size: 'w-4 h-4 text-yellow-100' },
    // Bottom golden pendant dot under LIFESTYLE
    { top: '88%', left: '50%', delay: '1.9s', size: 'w-4 h-4 text-yellow-300' },
  ];

  const sizeClasses = {
    sm: 'max-h-10 w-auto',
    md: 'max-h-16 w-auto',
    lg: 'max-h-24 w-auto',
    hero: 'w-full max-w-xl max-h-56 sm:max-h-64 object-contain',
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Ambient Sparkle Dust Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-400/20 to-amber-500/10 blur-2xl rounded-full pointer-events-none" />

      {/* Actual Isolated Gold Logo */}
      <img
        src={CLUB_INFO.logoUrl}
        alt="Coconut Lifestyle Johannesburg Skyline Logo"
        className={`relative z-10 mx-auto select-none logo-sparkle-glow ${sizeClasses[size]}`}
      />

      {/* Sparkling Stars Overlay (Hero mode) */}
      {size === 'hero' && (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-visible">
          {sparkles.map((sparkle, idx) => (
            <div
              key={idx}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                top: sparkle.top,
                left: sparkle.left,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${sparkle.size} animate-twinkle`}
                style={{ animationDelay: sparkle.delay }}
              >
                {/* 4-point Diamond Sparkle Star */}
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
