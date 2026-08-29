import React, { useState, useRef } from 'react'
import { Sparkles, Linkedin, Mail, X, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../Reveal'
import Founders3DShowcase from './Founders3DShowcase'

export default function TeamShowcase3D() {
  const [hoveredId, setHoveredId] = useState(null)
  const [activeProfileIndex, setActiveProfileIndex] = useState(null)
  const scrollContainerRef = useRef(null)

  // Engineering Team Members Roster (12 Full Members)
  const teamMembers = [
    {
      id: 'arun',
      name: 'ARUN',
      verticalTag: '*ai lead',
      badge: 'AI TASK MASTER',
      role: 'Lead AI Systems Engineer',
      department: 'Artificial Intelligence & Neural Systems',
      deptColor: '#00E5FF',
      exp: '5+ Years',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      bio: 'As the AI Systems Lead at DASA TECH, I am responsible for designing real-time Computer Vision pipelines, custom domain LLMs, and edge neural network inference engines for enterprise automation.',
      skills: ['Python', 'PyTorch', 'TensorFlow', 'CUDA', 'Computer Vision', 'LLM RAG'],
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'priya',
      name: 'PRIYA',
      verticalTag: '*iot lead',
      badge: 'HARDWARE TASK MASTER',
      role: 'IoT Hardware & Firmware Lead',
      department: 'Embedded Systems & Telemetry',
      deptColor: '#10B981',
      exp: '4+ Years',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      bio: 'As the Embedded Systems & IoT Lead, I specialize in multi-layer PCB design, microcontroller firmware (STM32, ESP32), and long-range wireless sensor networks over LoRaWAN & MQTT.',
      skills: ['Custom PCB Design', 'ESP32 / STM32', 'LoRaWAN', 'MQTT Streams', 'OTA Firmware'],
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'ramesh',
      name: 'RAMESH',
      verticalTag: '*scada lead',
      badge: 'AUTOMATION TASK MASTER',
      role: 'Industrial SCADA & Automation Specialist',
      department: 'Industry 4.0 & Robotics',
      deptColor: '#F59E0B',
      exp: '6+ Years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      bio: 'As the SCADA & Industrial Automation Lead, I design ladder logic and SCADA graphics for Siemens PLCs, integrating predictive maintenance algorithms into factory floors.',
      skills: ['Siemens PLC', 'Modbus TCP', 'OPC UA', 'SCADA HMI', 'Predictive Maintenance'],
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'kiran',
      name: 'KIRAN',
      verticalTag: '*erp architect',
      badge: 'STUDIO TASK MASTER',
      role: 'Principal ERP Systems Architect',
      department: 'Enterprise Platforms & Database',
      deptColor: '#8B3CFF',
      exp: '7+ Years',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      bio: 'As the supervisor and coordinator of enterprise ERP architectures, I am responsible for ensuring our healthcare and inventory goals are met with zero-latency database sync.',
      skills: ['PostgreSQL', 'Node.js', 'React', 'GST Filing Engine', 'Distributed Database'],
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'nithin',
      name: 'NITHIN',
      verticalTag: '*qa lead',
      badge: 'QUALITY TASK MASTER',
      role: 'QA & Test Automation Lead',
      department: 'Quality Assurance & Security',
      deptColor: '#3B82F6',
      exp: '4+ Years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
      bio: 'As the Quality Assurance & Security Lead, I oversee automated regression testing, API security penetration tests, and load testing for mission-critical industrial software.',
      skills: ['Cypress', 'Jest', 'API Security Testing', 'Selenium', 'LoadRunner'],
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'surya',
      name: 'SURYA',
      verticalTag: '*ui/ux lead',
      badge: 'DESIGN TASK MASTER',
      role: 'UI / UX Lead Product Designer',
      department: 'Design & User Experience',
      deptColor: '#EC4899',
      exp: '5+ Years',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      bio: 'As the Lead Product Designer, I craft high-tech glassmorphic user interfaces, responsive design systems, and interactive 3D WebGL scenes for DASA TECH applications.',
      skills: ['Figma', 'Glassmorphism', 'Three.js / R3F', 'CSS Architecture', 'User Research'],
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'vikram',
      name: 'VIKRAM',
      verticalTag: '*devops lead',
      badge: 'DEVOPS TASK MASTER',
      role: 'Cloud Native DevOps Specialist',
      department: 'Cloud Infrastructure & DevOps',
      deptColor: '#6366F1',
      exp: '5+ Years',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
      bio: 'As the Cloud & DevOps Lead, I manage AWS/Google Cloud Kubernetes clusters, automated CI/CD deployment pipelines, and high-availability microservice infrastructure.',
      skills: ['AWS / GCP', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Terraform'],
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'ananya',
      name: 'ANANYA',
      verticalTag: '*ems architect',
      badge: 'POWER TASK MASTER',
      role: 'Lead Energy Systems & Microgrid Engineer',
      department: 'Clean Energy & Power Telemetry',
      deptColor: '#3B82F6',
      exp: '6+ Years',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
      bio: 'As Lead Energy Systems Engineer, I manage electrical single-line diagram telemetry, capacitor bank switching, harmonic distortion reduction, and microgrid power factor optimization.',
      skills: ['50Hz Telemetry', 'Microgrid Control', 'SLD Audit', 'Power Factor 0.99', 'Modbus RTU'],
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'karthik',
      name: 'KARTHIK',
      verticalTag: '*robotics lead',
      badge: 'ROBOTICS TASK MASTER',
      role: 'Lead Industrial Robotics & Motion Specialist',
      department: 'Autonomous Factory & Robotics',
      deptColor: '#F59E0B',
      exp: '5+ Years',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
      bio: 'Autonomous Factory Specialist leading multi-axis industrial robotic arms, AGV fleet navigation over ROS2, and kinematic trajectory planning for automated assembly plants.',
      skills: ['ROS2', 'Kinematic Planning', 'Industrial Motion', 'AGV Fleet Control', 'FANUC PLC'],
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'meera',
      name: 'MEERA',
      verticalTag: '*security lead',
      badge: 'CYBER TASK MASTER',
      role: 'Principal Cybersecurity & DevSecOps Lead',
      department: 'Zero-Trust Security & Encryption',
      deptColor: '#10B981',
      exp: '7+ Years',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80',
      bio: 'Principal Security Engineer managing Zero-Trust device authentication, hardware HSM cryptography, TLS 1.3 telemetry encryption, and penetration testing across enterprise platforms.',
      skills: ['TLS 1.3 Encryption', 'Hardware HSM', 'Zero-Trust Auth', 'Penetration Testing', 'OAuth2 / SAML'],
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'dinesh',
      name: 'DINESH',
      verticalTag: '*mobile lead',
      badge: 'MOBILE TASK MASTER',
      role: 'Lead Mobile Platforms Engineer',
      department: 'Mobile Apps & Smart Touch HMIs',
      deptColor: '#00E5FF',
      exp: '4+ Years',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      bio: 'Lead Mobile Architect developing cross-platform React Native and Flutter enterprise mobile apps for smart home touch controllers, pharmacy POS handhelds, and field SCADA monitors.',
      skills: ['React Native', 'Flutter', 'iOS / Android', 'Bluetooth LE', 'WebSocket Streams'],
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'shweta',
      name: 'SHWETA',
      verticalTag: '*data lead',
      badge: 'DATA TASK MASTER',
      role: 'Lead Data Engineer & Analytics Specialist',
      department: 'Enterprise Big Data & Analytics',
      deptColor: '#8B3CFF',
      exp: '5+ Years',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
      bio: 'Lead Data Architect designing high-throughput Apache Kafka streaming pipelines, ClickHouse time-series analytics, and automated ERP financial forecasting dashboards.',
      skills: ['Apache Kafka', 'ClickHouse', 'Python Pandas', 'Snowflake', 'Time-Series Analytics'],
      linkedin: 'https://linkedin.com'
    }
  ]

  const activeMember = activeProfileIndex !== null ? teamMembers[activeProfileIndex] : null

  const handlePrevProfile = () => {
    setActiveProfileIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))
  }

  const handleNextProfile = () => {
    setActiveProfileIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))
  }

  const handleScrollStrip = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-28 bg-[#05070F] text-white overflow-hidden border-t border-purple-900/30">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-mono mb-3 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>EXECUTIVE LEADERSHIP &amp; ENGINEERING DIVISIONS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
                Our <span className="text-gradient">Engineering Team</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm font-mono mt-2 font-semibold">
                Hover over any column to reveal full color &amp; expand • Click to open detail profile panel
              </p>
            </div>

            {/* Panoramic Strip Scroll Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleScrollStrip('left')}
                className="p-3.5 rounded-2xl glass bg-[#090D1A]/90 border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-white transition shadow-lg"
                aria-label="Scroll Strip Left"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScrollStrip('right')}
                className="p-3.5 rounded-2xl glass bg-[#090D1A]/90 border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-white transition shadow-lg"
                aria-label="Scroll Strip Right"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* ACCORDION STRIP WITH FLOATING BOTH-SIDES SCROLL BUTTONS */}
        <div className="relative group/strip">

          {/* Left Floating Side Scroll Button (Left to Right) */}
          <button
            onClick={() => handleScrollStrip('left')}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-50 p-4 rounded-2xl glass bg-[#090D1A]/95 border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-white shadow-2xl transition duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
            aria-label="Scroll Strip Left"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Right Floating Side Scroll Button (Right to Left) */}
          <button
            onClick={() => handleScrollStrip('right')}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-50 p-4 rounded-2xl glass bg-[#090D1A]/95 border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-white shadow-2xl transition duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
            aria-label="Scroll Strip Right"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="w-full rounded-3xl bg-[#03050B] border border-purple-500/30 shadow-2xl overflow-x-auto scrollbar-none scroll-smooth p-3"
            style={{ perspective: '1200px' }}
          >
            <div className="flex items-stretch min-w-[2260px] w-full h-[580px] divide-x divide-purple-900/40">
              
              {teamMembers.map((m, idx) => {
                const isHovered = hoveredId === m.id
                const hasActiveHover = hoveredId !== null

                // Compute Accordion Column Flex Ratio
                let flexStyle = 'flex-1'
                if (hasActiveHover) {
                  flexStyle = isHovered ? 'flex-[4.8]' : 'flex-[0.55]'
                }

                return (
                  <div
                    key={m.id}
                    onMouseEnter={() => setHoveredId(m.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setActiveProfileIndex(idx)}
                    className={`${flexStyle} min-w-[180px] h-full flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer relative group rounded-2xl overflow-hidden ${
                      isHovered ? 'z-40 shadow-[0_20px_50px_rgba(139,60,255,0.5)]' : 'z-10'
                    }`}
                  >
                    {/* FULL-HEIGHT & FULL-WIDTH REAL EXECUTIVE PORTRAIT PHOTO */}
                    <div className="absolute inset-0 z-10 w-full h-full overflow-hidden">
                      <img
                        src={m.image}
                        alt={m.name}
                        className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                          isHovered
                            ? 'filter-none opacity-100 scale-110 drop-shadow-[0_0_30px_rgba(139,60,255,0.8)]'
                            : hasActiveHover
                            ? 'grayscale opacity-35 scale-95 blur-[0.3px]'
                            : 'grayscale opacity-65 scale-100'
                        }`}
                      />

                      {/* Left Dark Gradient Overlay for Crisp Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none z-10"></div>
                    </div>

                    {/* Glowing Border Accent on Hover */}
                    <div
                      className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-20 border-2 rounded-2xl"
                      style={{
                        borderColor: isHovered ? m.deptColor : 'transparent',
                        boxShadow: isHovered ? `inset 0 0 60px ${m.deptColor}50` : 'none'
                      }}
                    ></div>

                    {/* GIANT BOLD VERTICAL NAME TYPOGRAPHY OVERLAID ON LEFT SIDE OF IMAGE */}
                    <div
                      className={`font-mono font-extrabold uppercase tracking-widest transition-all duration-500 select-none z-30 pl-5 sm:pl-7 ${
                        isHovered
                          ? 'text-6xl sm:text-7xl text-white drop-shadow-[0_0_40px_rgba(139,60,255,1)] opacity-100 scale-110'
                          : hasActiveHover
                          ? 'text-3xl text-slate-500 opacity-40 scale-95'
                          : 'text-4xl text-slate-200 opacity-90 scale-100'
                      }`}
                      style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)'
                      }}
                    >
                      {m.name}
                    </div>

                  </div>
                )
              })}

            </div>
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* SECTION 2: 10X CO-FOUNDERS 3D HOLOGRAPHIC SHOWCASE        */}
      {/* ========================================================= */}
      <Founders3DShowcase />

      {/* ========================================================= */}
      {/* FULL-SCREEN CLICK DETAIL VIEW MODAL                       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/95 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl h-[85vh] glass rounded-3xl border border-purple-500/30 shadow-2xl bg-[#090D1A] overflow-hidden text-white grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Close Button Top Right */}
              <button
                onClick={() => setActiveProfileIndex(null)}
                className="absolute top-6 right-6 p-3 rounded-full glass border border-purple-500/30 text-slate-400 hover:text-white hover:border-purple-400 transition z-30"
                aria-label="Close Profile"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Full-Height Real Portrait Image */}
              <div className="lg:col-span-6 h-full relative bg-[#05070F] flex items-center justify-center border-r border-purple-900/40 overflow-hidden">
                <img
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070F] via-transparent to-transparent"></div>

                {/* Left/Right Navigation Arrows */}
                <button
                  onClick={handlePrevProfile}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full glass border border-purple-500/30 text-white hover:border-purple-400 transition z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextProfile}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full glass border border-purple-500/30 text-white hover:border-purple-400 transition z-20 lg:hidden"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Right Column: Member Profile Details */}
              <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-6">
                  {/* Department Badge Pill */}
                  <div>
                    <span
                      className="px-4 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase inline-block mb-4"
                      style={{
                        color: '#FFFFFF',
                        backgroundColor: `${activeMember.deptColor}40`,
                        border: `1px solid ${activeMember.deptColor}80`
                      }}
                    >
                      {activeMember.badge}
                    </span>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2 font-display">
                      {activeMember.name}
                    </h2>
                    <div className="text-sm font-mono text-purple-400 font-semibold">
                      {activeMember.role}
                    </div>
                  </div>

                  {/* Professional Description */}
                  <div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {activeMember.bio}
                    </p>
                  </div>

                  {/* Experience & Skills */}
                  <div>
                    <div className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3">
                      Skills & Expertise
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeMember.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs font-mono font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Navigation Bar in Modal */}
                <div className="pt-6 border-t border-purple-900/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a
                      href={activeMember.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#52058C] via-[#7B1FA2] to-[#8B3CFF] hover:opacity-95 text-white font-semibold text-xs font-mono transition inline-flex items-center gap-2 shadow-lg shadow-purple-900/30"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>

                  {/* Desktop Right Arrow for Next Member */}
                  <button
                    onClick={handleNextProfile}
                    className="p-3 rounded-full glass border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 transition hidden lg:flex items-center gap-2 text-xs font-mono"
                  >
                    <span>Next Member</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
