import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, ChevronUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    setIsClicking(true)
    setTimeout(() => setIsClicking(false), 800)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 select-none"
        >
          {/* Wave burst ring when clicked */}
          {isClicking && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0.9 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full border-2 border-blue-500 pointer-events-none shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            />
          )}

          {/* Main Floating Brand Button */}
          <motion.button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-slate-200 shadow-lg shadow-slate-900/10 flex items-center justify-center group cursor-pointer overflow-visible transition duration-200"
            aria-label="Back to Top"
          >
            {/* Rotating DASA text ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: isHovered ? 4 : 12,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center"
            >
              <svg className="w-full h-full p-1" viewBox="0 0 100 100">
                <path
                  id="dasaCirclePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="font-mono text-[9px] font-bold tracking-[0.25em] fill-slate-400 group-hover:fill-blue-600 uppercase transition duration-200">
                  <textPath href="#dasaCirclePath" startOffset="0%">
                    DASA • DASA • DASA • DASA •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Central icon */}
            <motion.div
              animate={{
                y: isHovered ? [-1, -4, -1] : [0, -2, 0]
              }}
              transition={{
                duration: isHovered ? 1.0 : 2.0,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative z-10 flex flex-col items-center justify-center text-slate-700 group-hover:text-blue-600 transition duration-200"
            >
              <div className="relative">
                <Bot className="w-6 h-6" />
                <ChevronUp className="w-3.5 h-3.5 absolute -top-2 left-1/2 -translate-x-1/2 text-blue-600 group-hover:-translate-y-1 transition duration-200" />
              </div>
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

