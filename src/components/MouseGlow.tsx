'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseGlow() {
  const mouseX = useMotionValue(-150);
  const mouseY = useMotionValue(-150);

  const springConfig = { damping: 30, stiffness: 180, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: glowX,
        y: glowY,
        backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, rgba(212,175,55,0) 70%)"
      }}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-30 blur-[40px] mix-blend-screen hidden md:block"
    />
  );
}
