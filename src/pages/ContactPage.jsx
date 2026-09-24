import React, { useState } from 'react'
import {
  Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock,
  Sparkles, ShieldCheck, ArrowRight, MessageSquare, HelpCircle, User, Building, ExternalLink, MessageCircle
} from 'lucide-react'
import PageHeaderHero from '../components/PageHeaderHero'
import ContactProjectEstimator from '../components/ContactProjectEstimator'
import { PAGE_HERO_IMAGES } from '../constants/images.js'

// ─────────────────────────────────────────────────────────────
// DASA TECH CONTACT PAGE (REDESIGNED)
// Matching DASA TECH design system: Clean layout, royal violet accents,
// high usability, zero unnecessary clutter, and direct leadership channels.
// ─────────────────────────────────────────────────────────────

const FAQS = [
  {
    question: 'How fast can I expect a response?',
    answer: 'Our team reviews all inquiries within 24 business hours. Direct WhatsApp inquiries to Founder & CEO Jeyawin D are handled promptly.'
  },
  {
    question: 'Can we execute a Non-Disclosure Agreement (NDA)?',
    answer: 'Yes. We respect your intellectual property and routinely execute bilateral NDAs prior to detailed technical discovery.'
  },
  {
    question: 'Do you work with startups and growing enterprises?',
    answer: 'Absolutely. We partner with businesses of all sizes, from growing regional companies to large multi-site industrial enterprises.'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Business Technology Solutions',
    message: ''
  })
  const [status, setStatus] = useState({ loading: false, success: false, error: null })

  const handleApplyEstimate = (estimate) => {
    setFormData((prev) => ({
      ...prev,
      service: 'Business Technology Solutions',
      message: `PROJECT ESTIMATE INQUIRY:\n- Target Modules: ${estimate.modules}\n- Deployment Scale: ${estimate.scale}\n- Velocity: ${estimate.timeline}\n- Estimated Cost: ${estimate.estimatedCost}\n- Delivery Timeline: ${estimate.estimatedWeeks}\n\nAdditional Requirements:\n`
    }))
  }

  const [lastWaUrl, setLastWaUrl] = useState('')

  const buildWhatsAppUrl = (data) => {
    const lines = [
      'Hello DASA TECH Team,',
      '',
      'I would like to request an enterprise project consultation. Here are my details:',
      '',
      `• Name: ${data.name || 'Not provided'}`,
      `• Email: ${data.email || 'Not provided'}`,
      data.phone ? `• Phone: ${data.phone}` : null,
      data.company ? `• Company: ${data.company}` : null,
      `• Required Solution: ${data.service || 'Business Technology Solutions'}`,
      '',
      'Project Scope & Requirements:',
      data.message || 'Consultation inquiry',
      '',
      'Looking forward to connecting with Founder & CEO Jeyawin D.'
    ].filter(Boolean).join('\n')

    return `https://wa.me/917639930148?text=${encodeURIComponent(lines)}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })

    const waUrl = buildWhatsAppUrl(formData)
    setLastWaUrl(waUrl)

    // 1. Launch WhatsApp simultaneously in a new tab
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer')
    } catch (openErr) {
      console.warn('Popup blocked:', openErr)
    }

    try {
      // 2. Dispatch Email via AJAX gateway to dasatechmu@gmail.com
      const res = await fetch('https://formsubmit.co/ajax/dasatechmu@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          service: formData.service,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Project Inquiry from ${formData.name} — DASA TECH`,
          _template: 'table',
          _captcha: 'false',
          _honey: ''
        })
      })

      const json = await res.json().catch(() => ({}))

      if (res.ok && (json.success === 'true' || json.success === true || json.message)) {
        setStatus({ loading: false, success: true, error: null })
        setFormData({ name: '', email: '', phone: '', company: '', service: 'Business Technology Solutions', message: '' })
      } else {
        throw new Error(json.message || 'Email dispatch failed')
      }
    } catch (err) {
      console.warn('FormSubmit AJAX failed, trying fallback submission:', err)
      try {
        const bodyData = new FormData()
        bodyData.append('name', formData.name)
        bodyData.append('email', formData.email)
        bodyData.append('phone', formData.phone || 'Not provided')
        bodyData.append('company', formData.company || 'Not provided')
        bodyData.append('service', formData.service)
        bodyData.append('message', formData.message)
        bodyData.append('_replyto', formData.email)
        bodyData.append('_subject', `New Project Inquiry from ${formData.name} — DASA TECH`)
        bodyData.append('_template', 'table')
        bodyData.append('_captcha', 'false')

        await fetch('https://formsubmit.co/dasatechmu@gmail.com', {
          method: 'POST',
          body: bodyData,
          mode: 'no-cors'
        })
        setStatus({ loading: false, success: true, error: null })
        setFormData({ name: '', email: '', phone: '', company: '', service: 'Business Technology Solutions', message: '' })
      } catch (fallbackErr) {
        console.error('All form submission attempts failed:', fallbackErr)
        setStatus({ loading: false, success: false, error: 'Could not send email automatically. Please contact dasatechmu@gmail.com directly or click the WhatsApp button.' })
      }
    }
  }

  const handleDirectWhatsApp = () => {
    const waUrl = buildWhatsAppUrl(formData)
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen bg-white text-[#17121F] relative overflow-hidden select-none">

      {/* ── 1. CINEMATIC HERO ─────────────────────────────────── */}
      <PageHeaderHero
        tagline="DIRECT LEADERSHIP CHANNELS"
        title="Connect With DASA TECH"
        description="Reach out directly to Founder & CEO Jeyawin D and our engineering team to discuss custom software, smart automation, ERP platforms, or project estimates."
        image={PAGE_HERO_IMAGES?.contact?.path || 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1400&q=85'}
        tools={['Direct WhatsApp Channel', 'Free Discovery Discussion', 'Tailored Project Scoping', '24-Hour SLA']}
      />

      {/* ── 2. PROJECT ESTIMATOR & MAIN CONTACT GRID ─────────── */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-20">

        {/* Live Project Estimator Calculator */}
        <div className="mb-12 sm:mb-16">
          <ContactProjectEstimator onSelectEstimate={handleApplyEstimate} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-[#E9E2F5] bg-[#FAF8FF] space-y-6 shadow-sm">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#6D28D9] uppercase tracking-wider block">
                  COMMUNICATION CHANNELS
                </span>
                <h3 className="text-2xl font-black text-[#17121F] font-display tracking-tight">
                  Direct Contact Info
                </h3>
              </div>

              {/* Email Channel */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E9E2F5]">
                <div className="w-10 h-10 rounded-xl bg-[#F7F3FF] border border-[#DDD0FF] flex items-center justify-center text-[#6D28D9] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-500 font-bold uppercase">Official Email</div>
                  <a
                    href="mailto:dasatechmu@gmail.com"
                    className="text-sm font-display font-bold text-[#17121F] hover:text-[#6D28D9] transition-colors block"
                  >
                    dasatechmu@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp Channel */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E9E2F5]">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-500 font-bold uppercase">Direct WhatsApp (Founder &amp; CEO)</div>
                  <a
                    href="https://wa.me/917639930148"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-display font-bold text-[#17121F] hover:text-emerald-600 transition-colors block"
                  >
                    +91 76399 30148 (WhatsApp Only)
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E9E2F5]">
                <div className="w-10 h-10 rounded-xl bg-[#F7F3FF] border border-[#DDD0FF] flex items-center justify-center text-[#6D28D9] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-500 font-bold uppercase">Company Headquarters</div>
                  <div className="text-sm font-display font-bold text-[#17121F]">
                    Erode, Tamil Nadu, India
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E9E2F5]">
                <div className="w-10 h-10 rounded-xl bg-[#F7F3FF] border border-[#DDD0FF] flex items-center justify-center text-[#6D28D9] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-500 font-bold uppercase">Working Hours</div>
                  <div className="text-sm font-display font-bold text-[#17121F]">
                    Mon – Sat: 9:00 AM – 7:00 PM IST
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="mailto:dasatechmu@gmail.com"
                  className="flex-1 py-3 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-bold text-xs text-center transition-all shadow-md"
                >
                  Send Email
                </a>
                <a
                  href="https://wa.me/917639930148"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs text-center transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  WhatsApp Founder
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Request Project Consultation Form */}
          <div className="lg:col-span-7" id="consultation-form">
            <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-10 border-2 border-[#E9E2F5] bg-white shadow-lg space-y-6">
              
              <div className="space-y-1 border-b border-[#E9E2F5] pb-5">
                <span className="text-[10px] font-mono font-bold text-[#6D28D9] uppercase tracking-wider block">
                  PROJECT DISCOVERY
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#17121F] font-display tracking-tight">
                  Request Project Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fill out the details below and Founder &amp; CEO Jeyawin D will get back to you within 24 hours.
                </p>
              </div>

              {status.success && (
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                    <span>Inquiry Sent to Email &amp; WhatsApp!</span>
                  </div>
                  <p className="text-emerald-700">
                    Your inquiry has been emailed directly to <strong>dasatechmu@gmail.com</strong> and opened in <strong>WhatsApp (+91 76399 30148)</strong> simultaneously. Founder &amp; CEO Jeyawin D and our engineering team will get back to you shortly.
                  </p>
                  {lastWaUrl && (
                    <div className="pt-2 flex items-center gap-3">
                      <a
                        href={lastWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Re-open WhatsApp Chat</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-3 text-xs font-mono font-bold">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8FF] border border-[#E9E2F5] text-[#17121F] placeholder-slate-400 focus:border-[#6D28D9] focus:bg-white focus:ring-2 focus:ring-[#6D28D9]/20 focus:outline-none transition-all text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8FF] border border-[#E9E2F5] text-[#17121F] placeholder-slate-400 focus:border-[#6D28D9] focus:bg-white focus:ring-2 focus:ring-[#6D28D9]/20 focus:outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8FF] border border-[#E9E2F5] text-[#17121F] placeholder-slate-400 focus:border-[#6D28D9] focus:bg-white focus:ring-2 focus:ring-[#6D28D9]/20 focus:outline-none transition-all text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Technologies"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8FF] border border-[#E9E2F5] text-[#17121F] placeholder-slate-400 focus:border-[#6D28D9] focus:bg-white focus:ring-2 focus:ring-[#6D28D9]/20 focus:outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Area of Interest Selection */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                    Primary Solution Category
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8FF] border border-[#E9E2F5] text-[#17121F] focus:border-[#6D28D9] focus:bg-white focus:ring-2 focus:ring-[#6D28D9]/20 focus:outline-none transition-all text-sm font-medium cursor-pointer"
                  >
                    <option value="Business Technology Solutions">Business Technology Solutions (ERP / CRM / Automation)</option>
                    <option value="Smart Automation Solutions">Smart Automation Solutions (Home / Agri / IoT Mesh)</option>
                    <option value="Custom ERP Solutions">Custom ERP Development (Pharmacy / Factory / Warehouse)</option>
                    <option value="Web & Mobile Engineering">Custom Web &amp; Mobile App Engineering</option>
                    <option value="Digital Marketing">Digital Marketing &amp; Growth Solutions</option>
                    <option value="General Inquiry">General Business Inquiry</option>
                  </select>
                </div>

                {/* Project Brief */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-2 font-bold uppercase tracking-wider">
                    Project Brief &amp; Requirements *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements, goals, or current operational bottlenecks..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8FF] border border-[#E9E2F5] text-[#17121F] placeholder-slate-400 focus:border-[#6D28D9] focus:bg-white focus:ring-2 focus:ring-[#6D28D9]/20 focus:outline-none transition-all text-sm font-medium resize-none"
                  ></textarea>
                </div>

                {/* Refined Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E9E2F5]">
                  <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Direct WhatsApp channel to Founder &amp; CEO Jeyawin D</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <button
                      type="button"
                      onClick={handleDirectWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-300 hover:border-emerald-600 transition-all font-display text-xs font-bold shadow-xs hover:shadow-md cursor-pointer hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      disabled={status.loading}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#4F46E5] hover:from-[#5B21B6] hover:to-[#4338CA] text-white font-display text-xs font-bold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all cursor-pointer hover:-translate-y-0.5 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{status.loading ? 'Sending...' : 'Send Inquiry'}</span>
                    </button>
                  </div>
                </div>

              </form>

            </div>
          </div>

        </div>

      </section>

      {/* ── 3. FREQUENTLY ASKED QUESTIONS ─────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAF8FF] border-t border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#6D28D9] uppercase bg-[#F7F3FF] px-4 py-1 rounded-full border border-[#DDD0FF]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENT QUESTIONS</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#17121F] tracking-tight">
              Before You Reach Out
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FAQS.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="p-6 rounded-2xl bg-white border border-[#E9E2F5] space-y-3 shadow-xs"
              >
                <h3 className="font-display font-bold text-base text-[#17121F]">
                  {faq.question}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
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
