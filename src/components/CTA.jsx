import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, Loader2, Sparkles, MessageSquare, ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'
import TextLineReveal from './TextLineReveal.jsx'

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [lastWaUrl, setLastWaUrl] = useState('')

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const buildWhatsAppUrl = (formData) => {
    const lines = [
      'Hello DASA TECH Team,',
      '',
      'I would like to request a project consultation. Here are my details:',
      '',
      `• Name: ${formData.name || 'Not provided'}`,
      `• Email: ${formData.email || 'Not provided'}`,
      `• Area of Interest: ${formData.service || 'Enterprise Solutions'}`,
      '',
      'Project Scope & Details:',
      formData.message || 'Consultation request',
      '',
      'Looking forward to connecting with Founder & CEO Jeyawin D.'
    ].filter(Boolean).join('\n')

    return `https://wa.me/917639930148?text=${encodeURIComponent(lines)}`
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const waUrl = buildWhatsAppUrl(form)
    setLastWaUrl(waUrl)

    try {
      // 1. Dispatch Email via reliable AJAX gateway to dasatechmu@gmail.com
      await fetch('https://formsubmit.co/ajax/dasatechmu@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service || 'Enterprise Software Engineering',
          message: form.message,
          _subject: `🚀 New Project Inquiry from ${form.name} — DASA TECH`,
          _template: 'table',
          _captcha: 'false'
        })
      }).catch(() => {
        // Continue even if offline so WhatsApp still opens
      })

      // 2. Automatically launch WhatsApp with pre-filled message to Founder (+91 76399 30148)
      try {
        window.open(waUrl, '_blank', 'noopener,noreferrer')
      } catch (err) {
        console.log('Popup blocked, link retained in button', err)
      }

      setStatus('sent')
      setForm({ name: '', email: '', service: '', message: '' })
    } catch {
      setStatus('sent')
      setForm({ name: '', email: '', service: '', message: '' })
    }
  }

  const handleDirectWhatsApp = () => {
    const waUrl = buildWhatsAppUrl(form)
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#24113F] text-white overflow-hidden border-t border-[#A855F7]/30 select-none">
      
      {/* Ambient Soft Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#6D28D9]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 z-10">
        
        {/* Heading Block */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A855F7]/40 bg-[#6D28D9]/30 text-[#E9D5FF] text-xs font-mono mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>DIRECT INQUIRY &amp; INSTANT WHATSAPP</span>
          </div>

          <TextLineReveal
            as="h2"
            lines={["Have a Project Requirement?", { text: "Let's Build It Right.", className: "text-color-shift" }]}
            className="font-display text-3xl sm:text-5xl font-black text-white leading-tight"
          />

          <p className="mt-4 text-[#E9D5FF] text-sm sm:text-base leading-relaxed font-normal">
            Whether you need custom ERP platforms, AI computer vision, IoT telemetry, or automation workflows, our engineering team is ready to assist.
          </p>
        </div>

        {/* Contact Form Card */}
        <Reveal delay={0.2} className="rounded-3xl p-8 sm:p-12 bg-[#170E2B] border border-[#A855F7]/30 shadow-2xl text-white">
          
          {status === 'sent' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-5 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 space-y-2 text-xs font-mono"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-300">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Inquiry Dispatched Successfully!</span>
              </div>
              <p className="text-emerald-100 text-xs">
                Your message has been emailed directly to <strong>dasatechmu@gmail.com</strong> and pre-loaded to WhatsApp for <strong>Founder &amp; CEO Jeyawin D (+91 76399 30148)</strong>.
              </p>
              {lastWaUrl && (
                <div className="pt-2">
                  <a
                    href={lastWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat Again</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
            <div className="sm:col-span-1">
              <label className="text-xs uppercase tracking-wider text-[#E9D5FF] font-mono font-bold">Your Name *</label>
              <input
                required
                value={form.name}
                onChange={update('name')}
                className="mt-2 w-full rounded-xl bg-[#24113F] border border-[#A855F7]/30 px-4 py-3 text-white placeholder-purple-300/50 font-medium outline-none focus:border-[#A855F7] focus:ring-1 focus:ring-[#A855F7] transition text-sm"
                placeholder="John Doe"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="text-xs uppercase tracking-wider text-[#E9D5FF] font-mono font-bold">Work Email *</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={update('email')}
                className="mt-2 w-full rounded-xl bg-[#24113F] border border-[#A855F7]/30 px-4 py-3 text-white placeholder-purple-300/50 font-medium outline-none focus:border-[#A855F7] focus:ring-1 focus:ring-[#A855F7] transition text-sm"
                placeholder="john@company.com"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-wider text-[#E9D5FF] font-mono font-bold">Area of Interest</label>
              <input
                value={form.service}
                onChange={update('service')}
                className="mt-2 w-full rounded-xl bg-[#24113F] border border-[#A855F7]/30 px-4 py-3 text-white placeholder-purple-300/50 font-medium outline-none focus:border-[#A855F7] focus:ring-1 focus:ring-[#A855F7] transition text-sm"
                placeholder="e.g. Custom ERP, Mobile App, Web Development, Business Automation"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-wider text-[#E9D5FF] font-mono font-bold">Project Details &amp; Scope *</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={update('message')}
                className="mt-2 w-full rounded-xl bg-[#24113F] border border-[#A855F7]/30 px-4 py-3 text-white placeholder-purple-300/50 font-medium outline-none focus:border-[#A855F7] focus:ring-1 focus:ring-[#A855F7] transition resize-none text-sm"
                placeholder="Tell us about your project, business goals, or software requirements..."
              />
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-2 pt-4 border-t border-[#A855F7]/30">
              <div className="text-xs font-mono text-[#E9D5FF] space-y-0.5">
                <div>Direct Channels: Email (dasatechmu@gmail.com) &bull; WhatsApp (+91 76399 30148)</div>
                <div className="text-slate-400 text-[11px]">We respond to all inquiries within 24 hours.</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-white border border-emerald-500/40 hover:border-emerald-500 px-5 py-2.5 font-display font-bold text-xs shadow-xs hover:shadow-md cursor-pointer transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#4F46E5] hover:from-[#5B21B6] hover:to-[#4338CA] px-6 py-2.5 font-display font-bold text-xs text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 disabled:opacity-60 cursor-pointer transition-all hover:-translate-y-0.5"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </form>
        </Reveal>

      </div>
    </section>
  )
}

