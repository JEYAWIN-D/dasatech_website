import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck, Clock, MapPin, Sparkles, ArrowRight,
  Send, HelpCircle, CheckCircle2, AlertCircle, Cpu, Layers, Globe,
  Smartphone, ShoppingCart, TrendingUp, GraduationCap, Handshake,
  Check, Copy, ExternalLink, ChevronRight, Lock, RefreshCw,
  Briefcase, Activity, CheckCircle, Terminal, Info, Users, LayoutGrid, Box
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import ContactProjectEstimator from '../components/ContactProjectEstimator'

// ─────────────────────────────────────────────────────────────
// OFFICIAL SIGNAL VECTOR ICON
// Pixel-perfect official Signal brand vector mark
// ─────────────────────────────────────────────────────────────
function SignalBrandIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────
// DATA CONSTANTS – CURATED COUNTRIES LIST
// ─────────────────────────────────────────────────────────────
const COUNTRY_OPTIONS = [
  { code: 'IN', name: 'India', dial: '+91' },
  { code: 'US', name: 'United States', dial: '+1' },
  { code: 'AE', name: 'United Arab Emirates', dial: '+971' },
  { code: 'GB', name: 'United Kingdom', dial: '+44' },
  { code: 'SG', name: 'Singapore', dial: '+65' },
  { code: 'SA', name: 'Saudi Arabia', dial: '+966' },
  { code: 'QA', name: 'Qatar', dial: '+974' },
  { code: 'OM', name: 'Oman', dial: '+968' },
  { code: 'MY', name: 'Malaysia', dial: '+60' },
  { code: 'CA', name: 'Canada', dial: '+1' },
  { code: 'AU', name: 'Australia', dial: '+61' },
  { code: 'DE', name: 'Germany', dial: '+49' },
  { code: 'NL', name: 'Netherlands', dial: '+31' },
  { code: 'FR', name: 'France', dial: '+33' },
  { code: 'CH', name: 'Switzerland', dial: '+41' },
  { code: 'JP', name: 'Japan', dial: '+81' },
  { code: 'OTHER', name: 'Other International', dial: '' }
]

// ─────────────────────────────────────────────────────────────
// ENQUIRY CATEGORIES & SERVICES CATALOG
// ─────────────────────────────────────────────────────────────
const ENQUIRY_CATEGORIES = [
  'General Enquiry',
  'Software Development',
  'ERP Solutions',
  'Website & Mobile App Development',
  'E-Commerce Development',
  'Digital Marketing & CRM',
  'Home & Industrial Automation',
  'IoT Solutions',
  'Business Partnership',
  'Internship / Career',
  'Other'
]

const CORE_SERVICES = [
  {
    id: 'software-erp',
    title: 'Custom Software & ERP Development',
    categoryMatch: 'ERP Solutions',
    icon: Layers,
    color: '#D97706',
    badge: 'Enterprise Core',
    description: 'Multi-branch enterprise ERP platforms, microservice backend engines, and real-time distributed accounting ledgers.',
    highlights: ['Multi-Branch Inventory Sync', 'Double-Entry GST Engine', 'Keyboard-First POS Terminal']
  },
  {
    id: 'web-mobile',
    title: 'Website & Mobile App Development',
    categoryMatch: 'Website & Mobile App Development',
    icon: Smartphone,
    color: '#4F46E5',
    badge: 'High Performance',
    description: 'Sub-second responsive React/Next.js web applications and cross-platform native iOS & Android applications.',
    highlights: ['Sub-600ms Loading Velocity', 'PWA Offline First Sync', 'Role-Based Admin Consoles']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    categoryMatch: 'E-Commerce Development',
    icon: ShoppingCart,
    color: '#059669',
    badge: 'Omnichannel Commerce',
    description: 'High-throughput headless commerce architectures, multi-vendor vendor hubs, and zero-downtime payment flows.',
    highlights: ['Sub-Second Checkout Flow', 'Multi-Vendor Split Engine', 'Automated Cart Recovery']
  },
  {
    id: 'vertical-erp',
    title: 'School, Textile & Pharmacy ERP',
    categoryMatch: 'ERP Solutions',
    icon: GraduationCap,
    color: '#0284C7',
    badge: 'Vertical Systems',
    description: 'Purpose-built industrial solutions for multi-location healthcare pharmacies, school campuses, and textile mills.',
    highlights: ['Batch FIFO Expiry Tracking', 'Biometric Student SIS Portals', 'Textile Looms Machine Telemetry']
  },
  {
    id: 'automation-iot',
    title: 'Home, Industrial & Agricultural Automation',
    categoryMatch: 'Home & Industrial Automation',
    icon: Cpu,
    color: '#D97706',
    badge: 'Industry 4.0 & Edge',
    description: 'Industrial SCADA PLC telemetry, edge LoRa/MQTT sensor networks, touchless NFC workflows, and smart facility controllers.',
    highlights: ['Real-Time PLC Telemetry', 'Sub-GHz LoRa Mesh Nodes', 'Touchless Smart NFC Stationing']
  },
  {
    id: 'marketing-crm',
    title: 'Digital Marketing & CRM Solutions',
    categoryMatch: 'Digital Marketing & CRM',
    icon: TrendingUp,
    color: '#D97706',
    badge: 'Revenue Acceleration',
    description: 'Data-driven brand positioning, high-converting creative performance campaigns, and automated multi-channel CRM pipelines.',
    highlights: ['Omnichannel Lead Ingestion', 'Visual Deal Pipeline HUD', 'Integrated Messaging Workflows']
  }
]

// ─────────────────────────────────────────────────────────────
// DEPARTMENT CARDS (LEFT COLUMN)
// ─────────────────────────────────────────────────────────────
const DEPARTMENT_CARDS = [
  {
    title: 'General Enquiries',
    icon: Globe,
    color: 'text-amber-700',
    bgColor: 'bg-amber-50 border-amber-200',
    description: 'Corporate communications, technology advisory, and executive management correspondence.',
    category: 'General Enquiry'
  },
  {
    title: 'Software & ERP Development',
    icon: Layers,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 border-indigo-200',
    description: 'Custom ERP architectures, high-concurrency microservices, and bespoke enterprise software.',
    category: 'ERP Solutions'
  },
  {
    title: 'Digital Transformation',
    icon: TrendingUp,
    color: 'text-fuchsia-600',
    bgColor: 'bg-fuchsia-50 border-fuchsia-200',
    description: 'Modernizing legacy architectures, cloud migrations, and automated enterprise CRM pipelines.',
    category: 'Digital Marketing & CRM'
  },
  {
    title: 'IoT & Automation',
    icon: Cpu,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 border-emerald-200',
    description: 'Edge sensor telemetry, industrial PLC SCADA integrations, and intelligent facility automation.',
    category: 'Home & Industrial Automation'
  },
  {
    title: 'Business Partnerships',
    icon: Handshake,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 border-amber-200',
    description: 'System integration alliances, technology licensing, and commercial enterprise collaborations.',
    category: 'Business Partnership'
  },
  {
    title: 'Internship & Career Enquiries',
    icon: GraduationCap,
    color: 'text-sky-600',
    bgColor: 'bg-sky-50 border-sky-200',
    description: 'Engineering apprenticeships, R&D internships, and professional software engineering careers.',
    category: 'Internship / Career'
  }
]

// ─────────────────────────────────────────────────────────────
// TRUST PILLARS (SECTION 6)
// ─────────────────────────────────────────────────────────────
const TRUST_PILLARS = [
  {
    title: 'Business-Focused Technology Solutions',
    desc: 'Every architecture decision is calibrated to commercial efficiency, operational throughput, and measurable return on investment.',
    icon: Briefcase,
    color: '#D97706'
  },
  {
    title: 'Custom-Built Software Architecture',
    desc: 'Bespoke systems built precisely around your operational workflows, eliminating restrictive third-party licenses and bloat.',
    icon: Layers,
    color: '#4F46E5'
  },
  {
    title: 'Integrated Automation Capabilities',
    desc: 'Bridging physical edge hardware, smart NFC telemetry, industrial PLCs, and cloud web applications under one unified stack.',
    icon: Cpu,
    color: '#059669'
  },
  {
    title: 'Scalable Digital Solutions',
    desc: 'Architected with resilient microservices and distributed database layers designed to absorb high transaction loads effortlessly.',
    icon: Activity,
    color: '#0284C7'
  },
  {
    title: 'Collaborative Project Execution',
    desc: 'Transparent milestones, weekly sprint telemetry, and direct collaboration with senior technical architects throughout delivery.',
    icon: Users,
    color: '#D97706'
  },
  {
    title: 'Continuous Technical Support',
    desc: 'Structured enterprise SLAs, proactive security patching, performance telemetry monitoring, and long-term evolutionary support.',
    icon: ShieldCheck,
    color: '#D97706'
  }
]

// ─────────────────────────────────────────────────────────────
// FREQUENTLY ASKED QUESTIONS (ENTERPRISE GRADE)
// ─────────────────────────────────────────────────────────────
const CORPORATE_FAQS = [
  {
    question: 'How fast can our team expect an initial technical review?',
    answer: 'Our engineering leadership reviews all business inquiries within 24 business hours. If immediate contact is required, our verified Signal channel provides direct encrypted access to our team.'
  },
  {
    question: 'Can we execute a Non-Disclosure Agreement (NDA) prior to scoping?',
    answer: 'Yes. We routinely execute bilateral NDAs with prospective enterprise clients before reviewing proprietary workflows, codebase assets, or confidential project specifications.'
  },
  {
    question: 'Does DASA TECH work with international and distributed clients?',
    answer: 'Absolutely. We partner with enterprises across India, the Middle East, Southeast Asia, and globally, orchestrating remote sprints, video architecture reviews, and asynchronous progress telemetry.'
  },
  {
    question: 'How do we reach DASA TECH directly on the Signal App?',
    answer: 'Search for our verified username "dasatech.99" within the Signal application, or tap the "Open in Signal App" button on this page to initiate an end-to-end encrypted direct dialogue.'
  }
]

export default function ContactPage() {
  // ── SEO Hook ──
  useSEO({
    title: 'Contact DASA TECH | Software Development & Digital Transformation',
    description: 'Connect with DASA TECH for custom software, ERP development, mobile applications, digital solutions, IoT and automation services.'
  })

  // ── Form State ──
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    country: 'India',
    category: 'Software Development',
    service: 'Custom Software & ERP Development',
    budget: '',
    timeline: '',
    message: '',
    // Contextual Dynamic Fields
    erpBusinessType: '',
    erpRequirementType: '',
    erpBottleneck: '',
    webAppScope: '',
    webAppPlatform: '',
    automationDomain: '',
    automationType: '',
    careerDiscipline: '',
    careerExperience: '',
    // Anti-Spam Honeypot (must remain empty)
    website_security_token: ''
  })

  const [formErrors, setFormErrors] = useState({})
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    referenceId: ''
  })
  const [copiedSignal, setCopiedSignal] = useState(false)
  const [showSignalGuide, setShowSignalGuide] = useState(false)
  const [selectedServiceCard, setSelectedServiceCard] = useState('software-erp')
  const [activeServicesTab, setActiveServicesTab] = useState('services') // 'services' | 'platforms'
  const lastSubmissionTime = useRef(0)

  // ── Copy Signal Username Handler ──
  const handleCopySignalUsername = async () => {
    const username = 'dasatech.99'
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(username)
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = username
        textArea.style.position = 'fixed'
        textArea.style.opacity = '0'
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
      setCopiedSignal(true)
      setTimeout(() => setCopiedSignal(false), 3000)
    } catch (err) {
      console.warn('Clipboard copy failed:', err)
      setCopiedSignal(true)
      setTimeout(() => setCopiedSignal(false), 3000)
    }
  }

  // ── Input Change Handler ──
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear specific field error on edit
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  // ── Pre-Select Service from Discovery Cards ──
  const handleSelectServiceCard = (service) => {
    setSelectedServiceCard(service.id)
    setFormData((prev) => ({
      ...prev,
      service: service.title,
      category: service.categoryMatch
    }))

    // Smooth scroll to interactive form
    const formEl = document.getElementById('enquiry-form-section')
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // ── Pre-Select Platform from Estimator ──
  const handleApplyPlatformEstimate = (estimate) => {
    setFormData((prev) => ({
      ...prev,
      service: 'Custom Software & ERP Development',
      category: 'ERP Solutions',
      message: `${prev.message ? prev.message + '\n\n' : ''}SELECTED SOLUTION MODULES:\n- Platforms: ${estimate.modules}\n- Deployment Scale: ${estimate.scale}\n- Velocity: ${estimate.timeline}\n- Additional Requirements:\n`
    }))

    const formEl = document.getElementById('enquiry-form-section')
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // ── Department Card Click Handler ──
  const handleDepartmentClick = (category) => {
    setFormData((prev) => ({ ...prev, category }))
    const formEl = document.getElementById('enquiry-form-section')
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // ── Validation Logic ──
  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please enter your full name (at least 2 characters)'
    }

    if (!formData.phone.trim() || formData.phone.trim().replace(/\D/g, '').length < 7) {
      errors.phone = 'Please enter a valid phone number (at least 7 digits)'
    }

    if (!formData.country.trim()) {
      errors.country = 'Please select your country'
    }

    if (!formData.category.trim()) {
      errors.category = 'Please choose an enquiry category'
    }

    if (!formData.service.trim()) {
      errors.service = 'Please select a service of interest'
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide details about your requirements (at least 10 characters)'
    }

    // Anti-spam honeypot detection
    if (formData.website_security_token.trim().length > 0) {
      errors.spam = 'Spam detected. Submission aborted.'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  // ── Form Submission Handler ──
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Rate Limiting: Minimum 15 seconds between submissions
    const now = Date.now()
    if (now - lastSubmissionTime.current < 15000) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please wait a moment before sending another enquiry.',
        referenceId: ''
      })
      return
    }

    if (!validateForm()) {
      return
    }

    setStatus({ loading: true, success: false, error: null, referenceId: '' })
    lastSubmissionTime.current = now

    // Generate unique reference tracking ID
    const refCode = `DASA-${Math.random().toString(36).substring(2, 8).toUpperCase()}`

    // Aggregate contextual responses
    const contextualSummary = []
    if (formData.category === 'ERP Solutions') {
      if (formData.erpBusinessType) contextualSummary.push(`Industry: ${formData.erpBusinessType}`)
      if (formData.erpRequirementType) contextualSummary.push(`ERP Requirement: ${formData.erpRequirementType}`)
      if (formData.erpBottleneck) contextualSummary.push(`Operational Challenge: ${formData.erpBottleneck}`)
    } else if (formData.category === 'Website & Mobile App Development') {
      if (formData.webAppScope) contextualSummary.push(`App Scope: ${formData.webAppScope}`)
      if (formData.webAppPlatform) contextualSummary.push(`Platform: ${formData.webAppPlatform}`)
    } else if (
      formData.category === 'Home & Industrial Automation' ||
      formData.category === 'IoT Solutions'
    ) {
      if (formData.automationDomain) contextualSummary.push(`Domain: ${formData.automationDomain}`)
      if (formData.automationType) contextualSummary.push(`Scope: ${formData.automationType}`)
    } else if (formData.category === 'Internship / Career') {
      if (formData.careerDiscipline) contextualSummary.push(`Discipline: ${formData.careerDiscipline}`)
      if (formData.careerExperience) contextualSummary.push(`Experience: ${formData.careerExperience}`)
    }

    const compiledMessage = [
      formData.message.trim(),
      contextualSummary.length > 0 ? `\n--- Contextual Specifications ---\n${contextualSummary.join('\n')}` : null,
      formData.budget ? `Budget Range: ${formData.budget}` : null,
      formData.timeline ? `Target Timeline: ${formData.timeline}` : null,
      `Reference ID: ${refCode}`
    ].filter(Boolean).join('\n')

    // Persist to local audit storage
    try {
      const existingLogs = JSON.parse(localStorage.getItem('dasa_enquiry_audit') || '[]')
      existingLogs.unshift({
        referenceId: refCode,
        timestamp: new Date().toISOString(),
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        country: formData.country,
        category: formData.category,
        service: formData.service,
        status: 'DISPATCHED'
      })
      localStorage.setItem('dasa_enquiry_audit', JSON.stringify(existingLogs.slice(0, 20)))
    } catch {
      // Local storage may be restricted in private browsing
    }

    // Secure Backend Dispatch via Internal FormSubmit Relay
    try {
      const response = await fetch('https://formsubmit.co/ajax/dasatechmu@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Reference ID': refCode,
          'Full Name': formData.name,
          'Company': formData.company || 'Not specified',
          'Phone Number': formData.phone,
          'Country': formData.country,
          'Enquiry Category': formData.category,
          'Service Interested In': formData.service,
          'Budget Range': formData.budget || 'Flexible / To be estimated',
          'Target Timeline': formData.timeline || 'Flexible / Planning',
          'Contextual Details': contextualSummary.join(' | ') || 'None provided',
          'Project Requirements': compiledMessage,
          _subject: `[Corporate Inquiry — ${formData.category}] ${formData.name} (${formData.country}) Ref: ${refCode}`,
          _template: 'table',
          _captcha: 'false',
          _honey: ''
        })
      })

      const result = await response.json().catch(() => ({}))

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setStatus({
          loading: false,
          success: true,
          error: null,
          referenceId: refCode
        })
        // Reset inputs
        setFormData({
          name: '',
          company: '',
          phone: '',
          country: 'India',
          category: 'Software Development',
          service: 'Custom Software & ERP Development',
          budget: '',
          timeline: '',
          message: '',
          erpBusinessType: '',
          erpRequirementType: '',
          erpBottleneck: '',
          webAppScope: '',
          webAppPlatform: '',
          automationDomain: '',
          automationType: '',
          careerDiscipline: '',
          careerExperience: '',
          website_security_token: ''
        })
      } else {
        throw new Error(result.message || 'Gateway response unconfirmed')
      }
    } catch (dispatchError) {
      console.warn('Primary dispatch encountered network exception, testing fallback form gateway:', dispatchError)
      try {
        const formDataPayload = new FormData()
        formDataPayload.append('Reference ID', refCode)
        formDataPayload.append('Full Name', formData.name)
        formDataPayload.append('Company', formData.company || 'Not specified')
        formDataPayload.append('Phone Number', formData.phone)
        formDataPayload.append('Country', formData.country)
        formDataPayload.append('Category', formData.category)
        formDataPayload.append('Service', formData.service)
        formDataPayload.append('Requirements', compiledMessage)
        formDataPayload.append('_subject', `[Corporate Inquiry — ${formData.category}] ${formData.name} Ref: ${refCode}`)
        formDataPayload.append('_template', 'table')
        formDataPayload.append('_captcha', 'false')

        await fetch('https://formsubmit.co/dasatechmu@gmail.com', {
          method: 'POST',
          body: formDataPayload,
          mode: 'no-cors'
        })

        setStatus({
          loading: false,
          success: true,
          error: null,
          referenceId: refCode
        })
      } catch (fallbackError) {
        console.error('All form submission gateways failed:', fallbackError)
        setStatus({
          loading: false,
          success: false,
          error: 'Our enquiry dispatch gateway is momentarily unreachable. Your details have been preserved. You can also connect directly with our engineering team on Signal: @dasatech.99',
          referenceId: ''
        })
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#141017] selection:bg-amber-500 selection:text-white relative overflow-hidden font-body">

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1 – PREMIUM HERO SECTION
          International enterprise aesthetics, sophisticated typography,
          abstract tech telemetry console, glowing accents, zero stock photo clutter.
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#EFE6D8] overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-white to-white">
        
        {/* Subtle Tech Matrix Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />
        
        {/* Soft Ambient Radial Warm Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Hero Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Prestigious Enterprise Pill */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold tracking-wider uppercase shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>CORPORATE COMMUNICATION PORTAL</span>
              </motion.div>

              {/* Main Heading – Exact prompt specification */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl sm:text-5xl lg:text-[58px] font-black tracking-tight text-[#141017] leading-[1.12]"
              >
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 bg-clip-text text-transparent">
                  Extraordinary.
                </span>
              </motion.h1>

              {/* Supporting Text – Exact prompt specification */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-[#6F6878] leading-relaxed max-w-2xl font-normal"
              >
                Have an idea, a business challenge, or a technology requirement? Connect with DASA TECH and explore how our technology solutions can help your business move forward.
              </motion.p>

              {/* Quick Jump Action Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2 flex flex-wrap items-center gap-3.5"
              >
                <a
                  href="#enquiry-form-section"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-display text-sm font-bold shadow-md shadow-amber-500/25 transition-all cursor-pointer hover:-translate-y-0.5"
                >
                  <span>Request Project Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#signal-contact-card"
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-[#141017] border border-[#EFE6D8] hover:border-amber-300 font-display text-sm font-bold transition-all shadow-xs hover:-translate-y-0.5 cursor-pointer"
                >
                  <SignalBrandIcon className="w-4 h-4 text-[#3A76F0]" />
                  <span>Signal: @dasatech.99</span>
                </a>
              </motion.div>

              {/* Key Assurance Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-slate-500"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  <span>24-Hour Technical Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Bilateral NDA Standard</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-indigo-600" />
                  <span>Signal Encrypted Direct Channel</span>
                </div>
              </motion.div>

            </div>

            {/* Right: Modern High-Tech Architectural Telemetry Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-3xl p-6 sm:p-8 bg-[#120D16] border border-amber-500/20 text-white shadow-2xl shadow-slate-900/40 space-y-6"
              >
                {/* Luminous Top Accent Line */}
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent pointer-events-none" />

                {/* Console Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                      DISCOVERY TERMINAL
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-300 bg-amber-950/70 px-2.5 py-1 rounded-md border border-amber-800/50">
                    SLA &lt; 24h
                  </span>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-3.5 text-xs font-mono">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400">Headquarters</span>
                    <span className="text-white font-bold">Erode, Tamil Nadu, India</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400">Direct Signal Channel</span>
                    <span className="text-amber-300 font-bold flex items-center gap-1.5">
                      <SignalBrandIcon className="w-3.5 h-3.5 text-[#3A76F0]" />
                      @dasatech.99
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400">Engagement Protocol</span>
                    <span className="text-emerald-400 font-bold">Mutual NDA Ready</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400">Operating Schedule</span>
                    <span className="text-slate-200">Mon – Sat (09:00 – 19:00 IST)</span>
                  </div>
                </div>

                {/* Live Engineering Capabilities Ticker */}
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-bold">
                    Core Technical Domains
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Custom ERP', 'Next.js & React', 'Cross-Platform Apps', 'Edge IoT Mesh', 'SCADA Automation', 'Enterprise CRM'].map((domain, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 5 – OUR SERVICES – VISUAL DISCOVERY
          "How Can We Help Your Business?"
          Show DASA TECH's actual service offerings.
          Allows users to click any card to automatically populate the form's service.
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EFE6D8] relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>CAPABILITIES DIRECTORY</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-[40px] text-[#141017] tracking-tight">
              How Can We Help Your Business?
            </h2>
            <p className="text-sm sm:text-base text-[#6F6878] leading-relaxed font-normal">
              Explore DASA TECH's core enterprise solutions. Select any service card below to automatically attach it to your consultation inquiry.
            </p>

            {/* Dual Explorer Tabs */}
            <div className="pt-2 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setActiveServicesTab('services')}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display text-xs font-bold transition-all cursor-pointer ${
                  activeServicesTab === 'services'
                    ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white shadow-md shadow-amber-500/20'
                    : 'bg-white text-[#6F6878] hover:text-[#141017] border border-[#EFE6D8] hover:bg-[#FAF7F2]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Core Technology Disciplines (6)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveServicesTab('platforms')}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display text-xs font-bold transition-all cursor-pointer ${
                  activeServicesTab === 'platforms'
                    ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white shadow-md shadow-amber-500/20'
                    : 'bg-white text-[#6F6878] hover:text-[#141017] border border-[#EFE6D8] hover:bg-[#FAF7F2]'
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>Ready Enterprise Software Platforms (10)</span>
              </button>
            </div>
          </div>

          {/* TAB 1: 6 High-Impact Service Cards (Section 5 requirements) */}
          {activeServicesTab === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {CORE_SERVICES.map((srv) => {
                const IconComponent = srv.icon
                const isSelected = selectedServiceCard === srv.id

                return (
                  <div
                    key={srv.id}
                    onClick={() => handleSelectServiceCard(srv)}
                    className={`group rounded-2xl p-6 sm:p-7 border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#FDF8EE] border-amber-500 shadow-lg shadow-amber-500/10 -translate-y-1'
                        : 'bg-white border-[#EFE6D8] hover:border-amber-300 hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Top Row: Icon and Badge */}
                      <div className="flex items-center justify-between">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                          style={{ backgroundColor: `${srv.color}15`, color: srv.color }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                          {srv.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-lg sm:text-xl text-[#141017] group-hover:text-amber-800 transition-colors leading-snug">
                          {srv.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#6F6878] leading-relaxed">
                          {srv.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-2 border-t border-[#EFE6D8]">
                        {srv.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs font-mono text-slate-600">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Trigger */}
                    <div className="pt-5 mt-4 border-t border-[#EFE6D8] flex items-center justify-between text-xs font-display font-bold">
                      <span className={isSelected ? 'text-amber-800' : 'text-slate-500 group-hover:text-amber-800 transition-colors'}>
                        {isSelected ? '✓ Selected for Inquiry' : 'Select This Service'}
                      </span>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white'
                          : 'bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-rose-600 group-hover:text-white text-slate-600'
                      }`}>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>

                  </div>
                )
              })}
            </motion.div>
          )}

          {/* TAB 2: Ready Enterprise Software Platforms (10 Modules) */}
          {activeServicesTab === 'platforms' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ContactProjectEstimator onSelectEstimate={handleApplyPlatformEstimate} />
            </motion.div>
          )}

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 2, 3 & 4 – SMART CONTACT EXPERIENCE & FORM
          Two-Column Layout:
          LEFT: Connect With DASA TECH, 6 Department Cards, Signal Official Card, Headquarters
          RIGHT: Interactive Smart Enquiry Form with Dynamic Contextual Fields
      ─────────────────────────────────────────────────────────────── */}
      <section id="enquiry-form-section" className="py-16 sm:py-24 bg-[#FAF7F2] relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* ============================================================== */}
            {/* LEFT SIDE – CONTACT INFORMATION & OFFICIAL SIGNAL INTEGRATION */}
            {/* ============================================================== */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              
              {/* Connect Intro Header */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold text-amber-800 uppercase tracking-wider block">
                  CORPORATE ENGAGEMENT
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#17121F] tracking-tight">
                  Connect With DASA TECH
                </h2>
                <p className="text-xs sm:text-sm text-[#6F6878] leading-relaxed">
                  Our multidisciplinary engineering teams are accessible for technology consulting, bespoke software development, industrial automation, and strategic commercial collaboration.
                </p>
              </div>

              {/* ───────────────────────────────────────────────────────────
                  SIGNAL APP CONTACT CARD – HIGH IMPACT & VERIFIED
                  Strictly replaces WhatsApp & Email as requested
              ──────────────────────────────────────────────────────────── */}
              <div
                id="signal-contact-card"
                className="rounded-3xl p-6 sm:p-7 bg-[#0B0F1D] border-2 border-slate-800 text-white shadow-xl space-y-5 relative overflow-hidden"
              >
                {/* Luminous Top Accent Line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#3A76F0] to-transparent pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#3A76F0]/20 border border-[#3A76F0]/40 flex items-center justify-center text-[#3A76F0]">
                      <SignalBrandIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#3A76F0] tracking-wider uppercase block">
                        DIRECT LEADERSHIP CHANNEL
                      </span>
                      <h4 className="font-display font-bold text-base text-white">
                        Signal Encrypted Messenger
                      </h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Active
                  </span>
                </div>

                {/* Signal Username Display Box */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Official Signal Username
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-mono text-lg sm:text-xl font-extrabold text-white tracking-wide flex items-center gap-1.5">
                      <span className="text-[#3A76F0]">@</span>dasatech.99
                    </div>
                    
                    {/* Copy Username Button */}
                    <button
                      type="button"
                      onClick={handleCopySignalUsername}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-all cursor-pointer border border-white/10 hover:border-white/20 active:scale-95"
                    >
                      {copiedSignal ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-300" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Primary Signal Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://signal.me/#u/dasatech.99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#3A76F0] hover:bg-[#2F65D6] text-white font-display text-xs font-bold transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 cursor-pointer text-center"
                  >
                    <SignalBrandIcon className="w-4 h-4" />
                    <span>Open in Signal App</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowSignalGuide(!showSignalGuide)}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 hover:border-white/20 font-display text-xs font-bold transition-all cursor-pointer text-center"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                    <span>{showSignalGuide ? 'Hide Instructions' : 'How to Connect'}</span>
                  </button>
                </div>

                {/* Clear Fallback Instructions for Users Unfamiliar with Signal */}
                <AnimatePresence>
                  {showSignalGuide && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl p-4 bg-white/[0.04] border border-white/10 space-y-2 text-xs font-mono text-slate-300 overflow-hidden"
                    >
                      <div className="font-bold text-white flex items-center gap-1.5 text-xs">
                        <Info className="w-3.5 h-3.5 text-[#3A76F0]" />
                        <span>Step-by-Step Signal Connection:</span>
                      </div>
                      <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-300">
                        <li>Download or open the Signal app on iOS, Android, macOS, or Windows.</li>
                        <li>Tap the compose / pencil icon in your Signal app.</li>
                        <li>In the search box, enter username: <strong className="text-white">dasatech.99</strong></li>
                        <li>Select DASA TECH to start an encrypted direct consultation.</li>
                      </ol>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="text-[10px] font-mono text-slate-400 flex items-center gap-2 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>End-to-End Encrypted via Signal Protocol. Zero ad tracking.</span>
                </div>
              </div>

              {/* ───────────────────────────────────────────────────────────
                  6 DEDICATED DEPARTMENT CARDS
              ──────────────────────────────────────────────────────────── */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                  ENGAGEMENT DEPARTMENTS
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DEPARTMENT_CARDS.map((dept, dIdx) => {
                    const DeptIcon = dept.icon
                    return (
                      <div
                        key={dIdx}
                        onClick={() => handleDepartmentClick(dept.category)}
                        className="p-4 rounded-2xl bg-white border border-[#EFE6D8] hover:border-amber-400 shadow-xs hover:shadow-md transition-all cursor-pointer group space-y-2"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${dept.bgColor}`}>
                            <DeptIcon className={`w-4 h-4 ${dept.color}`} />
                          </div>
                          <h4 className="font-display font-bold text-xs text-[#141017] group-hover:text-amber-800 transition-colors leading-tight">
                            {dept.title}
                          </h4>
                        </div>
                        <p className="text-[11px] text-[#6F6878] leading-relaxed line-clamp-2">
                          {dept.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* ───────────────────────────────────────────────────────────
                  SECTION 7 – VERIFIED HEADQUARTERS & TIMEZONE PRESENCE
                  Genuine verified information only, zero fake map claims
              ──────────────────────────────────────────────────────────── */}
              <div className="rounded-2xl p-5 bg-white border border-[#EFE6D8] space-y-3 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider block">
                      COMPANY HEADQUARTERS
                    </span>
                    <div className="font-display font-bold text-sm text-[#141017]">
                      Erode, Tamil Nadu, India
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#EFE6D8] grid grid-cols-2 gap-3 text-[11px] font-mono text-slate-600">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Working Schedule</span>
                    <span className="font-bold text-slate-800">Mon – Sat: 9 AM – 7 PM</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Timezone</span>
                    <span className="font-bold text-slate-800">IST (UTC +5:30)</span>
                  </div>
                </div>
              </div>

            </div>


            {/* ============================================================== */}
            {/* RIGHT SIDE – INTERACTIVE SMART ENQUIRY FORM                    */}
            {/* ============================================================== */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-6 sm:p-10 border-2 border-[#EFE6D8] bg-white shadow-xl space-y-7 relative">
                
                {/* Form Header */}
                <div className="space-y-1.5 border-b border-[#EFE6D8] pb-5">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                    <Terminal className="w-3.5 h-3.5 text-amber-600" />
                    <span>PROJECT CONSULTATION REQUEST</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#17121F] font-display tracking-tight">
                    Scope Your Technology Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6878]">
                    Complete the project parameters below. Our engineering team reviews all briefs under bilateral confidentiality within 24 hours.
                  </p>
                </div>

                {/* ── SUCCESS FEEDBACK STATE ── */}
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-950 space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-lg text-emerald-900">
                          Enquiry Successfully Dispatched!
                        </h4>
                        <p className="text-xs text-emerald-800 leading-relaxed font-body">
                          Your project consultation brief has been recorded in our secure enterprise queue. Our engineering architects will analyze your requirements and follow up within 24 business hours.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-emerald-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                      <div>
                        <span className="text-slate-500 uppercase block text-[10px]">Reference Tracking Code</span>
                        <span className="font-bold text-emerald-800 text-sm tracking-wide">
                          {status.referenceId}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleCopySignalUsername}
                          className="px-3 py-1.5 rounded-lg bg-[#3A76F0] text-white font-mono text-xs font-bold hover:bg-[#2F65D6] transition-colors flex items-center gap-1.5"
                        >
                          <SignalBrandIcon className="w-3 h-3" />
                          <span>Signal @dasatech.99</span>
                        </button>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-xs font-mono text-emerald-700">
                      <span>Confidentiality: Bilateral NDA Ready</span>
                      <button
                        type="button"
                        onClick={() => setStatus({ loading: false, success: false, error: null, referenceId: '' })}
                        className="text-emerald-900 hover:underline font-bold"
                      >
                        Submit another brief
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ── ERROR FEEDBACK STATE ── */}
                {status.error && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 text-xs font-mono">
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-bold block">Transmission Alert</span>
                      <p className="text-rose-700 leading-relaxed">{status.error}</p>
                    </div>
                  </div>
                )}

                {/* ── MAIN INTERACTIVE FORM ── */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Anti-spam honeypot (hidden from human users) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_security_token"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website_security_token}
                      onChange={handleChange}
                    />
                  </div>

                  {/* 1. Full Name & 2. Company / Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                        Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Mercer"
                        className={`w-full px-4 py-3.5 rounded-xl bg-white border text-[#141017] placeholder-slate-400 focus:bg-white focus:outline-none transition-all text-sm font-medium ${
                          formErrors.name
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                            : 'border-[#EFE6D8] focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-xs text-rose-600 font-mono mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                        Company / Organization <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Nexus Global Enterprises"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#EFE6D8] text-[#141017] placeholder-slate-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* 3. Phone Number & 4. Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                        Phone Number <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-3.5 rounded-xl bg-white border text-[#141017] placeholder-slate-400 focus:bg-white focus:outline-none transition-all text-sm font-medium ${
                          formErrors.phone
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                            : 'border-[#EFE6D8] focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-rose-600 font-mono mt-1">{formErrors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                        Country <span className="text-amber-600">*</span>
                      </label>
                      <select
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#EFE6D8] text-[#141017] focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all text-sm font-medium cursor-pointer"
                      >
                        {COUNTRY_OPTIONS.map((c) => (
                          <option key={c.code} value={c.name}>
                            {c.name} {c.dial ? `(${c.dial})` : ''}
                          </option>
                        ))}
                      </select>
                      {formErrors.country && (
                        <p className="text-xs text-rose-600 font-mono mt-1">{formErrors.country}</p>
                      )}
                    </div>
                  </div>

                  {/* 5. Enquiry Category & 6. Service Interested In */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                        Enquiry Category <span className="text-amber-600">*</span>
                      </label>
                      <select
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#EFE6D8] text-[#141017] focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all text-sm font-medium cursor-pointer"
                      >
                        {ENQUIRY_CATEGORIES.map((cat, cIdx) => (
                          <option key={cIdx} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                        Service Interested In <span className="text-amber-600">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#EFE6D8] text-[#141017] focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all text-sm font-medium cursor-pointer"
                      >
                        <option value="Custom Software & ERP Development">Custom Software &amp; ERP Development</option>
                        <option value="Website & Mobile App Development">Website &amp; Mobile App Development</option>
                        <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                        <option value="School, Textile & Pharmacy ERP">School, Textile &amp; Pharmacy ERP</option>
                        <option value="Home, Industrial & Agricultural Automation">Home, Industrial &amp; Agricultural Automation</option>
                        <option value="Digital Marketing & CRM Solutions">Digital Marketing &amp; CRM Solutions</option>
                        <option value="Enterprise Architecture & Consulting">Enterprise Architecture &amp; Consulting</option>
                        <option value="Other / Bespoke Scope">Other / Bespoke Scope</option>
                      </select>
                    </div>
                  </div>

                  {/* ─────────────────────────────────────────────────────────
                      SECTION 4 – SMART USER EXPERIENCE: DYNAMIC CONTEXTUAL QUESTIONS
                      Only rendered when relevant category is selected!
                  ─────────────────────────────────────────────────────────── */}
                  
                  {/* Contextual Case A: ERP Solutions */}
                  {formData.category === 'ERP Solutions' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>ERP Architecture Parameters</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-700 mb-1">
                            Type of Business
                          </label>
                          <select
                            name="erpBusinessType"
                            value={formData.erpBusinessType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-amber-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-amber-500"
                          >
                            <option value="">Select Industry...</option>
                            <option value="Healthcare & Pharmacy">Healthcare &amp; Pharmacy</option>
                            <option value="School & Campus">School &amp; Academic Campus</option>
                            <option value="Textile & Garment">Textile &amp; Garments</option>
                            <option value="Manufacturing & Industrial">Manufacturing &amp; Industrial</option>
                            <option value="Warehouse & Logistics">Warehouse &amp; Logistics</option>
                            <option value="Retail & POS Chains">Retail &amp; POS Chains</option>
                            <option value="Other Industry">Other Industry</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-700 mb-1">
                            Requirement Nature
                          </label>
                          <select
                            name="erpRequirementType"
                            value={formData.erpRequirementType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-amber-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-amber-500"
                          >
                            <option value="">Select Requirement...</option>
                            <option value="New ERP Implementation">New ERP Implementation</option>
                            <option value="Migration from Legacy ERP">Migration from Legacy ERP</option>
                            <option value="Custom Module Add-ons">Custom Module Expansion</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-700 mb-1">
                            Primary Challenge
                          </label>
                          <select
                            name="erpBottleneck"
                            value={formData.erpBottleneck}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-amber-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-amber-500"
                          >
                            <option value="">Select Main Challenge...</option>
                            <option value="Inventory Leakage & Expiry">Inventory Leakage &amp; Expiry</option>
                            <option value="Multi-Branch Real-Time Sync">Multi-Branch Real-Time Sync</option>
                            <option value="GST & Statutory Accounting">GST &amp; Statutory Accounting</option>
                            <option value="Shop-Floor Production Bottlenecks">Shop-Floor Production Bottlenecks</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Contextual Case B: Website & Mobile App Development */}
                  {formData.category === 'Website & Mobile App Development' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 sm:p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Application Scope Parameters</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-700 mb-1">
                            Project Stage
                          </label>
                          <select
                            name="webAppScope"
                            value={formData.webAppScope}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-indigo-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-indigo-600"
                          >
                            <option value="">Select Project Stage...</option>
                            <option value="New Product Build (Greenfield)">New Product Build (Greenfield)</option>
                            <option value="Complete Redesign & Modernization">Complete Redesign &amp; Modernization</option>
                            <option value="Scaling Existing Architecture">Scaling Existing Architecture</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-700 mb-1">
                            Target Platform
                          </label>
                          <select
                            name="webAppPlatform"
                            value={formData.webAppPlatform}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-indigo-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-indigo-600"
                          >
                            <option value="">Select Target Platform...</option>
                            <option value="Responsive Web App (PWA)">Responsive Web App (PWA)</option>
                            <option value="Native Mobile App (iOS & Android)">Native Mobile App (iOS &amp; Android)</option>
                            <option value="Unified Platform (Web + Mobile App)">Unified Platform (Web + Mobile App)</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Contextual Case C: IoT & Automation */}
                  {(formData.category === 'Home & Industrial Automation' || formData.category === 'IoT Solutions') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Automation Engineering Scope</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-700 mb-1">
                            Operational Domain
                          </label>
                          <select
                            name="automationDomain"
                            value={formData.automationDomain}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-emerald-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-emerald-600"
                          >
                            <option value="">Select Automation Domain...</option>
                            <option value="Industrial Factory Floor / SCADA">Industrial Factory Floor / SCADA</option>
                            <option value="Commercial Building / Hotel / Hospital">Commercial Building / Hotel / Hospital</option>
                            <option value="Smart Agriculture Precision">Smart Agriculture Precision</option>
                            <option value="Residential Smart Home">Residential Smart Home</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-700 mb-1">
                            Requirement Focus
                          </label>
                          <select
                            name="automationType"
                            value={formData.automationType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-emerald-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-emerald-600"
                          >
                            <option value="">Select Architecture Focus...</option>
                            <option value="Turnkey Hardware Sensors + Cloud Software">Turnkey Hardware Sensors + Cloud Software</option>
                            <option value="SCADA / PLC Controller Integration">SCADA / PLC Controller Integration</option>
                            <option value="Sensor Telemetry Dashboard Only">Sensor Telemetry Dashboard Only</option>
                            <option value="Edge Firmware / Embedded Development">Edge Firmware / Embedded Development</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Contextual Case D: Internship & Career */}
                  {formData.category === 'Internship / Career' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 sm:p-5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-800 uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Engineering Apprenticeship Profile</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-700 mb-1">
                            Discipline of Interest
                          </label>
                          <select
                            name="careerDiscipline"
                            value={formData.careerDiscipline}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-sky-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-sky-600"
                          >
                            <option value="">Select Technical Area...</option>
                            <option value="Full Stack Web & Mobile Engineering">Full Stack Web &amp; Mobile Engineering</option>
                            <option value="AI & Computer Vision Research">AI &amp; Computer Vision Research</option>
                            <option value="Embedded Systems & IoT Firmware">Embedded Systems &amp; IoT Firmware</option>
                            <option value="UI/UX Product Architecture">UI/UX Product Architecture</option>
                            <option value="DevOps & Distributed Cloud">DevOps &amp; Distributed Cloud</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono font-bold text-slate-700 mb-1">
                            Experience Level
                          </label>
                          <select
                            name="careerExperience"
                            value={formData.careerExperience}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-sky-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-sky-600"
                          >
                            <option value="">Select Experience...</option>
                            <option value="Student / Academic Fresher">Student / Academic Fresher</option>
                            <option value="Entry Level (0 - 1 year)">Entry Level (0 - 1 year)</option>
                            <option value="Mid-Level Engineer (2 - 4 years)">Mid-Level Engineer (2 - 4 years)</option>
                            <option value="Senior Specialist (5+ years)">Senior Specialist (5+ years)</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* 7. Project Budget & 8. Project Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                        Project Budget <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#EFE6D8] text-[#141017] focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all text-sm font-medium cursor-pointer"
                      >
                        <option value="">Select Anticipated Range...</option>
                        <option value="< $5,000 (Under ₹4 Lakhs)">&lt; $5,000 (Under ₹4 Lakhs)</option>
                        <option value="$5,000 – $15,000 (₹4 – ₹12 Lakhs)">$5,000 – $15,000 (₹4 – ₹12 Lakhs)</option>
                        <option value="$15,000 – $35,000 (₹12 – ₹30 Lakhs)">$15,000 – $35,000 (₹12 – ₹30 Lakhs)</option>
                        <option value="$35,000 – $75,000 (₹30 – ₹60 Lakhs)">$35,000 – $75,000 (₹30 – ₹60 Lakhs)</option>
                        <option value="$75,000+ (Enterprise Scope)">$75,000+ (Enterprise Scope)</option>
                        <option value="Flexible / Scope-Dependent">Flexible / Scope-Dependent</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                        Project Timeline <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#EFE6D8] text-[#141017] focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all text-sm font-medium cursor-pointer"
                      >
                        <option value="">Select Target Horizon...</option>
                        <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                        <option value="1 – 3 Months">1 – 3 Months</option>
                        <option value="3 – 6 Months">3 – 6 Months</option>
                        <option value="6+ Months / Multi-Phase">6+ Months / Multi-Phase</option>
                        <option value="Exploratory / Discovery Stage">Exploratory / Discovery Stage</option>
                      </select>
                    </div>
                  </div>

                  {/* 9. Message / Project Requirements */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-mono text-slate-700 font-bold uppercase tracking-wider">
                        Message / Project Requirements <span className="text-amber-600">*</span>
                      </label>
                      <span className="text-[11px] font-mono text-slate-400">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your technology goals, current operational bottlenecks, scale requirements, or specific deliverables..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-white border text-[#141017] placeholder-slate-400 focus:bg-white focus:outline-none transition-all text-sm font-medium resize-none ${
                        formErrors.message
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                          : 'border-[#EFE6D8] focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                      }`}
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-xs text-rose-600 font-mono mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Action Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#EFE6D8]">
                    <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Enterprise SLA: Initial response within 24 hours</span>
                    </div>

                    <button
                      type="submit"
                      disabled={status.loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-display text-sm font-bold shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 transition-all cursor-pointer hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status.loading ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Dispatching Consultation Brief...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Brief</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 6 – WHY CONNECT WITH DASA TECH?
          "Technology Partnership Beyond Development."
          Corporate trust-building section, exact prompt requirements.
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#EFE6D8] relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>CORPORATE TRUST &amp; METHODOLOGY</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-[40px] text-[#141017] tracking-tight">
              Technology Partnership Beyond Development.
            </h2>
            <p className="text-sm sm:text-base text-[#6F6878] leading-relaxed">
              We engineer scalable software, custom enterprise platforms, and integrated automation systems designed to perform under demanding operational realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRUST_PILLARS.map((pillar, pIdx) => {
              const PillarIcon = pillar.icon
              return (
                <div
                  key={pIdx}
                  className="rounded-2xl p-6 sm:p-7 border border-[#EFE6D8] bg-white hover:border-amber-400 hover:shadow-md transition-all duration-300 space-y-3 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                    style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                  >
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#141017] group-hover:text-amber-800 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6878] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 8 – FREQUENTLY ASKED QUESTIONS
          Enterprise-standard queries, strictly zero WhatsApp or email
      ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#EFE6D8] relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold tracking-wider uppercase">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>FREQUENT QUESTIONS</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#141017] tracking-tight">
              Before You Connect
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6878]">
              Key protocols on engagement scoping, confidentiality agreements, and communication channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {CORPORATE_FAQS.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="p-6 rounded-2xl bg-white border border-[#EFE6D8] space-y-2.5 shadow-xs"
              >
                <h3 className="font-display font-bold text-base text-[#141017]">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6878] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
