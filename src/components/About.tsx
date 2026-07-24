'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Target, Eye, Compass, Quote, Award } from 'lucide-react';

interface AboutProps {
  title?: string;
  subtitle?: string;
  historyText?: string;
  visionText?: string;
  missionText?: string;
  valuesText?: string;
  chairmanText?: string;
  chairmanName?: string;
  chairmanTitle?: string;
  imageSrc?: string;
  stats?: { value: number; suffix?: string; label: string }[];
  quoteText?: string;
  quoteAuthor?: string;
}

type TabType = 'mission' | 'vision' | 'values';

export default function About({
  title = 'Modern Education Group',
  subtitle = 'Shaping the Future of Learning',
  historyText = 'Established in 1995, the Modern Education Group is a premier academic foundation overseeing elite primary, secondary, and higher educational institutions. We integrate classical instruction with state-of-the-art tech sandboxes.',
  visionText = 'To build a benchmark network of progressive schools that inspire moral integrity, academic discipline, and technological innovation.',
  missionText = 'We empower diverse student bodies through structured college prep curricula, advanced robotics and AI programs, elite athletics, and values-based guidance.',
  valuesText = 'Integrity, innovation, discipline, and holistic character building form the cornerstones of our educational philosophy across all institutions.',
  chairmanText = 'Education is the key to unlocking leadership. Our institutions coordinate to nurture intellectual curiosity at every age, equipping students to build a better tomorrow through discipline and innovation.',
  chairmanName = 'Dr. Arthur Modern',
  chairmanTitle = 'Chairperson, Modern Education Group',
  imageSrc = 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
  stats,
  quoteText,
  quoteAuthor,
}: AboutProps) {
  const [activeTab, setActiveTab] = useState<TabType>('mission');
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, margin: '-100px' });

  const revealWords = 'Pioneering educational excellence through three world-class campuses, combining robust STEM instruction with classical arts to shape tomorrow\'s global leaders.'.split(' ');

  const finalQuoteText = quoteText || chairmanText;
  const finalQuoteAuthor = quoteAuthor || chairmanName;

  const tabContents = {
    mission: {
      title: 'Our Mission',
      icon: <Target className="h-6 w-6 text-accent" />,
      text: missionText,
      bullets: [
        'Pioneering personalized research-led curriculums.',
        'Embedding technological literacy from foundational levels.',
        'Nurturing inclusive, multiculturally aware campus spaces.',
      ],
    },
    vision: {
      title: 'Our Vision',
      icon: <Eye className="h-6 w-6 text-accent" />,
      text: visionText,
      bullets: [
        'Establishing international college partnerships.',
        'Sustaining 100% placement and entrance successes.',
        'Fostering a lifelong network of change-makers.',
      ],
    },
    values: {
      title: 'Our Values',
      icon: <Compass className="h-6 w-6 text-accent" />,
      text: valuesText,
      bullets: [
        'Integrity: Honor codes in all academic pursuits.',
        'Excellence: Pushing boundaries beyond traditional metrics.',
        'Discipline: Cultivating habits that generate long-term impact.',
      ],
    },
  };

  return (
    <section id="about" className="py-24 px-6 md:px-8 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 block"
          >
            A Legacy of Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6 animate-text-reveal"
          >
            {title}
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Animated Text Reveal (Awwwards Style) */}
        <div ref={textRef} className="max-w-5xl mx-auto text-center mb-20">
          <p className="text-xl sm:text-3xl font-light font-serif leading-relaxed tracking-wide text-primary">
            {revealWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: 'blur(8px)', y: 15 }}
                animate={isTextInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.04, ease: 'easeOut' }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Campus Image / Visual Art */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl group border border-slate-200"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10 opacity-40" />
              <img
                src={imageSrc}
                alt="Modern Education Campus"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop';
                }}
              />

              {/* Floating Glass Stamp */}
              <div className="absolute bottom-6 left-6 right-6 glass-card-dark p-6 rounded-2xl z-20 border border-white/10">
                <Quote className="h-6 w-6 text-accent mb-2" />
                <p className="text-sm italic text-slate-200 font-light leading-relaxed mb-3">
                  &quot;{finalQuoteText}&quot;
                </p>
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {finalQuoteAuthor}
                  {chairmanTitle && !quoteAuthor && (
                    <span className="text-[10px] text-slate-400 block font-normal tracking-normal capitalize">
                      {chairmanTitle}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent/10 blur-[100px] rounded-full -z-10" />
          </div>

          {/* Right Column: Pillars & Tabs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-10 text-left">
              <h3 className="text-2xl font-bold font-serif text-primary mb-4">Our Founding Pillars</h3>
              <p className="text-sm font-light text-slate-600 leading-relaxed font-sans mb-6">
                {historyText}
              </p>

              {/* Render stats if passed in props (for school subpages) */}
              {stats && stats.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200">
                  {stats.map((stat, sIdx) => (
                    <div key={sIdx} className="flex flex-col">
                      <span className="text-2xl font-bold text-accent font-serif">
                        {stat.value}
                        {stat.suffix}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Premium Sliding Tab Bar */}
            <div className="flex p-1.5 rounded-full bg-slate-200/60 backdrop-blur-sm border border-slate-300/30 max-w-md mb-8">
              {(['mission', 'vision', 'values'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors duration-300 rounded-full focus:outline-none ${
                    activeTab === tab ? 'text-primary' : 'text-slate-500 hover:text-primary'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.span
                      layoutId="activeAboutTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-white shadow-md rounded-full"
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>

            {/* Tab content wrapper with slide-fade transition */}
            <div className="min-h-[220px] text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-8 rounded-3xl border border-white"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-accent/10">
                      {tabContents[activeTab].icon}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary">
                      {tabContents[activeTab].title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                    {tabContents[activeTab].text}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tabContents[activeTab].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-500 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}