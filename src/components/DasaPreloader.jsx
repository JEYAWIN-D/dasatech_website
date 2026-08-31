import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DasaCinematicIntro from './DasaCinematicIntro'

const INTRO_STORAGE_KEY = 'dasa_tech_intro_seen_v3'

export default function DasaPreloader({ onFinish }) {
  const [showPreloader, setShowPreloader] = useState(() => {
    try {
      const hasSeen = sessionStorage.getItem(INTRO_STORAGE_KEY)
      return !hasSeen
    } catch {
      return false
    }
  })
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (!showPreloader) return

    // Lock body scroll during cinematic intro
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [showPreloader])

  const handleComplete = () => {
    if (isExiting) return
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, 'true')
    } catch {
      // Handle storage restrictions gracefully
    }
    setIsExiting(true)
    setTimeout(() => {
      setShowPreloader(false)
      document.documentElement.style.overflow = ''
      if (onFinish) onFinish()
    }, 700)
  }

  if (!showPreloader) return null

  return (
    <AnimatePresence>
      <motion.div
        key="dasa-cinematic-intro-stage"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isExiting ? 0 : 1,
          scale: isExiting ? 1.08 : 1,
          filter: isExiting ? 'blur(16px) brightness(1.4)' : 'blur(0px) brightness(1)'
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="fixed inset-0 z-[99999] bg-[#02040a] text-white flex items-center justify-center overflow-hidden select-none"
      >
        {/* Next-Gen 3D Quantum Crystalline Experience */}
        <DasaCinematicIntro onComplete={handleComplete} />
      </motion.div>
    </AnimatePresence>
  )
}

