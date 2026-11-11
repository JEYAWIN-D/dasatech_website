import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Link, usePath } from './Router.jsx'
import dasaWordmark from '../assets/dasa-wordmark.png'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const { path } = usePath()

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28 })

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
    { label: 'Products', to: '/products' },
    { label: 'Contact', to: '/contact' },
  ]

  const isActive = (to) => {
    if (to === '/') return path === '/'
    return path.startsWith(to)
  }

  const isContact = isActive('/contact')

  return (
    <>
      {/* Top Precision Reading Progress Bar with Neon Blue & Tech Green Gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] origin-left z-[95] bg-gradient-to-r from-[#00D4FF] via-[#0099FF] to-[#22FF9A] shadow-[0_0_10px_rgba(0,212,255,0.7)]"
        style={{ scaleX: progress }}
      />

      {/* Main Glass Sticky Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[80] backdrop-blur-xl transition-all duration-300 select-none ${
          scrolled
            ? 'py-3 bg-[#07080C]/90 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
            : 'py-4 sm:py-5 bg-[#07080C]/60 border-b border-white/5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo - High Resolution Wordmark */}
          <Link
            to="/"
            className="group relative flex items-center shrink-0 select-none py-1"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00D4FF]/15 to-[#22FF9A]/10 blur-xl rounded-full -z-10 opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="flex items-center gap-3">
              <img
                src={dasaWordmark}
                alt="DASA TECH"
                className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,212,255,0.25)] group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div
            className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-[#0F1117]/80 border border-white/10 rounded-full backdrop-blur-2xl shadow-inner"
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
                  className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center justify-center ${
                    active
                      ? 'text-white font-semibold'
                      : 'text-[#9AA3B2] hover:text-white'
                  }`}
                >
                  {/* Sliding Active Pill */}
                  {active && (
                    <motion.div
                      layoutId="activeNavTab"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 bg-white/10 border border-white/15 rounded-full shadow-inner -z-10"
                    />
                  )}

                  {/* Hover capsule */}
                  {!active && isHovered && (
                    <motion.div
                      layoutId="hoverNavTab"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      className="absolute inset-0 bg-white/5 rounded-full -z-10"
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Right Action Button: Schedule Consultation */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 group ${
                isContact
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#22FF9A] text-black shadow-[0_0_20px_rgba(0,212,255,0.4)]'
                  : 'bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-black hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] hover:-translate-y-0.5'
              }`}
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              className="md:hidden p-2.5 rounded-xl border border-white/10 text-white bg-[#0F1117] hover:bg-[#151821] transition cursor-pointer"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Full-Screen / Dropdown Animated Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden border-b border-white/10 bg-[#07080C]/98 backdrop-blur-2xl overflow-hidden px-4 py-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((item) => {
                  const active = isActive(item.to)
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                        active
                          ? 'bg-white/10 text-white font-semibold border border-white/15'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />
                      )}
                    </Link>
                  )
                })}

                <div className="pt-4 mt-2 border-t border-white/10">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-black font-semibold text-sm shadow-lg shadow-[#00D4FF]/20"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
