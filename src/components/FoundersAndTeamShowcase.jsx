import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  X,
  Mail,
  Phone,
  Linkedin,
  ShieldCheck,
  Zap,
  Layers,
  Award,
  Cpu
} from 'lucide-react'
import { Link } from './Router.jsx'

// Local High-Definition 3D Character Avatars
import jeyawin3d from '../assets/team-3d/jeyawin.jpg'
import arun3d from '../assets/team-3d/arun.jpg'
import priya3d from '../assets/team-3d/priya.jpg'
import ramesh3d from '../assets/team-3d/ramesh.jpg'
import divya3d from '../assets/team-3d/divya.jpg'
import vikram3d from '../assets/team-3d/vikram.jpg'
import nithin3d from '../assets/team-3d/nithin.jpg'
import naveen3d from '../assets/team-3d/naveen.jpg'
import kiran3d from '../assets/team-3d/kiran.jpg'
import anand3d from '../assets/team-3d/anand.jpg'

// Team & Family Members Dataset (10 Stylized 3D Avatars with Signature Live Actions)
export const TEAM_MEMBERS = [
  {
    id: 'jeyawin',
    name: 'Jeyawin D',
    verticalName: 'JEYAWIN',
    role: 'Founder & CEO',
    verticalTag: '*founder & ceo',
    badge: 'CHIEF EXECUTIVE & SYSTEM ARCHITECT',
    badgeCategory: 'EXECUTIVE LEADERSHIP',
    skills: 'System Arch • ERP • Cloud',
    skillsList: ['System Architecture', 'Custom ERP', 'Cloud Infrastructure', 'IoT Solutions', 'Business Automation', 'Strategic Leadership'],
    specialty: 'System Architecture, Enterprise ERP & Cloud Systems',
    bio: 'As Founder and CEO of DASA TECH, I lead our enterprise systems architecture and software strategy. With extensive experience across cloud platforms, custom ERPs, and digital solutions, I ensure our software delivers high performance, accuracy, and operational efficiency for our clients.',
    image: jeyawin3d,
    color: '#8B5CF6',
    deptColor: '#A855F7',
    propName: 'Executive Blazer',
    actionTitle: 'Strategic Architecture Pulse',
    actionMessage: 'Enterprise Systems: Operational • 99.99% Architecture Uptime',
    actionType: 'executive',
    email: 'dasatechmu@gmail.com',
    phone: '+91 76399 30148',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'arun',
    name: 'Arun',
    verticalName: 'ARUN',
    role: 'Full Stack Developer',
    verticalTag: '*full stack',
    badge: 'FULL STACK SYSTEMS ENGINEER',
    badgeCategory: 'ENGINEERING & ARCHITECTURE',
    skills: 'React • Node.js • APIs',
    skillsList: ['React 18', 'Node.js Core', 'PostgreSQL', 'Redis Caching', 'GraphQL APIs', 'Docker'],
    specialty: 'React Architecture, Distributed Node.js & Microservices',
    bio: 'Leading our core full-stack application development, I specialize in crafting high-concurrency Node.js services and responsive, low-latency React web frontends. Focused on clean modular code, sub-millisecond database queries, and seamless REST/GraphQL API integration, I drive our flagship software products from conception to deployment.',
    image: arun3d,
    color: '#3B82F6',
    deptColor: '#60A5FA',
    propName: 'MacBook Pro Terminal',
    actionTitle: 'Compile & Ship Microservices',
    actionMessage: '🚀 Deploying React & Node.js Cluster • Build Passed in 240ms',
    actionType: 'code',
    email: 'arun@dasatech.com',
    phone: '+91 76399 30148',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'priya',
    name: 'Priya',
    verticalName: 'PRIYA',
    role: 'Front-End Developer',
    verticalTag: '*front end',
    badge: 'FRONT-END DEVELOPER & UI SPECIALIST',
    badgeCategory: 'USER INTERFACE & DESIGN',
    skills: 'React • TypeScript • UI',
    skillsList: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Modern Web', 'Figma Design'],
    specialty: 'Modern Web Interfaces, User Experience & Design Systems',
    bio: 'Passionate about building intuitive, pixel-perfect digital experiences, I engineer high-performance web interfaces that combine elegant visual design with responsive execution for seamless user experiences.',
    image: priya3d,
    color: '#EC4899',
    deptColor: '#F472B6',
    propName: 'Design Systems Palette',
    actionTitle: 'Generate Design Tokens',
    actionMessage: '✨ Glassmorphism Design System: 60 FPS Micro-Animations Active',
    actionType: 'design',
    email: 'priya@dasatech.com',
    phone: '+91 76399 30148',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'ramesh',
    name: 'Ramesh',
    verticalName: 'RAMESH',
    role: 'Back-End Developer',
    verticalTag: '*back end',
    badge: 'BACKEND & DATABASE SPECIALIST',
    badgeCategory: 'CLOUD INFRASTRUCTURE',
    skills: 'Node.js • APIs • Database',
    skillsList: ['PostgreSQL', 'Python APIs', 'Node.js Services', 'Database Design', 'Redis Cache', 'API Integration'],
    specialty: 'Database Optimization, Secure APIs & Data Reliability',
    bio: 'Responsible for our backend data systems and API integrations, I ensure server-side services operate smoothly, securely, and reliably across all applications.',
    image: ramesh3d,
    color: '#06B6D4',
    deptColor: '#22D3EE',
    propName: 'Developer Coffee Mug',
    actionTitle: 'Coffee & 50K QPS Stress Test',
    actionMessage: '☕ Sips Coffee • PostgreSQL Pool: 50,000 QPS • 0.8ms Latency',
    actionType: 'coffee',
    email: 'ramesh@dasatech.com',
    phone: '+91 76399 30148',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'kiran',
    name: 'Kiran',
    verticalName: 'KIRAN',
    role: 'Software Tester',
    verticalTag: '*qa lead',
    badge: 'QUALITY ASSURANCE & TESTING',
    badgeCategory: 'SYSTEM RELIABILITY & QA',
    skills: 'Manual QA • Automation',
    skillsList: ['Test Automation', 'Cypress', 'Performance Testing', 'API Verification', 'Security Checks', 'QA Management'],
    specialty: 'Software Testing, End-to-End QA & Quality Assurance',
    bio: 'Overseeing software quality assurance and testing workflows, I ensure every application we build meets strict reliability, performance, and user satisfaction standards before deployment.',
    image: kiran3d,
    color: '#10B981',
    deptColor: '#34D399',
    propName: 'QA Test Matrix',
    actionTitle: 'Run E2E Regression Suite',
    actionMessage: '✅ 428/428 Cypress Tests Passed • 0 Vulnerabilities Detected',
    actionType: 'qa',
    email: 'kiran@dasatech.com',
    phone: '+91 76399 30148',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'nithin',
    name: 'Nithin',
    verticalName: 'NITHIN',
    role: 'UI/UX Designer',
    verticalTag: '*ui/ux lead',
    badge: 'PRODUCT EXPERIENCE DESIGNER',
    badgeCategory: 'CREATIVE & EXPERIENCE',
    skills: 'Figma • Wireframing • UX',
    skillsList: ['Figma Design', 'Design Systems', 'UX Research', 'Prototyping', 'User Flows', 'UI Mockups'],
    specialty: 'User Experience Research, Prototyping & Interface Design',
    bio: 'Directing the user experience and visual identity across DASA TECH products, I transform business workflows into clean, simple, and user-friendly web and mobile interfaces.',
    image: nithin3d,
    color: '#F59E0B',
    deptColor: '#FBBF24',
    propName: 'Stylus & Digital Pad',
    actionTitle: 'Sketch Interactive Prototype',
    actionMessage: '🎨 Digital Wireframe Rendered • 100% User Experience Score',
    actionType: 'wireframe',
    email: 'nithin@dasatech.com',
    phone: '+91 76399 30148',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'naveenprasanth',
    name: 'Naveen Prasanth S',
    verticalName: 'NAVEEN',
    role: 'Cloud & DevOps Engineer',
    verticalTag: '*devops lead',
    badge: 'CLOUD & INFRASTRUCTURE ENGINEER',
    badgeCategory: 'DEVSECOPS & CLOUD',
    skills: 'Docker • AWS • Kubernetes',
    skillsList: ['AWS Cloud', 'Kubernetes', 'Docker', 'Cloud Automation', 'System Monitoring', 'CI/CD Pipelines'],
    specialty: 'Cloud Hosting, Automated Deployment & High Availability',
    bio: 'Managing cloud infrastructure and deployment pipelines, I ensure continuous 24/7 system availability, automated backups, and secure cloud operations for our applications.',
    image: naveen3d,
    color: '#6366F1',
    deptColor: '#818CF8',
    propName: 'Kubernetes Cluster Rig',
    actionTitle: 'Scale Kubernetes Ingress',
    actionMessage: '⚡ Multi-Region Kubernetes Auto-Scaled: 8 Pods Healthy',
    actionType: 'devops',
    email: 'naveen@dasatech.com',
    phone: '+91 76399 30148',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'vikram',
    name: 'Vikram',
    verticalName: 'VIKRAM',
    role: 'Mobile App Developer',
    verticalTag: '*mobile lead',
    badge: 'MOBILE APP SPECIALIST',
    badgeCategory: 'MOBILE ENGINEERING',
    skills: 'React Native • Flutter • iOS',
    skillsList: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Mobile UI', 'Offline Sync'],
    specialty: 'Cross-Platform Mobile Apps for iOS & Android',
    bio: 'Crafting responsive mobile applications for iOS and Android, I build fast handheld experiences that connect smoothly with backend systems and deliver great user experiences.',
    image: vikram3d,
    color: '#8B5CF6',
    deptColor: '#A855F7',
    propName: 'Smart Touchscreen Device',
    actionTitle: 'Launch Mobile Hot-Reload',
    actionMessage: '📱 React Native Bundle Synced • iOS & Android Live Stream',
    actionType: 'mobile',
    email: 'vikram@dasatech.com',
    phone: '+91 76399 30148',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'divya',
    name: 'Divya',
    verticalName: 'DIVYA',
    role: 'AI & Vision Specialist',
    verticalTag: '*ai & vision',
    badge: 'ARTIFICIAL INTELLIGENCE SPECIALIST',
    badgeCategory: 'NEURAL SYSTEMS & AI',
    skills: 'AI • Vision • OpenCV',
    skillsList: ['OpenCV', 'PyTorch', 'YOLOv8', 'Python AI', 'Automated Quality', 'TensorFlow'],
    specialty: 'AI Defect Detection, Computer Vision & Smart Inspection',
    bio: 'Specializing in artificial intelligence and computer vision systems, I design automated visual inspection models and intelligent search engines for industrial and enterprise applications.',
    image: divya3d,
    color: '#00E5FF',
    deptColor: '#38BDF8',
    propName: 'Neural Vision Pass',
    actionTitle: 'Trigger YOLOv8 Neural Scan',
    actionMessage: '👁️ Computer Vision Model: 120 FPS Inference • 99.8% Accuracy',
    actionType: 'ai',
    email: 'divya@dasatech.com',
    phone: '+91 76399 30148',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'anand',
    name: 'Anand',
    verticalName: 'ANAND',
    role: 'Automation Lead',
    verticalTag: '*automation lead',
    badge: 'INDUSTRIAL AUTOMATION LEAD',
    badgeCategory: 'SCADA & EMBEDDED SYSTEMS',
    skills: 'NFC • Embedded • IoT',
    skillsList: ['NFC Smart Tags', 'ESP32 Firmware', 'Workflow Automation', 'MQTT', 'Embedded C++', 'Sensors'],
    specialty: 'Industrial Workflow Automation, NFC Systems & Embedded Firmware',
    bio: 'Leading our industrial workflow automation projects, I engineer touchless NFC order tracking hardware and shop-floor automation systems that streamline manufacturing operations.',
    image: anand3d,
    color: '#F59E0B',
    deptColor: '#FBBF24',
    propName: 'IoT Telemetry Sensor Remote',
    actionTitle: 'Ping Industrial PLC Network',
    actionMessage: '📡 LoRaWAN 915MHz Telemetry: 14 Sensor Nodes Online',
    actionType: 'iot',
    email: 'anand@dasatech.com',
    phone: '+91 76399 30148',
    linkedin: 'https://linkedin.com'
  }
]

// ── LIVE INTERACTIVE ACTION FX OVERLAY (COFFEE STEAM, CODE RAIN, SCANNER, ETC.) ──
function LiveCharacterFX({ member, isActing }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-25 overflow-hidden">
      
      {/* 1. Ramesh: Animated Rising Coffee Steam */}
      {member.actionType === 'coffee' && (
        <div className="absolute top-[32%] left-[45%] -translate-x-1/2">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0, scale: 0.8, x: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                y: [-5, -45 - i * 10],
                scale: [0.8, 1.8],
                x: [0, (i % 2 === 0 ? 8 : -8)]
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.6,
                ease: 'easeOut'
              }}
              className="absolute w-3.5 h-3.5 rounded-full bg-white/40 blur-[3px]"
            />
          ))}
        </div>
      )}

      {/* 2. Arun: Glowing MacBook Screen Flare & Code Sparks */}
      {member.actionType === 'code' && (
        <>
          <motion.div
            animate={{ opacity: [0.4, 0.9, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute top-[30%] left-[28%] w-16 h-16 rounded-full bg-cyan-400/40 blur-xl"
          />
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-10, -50],
                x: [0, (i - 1) * 15]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.5
              }}
              className="absolute top-[32%] left-[28%] text-[10px] font-mono font-bold text-cyan-300 drop-shadow-[0_0_8px_#00E5FF]"
            >
              {`{ }`}
            </motion.div>
          ))}
        </>
      )}

      {/* 3. Divya: AI Neural Scanner Laser Line */}
      {member.actionType === 'ai' && (
        <motion.div
          animate={{
            top: ['15%', '85%', '15%'],
            opacity: [0.3, 0.9, 0.3]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_15px_#00E5FF]"
        />
      )}

      {/* 4. Anand: IoT Telemetry Radio Pulse Waves */}
      {member.actionType === 'iot' && (
        <div className="absolute top-[36%] left-[40%]">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.4, opacity: 0.8 }}
              animate={{
                scale: [0.4, 3.2],
                opacity: [0.8, 0]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.7,
                ease: 'easeOut'
              }}
              className="absolute w-8 h-8 rounded-full border border-amber-400/80 shadow-[0_0_10px_#F59E0B]"
            />
          ))}
        </div>
      )}

      {/* 5. Vikram: Smart Mobile Phone Holographic App Spark */}
      {member.actionType === 'mobile' && (
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.95, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-[26%] left-[24%] w-8 h-8 rounded-full bg-purple-500/50 blur-md shadow-[0_0_12px_#A855F7]"
        />
      )}

      {/* 6. Signature Active Action Blast Toast */}
      {isActing && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          className="absolute top-6 inset-x-6 z-40 p-3 rounded-2xl bg-black/85 border border-purple-500/50 backdrop-blur-xl shadow-[0_10px_30px_rgba(124,58,237,0.5)] text-center"
        >
          <div className="text-xs font-mono font-bold text-emerald-400 flex items-center justify-center gap-1.5 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>ACTION EXECUTED</span>
          </div>
          <div className="text-xs font-display font-semibold text-white">
            {member.actionMessage}
          </div>
        </motion.div>
      )}

    </div>
  )
}

// ── INTERACTIVE 3D SPOTLIGHT CHARACTER STAGE WITH LIVE MOTION, BREATHING & ACTION ──
function Character3DStage({ member, onPrev, onNext }) {
  const containerRef = useRef(null)
  const [isActing, setIsActing] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 180 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)
  const translateCharacterX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig)
  const shadowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [16, -16]), springConfig)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Trigger Interactive Live Action
  const triggerSignatureAction = () => {
    setIsActing(true)
    setTimeout(() => setIsActing(false), 4500)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
      className="relative w-full h-full min-h-[440px] lg:min-h-[600px] bg-[#03050E] flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 select-none group/stage"
    >
      {/* Giant Watermark 'D' Background (grustl-style typography logo backdrop) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <motion.span
          animate={{
            y: [0, -8, 0],
            rotate: [0, 0.5, -0.5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="font-orbitron font-black text-[18rem] sm:text-[25rem] lg:text-[30rem] text-white/[0.035] leading-none transform -translate-x-6 sm:-translate-x-10"
        >
          d
        </motion.span>
      </div>

      {/* Volumetric Radial Glow Behind Character */}
      <motion.div
        animate={{
          scale: isActing ? [1, 1.25, 1] : [1, 1.08, 1],
          opacity: isActing ? [0.5, 0.8, 0.5] : [0.35, 0.5, 0.35]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-80 h-80 rounded-full blur-[120px] pointer-events-none z-0"
        style={{ backgroundColor: member.color }}
      />

      {/* 3D Holographic Pedestal Floor Base */}
      <div className="absolute bottom-6 sm:bottom-8 w-64 sm:w-80 h-16 pointer-events-none z-10 flex items-center justify-center">
        {/* Outer Rotating Cybernetic Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border border-dashed border-white/20 transform scale-y-40"
        />
        <div
          className="w-full h-full rounded-full blur-md opacity-40 transform scale-y-50"
          style={{ backgroundColor: member.color }}
        />
        <motion.div
          style={{ x: shadowX }}
          className="absolute w-52 sm:w-64 h-6 rounded-full bg-black/90 blur-sm transform scale-y-40"
        />
        <div
          className="absolute inset-x-8 bottom-2 h-[2px] rounded-full opacity-60"
          style={{
            background: `radial-gradient(ellipse at center, ${member.deptColor} 0%, transparent 80%)`
          }}
        />
      </div>

      {/* Dynamic 3D Character Model with Interactive Parallax & Organic Life Breathing Motion */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateCharacterX,
          transformStyle: 'preserve-3d'
        }}
        className="relative z-20 w-full h-full max-w-[340px] sm:max-w-[380px] flex items-end justify-center pt-8 pb-5"
      >
        <motion.div
          key={member.id}
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{
            opacity: 1,
            scale: isActing ? 1.05 : 1,
            y: 0
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full flex items-end justify-center"
        >
          {/* ORGANIC CONTINUOUS LIFE BREATHING & SWAY LOOP */}
          <motion.div
            animate={{
              y: isActing ? [0, -12, 0] : [0, -6, 0],
              scaleY: [1, 1.012, 1],
              rotateZ: isActing ? [0, 1.2, -1.2, 0] : [0, 0.4, -0.4, 0]
            }}
            transition={{
              duration: isActing ? 1.2 : 3.8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="relative w-full flex items-end justify-center"
          >
            {/* Seamless Masked 3D Character Avatar (Blended into Stage with Zero Box Edges) */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] filter-none pointer-events-none"
              style={{
                maskImage: 'radial-gradient(ellipse 92% 95% at 50% 48%, black 72%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 92% 95% at 50% 48%, black 72%, transparent 100%)'
              }}
              draggable={false}
            />

            {/* Live Visual FX Overlay on Character */}
            <LiveCharacterFX member={member} isActing={isActing} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Prev / Next Spotlight Stage Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 border border-white/15 text-white hover:bg-purple-600/80 transition z-40 cursor-pointer backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95"
        aria-label="Previous Team Member"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 border border-white/15 text-white hover:bg-purple-600/80 transition z-40 cursor-pointer backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 lg:hidden"
        aria-label="Next Team Member"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

export default function FoundersAndTeamShowcase() {
  const [hoveredId, setHoveredId] = useState(null)
  const [activeProfileIndex, setActiveProfileIndex] = useState(null)
  const scrollContainerRef = useRef(null)

  const activeMember = activeProfileIndex !== null ? TEAM_MEMBERS[activeProfileIndex] : null

  const handlePrevProfile = (e) => {
    if (e) e.stopPropagation()
    setActiveProfileIndex((prev) => (prev === 0 ? TEAM_MEMBERS.length - 1 : prev - 1))
  }

  const handleNextProfile = (e) => {
    if (e) e.stopPropagation()
    setActiveProfileIndex((prev) => (prev === TEAM_MEMBERS.length - 1 ? 0 : prev + 1))
  }

  const handleScrollStrip = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  // Keyboard navigation for active modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeProfileIndex === null) return
      if (e.key === 'Escape') setActiveProfileIndex(null)
      if (e.key === 'ArrowLeft') handlePrevProfile()
      if (e.key === 'ArrowRight') handleNextProfile()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeProfileIndex])

  return (
    <section className="relative py-20 lg:py-28 bg-[#040611] text-white overflow-hidden border-t border-purple-900/30 select-none w-full">
      
      {/* Background Volumetric Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-br from-[#7C3AED]/15 via-[#3B82F6]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#00E5FF]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#C084FC] uppercase bg-purple-950/40 px-4 py-1.5 rounded-full border border-purple-500/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>OUR FAMILY &amp; TEAM LEADERSHIP</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#38BDF8]">Family</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-xl">
              Hover over any member to illuminate in full color • Click to inspect interactive 3D spotlight profile with live signature actions
            </p>
          </motion.div>

          {/* Panoramic Strip Scroll Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScrollStrip('left')}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400 text-slate-300 hover:text-white transition shadow-lg backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Scroll Strip Left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScrollStrip('right')}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400 text-slate-300 hover:text-white transition shadow-lg backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Scroll Strip Right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── GRUSTL-STYLE 3D TEAM PANORAMIC ACCORDION STRIP (SCREENSHOT 3) ── */}
        <div className="relative group/strip rounded-3xl bg-[#070A18] border border-white/10 shadow-2xl p-2.5 sm:p-3.5 overflow-hidden backdrop-blur-xl">
          
          {/* Side Floating Left Scroll Trigger */}
          <button
            onClick={() => handleScrollStrip('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3.5 rounded-2xl bg-[#0a0f26]/90 border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white shadow-2xl transition duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer backdrop-blur-md opacity-0 group-hover/strip:opacity-100"
            aria-label="Scroll Left"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Side Floating Right Scroll Trigger */}
          <button
            onClick={() => handleScrollStrip('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3.5 rounded-2xl bg-[#0a0f26]/90 border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white shadow-2xl transition duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer backdrop-blur-md opacity-0 group-hover/strip:opacity-100"
            aria-label="Scroll Right"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto scrollbar-none scroll-smooth rounded-2xl"
          >
            <div className="flex items-stretch min-w-[1950px] w-full h-[520px] sm:h-[580px] divide-x divide-white/10">
              
              {TEAM_MEMBERS.map((m, idx) => {
                const isHovered = hoveredId === m.id
                const hasActiveHover = hoveredId !== null

                // Compute Accordion Column Flex Ratio
                let flexStyle = 'flex-1'
                if (hasActiveHover) {
                  flexStyle = isHovered ? 'flex-[4.6]' : 'flex-[0.6]'
                }

                return (
                  <div
                    key={m.id}
                    onMouseEnter={() => setHoveredId(m.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setActiveProfileIndex(idx)}
                    className={`${flexStyle} min-w-[170px] h-full flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer relative group rounded-xl overflow-hidden ${
                      isHovered ? 'z-30 shadow-[0_20px_60px_rgba(124,58,237,0.45)]' : 'z-10'
                    }`}
                  >
                    {/* Full Height 3D Character Avatar Image (Head & Face fully preserved with zero clipping) */}
                    <div className="absolute inset-0 z-10 w-full h-full overflow-hidden bg-[#0a0d1f] flex items-end justify-center pt-12 sm:pt-14 pb-2">
                      <motion.img
                        animate={
                          isHovered
                            ? {
                                scale: 1.04,
                                y: 0
                              }
                            : { scale: 1, y: 0 }
                        }
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        src={m.image}
                        alt={m.name}
                        className={`w-full h-full max-h-[92%] object-contain object-bottom transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom ${
                          isHovered
                            ? 'filter-none opacity-100 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]'
                            : hasActiveHover
                            ? 'grayscale opacity-25'
                            : 'grayscale opacity-60'
                        }`}
                      />

                      {/* Left Dark Gradient Overlay for Crisp Typography Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#070A18]/90 via-[#070A18]/30 to-transparent pointer-events-none z-10" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070A18]/95 via-transparent to-[#070A18]/40 pointer-events-none z-10" />
                    </div>

                    {/* Glowing Border & Aura Accent on Hover */}
                    <div
                      className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-20 border-2 rounded-xl"
                      style={{
                        borderColor: isHovered ? m.deptColor : 'transparent',
                        boxShadow: isHovered ? `inset 0 0 60px ${m.deptColor}40` : 'none'
                      }}
                    />

                    {/* Top Vertical Tag (like grustl.com: *full stack, *front end, *qa lead) */}
                    <div className="relative z-30 pt-4 px-4 flex items-center justify-between">
                      <span
                        className={`font-mono text-[10px] sm:text-[11px] font-bold tracking-wider lowercase transition-colors duration-300 ${
                          isHovered ? 'text-[#C084FC] drop-shadow-[0_0_8px_#A855F7]' : 'text-slate-400'
                        }`}
                      >
                        {m.verticalTag}
                      </span>
                      {isHovered && (
                        <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_8px_#00E5FF]" />
                      )}
                    </div>

                    {/* Middle: Giant Bold Vertical Name Typography (like grustl.com) */}
                    <div className="relative z-30 flex-1 flex items-center pl-4 sm:pl-6">
                      <div
                        className={`font-mono font-black uppercase tracking-[0.18em] transition-all duration-500 select-none ${
                          isHovered
                            ? 'text-5xl sm:text-6xl text-white drop-shadow-[0_0_35px_rgba(168,85,247,0.9)] opacity-100 scale-105'
                            : hasActiveHover
                            ? 'text-3xl text-slate-600 opacity-30 scale-95'
                            : 'text-3xl sm:text-4xl text-slate-300/80 opacity-80 scale-100'
                        }`}
                        style={{
                          writingMode: 'vertical-rl',
                          transform: 'rotate(180deg)'
                        }}
                      >
                        {m.verticalName}
                      </div>
                    </div>

                    {/* Bottom: Quick Member Designation Card */}
                    <div className="relative z-30 pb-5 px-4 transform transition-transform duration-300">
                      <div className="text-white font-display font-bold text-sm sm:text-base leading-tight drop-shadow-md">
                        {m.name}
                      </div>
                      <div className="text-[#C084FC] font-mono text-[10.5px] font-semibold tracking-wide mt-0.5">
                        {m.role}
                      </div>
                    </div>

                  </div>
                )
              })}

            </div>
          </div>
        </div>

      </div>

      {/* ── SPOTLIGHT ACTION MODAL (EXACT ACTION AS IN SCREENSHOT 4) ── */}
      <AnimatePresence>
        {activeMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProfileIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#090C1A] border border-purple-500/30 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden text-white grid grid-cols-1 lg:grid-cols-12 min-h-[560px] max-h-[90vh]"
            >
              {/* Close Button Top Right */}
              <button
                onClick={() => setActiveProfileIndex(null)}
                className="absolute top-5 right-5 p-3 rounded-full bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:bg-white/20 transition z-50 cursor-pointer shadow-lg backdrop-blur-md"
                aria-label="Close Profile"
              >
                <X className="w-5 h-5" />
              </button>

              {/* ── LEFT COLUMN: 3D SPOTLIGHT MODEL & WATERMARK LOGO (LIKE GRUSTL SCREENSHOT 4) ── */}
              <div className="lg:col-span-6 h-full">
                <Character3DStage
                  member={activeMember}
                  onPrev={handlePrevProfile}
                  onNext={handleNextProfile}
                />
              </div>

              {/* ── RIGHT COLUMN: MEMBER SPOTLIGHT BIO & EXPERTISE DETAILS ── */}
              <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
                <div className="space-y-6">
                  
                  {/* Department Badge Capsule (like [PUBLIC RELATIONS] in Screenshot 4) */}
                  <div>
                    <span
                      className="px-4 py-1.5 rounded-lg text-xs font-mono font-bold tracking-[0.2em] uppercase inline-block shadow-lg"
                      style={{
                        backgroundColor: '#6D28D9',
                        color: '#FFFFFF',
                        border: '1px solid rgba(192, 132, 252, 0.5)'
                      }}
                    >
                      {activeMember.badgeCategory || 'CORE ENGINEERING'}
                    </span>

                    {/* Bold Character Name */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display mt-3 tracking-tight">
                      {activeMember.name}
                    </h3>
                    <div className="text-sm font-mono text-[#C084FC] font-semibold mt-1">
                      {activeMember.role}
                    </div>
                  </div>

                  {/* Personal Bio Paragraph (like Screenshot 4) */}
                  <div>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                      {activeMember.bio}
                    </p>
                  </div>

                  {/* Skills & Architecture Chips */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono text-[#C084FC] uppercase tracking-widest font-bold">
                      Skills &amp; Architecture Focus
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeMember.skillsList.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-mono font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Bar: Direct Connect + Next Member Navigation */}
                <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${activeMember.email}`}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#3B82F6] hover:opacity-90 text-white font-bold text-xs font-mono transition inline-flex items-center gap-2 shadow-lg cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact Direct</span>
                    </a>
                  </div>

                  {/* Next Member Desktop Control */}
                  <button
                    onClick={handleNextProfile}
                    className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-slate-200 hover:text-white hover:border-purple-400 transition hidden lg:inline-flex items-center gap-2 text-xs font-mono font-semibold cursor-pointer"
                  >
                    <span>Next Member</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
