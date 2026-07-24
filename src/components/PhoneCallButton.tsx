'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function PhoneCallButton() {
  const phoneNumber = '+918107212072'; // Central admissions helpline number

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.6 }}
      className="fixed bottom-6 right-6 z-50 group pointer-events-auto"
    >
      {/* Tooltip Label */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-primary/95 text-white text-[10px] font-bold tracking-wider uppercase px-4 py-2 rounded-xl shadow-xl pointer-events-none whitespace-nowrap border border-white/10 backdrop-blur-md">
        Call Admissions
      </span>

      {/* Pulsing Glow Rings */}
      <div className="absolute inset-0 rounded-full bg-accent/25 opacity-35 animate-ping pointer-events-none scale-105" />

      {/* Main Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="w-14 h-14 bg-accent hover:bg-white text-primary hover:text-accent flex items-center justify-center rounded-full shadow-[0_8px_30px_rgba(212,175,55,0.25)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative border border-white/10"
        aria-label="Call Admissions Helpdesk"
      >
        <Phone className="h-6 w-6 fill-current" />
      </a>
    </motion.div>
  );
}
