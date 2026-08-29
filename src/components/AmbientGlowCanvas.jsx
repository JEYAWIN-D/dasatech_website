import React, { useEffect, useRef } from 'react'

export default function AmbientGlowCanvas({
  brushRadius = 120,
  decay = 0.025,
  color = 'rgba(139, 60, 255, ',
  accentColor = 'rgba(0, 229, 255, ',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    const points = []
    let lastPos = null
    let idle = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      if (x < -brushRadius || x > rect.width + brushRadius || y < -brushRadius || y > rect.height + brushRadius) {
        lastPos = null
        return
      }

      if (lastPos) {
        const dx = x - lastPos.x
        const dy = y - lastPos.y
        const dist = Math.hypot(dx, dy)
        const step = Math.max(brushRadius * 0.3, 2)
        const count = Math.min(Math.ceil(dist / step), 40)

        for (let i = 0; i < count; i++) {
          const t = i / count
          points.push({
            x: lastPos.x + dx * t,
            y: lastPos.y + dy * t,
            life: 1,
            size: brushRadius * (0.8 + Math.random() * 0.4),
            hue: Math.random() > 0.85 ? accentColor : color,
          })
        }
      } else {
        points.push({
          x,
          y,
          life: 1,
          size: brushRadius,
          hue: color,
        })
      }

      lastPos = { x, y }
      idle = 0
    }

    window.addEventListener('pointermove', onPointerMove)

    const render = () => {
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height

      // Soft decay
      ctx.fillStyle = 'rgba(5, 7, 15, 0.08)'
      ctx.fillRect(0, 0, w, h)

      // Render points
      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i]
        p.life -= decay
        if (p.life <= 0) {
          points.splice(i, 1)
          continue
        }

        const rad = p.size * (0.5 + p.life * 0.5)
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad)
        grad.addColorStop(0, `${p.hue}${0.18 * p.life})`)
        grad.addColorStop(0.5, `${p.hue}${0.08 * p.life})`)
        grad.addColorStop(1, `${p.hue}0)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, rad, 0, Math.PI * 2)
        ctx.fill()
      }

      idle++
      if (idle > 180 && points.length === 0) {
        ctx.clearRect(0, 0, w, h)
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [brushRadius, decay, color, accentColor])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full z-0 opacity-70 mix-blend-screen"
    />
  )
}
