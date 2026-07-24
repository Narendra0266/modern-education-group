"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Academics from "@/components/Academics";
import AcademicJourney from "@/components/AcademicJourney";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Admission from "@/components/Admission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { BookOpen, FlaskConical, Bot, Trophy, Coffee, HeartPulse } from "lucide-react";
import { getAssetPath } from "@/lib/image";

const ENGLISH_SCHOOL_FACILITIES = [
  {
    title: "Primary Reading Library",
    icon: BookOpen,
    description: "An animated, cozy library featuring over 15,000 children's books and interactive digital reading modules.",
    image: null,
    color: "from-blue-600 to-indigo-800",
  },
  {
    title: "Kids Science Laboratory",
    icon: FlaskConical,
    description: "Equipped with simple microscopes and modular experiment packs, making biology and chemistry fun.",
    image: getAssetPath("/images/science_lab.png"),
    color: null,
  },
  {
    title: "Robotics Explorer Sandbox",
    icon: Bot,
    description: "Modular Lego Mindstorms and electronics boards designed to teach primary logical computational thinking.",
    image: getAssetPath("/images/robotics_lab.png"),
    color: null,
  },
  {
    title: "Junior Sports & Pool Complex",
    icon: Trophy,
    description: "Heated swimming pools with professional trainers and outdoor fields for football and track events.",
    image: null,
    color: "from-amber-600 to-amber-800",
  },
  {
    title: "Organic Children's Cafeteria",
    icon: Coffee,
    description: "Nutritious, child-friendly organic meal plans supervised by clinical pediatric nutritionists.",
    image: null,
    color: "from-orange-600 to-orange-800",
  },
  {
    title: "Pediatric Wellness Center",
    icon: HeartPulse,
    description: "24/7 on-duty school nurse, basic triage beds, pediatric care kits, and regular dental checkups.",
    image: null,
    color: "from-rose-600 to-rose-800",
  },
];

const ENGLISH_SCHOOL_STATS = [
  { value: 650, suffix: "+", label: "Active Students" },
  { value: 55, suffix: "+", label: "Expert Educators" },
  { value: 18, suffix: "+", label: "Extracurricular Tracks" },
  { value: 25, suffix: "+", label: "STEM & Art Medals" },
];

export default function ModernEnglishSchool() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30 dark:bg-navy-dark transition-colors duration-300">
      {/* Sticky Header */}
      <Navbar schoolName="Modern English School" backLink="/" />

      <main className="flex-grow pt-[70px]">
        {/* Hero Section */}
        <Hero
          title="Modern English School"
          motto="Building Strong Foundations for Creative & Inquiring Minds"
          bgImage={getAssetPath("/images/science_lab.png")}
        />

        {/* About Section */}
        <About
          title="Modern English School"
          subtitle="Inspiring Academic Independence in Primary Education"
          historyText="Established in 1996, Modern English School was founded to provide co-educational primary and middle school learning of international stature. Our programs focus heavily on language fluency, active reading, and early engineering sciences."
          visionText="To foster character, cognitive independence, and cooperative values in young children, preparing them for higher academic tiers."
          missionText="We inspire students through structured inquiry-guided learning, active sports, arts and music appreciation, and basic coding platforms."
          stats={ENGLISH_SCHOOL_STATS}
          quoteText="A child's mind is not a vessel to be filled, but a fire to be kindled. We spark that inquiry early."
          quoteAuthor="Dr. Marcus Bell, Dean of Primary Years"
        />

        {/* Academics Section */}
        <Academics />

        {/* Academic Journey Timeline */}
        <AcademicJourney />

        {/* Facilities Section */}
        <Facilities title="Modern English School" facilities={ENGLISH_SCHOOL_FACILITIES} />

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