import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Sparkles, MapPin, ShieldCheck, ArrowRight } from 'lucide-react'
import { Link } from './Router'
import PillButton from './PillButton'

function AnimatedFooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="inline-block group">
        <motion.span
          whileHover={{ x: 3 }}
          transition={{ type: 'spring', stiffness: 320, damping: 20 }}
          className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#C084FC] transition-colors"
        >
          <span>{children}</span>
        </motion.span>
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0A0D18] via-[#090C16] to-[#05070E] border-t border-white/10 pt-20 pb-12 text-slate-300 overflow-hidden select-none">
      
      {/* Subtle Purple-Blue Ambient Sheen */}
      <div 
        className="absolute top-0 inset-x-0 h-[280px] pointer-events-none opacity-40 z-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124, 58, 237, 0.22), transparent 75%)'
        }}
      />

      {/* Subtle Oversized "DASA TECH" Watermark */}
      <div className="absolute inset-x-0 bottom-4 pointer-events-none text-center font-orbitron font-black text-[9rem] sm:text-[14rem] md:text-[17rem] lg:text-[20rem] text-white/[0.02] tracking-widest leading-none select-none z-0">
        DASA TECH
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-14 border-b border-white/10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-[#C084FC] font-mono text-xs uppercase font-bold tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>Technology That Solves Real Problems</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Ready to engineer your next platform?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-normal">
              Schedule a technical discovery session with our engineering leadership to review specifications and timelines.
            </p>
          </div>

          <PillButton
            to="/contact"
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Start Project Discussion
          </PillButton>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          
          {/* Col 1: Brand & Verified Contact Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex flex-col items-start gap-1.5 select-none group">
              <img
                src="/dasa-wordmark.png"
                alt="DASA"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <div className="flex items-center gap-1.5 text-[8px] sm:text-[8.5px] font-mono tracking-[0.16em] text-slate-200 uppercase font-semibold">
                <span>TECHNOLOGY</span>
                <span className="text-[#0066FF] font-bold">•</span>
                <span>INNOVATION</span>
                <span className="text-[#00C5B5] font-bold">•</span>
                <span>FUTURE</span>
              </div>
              <div className="text-[7.5px] font-mono tracking-[0.2em] text-indigo-300/80 uppercase font-medium">
                DASA IS THE SOLUTION
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Engineering proprietary ERP software, real-time AI computer vision, industrial workflow automation, and enterprise cloud solutions.
            </p>

            <div className="pt-2 space-y-2.5 text-xs font-mono">
              <a href="mailto:dasatechmu@gmail.com" className="flex items-center gap-2.5 text-slate-200 hover:text-[#C084FC] transition">
                <Mail className="w-4 h-4 text-[#A855F7] shrink-0" />
                <span>dasatechmu@gmail.com</span>
              </a>
              <a href="tel:+917639930148" className="flex items-center gap-2.5 text-slate-200 hover:text-[#C084FC] transition">
                <Phone className="w-4 h-4 text-[#A855F7] shrink-0" />
                <span>+91 76399 30148</span>
              </a>
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#A855F7] shrink-0" />
                <span>Erode, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Col 2: Developed Platforms */}
          <div>
            <div className="text-xs font-mono uppercase font-bold tracking-widest text-white mb-4 flex items-center justify-between">
              <span>Platforms</span>
              <Link to="/products" className="text-[10px] text-[#C084FC] hover:text-white transition-colors">View All &rarr;</Link>
            </div>
            <ul className="space-y-2.5 text-xs font-display">
              <AnimatedFooterLink to="/products/pharmacy-erp">Pharmacy ERP (MedFlow)</AnimatedFooterLink>
              <AnimatedFooterLink to="/products/school-erp">EduCore Campus ERP</AnimatedFooterLink>
              <AnimatedFooterLink to="/products/factory-erp">Factory Operations ERP</AnimatedFooterLink>
              <AnimatedFooterLink to="/products/warehouse-erp">Warehouse System</AnimatedFooterLink>
              <AnimatedFooterLink to="/products/snapshare-social">SnapFlow Studio AI</AnimatedFooterLink>
              <AnimatedFooterLink to="/products/ecommerce-engine">CommerceEngine Store</AnimatedFooterLink>
            </ul>
          </div>

          {/* Col 3: Enterprise Solutions */}
          <div>
            <div className="text-xs font-mono uppercase font-bold tracking-widest text-white mb-4 flex items-center justify-between">
              <span>Solutions</span>
              <Link to="/services" className="text-[10px] text-[#C084FC] hover:text-white transition-colors">View All &rarr;</Link>
            </div>
            <ul className="space-y-2.5 text-xs font-display">
              <AnimatedFooterLink to="/services/digital-marketing">Digital Marketing</AnimatedFooterLink>
              <AnimatedFooterLink to="/services/crm-solutions">CRM Solutions</AnimatedFooterLink>
              <AnimatedFooterLink to="/services/custom-erp">Custom ERP Development</AnimatedFooterLink>
              <AnimatedFooterLink to="/services/iot-solutions">Industrial Workflow Automation</AnimatedFooterLink>
              <AnimatedFooterLink to="/services/business-automation">Business Automation</AnimatedFooterLink>
              <AnimatedFooterLink to="/services/web-mobile">Web &amp; Mobile Development</AnimatedFooterLink>
            </ul>
          </div>

          {/* Col 4: Company & Leadership */}
          <div>
            <div className="text-xs font-mono uppercase font-bold tracking-widest text-white mb-4">Company</div>
            <ul className="space-y-2.5 text-xs font-display mb-6">
              <AnimatedFooterLink to="/">Overview</AnimatedFooterLink>
              <AnimatedFooterLink to="/about">About DASA TECH</AnimatedFooterLink>
              <AnimatedFooterLink to="/projects">Project Case Studies</AnimatedFooterLink>
              <AnimatedFooterLink to="/contact">Contact Leadership Team</AnimatedFooterLink>
            </ul>

            {/* Founder & CEO Card */}
            <div className="p-4 rounded-2xl bg-[#130E26]/80 border border-[#A855F7]/30 backdrop-blur-md text-xs font-mono shadow-xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#6D28D9] via-[#A855F7] to-[#3B82F6]" />
              <div className="text-[#C084FC] font-bold text-[10px] uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Founder &amp; CEO</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="text-white font-bold text-sm font-display">Jeyawin D</div>
              <div className="text-slate-300 text-[11px] mt-0.5">+91 76399 30148</div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div>
            &copy; {new Date().getFullYear()} DASA TECH. All Rights Reserved. Established in 2025.
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono">
            <Link to="/privacy" className="hover:text-[#C084FC] transition">Privacy &amp; Data Protection</Link>
            <span className="text-white/20 hidden sm:inline">&bull;</span>
            <Link to="/terms" className="hover:text-[#C084FC] transition">Master Services Agreement</Link>
            <span className="text-white/20 hidden sm:inline">&bull;</span>
            <Link to="/security" className="hover:text-[#C084FC] transition">Security &amp; Trust Center</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
