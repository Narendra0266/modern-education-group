"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, BookOpen, Compass, Award, CheckCircle } from "lucide-react";

const PROGRAMS = [
  {
    id: "primary",
    title: "Primary School",
    subtitle: "Grades 1 - 5 (Ages 6 - 11)",
    description: "Our primary program emphasizes experiential learning, curiosity, and fundamental skill development in math, reading, and scientific inquiry, mixed with interactive art and swimming.",
    curriculum: "Inquiry-based Primary Years framework",
    focus: ["Foundational Numeracy & Literacy", "STEM Explorer Playgrounds", "Art, Music & Performing Arts", "Social-Emotional Development"],
    electives: "Introduction to Computational Thinking, Modern Languages (French/Spanish)",
  },
  {
    id: "middle",
    title: "Middle School",
    subtitle: "Grades 6 - 8 (Ages 11 - 14)",
    description: "Designed for adolescent growth, the middle school curriculum builds critical thinking, research skills, and collaborative design projects across the sciences, history, and literature.",
    curriculum: "Integrated Middle Years curriculum",
    focus: ["Critical Inquiry & Research", "Robotics & Modular Electronics", "Creative & Expository Writing", "Competitive Athletics"],
    electives: "Introduction to Python, Speech & Debate, Global Citizenship",
  },
  {
    id: "secondary",
    title: "Secondary School",
    subtitle: "Grades 9 - 10 (Ages 14 - 16)",
    description: "A challenging curriculum focused on rigorous analytical skills, preparing students for board assessments and offering advanced coursework in high-level sciences and humanities.",
    curriculum: "Advanced Secondary Certificate preparation",
    focus: ["Advanced Mathematics & Sciences", "Computer Science & Logic Systems", "Civic Leadership & Ethics", "Advanced Literature Analysis"],
    electives: "Game Development, Creative Writing, AP Chemistry (Prep), Model United Nations",
  },
  {
    id: "higher",
    title: "Higher Secondary",
    subtitle: "Grades 11 - 12 (Ages 16 - 18)",
    description: "The peak of academic preparation, tailored for Ivy League and elite international university entry with intensive AP, IB coursework, and individual research capstones.",
    curriculum: "Advanced Placement (AP) & IB Diploma tracks",
    focus: ["College-Level Core Specializations", "Individual Capstone Research", "University Placement Counseling", "Global Ethics & Philosophy"],
    electives: "Machine Learning Foundations, Macroeconomics, organic Chemistry, Creative Production Studio",
  },
];

export default function Academics() {
  const [activeTab, setActiveTab] = useState("primary");
  const activeProgram = PROGRAMS.find((p) => p.id === activeTab)!;

  return (
    <section id="academics" className="py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-bold tracking-widest uppercase"
          >
            Academic Programs
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight font-poppins"
          >
            A Roadmap for Academic Excellence
          </motion.h3>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto p-1 bg-white/60 border border-primary/5 rounded-2xl md:rounded-full">
          {PROGRAMS.map((program) => (
            <button
              key={program.id}
              onClick={() => setActiveTab(program.id)}
              className={`relative px-6 py-3 rounded-xl md:rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === program.id
                  ? "text-white"
                  : "text-primary hover:text-accent"
              }`}
            >
              {activeTab === program.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-primary rounded-xl md:rounded-full shadow-lg z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                {program.title}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 border border-primary/5 shadow-2xl min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Left Column: Description */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-accent">
                    {activeProgram.subtitle}
                  </span>
                  <h4 className="text-3xl font-extrabold text-primary mt-2 font-poppins">
                    {activeProgram.title} Curriculum
                  </h4>
                </div>

                <p className="text-primary/70 leading-relaxed text-base font-light">
                  {activeProgram.description}
                </p>

                <div className="flex items-center space-x-3 bg-secondary p-4 rounded-2xl">
                  <BookOpen className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm font-semibold text-primary">
                    Core Model: <span className="font-medium text-primary/80">{activeProgram.curriculum}</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                    <Compass className="h-4 w-4 text-accent" /> Key Academic Focus
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {activeProgram.focus.map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-sm text-primary/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Details */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-secondary p-8 rounded-3xl border border-primary/5">
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-bold text-primary font-poppins flex items-center gap-2">
                      <Award className="h-5 w-5 text-accent" /> Specializations & Electives
                    </h5>
                    <p className="mt-3 text-sm text-primary/70 leading-relaxed">
                      Beyond core requirements, students are encouraged to select specialized tracks starting in middle school to cultivate early research interests.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-primary/5 shadow-sm">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
                      Featured Subjects
                    </span>
                    <p className="text-sm text-primary font-medium leading-relaxed">
                      {activeProgram.electives}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary/10">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-2xl shadow-md transition-all duration-200"
                  >
                    Request Brochure
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}