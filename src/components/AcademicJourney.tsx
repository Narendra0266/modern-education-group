"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, GraduationCap, School, ShieldAlert, Cpu, Sparkles } from "lucide-react";

interface TimelineStep {
  id: string;
  stage: string;
  age: string;
  institution: string;
  description: string;
  icon: any;
  color: string;
  focusItems: string[];
}

const JOURNEY_STEPS: TimelineStep[] = [
  {
    id: "primary",
    stage: "Primary Years",
    age: "Ages 6 - 11",
    institution: "Modern English School",
    description: "Laying strong foundations in language fluency, analytical reading, core arithmetic, and early STEM curiosity.",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
    focusItems: ["Bilingual Literacy", "Experiential Mathematics", "Lego Coding Blocks", "Swimming & Athletics"],
  },
  {
    id: "middle",
    stage: "Middle Years",
    age: "Ages 11 - 14",
    institution: "Modern English School",
    description: "Guiding intellectual exploration through integrated sciences, computer logic, fine arts, and collaborative projects.",
    icon: Sparkles,
    color: "from-indigo-500 to-primary",
    focusItems: ["Introductory Physics & Chemistry", "Structured Robotics (Mindstorms)", "Creative Writing", "Inter-school Athletics"],
  },
  {
    id: "secondary",
    stage: "Secondary School",
    age: "Ages 14 - 16",
    institution: "Senior Secondary / Girls College",
    description: "Preparing for stream selections with rigorous board curricula, computer science basics, and individual projects.",
    icon: School,
    color: "from-violet-500 to-violet-700",
    focusItems: ["Advanced Algebraic Math", "Computer Programming", "Scientific Project Design", "Debate & Communication"],
  },
  {
    id: "senior",
    stage: "Senior Secondary",
    age: "Ages 16 - 18",
    institution: "New Modern Senior Secondary School",
    description: "Intensive preparation in Science, Commerce, and Humanities. Dedicated counseling for Ivy League and global placements.",
    icon: Cpu,
    color: "from-amber-500 to-accent",
    focusItems: ["Advanced Placement (AP)", "AI & Neural Net Labs", "Accounting & Economics", "University Prep Counseling"],
  },
  {
    id: "college",
    stage: "College & Leadership",
    age: "Ages 18+",
    institution: "Modern Girls College",
    description: "Higher education offering humanities, STEM specialties, leadership training, and secure campus boardings.",
    icon: GraduationCap,
    color: "from-rose-500 to-pink-600",
    focusItems: ["Undergraduate Degree Prep", "Global Exchange Internships", "Governance Laboratories", "Resident Care & Mentorship"],
  },
];

export default function AcademicJourney() {
  const [activeStep, setActiveStep] = useState<string>("primary");
  const currentStep = JOURNEY_STEPS.find((s) => s.id === activeStep) || JOURNEY_STEPS[0];
  const ActiveIcon = currentStep.icon;

  return (
    <section id="journey" className="py-32 bg-white dark:bg-[#090D16] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-accent text-xs font-bold tracking-widest uppercase">
            Educational Path
          </h2>
          <h3 className="mt-3 text-3xl sm:text-4xl md:text-4.5xl font-bold text-black dark:text-white tracking-tight font-poppins">
            The Academic Journey
          </h3>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 font-light text-base">
            From early primary exploration to college leadership, explore how we scaffold student success at every phase.
          </p>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-5 rounded-full" />
        </div>

        {/* Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Timeline Navigation Selector */}
          <div className="lg:col-span-5 space-y-3.5">
            {JOURNEY_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = step.id === activeStep;

              return (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  whileHover={{ x: isActive ? 0 : 3 }}
                  className={`w-full text-left flex items-start space-x-4 p-4.5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-neutral-100 dark:bg-slate-900/40 border-neutral-200/50 dark:border-white/5 shadow-sm"
                      : "bg-transparent border-transparent hover:bg-neutral-50/50 dark:hover:bg-slate-900/10"
                  }`}
                >
                  {/* Step Number and Icon badge */}
                  <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                    isActive
                      ? "bg-black dark:bg-white text-white dark:text-black"
                      : "bg-neutral-100 dark:bg-slate-800 text-neutral-500 dark:text-neutral-450"
                  }`}>
                    <StepIcon className="h-4.5 w-4.5" />
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-[9px] font-semibold text-accent uppercase tracking-widest leading-none">
                        Step 0{idx + 1}
                      </span>
                      <span className="text-[10px] text-neutral-300 dark:text-neutral-700">•</span>
                      <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-550">
                        {step.age}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-black dark:text-white font-poppins">
                      {step.stage}
                    </h4>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Timeline Details Showcase Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-50 dark:bg-slate-900/40 p-8 md:p-10 rounded-[28px] border border-neutral-200/50 dark:border-white/5 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[420px] backdrop-blur-md"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

                <div className="space-y-6">
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black">
                        <ActiveIcon className="h-4.5 w-4.5" />
                      </div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest font-poppins">
                        {currentStep.institution}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-neutral-450 dark:text-neutral-500">
                      {currentStep.age}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h4 className="text-xl md:text-2xl font-bold text-black dark:text-white font-poppins">
                      {currentStep.stage}
                    </h4>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed font-light font-inter">
                      {currentStep.description}
                    </p>
                  </div>

                  {/* Focus points grid */}
                  <div className="space-y-3.5 pt-5 border-t border-neutral-200/50 dark:border-slate-800">
                    <h5 className="text-[10px] font-bold text-black dark:text-white uppercase tracking-widest">
                      Key Curriculum Focus:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentStep.focusItems.map((focus) => (
                        <div key={focus} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                            {focus}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Institution Link CTA */}
                <div className="mt-8 pt-5 border-t border-neutral-200/50 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-medium">
                    Accredited Path by Modern Education Group
                  </span>
                  <a
                    href="#admissions"
                    className="text-xs font-semibold text-black dark:text-white hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-1 uppercase tracking-wider"
                  >
                    View Curriculum
                    <span className="text-sm font-light">→</span>
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}