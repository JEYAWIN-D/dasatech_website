import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import EyebrowPill from './EyebrowPill'

export default function CtaBand({
  eyebrow = 'GET IN TOUCH',
  title = "Let's talk about your project.",
  description = 'Transform your operational bottlenecks into high-uptime enterprise platforms, real-time AI automation, and custom software architectures.',
  showWhatsapp = true,
}) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#00D4FF]/15 via-[#22FF9A]/10 to-transparent blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#151821] to-[#0F1117] border border-white/10 p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden">
        {/* Cyber Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <EyebrowPill dotColor="bg-[#22FF9A]">{eyebrow}</EyebrowPill>

          <h2 className="mt-6 font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#9AA3B2] max-w-2xl leading-relaxed">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* Primary Action Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-black font-semibold text-sm hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] transition-all duration-300 group"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Direct WhatsApp Channel */}
            {showWhatsapp && (
              <a
                href="https://wa.me/917639930148?text=Hello%20DASA%20TECH%2C%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#151821] border border-white/15 text-white font-medium text-sm hover:border-[#22FF9A]/50 hover:bg-[#1C202C] hover:text-[#22FF9A] transition-all duration-300 group"
              >
                <MessageCircle className="w-4 h-4 text-[#22FF9A]" />
                <span>Chat on WhatsApp</span>
                <span className="text-xs text-slate-400 font-mono font-normal">24h SLA</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
