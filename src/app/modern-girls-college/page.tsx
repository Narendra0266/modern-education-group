"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Academics from "@/components/Academics";
import AcademicJourney from "@/components/AcademicJourney";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Admission from "@/components/Admission";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { BookOpen, FlaskConical, Home, Trophy, Tv, HeartPulse } from "lucide-react";

const GIRLS_COLLEGE_FACILITIES = [
  {
    title: "Centennial Research Library",
    icon: BookOpen,
    description: "Deep archives in science, gender studies, literature, and economics, with online journal research portals.",
    image: null,
    color: "from-rose-600 to-primary",
  },
  {
    title: "Advanced Bio-Chemical Labs",
    icon: FlaskConical,
    description: "Equipped with advanced spectrophotometers and chromatography columns for high school research capstones.",
    image: "/images/science_lab.png",
    color: null,
  },
  {
    title: "Safe Residential Dormitories",
    icon: Home,
    description: "Modern, secure hostels featuring double-sharing rooms, study halls, high-speed Wi-Fi, and 24/7 wardens.",
    image: null,
    color: "from-rose-500 to-pink-900",
  },
  {
    title: "Leadership & Seminar Auditoriums",
    icon: Tv,
    description: "A 500-seat digital hall hosting guest lectures, student council conventions, and drama showcases.",
    image: null,
    color: "from-indigo-600 to-indigo-950",
  },
  {
    title: "Women's Athletics Complex",
    icon: Trophy,
    description: "An indoor gym, synthetic running tracks, and training rings for fencing, basketball, and gymnastics.",
    image: null,
    color: "from-amber-600 to-amber-900",
  },
  {
    title: "24/7 Medical Care Wing",
    icon: HeartPulse,
    description: "Fully staffed clinical room, resident school doctor, basic diagnostic beds, and personal counseling services.",
    image: null,
    color: "from-rose-600 to-rose-900",
  },
];

const GIRLS_COLLEGE_STATS = [
  { value: 1400, suffix: "+", label: "Active Enrolled" },
  { value: 100, suffix: "%", label: "University Placement" },
  { value: 95, suffix: "+", label: "Expert Faculty" },
  { value: 35, suffix: "+", label: "Leadership Scholarships" },
];

export default function ModernGirlsCollege() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30 dark:bg-navy-dark transition-colors duration-300">
      {/* Sticky Header */}
      <Navbar schoolName="Modern Girls College" backLink="/" />

      <main className="flex-grow pt-[70px]">
        {/* Hero Section */}
        <Hero
          title="Modern Girls College"
          motto="Empowering Young Women to Lead, Innovate, and Excel"
          bgImage="/images/principal.png"
        />

        {/* About Section */}
        <About
          title="Modern Girls College"
          subtitle="Fostering Academic Excellence and Female Leadership"
          historyText="Founded in 2002, Modern Girls College is a premier residential and day college offering secondary and higher secondary education for young women. We provide a rigorous, supportive environment that focuses on advanced AP streams, creative writing, and governance."
          visionText="To be a global beacon of female education, nurturing critical thinkers, scientists, and ethicists who drive social progress."
          missionText="We deliver elite academic preparation, college placement guidance, and comprehensive athletics, in a secure, nurturing environment."
          stats={GIRLS_COLLEGE_STATS}
          quoteText="We do not just prepare our students for college; we prepare them to take charge of their fields. Our alumnae lead with courage."
          quoteAuthor="Dr. Evelyn Vance, Governing Board Member"
        />

        {/* Academics Section */}
        <Academics />

        {/* Academic Journey Timeline */}
        <AcademicJourney />

        {/* Facilities Section */}
        <Facilities title="Modern Girls College" facilities={GIRLS_COLLEGE_FACILITIES} />

        {/* Testimonials */}
        <Testimonials />

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