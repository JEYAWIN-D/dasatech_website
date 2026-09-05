import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, Loader2, MessageSquare, Mail, Phone, MapPin } from 'lucide-react'

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const buildWhatsAppUrl = (formData) => {
    const lines = [
      'Hello DASA TECH Team,',
      '',
      'I would like to discuss a project. Here are my details:',
      '',
      `• Name: ${formData.name || 'Not provided'}`,
      `• Email: ${formData.email || 'Not provided'}`,
      `• Phone: ${formData.phone || 'Not provided'}`,
      '',
      'Message:',
      formData.message || 'I would like to get a project estimate.',
      '',
      'Thank you!'
    ].filter(Boolean).join('\n')

    return `https://wa.me/917639930148?text=${encodeURIComponent(lines)}`
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const waUrl = buildWhatsAppUrl(form)

    try {
      await fetch('https://formsubmit.co/ajax/dasatechmu@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          message: form.message,
          _subject: `New Project Inquiry from ${form.name} — DASA TECH`,
          _template: 'table',
          _captcha: 'false'
        })
      }).catch(() => {})

      try {
        window.open(waUrl, '_blank', 'noopener,noreferrer')
      } catch (err) {
        console.log('Popup blocked', err)
      }

      setStatus('sent')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', message: '' })
    }
  }

  const handleDirectWhatsApp = () => {
    const waUrl = buildWhatsAppUrl(form)
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#0A0D18] text-white relative overflow-hidden border-t border-white/10 select-none">
      
      {/* Soft Ambient Radial Light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(109, 40, 217, 0.4), transparent 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Simple, Warm & Client-Friendly Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <span className="text-xs font-mono font-bold tracking-widest text-[#C084FC] uppercase">
              GET IN TOUCH
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.18] tracking-tight">
              Let's talk about your project.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Have an idea or need software for your business? Send us a message and our team will get in touch to discuss details and give you a free estimate.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-4 pt-2 text-sm text-slate-300 font-normal">
              <a
                href="mailto:dasatechmu@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8] group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span>dasatechmu@gmail.com</span>
              </a>

              <a
                href="https://wa.me/917639930148"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 76399 30148 (WhatsApp / Call)</span>
              </a>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Erode, Tamil Nadu, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean, Simple & Uncluttered Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-2xl">
              
              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-sm space-y-1"
                >
                  <div className="flex items-center gap-2 font-bold text-emerald-300">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Thank you! Your message has been sent.</span>
                  </div>
                  <p className="text-xs text-emerald-100">
                    We have received your details and will get back to you shortly.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={update('name')}
                      className="w-full rounded-xl bg-white/[0.06] border border-white/15 px-4 py-3 text-white placeholder-slate-400 text-sm outline-none focus:border-[#C084FC] focus:bg-white/[0.1] transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      className="w-full rounded-xl bg-white/[0.06] border border-white/15 px-4 py-3 text-white placeholder-slate-400 text-sm outline-none focus:border-[#C084FC] focus:bg-white/[0.1] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    className="w-full rounded-xl bg-white/[0.06] border border-white/15 px-4 py-3 text-white placeholder-slate-400 text-sm outline-none focus:border-[#C084FC] focus:bg-white/[0.1] transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    How can we help? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    className="w-full rounded-xl bg-white/[0.06] border border-white/15 px-4 py-3 text-white placeholder-slate-400 text-sm outline-none focus:border-[#C084FC] focus:bg-white/[0.1] transition-all resize-none"
                    placeholder="Tell us about your project or business requirements..."
                  />
                </div>

                {/* Submit & WhatsApp buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#8B5CF6] text-white font-display font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="w-full sm:w-auto py-3 px-6 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 hover:border-emerald-500 font-display font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
