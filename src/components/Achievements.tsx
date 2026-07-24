'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, GraduationCap, Trophy, Globe, Star } from 'lucide-react';

interface MilestoneItem {
  year: string;
  category: 'Awards' | 'Results' | 'Olympiads' | 'Sports' | 'Rankings';
  title: string;
  description: string;
  icon: any;
  metric?: string;
}

const MILESTONES: MilestoneItem[] = [
  {
    year: '2026',
    category: 'Rankings',
    title: 'National Academic Ranking #1',
    description: 'Honored as the nation\'s premier private school network by the Educational Standards Review Committee, based on academic preparation, student satisfaction, and progressive STEM integration.',
    icon: Star,
    metric: 'Ranked #1',
  },
  {
    year: '2025',
    category: 'Results',
    title: '100% Board Results & Merit Standings',
    description: 'Achieved a clean 100% passing record across all three campuses, with over 45 students recognized in the top 1% national merit bracket for scientific research, mathematics, and literature streams.',
    icon: GraduationCap,
    metric: '100% Score',
  },
  {
    year: '2024',
    category: 'Olympiads',
    title: 'International Olympiad Gold Medals',
    description: 'Student delegates secured three gold medals and one silver medal at the International Mathematical and Olympiad of Sciences in Singapore, displaying exceptional problem-solving and algorithmic design skills.',
    icon: Globe,
    metric: '4 Medals',
  },
  {
    year: '2023',
    category: 'Awards',
    title: 'STEM & Robotics Innovation Award',
    description: 'Presented with the \'Creative Technology Integration\' trophy by the Global EdTech Consortium, recognizing our efforts in setting up high-performance edge AI and hardware robotics sandboxes in secondary divisions.',
    icon: Award,
    metric: 'EdTech Award',
  },
  {
    year: '2022',
    category: 'Sports',
    title: 'National Under-19 Athletics Championship',
    description: 'Our athletics and swimming teams dominated the private school league, clinching 14 individual gold medals and the overall tournament trophy at the National Youth Aquatics & Track Finals.',
    icon: Trophy,
    metric: '14 Gold Medals',
  },
];

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Map progress to scaleY of the timeline indicator
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-8 bg-slate-50 relative overflow-hidden">
      {/* Background soft orbs */}
      <div className="absolute top-[20%] right-[5%] w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

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
            Achievements & Milestones
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
          >
            A Legacy of Excellence & Distinction
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Timeline Track */}
        <div className="relative max-w-4xl mx-auto mt-16 pb-12">
          {/* Timeline Center Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 transform md:-translate-x-[1px]" />
          
          {/* Animated Progress overlay line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-accent transform md:-translate-x-[1px] z-10"
          />

          {/* Timeline Milestones list */}
          <div className="space-y-16">
            {MILESTONES.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className="flex flex-col md:flex-row items-start md:items-center relative"
                >
                  {/* Timeline node node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-[3px] border-white transform -translate-x-[7px] md:-translate-x-2 z-20 shadow-md shadow-accent/50" />

                  {/* Left Column (Desktop) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 md:pr-12 flex ${isEven ? 'md:justify-end' : 'md:order-2 md:justify-start'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.8 }}
                      className="w-full max-w-md glass-card p-6 rounded-3xl border border-white relative group hover:shadow-xl hover:border-accent/40 transition-all duration-500"
                    >
                      {/* Metric Tag badge */}
                      {item.metric && (
                        <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-accent/10 text-[9px] font-bold text-accent tracking-wider uppercase">
                          {item.metric}
                        </span>
                      )}

                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-primary/5 text-accent">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase font-mono">
                          {item.category}
                        </span>
                      </div>

                      <h4 className="font-serif text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h4>

                      <p className="text-xs text-slate-500 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Right Column (Desktop) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-12 flex ${isEven ? 'md:order-2 md:justify-start' : 'md:justify-end'}`}>
                    <div className="flex flex-col">
                      <span className="font-serif text-3xl font-extrabold text-accent leading-none">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1">
                        Group Milestone
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}