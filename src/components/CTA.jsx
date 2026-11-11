import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Loader2, MapPin, ArrowRight, ShieldCheck, Lock } from 'lucide-react'
import { Link } from './Router'
import SignalBrandIcon from './SignalBrandIcon'

export default function CTA() {
  const [form, setForm] = useState({ name: '', phone: '', company: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('')
  const [refCode, setRefCode] = useState('')

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const referenceId = `DASA-CTA-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
    setRefCode(referenceId)

    // Secure Internal Dispatch via FormSubmit Relay (No public email exposed on UI)
    try {
      const response = await fetch('https://formsubmit.co/ajax/dasatechmu@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Reference ID': referenceId,
          'Full Name': form.name,
          'Phone / Contact': form.phone,
          'Company': form.company || 'Not provided',
          'Requirements': form.message,
          _subject: `[Project Consultation Request] ${form.name} Ref: ${referenceId}`,
          _template: 'table',
          _captcha: 'false',
          _honey: ''
        })
      })

      const result = await response.json().catch(() => ({}))

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setStatus('sent')
        setForm({ name: '', phone: '', company: '', message: '' })
      } else {
        throw new Error(result.message || 'Transmission failed')
      }
    } catch (err) {
      console.warn('FormSubmit AJAX attempt failed, trying fallback submission:', err)
      try {
        const formData = new FormData()
        formData.append('Reference ID', referenceId)
        formData.append('Full Name', form.name)
        formData.append('Phone / Contact', form.phone)
        formData.append('Company', form.company || 'Not provided')
        formData.append('Requirements', form.message)
        formData.append('_subject', `[Project Consultation Request] ${form.name} Ref: ${referenceId}`)
        formData.append('_template', 'table')
        formData.append('_captcha', 'false')

        await fetch('https://formsubmit.co/dasatechmu@gmail.com', {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        })
        setStatus('sent')
        setForm({ name: '', phone: '', company: '', message: '' })
      } catch (fallbackErr) {
        console.error('All submission attempts failed:', fallbackErr)
        setStatus('error')
        setErrorMessage('Our dispatch gateway is temporarily unreachable. You can connect immediately with our engineering team on Signal: @dasatech.99.')
      }
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#0E0A12] text-white relative overflow-hidden border-t border-amber-500/15 select-none">
      
      {/* Soft Ambient Radial Light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.35) 0%, rgba(225, 29, 72, 0.15) 50%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Corporate Engagement & Signal Access */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>CORPORATE ENGAGEMENT</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.18] tracking-tight">
              Let's talk about your project.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Have an idea, a business challenge, or need tailored software? Connect with our engineering leadership to review system architecture and receive a tailored estimate.
            </p>

            {/* Direct Contact Channels – Signal & Headquarters */}
            <div className="space-y-3.5 pt-2 text-sm text-slate-300 font-normal">
              
              {/* Signal Direct Link */}
              <a
                href="https://signal.me/#u/dasatech.99"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#3A76F0]/60 hover:bg-white/[0.07] transition-all group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-[#3A76F0]/20 border border-[#3A76F0]/30 flex items-center justify-center text-[#3A76F0] group-hover:scale-105 transition-transform shrink-0">
                  <SignalBrandIcon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Official Signal Channel
                  </div>
                  <div className="text-white font-mono font-bold text-sm">
                    @dasatech.99
                  </div>
                </div>
              </a>

              {/* Consultation Portal Link */}
              <Link
                to="/contact"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-violet-500/60 hover:bg-white/[0.07] transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 group-hover:scale-105 transition-transform shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Full Consultation Portal
                  </div>
                  <div className="text-white font-display font-bold text-sm">
                    Scope Your Technology Architecture
                  </div>
                </div>
              </Link>

              {/* Headquarters */}
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Company Headquarters
                  </div>
                  <div className="text-slate-200 font-display font-medium text-sm">
                    Erode, Tamil Nadu, India
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Clean, Simple & Uncluttered Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-2xl space-y-5">
              
              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-sm space-y-3"
                >
                  <div className="flex items-center gap-2 font-bold text-emerald-300">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Project Brief Successfully Dispatched!</span>
                  </div>
                  <p className="text-xs text-emerald-100 leading-relaxed font-body">
                    Your requirements have been recorded under tracking code <strong>{refCode}</strong>. Our engineering architects will analyze your scope and follow up within 24 business hours.
                  </p>
                  <div className="pt-1 flex items-center gap-3">
                    <a
                      href="https://signal.me/#u/dasatech.99"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3A76F0] hover:bg-[#2F65D6] text-white font-mono text-xs font-bold transition-all shadow-sm"
                    >
                      <SignalBrandIcon className="w-3.5 h-3.5" />
                      <span>Connect on Signal: @dasatech.99</span>
                    </a>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-rose-950/80 border border-rose-500/40 text-rose-200 text-sm space-y-2"
                >
                  <div className="flex items-center gap-2 font-bold text-rose-300">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Transmission Notice</span>
                  </div>
                  <p className="text-xs text-rose-100">
                    {errorMessage || 'Unable to send brief automatically. Please reach out directly on Signal: @dasatech.99.'}
                  </p>
                  <div className="pt-1">
                    <a
                      href="https://signal.me/#u/dasatech.99"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-white bg-[#3A76F0] hover:bg-[#2F65D6] px-3.5 py-1.5 rounded-lg font-mono font-bold transition-colors"
                    >
                      <SignalBrandIcon className="w-3.5 h-3.5" />
                      <span>Open Signal Messenger</span>
                    </a>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={update('name')}
                      className="w-full rounded-xl bg-white/[0.06] border border-white/15 px-4 py-3 text-white placeholder-slate-400 text-sm outline-none focus:border-amber-400 focus:bg-white/[0.1] focus:ring-1 focus:ring-amber-400/30 transition-all font-medium"
                      placeholder="e.g. Alex Mercer"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Phone / Contact Number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      className="w-full rounded-xl bg-white/[0.06] border border-white/15 px-4 py-3 text-white placeholder-slate-400 text-sm outline-none focus:border-amber-400 focus:bg-white/[0.1] focus:ring-1 focus:ring-amber-400/30 transition-all font-medium"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Company (Optional) */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Company / Organization <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    value={form.company}
                    onChange={update('company')}
                    className="w-full rounded-xl bg-white/[0.06] border border-white/15 px-4 py-3 text-white placeholder-slate-400 text-sm outline-none focus:border-[#C084FC] focus:bg-white/[0.1] transition-all font-medium"
                    placeholder="e.g. Acme Enterprises"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Project Requirements / Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    className="w-full rounded-xl bg-white/[0.06] border border-white/15 px-4 py-3 text-white placeholder-slate-400 text-sm outline-none focus:border-[#C084FC] focus:bg-white/[0.1] transition-all resize-none font-medium"
                    placeholder="Describe your technical requirements, goals, or operational scope..."
                  />
                </div>

                {/* Submit & Signal Action Bar */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-600 hover:via-orange-600 hover:to-rose-700 text-white font-display font-bold text-sm shadow-xl shadow-orange-500/25 border border-amber-300/40 hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Dispatching Project Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <a
                    href="https://signal.me/#u/dasatech.99"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-[#3A76F0]/20 hover:bg-[#3A76F0] text-[#70A1FF] hover:text-white border border-[#3A76F0]/40 hover:border-[#3A76F0] font-display font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    <SignalBrandIcon className="w-4 h-4" />
                    <span>Signal: @dasatech.99</span>
                  </a>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Bilateral NDA Confidentiality</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Signal Encrypted Direct Channel</span>
                  </div>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
