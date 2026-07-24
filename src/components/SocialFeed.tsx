'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, MessageCircle, ExternalLink, X, Eye, Sparkles, Video, Grid } from 'lucide-react';
import TiltCard from './TiltCard';

function InstagramIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/moderneducationgroupkct?igsh=MTY5Znphcmc2Y2g1Zw==';
const YOUTUBE_CHANNEL_URL = 'https://youtube.com/@aashishkumawat4332?si=RdjrofaPsYSyKQrN';

interface FeedItem {
  id: string;
  platform: 'instagram' | 'youtube';
  title: string;
  caption: string;
  image: string;
  videoUrl?: string;
  embedUrl?: string;
  igReelId?: string;
  ytVideoId?: string;
  likesOrViews: string;
  commentsOrTime: string;
  date: string;
  tag: string;
  link: string;
}

const FEED_DATA: FeedItem[] = [
  {
    id: 'ig-reel-1',
    platform: 'instagram',
    title: 'School Campus Celebration & Events 🌟',
    caption: 'Moments of joy, learning, and student achievements at Modern Education Group! Watch our full Reel on Instagram. #ModernEduGroup #CampusLife',
    image: 'https://www.instagram.com/p/DVfHIXHCQpd/media/?size=l',
    igReelId: 'DVfHIXHCQpd',
    likesOrViews: '3.4K Likes',
    commentsOrTime: '184 Comments',
    date: 'Recent Reel',
    tag: 'Instagram Reel',
    link: 'https://www.instagram.com/reel/DVfHIXHCQpd/?igsh=aTV3bGhidHlwOGxh',
  },
  {
    id: 'ig-reel-2',
    platform: 'instagram',
    title: 'Student Activities & Cultural Highlights 🎬',
    caption: 'Highlights from our student programs, vibrant celebrations, and academic competitions. #ModernEducationGroup #StudentLife',
    image: 'https://www.instagram.com/p/Da4wM_ToC13/media/?size=l',
    igReelId: 'Da4wM_ToC13',
    likesOrViews: '4.1K Likes',
    commentsOrTime: '230 Comments',
    date: 'Trending Reel',
    tag: 'Instagram Reel',
    link: 'https://www.instagram.com/reel/Da4wM_ToC13/?igsh=MWs1ZzdnNnR2OW5qbQ==',
  },
  {
    id: 'ig-reel-3',
    platform: 'instagram',
    title: 'Science Lab & Interactive Workshops 🔬',
    caption: 'Explore our practical science experiments, STEM workshops, and student innovation showcases. #ScienceLab #Robotics',
    image: 'https://www.instagram.com/p/DZY2MoupsWJ/media/?size=l',
    igReelId: 'DZY2MoupsWJ',
    likesOrViews: '2.9K Likes',
    commentsOrTime: '156 Comments',
    date: 'Latest Reel',
    tag: 'Instagram Reel',
    link: 'https://www.instagram.com/reel/DZY2MoupsWJ/?igsh=MjBpcWo0c29keGho',
  },
  {
    id: 'yt-1',
    platform: 'youtube',
    title: 'Modern Education Group Annual Showcase 🎥',
    caption: 'Watch the official school video presentation featuring campus infrastructure, student activities, and academic highlights.',
    image: 'https://img.youtube.com/vi/AE0GJZATIqk/hqdefault.jpg',
    ytVideoId: 'AE0GJZATIqk',
    likesOrViews: '18.5K Views',
    commentsOrTime: '06:45 min',
    date: 'Recent Video',
    tag: 'YouTube Video',
    link: 'https://youtu.be/AE0GJZATIqk?si=FstybcMvjupm6vDc',
  },
  {
    id: 'yt-2',
    platform: 'youtube',
    title: 'Campus Highlights & Student Excellence 🌟',
    caption: 'Experience our vibrant academic environment, sports grounds, science laboratories, and collegiate preparation programs.',
    image: 'https://img.youtube.com/vi/AtkMW_mXOCs/hqdefault.jpg',
    ytVideoId: 'AtkMW_mXOCs',
    likesOrViews: '12.3K Views',
    commentsOrTime: '12:10 min',
    date: 'Featured Video',
    tag: 'YouTube Video',
    link: 'https://youtu.be/AtkMW_mXOCs?si=N3xvruFHzq6Q3msg',
  },
  {
    id: 'yt-3',
    platform: 'youtube',
    title: 'School Activities & Student Vlogs 🏫',
    caption: 'A deep dive into day-to-day student life, leadership workshops, and holistic education across our three campuses.',
    image: 'https://img.youtube.com/vi/AtkMW_mXOCs/hqdefault.jpg',
    ytVideoId: 'AtkMW_mXOCs',
    likesOrViews: '24.1K Views',
    commentsOrTime: '08:30 min',
    date: 'Trending Video',
    tag: 'YouTube Video',
    link: 'https://youtu.be/AtkMW_mXOCs?si=N3xvruFHzq6Q3msg',
  },
];

export default function SocialFeed() {
  const [activeTab, setActiveTab] = useState<'all' | 'instagram' | 'youtube'>('all');
  const [activeItem, setActiveItem] = useState<FeedItem | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const filteredFeed = FEED_DATA.filter((item) => {
    if (activeTab === 'all') return true;
    return item.platform === activeTab;
  });

  return (
    <section id="social-feed" className="py-24 px-6 md:px-8 bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[30%] left-[10%] w-96 h-96 bg-purple-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-red-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 border border-pink-500/20 text-xs font-bold text-primary tracking-widest uppercase mb-4"
          >
            <Sparkles className="h-3.5 w-3.5 text-pink-500" />
            Social Wall &amp; Live Feeds
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
          >
            Official Instagram &amp; YouTube Feeds
          </motion.h2>
          <p className="text-slate-500 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Watch live campus videos, reels, events, and student highlights from our official social media channels.
          </p>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Social Channel Counters & Quick Follow Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {/* Instagram Follow Card */}
          <motion.a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-orange-500/10 border border-pink-500/20 flex items-center justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-md">
                <InstagramIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-primary group-hover:text-pink-600 transition-colors">
                  @moderneducationgroupkct
                </h4>
                <p className="text-xs text-slate-500 font-mono">Official Instagram Page ↗</p>
              </div>
            </div>
            <div className="p-2 rounded-full bg-pink-500/10 text-pink-600 group-hover:bg-pink-500 group-hover:text-white transition-colors">
              <ExternalLink className="h-4 w-4" />
            </div>
          </motion.a>

          {/* YouTube Follow Card */}
          <motion.a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-red-500/10 via-red-500/5 to-rose-500/10 border border-red-500/20 flex items-center justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="p-3.5 rounded-2xl bg-red-600 text-white shadow-md">
                <YoutubeIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-primary group-hover:text-red-600 transition-colors">
                  @aashishkumawat4332
                </h4>
                <p className="text-xs text-slate-500 font-mono">Official YouTube Channel ↗</p>
              </div>
            </div>
            <div className="p-2 rounded-full bg-red-500/10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <ExternalLink className="h-4 w-4" />
            </div>
          </motion.a>
        </div>

        {/* Filter Switcher Pills */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1.5 bg-slate-100/80 border border-slate-200 shadow-inner rounded-2xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-500 hover:text-primary hover:bg-slate-200/50'
              }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setActiveTab('instagram')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'instagram'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-pink-600 hover:bg-slate-200/50'
              }`}
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              Instagram Feed
            </button>
            <button
              onClick={() => setActiveTab('youtube')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'youtube'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-red-600 hover:bg-slate-200/50'
              }`}
            >
              <YoutubeIcon className="h-3.5 w-3.5" />
              YouTube Videos
            </button>
          </div>
        </div>

        {/* Masonry / Responsive Feed Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredFeed.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <TiltCard className="h-full rounded-[32px] overflow-hidden border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="glass-card rounded-[32px] overflow-hidden group flex flex-col h-full bg-white/80 backdrop-blur-xl relative border border-transparent">
                    
                    {/* Media Container: Plays embedded video on click for YouTube, or opens Lightbox/IG */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                      {playingVideoId === item.id && item.ytVideoId ? (
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${item.ytVideoId}?autoplay=1`}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={item.title}
                        />
                      ) : playingVideoId === item.id && item.embedUrl ? (
                        <video
                          src={item.embedUrl}
                          controls
                          autoPlay
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/images/campus.png';
                            }}
                          />

                          {/* Badge Tag */}
                          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white">
                            {item.platform === 'instagram' ? (
                              <InstagramIcon className="h-3 w-3 text-pink-400" />
                            ) : (
                              <YoutubeIcon className="h-3 w-3 text-red-500" />
                            )}
                            <span>{item.tag}</span>
                          </div>

                          {/* Center Play / Open Overlay */}
                          <div
                            onClick={() => {
                              if (item.platform === 'youtube' && (item.ytVideoId || item.embedUrl)) {
                                setPlayingVideoId(item.id);
                              } else {
                                setActiveItem(item);
                              }
                            }}
                            className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-90 group-hover:opacity-100 group-hover:bg-black/40 transition-all duration-300 cursor-pointer"
                          >
                            {item.platform === 'youtube' ? (
                              <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border border-white/20">
                                <Play className="h-6 w-6 fill-white ml-1" />
                              </div>
                            ) : (
                              <div className="w-14 h-14 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                <InstagramIcon className="h-6 w-6" />
                              </div>
                            )}
                          </div>

                          <div className="absolute bottom-3 right-3 text-[10px] font-mono text-white/90 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                            {item.date}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Content Details */}
                    <div className="p-6 flex flex-col justify-between flex-grow text-left">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-primary mb-2 line-clamp-1 group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-2 mb-4">
                          {item.caption}
                        </p>
                      </div>

                      {/* Footer Stats & Live Action Buttons */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500 font-semibold">
                        <div className="flex items-center gap-1.5">
                          {item.platform === 'instagram' ? (
                            <>
                              <Heart className="h-3.5 w-3.5 text-pink-500 fill-pink-500/20" />
                              <span>{item.likesOrViews}</span>
                            </>
                          ) : (
                            <>
                              <Eye className="h-3.5 w-3.5 text-red-500" />
                              <span>{item.likesOrViews}</span>
                            </>
                          )}
                        </div>

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-bold text-primary hover:text-accent transition-colors"
                        >
                          <span>Open on {item.platform === 'instagram' ? 'Instagram' : 'YouTube'}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Preview Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/90 backdrop-blur-2xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden glass-card-dark border border-white/10 shadow-2xl flex flex-col cursor-default text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Media Stage */}
              <div className="relative w-full aspect-[16/9] bg-black">
                {activeItem.igReelId ? (
                  <iframe
                    src={`https://www.instagram.com/reel/${activeItem.igReelId}/embed`}
                    className="w-full h-full border-0"
                    allow="encrypted-media"
                    title={activeItem.title}
                  />
                ) : activeItem.ytVideoId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeItem.ytVideoId}?autoplay=1`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={activeItem.title}
                  />
                ) : activeItem.embedUrl ? (
                  <video
                    src={activeItem.embedUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Caption & Modal Body */}
              <div className="p-6 bg-primary/95 border-t border-white/10 text-white space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {activeItem.platform === 'instagram' ? (
                      <div className="p-1.5 rounded-lg bg-pink-500 text-white">
                        <InstagramIcon className="h-4 w-4" />
                      </div>
                    ) : (
                      <div className="p-1.5 rounded-lg bg-red-600 text-white">
                        <YoutubeIcon className="h-4 w-4" />
                      </div>
                    )}
                    <span className="text-xs font-bold text-accent uppercase tracking-widest font-mono">
                      {activeItem.platform === 'instagram' ? '@moderneducationgroupkct' : '@aashishkumawat4332'}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">{activeItem.date}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold">{activeItem.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {activeItem.caption}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <div className="text-xs font-mono text-slate-400">
                    {activeItem.likesOrViews} • {activeItem.commentsOrTime}
                  </div>
                  <a
                    href={activeItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-accent text-primary font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2"
                  >
                    <span>Open on {activeItem.platform === 'instagram' ? 'Instagram' : 'YouTube'}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
