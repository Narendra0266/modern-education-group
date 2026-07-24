"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  FlaskConical,
  Cpu,
  Bot,
  Trophy,
  Home,
  Bus,
  Tv,
  Coffee,
  HeartPulse,
} from "lucide-react";

interface FacilityItem {
  title: string;
  icon: any;
  description: string;
  image: string | null;
  color?: string | null;
}

interface FacilitiesProps {
  title?: string;
  facilities?: FacilityItem[];
}

const DEFAULT_FACILITIES = [
  {
    title: "Centennial Library",
    icon: BookOpen,
    description: "Over 50,000 physical volumes, digital archives, and quiet study alcoves with high-speed research terminals.",
    image: null,
    color: "from-blue-600 to-primary",
  },
  {
    title: "Advanced Science Labs",
    icon: FlaskConical,
    description: "University-grade chemistry, physics, and biology equipment designed for advanced research experiments.",
    image: "/images/science_lab.png",
    color: null,
  },
  {
    title: "AI & Data Science Hub",
    icon: Cpu,
    description: "Equipped with high-performance GPU workstations for learning neural networks and deep learning models.",
    image: "/images/robotics_lab.png",
    color: null,
  },
  {
    title: "Robotics Sandbox",
    icon: Bot,
    description: "A collaborative makerspace for designing, assembling, and programming custom competition-ready robots.",
    image: "/images/robotics_lab.png",
    color: null,
  },
  {
    title: "Olympic Sports Complex",
    icon: Trophy,
    description: "An indoor heated swimming pool, professional basketball courts, a synthetic athletics track, and fitness studios.",
    image: null,
    color: "from-amber-600 to-amber-800",
  },
  {
    title: "Premium Campus Hostels",
    icon: Home,
    description: "Fully air-conditioned, secure residential dormitories with high-speed Wi-Fi, laundry facilities, and common rooms.",
    image: null,
    color: "from-indigo-600 to-indigo-950",
  },
  {
    title: "Eco-Transport Network",
    icon: Bus,
    description: "A fleet of modern GPS-tracked school buses covering all major residential corridors, prioritizing student safety.",
    image: null,
    color: "from-emerald-600 to-emerald-900",
  },
  {
    title: "Digital Auditorium",
    icon: Tv,
    description: "A 800-seat theater featuring Dolby acoustics, a high-resolution projection wall, and automated theater lights.",
    image: null,
    color: "from-violet-600 to-violet-950",
  },
  {
    title: "Organic Cafeteria",
    icon: Coffee,
    description: "Nutritious, chef-curated meals prepared daily using organic, locally sourced farm produce with multi-cuisine options.",
    image: null,
    color: "from-orange-600 to-orange-900",
  },
  {
    title: "24/7 Wellness Center",
    icon: HeartPulse,
    description: "A fully staffed medical room, clinical beds, emergency protocols, and on-call child psychologists.",
    image: null,
    color: "from-rose-600 to-rose-900",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 90 } },
};

export default function Facilities({
  title = "Modern Education Group",
  facilities = DEFAULT_FACILITIES,
}: FacilitiesProps) {
  return (
    <section id="facilities" className="py-32 bg-white dark:bg-[#090D16] transition-colors duration-300 overflow-hidden">
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
            Campus Facilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl md:text-4.5xl font-bold text-black dark:text-white tracking-tight font-poppins"
          >
            A World-Class Infrastructure at {title}
          </motion.h3>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-5 rounded-full" />
        </div>

        {/* Facilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            const hasImage = fac.image !== null;

            return (
              <motion.div
                key={fac.title}
                variants={cardVariants}
                className={`group relative rounded-[28px] overflow-hidden border h-[280px] flex flex-col justify-end p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-[1.01] ${
                  hasImage 
                    ? "bg-black border-neutral-900" 
                    : "bg-neutral-50 dark:bg-slate-900/40 border-neutral-200/50 dark:border-white/5 backdrop-blur-md"
                }`}
              >
                {/* Image background if available */}
                {hasImage && (
                  <>
                    <Image
                      src={fac.image!}
                      alt={fac.title}
                      fill
                      sizes="(max-w-7xl) 100vw, 400px"
                      className="object-cover object-center absolute inset-0 z-0 filter brightness-[0.35] group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    {/* Top glass border overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent z-10" />
                  </>
                )}

                {/* Content Overlay */}
                <div className="relative z-20 space-y-2.5">
                  <div className={`p-2.5 rounded-xl w-fit flex items-center justify-center ${
                    hasImage 
                      ? "bg-white/10 text-accent backdrop-blur-md border border-white/15" 
                      : "bg-neutral-100 dark:bg-slate-800 text-neutral-800 dark:text-neutral-200"
                  }`}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>

                  <h4 className={`text-lg font-bold font-poppins ${
                    hasImage ? "text-white" : "text-black dark:text-white"
                  }`}>
                    {fac.title}
                  </h4>

                  <p className={`text-xs leading-relaxed font-light ${
                    hasImage ? "text-neutral-300" : "text-neutral-500 dark:text-neutral-400"
                  }`}>
                    {fac.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}