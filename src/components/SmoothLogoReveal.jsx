import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Shield, Cpu, Activity } from 'lucide-react'

/**
 * SmoothLogoReveal (10-Second Cinematic MNC Preloader Reveal)
 * Features the official DASA ribbon brand identity:
 * - High-res DASA ribbon mark with multi-color neon aura (Blue, Teal, Cobalt, Purple)
 * - Centered tagline: "TECHNOLOGY • INNOVATION • FUTURE" & "DASA IS THE SOLUTION"
 * - Live enterprise system initialization ticker & progress bar
 */
export default function SmoothLogoReveal({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const totalTime = 2400 // 2.4-second fast, punchy cinematic reveal
    const intervalTime = 40
    const increment = (intervalTime / totalTime) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + increment
      })
    }, intervalTime)

    const completeTimeout = setTimeout(() => {
      if (onComplete) onComplete()
    }, totalTime)

    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        if (onComplete) onComplete()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearInterval(timer)
      clearTimeout(completeTimeout)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onComplete])

  return (
    <div
      onClick={onComplete}
      className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden bg-[#050711] text-white cursor-pointer"
    >
      
      {/* 1. Deep Multi-Color Aurora Atmosphere */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ 
          opacity: [0.3, 0.85, 0.7],
          scale: [0.85, 1.05, 1]
        }}
        transition={{ duration: 2.4, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,102,255,0.22)_0%,rgba(0,197,181,0.12)_25%,rgba(124,43,248,0.15)_45%,rgba(5,7,17,1)_75%)] pointer-events-none"
      />

      {/* 2. Micro Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* 3. Floating Holographic Energy Particles (Optimized count for 60+ FPS) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${(i * 17 + 9) % 100}vw`,
              y: `${(i * 23 + 11) % 100}vh`,
              opacity: 0,
              scale: 0.4
            }}
            animate={{
              y: [`${(i * 23 + 11) % 100}vh`, `${((i * 23 + 11) % 100) - 25}vh`],
              opacity: [0, 0.85, 0],
              scale: [0.4, 1.2, 0.4]
            }}
            transition={{
              duration: 2.2 + (i % 2),
              repeat: Infinity,
              delay: (i * 0.18) % 1.5,
              ease: 'easeInOut'
            }}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-1.5 h-1.5 bg-[#00C5B5] shadow-[0_0_8px_#00C5B5]' :
              i % 3 === 1 ? 'w-2 h-2 bg-[#0066FF] shadow-[0_0_10px_#0066FF]' :
              'w-1.5 h-1.5 bg-[#7C2BF8] shadow-[0_0_8px_#7C2BF8]'
            }`}
          />
        ))}
      </div>

      {/* 4. Central Stage: Official DASA Brand Lockup */}
      <div className="relative z-10 w-full max-w-xl px-6 flex flex-col items-center justify-center text-center">
        
        {/* Soft Neon Glow Core */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.8, 1.15, 1], opacity: [0.4, 0.9, 0.7] }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          className="absolute w-96 h-48 bg-gradient-to-r from-blue-600/40 via-teal-500/30 to-purple-600/40 blur-[70px] rounded-full pointer-events-none -z-10"
        />

        {/* Main Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center justify-center select-none"
        >
          {/* High-Resolution DASA Ribbon Mark */}
          <div className="relative">
            <motion.img
              src="/dasa-wordmark.png"
              alt="DASA"
              initial={{ filter: 'brightness(1.8) contrast(1.2)' }}
              animate={{ filter: 'brightness(1) contrast(1)' }}
              transition={{ delay: 0.4, duration: 1.6 }}
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_4px_30px_rgba(0,102,255,0.5)]"
            />

            {/* Shimmer Light Sweep */}
            <motion.div
              initial={{ x: '-150%', opacity: 0 }}
              animate={{ x: ['-150%', '200%'], opacity: [0, 0.8, 0] }}
              transition={{
                delay: 1.5,
                duration: 2.0,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] pointer-events-none"
            />
          </div>

          {/* Tagline 1: TECHNOLOGY • INNOVATION • FUTURE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.0 }}
            className="flex items-center justify-center gap-2 sm:gap-2.5 text-[10px] sm:text-[11px] font-mono tracking-[0.26em] text-slate-100 uppercase font-bold mt-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            <span>TECHNOLOGY</span>
            <span className="text-[#0066FF] font-black text-xs shadow-[0_0_8px_#0066FF]">•</span>
            <span>INNOVATION</span>
            <span className="text-[#00C5B5] font-black text-xs shadow-[0_0_8px_#00C5B5]">•</span>
            <span>FUTURE</span>
          </motion.div>

          {/* Subtle Horizontal Divider Accent */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.0 }}
            className="w-48 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-2"
          />

          {/* Tagline 2: DASA IS THE SOLUTION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1.0 }}
            className="text-[8.5px] sm:text-[9.5px] font-mono tracking-[0.32em] text-indigo-300 uppercase font-semibold"
          >
            DASA IS THE SOLUTION
          </motion.div>
        </motion.div>

        {/* Enterprise System Initialization Status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-300 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C5B5] animate-pulse" />
          <span className="tracking-widest uppercase">
            {progress < 40 ? 'INITIALIZING CLOUD CORE...' : progress < 75 ? 'CONNECTING ENTERPRISE MESH...' : 'DASA SYSTEMS ONLINE'}
          </span>
        </motion.div>

      </div>

      {/* 5. Bottom Progress Bar & Instant Enter Hint */}
      <div className="absolute bottom-10 left-0 right-0 max-w-sm mx-auto px-6 flex flex-col items-center gap-2.5 z-20">
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="tracking-widest uppercase text-[10px] font-semibold text-slate-400">
            SYSTEM LOAD
          </span>
          <span className="text-[#00C5B5] font-bold font-mono">
            {Math.min(100, Math.floor(progress))}%
          </span>
        </div>

        {/* Sleek Gradient Progress Track */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden border border-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-[#0066FF] via-[#00C5B5] to-[#7C2BF8] rounded-full shadow-[0_0_12px_#00C5B5]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[9px] font-mono text-slate-500 tracking-wider hover:text-slate-400 transition-colors pt-0.5">
          CLICK ANYWHERE TO ENTER
        </span>
      </div>

    </div>
  )
}


