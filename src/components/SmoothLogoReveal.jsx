import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * SmoothLogoReveal (10-Second Cinematic Dark / Black Reveal)
 * - Background: Pure Deep Black #000000 with obsidian radial glow & dark cyber grid
 * - Monogram & Vectors: Radiant Electric Cyan #06B6D4, Neon Blue #3B82F6, Hyper Violet #8B5CF6
 * - Typography: Crisp Pure White #FFFFFF and Electric Cyan #38BDF8
 * - Duration: Exactly 10.0 seconds with live progress ticker (0% -> 100%)
 */
export default function SmoothLogoReveal({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // 10-second total duration ticker
    const totalTime = 10000
    const intervalTime = 50
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

    // Complete trigger at 10 seconds (10000ms)
    const completeTimeout = setTimeout(() => {
      if (onComplete) onComplete()
    }, totalTime)

    return () => {
      clearInterval(timer)
      clearTimeout(completeTimeout)
    }
  }, [onComplete])

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden bg-black text-white">
      
      {/* 1. Deep Obsidian Radial Atmosphere Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.2, 0.9, 1, 0.85], scale: [0.8, 1, 1.05, 1] }}
        transition={{ duration: 10, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,rgba(59,130,246,0.08)_40%,rgba(0,0,0,1)_80%)] pointer-events-none"
      />

      {/* 2. Cyber Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* 3. Floating Micro Energy Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${(i * 17 + 5) % 100}vw`,
              y: `${(i * 23 + 10) % 100}vh`,
              opacity: 0,
              scale: 0.4
            }}
            animate={{
              y: [`${(i * 23 + 10) % 100}vh`, `${((i * 23 + 10) % 100) - 20}vh`],
              opacity: [0, 0.8, 0],
              scale: [0.4, 1.2, 0.4]
            }}
            transition={{
              duration: 5.0 + (i % 4),
              repeat: Infinity,
              delay: (i * 0.4) % 3,
              ease: 'easeInOut'
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]"
          />
        ))}
      </div>

      {/* 4. Main SVG Vector Stage */}
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center">
        <svg
          viewBox="0 0 960 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[50vh] overflow-visible drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]"
        >
          <defs>
            {/* Neon Cyan to Blue Gradient */}
            <linearGradient id="darkCyanBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>

            {/* Glowing Pure White Gradient */}
            <linearGradient id="whiteShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            {/* Electric Blue Gradient */}
            <linearGradient id="electricBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="60%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>

            {/* Hyper Laser Sweep */}
            <linearGradient id="laserSweep" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* ============================================================== */}
          {/* PHASE 1: DUAL ENERGY ORBIT RINGS (0.0s - 2.5s)                */}
          {/* ============================================================== */}
          <g>
            <motion.circle
              cx="190"
              cy="160"
              r="105"
              stroke="url(#darkCyanBlue)"
              strokeWidth="4.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1, rotate: 0 }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            />

            <motion.circle
              cx="190"
              cy="160"
              r="95"
              stroke="url(#electricBlue)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="16 8"
              initial={{ pathLength: 0, rotate: 90 }}
              animate={{ pathLength: 1, rotate: 360 }}
              transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </g>

          {/* ============================================================== */}
          {/* PHASE 2: MONOGRAM "DT" CORE VECTOR (2.5s - 5.0s)               */}
          {/* ============================================================== */}
          <g>
            {/* Monogram "D" */}
            <motion.path
              d="M 140 95 L 185 95 C 230 95 255 125 255 160 C 255 195 230 225 185 225 L 140 225 Z"
              stroke="url(#darkCyanBlue)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="rgba(6, 182, 212, 0.12)"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 0.9 }}
              transition={{
                pathLength: { delay: 2.2, duration: 2.2, ease: [0.16, 1, 0.3, 1] },
                fillOpacity: { delay: 4.0, duration: 0.8 }
              }}
            />

            {/* Monogram "T" */}
            <motion.path
              d="M 160 120 L 235 120 M 198 120 L 198 205"
              stroke="url(#whiteShine)"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2.8, duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
            />
          </g>

          {/* ============================================================== */}
          {/* PHASE 3: TYPOGRAPHY "DASA" (Glowing Pure White) (5.0s - 7.5s)  */}
          {/* ============================================================== */}
          <g>
            {/* Letter 'D' */}
            <motion.path
              d="M 370 100 L 415 100 C 445 100 460 125 460 160 C 460 195 445 220 415 220 L 370 220 Z"
              stroke="url(#whiteShine)"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="url(#whiteShine)"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { delay: 4.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                fillOpacity: { delay: 5.8, duration: 0.4 }
              }}
            />
            {/* Inner Counter for 'D' */}
            <motion.path
              d="M 392 122 L 412 122 C 430 122 438 138 438 160 C 438 182 430 198 412 198 L 392 198 Z"
              fill="#000000"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.8, duration: 0.2 }}
            />

            {/* Letter 'A' 1 */}
            <motion.path
              d="M 475 220 L 505 100 L 535 220 M 486 180 L 524 180"
              stroke="url(#whiteShine)"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 5.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Letter 'S' */}
            <motion.path
              d="M 598 125 C 590 105 558 100 558 130 C 558 160 600 160 600 190 C 600 225 560 225 550 200"
              stroke="url(#whiteShine)"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 5.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Letter 'A' 2 */}
            <motion.path
              d="M 618 220 L 648 100 L 678 220 M 629 180 L 667 180"
              stroke="url(#whiteShine)"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 6.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </g>

          {/* ============================================================== */}
          {/* PHASE 4: TYPOGRAPHY "TECH" (Neon Cyan & Blue) (6.5s - 8.5s)    */}
          {/* ============================================================== */}
          <g>
            {/* Letter 'T' */}
            <motion.path
              d="M 700 100 L 748 100 M 724 100 L 724 220"
              stroke="url(#darkCyanBlue)"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 6.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Letter 'E' */}
            <motion.path
              d="M 808 100 L 766 100 L 766 220 L 808 220 M 766 160 L 800 160"
              stroke="url(#darkCyanBlue)"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 6.8, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Letter 'C' */}
            <motion.path
              d="M 870 125 C 860 102 825 102 825 160 C 825 218 860 218 870 195"
              stroke="url(#darkCyanBlue)"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 7.2, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Letter 'H' */}
            <motion.path
              d="M 890 100 L 890 220 M 890 160 L 935 160 M 935 100 L 935 220"
              stroke="url(#darkCyanBlue)"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 7.6, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            />
          </g>

          {/* Underline Laser Beam */}
          <motion.line
            x1="370"
            y1="250"
            x2="935"
            y2="250"
            stroke="url(#darkCyanBlue)"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 7.5, duration: 1.2, ease: 'easeOut' }}
          />
        </svg>

        {/* 5. Subtitle Tagline Reveal (7.5s - 9.0s) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 7.8, duration: 1.2 }}
          className="mt-6 flex flex-col items-center justify-center gap-2 text-center"
        >
          <p className="text-xs sm:text-sm font-mono tracking-[0.35em] text-cyan-300 uppercase font-semibold drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            ENGINEERING FUTURE INNOVATIONS & AUTOMATION
          </p>
        </motion.div>
      </div>

      {/* 6. Live 10-Second Progress Indicator & Skip Hint (Bottom Bar) */}
      <div className="absolute bottom-10 left-0 right-0 max-w-md mx-auto px-8 flex flex-col items-center gap-3 z-20">
        <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="tracking-widest uppercase text-[11px] font-bold text-slate-400">
            DASA TECH INTRO
          </span>
          <span className="text-cyan-400 font-bold tracking-widest">
            {Math.min(100, Math.floor(progress))}%
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full shadow-[0_0_12px_#06b6d4]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-[10px] font-mono text-slate-500 tracking-wider">
          CLICK ANYWHERE TO ENTER INSTANTLY
        </p>
      </div>

    </div>
  )
}

