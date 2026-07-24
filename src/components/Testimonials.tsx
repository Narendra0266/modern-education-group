'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  tag: 'Student' | 'Parent' | 'Alumni';
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Modern Education Group has completely transformed our daughter's attitude toward learning. The instructors in the advanced robotics sandbox didn't just teach her to build; they inspired her to question, test, and write original algorithms. We are incredibly grateful.",
    author: "Sarah Jenkins",
    role: "Parent of Grade 9 Student",
    tag: "Parent",
  },
  {
    quote: "The university placement guidance at Modern was absolutely flawless. From writing my first AP essay to preparing my coding portfolio for review, my counselor was there. I felt steps ahead of my peers when I arrived at Columbia.",
    author: "Marcus Thorne",
    role: "Alumni (Class of 2024), Columbia University",
    tag: "Alumni",
  },
  {
    quote: "What I love most about the Group is the collaborative culture. Teachers don't just lecture at a board; they co-create research projects with you. The data science hub has become my second home, and debating here has given me real confidence.",
    author: "Sophia Chen",
    role: "Student, Grade 12 (Student Council President)",
    tag: "Student",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  }, [handleNext]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      filter: 'blur(4px)',
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  const getAvatarBg = (tag: string) => {
    if (tag === 'Student') return 'from-indigo-500 to-purple-500';
    if (tag === 'Parent') return 'from-amber-500 to-rose-500';
    return 'from-teal-500 to-emerald-500';
  };

  return (
    <section id="testimonials" className="py-24 px-6 md:px-8 bg-slate-50 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 block"
          >
            Testimonials & Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-primary"
          >
            Reflections from our Community
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass-card p-8 md:p-12 rounded-[32px] border border-white shadow-xl relative"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 text-accent/15">
                <Quote className="h-20 w-20 transform rotate-180" />
              </div>

              {/* Tag */}
              <span className="px-3 py-1.5 rounded-full bg-accent/15 text-[10px] font-bold text-accent tracking-widest uppercase mb-6 inline-block font-mono">
                {TESTIMONIALS[current].tag}
              </span>

              {/* Quote */}
              <p className="font-serif text-lg md:text-2xl text-primary font-normal leading-relaxed mb-8 relative z-10 italic text-left">
                &quot;{TESTIMONIALS[current].quote}&quot;
              </p>

              <div className="w-16 h-0.5 bg-accent/30 mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4 text-left">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getAvatarBg(TESTIMONIALS[current].tag)} flex items-center justify-center text-white shadow-md`}>
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-primary">
                    {TESTIMONIALS[current].author}
                  </h4>
                  <p className="text-xs text-slate-500 font-light">
                    {TESTIMONIALS[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                    resetTimer();
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === idx ? 'w-8 bg-accent' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  handlePrev();
                  resetTimer();
                }}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-primary transition-colors cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  handleNext();
                  resetTimer();
                }}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-primary transition-colors cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}