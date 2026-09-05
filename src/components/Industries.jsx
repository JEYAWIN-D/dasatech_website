import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Factory, HeartPulse, GraduationCap, ShoppingBag, HardHat, Hotel,
  Landmark, Truck, Zap, Wheat, Building, Home, Sparkles
} from 'lucide-react'
import Reveal from './Reveal.jsx'
import TextLineReveal from './TextLineReveal.jsx'

const INDUSTRIES = [
  { icon: Factory, name: 'Manufacturing', color: '#00E5FF' },
  { icon: HeartPulse, name: 'Healthcare ERP', color: '#EC4899' },
  { icon: GraduationCap, name: 'Education', color: '#8B3CFF' },
  { icon: ShoppingBag, name: 'Retail Systems', color: '#10B981' },
  { icon: HardHat, name: 'Construction', color: '#F59E0B' },
  { icon: Hotel, name: 'Hospitality', color: '#3B82F6' },
  { icon: Landmark, name: 'Finance & Banking', color: '#6366F1' },
  { icon: Truck, name: 'Logistics Telemetry', color: '#00E5FF' },
  { icon: Zap, name: 'Energy & SCADA', color: '#F59E0B' },
  { icon: Wheat, name: 'AgriTech IoT', color: '#10B981' },
  { icon: Building, name: 'Smart Infrastructure', color: '#8B3CFF' },
  { icon: Home, name: 'Home Automation', color: '#EC4899' }
]

function IndustryCard({ icon: Icon, name, color }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-40, 40], [12, -12]), { stiffness: 220, damping: 18 })
  const ry = useSpring(useTransform(mx, [-40, 40], [-12, 12]), { stiffness: 220, damping: 18 })

  function onMouseMove(e) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set(e.clientX - rect.left - rect.width / 2)
    my.set(e.clientY - rect.top - rect.height / 2)
  }
  function onLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 600 }}
      whileHover={{ scale: 1.06, y: -4 }}
      className="glass rounded-3xl p-6 flex flex-col items-center justify-center gap-3.5 text-center border border-purple-500/20 hover:border-purple-400 bg-[#090D1A]/80 hover:bg-[#0E1528] transition-all duration-300 cursor-pointer group relative overflow-hidden shadow-xl"
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border"
        style={{
          backgroundColor: `${color}15`,
          borderColor: `${color}40`
        }}
      >
        <Icon className="w-6 h-6 transition duration-300" style={{ color: color }} />
      </div>

      <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-white transition duration-300">
        {name}
      </span>
    </motion.div>
  )
}

export default function Industries() {
  return (
    <section id="industries" className="relative py-28 bg-[#05070F] text-white overflow-hidden border-t border-purple-900/30">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-xs font-bold tracking-wider text-purple-400 uppercase mb-3">
            Target Industry Verticals
          </div>

          <TextLineReveal
            as="h2"
            lines={['Built for Industries That', 'Run the Modern World']}
            className="font-display text-3xl sm:text-5xl font-bold text-white max-w-2xl"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 6) * 0.05}>
              <IndustryCard {...ind} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
