import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, ChevronRight, Check, Zap, RotateCw,
  Home, Users, UserCheck, CreditCard, BarChart2, Mail,
  ShieldCheck, Smartphone, BarChart3, BookOpen,
  FileText, CalendarCheck, Book, Bus, Building2,
  Package, Calendar, Eye, Video, GraduationCap, Sliders,
  Plus, Minus, Star, ArrowRight, Layers, Sparkles
} from 'lucide-react'
import { Link } from '../Router'

// ─────────────────────────────────────────────────────────────
// DASA EDUCORE CAMPUS ERP
// Aesthetic: Vibrant Emerald Teal & Warm Amber & Deep Midnight Slate
// Visually rich, colorful, modern, and engaging
// ─────────────────────────────────────────────────────────────

export default function SchoolErpProductView() {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeNav, setActiveNav] = useState('Dashboard')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // 6 "Why DASA EduERP" Feature Cards
  const WHY_FEATURES = [
    {
      title: 'Instant Setup',
      desc: 'Go live in hours, not months. Import your existing student data, configure your school profile, and you\'re running.',
      icon: Zap,
      iconBg: 'bg-teal-50 text-teal-600 border border-teal-200/70',
      hoverBorder: 'hover:border-teal-300'
    },
    {
      title: 'Bank-Level Security',
      desc: 'Role-based access control, encrypted data at rest, audit logs, and IP whitelisting keep your school data safe.',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-200/70',
      hoverBorder: 'hover:border-emerald-300'
    },
    {
      title: 'Parent & Student Portal',
      desc: 'Parents see attendance, fees, results, and notices in real-time. Students access homework and course materials — anywhere.',
      icon: Smartphone,
      iconBg: 'bg-purple-50 text-purple-600 border border-purple-200/70',
      hoverBorder: 'hover:border-purple-300'
    },
    {
      title: 'Powerful Analytics',
      desc: 'Executive dashboards, fee collection trends, attendance heatmaps, and custom report builder — all in real time.',
      icon: BarChart3,
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-200/70',
      hoverBorder: 'hover:border-amber-300'
    },
    {
      title: 'Smart Communication',
      desc: 'Bulk email notices to parents and staff. Track read receipts, send targeted announcements, and maintain a full log.',
      icon: Mail,
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-200/70',
      hoverBorder: 'hover:border-blue-300'
    },
    {
      title: 'Integrated LMS',
      desc: 'Publish courses, video lessons, quizzes, and assignments. Track student progress with detailed completion reports.',
      icon: BookOpen,
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-200/70',
      hoverBorder: 'hover:border-rose-300'
    }
  ]

  // Integrated Modules List matching Screenshot 3
  const MODULES = [
    {
      id: 'admissions',
      title: 'Admissions',
      desc: 'Online applications, document verification & enrolment',
      icon: FileText,
      iconColor: 'bg-teal-50 text-teal-600'
    },
    {
      id: 'students',
      title: 'Students',
      desc: 'Profiles, ID cards, promotions & records',
      icon: Users,
      iconColor: 'bg-emerald-50 text-emerald-600'
    },
    {
      id: 'academics',
      title: 'Academics',
      desc: 'Classes, subjects, timetables & curriculum',
      icon: BookOpen,
      iconColor: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'attendance',
      title: 'Attendance',
      desc: 'Daily marking, reports & parent alerts',
      icon: CalendarCheck,
      iconColor: 'bg-amber-50 text-amber-600'
    },
    {
      id: 'exams',
      title: 'Exams & Results',
      desc: 'Schedules, mark entry, grades & report cards',
      icon: BarChart2,
      iconColor: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'fees',
      title: 'Fee Management',
      desc: 'Invoicing, payments, receipts & dues tracking',
      icon: CreditCard,
      iconColor: 'bg-amber-50 text-amber-600'
    },
    {
      id: 'hr-payroll',
      title: 'HR & Payroll',
      desc: 'Staff profiles, leaves, salary & payslips',
      icon: UserCheck,
      iconColor: 'bg-emerald-50 text-emerald-600'
    },
    {
      id: 'library',
      title: 'Library',
      desc: 'Catalogue, issues, returns & fine management',
      icon: Book,
      iconColor: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'transport',
      title: 'Transport',
      desc: 'Routes, vehicles, stops & student bus passes',
      icon: Bus,
      iconColor: 'bg-rose-50 text-rose-600'
    },
    {
      id: 'hostel',
      title: 'Hostel',
      desc: 'Room allocation, warden records & visitor log',
      icon: Building2,
      iconColor: 'bg-teal-50 text-teal-600'
    },
    {
      id: 'parent-portal',
      title: 'Parent Portal',
      desc: 'Real-time visibility for guardians',
      icon: Smartphone,
      iconColor: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'communication',
      title: 'Communication',
      desc: 'Bulk email, notices & read receipts',
      icon: Mail,
      iconColor: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'reports',
      title: 'Reports',
      desc: 'Analytics, dashboards & custom report builder',
      icon: BarChart3,
      iconColor: 'bg-amber-50 text-amber-600'
    },
    {
      id: 'inventory',
      title: 'Inventory',
      desc: 'Stock, purchase orders & GRN workflow',
      icon: Package,
      iconColor: 'bg-emerald-50 text-emerald-600'
    },
    {
      id: 'events',
      title: 'Events',
      desc: 'Calendar, RSVP & photo gallery',
      icon: Calendar,
      iconColor: 'bg-amber-50 text-amber-600',
      activeBorder: true
    },
    {
      id: 'gate-visitors',
      title: 'Gate & Visitors',
      desc: 'Visitor passes, QR check-in & blacklist',
      icon: Eye,
      iconColor: 'bg-rose-50 text-rose-600'
    },
    {
      id: 'lms',
      title: 'LMS',
      desc: 'Courses, quizzes, assignments & progress',
      icon: Video,
      iconColor: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'alumni',
      title: 'Alumni',
      desc: 'Directory, achievements & newsletter',
      icon: GraduationCap,
      iconColor: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'system-admin',
      title: 'System Admin',
      desc: 'RBAC, audit log, backups & school settings',
      icon: Sliders,
      iconColor: 'bg-slate-100 text-slate-600'
    }
  ]

  // Testimonials matching Screenshot 4
  const TESTIMONIALS = [
    {
      quote: '"We replaced four different software systems with DASA EduERP. Attendance, fees, and communication now happen in one place. Our admin work dropped by 60%."',
      author: 'Rajesh Sharma',
      role: 'Principal, Sunrise Academy, Jaipur',
      avatar: 'RS',
      avatarBg: 'bg-teal-600'
    },
    {
      quote: '"Parents love the portal. They can see attendance and fees without calling the office. Our phone inquiries dropped by 80% in the first month."',
      author: 'Priya Mehta',
      role: 'Administrator, Greenwood School, Pune',
      avatar: 'PM',
      avatarBg: 'bg-emerald-600'
    },
    {
      quote: '"The fee management module alone saved us weeks of manual reconciliation. Collections are up 25% since we started sending automated reminders."',
      author: 'Amit Kumar',
      role: 'Director, The Future School, Delhi',
      avatar: 'AK',
      avatarBg: 'bg-amber-600'
    }
  ]

  // FAQs matching Screenshot 5
  const FAQS = [
    {
      question: 'How long does it take to set up?',
      answer: 'Most schools go live within 24 to 48 hours. Our guided onboarding wizard and bulk Excel import allow you to upload student and staff records in minutes without complex IT infrastructure.'
    },
    {
      question: 'Can I import existing student data?',
      answer: 'Yes, seamlessly. DASA EduERP provides pre-formatted Excel and CSV templates to import students, parents, staff details, fee heads, and past academic archives in a single batch.'
    },
    {
      question: 'Is there a mobile app for parents?',
      answer: 'Yes! Both parents and students receive responsive web and mobile portal access to check daily attendance, view fee receipts, download report cards, and receive real-time school announcements.'
    },
    {
      question: 'How is data kept secure?',
      answer: 'We employ bank-grade security protocols including AES-256 encryption at rest, TLS in transit, granular role-based permissions (RBAC), automated daily cloud backups, and immutable system audit logs.'
    },
    {
      question: 'Can multiple schools use one installation?',
      answer: 'Yes. DASA EduERP natively supports multi-campus and trust hierarchies, enabling educational trusts and school groups to administer multiple branches from a single central console.'
    },
    {
      question: 'What kind of support is provided?',
      answer: 'Every school is assigned a dedicated implementation manager. We provide 24/7 phone & WhatsApp support, staff training workshops, and continuous software enhancements with guaranteed SLA response times.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 selection:bg-teal-600 selection:text-white pt-24 font-sans">

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

      {/* ── 1. HERO SECTION (SCREENSHOT 1) ────────────────────── */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-teal-50/40 via-[#FAFBFD] to-[#FAFBFD] overflow-hidden border-b border-slate-200/80">
        
        {/* Soft Ambient Glow Elements */}
        <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-gradient-to-br from-teal-200/20 via-emerald-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-amber-200/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Headline & CTA */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
                <GraduationCap className="w-4 h-4 text-teal-600" />
                <span>Complete School ERP Platform</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                Run Your School <br />
                with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700">Effortless</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700">Control</span>
              </h1>

              {/* Subheading */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                One unified platform for admissions, attendance, fees, academics, communication and more — built for modern schools that demand results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
                >
                  <Zap className="w-4 h-4 text-teal-400 fill-teal-400" />
                  <span>Start Free Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="#modules"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-teal-50 border border-slate-300 text-slate-800 font-display font-bold text-xs sm:text-sm shadow-xs hover:border-teal-300 transition-all"
                >
                  <ChevronRight className="w-4 h-4 text-teal-600" />
                  <span>See Features</span>
                </a>
              </div>

              {/* Feature Checklist */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs sm:text-sm text-slate-600 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-teal-600 stroke-[2.5]" /> No credit card required
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-teal-600 stroke-[2.5]" /> Setup in minutes
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-teal-600 stroke-[2.5]" /> Full support included
                </span>
              </div>

            </div>

            {/* Right Column: Interactive Browser Dashboard Mockup */}
            <div className="lg:col-span-6 relative">
              
              {/* Soft decorative background shapes from screenshot */}
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-[#FEF9C3] rounded-3xl -z-10 opacity-70" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-teal-100/50 rounded-3xl -z-10 opacity-70" />

              {/* Browser Window Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden transition-all">
                
                {/* Browser Top Navigation Bar */}
                <div className="px-4 py-2.5 bg-slate-50/90 border-b border-slate-200/80 flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 max-w-[360px] mx-auto bg-white border border-slate-200 rounded-md px-3 py-1 text-[11px] font-mono text-slate-500 flex items-center justify-between shadow-2xs">
                    <span>dasaeduerp.com/dashboard</span>
                    <RotateCw className="w-3 h-3 text-slate-400" />
                  </div>
                </div>

                {/* Window Inner Grid */}
                <div className="grid grid-cols-12 min-h-[380px]">
                  
                  {/* Left Mockup Sidebar */}
                  <div className="col-span-3 sm:col-span-3 border-r border-slate-100 p-3 space-y-3 bg-[#FCFCFD]">
                    <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase px-2 font-mono">
                      MENU
                    </div>
                    <nav className="space-y-1">
                      {[
                        { name: 'Dashboard', icon: Home },
                        { name: 'Students', icon: Users },
                        { name: 'Attendance', icon: UserCheck },
                        { name: 'Fees', icon: CreditCard },
                        { name: 'Exams', icon: BarChart2 },
                        { name: 'Messages', icon: Mail }
                      ].map((item) => {
                        const Icon = item.icon
                        const isActive = activeNav === item.name
                        return (
                          <button
                            key={item.name}
                            onClick={() => setActiveNav(item.name)}
                            className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-all ${
                              isActive
                                ? 'bg-teal-50 text-teal-700 font-bold shadow-2xs'
                                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5 text-teal-600" />
                            <span className="hidden sm:inline">{item.name}</span>
                          </button>
                        )
                      })}
                    </nav>
                  </div>

                  {/* Main Content Area */}
                  <div className="col-span-9 sm:col-span-9 p-4 sm:p-5 space-y-4 bg-white">
                    
                    {/* 4 Stats Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 space-y-1">
                        <div className="font-display font-black text-slate-900 text-sm sm:text-base">1,248</div>
                        <div className="text-[10px] text-slate-500 font-medium">Students</div>
                        <span className="inline-block text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded">↑ 12%</span>
                      </div>
                      <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 space-y-1">
                        <div className="font-display font-black text-slate-900 text-sm sm:text-base">94.2%</div>
                        <div className="text-[10px] text-slate-500 font-medium">Attendance</div>
                        <span className="inline-block text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded">↑ 2.1%</span>
                      </div>
                      <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 space-y-1">
                        <div className="font-display font-black text-slate-900 text-sm sm:text-base">₹8.4L</div>
                        <div className="text-[10px] text-slate-500 font-medium">Fees</div>
                        <span className="inline-block text-[9px] font-bold text-teal-700 bg-teal-50 border border-teal-200/60 px-1.5 py-0.5 rounded">↑ 18%</span>
                      </div>
                      <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 space-y-1">
                        <div className="font-display font-black text-slate-900 text-sm sm:text-base">87</div>
                        <div className="text-[10px] text-slate-500 font-medium">Staff</div>
                        <span className="inline-block text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded">All in</span>
                      </div>
                    </div>

                    {/* 2 Charts Side by Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Monthly Attendance Chart */}
                      <div className="p-3 rounded-xl border border-slate-100 bg-slate-50/40 space-y-2">
                        <div className="text-[11px] font-bold text-slate-700 font-display">Monthly Attendance</div>
                        <div className="flex items-end justify-between h-16 gap-1 pt-2">
                          {[50, 75, 60, 85, 70, 95, 80].map((h, i) => (
                            <div
                              key={i}
                              style={{ height: `${h}%` }}
                              className="w-full bg-gradient-to-t from-teal-600 to-emerald-500 rounded-t-sm transition-all hover:brightness-110"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Fee Collection Chart */}
                      <div className="p-3 rounded-xl border border-slate-100 bg-slate-50/40 space-y-2">
                        <div className="text-[11px] font-bold text-slate-700 font-display">Fee Collection</div>
                        <div className="flex items-end justify-between h-16 gap-1 pt-2">
                          {[40, 65, 80, 55, 90, 95, 65].map((h, i) => (
                            <div
                              key={i}
                              style={{ height: `${h}%` }}
                              className="w-full bg-gradient-to-t from-amber-500 to-emerald-500 rounded-t-sm transition-all hover:brightness-110"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Table View */}
                    <div className="rounded-xl border border-slate-100 overflow-hidden text-[11px]">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-slate-100 bg-slate-50/60 text-[10px] font-bold text-slate-400 font-mono">
                            <th className="py-1.5 px-3">STUDENT</th>
                            <th className="py-1.5 px-2">CLASS</th>
                            <th className="py-1.5 px-2">ATTEND.</th>
                            <th className="py-1.5 px-2">FEES</th>
                            <th className="py-1.5 px-3">STATUS</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="hover:bg-slate-50/50">
                            <td className="py-1.5 px-3 font-medium text-slate-900">Aarav Sharma</td>
                            <td className="py-1.5 px-2 text-slate-600 font-mono">X-A</td>
                            <td className="py-1.5 px-2 text-slate-600 font-mono">98%</td>
                            <td className="py-1.5 px-2 text-slate-600 font-mono">Paid</td>
                            <td className="py-1.5 px-3">
                              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                Active
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="py-1.5 px-3 font-medium text-slate-900">Priya Patel</td>
                            <td className="py-1.5 px-2 text-slate-600 font-mono">IX-B</td>
                            <td className="py-1.5 px-2 text-slate-600 font-mono">91%</td>
                            <td className="py-1.5 px-2 text-slate-600 font-mono">Partial</td>
                            <td className="py-1.5 px-3">
                              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="py-1.5 px-3 font-medium text-slate-900">Rohit Mehta</td>
                            <td className="py-1.5 px-2 text-slate-600 font-mono">XI-C</td>
                            <td className="py-1.5 px-2 text-slate-600 font-mono">95%</td>
                            <td className="py-1.5 px-2 text-slate-600 font-mono">Paid</td>
                            <td className="py-1.5 px-3">
                              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
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
      </section>

      {/* ── 2. METRICS BAR (SCREENSHOT 2) ─────────────────────── */}
      <section className="py-12 border-y border-slate-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            <div className="pt-2 sm:pt-0">
              <div className="font-display font-black text-3xl sm:text-4xl text-teal-600">20+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-mono font-medium mt-1">Modules Built-In</div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="font-display font-black text-3xl sm:text-4xl text-emerald-600">500+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-mono font-medium mt-1">Schools Ready</div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="font-display font-black text-3xl sm:text-4xl text-slate-900">50K+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-mono font-medium mt-1">Students Managed</div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="font-display font-black text-3xl sm:text-4xl text-teal-600">99.9%</div>
              <div className="text-xs sm:text-sm text-slate-600 font-mono font-medium mt-1">Uptime SLA</div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="font-display font-black text-3xl sm:text-4xl text-amber-600">4.9★</div>
              <div className="text-xs sm:text-sm text-slate-600 font-mono font-medium mt-1">Average Rating</div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. WHY DASA EDUERP (SCREENSHOT 2) ─────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAFBFD]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200/70 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>WHY DASA EDUERP</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Everything your school needs, in one place
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Stop juggling spreadsheets, paper registers, and disconnected apps. DASA EduERP brings it all together — seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {WHY_FEATURES.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl bg-white border border-slate-200 ${feature.hoverBorder} hover:shadow-xl transition-all duration-300 space-y-4 group`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${feature.iconBg} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-teal-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {feature.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 4. 20 INTEGRATED MODULES (SCREENSHOT 3) ───────────── */}
      <section id="modules" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200/70 text-xs font-mono font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-teal-600" />
              <span>20 INTEGRATED MODULES</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              One platform, every school function
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              No add-ons. No extra licenses. Everything is included and works together out of the box.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {MODULES.map((mod) => {
              const Icon = mod.icon
              const isSelected = mod.activeBorder
              return (
                <div
                  key={mod.id}
                  className={`p-5 rounded-2xl bg-white border transition-all duration-200 flex items-start gap-4 hover:shadow-lg hover:border-teal-400 ${
                    isSelected ? 'border-teal-500 ring-2 ring-teal-500/15 shadow-md' : 'border-slate-200/90'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center ${mod.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 leading-tight">
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

      {/* ── 5. GET STARTED IN 3 STEPS (SCREENSHOT 4) ───────────── */}
      <section className="py-20 lg:py-28 bg-[#FAFBFD] border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200/70 text-xs font-mono font-bold uppercase tracking-wider">
              <span>GET STARTED IN 3 STEPS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Up and running in hours
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              No IT team needed. Our onboarding wizard guides you from setup to live school operations.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-24 right-24 h-0.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 -z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-center">
              
              {/* Step 1 */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 text-white font-display font-black text-lg flex items-center justify-center mx-auto shadow-md shadow-teal-500/25">
                  1
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 pt-2">
                  Configure Your School
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Set up classes, sections, fee heads, and academic year. Import existing student data via Excel — done in minutes.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 text-white font-display font-black text-lg flex items-center justify-center mx-auto shadow-md shadow-teal-500/25">
                  2
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 pt-2">
                  Invite Your Team
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Add admins, teachers, and office staff with tailored roles and permissions. No one sees more than they should.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 text-white font-display font-black text-lg flex items-center justify-center mx-auto shadow-md shadow-teal-500/25">
                  3
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 pt-2">
                  Go Live
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Share portal links with parents and students. Start marking attendance, collecting fees, and sending notices — today.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 6. WHAT SCHOOLS SAY (SCREENSHOT 4) ────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200/70 text-xs font-mono font-bold uppercase tracking-wider">
              <span>WHAT SCHOOLS SAY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Loved by school leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:border-teal-300 hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 stroke-none" />
                    ))}
                  </div>
                  
                  <p className="text-sm text-slate-700 italic leading-relaxed font-normal">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className={`w-10 h-10 rounded-full ${t.avatarBg} text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs`}>
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-sm text-slate-900">
                      {t.author}
                    </div>
                    <div className="text-xs text-slate-500 truncate font-mono">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. COMMON QUESTIONS FAQ (SCREENSHOT 5) ─────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAFBFD] border-t border-slate-200/80">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200/70 text-xs font-mono font-bold uppercase tracking-wider">
              <span>FAQ</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden hover:border-teal-200 transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 sm:py-5 px-6 flex items-center justify-between text-left gap-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-slate-400">
                      {isOpen ? <Minus className="w-5 h-5 text-teal-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
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
                        <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 font-normal">
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

      {/* ── 8. GET STARTED TODAY FINAL CTA (SIGNATURE THEME) ────── */}
      <section className="py-20 lg:py-28 bg-[#FAFBFD] border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 text-white shadow-2xl space-y-6 border border-teal-500/30">
            

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Ready to modernize your school?
            </h2>

            <p className="text-teal-100/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
              Join schools that trust DASA EduERP to run their daily operations. Free demo — no commitment required.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-display font-bold text-xs shadow-lg shadow-teal-500/30 transition-all hover:-translate-y-0.5"
              >
                <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                <span>Start Free Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-teal-500/30 text-white font-display font-bold text-xs transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>Contact Sales</span>
              </Link>
            </div>

            <div className="pt-2 text-xs font-mono text-teal-200/60 flex flex-wrap items-center justify-center gap-2">
              <span>No credit card required</span>
              <span>•</span>
              <span>Full data export any time</span>
              <span>•</span>
              <span>Cancel anytime</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
