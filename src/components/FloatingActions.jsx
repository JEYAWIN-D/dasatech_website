import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, MessageCircle } from 'lucide-react'

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.85 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-11 h-11 rounded-full bg-[#0F1117]/90 border border-white/15 text-slate-300 hover:text-white hover:border-[#00D4FF]/50 hover:bg-[#151821] flex items-center justify-center backdrop-blur-lg shadow-xl hover:shadow-[0_0_15px_rgba(0,212,255,0.25)] transition-all group"
          >
            <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action */}
      <motion.a
        href="https://wa.me/917639930148?text=Hello%20DASA%20TECH%2C%20I%20would%20like%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DASA TECH on WhatsApp"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative group w-13 h-13 p-3 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10 pointer-events-none opacity-75" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-[#0F1117] border border-white/10 text-xs font-mono text-white whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          Direct WhatsApp
        </span>

        {/* WhatsApp Icon (SVG for pixel perfection) */}
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.02.79.81-2.95-.19-.3a8.188 8.188 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23l-.22-.19zm4.78 11.66c-.26-.13-1.55-.76-1.79-.85-.24-.09-.42-.13-.6.13-.17.26-.68.85-.84 1.02-.15.17-.31.19-.57.06-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.31-1.56-1.46-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.6-1.44-.82-1.97-.22-.53-.44-.45-.6-.46l-.52-.01c-.17 0-.46.06-.7.32-.24.26-.93.91-.93 2.22s.95 2.58 1.08 2.76c.13.17 1.87 2.85 4.53 4 2.66 1.15 2.66.77 3.14.72.48-.05 1.55-.63 1.77-1.24.22-.61.22-1.14.15-1.25-.06-.11-.23-.18-.49-.31z" />
        </svg>
      </motion.a>
    </div>
  )
}

