'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Newspaper, BellDot, ArrowRight } from 'lucide-react';

interface EventItem {
  day: string;
  month: string;
  title: string;
  description: string;
  time: string;
  location: string;
}

interface NewsItem {
  date: string;
  category: string;
  title: string;
  summary: string;
}

interface AnnouncementItem {
  type: string;
  text: string;
  date: string;
}

const EVENTS: EventItem[] = [
  {
    day: '15',
    month: 'AUG',
    title: 'Fall Term & New Student Orientation',
    description: 'Welcoming all incoming primary, middle, and higher secondary students. Explore the campus grounds, meet your expert faculty mentors, and finalize academic schedules.',
    time: '09:00 AM - 01:00 PM',
    location: 'Grand Centennial Auditorium',
  },
  {
    day: '10',
    month: 'SEP',
    title: 'Annual STEM & Robotics Exhibition',
    description: 'An open-campus showcase of student projects, including deep learning demonstrations, automated robotics arenas, and chemistry presentations.',
    time: '10:00 AM - 04:00 PM',
    location: 'AI Hub & Robotics Sandbox',
  },
  {
    day: '22',
    month: 'SEP',
    title: 'Ivy League & College Prep Symposium',
    description: 'Featuring guest lectures from international university placement consultants, discussing portfolio-building and college essay strategies.',
    time: '05:30 PM - 08:00 PM',
    location: 'Centennial Library Lobby',
  },
];

const NEWS: NewsItem[] = [
  {
    date: 'July 12, 2026',
    category: 'STEM Excellence',
    title: 'Modern Education Group Secures Top Position at International Robotics Challenge',
    summary: 'Our secondary student team won the first prize in Singapore for their autonomous search-and-rescue drone project.',
  },
  {
    date: 'June 30, 2026',
    category: 'Academics',
    title: 'Dr. Evelyn Vance Announces New AI Research Fellowship for Faculty',
    summary: 'A funded research initiative enabling our educators to collaborate with global scholars on integrating generative learning tools in classrooms.',
  },
];

const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    type: 'Admissions',
    text: 'Central registrations for Session 2026-27 are now open. Prospective families can schedule private campus tours.',
    date: 'Active',
  },
  {
    type: 'Scholarship',
    text: 'Merit-based scholarship applications for Grade 11 AP and IB Diploma pathways have been released. Deadline: Aug 5.',
    date: 'Active',
  },
  {
    type: 'Board Exams',
    text: 'Modern Group records a 100% board passing score with 45+ students in the top 1% national merit standings.',
    date: 'Archived',
  },
];

export default function Events() {
  return (
    <section id="academics" className="py-24 px-6 md:px-8 bg-background relative overflow-hidden">
      {/* Background soft orbs */}
      <div className="absolute top-[40%] left-[5%] w-80 h-80 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

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
            News & Events
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
          >
            Campus Happenings & Updates
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Upcoming Events */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-5 w-5 text-accent" />
              <h4 className="font-serif text-xl font-bold text-primary">Upcoming Events</h4>
            </div>

            <div className="space-y-6">
              {EVENTS.map((evt, idx) => (
                <motion.div
                  key={evt.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl glass-card border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 relative group"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                  {/* Date Badge */}
                  <div className="flex sm:flex-col items-center justify-center glass-card-dark text-white p-4 rounded-2xl w-full sm:w-24 text-center shrink-0 border border-white/10 shadow-lg">
                    <span className="text-3xl font-extrabold text-accent font-serif leading-none text-glow">
                      {evt.day}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 mt-1.5 font-mono">
                      {evt.month}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 flex-1 text-left relative z-10">
                    <h5 className="font-serif text-lg font-bold text-primary leading-snug group-hover:text-accent transition-colors">
                      {evt.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                      {evt.description}
                    </p>

                    {/* Meta info bar */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-[11px] font-semibold text-slate-400 border-t border-slate-100/50">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-accent" />
                        {evt.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-accent animate-bounce" />
                        {evt.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Latest News & Bulletins */}
          <div className="lg:col-span-5 space-y-10">
            {/* News Feed */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-2">
                <Newspaper className="h-5 w-5 text-accent" />
                <h4 className="font-serif text-xl font-bold text-primary">Latest News</h4>
              </div>

              <div className="space-y-5">
                {NEWS.map((news, i) => (
                  <motion.div
                    key={news.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="p-6 rounded-3xl glass-card border border-white/60 hover:border-accent/40 transition-all duration-300 group text-left relative"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] font-bold text-accent uppercase tracking-wider bg-accent/10 px-2.5 py-0.5 rounded-full font-mono">
                        {news.category}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">{news.date}</span>
                    </div>
                    <h5 className="mt-3 font-serif text-sm font-bold text-primary leading-snug group-hover:text-accent transition-colors duration-200">
                      {news.title}
                    </h5>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed font-light">
                      {news.summary}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Announcements Bulletin */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-2">
                <BellDot className="h-5 w-5 text-accent" />
                <h4 className="font-serif text-xl font-bold text-primary">Bulletins</h4>
              </div>

              <div className="rounded-3xl bg-primary text-white p-6 border border-white/5 shadow-xl space-y-4 text-left">
                {ANNOUNCEMENTS.map((ann, idx) => (
                  <div
                    key={idx}
                    className="pb-4 last:pb-0 last:border-b-0 border-b border-white/10 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[9px] font-bold uppercase tracking-wider text-accent font-mono">
                          {ann.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {ann.text}
                      </p>
                    </div>
                    <span className="text-[9px] font-bold text-white/40 uppercase shrink-0 pt-0.5 font-mono">
                      {ann.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}