import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SmoothLogoReveal from './SmoothLogoReveal'

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
    }, 500)
  }

  if (!showPreloader) return null

  return (
    <AnimatePresence>
      <motion.div
        key="dasa-cinematic-intro-stage"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isExiting ? 0 : 1,
          scale: isExiting ? 1.04 : 1
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="fixed inset-0 z-[99999] bg-[#050711] text-white flex items-center justify-center overflow-hidden select-none"
      >
        {/* Fast & Smooth MNC Cinematic Brand Reveal */}
        <SmoothLogoReveal onComplete={handleComplete} />
      </motion.div>
    </AnimatePresence>
  )
}


