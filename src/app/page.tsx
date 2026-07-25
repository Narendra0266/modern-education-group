'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Achievements from '@/components/Achievements';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import Admission from '@/components/Admission';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Results from '@/components/Results';
import SocialFeed from '@/components/SocialFeed';
import MouseGlow from '@/components/MouseGlow';
import TiltCard from '@/components/TiltCard';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, School, CheckCircle2 } from 'lucide-react';

import { getAssetPath } from '@/lib/image';

const INSTITUTIONS = [
  {
    name: 'Modern English School',
    tagline: 'Primary & Middle School (Co-ed)',
    focus: 'Experiential learning, logical reasoning, computer coding, and creative arts.',
    features: ['Grades 1 - 8 (Ages 6 - 14)', 'STEM Coding Playgrounds', 'Active Sports & Swimming'],
    link: '/modern-english-school',
    icon: BookOpen,
    logo: getAssetPath('/images/english_school_logo.png'),
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop',
    fallbackImage: getAssetPath('/images/science_lab.png'),
  },
  {
    name: 'Modern Girls College',
    tagline: 'Secondary & Higher Education (Girls Only)',
    focus: 'Elite secondary prep, women leadership programs, sciences, and secure residency.',
    features: ['Grades 9 - College (Ages 12 - 21)', 'Leadership Laboratories', 'AC Boarding Accommodations'],
    link: '/modern-girls-college',
    icon: GraduationCap,
    logo: getAssetPath('/images/college_logo.png'),
    image: getAssetPath('/images/school_front.png'),
    fallbackImage: getAssetPath('/images/principal.png'),
  },
  {
    name: 'New Modern Senior Secondary School',
    tagline: 'Senior Prep & Higher Secondary (Co-ed)',
    focus: 'Intensive Science, Commerce, and Humanities with collegiate placement counseling.',
    features: ['Grades 11 - 12 (Ages 14 - 18)', 'Advanced Placement (AP) Tracks', 'AI & Robotics Engineering'],
    link: '/new-modern-senior-secondary',
    icon: School,
    logo: getAssetPath('/images/nmss_logo.png'),
    image: getAssetPath('/images/school_assembly.png'),
    fallbackImage: getAssetPath('/images/robotics_lab.png'),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-500">
      <MouseGlow />
      {/* Floating glass navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Full-screen Cinematic Hero */}
        <Hero
          title="Building Tomorrow's Leaders"
          motto="Empowering students through innovation, excellence, discipline and holistic education."
          bgImage={getAssetPath('/images/campus.jpg')}
        />

        {/* Institutions Section */}
        <section id="campuses" className="py-24 px-6 md:px-8 bg-background relative overflow-hidden">
          <div className="absolute top-[20%] left-[5%] w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-accent text-xs font-semibold tracking-widest uppercase block"
              >
                Our Institutions
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
              >
                Centers of Educational Distinction
              </motion.h2>
              <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
            </div>

            {/* Institution Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {INSTITUTIONS.map((inst, idx) => {
                const Icon = inst.icon;
                return (
                  <TiltCard
                    key={inst.name}
                    className="h-full rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/5 transition-shadow duration-500 border border-white/40"
                    glowColor="rgba(212, 175, 55, 0.14)"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.8, delay: idx * 0.15 }}
                      className="glass-card rounded-[32px] overflow-hidden group transition-all duration-500 flex flex-col h-full text-left bg-white/70 backdrop-blur-xl border border-transparent"
                    >
                      {/* Image Container with Zoom */}
                      <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40" />
                        <img
                          src={inst.image}
                          alt={inst.name}
                          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = inst.fallbackImage;
                          }}
                        />
                      </div>

                      {/* Content Details */}
                      <div className="p-8 flex flex-col flex-grow relative">
                        <div className="absolute -inset-px bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[32px] pointer-events-none" />

                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-1.5 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md transition-all duration-500 h-12 w-12 flex items-center justify-center shrink-0">
                            {inst.logo ? (
                              <img src={inst.logo} alt={`${inst.name} logo`} className="w-full h-full object-contain" />
                            ) : (
                              <Icon className="h-6 w-6 text-accent" />
                            )}
                          </div>
                          <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase font-mono">
                            {inst.tagline}
                          </span>
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                          {inst.name}
                        </h3>

                        <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 flex-grow">
                          {inst.focus}
                        </p>

                        {/* Feature Bullet Points */}
                        <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                          {inst.features.map((feat) => (
                            <div key={feat} className="flex items-center space-x-2.5">
                              <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                              <span className="text-xs text-slate-600 font-medium font-sans">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Explore Button */}
                        <Link
                          href={inst.link}
                          className="group/btn flex items-center justify-center space-x-2 w-full bg-slate-50 hover:bg-accent text-primary hover:text-primary font-bold text-xs py-4 rounded-2xl border border-slate-200 hover:border-accent shadow-sm hover:shadow-md transition-all duration-300 uppercase tracking-widest font-sans"
                        >
                          <span>Explore Campus</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <About 
          imageSrc={getAssetPath('/images/chairman.png')} 
          chairmanName="Dr. Devilal Kumawat"
        />

        {/* Why Choose Us (Bento Grid) */}
        <WhyChooseUs />

        {/* Achievements Timeline */}
        <Achievements />

        {/* Academic Board Toppers */}
        <Results />

        {/* Campus Gallery */}
        <Gallery />

        {/* Live Instagram & YouTube Feeds */}
        <SocialFeed />

        {/* Events & Happenings */}
        <Events />

        {/* Sliding Testimonials */}
        <Testimonials />

        {/* Admissions Steps */}
        <Admission />

        {/* Map & Form Contact Details */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
