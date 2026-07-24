"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const ARTICLES = [
  {
    category: "STEM & Innovation",
    date: "July 12, 2026",
    readTime: "4 min read",
    title: "Aegis Robotics Team Wins First Place in State Championship",
    summary: "Our senior robotics team, Aegis-Delta, clinched the gold medal with their adaptive neural-net sorting robot. They now qualify for the national invitational.",
  },
  {
    category: "Academic Updates",
    date: "July 05, 2026",
    readTime: "3 min read",
    title: "Announcing Partnership with Silicon Valley Tech Mentors",
    description: "Principal Dr. Vance announced a new computing mentorship program launching in Fall 2026, pairing grade 11 students with active software designers.",
    summary: "Starting this fall, senior computer science students will participate in bi-weekly design reviews and mentoring projects led by software engineering veterans.",
  },
  {
    category: "Campus Life",
    date: "June 28, 2026",
    readTime: "5 min read",
    title: "Annual Sports Meet: Three School Athletics Records Broken",
    summary: "It was an historic afternoon at the Olympic Sports Complex as students set new school records in the 400m dash, high jump, and 200m individual medley.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } },
};

export default function News() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-bold tracking-widest uppercase"
          >
            News & Announcements
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight font-poppins"
          >
            Stay Informed with Aegis Life
          </motion.h3>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ARTICLES.map((art) => (
            <motion.article
              key={art.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col justify-between bg-white p-8 rounded-3xl border border-primary/5 shadow-md hover:shadow-xl hover:border-primary/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Soft decorative background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {art.category}
                </span>

                <h4 className="text-xl font-bold text-primary leading-snug group-hover:text-primary-light transition-colors font-poppins">
                  {art.title}
                </h4>

                <p className="text-primary/70 text-sm leading-relaxed font-light">
                  {art.summary}
                </p>
              </div>

              {/* Metadata & Read Link */}
              <div className="mt-8 pt-6 border-t border-primary/10 flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-primary/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    {art.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                    {art.readTime}
                  </span>
                </div>
                <button
                  className="text-primary hover:text-accent font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  aria-label={`Read more about ${art.title}`}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}