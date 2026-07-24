'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import { getAssetPath } from '@/lib/image';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6 md:px-8 relative overflow-hidden border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Gold Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="#" className="flex items-center gap-3 mb-6 group">
                <div className="relative h-14 sm:h-18 w-auto flex items-center justify-center shrink-0">
                  <img
                    src={getAssetPath('/images/logo.png')}
                    alt="Modern Education Group logo"
                    className="h-full w-auto object-contain"
                    onError={(e) => {
                      // Remove image source if missing to display alternative cap
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <span className="font-serif font-bold text-lg tracking-wider uppercase">
                  MODERN<span className="text-accent font-sans font-light">.EDU</span>
                </span>
              </Link>
              <p className="text-slate-400 font-light text-sm leading-relaxed mb-8">
                Pioneering collegiate preparation and progressive STEM development since 1995. Overseeing three world-class educational campuses.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>Sector 15, Global Education Hub, IND</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91 1800 234 5678 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>admissions@moderneducation.group</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-accent text-xs font-bold uppercase tracking-widest mb-6">
                Institutions
              </h4>
              <ul className="space-y-3.5 text-sm text-slate-400 font-sans">
                <li>
                  <Link href="/modern-english-school" className="hover:text-accent transition-colors">English School</Link>
                </li>
                <li>
                  <Link href="/modern-girls-college" className="hover:text-accent transition-colors">Girls College</Link>
                </li>
                <li>
                  <Link href="/new-modern-senior-secondary" className="hover:text-accent transition-colors">Senior Secondary</Link>
                </li>
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">About Pillars</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-accent text-xs font-bold uppercase tracking-widest mb-6">
                Portals
              </h4>
              <ul className="space-y-3.5 text-sm text-slate-400 font-sans">
                <li>
                  <a href="#portal" className="hover:text-accent transition-colors">Student Portal</a>
                </li>
                <li>
                  <a href="#erp" className="hover:text-accent transition-colors">ERP Login</a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-accent transition-colors">Careers at MEG</a>
                </li>
                <li>
                  <a href="#admissions" className="hover:text-accent transition-colors">Admissions Open</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Newsletter & Google Map */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8 text-left">
            {/* Newsletter */}
            <div>
              <h4 className="text-accent text-xs font-bold uppercase tracking-widest mb-4">
                Newsletter
              </h4>
              <p className="text-slate-400 text-xs font-light mb-4 leading-relaxed font-sans">
                Subscribe to our academic briefs and community notifications.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 relative">
                <input
                  type="email"
                  placeholder="Enter institutional email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 pr-12 focus:outline-none focus:border-accent text-xs"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-8 h-8 rounded-full bg-accent hover:bg-white text-primary flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
              
              {subscribed && (
                <p className="text-accent text-xs font-medium mt-2">
                  Subscription successful! Welcome to MEG.
                </p>
              )}
            </div>

            {/* Google Map Embedded Frame */}
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.27218698188!2d77.10846244435889!3d28.63227918804791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MEG Campus Location Map"
              ></iframe>
              <div className="absolute inset-0 bg-primary/20 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            &copy; {currentYear} Modern Education Group. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: FacebookIcon, label: 'Facebook', href: '#' },
              { icon: TwitterIcon, label: 'Twitter', href: '#' },
              { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/moderneducationgroupkct?igsh=MTY5Znphcmc2Y2g1Zw==' },
              { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
              { icon: YoutubeIcon, label: 'YouTube', href: 'https://youtube.com/@aashishkumawat4332?si=RdjrofaPsYSyKQrN' },
            ].map((soc) => {
              const Icon = soc.icon;
              return (
                <a
                  key={soc.label}
                  href={soc.href}
                  target={soc.href !== '#' ? '_blank' : undefined}
                  rel={soc.href !== '#' ? 'noopener noreferrer' : undefined}
                  aria-label={`Follow us on ${soc.label}`}
                  className="p-2 rounded-full bg-white/5 hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}