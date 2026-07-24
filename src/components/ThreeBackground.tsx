'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 100;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle settings
    const particleCount = 120;
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];

    // Initialize positions and velocities
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 100;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.15,
        y: (Math.random() - 0.5) * 0.15,
        z: (Math.random() - 0.5) * 0.1,
      });
    }

    particles.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xD4AF37, // Gold accent
      size: 1.8,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    // Create system
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Line material
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    });

    // Lines geometry
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );

    const lineMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lineMesh);

    // Mouse tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.targetX = (event.clientX / window.innerWidth - 0.5) * 30;
      mouse.targetY = -(event.clientY / window.innerHeight - 0.5) * 30;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Dampen mouse move
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Update particle positions
      const positions = particles.attributes.position.array as Float32Array;

      let lineIndex = 0;
      const connectedCount = new Map<number, number>();

      for (let i = 0; i < particleCount; i++) {
        // Move particles
        positions[i * 3] += particleVelocities[i].x;
        positions[i * 3 + 1] += particleVelocities[i].y;
        positions[i * 3 + 2] += particleVelocities[i].z;

        // Apply mouse inertia
        positions[i * 3] += mouse.x * 0.005;
        positions[i * 3 + 1] += mouse.y * 0.005;

        // Boundary bounce
        if (positions[i * 3] < -100 || positions[i * 3] > 100) particleVelocities[i].x *= -1;
        if (positions[i * 3 + 1] < -100 || positions[i * 3 + 1] > 100) particleVelocities[i].y *= -1;
        if (positions[i * 3 + 2] < -100 || positions[i * 3 + 2] > 100) particleVelocities[i].z *= -1;
      }

      particles.attributes.position.needsUpdate = true;

      // Find nearby particles to connect
      const lineArray = linesGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = positions[j * 3];
          const y2 = positions[j * 3 + 1];
          const z2 = positions[j * 3 + 2];

          // Calculate distance
          const dist = Math.sqrt(
            (x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2
          );

          if (dist < 32) {
            const countI = connectedCount.get(i) || 0;
            const countJ = connectedCount.get(j) || 0;

            if (countI < 4 && countJ < 4) {
              connectedCount.set(i, countI + 1);
              connectedCount.set(j, countJ + 1);

              lineArray[lineIndex++] = x1;
              lineArray[lineIndex++] = y1;
              lineArray[lineIndex++] = z1;

              lineArray[lineIndex++] = x2;
              lineArray[lineIndex++] = y2;
              lineArray[lineIndex++] = z2;
            }
          }
        }
      }

      // Reset remaining positions in line buffer to avoid rendering artifacts
      for (let k = lineIndex; k < linePositions.length; k++) {
        lineArray[k] = 0;
      }

      linesGeometry.attributes.position.needsUpdate = true;

      // Gentle rotation
      particleSystem.rotation.y += 0.0005;
      lineMesh.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      particles.dispose();
      particleMaterial.dispose();
      linesGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none w-screen h-screen overflow-hidden"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
