"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Academics from "@/components/Academics";
import AcademicJourney from "@/components/AcademicJourney";
import Facilities from "@/components/Facilities";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Admission from "@/components/Admission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { BookOpen, FlaskConical, Cpu, Bot, Trophy, Tv } from "lucide-react";

const SENIOR_SCHOOL_FACILITIES = [
  {
    title: "Centennial Study Library",
    icon: BookOpen,
    description: "Equipped with college-level textbooks, peer-reviewed journals, and quiet pods for individual research.",
    image: null,
    color: "from-blue-600 to-indigo-900",
  },
  {
    title: "Advanced Chemistry & Physics Labs",
    icon: FlaskConical,
    description: "University-grade workspaces and chemical fume hoods, designed for advanced science research projects.",
    image: "/images/science_lab.png",
    color: null,
  },
  {
    title: "AI & Computational Data Hub",
    icon: Cpu,
    description: "High-end developer workstations, neural-net training servers, and edge computing boards.",
    image: "/images/robotics_lab.png",
    color: null,
  },
  {
    title: "Robotics Engineering Sandbox",
    icon: Bot,
    description: "A sandbox for modular assembly, mechanical modeling, and code testbeds for competition robots.",
    image: "/images/robotics_lab.png",
    color: null,
  },
  {
    title: "Olympic Athletics Complex",
    icon: Trophy,
    description: "Olympic size swimming pool, basketball courts, synthetic 400m tracks, and physical health gyms.",
    image: null,
    color: "from-amber-600 to-amber-900",
  },
  {
    title: "Digital Dolby Auditorium",
    icon: Tv,
    description: "A 800-seat theater featuring Dolby sound, automated staging lights, and widescreen display walls.",
    image: null,
    color: "from-violet-600 to-violet-950",
  },
];

const SENIOR_SCHOOL_STATS = [
  { value: 2100, suffix: "+", label: "Active Students" },
  { value: 99, suffix: "%", label: "College Admission" },
  { value: 150, suffix: "+", label: "Expert Faculty" },
  { value: 45, suffix: "+", label: "Robotics & coding Awards" },
];

export default function NewModernSeniorSecondarySchool() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30 dark:bg-navy-dark transition-colors duration-300">
      {/* Sticky Header */}
      <Navbar schoolName="New Modern Senior Secondary" backLink="/" />

      <main className="flex-grow pt-[70px]">
        {/* Hero Section */}
        <Hero
          title="New Modern Senior Secondary School"
          motto="Striving for Academic Rigor, Technological Innovation, and Leadership"
          bgImage="/images/robotics_lab.png"
        />

        {/* About Section */}
        <About
          title="New Modern Senior Secondary School"
          subtitle="A Launchpad for College Prep and Future Technology"
          historyText="Established in 2010, New Modern Senior Secondary School is the group's flagship co-educational campus for grades 9 through 12. We operate state-of-the-art computational facilities, engineering hubs, and intensive academic streams (Science, Commerce, Humanities)."
          visionText="To be an internationally recognized center of secondary and technical excellence, driving creative inquiry and research."
          missionText="We prepare students for top tier international university entries by combining high-level sciences with individual capstone research, digital logic, and elite athletic tracks."
          stats={SENIOR_SCHOOL_STATS}
          quoteText="We do not teach our students what to think; we teach them how to analyze. Our robotics and college placements reflect that."
          quoteAuthor="Dr. Marcus Thorne, Dean of Senior Secondary Studies"
        />

        {/* Academics Section */}
        <Academics />

        {/* Academic Journey Timeline */}
        <AcademicJourney />

        {/* Facilities Section */}
        <Facilities title="New Modern Senior Secondary" facilities={SENIOR_SCHOOL_FACILITIES} />

        {/* Achievements Timeline */}
        <Achievements />

        {/* Media Gallery */}
        <Gallery />

        {/* Admissions steps */}
        <Admission />

        {/* Contact Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI chatbot */}
      <AIAssistant />
    </div>
  );
}