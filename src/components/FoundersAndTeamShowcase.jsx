import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react'
import { Link } from './Router.jsx'
import naveenimg from '../assets/team-image/naveen-profile.png'


// Team & Family Members Dataset (10 Total Members)
export const TEAM_MEMBERS = [
  {
    id: 'arun',
    name: 'Arun',
    role: 'Full Stack Developer',
    badge: 'FULL STACK SYSTEMS ENGINEER',
    skills: 'React • Node.js • APIs',
    skillsList: ['React 18', 'Node.js Core', 'PostgreSQL', 'Redis Caching', 'GraphQL APIs', 'Docker'],
    specialty: 'React Architecture, Distributed Node.js & Microservices',
    bio: 'Leading our core full-stack application development, I specialize in crafting high-concurrency Node.js services and responsive, low-latency React web frontends. Focused on clean modular code, sub-millisecond database queries, and seamless REST/GraphQL API integration, I drive our flagship software products from conception to deployment.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85',
    offsetY: 'translate-y-0',
    initial: 'A',
    badgeColor: 'bg-[#2563EB]',
    email: 'arun@dasatech.com',
    phone: '+91 76399 30148'
  },
  {
    id: 'jeyawin',
    name: 'Jeyawin D',
    role: 'Founder & CEO',
    badge: 'FOUNDER & CEO',
    skills: 'System Arch • ERP • Cloud',
    skillsList: ['System Architecture', 'Custom ERP', 'Cloud Infrastructure', 'IoT Solutions', 'Business Automation', 'Strategic Leadership'],
    specialty: 'System Architecture, Enterprise ERP & Cloud Systems',
    bio: 'As Founder and CEO of DASA TECH, I lead our enterprise systems architecture and software strategy. With extensive experience across cloud platforms, custom ERPs, and digital solutions, I ensure our software delivers high performance, accuracy, and operational efficiency for our clients.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    offsetY: 'translate-y-6 sm:translate-y-8',
    initial: 'J',
    badgeColor: 'bg-[#6D28D9]',
    email: 'dasatechmu@gmail.com',
    phone: '+91 76399 30148'
  },
  {
    id: 'priya',
    name: 'Priya',
    role: 'Front-End Developer',
    badge: 'FRONT-END DEVELOPER & UI SPECIALIST',
    skills: 'React • TypeScript • UI',
    skillsList: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Modern Web', 'Figma Design'],
    specialty: 'Modern Web Interfaces, User Experience & Design Systems',
    bio: 'Passionate about building intuitive, pixel-perfect digital experiences, I engineer high-performance web interfaces that combine elegant visual design with responsive execution for seamless user experiences.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
    offsetY: '-translate-y-3 sm:-translate-y-5',
    initial: 'P',
    badgeColor: 'bg-[#7C3AED]',
    email: 'priya@dasatech.com',
    phone: '+91 76399 30148'
  },
  {
    id: 'ramesh',
    name: 'Ramesh',
    role: 'Back-End Developer',
    badge: 'BACKEND & DATABASE SPECIALIST',
    skills: 'Node.js • APIs • Database',
    skillsList: ['PostgreSQL', 'Python APIs', 'Node.js Services', 'Database Design', 'Redis Cache', 'API Integration'],
    specialty: 'Database Optimization, Secure APIs & Data Reliability',
    bio: 'Responsible for our backend data systems and API integrations, I ensure server-side services operate smoothly, securely, and reliably across all applications.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
    offsetY: 'translate-y-4 sm:translate-y-6',
    initial: 'R',
    badgeColor: 'bg-[#0284C7]',
    email: 'ramesh@dasatech.com',
    phone: '+91 76399 30148'
  },
  {
    id: 'kiran',
    name: 'Kiran',
    role: 'Software Tester',
    badge: 'QUALITY ASSURANCE & TESTING',
    skills: 'Manual QA • Automation',
    skillsList: ['Test Automation', 'Cypress', 'Performance Testing', 'API Verification', 'Security Checks', 'QA Management'],
    specialty: 'Software Testing, End-to-End QA & Quality Assurance',
    bio: 'Overseeing software quality assurance and testing workflows, I ensure every application we build meets strict reliability, performance, and user satisfaction standards before deployment.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
    offsetY: '-translate-y-2 sm:-translate-y-4',
    initial: 'K',
    badgeColor: 'bg-[#2D6A5D]',
    email: 'kiran@dasatech.com',
    phone: '+91 76399 30148'
  },
  {
    id: 'nithin',
    name: 'Nithin',
    role: 'UI/UX Designer',
    badge: 'PRODUCT EXPERIENCE DESIGNER',
    skills: 'Figma • Wireframing • UX',
    skillsList: ['Figma Design', 'Design Systems', 'UX Research', 'Prototyping', 'User Flows', 'UI Mockups'],
    specialty: 'User Experience Research, Prototyping & Interface Design',
    bio: 'Directing the user experience and visual identity across DASA TECH products, I transform business workflows into clean, simple, and user-friendly web and mobile interfaces.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=85',
    offsetY: 'translate-y-5 sm:translate-y-8',
    initial: 'N',
    badgeColor: 'bg-[#D97706]',
    email: 'nithin@dasatech.com',
    phone: '+91 76399 30148'
  },
  {
    id: 'naveenprasanth',
    name: 'Naveen Prasanth S',
    role: 'Cloud & DevOps Engineer',
    badge: 'CLOUD & INFRASTRUCTURE ENGINEER',
    skills: 'Docker • AWS • Kubernetes',
    skillsList: ['AWS Cloud', 'Kubernetes', 'Docker', 'Cloud Automation', 'System Monitoring', 'CI/CD Pipelines'],
    specialty: 'Cloud Hosting, Automated Deployment & High Availability',
    bio: 'Managing cloud infrastructure and deployment pipelines, I ensure continuous 24/7 system availability, automated backups, and secure cloud operations for our applications.',
    image: naveenimg,
    offsetY: '-translate-y-3 sm:-translate-y-5',
    initial: 'S',
    badgeColor: 'bg-[#059669]',
    email: 'surya@dasatech.com',
    phone: '+91 76399 30148'
  },
  {
    id: 'vikram',
    name: 'Vikram',
    role: 'Mobile App Developer',
    badge: 'MOBILE APP SPECIALIST',
    skills: 'React Native • Flutter • iOS',
    skillsList: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Mobile UI', 'Offline Sync'],
    specialty: 'Cross-Platform Mobile Apps for iOS & Android',
    bio: 'Crafting responsive mobile applications for iOS and Android, I build fast handheld experiences that connect smoothly with backend systems and deliver great user experiences.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85',
    offsetY: 'translate-y-4 sm:translate-y-6',
    initial: 'V',
    badgeColor: 'bg-[#6D28D9]',
    email: 'vikram@dasatech.com',
    phone: '+91 76399 30148'
  },
  {
    id: 'divya',
    name: 'Divya',
    role: 'AI & Vision Specialist',
    badge: 'ARTIFICIAL INTELLIGENCE SPECIALIST',
    skills: 'AI • Vision • OpenCV',
    skillsList: ['OpenCV', 'PyTorch', 'YOLOv8', 'Python AI', 'Automated Quality', 'TensorFlow'],
    specialty: 'AI Defect Detection, Computer Vision & Smart Inspection',
    bio: 'Specializing in artificial intelligence and computer vision systems, I design automated visual inspection models and intelligent search engines for industrial and enterprise applications.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=85',
    offsetY: '-translate-y-2 sm:-translate-y-4',
    initial: 'D',
    badgeColor: 'bg-[#8B5CF6]',
    email: 'divya@dasatech.com',
    phone: '+91 76399 30148'
  },
  {
    id: 'anand',
    name: 'Anand',
    role: 'Automation Lead',
    badge: 'INDUSTRIAL AUTOMATION LEAD',
    skills: 'NFC • Embedded • IoT',
    skillsList: ['NFC Smart Tags', 'ESP32 Firmware', 'Workflow Automation', 'MQTT', 'Embedded C++', 'Sensors'],
    specialty: 'Industrial Workflow Automation, NFC Systems & Embedded Firmware',
    bio: 'Leading our industrial workflow automation projects, I engineer touchless NFC order tracking hardware and shop-floor automation systems that streamline manufacturing operations.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85',
    offsetY: 'translate-y-3 sm:translate-y-5',
    initial: 'A',
    badgeColor: 'bg-[#D97706]',
    email: 'anand@dasatech.com',
    phone: '+91 76399 30148'
  }
]

export default function FoundersAndTeamShowcase() {
  const scrollRef = useRef(null)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const isDraggingRef = useRef(false)

  // 1. Mouse Drag-to-Scroll Handlers (Purely Direct Drag/Swipe Interaction)
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return
    setIsMouseDown(true)
    isDraggingRef.current = false
    startXRef.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeftRef.current = scrollRef.current.scrollLeft
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = (e) => {
    if (!isMouseDown || !scrollRef.current) return
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startXRef.current) * 1.5
    if (Math.abs(walk) > 5) {
      isDraggingRef.current = true
    }
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk
  }

  const handleCardClick = (e) => {
    if (isDraggingRef.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-white text-[#17131F] relative overflow-hidden border-t border-[#E9E2F5] select-none w-full">
      
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-br from-[#EDE9FE]/50 via-[#F3E8FF]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header Container with Navigation Controls */}
      <div className="max-w-4xl mx-auto px-6 text-center space-y-3 relative z-10 mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#6D28D9] uppercase bg-[#F7F3FF] px-4 py-1.5 rounded-full border border-[#DDD0FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR FAMILY &amp; TEAM LEADERSHIP</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#17131F] tracking-tight leading-[1.18] pb-1">
            Our <span className="text-color-shift">Family</span>
          </h2>
        </motion.div>
      </div>

      {/* ── HORIZONTALLY SCROLLABLE FAMILY GALLERY (MOUSE WHEEL / DRAG INTERACTION) ── */}
      <div className="w-full relative z-10 py-6 overflow-hidden">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex items-center gap-3 sm:gap-4 md:gap-5 overflow-x-auto scrollbar-none px-6 sm:px-12 md:px-16 py-4 transition-all duration-200 ${
            isMouseDown ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
          style={{
            scrollBehavior: isMouseDown ? 'auto' : 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {TEAM_MEMBERS.map((member, idx) => {
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`relative shrink-0 w-[180px] sm:w-[210px] md:w-[230px] lg:w-[245px] transition-all duration-500 z-10 ${member.offsetY}`}
              >
                {/* Stadium Pill Capsule Card with Link to Detail Page */}
                <Link
                  to={`/team/${member.id}`}
                  onClick={handleCardClick}
                  className="group block w-full h-[340px] sm:h-[400px] md:h-[450px] lg:h-[490px] rounded-[999px] overflow-hidden border-3 sm:border-4 border-white hover:border-[#7C3AED] bg-[#0F0B18] shadow-xl hover:shadow-2xl hover:shadow-[#7C3AED]/30 hover:-translate-y-3 transition-all duration-500 ease-out relative cursor-pointer select-none"
                >
                  {/* Full Height Portrait Photo with Subtle Zoom on Hover (1.06x) */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-106 transition-transform duration-700 ease-out"
                    draggable={false}
                  />

                  {/* Normal Ambient Gradient Base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A14]/85 via-[#0D0A14]/20 to-transparent pointer-events-none" />

                  {/* Hover Rising Gradient Layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A14]/95 via-[#0D0A14]/75 via-45% to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* ── UNIFIED FIXED CONTENT CONTAINER (IDENTICAL FOR ALL MEMBERS) ── */}
                  <div className="absolute inset-x-0 bottom-0 w-full flex flex-col items-center justify-end text-center pointer-events-none z-10 px-2 sm:px-3 lg:px-4 pb-7 sm:pb-9 lg:pb-11">
                    
                    {/* Inner Content Block: Shifts up into the exact same anchor position on hover */}
                    <div className="w-full flex flex-col items-center justify-center text-center transform transition-transform duration-400 ease-out group-hover:-translate-y-2 sm:group-hover:-translate-y-4">
                      
                      {/* 1. Member Name (Always perfectly centered) */}
                      <h3 className="font-display font-black text-sm sm:text-base lg:text-lg text-white drop-shadow-md leading-tight text-center w-full px-1">
                        {member.name}
                      </h3>

                      {/* 2. Expanding Detail Block (Fixed Spacing: Divider → Designation → Skills) */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-400 ease-out w-full">
                        <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 flex flex-col items-center justify-center text-center w-full">
                          
                          {/* 2a. Purple Divider (Exact equal vertical spacing) */}
                          <div className="w-8 sm:w-10 h-[2px] bg-gradient-to-r from-transparent via-[#A855F7] to-transparent mx-auto mt-2 mb-1.5 shrink-0" />

                          {/* 2b. Designation / Role (Fixed min-height so 1-line and 2-line roles align identically) */}
                          <div className="min-h-[2rem] sm:min-h-[2.25rem] flex items-center justify-center w-full px-1">
                            <p className="font-display font-bold text-[11px] sm:text-xs lg:text-[13px] text-[#E9D5FF] leading-snug text-center w-full">
                              {member.role}
                            </p>
                          </div>

                          {/* 2c. Skills (Equal spacing, guaranteed clearance from bottom arc) */}
                          <p className="font-mono text-[8px] sm:text-[9px] lg:text-[10px] text-[#C4B5FD]/90 tracking-wider uppercase mt-1 leading-tight text-center w-full px-1">
                            {member.skills}
                          </p>

                        </div>
                      </div>

                    </div>

                  </div>

                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>

    </section>
  )
}
