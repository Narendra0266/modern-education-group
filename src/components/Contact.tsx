'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';


const OFFICIAL_MAPS_LINK = 'https://maps.app.goo.gl/riKX7bWLQNZ6zyDKA?g_st=aw';

const LOCATIONS = [
  {
    name: 'Modern English School',
    shortName: 'MES Primary',
    address: 'Modern Education Group Campus, Main Road',
    phone: '+91 1800 234 5678',
    email: 'mes.primary@moderneducation.group',
    directMapUrl: OFFICIAL_MAPS_LINK,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9715105272635!2d77.01802377549448!3d28.450257375765796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d678e7275f%3A0xe54e60ea9b43e8d!2sModern%20Group%20of%20Education!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin',
  },
  {
    name: 'Modern Girls College',
    shortName: 'MGC College',
    address: 'Modern Education Group Campus Block B',
    phone: '+91 1800 234 5678',
    email: 'mgc.college@moderneducation.group',
    directMapUrl: OFFICIAL_MAPS_LINK,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.251458999818!2d77.48512137549524!3d28.471962375754972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1daf60e8163%3A0x6d97c5553e20ec42!2sKnowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000002!5m2!1sen!2sin',
  },
  {
    name: 'New Modern Senior Secondary School',
    shortName: 'NMSS Senior',
    address: 'Modern Education Group Senior Campus Block C',
    phone: '+91 1800 234 5678',
    email: 'nmss.senior@moderneducation.group',
    directMapUrl: OFFICIAL_MAPS_LINK,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.943187889818!2d77.06212137550005!3d28.583462375691072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1daf60e163%3A0x6d97c5553e20ec42!2sSector%208%2C%20Dwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000003!5m2!1sen!2sin',
  },
];

export default function Contact() {
  const [activeSchoolIdx, setActiveSchoolIdx] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', grade: '', message: '' });
    }, 600);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-8 bg-background relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

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
            Contact Admissions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
          >
            Connect With Our Campus
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-[32px] border border-white/60 shadow-lg h-full flex flex-col justify-between relative">
              <div className="absolute -inset-px bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-[32px] pointer-events-none" />
              
              <div className="relative z-10 text-left">
                <h4 className="font-serif text-xl font-bold text-primary mb-6">
                  Admission & General Inquiry
                </h4>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4 h-full"
                  >
                    <CheckCircle2 className="h-16 w-16 text-emerald-500" />
                    <h5 className="font-serif text-xl font-bold text-primary">Inquiry Logged</h5>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-md font-light leading-relaxed">
                      Thank you for your interest in Modern Education Group. An admissions advisor will review your profile and connect within 24 business hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 bg-primary hover:bg-white border border-transparent hover:border-slate-200 text-white hover:text-primary font-semibold text-xs px-6 py-3 rounded-full uppercase tracking-wider transition-all duration-300 cursor-pointer"
                    >
                      New Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono"
                        >
                          Student Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-100/50 border border-slate-200 text-primary placeholder:text-slate-400 focus:outline-none focus:border-accent text-xs"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-100/50 border border-slate-200 text-primary placeholder:text-slate-400 focus:outline-none focus:border-accent text-xs"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono"
                        >
                          Contact Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-100/50 border border-slate-200 text-primary placeholder:text-slate-400 focus:outline-none focus:border-accent text-xs"
                          placeholder="+91 99999 99999"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="grade"
                          className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono"
                        >
                          Grade / Stream Applied
                        </label>
                        <select
                          id="grade"
                          name="grade"
                          required
                          value={formData.grade}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-100/50 border border-slate-200 text-primary focus:outline-none focus:border-accent text-xs"
                        >
                          <option value="">Select Stream</option>
                          <option value="primary">Primary (Grade 1 - 5)</option>
                          <option value="middle">Middle School (Grade 6 - 8)</option>
                          <option value="secondary">Secondary (Grade 9 - 10)</option>
                          <option value="senior">Senior Secondary (Grade 11 - 12)</option>
                          <option value="college">Higher Collegiate Education</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono"
                      >
                        Additional Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-100/50 border border-slate-200 text-primary placeholder:text-slate-400 focus:outline-none focus:border-accent text-xs resize-none"
                        placeholder="Detail any academic requirements or inquiries..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-accent hover:bg-primary text-primary hover:text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-accent/20 cursor-pointer"
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-8 rounded-[32px] border border-white/60 shadow-lg text-left">
              <h4 className="font-serif text-xl font-bold text-primary mb-6">Our Locations</h4>

              {/* Location Tabs Selector */}
              <div className="flex gap-1.5 p-1 bg-slate-100/80 rounded-xl mb-6">
                {LOCATIONS.map((loc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSchoolIdx(idx)}
                    className={`flex-1 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                      activeSchoolIdx === idx
                        ? 'bg-accent text-primary shadow-sm'
                        : 'text-slate-500 hover:text-primary hover:bg-slate-200/50'
                    }`}
                  >
                    {loc.shortName}
                  </button>
                ))}
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 rounded-2xl bg-accent/10 text-accent h-fit">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">
                      {LOCATIONS[activeSchoolIdx].shortName} Address
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {LOCATIONS[activeSchoolIdx].address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-2xl bg-accent/10 text-accent h-fit">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">
                      Campus Phone
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {LOCATIONS[activeSchoolIdx].phone}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-2xl bg-accent/10 text-accent h-fit">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">
                      Campus Mail
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {LOCATIONS[activeSchoolIdx].email}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-2xl bg-accent/10 text-accent h-fit">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">
                      Office Timings
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      Monday - Friday: 08:30 AM - 04:30 PM <br />
                      Saturday: 09:00 AM - 01:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map Widget */}
            <div className="glass-card rounded-[32px] overflow-hidden border border-white/60 shadow-lg flex-1 min-h-[220px] relative group">
              <iframe
                src={LOCATIONS[activeSchoolIdx].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3) contrast(1.05)', minHeight: '220px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Frame"
              ></iframe>
              <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Direct Maps Action Pill */}
              <a
                href={OFFICIAL_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-20 px-4 py-2 rounded-full bg-primary text-white font-bold text-xs shadow-xl border border-white/20 hover:bg-accent hover:text-primary transition-all flex items-center gap-1.5"
              >
                <span>Get Directions on Google Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}