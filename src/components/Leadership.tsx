"use client";

import { motion } from "framer-motion";
import { Mail, GraduationCap } from "lucide-react";

interface Leader {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
}

const LEADERS: Leader[] = [
  {
    name: "Dr. Arthur Pendelton",
    role: "Chairman, Board of Directors",
    credentials: "Ph.D. in Education (Harvard University)",
    bio: "Dr. Pendelton has dedicated over 35 years to international academic reform and curriculum development, leading the vision of the Modern Education Group since 2005.",
    image: "/images/principal.png", // Reusing principal or campus generated images since they are highly stylized
    email: "chairman@moderneducation.org",
    linkedin: "#",
  },
  {
    name: "Mrs. Katherine Thorne",
    role: "Managing Director",
    credentials: "M.S. in Management (Stanford University)",
    bio: "Katherine orchestrates infrastructure development and international university exchange pathways, ensuring all three campuses maintain top-tier global integrations.",
    image: "/images/principal.png",
    email: "k.thorne@moderneducation.org",
    linkedin: "#",
  },
  {
    name: "Dr. Evelyn Vance",
    role: "Executive Principal",
    credentials: "Ed.D. in Educational Leadership (Oxford University)",
    bio: "Evelyn administers academic quality across our secondary schools, advising advanced AP integration and overseeing faculty peer-review processes.",
    image: "/images/principal.png",
    email: "e.vance@moderneducation.org",
    linkedin: "#",
  },
  {
    name: "Dr. Marcus Bell",
    role: "Dean of Admissions & Counseling",
    credentials: "Ph.D. in Psychology (Yale University)",
    bio: "Marcus directs our career placement desks and Ivy League admission pathways, coordinating mental health programs and student counselling panels.",
    image: "/images/principal.png",
    email: "m.bell@moderneducation.org",
    linkedin: "#",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-32 bg-white dark:bg-[#090D16] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent text-xs font-bold tracking-widest uppercase"
          >
            Our Leadership
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl md:text-4.5xl font-bold text-black dark:text-white tracking-tight font-poppins"
          >
            Academic Board & Administration
          </motion.h3>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-5 rounded-full" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEADERS.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group bg-white dark:bg-slate-900/40 rounded-[28px] overflow-hidden border border-neutral-200/50 dark:border-white/5 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                {/* Image Wrap */}
                <div className="relative h-60 w-full overflow-hidden bg-neutral-50 dark:bg-neutral-950">
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Credentials float */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 dark:bg-black/95 backdrop-blur-md border border-neutral-150 dark:border-neutral-850 px-3 py-1.5 rounded-xl shadow-sm">
                    <div className="flex items-center space-x-1.5 text-neutral-800 dark:text-neutral-200">
                      <GraduationCap className="h-4 w-4 shrink-0 text-accent" />
                      <span className="text-[9px] font-semibold leading-tight tracking-wide font-inter">
                        {leader.credentials}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-6 md:p-7 space-y-3">
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white font-poppins leading-tight">
                      {leader.name}
                    </h4>
                    <span className="text-[10px] font-semibold text-accent uppercase tracking-wider block mt-1">
                      {leader.role}
                    </span>
                  </div>

                  <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                    {leader.bio}
                  </p>
                </div>
              </div>

              {/* Action Contact bar */}
              <div className="px-6 md:px-7 pb-6 pt-4 border-t border-neutral-200/50 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={`mailto:${leader.email}`}
                  className="text-xs text-neutral-450 dark:text-neutral-400 hover:text-accent dark:hover:text-accent flex items-center space-x-1.5 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="font-semibold text-[10px] font-inter uppercase tracking-wide">Email</span>
                </a>

                <a
                  href={leader.linkedin}
                  className="p-1.5 rounded-lg bg-neutral-100 dark:bg-slate-800 text-neutral-600 dark:text-neutral-400 hover:bg-accent dark:hover:bg-accent hover:text-[#090D16] dark:hover:text-[#090D16] transition-colors flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}