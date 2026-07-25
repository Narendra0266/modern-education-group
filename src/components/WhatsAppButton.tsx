'use client';

import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  // Central admissions WhatsApp contact number
  const phoneNumber = '918890968045'; 
  const message = 'Hello! I am interested in admissions at Modern Education Group. Please share more details.';
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
      className="fixed bottom-[88px] right-6 z-50 group pointer-events-auto"
    >
      {/* Tooltip Label */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-primary/95 text-white text-[10px] font-bold tracking-wider uppercase px-4 py-2 rounded-xl shadow-xl pointer-events-none whitespace-nowrap border border-white/10 backdrop-blur-md">
        Chat on WhatsApp
      </span>

      {/* Pulsing Glow Rings */}
      <div className="absolute inset-0 rounded-full bg-[#25d366] opacity-35 animate-ping pointer-events-none scale-105" />

      {/* Main WhatsApp Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.35)] hover:shadow-[0_12px_35px_rgb(37,211,102,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative"
        aria-label="Contact Admissions via WhatsApp"
      >
        <svg
          className="w-7.5 h-7.5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.004 2c-5.518 0-9.996 4.477-9.996 9.996 0 1.764.459 3.49 1.332 5.008L2 22l5.127-1.345a9.92 9.92 0 004.877 1.28c5.519 0 10.003-4.477 10.003-9.997 0-5.518-4.484-9.997-10.003-9.997zm5.586 14.154c-.23.65-1.324 1.19-1.84 1.24-.46.04-.93.08-2.90-.73-2.52-1.03-4.14-3.6-4.26-3.77-.13-.17-1.04-1.39-1.04-2.65s.66-1.88.9-2.14c.24-.26.51-.32.68-.32h.49c.15 0 .36-.06.56.42s.69 1.69.75 1.82c.06.13.1.28.01.45-.09.17-.13.28-.27.44-.13.16-.28.36-.4.49-.13.13-.27.28-.12.54.15.26.68 1.12 1.46 1.82.99.9 1.83 1.18 2.09 1.31.26.13.41.11.56-.06.15-.17.65-.75.82-.95.17-.2.34-.17.58-.09s1.5 1.1 1.76 1.23c.26.13.43.2.49.3.06.11.06.63-.17 1.28z" />
        </svg>
      </a>
    </motion.div>
  );
}
