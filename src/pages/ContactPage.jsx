import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send, MapPin, CheckCircle2, AlertCircle, Copy, Check,
  MessageCircle, ExternalLink, ShieldCheck, Clock, Globe,
  Layers, Cpu, Smartphone, ArrowRight, Sparkles, Building
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import EyebrowPill from '../components/EyebrowPill'
import BentoCard from '../components/BentoCard'
import GlobalPresenceMap from '../components/GlobalPresenceMap'
import SignalBrandIcon from '../components/SignalBrandIcon'

const COUNTRY_OPTIONS = [
  'India',
  'United Kingdom',
  'United States',
  'United Arab Emirates',
  'Singapore',
  'Saudi Arabia',
  'Qatar',
  'Malaysia',
  'Australia',
  'Germany',
  'Other International',
]

const INTEREST_OPTIONS = [
  'Custom ERP Development',
  'AI & Computer Vision',
  'IoT & Industrial Automation',
  'Website & Mobile App Development',
  'High-Velocity E-Commerce',
  'Digital Transformation & CRM',
  'Business Partnership',
  'Internship / Career',
  'Other Technology Inquiry',
]

export default function ContactPage() {
  useSEO({
    title: 'Contact Us | DASA TECH Corporate Consultation Portal',
    description:
      'Connect with DASA TECH for custom enterprise ERP, industrial IoT automation, AI computer vision, and bespoke software engineering. Connect via Signal (@dasatech.99) or direct consultation form.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'DASA TECH Contact',
      url: 'https://dasatech.in/contact',
    },
  })

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    country: 'India',
    interest: 'Custom ERP Development',
    message: '',
    security_honeypot: '',
  })

  const [formErrors, setFormErrors] = useState({})
  const [copiedSignal, setCopiedSignal] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState({
    loading: false,
    success: false,
    error: null,
    referenceId: '',
  })

  const lastSubmitTime = useRef(0)

  // Copy Signal Username to Clipboard
  const handleCopySignal = async () => {
    try {
      await navigator.clipboard.writeText('dasatech.99')
      setCopiedSignal(true)
      setTimeout(() => setCopiedSignal(false), 2500)
    } catch (e) {
      // Fallback
      setCopiedSignal(true)
      setTimeout(() => setCopiedSignal(false), 2500)
    }
  }

  // Validate Form Fields
  const validate = () => {
    const errs = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name.'
    }
    const cleanPhone = formData.phone.replace(/\D/g, '')
    if (!cleanPhone || cleanPhone.length < 7) {
      errs.phone = 'Please enter a valid phone number (min 7 digits).'
    }
    if (!formData.country) {
      errs.country = 'Please select your country.'
    }
    if (!formData.interest) {
      errs.interest = 'Please select a solution area.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide brief details about your requirement (min 10 characters).'
    }
    if (formData.security_honeypot.trim().length > 0) {
      errs.honeypot = 'Spam detected.'
    }
    setFormErrors(errs)
    return Object.keys(errs).length === 0
  }

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Rate limiting: 10s between submissions
    const now = Date.now()
    if (now - lastSubmitTime.current < 10000) {
      setSubmissionStatus({
        loading: false,
        success: false,
        error: 'Please wait a few seconds before submitting again.',
        referenceId: '',
      })
      return
    }

    if (!validate()) return

    setSubmissionStatus({ loading: true, success: false, error: null, referenceId: '' })
    lastSubmitTime.current = now

    const refId = `DASA-${Math.random().toString(36).substring(2, 8).toUpperCase()}`

    try {
      // Dispatch via FormSubmit with honeypot & table template
      const payload = new FormData()
      payload.append('Reference ID', refId)
      payload.append('Full Name', formData.name)
      payload.append('Company', formData.company || 'Not Specified')
      payload.append('Phone', formData.phone)
      payload.append('Country', formData.country)
      payload.append('Interest Area', formData.interest)
      payload.append('Message / Scope', formData.message)
      payload.append('_subject', `[Corporate Inquiry] ${formData.name} (${formData.country}) — Ref: ${refId}`)
      payload.append('_template', 'table')
      payload.append('_captcha', 'false')

      await fetch('https://formsubmit.co/dasatechmu@gmail.com', {
        method: 'POST',
        body: payload,
        mode: 'no-cors',
      })

      setSubmissionStatus({
        loading: false,
        success: true,
        error: null,
        referenceId: refId,
      })

      // Reset form
      setFormData({
        name: '',
        company: '',
        phone: '',
        country: 'India',
        interest: 'Custom ERP Development',
        message: '',
        security_honeypot: '',
      })
      setFormErrors({})
    } catch (err) {
      setSubmissionStatus({
        loading: false,
        success: false,
        error: 'Network error encountered. Please connect directly via Signal (@dasatech.99) or WhatsApp.',
        referenceId: '',
      })
    }
  }

  return (
    <main className="w-full bg-[#07080C] text-slate-100 overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-14 sm:pt-40 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#00D4FF]/15 via-[#22FF9A]/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-3xl">
          <EyebrowPill dotColor="bg-[#22FF9A]">CORPORATE COMMUNICATION PORTAL</EyebrowPill>
          <h1 className="mt-4 font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-white to-[#22FF9A]">
              Extraordinary.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#9AA3B2] leading-relaxed">
            Have an idea, a business challenge, or a technology requirement? Connect with DASA TECH and explore how our technology solutions can help your business move forward.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SPLIT LAYOUT: LEFT = FORM, RIGHT = CONTACT DETAILS
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Interactive Consultation Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0F1117] border border-white/10 p-8 sm:p-10 shadow-2xl relative">
              
              <div className="border-b border-white/10 pb-6 mb-8 flex items-center justify-between">
                <div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Request Project Scoping
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9AA3B2] mt-1">
                    Direct technical consultation with our engineering architects.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151821] border border-white/10 text-[11px] font-mono text-[#22FF9A]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>24-Hour SLA</span>
                </div>
              </div>

              {/* Submission Success State Banner */}
              <AnimatePresence>
                {submissionStatus.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-6 rounded-2xl bg-[#22FF9A]/10 border border-[#22FF9A]/40 text-white space-y-2"
                  >
                    <div className="flex items-center gap-2 text-[#22FF9A] font-bold text-base">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Enquiry Submitted Successfully!</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Your technical scoping request has been received. Our engineering lead will review your requirements and reach out within 24 business hours.
                    </p>
                    <div className="pt-2 font-mono text-xs text-slate-400">
                      Tracking Reference ID:{' '}
                      <span className="font-bold text-[#00D4FF]">
                        {submissionStatus.referenceId}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submission Error State */}
              {submissionStatus.error && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                  <span>{submissionStatus.error}</span>
                </div>
              )}

              {/* Main Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Anti-spam Honeypot */}
                <input
                  type="text"
                  name="website_security_token"
                  value={formData.security_honeypot}
                  onChange={(e) => setFormData({ ...formData, security_honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                      Full Name <span className="text-[#00D4FF]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#151821] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        formErrors.name
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/10 focus:border-[#00D4FF]'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-[11px] text-rose-400">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Company / Organization Name */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                      Company / Organization <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. TexFab Industries"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#151821] border border-white/10 text-sm text-white placeholder-slate-500 focus:border-[#00D4FF] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                      Phone Number <span className="text-[#00D4FF]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#151821] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        formErrors.phone
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/10 focus:border-[#00D4FF]'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-[11px] text-rose-400">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                      Country <span className="text-[#00D4FF]">*</span>
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#151821] border border-white/10 text-sm text-white focus:border-[#00D4FF] focus:outline-none transition-colors"
                    >
                      {COUNTRY_OPTIONS.map((c) => (
                        <option key={c} value={c} className="bg-[#151821] text-white">
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                    Primary Solution Area <span className="text-[#00D4FF]">*</span>
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#151821] border border-white/10 text-sm text-white focus:border-[#00D4FF] focus:outline-none transition-colors"
                  >
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#151821] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message / Project Requirements */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                    Project Requirements / Operational Challenge <span className="text-[#00D4FF]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your current workflows, bottlenecks, or the platform you wish to build..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#151821] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      formErrors.message
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-white/10 focus:border-[#00D4FF]'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-[11px] text-rose-400">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submissionStatus.loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-black font-semibold text-sm hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {submissionStatus.loading ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                        <span>Transmitting Requirements...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Consultation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Details & Channels (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Signal Messenger Dedicated Card */}
            <BentoCard
              glowColor="rgba(0, 212, 255, 0.2)"
              borderColor="border-[#00D4FF]/30"
              className="p-7"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center border border-[#00D4FF]/30">
                    <SignalBrandIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-base text-white">Signal Messenger</div>
                    <div className="text-[11px] font-mono text-[#00D4FF]">End-to-End Encrypted</div>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#22FF9A] animate-pulse" />
              </div>

              <p className="text-xs text-[#9AA3B2] leading-relaxed mb-4">
                Connect directly with our senior technology team on Signal for confidential architecture discussions.
              </p>

              {/* Username Pill with Copy Interaction */}
              <div className="p-3.5 rounded-xl bg-[#151821] border border-white/10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-slate-400">Username:</span>
                  <span className="font-mono font-bold text-sm text-white">@dasatech.99</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopySignal}
                  className="px-3 py-1.5 rounded-lg bg-[#0F1117] border border-white/15 text-xs font-mono text-slate-200 hover:text-white hover:border-[#00D4FF]/50 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedSignal ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#22FF9A]" />
                      <span className="text-[#22FF9A]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex gap-2">
                <a
                  href="https://signal.me/#u/dasatech.99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#151821] border border-white/10 text-xs font-mono text-white hover:border-[#00D4FF]/40 hover:bg-[#1C202C] transition-colors"
                >
                  <span>Open in Signal App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </BentoCard>

            {/* Direct WhatsApp Channel Card */}
            <BentoCard
              glowColor="rgba(37, 211, 102, 0.2)"
              borderColor="border-[#25D366]/30"
              className="p-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center border border-[#25D366]/30">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-base text-white">Direct WhatsApp</div>
                  <div className="text-[11px] font-mono text-[#25D366]">+91 76399 30148</div>
                </div>
              </div>

              <p className="text-xs text-[#9AA3B2] leading-relaxed mb-4">
                Message directly for quick scoping questions, preliminary project inquiries, and meeting scheduling.
              </p>

              <a
                href="https://wa.me/917639930148?text=Hello%20DASA%20TECH%2C%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white font-mono text-xs font-semibold shadow-md shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-shadow"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </BentoCard>

            {/* Global Engineering Hubs */}
            <div className="rounded-2xl bg-[#0F1117] border border-white/10 p-7 space-y-6">
              <div className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider pb-3 border-b border-white/10 flex items-center justify-between">
                <span>CORPORATE OFFICES</span>
                <Globe className="w-4 h-4 text-[#00D4FF]" />
              </div>

              {/* Erode Hub */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00D4FF]">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span>ERODE HUB (GLOBAL HQ)</span>
                </div>
                <div className="text-sm font-semibold text-white pl-4">DASA TECH Engineering Hub</div>
                <div className="text-xs text-[#9AA3B2] pl-4">Erode, Tamil Nadu, India</div>
              </div>

              {/* London Node */}
              <div className="space-y-1.5 pt-3 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#22FF9A]">
                  <span className="w-2 h-2 rounded-full bg-[#22FF9A]" />
                  <span>LONDON NODE</span>
                </div>
                <div className="text-sm font-semibold text-white pl-4">International Advisory</div>
                <div className="text-xs text-[#9AA3B2] pl-4">London, United Kingdom</div>
              </div>

              {/* Direct Leadership Guarantee */}
              <div className="pt-3 border-t border-white/5 flex items-center gap-3 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#22FF9A] shrink-0" />
                <span>NDA &amp; Intellectual Property Protection guaranteed upon request.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. COMPACT GLOBAL PRESENCE MAP BELOW
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-12 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-6 px-4">
          <EyebrowPill dotColor="bg-[#00D4FF]">GLOBAL CLIENT NETWORK</EyebrowPill>
          <h2 className="mt-3 font-display font-bold text-2xl sm:text-3xl text-white">
            Distributed Across Geographies.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#9AA3B2]">
            Serving enterprise operations across India, the United Kingdom, and international client nodes.
          </p>
        </div>
        <GlobalPresenceMap />
      </section>

    </main>
  )
}
