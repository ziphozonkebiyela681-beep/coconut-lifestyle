import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/clubData';
import { GalleryPhoto } from '../types';
import { Eye, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const VibeGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'lounge' | 'party' | 'bar' | 'features'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = activeFilter === 'all' 
    ? GALLERY_PHOTOS 
    : GALLERY_PHOTOS.filter(p => p.tag === activeFilter);

  const openLightbox = (photo: GalleryPhoto) => {
    const index = GALLERY_PHOTOS.findIndex(p => p.id === photo.id);
    setSelectedPhotoIndex(index !== -1 ? index : 0);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_PHOTOS.length);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  return (
    <section id="vibe" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Inside Coconut Lifestyle</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white text-balance">
              The Space, The People & <span className="text-gold-gradient">The Atmosphere</span>
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-2 max-w-xl">
              From our vibrant 12 Lower Ross Street entrance and outdoor patio to our emerald and crimson velvet booths, the dance mezzanine, and the lush foliage selfie tunnel.
            </p>
          </div>

          {/* Filter Controls (Allowed functional button tabs) */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg overflow-x-auto max-w-full shrink-0">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'features', label: 'Entrance & Features' },
              { id: 'lounge', label: 'Velvet Lounge' },
              { id: 'party', label: 'The Crowd' },
              { id: 'bar', label: 'Mezzanine Bar' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/80 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Content overlay */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-left">
                <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-display text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors flex items-center justify-between">
                    <span>{photo.title}</span>
                    <Eye className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 mt-1 leading-relaxed">
                    {photo.subtitle}
                  </p>
                </div>
              </div>

              {/* Rainbow bottom accent hairline on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rainbow-gradient-bar opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-neutral-400 hover:text-white bg-neutral-900/80 rounded-full border border-neutral-700 transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-2.5 text-white bg-black/70 hover:bg-[#D4AF37] hover:text-black rounded-full border border-neutral-700 transition-colors z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-2.5 text-white bg-black/70 hover:bg-[#D4AF37] hover:text-black rounded-full border border-neutral-700 transition-colors z-10"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
              <img
                src={GALLERY_PHOTOS[selectedPhotoIndex].src}
                alt={GALLERY_PHOTOS[selectedPhotoIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Details Footer */}
            <div className="w-full mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-neutral-300 gap-2">
              <div>
                <h4 className="font-display text-lg font-bold text-white">
                  {GALLERY_PHOTOS[selectedPhotoIndex].title}
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {GALLERY_PHOTOS[selectedPhotoIndex].subtitle}
                </p>
              </div>
              <div className="text-xs text-[#D4AF37] font-semibold tabular-nums shrink-0">
                {selectedPhotoIndex + 1} / {GALLERY_PHOTOS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
