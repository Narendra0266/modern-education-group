'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import {
  Cpu,
  Tv,
  FlaskConical,
  Laptop,
  Activity,
  Library as LibraryIcon,
  Bus,
  Music,
  Palette,
  Home,
  Bot,
  Sparkles,
} from 'lucide-react';

interface FacilityItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  className: string; // Grid spans
  highlight?: boolean;
}

export default function WhyChooseUs() {
  const facilities: FacilityItem[] = [
    {
      title: 'AI Learning Hub',
      description: 'Equipped with NVIDIA tensor-core clusters for training machine learning algorithms and edge data sciences, preparing high schoolers for the future tech stack.',
      icon: <Cpu className="h-6 w-6 text-accent" />,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop',
      className: 'col-span-12 md:col-span-8',
      highlight: true,
    },
    {
      title: 'Smart Classrooms',
      description: 'Immersive learning environments utilizing widescreen projection systems and tactile digital panels.',
      icon: <Tv className="h-6 w-6 text-accent" />,
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=400&auto=format&fit=crop',
      className: 'col-span-12 sm:col-span-6 md:col-span-4',
    },
    {
      title: 'Science Laboratories',
      description: 'Comprehensive molecular research spaces with digital sensors and micro-experimentation modules.',
      icon: <FlaskConical className="h-6 w-6 text-accent" />,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop',
      className: 'col-span-12 sm:col-span-6 md:col-span-4',
    },
    {
      title: 'Digital Learning Labs',
      description: 'High-speed workstations loaded with advanced creative software suites and analytical programming tools.',
      icon: <Laptop className="h-6 w-6 text-accent" />,
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=400&auto=format&fit=crop',
      className: 'col-span-12 sm:col-span-6 md:col-span-4',
    },
    {
      title: 'Robotics Research Wing',
      description: 'Engineering sandboxes featuring automated micro-controllers, drone testing cages, and modular Lego sensors.',
      icon: <Bot className="h-6 w-6 text-accent" />,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop',
      className: 'col-span-12 sm:col-span-6 md:col-span-4',
    },
    {
      title: 'Centennial Library',
      description: 'Architectural masterpiece housing over 50,500 cataloged prints, research papers, and digital archives with glass study cabins.',
      icon: <LibraryIcon className="h-6 w-6 text-accent" />,
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400&auto=format&fit=crop',
      className: 'col-span-12 sm:col-span-6 md:col-span-5',
    },
    {
      title: 'Olympic Sports Complex',
      description: 'Professional tracks, temperature-regulated swimming arenas, and multi-game courts mentored by national-level coaches.',
      icon: <Activity className="h-6 w-6 text-accent" />,
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=400&auto=format&fit=crop',
      className: 'col-span-12 sm:col-span-6 md:col-span-7',
    },
    {
      title: 'School Transport Fleet',
      description: 'GPS-synchronized buses with onboard safety assistants, real-time tracking, and automated routing dashboards.',
      icon: <Bus className="h-6 w-6 text-accent" />,
      image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=400&auto=format&fit=crop',
      className: 'col-span-12 sm:col-span-6 md:col-span-4',
    },
    {
      title: 'Luxury Boarding Hostel',
      description: 'Climate-controlled residential boarding chambers featuring personal study desks, secure digital entry, and study proctors.',
      icon: <Home className="h-6 w-6 text-accent" />,
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=400&auto=format&fit=crop',
      className: 'col-span-12 sm:col-span-6 md:col-span-4',
    },
    {
      title: 'Music Conservatory',
      description: 'Acoustically treated training cabins with acoustic grand pianos, violin tracks, and digital synthesizers.',
      icon: <Music className="h-6 w-6 text-accent" />,
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop',
      className: 'col-span-12 sm:col-span-6 md:col-span-4',
    },
    {
      title: 'Creative Arts Studio',
      description: 'Sunlit studios housing canvas easels, sculpture pottery wheels, and interactive digital graphics tablet centers for visual expressions.',
      icon: <Palette className="h-6 w-6 text-accent" />,
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=400&auto=format&fit=crop',
      className: 'col-span-12 md:col-span-12',
    },
  ];

  return (
    <section id="facilities" className="py-24 px-6 md:px-8 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
          >
            Pioneering the Future of Education
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[250px]">
          {facilities.map((item, index) => (
            <TiltCard
              key={index}
              className={`${item.className} rounded-[28px] overflow-hidden border border-white/80 shadow-md hover:shadow-xl hover:shadow-primary/5 transition-all duration-500`}
              glowColor="rgba(212, 175, 55, 0.12)"
              maxTilt={4}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`glass-card overflow-hidden group relative flex flex-col justify-end p-8 h-full w-full ${
                  item.highlight ? 'bg-primary/95 text-white border-accent/30' : ''
                }`}
              >
                {/* Background Image that fades in on hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Grid content */}
                <div className="relative z-10 transition-all duration-500 transform group-hover:-translate-y-1">
                  {/* Icon wrapper */}
                  <div className={`p-3 rounded-2xl w-fit mb-4 transition-all duration-500 ${
                    item.highlight ? 'bg-accent/15 border border-accent/20 text-accent' : 'bg-primary/5 text-primary'
                  } group-hover:bg-accent/20 group-hover:scale-110`}>
                    {item.icon}
                  </div>

                  <h3 className={`font-serif text-xl font-bold mb-2 transition-colors duration-300 ${
                    item.highlight ? 'text-accent' : 'text-primary group-hover:text-accent'
                  }`}>
                    {item.title}
                    {item.highlight && <Sparkles className="h-4 w-4 text-accent animate-pulse inline-block ml-2" />}
                  </h3>

                  <p className={`text-xs font-light leading-relaxed transition-colors duration-300 ${
                    item.highlight ? 'text-slate-300' : 'text-slate-500 group-hover:text-slate-300'
                  }`}>
                    {item.description}
                  </p>
                </div>

                <div className="absolute inset-0 border border-white/0 group-hover:border-accent/40 rounded-[28px] pointer-events-none transition-all duration-500 z-20" />
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}