'use client';

import { ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 6,
  glowColor = 'rgba(212, 175, 55, 0.12)',
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowStyle, setGlowStyle] = useState<any>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative coordinates inside the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation angles (-maxTilt to +maxTilt)
    const rotX = -((y - height / 2) / (height / 2)) * maxTilt;
    const rotY = ((x - width / 2) / (width / 2)) * maxTilt;
    
    setRotateX(rotX);
    setRotateY(rotY);
    
    // Position of the radial glow following the cursor
    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle 180px at ${x}px ${y}px, ${glowColor}, transparent 80%)`,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowStyle({ opacity: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 22, mass: 0.4 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative ${className}`}
    >
      {/* Dynamic Spotlight Glow Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 rounded-[inherit]"
        style={glowStyle}
      />
      {children}
    </motion.div>
  );
}
