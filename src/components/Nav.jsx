import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Check } from 'lucide-react'
import { Link, usePath } from './Router.jsx'
import PillButton from './PillButton.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const { path } = usePath()

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Products', to: '/products' }
  ]

    const isActive = (to) => {
    if (to === '/') return path === '/'
    return path.startsWith(to)
  }

  const isContact = isActive('/contact')

  return (
    <>
      {/* Top Precision Reading Progress Bar with Radiant Glow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[95] bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 shadow-[0_0_12px_rgba(129,140,248,0.8)]"
        style={{ scaleX: progress }}
      />

      {/* Main Navbar Header with High-Performance Glass Backdrop */}
      <header
        style={{
          backgroundImage:
            'linear-gradient(125deg, rgba(8, 12, 28, 0.96) 0%, rgba(15, 17, 46, 0.95) 25%, rgba(24, 15, 52, 0.95) 50%, rgba(13, 22, 48, 0.95) 75%, rgba(8, 12, 28, 0.96) 100%)',
        }}
        className={`fixed top-0 left-0 right-0 z-[80] backdrop-blur-xl transition-all duration-300 select-none ${
          scrolled
            ? 'py-3.5 sm:py-4 border-b border-indigo-500/20 shadow-[0_12px_36px_rgba(0,0,0,0.5)]'
            : 'py-5 sm:py-6 border-b border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.3)]'
        }`}
      >
        {/* Subtle Ambient Radial Light Accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-24 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/4 w-96 h-24 bg-violet-500/10 rounded-full blur-3xl" />
        </div>

        <nav className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-6 relative z-10">
          
          {/* Official Brand Logo - Horizontal Inline Layout */}
          <Link
            to="/"
            className="group flex items-center gap-3 shrink-0 select-none py-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="flex items-center"
            >
              <img
                src={import.meta.env.BASE_URL + 'dasa-wordmark.png'}
                alt="DASA"
                className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,102,255,0.3)]"
              />
            </motion.div>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-7 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />

            {/* Tagline Side Column */}
            <div className="hidden sm:flex flex-col text-left justify-center leading-tight">
              <div className="flex items-center gap-1 text-[8px] sm:text-[8.5px] font-mono tracking-[0.2em] text-slate-200 uppercase font-semibold">
                <span>TECHNOLOGY</span>
                <span className="text-[#0066FF] font-bold">•</span>
                <span>INNOVATION</span>
                <span className="text-[#00C5B5] font-bold">•</span>
                <span>FUTURE</span>
              </div>
              <span className="text-[7px] sm:text-[7.5px] font-mono tracking-[0.24em] text-indigo-300/80 uppercase font-medium mt-0.5">
                DASA IS THE SOLUTION
              </span>
            </div>
          </Link>

          {/* Center Navigation Island - Clean Minimalist Floating Glass Capsule */}
          <div
            className="hidden lg:flex items-center gap-1 p-1 bg-white/[0.06] border border-white/10 rounded-full backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {navLinks.map((item, idx) => {
              const active = isActive(item.to)
              const isHovered = hoveredIdx === idx

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`relative px-5 py-2 rounded-full text-[14px] font-display transition-colors duration-200 select-none flex items-center justify-center ${
                    active
                      ? 'text-white font-bold'
                      : 'text-slate-300 font-medium hover:text-white'
                  }`}
                >
                  {/* Smooth Active Sliding Glass Capsule */}
                  {active && (
                    <motion.div
                      layoutId="activeNavCapsule"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 bg-white/15 border border-white/20 rounded-full shadow-[0_2px_12px_rgba(255,255,255,0.08),inset_0_1px_1px_rgba(255,255,255,0.25)] -z-10"
                    />
                  )}

                  {/* Soft Floating Hover Capsule when not active */}
                  {!active && isHovered && (
                    <motion.div
                      layoutId="hoverNavCapsule"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      className="absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                    />
                  )}

                  {/* Nav Item Label */}
                  <span className="relative z-10 transition-colors duration-200">
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </div>

            {/* Right Area: Start Project CTA Button with Clean Gradient */}
            <div className="flex items-center gap-3.5">
              <Link
                to="/contact"
                className={`hidden sm:inline-flex group relative items-center gap-2.5 px-6 py-2.5 rounded-full font-display text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 ${
                  isContact
                    ? 'bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] border-2 border-violet-400 shadow-[0_0_25px_rgba(139,92,246,0.45)]'
                    : 'bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] hover:from-[#3B82F6] hover:to-[#8B5CF6] border border-white/25 shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_30px_rgba(129,140,248,0.6)]'
                }`}
              >
                {/* Clean subtle bottom active glow bar */}
                {isContact && (
                  <span className="absolute bottom-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-90" />
                )}

                <span className="relative z-10">Schedule Consultation</span>

                {/* Clean indicator circle: (✓) when active on page, (↗) on other pages */}
                <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isContact
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'bg-white/20 text-white group-hover:scale-110'
                }`}>
                  {isContact ? (
                    <Check className="w-3 h-3 stroke-[3]" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                  )}
                </span>
              </Link>

            {/* Mobile Menu Trigger */}
            <button
              className="lg:hidden p-2.5 rounded-xl border border-white/15 text-white bg-white/10 hover:bg-white/20 transition cursor-pointer shadow-xs backdrop-blur-md"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer Menu with Direct Links */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="lg:hidden mx-4 mt-3 rounded-3xl p-6 flex flex-col gap-4 max-h-[85vh] overflow-y-auto border border-white/15 bg-[#0a0e24]/95 backdrop-blur-2xl shadow-2xl z-[100] text-white"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                  <img
                    src={import.meta.env.BASE_URL + 'dasa-wordmark.png'}
                    alt="DASA"
                    className="h-7 w-auto object-contain"
                  />
                  <div className="h-6 w-[1px] bg-gradient-to-b from-transparent via-white/25 to-transparent" />
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1 text-[7px] font-mono tracking-[0.18em] text-slate-200 uppercase font-semibold">
                      <span>TECH</span>
                      <span className="text-[#0066FF] font-bold">•</span>
                      <span>INNOV</span>
                      <span className="text-[#00C5B5] font-bold">•</span>
                      <span>FUTURE</span>
                    </div>
                    <span className="text-[6px] font-mono tracking-[0.2em] text-indigo-300/80 uppercase">
                      THE SOLUTION
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                {navLinks.map((item) => {
                  const active = isActive(item.to)

                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`py-3 px-4 rounded-2xl text-base font-display transition-all duration-200 flex items-center justify-between ${
                        active
                          ? 'bg-gradient-to-r from-blue-600/30 to-violet-600/30 text-white font-bold border border-indigo-400/40 shadow-xs'
                          : 'text-slate-300 hover:text-white hover:bg-white/5 font-medium'
                      }`}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8]" />
                      )}
                    </Link>
                  )
                })}
              </div>

              <div className="pt-3 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className={`w-full inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-2xl font-display text-base font-bold text-white transition-all text-center ${
                    isContact
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 border-2 border-violet-400 shadow-[0_0_24px_rgba(139,92,246,0.45)]'
                      : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-[0_0_20px_rgba(99,102,241,0.4)] border border-white/20'
                  }`}
                >
                  <span>Schedule Consultation</span>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                    isContact ? 'bg-white text-indigo-700' : 'bg-white/20 text-white'
                  }`}>
                    {isContact ? <Check className="w-3 h-3 stroke-[3]" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                  </span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
