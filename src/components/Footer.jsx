import React from 'react'
import { MapPin, Linkedin, ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from './Router'
import SignalBrandIcon from './SignalBrandIcon'
import dasaWordmark from '../assets/dasa-wordmark.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#07080C] text-[#9AA3B2] border-t border-white/10 pt-20 pb-12 select-none overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#00D4FF]/5 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Clean Columns matching Fyntic enterprise layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Column 1: DASA TECH Brand & Bio (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center group select-none">
              <img
                src={dasaWordmark}
                alt="DASA TECH"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_14px_rgba(0,212,255,0.25)] group-hover:scale-105 transition-transform"
              />
            </Link>

            <p className="text-sm text-[#9AA3B2] leading-relaxed max-w-sm font-normal">
              Engineering proprietary enterprise software, real-time AI computer vision, industrial workflow automation, and tailored digital solutions.
            </p>

            <div className="text-xs font-mono text-slate-400">
              Technology • Innovation • Future | <span className="text-[#00D4FF]">DASA IS THE SOLUTION</span>
            </div>

            {/* Social Pill Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/jeyawin-d/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#0F1117] border border-white/10 hover:border-[#00D4FF]/50 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#00D4FF]" />
              </a>
              <a
                href="https://signal.me/#u/dasatech.99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Signal"
                className="w-9 h-9 rounded-full bg-[#0F1117] border border-white/10 hover:border-[#22FF9A]/50 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                title="Connect on Signal: @dasatech.99"
              >
                <SignalBrandIcon className="w-4 h-4 text-[#22FF9A]" />
              </a>
              <a
                href="https://wa.me/917639930148?text=Hello%20DASA%20TECH%2C%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#0F1117] border border-white/10 hover:border-emerald-500/50 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                title="Direct WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Column 2: SERVICES (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
              SERVICES &amp; CAPABILITIES
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products" className="hover:text-white transition-colors duration-200">
                  Custom ERP Development
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors duration-200">
                  AI &amp; Computer Vision
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors duration-200">
                  Industrial Automation
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors duration-200">
                  Web &amp; Mobile Applications
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors duration-200">
                  IoT Telemetry &amp; SCADA
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT & HUBS (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
              GLOBAL HUBS
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00D4FF] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white text-xs font-mono">ERODE HUB (GLOBAL HQ)</div>
                  <div className="text-xs text-[#9AA3B2] mt-0.5">Tamil Nadu, India</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#22FF9A] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white text-xs font-mono">LONDON NODE</div>
                  <div className="text-xs text-[#9AA3B2] mt-0.5">United Kingdom (European Advisory)</div>
                </div>
              </li>
              <li className="pt-1">
                <a
                  href="https://wa.me/917639930148?text=Hello%20DASA%20TECH%2C%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-[#22FF9A] hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>+91 76399 30148 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://signal.me/#u/dasatech.99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white"
                >
                  <SignalBrandIcon className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span>@dasatech.99 (Signal Messenger)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Centered Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>&copy; {currentYear} DASA TECH. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-[#00D4FF] transition-colors">
              Consultation Portal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
