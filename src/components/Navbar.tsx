'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, GraduationCap, ArrowRight } from 'lucide-react';
import { getAssetPath } from '@/lib/image';

interface NavbarProps {
  schoolName?: string;
  isSubpage?: boolean;
  backLink?: string;
}

const INSTITUTIONS = [
  { name: 'Modern English School', href: '/modern-english-school' },
  { name: 'Modern Girls College', href: '/modern-girls-college' },
  { name: 'New Modern Senior Secondary School', href: '/new-modern-senior-secondary' },
];

export default function Navbar({ schoolName = 'Modern Education Group', isSubpage = false, backLink }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Campuses', href: '#campuses' },
    { label: 'Academics', href: '#academics' },
    { label: 'Results', href: '#results' },
    { label: 'Social Feed', href: '#social-feed' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ];

  const logoSrc = getAssetPath(
    schoolName === 'Modern Girls College' ? '/images/college_logo.png' :
    schoolName === 'Modern English School' ? '/images/english_school_logo.png' :
    (schoolName.includes('New Modern') || schoolName.includes('Senior Secondary') || schoolName.includes('NMSS')) ? '/images/nmss_logo.jpg' :
    '/images/logo.png'
  );

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 md:px-8 py-4 ${
          isScrolled ? 'top-2' : 'top-0'
        }`}
      >
        <div
          className={`w-full max-w-7xl flex items-center justify-between px-6 md:px-8 transition-all duration-500 rounded-full ${
            isScrolled
              ? 'py-3 bg-primary/75 border border-white/10 shadow-2xl backdrop-blur-md text-white'
              : 'py-5 bg-transparent text-white'
          }`}
        >
          <Link href={backLink || '/'} className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md border border-white/20 shrink-0 bg-white/10">
              <img
                src={logoSrc}
                alt="Modern Education Group logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-sm sm:text-base tracking-wider uppercase leading-none">
                {schoolName ? schoolName : 'MODERN EDUCATION GROUP'}
              </span>
              <span className="text-[8px] font-medium tracking-widest text-accent uppercase leading-none mt-1">
                {schoolName ? 'Campus Portal' : 'Shaping Tomorrow\'s Leaders'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold tracking-wider uppercase">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-accent transition-colors duration-300 relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Institutions Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-accent transition-colors focus:outline-none uppercase">
                Institutions <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-64 rounded-2xl glass-card-dark p-4 border border-white/10 shadow-2xl flex flex-col gap-2"
                  >
                    {INSTITUTIONS.map((inst) => (
                      <Link
                        key={inst.name}
                        href={inst.href}
                        className="p-3 text-[11px] font-semibold text-slate-300 hover:text-accent hover:bg-white/5 rounded-xl transition-all"
                      >
                        {inst.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#admissions"
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-accent hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-[2px] active:translate-y-0 shadow-lg shadow-accent/20"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href="#admissions"
              className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-accent hover:bg-white transition-all duration-300"
            >
              Apply
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 hover:text-accent transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl lg:hidden flex flex-col justify-center px-8"
          >
            <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-accent/10 blur-[100px] rounded-full animate-pulse-slow pointer-events-none" />

            <nav className="flex flex-col gap-6 text-2xl font-light tracking-wide text-white">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-accent transition-colors py-2 flex items-center justify-between border-b border-white/5"
                >
                  {item.label}
                  <span className="text-xs text-accent font-mono">0{idx + 1}</span>
                </motion.a>
              ))}

              {/* Sub-institutions in Mobile */}
              <div className="flex flex-col gap-2.5 mt-2">
                <span className="text-xs font-bold text-accent tracking-widest uppercase">Campuses</span>
                {INSTITUTIONS.map((inst) => (
                  <Link
                    key={inst.name}
                    href={inst.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {inst.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-4 mt-4">
                
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  href="#admissions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-4 rounded-full text-sm font-semibold uppercase tracking-widest text-primary bg-accent hover:bg-white transition-all duration-300"
                >
                  Apply Now
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}