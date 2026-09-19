import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, ChevronRight, Check, Zap, RotateCw,
  Home, Users, UserCheck, CreditCard, BarChart2, Mail,
  ShieldCheck, Smartphone, BarChart3, BookOpen,
  FileText, CalendarCheck, Book, Bus, Building2,
  Package, Calendar, Eye, Video, GraduationCap, Sliders,
  Plus, Minus, Star, ArrowRight, Layers, Sparkles,
  Search, Bell, Laptop, KeyRound, Activity, CheckCircle2,
  ShieldAlert, QrCode, Truck, HeartHandshake, PhoneCall, Clock,
  Award
} from 'lucide-react'
import { Link } from '../Router'

// ─────────────────────────────────────────────────────────────
// DASA EDUCORE™ CAMPUS OPERATING SYSTEM
// Modern, clean, authoritative institutional design
// High contrast, executive aesthetic with interactive telemetry
// ─────────────────────────────────────────────────────────────

export default function SchoolErpProductView() {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeDashboardNav, setActiveDashboardNav] = useState('dashboard')
  const [activeRole, setActiveRole] = useState('principal')
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // 6 Core Institutional Value Pillars
  const CORE_PILLARS = [
    {
      title: 'Autonomous Fee Treasury & Auto-Reconciliation',
      desc: 'Eliminate bank queues and spreadsheet chaos. Direct UPI, NetBanking, and card settlements with instant digital tax receipts, sibling discount formulas, and automated WhatsApp dues reminders.',
      icon: CreditCard,
      tag: 'FINANCIAL OPS',
      accent: 'border-emerald-500/20 hover:border-emerald-500/80 hover:shadow-emerald-500/10',
      iconColor: 'bg-emerald-50 text-emerald-700 border border-emerald-200'
    },
    {
      title: 'Contactless RFID & Biometric Gate Telemetry',
      desc: 'Instant student transit logging through turnstiles, biometric fingerprint units, and handheld bus scanners. Automatic parent alerts trigger in under 45 seconds if a scholar is absent.',
      icon: QrCode,
      tag: 'CAMPUS SAFETY',
      accent: 'border-cyan-500/20 hover:border-cyan-500/80 hover:shadow-cyan-500/10',
      iconColor: 'bg-cyan-50 text-cyan-700 border border-cyan-200'
    },
    {
      title: 'CBSE, ICSE & State Board Grade Engine',
      desc: 'Configurable scholastic and co-scholastic grading rubrics, automated GPA calculation, class rankings, and 1-click printable digital report cards with authenticated digital signatures.',
      icon: Award,
      tag: 'ACADEMIC RIGOR',
      accent: 'border-indigo-500/20 hover:border-indigo-500/80 hover:shadow-indigo-500/10',
      iconColor: 'bg-indigo-50 text-indigo-700 border border-indigo-200'
    },
    {
      title: 'Live GPS Bus Fleet & Transit Guardian',
      desc: 'Real-time school bus tracking on live interactive maps. Parents receive geo-fence proximity notifications when the bus is 5 minutes away, eliminating roadside wait times and security risks.',
      icon: Bus,
      tag: 'LOGISTICS & FLEET',
      accent: 'border-amber-500/20 hover:border-amber-500/80 hover:shadow-amber-500/10',
      iconColor: 'bg-amber-50 text-amber-700 border border-amber-200'
    },
    {
      title: 'Unified Parent & Scholar Mobile Experience',
      desc: 'Reduces routine front-office phone inquiries by over 80%. Guardians inspect daily homework, attendance graphs, fee statements, bus location, and school circulars with verifiable read receipts.',
      icon: Smartphone,
      tag: 'COMMUNICATION',
      accent: 'border-purple-500/20 hover:border-purple-500/80 hover:shadow-purple-500/10',
      iconColor: 'bg-purple-50 text-purple-700 border border-purple-200'
    },
    {
      title: 'Multi-Campus Trust & Governance Console',
      desc: 'Centralized oversight for educational trusts and growing school groups. Compare fee realization speed, faculty attendance ratios, and syllabus milestones across branches from one executive master login.',
      icon: Building2,
      tag: 'GOVERNANCE',
      accent: 'border-blue-500/20 hover:border-blue-500/80 hover:shadow-blue-500/10',
      iconColor: 'bg-blue-50 text-blue-700 border border-blue-200'
    }
  ]

  // Role Perspectives
  const ROLE_PERSPECTIVES = {
    principal: {
      role: 'Trustee & Principal View',
      title: 'Executive Campus Governance & Real-Time Intelligence',
      description: 'Oversee academic performance indices, financial collection velocity, faculty workload distributions, and regulatory board compliance without waiting for end-of-month manual reports.',
      highlights: [
        'Live cash flow and pending fee collection dashboard',
        'Staff attendance and leave approval workflow',
        'Board inspection-ready compliance logs and TC registry',
        'Cross-branch academic performance benchmarks'
      ],
      badge: 'EXECUTIVE CONSOLE'
    },
    teacher: {
      role: 'Faculty & HOD Console',
      title: 'Zero Paperwork. Maximum Classroom Engagement.',
      description: 'Take attendance in under 30 seconds, upload digital homework worksheets, record examination scores with smart validation, and send direct parent observations with a single tap.',
      highlights: [
        '30-second digital roll call via mobile app or web',
        'Dynamic timetable with automated teacher substitution',
        'Question paper blueprint & mark entry rubric engine',
        'Syllabus progression tracker with lesson plans'
      ],
      badge: 'FACULTY WORKSPACE'
    },
    parent: {
      role: 'Guardian Mobile App',
      title: 'Complete Peace of Mind on Every School Day',
      description: 'Parents stay actively connected with real-time bus tracking, transparent fee receipts with instant download, daily homework updates, and instant emergency broadcast notifications.',
      highlights: [
        'Live school bus GPS tracking with 5-minute ETA alerts',
        'Instant UPI fee payments with instant tax receipts',
        'Daily homework, test schedules, and digital report cards',
        'Direct teacher communication with private remarks'
      ],
      badge: 'PARENT PORTAL'
    },
    bursar: {
      role: 'Accounts & Bursar Desk',
      title: 'Flawless Accounting & Auto-Reconciled Ledgers',
      description: 'Manage diverse fee structures, sibling discounts, scholarship grants, transport slabs, and payroll disbursement with automated bank settlement reconciliations.',
      highlights: [
        'Zero manual tally: automatic payment gateway reconciliation',
        'Defaulter tracking with automated WhatsApp reminder sequences',
        'Custom fee head creation (Tuition, Lab, Bus, Sports, Uniform)',
        'Full day-book, ledger export, and annual audit reports'
      ],
      badge: 'TREASURY & AUDIT'
    }
  }

  // Complete Campus Modular Suite (Organized by Department)
  const DEPARTMENT_MODULES = [
    {
      id: 'admissions',
      category: 'academics',
      title: 'Digital Admissions & CRM',
      desc: 'Paperless online applicant portal, document verification, merit list generation, and instant enrollment.',
      icon: FileText
    },
    {
      id: 'students',
      category: 'academics',
      title: 'Student Lifecycle Master',
      desc: 'Comprehensive student profiles, digital ID card generator, promotion history, and transfer certificates (TC).',
      icon: Users
    },
    {
      id: 'academics',
      category: 'academics',
      title: 'Timetable & Curriculum Hub',
      desc: 'Conflict-free automated timetable generation, faculty workload balance, and syllabus milestones.',
      icon: BookOpen
    },
    {
      id: 'attendance',
      category: 'safety',
      title: 'Smart Attendance Telemetry',
      desc: 'Biometric fingerprint, facial recognition, and RFID gate logs with automated guardian SMS triggers.',
      icon: CalendarCheck
    },
    {
      id: 'exams',
      category: 'academics',
      title: 'Exam Management & Grading',
      desc: 'Hall tickets, seating arrangement planner, mark compilation, and CBSE/ICSE digital report cards.',
      icon: BarChart2
    },
    {
      id: 'fees',
      category: 'finance',
      title: 'Fee Treasury & Online Billing',
      desc: 'Multi-slab fee structures, UPI payment gateway integration, automatic fine calculation, and ledger reconciliation.',
      icon: CreditCard
    },
    {
      id: 'hr-payroll',
      category: 'finance',
      title: 'Staff HR & Biometric Payroll',
      desc: 'Employee bio-profiles, biometric punch logs, leave encashment, PF/ESI deductions, and auto-generated payslips.',
      icon: UserCheck
    },
    {
      id: 'transport',
      category: 'safety',
      title: 'GPS Bus Fleet Telemetry',
      desc: 'Bus route optimization, live vehicle telemetry, driver license tracking, and parent arrival push alerts.',
      icon: Bus
    },
    {
      id: 'library',
      category: 'operations',
      title: 'Library Barcode Circulation',
      desc: 'ISBN cataloguing, barcode book issuing/returns, overdue fine computation, and digital e-book archives.',
      icon: Book
    },
    {
      id: 'hostel',
      category: 'operations',
      title: 'Hostel & Mess Administration',
      desc: 'Room inventory allocation, warden check-ins, student night attendance, and dietary mess accounting.',
      icon: Building2
    },
    {
      id: 'communication',
      category: 'communication',
      title: 'Omnichannel Parent Broadcast',
      desc: 'Targeted SMS, WhatsApp messages, digital noticeboards, emergency weather alerts, and read receipts.',
      icon: Mail
    },
    {
      id: 'gate-visitors',
      category: 'safety',
      title: 'Visitor Gatekeeper & QR Pass',
      desc: 'Photo ID check-in, host approval notifications, contractor passes, and restricted visitor alerts.',
      icon: Eye
    },
    {
      id: 'inventory',
      category: 'operations',
      title: 'Campus Asset & Store Inventory',
      desc: 'Uniform and book sales, laboratory equipment logs, purchase order approvals, and stock replenishment alerts.',
      icon: Package
    },
    {
      id: 'lms',
      category: 'academics',
      title: 'Interactive Academic LMS',
      desc: 'Video lecture repository, online homework submissions, interactive quizzes, and scholar learning graphs.',
      icon: Video
    },
    {
      id: 'alumni',
      category: 'communication',
      title: 'Alumni Network & Career Hub',
      desc: 'Graduate directory, mentorship coordination, career placement records, and institutional donation drives.',
      icon: GraduationCap
    },
    {
      id: 'system-admin',
      category: 'governance',
      title: 'Enterprise Security & RBAC',
      desc: 'Granular role permissions, IP access restriction, immutable audit trail, and automated cloud snapshots.',
      icon: Sliders
    }
  ]

  const filteredModules = activeCategory === 'all'
    ? DEPARTMENT_MODULES
    : DEPARTMENT_MODULES.filter(m => m.category === activeCategory)

  // Institutional Client Endorsements
  const TESTIMONIALS = [
    {
      quote: "Before DASA EduCore, fee reconciliation took our accounting department two weeks every term. Now, UPI payments settle directly to our ledger with zero manual data entry. Fee recovery jumped by 28% in our first term.",
      author: "Dr. K. Senthil Nathan",
      role: "Correspondent, Kongu Vidhyashram (CBSE), Erode",
      avatar: "KS",
      metric: "+28% Fee Realization",
      affiliation: "CBSE Affiliated • 2,400 Students"
    },
    {
      quote: "The live GPS bus telemetry completely eliminated our frantic morning phone lines. Parents know exactly when the bus is approaching their stop, and our principal has real-time visibility over all 16 fleet routes.",
      author: "Meenakshi Sundaram",
      role: "Administrative Director, St. Jude's Public School, Coimbatore",
      avatar: "MS",
      metric: "90% Fewer Inquiries",
      affiliation: "ICSE Affiliated • 1,850 Students"
    },
    {
      quote: "Generating board-compliant report cards used to mean late nights for 80 teachers. DASA EduCore compiles term marks, scholastic rubrics, and attendance in one click with zero calculation errors.",
      author: "Rev. Sister Anita Mathew",
      role: "Principal, Carmel International School, Tirupur",
      avatar: "AM",
      metric: "120 Hours Saved / Term",
      affiliation: "State & Matric Board • 3,100 Students"
    }
  ]

  // Practical Institutional FAQs
  const FAQS = [
    {
      question: "How long does migration take from our existing software or spreadsheets?",
      answer: "Most campuses transition in 48 to 72 hours. Our automated ingestion tools import student bio-data, parent phone records, fee structures, and past academic archives directly from Excel or legacy databases with zero data loss."
    },
    {
      question: "Does DASA EduCore comply with CBSE / ICSE / State Board grading formats?",
      answer: "Yes, 100%. Our evaluation module supports CBSE CCE rubrics, ICSE marks sheets, term weighted averages, and State Board grading structures with customizable report card layouts and digital signatures."
    },
    {
      question: "How does the automated fee reconciliation work with our bank account?",
      answer: "DASA EduCore integrates directly with leading payment gateways (Razorpay, HDFC, Cashfree, ICICI). When a parent pays via UPI, card, or net banking, the student ledger updates instantaneously, an 80G tax receipt is issued, and funds settle directly into your bank account."
    },
    {
      question: "What happens if our campus loses internet connection during morning roll call?",
      answer: "The faculty mobile app and biometric gate terminals feature offline local caching. Teachers can take roll call or turnstiles can log RFID scans offline; all data syncs automatically to the cloud once connectivity resumes."
    },
    {
      question: "Can an educational trust govern multiple campuses from a single console?",
      answer: "Yes. Multi-campus governance is built into the architecture. Trust trustees can access unified revenue analytics, faculty deployment ratios, and academic benchmarks across 5, 10, or 50 campuses from one master dashboard."
    },
    {
      question: "What hardware is required for biometric attendance and bus tracking?",
      answer: "DASA EduCore is hardware-agnostic. We integrate with standard eSSL/ZKTeco biometric terminals, RFID smart cards, and any standard AIS-140 certified vehicle GPS trackers or staff smartphone GPS apps."
    }
  ]

  return (
    <div className="min-h-screen bg-[#FDFCFE] text-slate-900 selection:bg-indigo-600 selection:text-white pt-24 font-sans antialiased">

      {/* ── STICKY BREADCRUMB HEADER ──────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-indigo-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-indigo-600 font-bold">DASA EduCore™ Campus OS</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-slate-700 hover:text-indigo-600 bg-slate-100 hover:bg-indigo-50 px-3.5 py-1.5 rounded-full transition-all border border-slate-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Products</span>
            </Link>
            
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-display font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-1.5 rounded-full transition-all shadow-xs"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── 1. HERO SECTION: NEXT-GEN CAMPUS COMMAND CENTER ──── */}
      <section className="relative py-14 lg:py-24 bg-gradient-to-b from-indigo-50/40 via-[#FDFCFE] to-[#FDFCFE] overflow-hidden border-b border-slate-200/80">
        
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-br from-indigo-200/20 via-cyan-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Mission-Critical Institutional Pitch */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Modern Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>ENTERPRISE CAMPUS OPERATING SYSTEM</span>
              </div>

              {/* Authority Heading */}
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[54px] text-slate-950 tracking-tight leading-[1.12]">
                Run Your Entire Campus with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
                  Precision &amp; Absolute Trust
                </span>
              </h1>

              {/* Subheading with Real Concrete Value */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Eliminate spreadsheet fatigue and disconnected software. DASA EduCore unifies digital admissions, biometric gate turnstiles, automated fee treasury, live bus telemetry, and board report cards into a single high-availability cloud engine.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-display font-bold text-sm shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-indigo-400 fill-indigo-400" />
                  <span>Request Institutional Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#modules"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-display font-bold text-sm shadow-2xs hover:border-indigo-300 transition-all"
                >
                  <Layers className="w-4 h-4 text-indigo-600" />
                  <span>Explore 20+ Modules</span>
                </a>
              </div>

              {/* Key Trust Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>CBSE, ICSE &amp; State Board Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Manual Fee Reconciliation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sub-Minute RFID Parent Alert Speed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated Implementation Engineer</span>
                </div>
              </div>

            </div>

            {/* Right Column: Clean, Neat Modern SaaS Campus Dashboard Mockup */}
            <div className="lg:col-span-6 relative">
              
              {/* Soft Subtle Glow Behind Window */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500/10 via-indigo-500/10 to-amber-500/10 rounded-[32px] blur-2xl -z-10 pointer-events-none" />

              {/* Clean White Window Frame */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] overflow-hidden text-slate-800 transition-all">
                
                {/* Browser Window Header */}
                <div className="px-4 py-3 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between gap-3">
                  {/* macOS Window Controls */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-rose-400/90 border border-rose-500/20" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/90 border border-amber-500/20" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/90 border border-emerald-500/20" />
                  </div>

                  {/* Centered URL Address Bar */}
                  <div className="flex-1 max-w-xs mx-auto">
                    <div className="bg-white px-3.5 py-1 rounded-full border border-slate-200/80 text-[11px] font-mono text-slate-500 flex items-center justify-between shadow-2xs">
                      <span className="truncate">dasaeduerp.com/dashboard</span>
                      <RotateCw className="w-3 h-3 text-slate-400 shrink-0 ml-2" />
                    </div>
                  </div>

                  {/* Live Status Indicator */}
                  <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Dashboard Workspace Layout */}
                <div className="flex flex-col sm:flex-row">
                  
                  {/* Left Sidebar Menu */}
                  <div className="w-full sm:w-44 bg-slate-50/70 border-b sm:border-b-0 sm:border-r border-slate-200/70 p-3 sm:p-3.5 flex flex-col justify-between shrink-0">
                    <div>
                      <div className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase px-2.5 mb-2">
                        MENU
                      </div>
                      <nav className="space-y-1">
                        {[
                          { id: 'dashboard', label: 'Dashboard', icon: Home },
                          { id: 'students', label: 'Students', icon: Users },
                          { id: 'attendance', label: 'Attendance', icon: CalendarCheck },
                          { id: 'fees', label: 'Fees', icon: CreditCard },
                          { id: 'exams', label: 'Exams', icon: BarChart2 },
                          { id: 'messages', label: 'Messages', icon: Mail },
                        ].map((item) => {
                          const ItemIcon = item.icon
                          const isActive = activeDashboardNav === item.id
                          return (
                            <button
                              key={item.id}
                              onClick={() => setActiveDashboardNav(item.id)}
                              type="button"
                              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                                isActive
                                  ? 'bg-teal-600 text-white font-semibold shadow-xs'
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                              }`}
                            >
                              <ItemIcon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                              <span>{item.label}</span>
                            </button>
                          )
                        })}
                      </nav>
                    </div>

                    <div className="hidden sm:block pt-4 border-t border-slate-200/60 mt-4 px-2">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Campus OS</div>
                      <div className="text-xs font-semibold text-slate-700 truncate mt-0.5">DASA EduCore</div>
                      <div className="text-[10px] text-slate-400">Term 2 • 2025-26</div>
                    </div>
                  </div>

                  {/* Right Main Content Panel */}
                  <div className="flex-1 p-4 sm:p-5 space-y-4 bg-white overflow-hidden">
                    
                    {/* 4 Clean Stat Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-1">
                        <div className="text-[11px] text-slate-500 font-medium">Students</div>
                        <div className="text-lg sm:text-xl font-bold font-display text-slate-900 tracking-tight">1,248</div>
                        <div className="inline-flex items-center text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                          <span>+12%</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-1">
                        <div className="text-[11px] text-slate-500 font-medium">Attendance</div>
                        <div className="text-lg sm:text-xl font-bold font-display text-slate-900 tracking-tight">94.2%</div>
                        <div className="inline-flex items-center text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                          <span>+2.1%</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-1">
                        <div className="text-[11px] text-slate-500 font-medium">Fees</div>
                        <div className="text-lg sm:text-xl font-bold font-display text-slate-900 tracking-tight">₹8.4L</div>
                        <div className="inline-flex items-center text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                          <span>+18%</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-1">
                        <div className="text-[11px] text-slate-500 font-medium">Staff</div>
                        <div className="text-lg sm:text-xl font-bold font-display text-slate-900 tracking-tight">87</div>
                        <div className="inline-flex items-center text-[10px] font-medium text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">
                          <span>All In</span>
                        </div>
                      </div>
                    </div>

                    {/* 2 Visual Minimalist Charts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Monthly Attendance Chart Card */}
                      <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-800">Monthly Attendance</span>
                          <span className="text-[10px] font-mono font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                            94.2% avg
                          </span>
                        </div>
                        {/* Clean Minimalist Bar Chart */}
                        <div className="h-16 flex items-end justify-between gap-2 pt-2 px-1">
                          {[
                            { h: '45%', label: 'M' },
                            { h: '62%', label: 'T' },
                            { h: '52%', label: 'W' },
                            { h: '84%', label: 'T' },
                            { h: '96%', label: 'F' },
                            { h: '78%', label: 'S' },
                          ].map((bar, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                              <div className="w-full bg-slate-200/60 rounded-t h-full flex items-end overflow-hidden">
                                <div
                                  className="w-full bg-gradient-to-t from-teal-600 to-emerald-400 rounded-t transition-all duration-300 hover:brightness-105"
                                  style={{ height: bar.h }}
                                />
                              </div>
                              <span className="text-[9px] font-mono text-slate-400">{bar.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Fee Collection Chart Card */}
                      <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-800">Fee Collection</span>
                          <span className="text-[10px] font-mono font-medium text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">
                            ₹8.4L / ₹9.0L
                          </span>
                        </div>
                        {/* Clean Minimalist Bar Chart */}
                        <div className="h-16 flex items-end justify-between gap-2 pt-2 px-1">
                          {[
                            { h: '38%', label: 'T1' },
                            { h: '56%', label: 'T2' },
                            { h: '72%', label: 'T3' },
                            { h: '48%', label: 'T4' },
                            { h: '86%', label: 'T5' },
                            { h: '94%', label: 'T6' },
                          ].map((bar, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                              <div className="w-full bg-slate-200/60 rounded-t h-full flex items-end overflow-hidden">
                                <div
                                  className="w-full bg-gradient-to-t from-amber-500 to-emerald-500 rounded-t transition-all duration-300 hover:brightness-105"
                                  style={{ height: bar.h }}
                                />
                              </div>
                              <span className="text-[9px] font-mono text-slate-400">{bar.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Clean Scholar Data Table */}
                    <div className="rounded-xl border border-slate-200/80 overflow-hidden bg-white">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="bg-slate-50/80 border-b border-slate-200/70 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                              <th className="py-2 px-3 font-semibold">STUDENT</th>
                              <th className="py-2 px-2.5 font-semibold">CLASS</th>
                              <th className="py-2 px-2.5 font-semibold">ATTEND.</th>
                              <th className="py-2 px-2.5 font-semibold">FEES</th>
                              <th className="py-2 px-3 font-semibold text-right">STATUS</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            <tr className="hover:bg-slate-50/60 transition-colors">
                              <td className="py-2 px-3 font-medium text-slate-900">Aarav Sharma</td>
                              <td className="py-2 px-2.5 text-slate-500">X-A</td>
                              <td className="py-2 px-2.5 font-medium text-slate-700">98%</td>
                              <td className="py-2 px-2.5 text-slate-600">Paid</td>
                              <td className="py-2 px-3 text-right">
                                <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50/60 transition-colors">
                              <td className="py-2 px-3 font-medium text-slate-900">Priya Patel</td>
                              <td className="py-2 px-2.5 text-slate-500">IX-B</td>
                              <td className="py-2 px-2.5 font-medium text-slate-700">91%</td>
                              <td className="py-2 px-2.5 text-slate-600">Partial</td>
                              <td className="py-2 px-3 text-right">
                                <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50/60 transition-colors">
                              <td className="py-2 px-3 font-medium text-slate-900">Rohit Mehta</td>
                              <td className="py-2 px-2.5 text-slate-500">XI-C</td>
                              <td className="py-2 px-2.5 font-medium text-slate-700">95%</td>
                              <td className="py-2 px-2.5 text-slate-600">Paid</td>
                              <td className="py-2 px-3 text-right">
                                <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  Active
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 2. PROVEN INSTITUTIONAL RESULTS METRICS BAR ───────── */}
      <section className="py-12 border-y border-slate-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            <div className="pt-2 sm:pt-0 space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-indigo-600">100%</div>
              <div className="text-xs sm:text-sm text-slate-700 font-mono font-bold">Auto-Reconciled Fees</div>
              <div className="text-[11px] text-slate-400 font-mono">Zero manual ledger entry</div>
            </div>

            <div className="pt-4 sm:pt-0 space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-emerald-600">&lt; 45s</div>
              <div className="text-xs sm:text-sm text-slate-700 font-mono font-bold">Parent Alert Speed</div>
              <div className="text-[11px] text-slate-400 font-mono">Instant RFID gate notification</div>
            </div>

            <div className="pt-4 sm:pt-0 space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-slate-950">20+</div>
              <div className="text-xs sm:text-sm text-slate-700 font-mono font-bold">Integrated Modules</div>
              <div className="text-[11px] text-slate-400 font-mono">Academics, fees, fleet &amp; safety</div>
            </div>

            <div className="pt-4 sm:pt-0 space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-cyan-600">99.98%</div>
              <div className="text-xs sm:text-sm text-slate-700 font-mono font-bold">Cloud Reliability SLA</div>
              <div className="text-[11px] text-slate-400 font-mono">ISO 27001 data center standard</div>
            </div>

            <div className="pt-4 sm:pt-0 space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-amber-500">72 Hrs</div>
              <div className="text-xs sm:text-sm text-slate-700 font-mono font-bold">Rapid Go-Live Time</div>
              <div className="text-[11px] text-slate-400 font-mono">With full student data import</div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. SIX MISSION-CRITICAL PILLARS ───────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FBFBFE]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span>THE ARCHITECTURAL DIFFERENCE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[42px] text-slate-950 tracking-tight leading-tight">
              Engineered for Measurable Campus Transformation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Most school software is just a digitized spreadsheet. DASA EduCore is an active, autonomous campus engine designed to eliminate friction for administrators, teachers, and parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {CORE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl bg-white border ${pillar.accent} transition-all duration-300 space-y-4 hover:-translate-y-1 group shadow-xs hover:shadow-xl`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${pillar.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 4. INTERACTIVE CAMPUS ROLE SWITCHER ───────────────── */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-mono font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-purple-600" />
              <span>ROLE-BASED ARCHITECTURE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
              Tailored Power for Every Role on Campus
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              A single unified database, with dedicated, clean interfaces tailored precisely to each stakeholder's daily responsibilities.
            </p>
          </div>

          {/* Role Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80">
            {Object.keys(ROLE_PERSPECTIVES).map((key) => {
              const r = ROLE_PERSPECTIVES[key]
              const isSelected = activeRole === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveRole(key)}
                  className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-950 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {r.role}
                </button>
              )
            })}
          </div>

          {/* Role Showcase Display */}
          <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#FAF8FF] to-white border border-purple-200/70 shadow-lg space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-purple-100">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-purple-600 uppercase tracking-widest bg-purple-100/70 px-3 py-1 rounded-full">
                  {ROLE_PERSPECTIVES[activeRole].badge}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
                  {ROLE_PERSPECTIVES[activeRole].title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-base leading-relaxed max-w-3xl">
              {ROLE_PERSPECTIVES[activeRole].description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ROLE_PERSPECTIVES[activeRole].highlights.map((point, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-purple-100/80 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. COMPLETE 20+ DEPARTMENT MODULES ────────────────── */}
      <section id="modules" className="py-20 lg:py-28 bg-[#FBFBFE] border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-mono font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-cyan-600" />
              <span>THE 360° MODULAR SUITE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
              One Unified System, Every Campus Function
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              No third-party add-ons. No hidden module fees. Everything is natively integrated and speaks the exact same database schema.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {[
              { id: 'all', label: 'All Modules' },
              { id: 'academics', label: 'Academics & Exams' },
              { id: 'finance', label: 'Finance & Treasury' },
              { id: 'safety', label: 'Safety & Transit' },
              { id: 'communication', label: 'Parent & Scholar Hub' },
              { id: 'operations', label: 'Operations & Store' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {filteredModules.map((mod) => {
              const Icon = mod.icon
              return (
                <div
                  key={mod.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center bg-indigo-50 text-indigo-700 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-950 leading-tight group-hover:text-indigo-600 transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 6. ZERO-DISRUPTION 3-STEP ROLLOUT ─────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>RAPID INSTITUTIONAL ONBOARDING</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
              Live in Days, Not Semesters
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Your academic routine never stops. Our dedicated onboarding engineering squad ensures zero disruption to your daily classes and accounting schedules.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Horizontal Connecting Guide (Desktop) */}
            <div className="hidden md:block absolute top-7 left-24 right-24 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 -z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-center">
              
              {/* Step 1 */}
              <div className="p-6 rounded-3xl bg-[#FAF8FF] border border-purple-100 space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 text-white font-display font-black text-xl flex items-center justify-center mx-auto shadow-md shadow-indigo-500/30">
                  01
                </div>
                <h3 className="font-display font-bold text-lg text-slate-950 pt-2">
                  Legacy Data Ingestion
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our team imports your historical student master files, fee heads, parent phone numbers, and staff records directly from legacy spreadsheets or old databases.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-3xl bg-[#FAF8FF] border border-purple-100 space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 text-white font-display font-black text-xl flex items-center justify-center mx-auto shadow-md shadow-purple-500/30">
                  02
                </div>
                <h3 className="font-display font-bold text-lg text-slate-950 pt-2">
                  Department Workflows
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Configure classes, grading rubrics, payment gateway webhooks, and granular role permissions. Conduct hands-on staff enablement sessions with zero friction.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-3xl bg-[#FAF8FF] border border-purple-100 space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white font-display font-black text-xl flex items-center justify-center mx-auto shadow-md shadow-emerald-500/30">
                  03
                </div>
                <h3 className="font-display font-bold text-lg text-slate-950 pt-2">
                  Autonomous Campus Go-Live
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Dispatch parent mobile app credentials via automated SMS. Commence live biometric turnstiles, digital fee settlements, and GPS transit guardian tracking.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 7. PROVEN INSTITUTIONAL LEADERSHIP REVIEWS ────────── */}
      <section className="py-20 lg:py-28 bg-[#FBFBFE] border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-mono font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>TESTED BY PROMINENT INSTITUTIONS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
              Validated by Educational Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {t.metric}
                    </span>
                  </div>
                  
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-sm text-slate-950">
                      {t.author}
                    </div>
                    <div className="text-[11px] text-slate-600 truncate font-medium">
                      {t.role}
                    </div>
                    <div className="text-[10px] text-indigo-600 font-mono">
                      {t.affiliation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 8. THOROUGH INSTITUTIONAL FAQ ACCORDION ───────────── */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200 text-xs font-mono font-bold uppercase tracking-wider">
              <span>FREQUENT QUESTIONS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
              Institutional Clarity
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-[#FAFBFD] overflow-hidden hover:border-indigo-300 transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 sm:py-5 px-6 flex items-center justify-between text-left gap-4 hover:bg-white transition-colors cursor-pointer"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-slate-950">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-slate-400">
                      {isOpen ? <Minus className="w-5 h-5 text-indigo-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 font-normal bg-white">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 9. FINAL EXECUTIVE CTA BANNER ─────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAFBFD] border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0B0F19] via-[#0F172A] to-[#1E1B4B] text-white shadow-2xl space-y-6 border border-indigo-500/30">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>ZERO COMMITMENT • DEDICATED INSTITUTIONAL POC</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Ready to Modernize Your Campus Operations?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
              Schedule a personalized walkthrough with our campus solution architects. We will configure your classes, fee slabs, and bus routes for a live demonstration.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-display font-bold text-sm shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-white text-white" />
                <span>Schedule Executive Campus Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display font-bold text-sm transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-indigo-300" />
                <span>Speak with an Architect</span>
              </Link>
            </div>

            <div className="pt-3 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-center gap-3">
              <span>Full Historical Data Ingestion</span>
              <span>•</span>
              <span>Dedicated On-Site Implementation</span>
              <span>•</span>
              <span>Enterprise SLA Support</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
