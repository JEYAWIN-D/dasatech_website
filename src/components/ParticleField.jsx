import { useEffect, useRef } from 'react'

// Lightweight canvas particle network — avoids the weight of a full WebGL
// scene for the ambient background while keeping the "data stream" feel.
export default function ParticleField({ density = 60 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let w, h

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio
    }

    function init() {
      resize()
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 18000) + density / 2
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3 * window.devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.3 * window.devicePixelRatio,
        r: Math.random() * 1.6 + 0.6
      }))
    }

    function step() {
      ctx.clearRect(0, 0, w, h)
      const linkDist = 130 * window.devicePixelRatio

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(120,170,255,0.55)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < linkDist) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(139,60,255,${0.12 * (1 - dist / linkDist)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(step)
    }

    init()
    window.addEventListener('resize', init)

    if (!prefersReducedMotion) {
      step()
    } else {
      // Draw a single static frame
      step()
      cancelAnimationFrame(animId)
    }

    return () => {
      window.removeEventListener('resize', init)
      cancelAnimationFrame(animId)
    }
  }, [density])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
}
