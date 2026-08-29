import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
import { Pill, GraduationCap, Factory, Boxes, MessageCircle, ShoppingCart } from 'lucide-react'

const PROJECTS_SHOWCASE = [
  {
    id: 'medflow',
    name: 'MedFlow Pharmacy Software',
    tagline: 'Pharmacy Operations & Billing',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=85',
    icon: Pill,
    badge: 'HEALTHCARE'
  },
  {
    id: 'educore',
    name: 'EduCore School System',
    tagline: 'School & Campus Management',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85',
    icon: GraduationCap,
    badge: 'EDUCATION'
  },
  {
    id: 'factorysync',
    name: 'FactorySync Industrial Automation',
    tagline: 'Smart Factory & Production Tracking',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=85',
    icon: Factory,
    badge: 'INDUSTRIAL AUTOMATION'
  },
  {
    id: 'wareflex',
    name: 'WareFlex Warehouse System',
    tagline: 'Smart Inventory & Stock Control',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=85',
    icon: Boxes,
    badge: 'WAREHOUSE & LOGISTICS'
  },
  {
    id: 'snapshare',
    name: 'SnapShare Media App',
    tagline: 'Instant Photo & File Sharing',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=85',
    icon: MessageCircle,
    badge: 'MEDIA SHARING'
  },
  {
    id: 'commerceengine',
    name: 'CommerceEngine Store',
    tagline: 'Fast Online Store & Checkout',
    image: 'https://images.unsplash.com/photo-1556742049-0a6756570679?auto=format&fit=crop&w=600&q=85',
    icon: ShoppingCart,
    badge: 'E-COMMERCE'
  }
]

const INFINITE_ITEMS = [...PROJECTS_SHOWCASE, ...PROJECTS_SHOWCASE, ...PROJECTS_SHOWCASE]

export default function TechMarquee() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const marqueeRef = useRef(null)
  const x = useMotionValue(0)
  const speed = 0.055 // Smooth pixel speed per ms

  // Continuous animation loop via requestAnimationFrame
  useAnimationFrame((time, delta) => {
    if (hoveredIdx !== null) return

    let currentX = x.get() - speed * delta
    
    // Wrap around calculation for seamless 3-set infinite loop
    const container = marqueeRef.current
    if (container) {
      const oneSetWidth = container.scrollWidth / 3
      if (oneSetWidth > 0 && Math.abs(currentX) >= oneSetWidth) {
        currentX += oneSetWidth
      }
    }
    x.set(currentX)
  })

  return (
    <section className="w-full py-6 bg-white border-y border-[#E9E2F5] overflow-hidden relative select-none z-20">
      
      {/* Marquee Track Container */}
      <div
        className="w-full overflow-hidden relative py-3"
        onMouseLeave={() => setHoveredIdx(null)}
      >
        <motion.div
          ref={marqueeRef}
          className="flex items-center gap-6 w-max py-1"
          style={{ x }}
        >
          {INFINITE_ITEMS.map((item, idx) => {
            const Icon = item.icon
            const isHovered = hoveredIdx === idx

            return (
              <motion.div
                key={`${item.id}-${idx}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                animate={{
                  scale: isHovered ? 1.03 : 1,
                  y: isHovered ? -3 : 0
                }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-center gap-4 p-3.5 pr-6 rounded-2xl transition-all duration-300 shrink-0 cursor-pointer group ${
                  isHovered
                    ? 'bg-white border-2 border-[#6C2BD9] shadow-lg'
                    : 'bg-[#F5F0FF]/60 border border-[#E9E2F5] hover:border-[#6C2BD9] shadow-2xs'
                }`}
              >
                {/* Big Image Thumbnail */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#E9E2F5] bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 transition-colors ${
                    isHovered ? 'bg-transparent' : 'bg-[#6C2BD9]/15'
                  }`} />
                </div>

                {/* Logo Icon & Text */}
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2">
                    <div className={`p-1 rounded-md transition-colors ${
                      isHovered ? 'bg-[#6C2BD9] text-white' : 'bg-[#6C2BD9]/90 text-white'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className={`font-display font-black text-base transition-colors leading-tight ${
                      isHovered ? 'text-[#6C2BD9]' : 'text-[#17121F]'
                    }`}>
                      {item.name}
                    </span>
                  </div>
                  <div className="text-xs font-mono font-semibold text-[#6F6878] mt-1">
                    {item.tagline}
                  </div>
                </div>

                {/* Badge Tag */}
                <span className={`ml-3 text-[10px] font-mono font-bold px-3 py-1 rounded-full border uppercase tracking-wider transition-colors ${
                  isHovered
                    ? 'bg-[#6C2BD9] text-white border-[#6C2BD9]'
                    : 'bg-white text-[#6C2BD9] border-[#DDD0FF]'
                }`}>
                  {item.badge}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

    </section>
  )
}
