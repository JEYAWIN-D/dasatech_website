import React, { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'

const LenisContext = createContext(null)

export function useLenis() {
  return useContext(LenisContext)
}

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.2,
      infinite: false,
    })

    lenisRef.current = lenis
    window.__lenis = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
      window.__lenis = null
    }
  }, [])

  const scrollTo = (target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: options.offset || 0,
        duration: options.duration || 1.2,
        easing: options.easing,
      })
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const stopScroll = () => {
    if (lenisRef.current) lenisRef.current.stop()
    document.documentElement.style.overflow = 'hidden'
  }

  const startScroll = () => {
    if (lenisRef.current) lenisRef.current.start()
    document.documentElement.style.overflow = ''
  }

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scrollTo, stopScroll, startScroll }}>
      {children}
    </LenisContext.Provider>
  )
}

export default SmoothScrollProvider
