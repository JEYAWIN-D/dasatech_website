import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function BentoCard({
  children,
  className = '',
  glowColor = 'rgba(0, 212, 255, 0.15)',
  borderColor = 'hover:border-[#00D4FF]/40',
  ...props
}) {
  const cardRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className={`relative overflow-hidden rounded-2xl bg-[#0F1117] border border-white/10 ${borderColor} transition-colors duration-300 shadow-xl ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Follow Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 -z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}
