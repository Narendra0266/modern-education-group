'use client';

import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  // Read current language from google translate cookie if present
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]*)/);
    if (match && match[1]) {
      const lang = match[1].split('/')[2];
      if (lang) setCurrentLang(lang);
    }
  }, []);

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang);
    setIsOpen(false);
    
    // The Google Translate widget creates a select dropdown
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = lang;
      // Trigger the change event for Google Translate to pick it up
      select.dispatchEvent(new Event('change'));
    } else {
      // If the widget hasn't loaded yet, we can set the cookie and reload
      document.cookie = `googtrans=/auto/${lang}; path=/`;
      document.cookie = `googtrans=/auto/${lang}; domain=${window.location.hostname}; path=/`;
      window.location.reload();
    }
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' }
  ];

  return (
    <div className="relative z-[100]">
      {/* Hidden google translate element */}
      <div id="google_translate_element" className="hidden"></div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
      >
        <Globe className="w-4 h-4 text-accent" />
        <span className="text-xs font-semibold text-white uppercase tracking-wider">
          {currentLang === 'hi' ? 'HI' : 'EN'}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 py-2 w-32 bg-[#071a35] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  currentLang === lang.code 
                    ? 'text-accent font-semibold bg-white/5' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
