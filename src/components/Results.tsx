'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Award, GraduationCap, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

interface Topper {
  name: string;
  score: string;
  rank?: string;
  stream: string;
  institution: string;
  destination: string;
  quote: string;
  image: string;
}

interface YearResults {
  [year: string]: {
    summary: {
      passPercentage: string;
      distinctions: string;
      aboveNinety: string;
    };
    toppers: Topper[];
  };
}

const TOPPER_DATA: YearResults = {
  '2025': {
    summary: {
      passPercentage: '100%',
      distinctions: '184 Students',
      aboveNinety: '56 Students',
    },
    toppers: [
      {
        name: 'Aditya Sharma',
        score: '99.4%',
        rank: '1st Rank District',
        stream: 'Science Stream (PCM)',
        institution: 'New Modern Senior Secondary',
        destination: 'IIT Delhi (Computer Science)',
        quote: 'The conceptual clarity and mentorship at Modern Group made all the difference in board and competitive prep.',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Priya Patel',
        score: '98.8%',
        rank: '2nd Rank District',
        stream: 'Commerce Stream',
        institution: 'New Modern Senior Secondary',
        destination: 'SRCC, Delhi University',
        quote: 'Accountancy and Economics teachers guided me through every doubt session, enabling a perfect score.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Sneha Reddy',
        score: '98.2%',
        rank: 'Class X Board Topper',
        stream: 'General Academics',
        institution: 'Modern English School',
        destination: 'Senior Secondary Science Wing',
        quote: 'MES built a strong foundation in core STEM subjects, which helped me secure the school rank.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
      },
    ],
  },
  '2024': {
    summary: {
      passPercentage: '100%',
      distinctions: '172 Students',
      aboveNinety: '48 Students',
    },
    toppers: [
      {
        name: 'Rohan Verma',
        score: '98.6%',
        rank: 'School Topper',
        stream: 'Science Stream (PCB)',
        institution: 'New Modern Senior Secondary',
        destination: 'AIIMS, New Delhi',
        quote: 'Rigorous mock tests and deep conceptual focus helped me excel in both Boards and NEET.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Ananya Gupta',
        score: '97.8%',
        rank: 'Humanities Topper',
        stream: 'Humanities Stream',
        institution: 'Modern Girls College',
        destination: 'Lady Shri Ram College, DU',
        quote: 'MGC provided a supportive, empowering atmosphere that helped me focus and top the humanities division.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Kabir Mehta',
        score: '97.5%',
        rank: 'Commerce Topper',
        stream: 'Commerce Stream',
        institution: 'New Modern Senior Secondary',
        destination: 'St. Stephen\'s College, DU',
        quote: 'The collaborative peer environment and excellent library resources were crucial to my preparation.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      },
    ],
  },
  '2023': {
    summary: {
      passPercentage: '100%',
      distinctions: '165 Students',
      aboveNinety: '42 Students',
    },
    toppers: [
      {
        name: 'Meera Deshmukh',
        score: '99.0%',
        rank: 'State Rank 3',
        stream: 'Science Stream (PCM)',
        institution: 'New Modern Senior Secondary',
        destination: 'BITS Pilani',
        quote: 'Constant feedback and customized worksheets from teachers ensured I never lagged in any topic.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Vikram Malhotra',
        score: '97.6%',
        rank: 'School Topper',
        stream: 'Science Stream (PCM)',
        institution: 'Modern English School',
        destination: 'NSUT, Delhi',
        quote: 'Practical lab exposures and robot building sessions kept my love for Science active throughout school.',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Riya Sen',
        score: '97.2%',
        rank: 'Commerce Topper',
        stream: 'Commerce Stream',
        institution: 'Modern Girls College',
        destination: 'LSR, Delhi University',
        quote: 'MGC taught me to balance academic excellence with leadership and cocurricular activities.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      },
    ],
  },
};

export default function Results() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const years = Object.keys(TOPPER_DATA).sort((a, b) => b.localeCompare(a));
  const activeData = TOPPER_DATA[selectedYear];

  return (
    <section id="results" className="py-24 px-6 md:px-8 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[5%] w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 block"
          >
            Academic Excellence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
          >
            Our Board Toppers & Results
          </motion.h2>
          <p className="text-slate-500 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Celebrating the stellar performances, exceptional pass rates, and elite university placements of our graduates.
          </p>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Year Tabs & Statistics Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Year Switcher Pills */}
          <div className="flex gap-2 p-1.5 bg-white border border-slate-200 shadow-sm rounded-2xl w-full md:w-auto">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`flex-1 md:flex-none px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-accent text-primary shadow-sm'
                    : 'text-slate-500 hover:text-primary hover:bg-slate-100'
                }`}
              >
                {year} Board
              </button>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
            <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm min-w-[100px] text-center">
              <div className="text-accent text-lg font-bold font-mono">{activeData.summary.passPercentage}</div>
              <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1 font-mono">Pass Rate</div>
            </div>
            <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm min-w-[100px] text-center">
              <div className="text-primary text-lg font-bold font-mono">{activeData.summary.distinctions}</div>
              <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1 font-mono">Distinctions</div>
            </div>
            <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm min-w-[100px] text-center">
              <div className="text-primary text-lg font-bold font-mono">{activeData.summary.aboveNinety}</div>
              <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1 font-mono">&gt;90% Marks</div>
            </div>
          </div>
        </div>

        {/* Toppers Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeData.toppers.map((topper, idx) => (
              <TiltCard key={topper.name}>
                <div className="glass-card rounded-[32px] overflow-hidden border border-white/60 shadow-lg flex flex-col h-full bg-white/80 backdrop-blur-xl group transition-all duration-500">
                  
                  {/* Large Student Portrait Banner Container */}
                  <div className="relative aspect-[4/5] sm:h-80 w-full overflow-hidden bg-slate-900">
                    <img
                      src={topper.image}
                      alt={topper.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop';
                      }}
                    />

                    {/* Gradient Overlay for Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent z-10" />

                    {/* Top Trophy / Badge Icon */}
                    <div className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md text-accent">
                      {idx === 0 ? <Trophy className="h-5 w-5" /> : idx === 1 ? <Award className="h-5 w-5" /> : <Star className="h-5 w-5" />}
                    </div>

                    {/* Floating Score Badge */}
                    <div className="absolute top-4 left-4 z-20 px-4 py-2 bg-accent text-primary rounded-2xl shadow-xl font-bold font-mono text-xl border border-white/40">
                      {topper.score}
                    </div>

                    {/* Student Name & Stream over Image Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
                      {topper.rank && (
                        <span className="text-[10px] font-bold text-accent uppercase tracking-widest block font-mono mb-1 bg-black/40 backdrop-blur-sm w-fit px-2.5 py-0.5 rounded-md border border-white/10">
                          {topper.rank}
                        </span>
                      )}
                      <h3 className="font-serif text-2xl font-bold text-white drop-shadow-md">{topper.name}</h3>
                      <p className="text-xs text-slate-300 font-semibold">{topper.stream}</p>
                    </div>
                  </div>

                  {/* Body Content Details */}
                  <div className="p-6 flex flex-col justify-between flex-grow text-left">
                    {/* Student Quote */}
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed italic mb-6">
                      &ldquo;{topper.quote}&rdquo;
                    </p>

                    {/* Footer Placement & Institution */}
                    <div className="border-t border-slate-100 pt-4 mt-auto space-y-2">
                      <div className="text-[11px] font-medium text-slate-400">
                        {topper.institution}
                      </div>

                      {/* College Placement Badge */}
                      <div className="flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-wider font-mono">
                        <GraduationCap className="h-4 w-4 shrink-0" />
                        <span>{topper.destination}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Future Upload CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">
            * Board results are verified with institutional records and CBSE/State board metrics.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
