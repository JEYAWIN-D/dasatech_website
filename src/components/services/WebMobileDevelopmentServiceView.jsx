import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe, Smartphone, Laptop, Code2, ArrowRight, ArrowLeft, CheckCircle2,
  Sparkles, Compass, ShieldCheck, Award, Cpu, Wifi, WifiOff, Camera,
  Scan, Layers, Monitor, Sliders, Check, Clock, ChevronRight
} from 'lucide-react'
import { Link } from '../Router'

// ─────────────────────────────────────────────────────────────
// WEB & MOBILE APPLICATIONS SERVICE COMPONENT
// Unique Theme: Dual-Device Frame Studio & Interactive Viewport Width Resizer
// Color Accents: Electric Violet (#7C3AED), Cyan (#06B6D4), Sunset Coral (#F43F5E)
// Unique Visual Features:
// 1. Interactive Dual-Device Frame Showcase (Switch between iPhone 15 Pro Mobile App and MacBook Web App)
// 2. Interactive Responsive Viewport Slider (Drag width slider to see live fluid UI adaptation)
// 3. Offline PWA Local Caching & Camera Barcode Scanner Simulator
// 4. Multi-Platform Engineering Stack Comparison
// ─────────────────────────────────────────────────────────────

export default function WebMobileDevelopmentServiceView() {
  const [deviceMode, setDeviceMode] = useState('mobile') // 'mobile' | 'desktop'
  const [viewportWidth, setViewportWidth] = useState(768) // 375, 768, 1440
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#7C3AED] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#6D28D9] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#6D28D9] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#7C3AED] font-bold">Web &amp; Mobile Applications</span>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#6D28D9] bg-white hover:bg-[#F7F3FF] border border-[#E9E2F5] hover:border-[#DDD0FF] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: DUAL-DEVICE FRAME SHOWCASE ───────────────── */}
      <section className="relative py-14 lg:py-22 bg-gradient-to-b from-[#F5F3FF] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE9FE] border border-[#DDD0FF] text-[#7C3AED] text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>CROSS-PLATFORM WEB &amp; MOBILE ENGINEERING</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.08]">
                High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#F43F5E]">Web &amp; Mobile Apps.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                We build fast, responsive web applications and native-feel iOS and Android mobile apps designed for smooth user navigation, offline sync, and enterprise security.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'React & Next.js Web', 'Flutter iOS & Android', 'Offline PWA Sync', 'Admin Dashboards', 'Hardware Camera Access'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#5B21B6] bg-[#EDE9FE] border border-[#DDD0FF] px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#device-studio"
                  className="px-6 py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#7C3AED]/25 transition-all flex items-center gap-2"
                >
                  <span>Explore Device Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#viewport-tester"
                  className="px-5 py-3.5 rounded-full bg-[#EDE9FE] hover:bg-[#DDD0FF] text-[#5B21B6] font-display font-bold text-xs sm:text-sm border border-[#DDD0FF] transition-colors"
                >
                  <span>Viewport Resizer</span>
                </a>
              </div>
            </div>

            {/* Right: Live Dual-Device Frame Studio */}
            <div className="lg:col-span-7">
              <div id="device-studio" className="rounded-3xl p-6 sm:p-7 bg-[#0F0B18] border-2 border-white/15 text-white shadow-2xl space-y-4">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center font-bold">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm">Dual-Device Frame Showcase</div>
                      <div className="text-[10px] font-mono text-slate-400">Toggle between Mobile App and Web Desktop view</div>
                    </div>
                  </div>

                  {/* Device Toggle Buttons */}
                  <div className="flex gap-1.5 font-mono text-xs">
                    <button
                      onClick={() => setDeviceMode('mobile')}
                      className={`px-3 py-1 rounded-xl flex items-center gap-1 font-bold transition-all ${
                        deviceMode === 'mobile'
                          ? 'bg-[#7C3AED] text-white shadow-md'
                          : 'bg-white/10 text-slate-300 hover:bg-white/20'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Mobile</span>
                    </button>

                    <button
                      onClick={() => setDeviceMode('desktop')}
                      className={`px-3 py-1 rounded-xl flex items-center gap-1 font-bold transition-all ${
                        deviceMode === 'desktop'
                          ? 'bg-[#7C3AED] text-white shadow-md'
                          : 'bg-white/10 text-slate-300 hover:bg-white/20'
                      }`}
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      <span>Desktop</span>
                    </button>
                  </div>
                </div>

                {/* Device Frame Display Area */}
                <div className="flex items-center justify-center p-4 bg-black/50 rounded-2xl min-h-[260px]">
                  {deviceMode === 'mobile' ? (
                    <div className="w-[180px] h-[300px] rounded-[32px] border-4 border-slate-700 bg-[#17121F] p-3 text-center space-y-3 relative shadow-2xl">
                      <div className="w-12 h-2.5 rounded-full bg-slate-800 mx-auto" />
                      <div className="text-[10px] font-mono font-bold text-[#C084FC] uppercase">Mobile App UI</div>
                      <div className="p-2 rounded-xl bg-white/10 text-[10px] text-slate-200">Fluid Touch Navigation</div>
                      <div className="p-2 rounded-xl bg-[#7C3AED]/30 text-[10px] text-purple-200 border border-[#7C3AED]/50">Barcode Scanner Active</div>
                    </div>
                  ) : (
                    <div className="w-full max-w-[440px] h-[220px] rounded-2xl border-4 border-slate-700 bg-[#17121F] p-4 text-left space-y-3 shadow-2xl">
                      <div className="flex items-center gap-1.5 border-b border-white/10 pb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="font-mono text-[9px] text-slate-400 pl-2">https://app.dasatech.com</span>
                      </div>
                      <div className="font-display font-bold text-xs text-white">Responsive Web Dashboard</div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                        <div className="p-2 rounded-lg bg-white/10 text-slate-200">Real-Time Data Table</div>
                        <div className="p-2 rounded-lg bg-[#7C3AED]/30 text-purple-200">Role-Based Admin</div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. INTERACTIVE RESPONSIVE VIEWPORT RESIZER ─────────── */}
      <section id="viewport-tester" className="py-16 lg:py-24 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#7C3AED] uppercase tracking-wider bg-[#EDE9FE] px-3.5 py-1.5 rounded-full border border-[#DDD0FF]">
              <Sliders className="w-3.5 h-3.5" />
              <span>RESPONSIVE VIEWPORT RESIZER</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Test Fluid Layout <span className="text-color-shift">Adaptation</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Drag the viewport width slider below to watch how our web applications adapt fluidly across mobile, tablet, and desktop viewports.
            </p>
          </div>

          {/* Interactive Width Slider Bar */}
          <div className="max-w-2xl mx-auto p-6 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-700 font-bold">
              <span>Screen Width: {viewportWidth}px</span>
              <span className="text-[#7C3AED]">
                {viewportWidth < 600 ? 'Mobile Viewport' : viewportWidth < 1000 ? 'Tablet Viewport' : 'Desktop Viewport'}
              </span>
            </div>
            <input
              type="range"
              min="375"
              max="1440"
              step="5"
              value={viewportWidth}
              onChange={(e) => setViewportWidth(Number(e.target.value))}
              className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#7C3AED]"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>375px Mobile</span>
              <span>768px Tablet</span>
              <span>1440px Desktop</span>
            </div>
          </div>

          {/* Simulated Adaptive Layout Container */}
          <div className="flex justify-center">
            <div
              style={{ width: `${Math.min(100, Math.max(30, (viewportWidth / 1440) * 100))}%` }}
              className="p-6 rounded-2xl bg-[#0F0B18] text-white transition-all duration-300 border border-white/15 shadow-xl space-y-3"
            >
              <div className="font-display font-bold text-sm">Fluid Application Layout ({viewportWidth}px)</div>
              <div className={`grid gap-3 ${viewportWidth < 600 ? 'grid-cols-1' : viewportWidth < 1000 ? 'grid-cols-2' : 'grid-cols-4'}`}>
                <div className="p-3 rounded-xl bg-white/10 text-xs">Navigation Menu</div>
                <div className="p-3 rounded-xl bg-white/10 text-xs">Primary Content</div>
                <div className="p-3 rounded-xl bg-white/10 text-xs">Side Analytics</div>
                <div className="p-3 rounded-xl bg-white/10 text-xs">User Profile</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0F0B18] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#C084FC] uppercase tracking-wider bg-purple-950/60 border border-purple-800/60 px-4 py-1.5 rounded-full">
            READY TO BUILD YOUR APP?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule an Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#7C3AED]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss UI/UX wireframes, Flutter mobile architectures, and cloud backend models directly with Founder &amp; CEO Jeyawin D and our application engineering leads.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-display font-bold text-sm shadow-xl shadow-[#7C3AED]/30 transition-all"
            >
              <span>Start Application Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
