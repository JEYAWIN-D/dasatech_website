import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SmoothLogoReveal from './SmoothLogoReveal'

const INTRO_STORAGE_KEY = 'dasa_tech_intro_seen_v5'

export default function DasaPreloader({ onFinish }) {
  const [showPreloader, setShowPreloader] = useState(() => {
    try {
      // Check if user has already seen the intro animation in this session
      const hasSeen = sessionStorage.getItem(INTRO_STORAGE_KEY)
      return !hasSeen
    } catch {
      return false
    }
  })
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (!showPreloader) return

    // Lock body scroll during first visit preloader
    document.documentElement.style.overflow = 'hidden'

    // 10-Second timer for logo reveal preloader before entering site
    const safetyTimer = setTimeout(() => {
      handleComplete()
    }, 10000)

    return () => {
      clearTimeout(safetyTimer)
      document.documentElement.style.overflow = ''
    }
  }, [showPreloader, onFinish])

  const handleComplete = () => {
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
    }, 600)
  }

  if (!showPreloader) return null

  return (
    <AnimatePresence>
      <motion.div
        key="dasa-10s-black-preloader"
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: isExiting ? 0 : 1,
          scale: isExiting ? 1.04 : 1,
          filter: isExiting ? 'blur(12px)' : 'blur(0px)'
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}
        onClick={handleComplete}
        className="fixed inset-0 z-[99999] bg-black text-white flex items-center justify-center overflow-hidden select-none cursor-pointer"
      >
        {/* Smooth Vector Logo Reveal Stage */}
        <SmoothLogoReveal onComplete={handleComplete} />
      </motion.div>
    </AnimatePresence>
  )
}
