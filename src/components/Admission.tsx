'use client';

import { motion } from 'framer-motion';
import { Send, MapPin, ClipboardList, MailOpen, FileCheck, ArrowRight, Download } from 'lucide-react';

const ADMISSION_STEPS = [
  {
    step: '01',
    icon: Send,
    title: 'Inquiry & Prospectus',
    description: 'Submit a simple online inquiry form or request our complete digital prospectus pack to learn about program timelines, streams, and fee structures.',
  },
  {
    step: '02',
    icon: MapPin,
    title: 'Campus Visit & Interview',
    description: 'Schedule a private campus tour guided by our student ambassadors, or register for our academic seminars to interact with deans and faculty.',
  },
  {
    step: '03',
    icon: ClipboardList,
    title: 'Diagnostic Assessment',
    description: 'Prospective students participate in age-appropriate diagnostics in mathematics, logical reasoning, and English literacy to evaluate placement fit.',
  },
  {
    step: '04',
    icon: MailOpen,
    title: 'Official Decision & Welcome Pack',
    description: 'Following a holistic review of academic records and diagnostic results, successful applicants receive an official invitation letter and course options guide.',
  },
  {
    step: '05',
    icon: FileCheck,
    title: 'Enrollment Finalization',
    description: 'Secure your seat by submitting the enrollment deposit, previous school transcripts, medical clearance documents, and parent agreements.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90 } },
};

export default function Admission() {
  const handleDownloadBrochure = () => {
    alert('Downloading Modern Education Group Brochure (Session 2026-27)...');
  };

  return (
    <section id="admissions" className="py-24 px-6 md:px-8 bg-slate-50 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[30%] left-[5%] w-80 h-80 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

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
            Admissions Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
          >
            Your Path to Academic Excellence
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto mt-16 mb-20">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-slate-200" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {ADMISSION_STEPS.map((stepData) => {
              const Icon = stepData.icon;
              return (
                <motion.div
                  key={stepData.step}
                  variants={stepVariants}
                  className="flex gap-6 relative group text-left"
                >
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white border border-white/10 flex items-center justify-center font-bold text-sm shrink-0 z-10 shadow-lg group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                    {stepData.step}
                  </div>

                  {/* Step Card Content */}
                  <div className="glass-card p-6 rounded-3xl border border-white flex-1 hover:shadow-lg transition-all duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {stepData.title}
                      </h4>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                      {stepData.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-primary font-semibold tracking-wider text-xs uppercase flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-accent/20"
          >
            Apply Online Now
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={handleDownloadBrochure}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold tracking-wider text-xs uppercase flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            Download Prospectus
            <Download className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}