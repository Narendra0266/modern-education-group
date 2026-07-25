'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon, Play, Video } from 'lucide-react';
import { getAssetPath } from '@/lib/image';

const GALLERY_IMAGES = [
  {
    type: 'image',
    src: '/images/gallery_1.jpg',
    fallback: '/images/gallery_1.jpg',
    alt: 'Modern Education Group Campus Activity',
    title: 'School Ground Assembly',
    category: 'Campus Life',
    aspect: 'aspect-square',
  },
  {
    type: 'image',
    src: '/images/gallery_2.jpg',
    fallback: '/images/gallery_2.jpg',
    alt: 'Modern Girls College Building',
    title: 'Modern Girls College',
    category: 'Infrastructure',
    aspect: 'aspect-[3/2]',
  },
  {
    type: 'image',
    src: '/images/gallery_3.jpg',
    fallback: '/images/gallery_3.jpg',
    alt: 'Aerial view of Modern Education Group',
    title: 'Centennial Campus Aerial',
    category: 'Infrastructure',
    aspect: 'aspect-[4/3]',
  },
  {
    type: 'image',
    src: '/images/campus.jpg',
    fallback: '/images/campus.jpg',
    alt: 'Lush green campus grounds',
    title: 'Green Campus',
    category: 'Campus Life',
    aspect: 'aspect-[3/4]',
  },
  {
    type: 'image',
    src: '/images/chairman.png',
    fallback: '/images/chairman.png',
    alt: 'Dr. Devilal Kumawat, Chairperson',
    title: 'Academic Leadership',
    category: 'Leadership',
    aspect: 'aspect-[3/2]',
  },
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev! - 1));
    }
  }, [selectedIdx]);

  const handleNext = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev! + 1));
    }
  }, [selectedIdx]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-24 px-6 md:px-8 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[10%] left-[5%] w-80 h-80 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 block"
          >
            Campus Life Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
          >
            Inside Modern Education Group
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Pinterest Column Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              onClick={() => setSelectedIdx(idx)}
              className={`relative break-inside-avoid rounded-3xl overflow-hidden glass-card group cursor-pointer border border-white/60 shadow-md hover:shadow-2xl transition-all duration-500 ${item.aspect}`}
            >
              {/* Image thumbnail (works for videos too using fallback) */}
              <img
                src={item.type === 'video' ? item.fallback : getAssetPath(item.src)}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = item.fallback;
                }}
              />

              {/* Play icon overlay permanently visible on videos */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none z-5">
                  <div className="p-3.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-5 w-5 fill-white" />
                  </div>
                </div>
              )}

              {/* Glassmorphic Hover Overlay */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 z-10 flex flex-col justify-end p-6">
                <div className="absolute top-6 right-6 p-2 rounded-full bg-white/15 border border-white/20 text-white transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                  {item.type === 'video' ? <Play className="h-4 w-4 fill-white" /> : <Maximize2 className="h-4 w-4" />}
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-left">
                  <span className="text-[10px] font-bold text-accent tracking-widest uppercase mb-1.5 block font-mono">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/90 backdrop-blur-2xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-card-dark border border-white/10 shadow-2xl flex flex-col cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-55 p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-colors cursor-pointer"
                aria-label="Previous Item"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-55 p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-colors cursor-pointer"
                aria-label="Next Item"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Lightbox Media Player */}
              {GALLERY_IMAGES[selectedIdx].type === 'video' ? (
                <div className="relative w-full aspect-[16/10] bg-black">
                  <video
                    src={GALLERY_IMAGES[selectedIdx].src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="relative aspect-[16/10] w-full bg-slate-950/20">
                  <img
                    src={GALLERY_IMAGES[selectedIdx].src}
                    alt={GALLERY_IMAGES[selectedIdx].alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = GALLERY_IMAGES[selectedIdx].fallback;
                    }}
                  />
                </div>
              )}

              {/* Caption Bar */}
              <div className="p-6 bg-primary/80 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
                <div>
                  <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-1">
                    {GALLERY_IMAGES[selectedIdx].type === 'video' ? (
                      <Video className="h-3 w-3" />
                    ) : (
                      <ImageIcon className="h-3 w-3" />
                    )}
                    {GALLERY_IMAGES[selectedIdx].category}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {GALLERY_IMAGES[selectedIdx].title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light mt-1">
                    {GALLERY_IMAGES[selectedIdx].alt}
                  </p>
                </div>
                
                <a
                  href="#contact"
                  onClick={() => setSelectedIdx(null)}
                  className="px-6 py-2.5 rounded-full bg-accent text-primary text-xs font-semibold uppercase tracking-widest hover:bg-white transition-colors text-center shrink-0"
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}