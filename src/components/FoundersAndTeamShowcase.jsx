import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  Mail,
  Phone,
  Linkedin,
  ShieldCheck,
  Zap,
  Layers,
  Award,
  Cpu,
  Database,
  CheckCircle2,
  Copy,
  Check,
  Activity,
  Shield
} from 'lucide-react'
import { Link } from './Router.jsx'
import SignalBrandIcon from './SignalBrandIcon'

// Local High-Definition 3D Character Avatars
import jeyawin3d from '../assets/team-3d/jeyawin.jpg'
import founderSoloImg from '../assets/team-3d/founder-jeyawin.png'
import founderTransparentImg from '../assets/team-3d/founder-jeyawin-transparent.png'
import mithul3d from '../assets/team-3d/mithul.jpg'
import arun3d from '../assets/team-3d/arun.jpg'
import akash3d from '../assets/team-3d/akash.jpg'
import priya3d from '../assets/team-3d/priya.jpg'
import ramesh3d from '../assets/team-3d/ramesh.jpg'
import divya3d from '../assets/team-3d/divya.jpg'
import vikram3d from '../assets/team-3d/vikram.jpg'
import nithin3d from '../assets/team-3d/nithin.jpg'
import naveen3d from '../assets/team-3d/naveen.jpg'
import kiran3d from '../assets/team-3d/kiran.jpg'
import anand3d from '../assets/team-3d/anand.jpg'
import karthick3d from '../assets/team-3d/karthick.jpg'
import rubitha3d from '../assets/team-3d/rubitha.jpg'

// Team & Family Members Dataset (Stylized 3D Avatars with Signature Live Actions)
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
    signal: 'dasatech.99',
    linkedin: 'https://www.linkedin.com/in/jeyawin-d/'
  },
  {
    id: 'karthick',
    name: 'Karthick',
    verticalName: 'KARTHICK',
    role: 'IOT',
    verticalTag: '*IOT',
    badge: 'IOT',
    badgeCategory: 'EXECUTIVE LEADERSHIP',
    skills: 'Automation • IoT • Hardware',
    skillsList: ['Industrial Automation', 'IoT Architecture', 'Smart Factory Systems', 'Embedded Hardware', 'NFC Production Workflows', 'Robotics & PLC'],
    specialty: 'Industrial Automation, Smart Factory Systems & Embedded IoT',
    bio: 'Director at Nexomatic and strategic collaborator with DASA TECH. Leading intelligent industrial automation, smart robotics, and connected hardware solutions, bridging software architectures with physical production lines.',
    image: karthick3d,
    color: '#10B981',
    deptColor: '#34D399',
    propName: 'Industrial PLC Controller',
    actionTitle: 'Factory Automation Sync',
    actionMessage: '⚙️ Nexomatic Automation Core: Synced • PLC & Sensor Telemetry Active',
    actionType: 'iot',
    email: 'contact@nexomatic.in',
    signal: 'dasatech.99',
    linkedin: 'https://nexomatic.in'
  },
  {
    id: 'mithul',
    name: 'Mithul Pranav K K',
    verticalName: 'MITHUL',
    role: 'Full Stack Developer',
    verticalTag: '*full stack',
    badge: 'FULL STACK SOFTWARE ENGINEER',
    badgeCategory: 'ENGINEERING & ARCHITECTURE',
    skills: 'React • Node.js • Cloud',
    skillsList: ['React.js', 'Next.js', 'Node.js Core', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST & GraphQL APIs', 'Tailwind CSS'],
    specialty: 'Full Stack Web Architecture, Responsive UIs & High-Performance APIs',
    bio: 'Specializing in end-to-end full stack software development, I architect scalable web applications, robust backend microservices, and modern responsive frontends. Focused on clean system design, fast database queries, and seamless user experiences from concept to cloud deployment.',
    image: mithul3d,
    color: '#0284C7',
    deptColor: '#38BDF8',
    propName: 'Full Stack IDE Terminal',
    actionTitle: 'Compile Full-Stack Microservices',
    actionMessage: '🚀 Full-Stack Cluster Synchronized • API Gateway & Frontend Active',
    actionType: 'code',
    email: 'mithul@dasatech.com',
    signal: 'dasatech.99',
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
    signal: 'dasatech.99',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'akash',
    name: 'Akash AR',
    verticalName: 'AKASH',
    role: 'Full Stack Developer',
    verticalTag: '*full stack',
    badge: 'FULL STACK SYSTEMS DEVELOPER',
    badgeCategory: 'ENGINEERING & ARCHITECTURE',
    skills: 'React • Node.js • Cloud',
    skillsList: ['React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'Express', 'Cloud APIs', 'Tailwind CSS', 'Docker'],
    specialty: 'Full Stack Engineering, Scalable Web Applications & Cloud APIs',
    bio: 'Focused on developing resilient full-stack web architectures, I engineer high-speed backend services, seamless database integrations, and elegant frontend interfaces designed for optimal performance and user engagement.',
    image: akash3d,
    color: '#2563EB',
    deptColor: '#60A5FA',
    propName: 'MacBook Pro & Cloud Suite',
    actionTitle: 'Deploy Web & Cloud Services',
    actionMessage: '🚀 Cloud Microservices Deployed • Database Connection Stable',
    actionType: 'code',
    email: 'akash@dasatech.com',
    signal: 'dasatech.99',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'rubitha',
    name: 'Rubitha',
    verticalName: 'RUBITHA',
    role: 'Full-Stack Developer',
    verticalTag: '*full stack',
    badge: 'FULL STACK ARCHITECT & ENGINEER',
    badgeCategory: 'ENGINEERING & ARCHITECTURE',
    skills: 'Full Stack • Web • APIs',
    skillsList: ['Scalable Web Apps', 'Frontend UI', 'Backend Architecture', 'React.js', 'Node.js Core', 'Database Optimization', 'High-Performance APIs', 'Clean Code'],
    specialty: 'Scalable Web Applications, Frontend UI & Backend Architecture',
    bio: 'Full-Stack Developer specialized in building scalable web applications from frontend UI to backend architecture. Passionate about translating complex business logic into clean, efficient, and high-performance code.',
    image: rubitha3d,
    color: '#E11D48',
    deptColor: '#FB7185',
    propName: 'Developer Tablet & Cloud Suite',
    actionTitle: 'Deploy Web Architecture & Logic',
    actionMessage: '🚀 Scalable Web Application Active • Clean Architecture & High Performance',
    actionType: 'code',
    email: 'rubitha@dasatech.com',
    signal: 'dasatech.99',
    linkedin: 'https://linkedin.com'
  },
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
  const [copiedSignal, setCopiedSignal] = useState(false)

  const handleCopySignal = (e) => {
    e.preventDefault()
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('dasatech.99')
      setCopiedSignal(true)
      setTimeout(() => setCopiedSignal(false), 2200)
    }
  }

  const ARCHITECTURE_PILLARS = [
    {
      icon: Database,
      title: 'Distributed Multi-Branch ERP',
      desc: 'Sub-50ms query latency across multi-location inventories, consolidated GST ledgers, and live branch synchronization.',
      color: 'from-amber-500/15 via-amber-500/5 to-transparent',
      border: 'border-amber-500/30',
      iconColor: 'text-amber-400'
    },
    {
      icon: ShieldCheck,
      title: '100% Client Code Sovereignty',
      desc: 'Zero proprietary vendor lock-in. Full source code handover, private encrypted database schema, and dedicated hosting.',
      color: 'from-orange-500/15 via-orange-500/5 to-transparent',
      border: 'border-orange-500/30',
      iconColor: 'text-orange-400'
    },
    {
      icon: Cpu,
      title: 'Industrial SCADA & Edge IoT',
      desc: 'Direct industrial protocol bridges (Modbus, RS-485, Sub-GHz mesh) streaming machine telemetry directly into enterprise software.',
      color: 'from-rose-500/15 via-rose-500/5 to-transparent',
      border: 'border-rose-500/30',
      iconColor: 'text-rose-400'
    },
    {
      icon: Activity,
      title: 'Direct Architectural Oversight',
      desc: 'No account-manager barriers. Direct technical collaboration with Founder & Systems Architect Jeyawin D from scoping through rollout.',
      color: 'from-amber-500/15 via-rose-500/5 to-transparent',
      border: 'border-amber-500/30',
      iconColor: 'text-amber-300'
    }
  ]

  const STATS = [
    { value: '99.99%', label: 'Systems Availability Target' },
    { value: '100%', label: 'Client IP Sovereignty' },
    { value: '< 50ms', label: 'Database Query Velocity' },
    { value: 'Direct', label: 'Founding Engineer Access' }
  ]

  return (
    <section className="relative py-20 lg:py-28 bg-[#0B0813] text-white overflow-hidden border-y border-amber-500/20 select-none w-full">
      {/* Background Volumetric Luxury Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-amber-500/15 via-orange-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-gradient-to-tl from-rose-600/15 via-amber-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Luxury Micro-Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #EA580C 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Executive Narrative & Architectural Pillars */}
          <div className="lg:col-span-7 space-y-8">

            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/10 border border-amber-500/30 text-amber-300 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
              <span className="font-mono text-xs font-bold tracking-wider uppercase">
                FOUNDER &amp; CHIEF EXECUTIVE OFFICER &bull; LEAD SYSTEMS ARCHITECT
              </span>
            </motion.div>

            {/* Main Executive Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="text-xs font-mono font-bold tracking-widest text-amber-400/90 uppercase">
                Executive Leadership &amp; Engineering Philosophy
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-[50px] text-white tracking-tight leading-[1.12]">
                Engineering High-Concurrency Systems{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500">
                  With Relentless Precision.
                </span>
              </h2>
            </motion.div>

            {/* Authoritative Executive Biography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal"
            >
              <p>
                Founded in 2025 by <strong className="text-white font-semibold">Jeyawin D</strong>, DASA TECH operates on an uncompromising engineering mandate: enterprise software must be fast, resilient, transparent, and 100% owned by the enterprise. Serving industrial manufacturers, multi-branch retail conglomerates, and institutional organizations across South India, Jeyawin architects every system from first principles.
              </p>
              <p className="text-slate-400">
                Rejecting bloated templates and proprietary vendor lock-in, he directs high-throughput database schemas, distributed multi-tenant ERP platforms, and edge IoT SCADA integrations. When organizations partner with DASA TECH, they work directly with senior systems architects who understand both machine-level hardware protocols and board-level business outcomes.
              </p>
            </motion.div>

            {/* 4 Architectural Pillars Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1"
            >
              {ARCHITECTURE_PILLARS.map((p, idx) => {
                const Icon = p.icon
                return (
                  <div
                    key={idx}
                    className={"p-4 sm:p-5 rounded-2xl bg-gradient-to-br " + p.color + " border " + p.border + " backdrop-blur-sm transition-all duration-300 hover:border-amber-400/60 hover:scale-[1.01]"}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-white/10 border border-white/10 shrink-0">
                        <Icon className={"w-4 h-4 " + p.iconColor} />
                      </div>
                      <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-tight">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                )
              })}
            </motion.div>

            {/* Key Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1"
            >
              {STATS.map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="font-orbitron font-black text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Direct Connect Action Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Schedule Executive Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button
                onClick={handleCopySignal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-amber-500/30 hover:border-amber-400 text-amber-200 hover:text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-md cursor-pointer"
                title="Click to copy Signal ID"
              >
                <SignalBrandIcon className="w-4 h-4 text-amber-400" />
                <span>Signal: @dasatech.99</span>
                {copiedSignal ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                )}
              </button>

              <a
                href="https://www.linkedin.com/in/jeyawin-d/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 text-slate-300 hover:text-white font-mono text-xs transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Solo Founder Executive Portrait Stage */}
          <div className="lg:col-span-5 flex flex-col items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] mx-auto flex flex-col items-center"
            >

              {/* Luxury Ambient Halo Stage Behind Founder */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[380px] h-[340px] sm:h-[380px] rounded-full bg-gradient-to-tr from-amber-500/25 via-orange-500/20 to-rose-600/25 blur-3xl pointer-events-none" />

              {/* Concentric Thin Luxury Geometric Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[360px] h-[320px] sm:h-[360px] rounded-full border border-amber-500/20 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[370px] sm:w-[410px] h-[370px] sm:h-[410px] rounded-full border border-orange-500/15 border-dashed pointer-events-none" />

              {/* Floating Executive Pill (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-6 -right-2 sm:-right-4 z-30 px-3.5 py-2 rounded-2xl bg-[#140E20]/90 border border-amber-500/40 shadow-xl backdrop-blur-md flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider">
                    SYSTEMS ARCHITECT
                  </div>
                  <div className="text-[11px] font-semibold text-white">
                    Cloud Core &amp; Custom ERP
                  </div>
                </div>
              </motion.div>

              {/* Floating Sovereignty Pill (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-32 -left-2 sm:-left-4 z-30 px-3.5 py-2 rounded-2xl bg-[#140E20]/90 border border-orange-500/40 shadow-xl backdrop-blur-md flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-mono font-bold text-orange-300 uppercase tracking-wider">
                    IP SOVEREIGNTY
                  </div>
                  <div className="text-[11px] font-semibold text-white">
                    100% Client Code Ownership
                  </div>
                </div>
              </motion.div>

              {/* Clean Transparent 3D Avatar (ZERO DT WATERMARK) */}
              <div className="relative z-20 w-full flex items-center justify-center pt-4">
                <img
                  src={founderTransparentImg}
                  alt="Jeyawin D - Founder & CEO, Systems Architect at DASA TECH"
                  className="w-auto h-[400px] sm:h-[460px] lg:h-[500px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] filter-none select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Luxury Pedestal Base Glow Line */}
              <div className="w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-amber-500 to-transparent blur-[1px] -mt-1 relative z-20" />

              {/* Executive Credentials Plaque */}
              <div className="w-full text-center mt-4 p-4 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-amber-500/25 shadow-xl backdrop-blur-md relative z-20">
                <div className="font-orbitron font-black text-2xl sm:text-3xl text-white tracking-wider">
                  JEYAWIN D
                </div>
                <div className="font-mono text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 tracking-widest uppercase mt-1">
                  FOUNDER &amp; CHIEF EXECUTIVE OFFICER
                </div>
                <div className="text-xs text-slate-400 font-mono mt-1">
                  Lead Systems Architect &bull; DASA TECH Corporation
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
