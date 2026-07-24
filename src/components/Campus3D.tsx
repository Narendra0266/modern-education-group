'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { 
  Building, 
  MapPin, 
  Cpu, 
  GraduationCap, 
  School, 
  Activity, 
  Navigation,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { getAssetPath } from '@/lib/image';

interface Hotspot {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
  camPos: { x: number; y: number; z: number };
  lookAt: { x: number; y: number; z: number };
  meshPos: { x: number; y: number; z: number };
  stats: string[];
}

export default function Campus3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [hoveredHotspotId, setHoveredHotspotId] = useState<string | null>(null);

  const hotspots: Hotspot[] = [
    {
      id: 'admin',
      name: 'Administrative Block',
      subtitle: 'Modern Group of Education HQ',
      description: 'The executive headquarters hosting admissions guidance, administration, and digital communications channels.',
      icon: <Building className="h-5 w-5 text-accent" />,
      image: getAssetPath('/images/school_front.png'),
      link: '#contact',
      camPos: { x: -5, y: 4, z: 6 },
      lookAt: { x: -2.5, y: 0.5, z: -1 },
      meshPos: { x: -2.5, y: 0.5, z: -1 },
      stats: ['Executive Offices', 'Admissions Board', 'MEG Conference Suite'],
    },
    {
      id: 'senior',
      name: 'New Modern Senior Secondary School',
      subtitle: 'Senior Prep & Assembly Yard',
      description: 'The collegiate secondary prep academy housing classrooms, sciences labs, and the primary assembly grounds.',
      icon: <School className="h-5 w-5 text-accent" />,
      image: getAssetPath('/images/school_assembly.png'),
      link: '/new-modern-senior-secondary',
      camPos: { x: 5, y: 4, z: 6 },
      lookAt: { x: 2.5, y: 0.8, z: -2 },
      meshPos: { x: 2.5, y: 0.8, z: -2 },
      stats: ['Grades 11-12', 'Science Labs', 'Main Assembly Yard'],
    },
    {
      id: 'girls',
      name: 'Modern Girls College',
      subtitle: 'Girls Higher Education & Residency',
      description: 'Secure, climate-controlled boarding wings and seminar rooms focused on women leadership and university preparation.',
      icon: <GraduationCap className="h-5 w-5 text-accent" />,
      image: getAssetPath('/images/school_front.png'), // Fallback to front building photo
      link: '/modern-girls-college',
      camPos: { x: -3, y: 4, z: 7 },
      lookAt: { x: -1, y: 1.2, z: 2 },
      meshPos: { x: -1, y: 1.2, z: 2 },
      stats: ['Secondary & College', 'AC Boarding Chambers', 'Leadership Labs'],
    },
    {
      id: 'ai_hub',
      name: 'AI & STEM Innovation Sandbox',
      subtitle: 'Robotics & Coding Dome',
      description: 'A glowing geodesic prototyping lab loaded with automated micro-controllers, edge servers, and robotics assembly blocks.',
      icon: <Cpu className="h-5 w-5 text-accent" />,
      image: getAssetPath('/images/robotics_lab.png'),
      link: '/modern-english-school',
      camPos: { x: 0, y: 5, z: 6 },
      lookAt: { x: 0, y: 0.5, z: 0 },
      meshPos: { x: 0, y: 0.5, z: 0 },
      stats: ['NVIDIA Tensor Nodes', '3D Printer Maker Space', 'AI Prototyping Sandbox'],
    },
    {
      id: 'sports',
      name: 'Athletics & Play Arenas',
      subtitle: 'Olympic Training Grounds',
      description: 'Professional sports fields, running tracks, swimming arenas, and volleyball facilities.',
      icon: <Activity className="h-5 w-5 text-accent" />,
      image: getAssetPath('/images/campus.png'),
      link: '#facilities',
      camPos: { x: 4, y: 4, z: 7 },
      lookAt: { x: 2, y: 0.1, z: 2.5 },
      meshPos: { x: 2, y: 0.1, z: 2.5 },
      stats: ['Olympic-size Pool', 'Athletics Oval', 'Multisport Court Yards'],
    },
  ];

  // Camera targets for interpolation
  const currentCamPos = useRef(new THREE.Vector3(0, 8, 10));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const targetCamPos = useRef(new THREE.Vector3(0, 8, 10));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // SCENE & CAMERA
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#030b17');
    scene.fog = new THREE.FogExp2('#030b17', 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.copy(currentCamPos.current);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Don't go below ground
    controls.minDistance = 3;
    controls.maxDistance = 25;

    // LIGHTS
    const ambientLight = new THREE.AmbientLight('#1d2e47', 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight('#ffffff', 2.5);
    dirLight.position.set(10, 15, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.001;
    scene.add(dirLight);

    // Glowing point light at the center dome
    const pointLight = new THREE.PointLight('#ff5a1f', 4, 8);
    pointLight.position.set(0, 1.2, 0);
    scene.add(pointLight);

    // GROUND GRID PLATFORM
    const gridHelper = new THREE.GridHelper(30, 30, '#ff5a1f', '#102542');
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Ground Plane for receiving shadows
    const groundGeo = new THREE.PlaneGeometry(50, 50);
    const groundMat = new THREE.MeshStandardMaterial({
      color: '#071529',
      roughness: 0.85,
      metalness: 0.1,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // DICTIONARY OF HOTSPOT MESHES
    const buildingMeshes: { [key: string]: THREE.Group } = {};

    // 1. ADMIN BLOCK (Mesh)
    const adminGroup = new THREE.Group();
    adminGroup.position.set(-2.5, 0, -1);
    
    const adminMain = new THREE.Mesh(
      new THREE.BoxGeometry(2, 1, 1.2),
      new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.3, metalness: 0.4 })
    );
    adminMain.position.y = 0.5;
    adminMain.castShadow = true;
    adminMain.receiveShadow = true;
    adminGroup.add(adminMain);

    // Red portal columns (representing their red elements)
    const columnGeo = new THREE.BoxGeometry(0.2, 1, 0.2);
    const columnMat = new THREE.MeshStandardMaterial({ color: '#dc2626', roughness: 0.4 });
    const col1 = new THREE.Mesh(columnGeo, columnMat);
    col1.position.set(-1.1, 0.5, 0.7);
    col1.castShadow = true;
    const col2 = col1.clone();
    col2.position.set(1.1, 0.5, 0.7);
    adminGroup.add(col1, col2);

    scene.add(adminGroup);
    buildingMeshes['admin'] = adminGroup;

    // 2. SENIOR SECONDARY BLOCK (Mesh)
    const seniorGroup = new THREE.Group();
    seniorGroup.position.set(2.5, 0, -2);

    const seniorMain = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 1.6, 1.4),
      new THREE.MeshStandardMaterial({ color: '#e2e8f0', roughness: 0.4 })
    );
    seniorMain.position.y = 0.8;
    seniorMain.castShadow = true;
    seniorMain.receiveShadow = true;
    seniorGroup.add(seniorMain);

    // Court yard
    const yard = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 2),
      new THREE.MeshStandardMaterial({ color: '#475569', roughness: 0.9 })
    );
    yard.rotation.x = -Math.PI / 2;
    yard.position.set(0, 0.01, 1.8);
    yard.receiveShadow = true;
    seniorGroup.add(yard);

    scene.add(seniorGroup);
    buildingMeshes['senior'] = seniorGroup;

    // 3. GIRLS COLLEGE BLOCK (Mesh)
    const girlsGroup = new THREE.Group();
    girlsGroup.position.set(-1, 0, 2);

    const girlsMain = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 2.4, 1.4),
      new THREE.MeshStandardMaterial({ color: '#f1f5f9', roughness: 0.2, metalness: 0.5 })
    );
    girlsMain.position.y = 1.2;
    girlsMain.castShadow = true;
    girlsMain.receiveShadow = true;
    girlsGroup.add(girlsMain);

    // Glass windows column
    const winGeo = new THREE.BoxGeometry(0.5, 2, 1.42);
    const winMat = new THREE.MeshPhysicalMaterial({
      color: '#d4af37',
      transparent: true,
      opacity: 0.6,
      roughness: 0.1,
      transmission: 0.6,
      thickness: 0.5,
    });
    const win = new THREE.Mesh(winGeo, winMat);
    win.position.y = 1.2;
    girlsGroup.add(win);

    scene.add(girlsGroup);
    buildingMeshes['girls'] = girlsGroup;

    // 4. AI STEM DOME (Mesh)
    const aiGroup = new THREE.Group();
    aiGroup.position.set(0, 0, 0);

    const domeGeo = new THREE.SphereGeometry(1, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeMat = new THREE.MeshPhysicalMaterial({
      color: '#ff5a1f',
      transparent: true,
      opacity: 0.55,
      roughness: 0.05,
      metalness: 0.9,
      transmission: 0.9,
      thickness: 0.8,
      wireframe: false,
    });
    const dome = new THREE.Mesh(domeGeo, domeMat);
    dome.castShadow = true;
    aiGroup.add(dome);

    // Dome skeleton wireframe overlay
    const wireGeo = new THREE.SphereGeometry(1.02, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: '#d4af37',
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    aiGroup.add(wire);

    scene.add(aiGroup);
    buildingMeshes['ai_hub'] = aiGroup;

    // 5. SPORTS FIELD (Mesh)
    const sportsGroup = new THREE.Group();
    sportsGroup.position.set(2, 0, 2.5);

    const greenGeo = new THREE.BoxGeometry(3, 0.1, 2);
    const greenMat = new THREE.MeshStandardMaterial({ color: '#15803d', roughness: 0.9 });
    const green = new THREE.Mesh(greenGeo, greenMat);
    green.position.y = 0.05;
    green.receiveShadow = true;
    sportsGroup.add(green);

    // Tracks outline
    const trackGeo = new THREE.BoxGeometry(3.3, 0.06, 2.3);
    const trackMat = new THREE.MeshStandardMaterial({ color: '#b91c1c', roughness: 0.8 });
    const track = new THREE.Mesh(trackGeo, trackMat);
    track.position.y = 0.03;
    track.receiveShadow = true;
    sportsGroup.add(track);

    scene.add(sportsGroup);
    buildingMeshes['sports'] = sportsGroup;

    // GLOW MARKERS (HOTSPOT INDICATORS IN THREEJS)
    const markerGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.05, 16);
    const markers: { [key: string]: THREE.Mesh } = {};

    hotspots.forEach((hs) => {
      const markerMat = new THREE.MeshBasicMaterial({
        color: '#d4af37',
        transparent: true,
        opacity: 0.8,
      });
      const marker = new THREE.Mesh(markerGeometry, markerMat);
      marker.position.copy(hs.meshPos);
      marker.position.y += 1.5; // Hover floating above building
      scene.add(marker);
      markers[hs.id] = marker;
    });

    // FLOATING PARTICLES (Dust Motes)
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20; // x
      positions[i + 1] = Math.random() * 8;      // y
      positions[i + 2] = (Math.random() - 0.5) * 20; // z
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: '#d4af37',
      size: 0.05,
      transparent: true,
      opacity: 0.45,
    });
    const dustParticles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(dustParticles);

    // INTERPOLATION TICK FUNCTION
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Spin markers and float them slightly
      hotspots.forEach((hs) => {
        const marker = markers[hs.id];
        if (marker) {
          marker.rotation.y = elapsedTime * 1.5;
          // Float height bounce
          marker.position.y = hs.meshPos.y + 1.2 + Math.sin(elapsedTime * 2 + hs.meshPos.x) * 0.08;
          
          // Color highlighting on hover
          const isSelected = activeHotspot?.id === hs.id;
          const isHovered = hoveredHotspotId === hs.id;
          if (isSelected) {
            (marker.material as THREE.MeshBasicMaterial).color.set('#ff5a1f');
          } else if (isHovered) {
            (marker.material as THREE.MeshBasicMaterial).color.set('#ffffff');
          } else {
            (marker.material as THREE.MeshBasicMaterial).color.set('#d4af37');
          }
        }

        // Float buildings slightly on hover
        const mesh = buildingMeshes[hs.id];
        if (mesh) {
          const isSelected = activeHotspot?.id === hs.id;
          const isHovered = hoveredHotspotId === hs.id;
          
          let targetY = 0;
          if (isSelected) targetY = 0.2;
          else if (isHovered) targetY = 0.08;

          mesh.position.y += (targetY - mesh.position.y) * 0.1;
        }
      });

      // Slowly rotate dust particles
      dustParticles.rotation.y = elapsedTime * 0.02;

      // Camera position and lookAt interpolation (smooth damping)
      camera.position.lerp(targetCamPos.current, 0.05);
      controls.target.lerp(targetLookAt.current, 0.05);

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    tick();

    // RAYCASTING (Click detection)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Check intersection with building meshes or markers
      const intersects = hotspots.map((hs) => {
        const mesh = buildingMeshes[hs.id];
        const marker = markers[hs.id];
        const objectsToCheck: THREE.Object3D[] = [];
        if (mesh) objectsToCheck.push(mesh);
        if (marker) objectsToCheck.push(marker);

        const check = raycaster.intersectObjects(objectsToCheck, true);
        return { hotspot: hs, hit: check.length > 0 };
      });

      const hitItem = intersects.find((item) => item.hit);
      if (hitItem) {
        selectHotspot(hitItem.hotspot);
      }
    };

    const handleCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = hotspots.map((hs) => {
        const mesh = buildingMeshes[hs.id];
        const marker = markers[hs.id];
        const objectsToCheck: THREE.Object3D[] = [];
        if (mesh) objectsToCheck.push(mesh);
        if (marker) objectsToCheck.push(marker);

        const check = raycaster.intersectObjects(objectsToCheck, true);
        return { hotspot: hs, hit: check.length > 0 };
      });

      const hitItem = intersects.find((item) => item.hit);
      if (hitItem) {
        setHoveredHotspotId(hitItem.hotspot.id);
        canvas.style.cursor = 'pointer';
      } else {
        setHoveredHotspotId(null);
        canvas.style.cursor = 'grab';
      }
    };

    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('mousemove', handleCanvasMouseMove);

    // RESIZE EVENT
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('click', handleCanvasClick);
      canvas.removeEventListener('mousemove', handleCanvasMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [activeHotspot, hoveredHotspotId]);

  const selectHotspot = (hs: Hotspot) => {
    setActiveHotspot(hs);
    targetCamPos.current.set(hs.camPos.x, hs.camPos.y, hs.camPos.z);
    targetLookAt.current.set(hs.lookAt.x, hs.lookAt.y, hs.lookAt.z);
  };

  const resetCamera = () => {
    setActiveHotspot(null);
    targetCamPos.current.set(0, 8, 10);
    targetLookAt.current.set(0, 0, 0);
  };

  return (
    <section id="virtual-tour" className="py-24 px-6 md:px-8 bg-[#030b17] relative overflow-hidden text-white border-t border-white/5">
      {/* Absolute floating grids */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(212,175,55,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-accent text-[10px] font-bold tracking-widest uppercase font-mono mb-3">
            <Sparkles className="h-3 w-3 animate-pulse" />
            3D Spatial Blueprint
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Interactive Campus Sandbox
          </h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto text-sm leading-relaxed">
            Click on the floating markers or drag the camera to orbit the WebGL blueprint. Zoom in to explore specific facility zones.
          </p>
        </div>

        {/* Dynamic WebGL workspace */}
        <div 
          ref={containerRef} 
          className="relative w-full h-[550px] md:h-[650px] rounded-[36px] overflow-hidden border border-white/8 bg-[#030b17] shadow-2xl flex flex-col md:flex-row"
        >
          {/* Main 3D Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 cursor-grab" />

          {/* Left panel selectors */}
          <div className="absolute left-6 top-6 flex flex-col gap-2.5 z-10 w-[240px] pointer-events-auto">
            {hotspots.map((hs) => {
              const isSelected = activeHotspot?.id === hs.id;
              return (
                <button
                  key={hs.id}
                  onClick={() => selectHotspot(hs)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-wider text-left backdrop-blur-md border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-accent text-primary border-accent shadow-lg shadow-accent/20' 
                      : 'bg-[#030b17]/55 text-slate-300 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-primary/10 text-primary' : 'bg-white/5 text-accent'}`}>
                    {hs.icon}
                  </span>
                  <span>{hs.name}</span>
                </button>
              );
            })}

            {activeHotspot && (
              <button
                onClick={resetCamera}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-white/5 border border-white/10 hover:border-white/20 hover:text-white transition-all backdrop-blur-sm"
              >
                <Navigation className="h-3 w-3 rotate-45 text-accent" />
                Reset View
              </button>
            )}
          </div>

          {/* Top instruction badge */}
          <div className="absolute top-6 right-6 pointer-events-none hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#030b17]/50 border border-white/5 backdrop-blur-md text-[10px] text-slate-400 font-mono">
            <span>Left-click + Drag to Orbit</span>
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span>Scroll to Zoom</span>
          </div>

          {/* Right Info Slide-in Card */}
          <AnimatePresence>
            {activeHotspot && (
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 120 }}
                className="absolute right-6 bottom-6 md:top-6 z-10 w-full max-w-[340px] md:max-w-[380px] pointer-events-auto flex flex-col p-6 rounded-[28px] bg-[#071a35]/85 border border-white/12 backdrop-blur-2xl shadow-2xl overflow-y-auto max-h-[90%]"
              >
                {/* Photo Header */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-900 border border-white/8">
                  <img
                    src={activeHotspot.image}
                    alt={activeHotspot.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a35] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff5a1f] text-white text-[9px] font-bold uppercase tracking-widest">
                    <MapPin className="h-3 w-3" /> Live Campus Photo
                  </span>
                </div>

                {/* Details */}
                <span className="text-[10px] font-bold text-accent tracking-widest uppercase font-mono block mb-1">
                  {activeHotspot.subtitle}
                </span>
                <h4 className="font-serif text-xl font-bold text-white mb-3">
                  {activeHotspot.name}
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed font-light mb-5">
                  {activeHotspot.description}
                </p>

                {/* Facilities List */}
                <div className="space-y-2 mb-6">
                  {activeHotspot.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[10px] text-slate-400 font-medium font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>

                {/* Explore button */}
                <a
                  href={activeHotspot.link}
                  className="mt-auto flex items-center justify-center gap-2.5 py-3.5 w-full bg-[#ff5a1f] hover:bg-white text-white hover:text-primary font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md shadow-[#ff5a1f]/15"
                >
                  <span>Explore Campus Details</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
