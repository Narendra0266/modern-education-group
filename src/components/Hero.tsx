'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, BookOpen, GraduationCap, School, Settings, Compass } from 'lucide-react';
import Link from 'next/link';
import * as THREE from 'three';
import { getAssetPath } from '@/lib/image';

interface HeroProps {
  title?: string;
  motto?: string;
  bgImage?: string;
  videoSrc?: string;
  isSubpage?: boolean;
}

interface CounterProps {
  value: number;
  duration?: number;
}

function Counter({ value, duration = 2.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 16);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Hero({
  title = "Building Tomorrow's Leaders",
  motto = 'Empowering students through innovation, excellence, discipline and holistic education.',
  bgImage = '/images/campus.jpg',
  videoSrc,
  isSubpage = false,
}: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTab, setActiveTab] = useState('design');
  const [logoRotX, setLogoRotX] = useState(0);
  const [logoRotY, setLogoRotY] = useState(0);

  const handleLogoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Tilt max 15 degrees
    const rX = -(y / (rect.height / 2)) * 15;
    const rY = (x / (rect.width / 2)) * 15;
    
    setLogoRotX(rX);
    setLogoRotY(rY);
  };

  const handleLogoMouseLeave = () => {
    setLogoRotX(0);
    setLogoRotY(0);
  };

  const actualIsSubpage =
    isSubpage ||
    (title !== "Building Tomorrow's Leaders" &&
      title !== 'Three Institutions. One Vision. Endless Opportunities.');

  // Three.js Hologram inside Hero
  useEffect(() => {
    if (actualIsSubpage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(420, 420);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create Holographic Cage
    const geometry = new THREE.IcosahedronGeometry(2, 2);
    
    // Wireframe lines
    const wireframeGeom = new THREE.WireframeGeometry(geometry);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(wireframeGeom, lineMat);
    scene.add(lines);

    // Glow points
    const pointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geometry, pointsMat);
    scene.add(points);

    // Inner glowing sphere
    const innerGeom = new THREE.SphereGeometry(1.6, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.04,
      wireframe: true,
    });
    const innerSphere = new THREE.Mesh(innerGeom, innerMat);
    scene.add(innerSphere);

    // Animation variables
    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotate objects
      lines.rotation.y += 0.003;
      lines.rotation.x += 0.001;
      points.rotation.y += 0.003;
      points.rotation.x += 0.001;
      innerSphere.rotation.y -= 0.002;

      // React gently to mouse
      lines.rotation.y += mouseX * 0.01;
      lines.rotation.x += mouseY * 0.01;
      points.rotation.y += mouseX * 0.01;
      points.rotation.x += mouseY * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      geometry.dispose();
      wireframeGeom.dispose();
      lineMat.dispose();
      pointsMat.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      renderer.dispose();
    };
  }, [actualIsSubpage]);

  const logoSrc = getAssetPath(
    title === 'Modern Girls College' ? '/images/college_logo.png' :
    title === 'Modern English School' ? '/images/english_school_logo.png' :
    (title.includes('New Modern') || title.includes('Senior Secondary') || title.includes('NMSS')) ? '/images/nmss_logo.png' :
    '/images/logo.png'
  );

  if (actualIsSubpage) {
    // Elegant, premium layout for school subpages
    return (
      <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center bg-primary">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={getAssetPath(bgImage)}
          className="absolute top-0 left-0 w-full h-full object-cover scale-105 pointer-events-none filter brightness-50"
        >
          <source src={videoSrc} type="video/mp4" />
          <img src={getAssetPath(bgImage)} alt="Campus" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary" />

        <div className="relative z-10 w-full max-w-7xl px-6 md:px-8 text-center pt-[100px]">
          {/* Centered subpage school logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              rotateX: logoRotX,
              rotateY: logoRotY,
            }}
            onMouseMove={handleLogoMouseMove}
            onMouseLeave={handleLogoMouseLeave}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            className="mx-auto w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-8 flex items-center justify-center cursor-pointer"
          >
            <img
              src={logoSrc}
              alt="School Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(212,175,55,0.45)] animate-float"
              style={{ transform: "translateZ(25px)" }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-6xl md:text-7.5xl font-bold tracking-tight text-white mb-6 text-glow-white leading-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
          >
            {motto}
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-primary py-12 md:py-0">
      {/* Cinematic school photo background with Ken Burns zoom effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1.01, opacity: 1 }}
          transition={{ duration: 4.5, ease: 'easeOut' }}
          className="w-full h-full bg-cover bg-center filter brightness-[0.42] saturate-[0.85]"
          style={{ backgroundImage: `url('${getAssetPath(bgImage)}')` }}
        />
      </div>

      {/* Luxury Navy/Vignette Overlays */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_35%,_var(--color-primary)_100%] opacity-90 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/65 via-transparent to-primary/95 pointer-events-none z-10" />

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-7xl px-6 md:px-8 h-full flex flex-col justify-between pt-24 sm:pt-[120px] pb-8">
        {/* Floating Left Menu Panel */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.6 }}
          className="absolute left-6 top-[28%] hidden xl:flex flex-col gap-1.5 p-2 rounded-[24px] bg-primary/60 border border-white/8 backdrop-blur-2xl shadow-2xl z-30 w-[200px] text-left"
        >
          <span className="text-[9px] font-bold text-accent tracking-widest uppercase px-3 py-1.5 font-mono block">Campuses</span>
          {[
            { id: 'mes', name: 'MES Primary', icon: BookOpen },
            { id: 'mgc', name: 'MGC College', icon: GraduationCap },
            { id: 'nmss', name: 'NMSS Senior', icon: School },
            { id: 'innovation', name: 'Innovation', icon: Settings },
            { id: 'design', name: 'Global Hub', icon: Compass },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  const target = document.getElementById(item.id === 'design' ? 'about' : 'campuses');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[11px] font-semibold tracking-wide uppercase transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-white/10 text-white shadow-md border border-white/10' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className="h-4 w-4 text-accent shrink-0" />
                {item.name}
              </button>
            );
          })}
        </motion.div>

        {/* Floating Right Information Widget */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.75 }}
          className="absolute right-6 top-[28%] hidden xl:flex flex-col p-5 rounded-[24px] bg-primary/60 border border-white/8 backdrop-blur-2xl shadow-2xl z-30 w-[240px] text-left"
        >
          <span className="text-[9px] font-bold text-accent tracking-widest uppercase font-mono block mb-2">The New Standard</span>
          <h4 className="font-serif text-lg font-bold text-white mb-2">Spatial Learning Model</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed font-light mb-4">
            Combining Nvidia AI architectures, 3D printing maker-labs, and global board prep into a single, cohesive educational framework.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-wider group cursor-pointer" onClick={() => document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })}>
            <span>Explore Sandboxes</span>
            <ArrowRight className="h-3 w-3 text-accent group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* Center Content Section */}
        <div className="flex-grow flex flex-col items-center justify-center relative my-auto">
          {/* Main Title Headers */}
          <div className="max-w-4xl text-center space-y-4 mb-6 relative z-30">
            {/* Centered School Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                rotateX: logoRotX,
                rotateY: logoRotY,
              }}
              onMouseMove={handleLogoMouseMove}
              onMouseLeave={handleLogoMouseLeave}
              transition={{ type: 'spring', stiffness: 150, damping: 15 }}
              style={{ perspective: 1000, transformStyle: "preserve-3d" }}
              className="mx-auto w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-8 flex items-center justify-center cursor-pointer"
            >
              <img
                src={logoSrc}
                alt="Modern Education Group Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(212,175,55,0.35)] animate-float"
                style={{ transform: "translateZ(35px)" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-accent text-[10px] font-bold tracking-widest uppercase font-mono"
            >
              <Sparkles className="h-3 w-3 animate-pulse" />
              Empowering Future Generations
            </motion.div>
                        <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl md:text-7.5xl font-bold tracking-tight text-white leading-[1.1] text-glow-white uppercase"
            >
              MODERN GROUP OF EDUCATION
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-xl mx-auto leading-relaxed"
            >
              You&apos;ve never seen learning like <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent font-light italic font-serif">this</span> before.
            </motion.p>
          </div>

          {/* Center Main Pill Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-30 mt-8">
            <Link
              href="#admissions"
              className="px-8 py-3.5 rounded-full bg-[#ff5a1f] text-white font-semibold tracking-wider text-xs uppercase hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#ff5a1f]/20 cursor-pointer"
            >
              Apply Online
            </Link>
          </div>
        </div>

        {/* Floating Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-8 relative z-30">
          {[
            { value: 25, suffix: '+', label: 'Years of Legacy' },
            { value: 8000, suffix: '+', label: 'Active Students' },
            { value: 250, suffix: '+', label: 'Expert Faculty' },
            { value: 100, suffix: '%', label: 'Board Success' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-xl flex flex-col items-center justify-center"
            >
              <span className="text-xl sm:text-3xl font-bold text-accent font-serif tracking-tight">
                <Counter value={stat.value} />
                {stat.suffix}
              </span>
              <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}