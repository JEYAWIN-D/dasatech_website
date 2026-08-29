import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap, CheckCircle2, ArrowRight, ArrowLeft,
  Sparkles, Database, Check, Clock, Server, Layers, FileText,
  Search, Activity, RefreshCw, Users, ShieldCheck, CreditCard,
  Building2, BookOpen, AlertTriangle, Cpu, Layout, FileSpreadsheet,
  Lock, Award, Shield, DollarSign, UserCheck, Compass, Workflow, Code2,
  ChevronRight, Calendar, UserPlus, FileCheck, Layers3, Smartphone, Zap,
  Terminal, Network, Sliders, Radio, HardDrive, Share2, Key, CheckSquare, Eye,
  Bus, School, BarChart3, HelpCircle, AlertCircle, Scan, Truck, Box, Star,
  MapPin, BellRing, PhoneCall
} from 'lucide-react'
import { Link } from '../Router'
import ProductImplementationShowcase from './ProductImplementationShowcase'
import image1 from '../../assets/scholl-erp/img1.png'
import image2 from '../../assets/scholl-erp/img2.png'
import image3 from '../../assets/scholl-erp/img3.png'
import image4 from '../../assets/scholl-erp/img4.png'
import image5 from '../../assets/scholl-erp/img5.png'
import image6 from '../../assets/scholl-erp/img6.png'
import image7 from '../../assets/scholl-erp/img7.png'
import image8 from '../../assets/scholl-erp/img8.png'
import image9 from '../../assets/scholl-erp/img9.png'
import image10 from '../../assets/scholl-erp/img10.png'

// ─────────────────────────────────────────────────────────────
// DASA EDUCORE CAMPUS ERP
// Aesthetic: Vibrant Emerald Teal & Warm Amber & Deep Midnight Slate
// Visually rich, colorful, modern, and engaging
// ─────────────────────────────────────────────────────────────

const SCHOOL_ERP_SCREEN_ASSETS = [
  {
    id: 'executive-dashboard',
    module: 'Executive Dashboard',
    title: 'Executive Campus Intelligence Command Center',
    subtitle: 'Real-time student strength, daily attendance percentage, fee reconciliation totals, and staff payroll telemetry.',
    tag: '01. Executive Dashboard',
    img: image1,
    route: 'app.dasatech.com/eduerp/dashboard',
    specs: ['Multi-Campus Telemetry', 'Sub-second Financials', 'Live Attendance Feed']
  },
  {
    id: 'admissions-enquiry',
    module: 'Admissions & Enquiry',
    title: 'Admissions & Online Enquiry Management',
    subtitle: 'End-to-end applicant tracking, online enquiry forms, entrance examination hall tickets, and merit seat allocation.',
    tag: '02. Admissions & Enquiry',
    img: image2,
    route: 'app.dasatech.com/eduerp/admissions',
    specs: ['Online Enquiries', 'Entrance Test Scoring', 'Seat Allocation']
  },
  {
    id: 'student-sis',
    module: 'Student Information System',
    title: '360° Student Profile Registry & Academic Records',
    subtitle: 'Centralized student record vault storing parent contact details, blood group, medical records, and digital ID cards.',
    tag: '03. Student SIS',
    img: image3,
    route: 'app.dasatech.com/eduerp/student-sis',
    specs: ['360° Student Records', 'Document Vault', 'Digital ID Generation']
  },
  {
    id: 'hr-payroll',
    module: 'HR & Payroll',
    title: 'Staff Directory, Attendance & Automated Payroll',
    subtitle: 'Teacher biometric check-ins, leave workflow management, salary structures with PF/ESI calculations, and payslip generation.',
    tag: '04. HR & Payroll',
    img: image4,
    route: 'app.dasatech.com/eduerp/hr-payroll',
    specs: ['Biometric Sync', 'PF & ESI Automation', 'Instant Payslips']
  },
  {
    id: 'fee-collections',
    module: 'Fee Management',
    title: 'Automated Fee Structure, Installments & Receipts',
    subtitle: 'Customizable fee heads, online UPI payment gateway reconciliation, concession approvals, and digital GST receipts.',
    tag: '05. Fee Management',
    img: image5,
    route: 'app.dasatech.com/eduerp/fee-management',
    specs: ['Online UPI & Gateway', 'Installment Tracking', 'Instant PDF Receipts']
  },
  {
    id: 'academic-timetable',
    module: 'Academics & Timetable',
    title: 'Timetable Scheduling & Subject Allocation Engine',
    subtitle: 'Conflict-free classroom and teacher timetable generation preventing double-booking of lecture halls and science labs.',
    tag: '06. Timetable Engine',
    img: image6,
    route: 'app.dasatech.com/eduerp/academics',
    specs: ['Zero Teacher Conflicts', 'Room Allocation', 'Elective Subject Sync']
  },
  {
    id: 'attendance-parent-sms',
    module: 'Attendance & Alerts',
    title: 'Biometric Attendance & Instant Parent SMS Gateway',
    subtitle: 'Period-wise and daily attendance marking with automated WhatsApp/SMS push notifications for absent students.',
    tag: '07. Attendance & SMS',
    img: image7,
    route: 'app.dasatech.com/eduerp/attendance',
    specs: ['Real-time SMS Push', 'Biometric Turnstile', 'Monthly Defaulter Alerts']
  },
  {
    id: 'examinations-report-cards',
    module: 'Exams & Grading',
    title: 'Examination Scheduling & Digital Grade Report Cards',
    subtitle: 'Gradebook calculation with customizable GPA/CBSE weighting, hall ticket distribution, and digital report card generation.',
    tag: '08. Examinations',
    img: image8,
    route: 'app.dasatech.com/eduerp/exams',
    specs: ['CBSE & State Grading', 'Instant Gradebook Sync', 'Digital Report Cards']
  },
  {
    id: 'library-rfid',
    module: 'Library Management',
    title: 'Library Catalog, Book Circulation & Barcode Tracker',
    subtitle: 'OPAC book search, barcode circulation check-in/check-out, overdue fine calculation, and book reservation queues.',
    tag: '09. Library Hub',
    img: image9,
    route: 'app.dasatech.com/eduerp/library',
    specs: ['Barcode & RFID Scan', 'Overdue Fine Engine', 'OPAC Search']
  },
  {
    id: 'transport-gps',
    module: 'Transport & Fleet',
    title: 'School Bus Fleet Routes & Live GPS Tracking',
    subtitle: 'Bus route optimization, student boarding pass allocation, speed telemetry, and live location sharing for parents.',
    tag: '10. Transport Fleet',
    img: image10,
    route: 'app.dasatech.com/eduerp/transport',
    specs: ['Live GPS Tracking', 'Route Allocator', 'Parent Boarding Alerts']
  }
]

export default function SchoolErpProductView() {
  const [activeWidgetTab, setActiveWidgetTab] = useState('attendance')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // 6 Rich Campus Modules
  const MODULES = [
    {
      id: 'sis',
      title: '360° Student Information System',
      tag: 'ADMISSIONS & SIS',
      color: 'from-teal-500 to-emerald-600',
      bgLight: 'bg-teal-50',
      borderColor: 'border-teal-200',
      textColor: 'text-teal-700',
      icon: UserPlus,
      desc: 'Complete student digital lifecycle from online enquiry, entrance test scores, document vault, medical logs, to alumni records.'
    },
    {
      id: 'attendance',
      title: 'Biometric Turnstiles & Parent SMS',
      tag: 'CAMPUS SAFETY',
      color: 'from-blue-500 to-indigo-600',
      bgLight: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      icon: UserCheck,
      desc: 'Smart RFID/Biometric gate sync sending instant WhatsApp and SMS arrival notifications to parents with zero manual teacher effort.'
    },
    {
      id: 'fees',
      title: 'Automated UPI Fee Collections',
      tag: 'FINANCE & BILLING',
      color: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-700',
      icon: CreditCard,
      desc: 'Custom installment schedules, online UPI payment gateway with sub-15s settlement, concession approvals, and instant GST receipts.'
    },
    {
      id: 'timetable',
      title: 'Conflict-Free Timetable Matrix',
      tag: 'ACADEMIC SCHEDULING',
      color: 'from-purple-500 to-violet-600',
      bgLight: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      icon: Calendar,
      desc: 'Algorithmic schedule generator preventing double-booked science labs, teacher clashes, and handling automatic substitute faculty allocation.'
    },
    {
      id: 'exams',
      title: 'CBSE & State Board Gradebooks',
      tag: 'EXAMS & GRADING',
      color: 'from-rose-500 to-pink-600',
      bgLight: 'bg-rose-50',
      borderColor: 'border-rose-200',
      textColor: 'text-rose-700',
      icon: Award,
      desc: 'Automated grade compilation with customizable grading curves, hall ticket generation, and digital tamper-proof parent report cards.'
    },
    {
      id: 'transport',
      title: 'Live School Bus Fleet GPS',
      tag: 'TRANSPORT FLEET',
      color: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-700',
      icon: Bus,
      desc: 'Real-time school bus GPS tracking, speed telemetry, geofence boundary alerts, and student boarding pass scans on guardian phones.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 selection:bg-teal-600 selection:text-white pt-24 select-none font-sans">
      
      {/* ── BREADCRUMB HEADER ─────────────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white/95 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-teal-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-teal-600 font-bold">DASA EduCore School ERP</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-slate-700 hover:text-teal-600 bg-slate-100 hover:bg-teal-50 px-4 py-1.5 rounded-full transition-all border border-slate-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </div>

      {/* ── 1. VIBRANT & ATTRACTIVE HERO SECTION ──────────────── */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-teal-50/40 via-[#FAFBFD] to-[#FAFBFD] overflow-hidden border-b border-slate-200/80">
        
        {/* Soft Ambient Glow Elements */}
        <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-gradient-to-br from-teal-200/20 via-emerald-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-amber-200/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Hero Title & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
                <GraduationCap className="w-4 h-4 text-teal-600" />
                <span>UNIFIED CAMPUS MANAGEMENT &amp; ACADEMICS</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                Empowering Next-Gen <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600">
                  Schools &amp; Smart Campuses.
                </span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                A modern, connected operating system for schools and colleges: sync biometric attendance with parent SMS, automate fee installments, eliminate timetable clashes, and track buses in real time.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#implementation-screens"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs shadow-md transition-all hover:-translate-y-0.5"
                >
                  <span>Explore 10 Campus Modules</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-teal-50 border border-slate-300 text-slate-800 font-display font-bold text-xs shadow-xs hover:border-teal-300 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  <span>Request Live Campus Pilot</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Interactive Colorful Live Campus Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-7 bg-white border border-slate-200/90 shadow-2xl space-y-5 relative overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                      <School className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-900">EduCore Campus Central</h3>
                      <p className="text-xs text-slate-500 font-mono">Real-Time Academic Telemetry</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    ONLINE
                  </span>
                </div>

                {/* 3 Interactive Tab Selector */}
                <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1 rounded-xl text-xs font-mono font-bold">
                  <button
                    onClick={() => setActiveWidgetTab('attendance')}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeWidgetTab === 'attendance'
                        ? 'bg-white text-teal-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Attendance
                  </button>
                  <button
                    onClick={() => setActiveWidgetTab('fees')}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeWidgetTab === 'fees'
                        ? 'bg-white text-amber-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Fee Ledger
                  </button>
                  <button
                    onClick={() => setActiveWidgetTab('fleet')}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeWidgetTab === 'fleet'
                        ? 'bg-white text-blue-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Bus GPS
                  </button>
                </div>

                {/* Tab Dynamic Body */}
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
                  {activeWidgetTab === 'attendance' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-600 font-medium">Gate Biometrics Synced</span>
                        <span className="text-emerald-600 font-bold">98.6% (2,410 Students)</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="w-[98.6%] h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                        <span className="flex items-center gap-1 text-emerald-600">
                          <CheckCircle2 className="w-3.5 h-3.5" /> SMS Alerts Dispatched
                        </span>
                        <span>34 Absentees Flagged</span>
                      </div>
                    </div>
                  )}

                  {activeWidgetTab === 'fees' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-600 font-medium">Today's Fee Collections</span>
                        <span className="text-amber-600 font-bold">₹14,80,000</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="w-[88%] h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                        <span className="text-emerald-600 font-bold">✓ 142 UPI Receipts Generated</span>
                        <span>Term 2 Fees</span>
                      </div>
                    </div>
                  )}

                  {activeWidgetTab === 'fleet' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-600 font-medium">18 School Buses En Route</span>
                        <span className="text-blue-600 font-bold">Live GPS Active</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="w-[100%] h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                        <span className="text-emerald-600 font-bold">✓ Safe Speed (&lt; 40 km/h)</span>
                        <span>Geofence OK</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Tag */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-1">
                  <span>Spatie RBAC Multi-Campus</span>
                  <span className="text-teal-700 font-bold">CBSE &amp; State Board Ready</span>
                </div>

              </div>
            </div>

          </div>

          {/* 4 Bottom Metric KPIs with Colorful Cards */}
          <div className="pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
              <div className="font-display font-black text-3xl text-teal-600">99.8%</div>
              <div className="text-xs font-mono text-slate-600 font-medium">Attendance Accuracy</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
              <div className="font-display font-black text-3xl text-amber-600">&lt; 15s</div>
              <div className="text-xs font-mono text-slate-600 font-medium">UPI Fee Settlement</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
              <div className="font-display font-black text-3xl text-indigo-600">0 Clashes</div>
              <div className="text-xs font-mono text-slate-600 font-medium">Timetable Matrix</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
              <div className="font-display font-black text-3xl text-emerald-600">100%</div>
              <div className="text-xs font-mono text-slate-600 font-medium">Student Data Privacy</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. PRODUCT IMPLEMENTATION SHOWCASE ─────────────────── */}
      <ProductImplementationShowcase
        productId="school-erp"
        productName="DASA EduCore School ERP"
        screens={SCHOOL_ERP_SCREEN_ASSETS}
        brandColor="#0D9488"
      />

      {/* ── 3. SIX RICH CAMPUS MODULES ─────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-teal-600" />
              <span>ACADEMIC MODULE SUITE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Six Specialized Campus Operations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Engineered for seamless collaboration between School Trustees, Principals, Teachers, Parents, and Students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {MODULES.map((mod) => {
              const Icon = mod.icon
              return (
                <div
                  key={mod.id}
                  className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 space-y-4 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${mod.bgLight} ${mod.textColor} flex items-center justify-center font-bold group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${mod.bgLight} ${mod.textColor} border ${mod.borderColor}`}>
                        {mod.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-teal-600 transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {mod.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-teal-600 font-bold">
                    <span>Explore Module Features</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 4. INSTITUTIONAL SECURITY & GOVERNANCE ─────────────── */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>DATA GOVERNANCE &amp; TRUST</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Enterprise Governance for Multi-Campus Trusts
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Total student record privacy, audit trails for fee adjustments, and granular permissions for staff and administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Spatie RBAC Permission Matrix',
                desc: 'Restrict fee collection ledger edits, grade modifications, and staff salary structures strictly to authorized trustees and principals.',
                tag: 'ZERO DATA TAMPERING'
              },
              {
                title: 'Automated Daily Cloud Backups',
                desc: 'Point-in-time PostgreSQL database snapshots encrypted with AES-256 and replicated across geo-isolated cloud data centers.',
                tag: '99.99% DISASTER RECOVERY'
              },
              {
                title: 'CBSE & Statutory Audit Export',
                desc: 'One-click generation of student enrollment registers, faculty rosters, PF/ESI summaries, and state regulatory compliance certificates.',
                tag: 'REGULATORY AUDIT READY'
              }
            ].map((gov, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-3">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300">
                  {gov.tag}
                </span>
                <h3 className="font-display font-bold text-lg text-white">{gov.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{gov.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. FINAL CONSULTATION CTA CARD ─────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAFBFD]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-teal-900 to-slate-900 text-white shadow-2xl space-y-6 border border-teal-500/30">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
              Ready to Upgrade Your Educational Institution?
            </h2>
            <p className="text-teal-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
              Schedule a dedicated consultation with Founder &amp; CEO Jeyawin D to explore a custom demonstration for your school, college, or multi-campus trust.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-display font-bold text-xs shadow-lg shadow-teal-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>Schedule Institutional Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
