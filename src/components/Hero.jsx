import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react'
import { Link } from './Router.jsx'

export default function Hero() {
  const containerRef = useRef(null)
  const [imgSrc, setImgSrc] = useState(import.meta.env.BASE_URL + 'uploaded-hero-bg.png')

  // Scroll linked animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Smooth Parallax movement for background image on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#17121F] text-white select-none pt-24 sm:pt-28"
    >
      
      {/* 1. FULL-WIDTH, FULL-VIEWPORT BACKGROUND IMAGE WITH PARALLAX & FADE-IN */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src={imgSrc}
          onError={() => setImgSrc('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=90')}
          alt="DASA TECH — Customer Satisfaction & Intelligent Digital Solutions"
          className="w-full h-full object-cover object-center opacity-85"
        />
        {/* Subtle gradient overlay to ensure 100% legibility while keeping image clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17121F]/85 via-[#17121F]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17121F]/40 via-transparent to-[#17121F]/90" />
      </motion.div>

      {/* 2. HERO TYPOGRAPHY & MAIN CONTENT LAYER (PERFECTLY VISIBLE AT ALL TIMES) */}
      <div
        className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full py-8 lg:py-12 my-auto pb-16"
      >
        <div className="max-w-4xl space-y-6">

          {/* Clean Eyebrow Lead */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-white/90 font-medium tracking-wide">Enterprise Software, Automation &amp; IoT Systems</span>
          </motion.div>

          {/* VERY LARGE HIGH-CONTRAST TYPOGRAPHY WITH MASK REVEAL */}
          <div className="font-display leading-[1.16] tracking-tight text-white drop-shadow-xl space-y-1">
            
            {/* Line 1: INTELLIGENT */}
            <div className="overflow-hidden pt-1 pb-3 -mb-2">
              <motion.div
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold pb-1"
              >
                INTELLIGENT
              </motion.div>
            </div>

            {/* Line 2: ENTERPRISE */}
            <div className="overflow-hidden pt-1 pb-3 -mb-2">
              <motion.div
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.38, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold pb-1"
              >
                ENTERPRISE
              </motion.div>
            </div>

            {/* Line 3: & CONNECTED (Outlined Transparent Stroke Text Effect) */}
            <div className="overflow-hidden pt-1 pb-3 -mb-2">
              <motion.div
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.46, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-3xl sm:text-5xl lg:text-6xl font-light text-transparent tracking-wide pb-1"
                style={{
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.9)',
                }}
              >
                &amp; CONNECTED
              </motion.div>
            </div>

            {/* Line 4: DIGITAL */}
            <div className="overflow-hidden pt-1 pb-3 -mb-2">
              <motion.div
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.54, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold pb-1"
              >
                DIGITAL
              </motion.div>
            </div>

            {/* Line 5: SOLUTIONS FOR */}
            <div className="overflow-hidden pt-1 pb-3 -mb-2">
              <motion.div
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.62, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-3xl sm:text-5xl lg:text-6xl font-light text-white/90 tracking-wide pb-1"
              >
                SOLUTIONS FOR
              </motion.div>
            </div>

            {/* Line 6: MODERN (With Premium Violet Highlight Badge) */}
            <div className="overflow-hidden pt-1 pb-3 -mb-2">
              <motion.div
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold inline-flex items-center gap-3 pb-1"
              >
                <span className="text-color-shift">
                  MODERN
                </span>
                <span className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white">
                  BUSINESSES
                </span>
              </motion.div>
            </div>

          </div>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.78 }}
            className="text-white/85 text-base sm:text-xl max-w-2xl leading-relaxed font-normal pt-2"
          >
            We turn complex business challenges into reliable software, smart management platforms, and modern digital solutions built for growth.
          </motion.p>

          {/* 3. CTA BUTTONS (FADE/SLIDE IN LAST) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="pt-4 flex flex-wrap items-center gap-5"
          >
            {/* CTA 1: START YOUR PROJECT → */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6C2BD9] hover:from-[#8B5CF6] hover:to-[#7C3AED] px-8 py-4 font-display font-bold text-sm text-white shadow-lg shadow-[#7C3AED]/40 hover:shadow-xl hover:shadow-[#7C3AED]/60 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span>START YOUR PROJECT</span>
              <div className="w-8 h-8 rounded-full bg-white text-[#7C3AED] flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
