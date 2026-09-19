import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

/**
 * PageHeaderHero Component
 * Rendered at top of sub-pages right under Nav Bar
 * - Image animates FIRST scaling from back-to-front (3D depth zoom effect)
 * - Text & badge animate AFTER the image (staggered delay)
 * - Color Palette: Pure White #FFFFFF background, #6C2BD9 Deep Violet accents
 */
export default function PageHeaderHero({
  tagline = 'DASA TECH ENTERPRISE',
  title = 'Engineering Innovation',
  description = 'High-reliability software, edge hardware, and industrial automation engineered for real-world enterprise operations.',
  image = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
  tools = []
}) {
  return (
    <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-white text-[#17121F] overflow-hidden select-none border-b border-[#E9E2F5]">
      
      {/* Soft Light Violet Glow Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,43,217,0.08)_0%,rgba(255,255,255,1)_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ============================================================== */}
          {/* STEP 1: BIG IMAGE - ANIMATES FROM BACK TO FRONT (ZOOM IN 3D)   */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 lg:order-2 flex justify-center">
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotateX: 12 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative w-full max-w-lg h-[230px] sm:h-[380px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E9E2F5] group bg-[#F5F0FF]"
            >
              {/* High Quality Sub-Page Image */}
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Deep Violet Gradient Shine Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17121F]/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Tool Badges Overlay */}
              {tools && tools.length > 0 && (
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 sm:gap-2 z-10">
                  {tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold text-white bg-[#6C2BD9]/90 backdrop-blur-md border border-[#8B5CF6]/50 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* ============================================================== */}
          {/* STEP 2: TEXT & DETAILS - ANIMATES AFTER THE IMAGE (DELAYED)   */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 lg:order-1 space-y-5 sm:space-y-6">
            
            {/* Staggered Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-xs font-bold uppercase tracking-wider text-[#6C2BD9]"
            >
              <span>{tagline}</span>
            </motion.div>

            {/* Staggered Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#17121F] leading-[1.14]"
            >
              {title.includes(' ') ? (
                <>
                  {title.substring(0, title.lastIndexOf(' '))} {' '}
                  <span className="text-[#6C2BD9]">
                    {title.substring(title.lastIndexOf(' ') + 1)}
                  </span>
                </>
              ) : (
                <span className="text-[#6C2BD9]">{title}</span>
              )}
            </motion.h1>

            {/* Staggered Clean Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="text-[#6F6878] text-base sm:text-lg leading-relaxed font-normal max-w-xl"
            >
              {description}
            </motion.p>

            {/* Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="w-24 h-1 bg-gradient-to-r from-[#6C2BD9] to-[#8B5CF6] rounded-full origin-left"
            />

          </div>

        </div>
      </div>
    </div>
  )
}
