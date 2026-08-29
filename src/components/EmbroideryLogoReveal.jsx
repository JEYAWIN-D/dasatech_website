import React, { useEffect, useRef } from 'react'

/**
 * Fullscreen Seamless Embroidery Logo Reveal
 * - Zero boxes or borders: Fullscreen continuous woven cotton shirt fabric.
 * - Significantly enlarged, centered DASA TECH emblem and typography.
 * - Ultra-smooth 60fps satin-stitch timeline.
 * - Post-stitching luminous light-sweep shimmer effect across all threads before exit.
 */
export default function EmbroideryLogoReveal({ onComplete, isExiting }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    let animId
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    // Pre-generate procedural woven cotton shirt fabric texture
    const fabricCanvas = document.createElement('canvas')
    fabricCanvas.width = 16
    fabricCanvas.height = 16
    const fCtx = fabricCanvas.getContext('2d')
    if (fCtx) {
      fCtx.fillStyle = '#05070F'
      fCtx.fillRect(0, 0, 16, 16)

      // Weft thread
      fCtx.fillStyle = '#0B0E1B'
      fCtx.fillRect(0, 0, 16, 7)
      fCtx.fillStyle = '#111628'
      fCtx.fillRect(0, 2, 16, 3)

      // Warp thread
      fCtx.fillStyle = '#080A15'
      fCtx.fillRect(0, 8, 16, 8)
      fCtx.fillStyle = '#141A30'
      fCtx.fillRect(0, 10, 16, 3)

      // Micro cotton fibers
      fCtx.fillStyle = '#1C243B'
      fCtx.fillRect(3, 3, 2, 1)
      fCtx.fillRect(11, 11, 2, 1)
    }
    const fabricPattern = ctx.createPattern(fabricCanvas, 'repeat')

    // Generate enlarged, high-density satin stitches for the DASA TECH Logo
    const stitches = []

    // Helper: generate dense satin stitch block
    function addSatinBlock(x1, y1, x2, y2, width, angleDeg, colorMain, colorLight, colorDark, step = 1.3) {
      const rad = (angleDeg * Math.PI) / 180
      const dx = Math.cos(rad) * (width / 2)
      const dy = Math.sin(rad) * (width / 2)

      const dist = Math.hypot(x2 - x1, y2 - y1)
      const steps = Math.max(Math.floor(dist / step), 1)

      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const cx = x1 + (x2 - x1) * t
        const cy = y1 + (y2 - y1) * t

        stitches.push({
          x1: cx - dx,
          y1: cy - dy,
          x2: cx + dx,
          y2: cy + dy,
          cx,
          cy,
          colorMain,
          colorLight,
          colorDark,
          thickness: 2.6
        })
      }
    }

    // Helper: generate circular overlock rim stitches
    function addOverlockBorder(cx, cy, rx, ry, count, colorMain, colorLight, colorDark) {
      for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 2
        const cos = Math.cos(theta)
        const sin = Math.sin(theta)

        stitches.push({
          x1: cx + cos * rx * 0.94,
          y1: cy + sin * ry * 0.94,
          x2: cx + cos * rx * 1.06 + (Math.random() - 0.5) * 1.5,
          y2: cy + sin * ry * 1.06 + (Math.random() - 0.5) * 1.5,
          cx: cx + cos * rx,
          cy: cy + sin * ry,
          colorMain,
          colorLight,
          colorDark,
          thickness: 2.8
        })
      }
    }

    // Reference dimensions centered around origin (0, 0), scaled by 1.45x
    const S = 1.45

    // 1. Emblem Monogram (Left side)
    const emblemCx = -340 * S
    const emblemCy = 0

    // Double Overlock Stitched Outer Rim
    addOverlockBorder(emblemCx, emblemCy, 105 * S, 105 * S, 320, '#8B3CFF', '#C084FC', '#4C1D95')
    addOverlockBorder(emblemCx, emblemCy, 98 * S, 98 * S, 300, '#00E5FF', '#67E8F9', '#0891B2')

    // Emblem Monogram "D"
    addSatinBlock(emblemCx - 50 * S, emblemCy - 70 * S, emblemCx - 50 * S, emblemCy + 70 * S, 30 * S, 0, '#9333EA', '#D8B4FE', '#581C87', 1.2)
    addSatinBlock(emblemCx - 50 * S, emblemCy - 60 * S, emblemCx + 5 * S, emblemCy - 60 * S, 26 * S, 90, '#A855F7', '#E9D5FF', '#6B21A8', 1.2)
    addSatinBlock(emblemCx - 50 * S, emblemCy + 60 * S, emblemCx + 5 * S, emblemCy + 60 * S, 26 * S, 90, '#A855F7', '#E9D5FF', '#6B21A8', 1.2)

    // Curved spine of D
    const dArcSteps = 55
    for (let i = 0; i <= dArcSteps; i++) {
      const a = -Math.PI / 2 + (i / dArcSteps) * Math.PI
      const cx = emblemCx + Math.cos(a) * 50 * S
      const cy = emblemCy + Math.sin(a) * 60 * S
      const angle = (a * 180) / Math.PI + 90
      addSatinBlock(cx, cy, cx + 0.5, cy + 0.5, 26 * S, angle, '#8B3CFF', '#C084FC', '#4C1D95', 1.3)
    }

    // Emblem Monogram "T"
    addSatinBlock(emblemCx - 18 * S, emblemCy - 48 * S, emblemCx + 60 * S, emblemCy - 48 * S, 24 * S, 90, '#00E5FF', '#A5F3FC', '#0E7490', 1.2)
    addSatinBlock(emblemCx + 22 * S, emblemCy - 48 * S, emblemCx + 22 * S, emblemCy + 60 * S, 24 * S, 0, '#00E5FF', '#A5F3FC', '#0E7490', 1.2)

    // 2. Main Typography: "DASA" (Large White/Silver Satin Stitches)
    const textStartX = -160 * S
    const textY = 0

    // Letter 'D'
    addSatinBlock(textStartX, textY - 45 * S, textStartX, textY + 45 * S, 18 * S, 0, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)
    addSatinBlock(textStartX, textY - 38 * S, textStartX + 32 * S, textY - 38 * S, 16 * S, 90, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)
    addSatinBlock(textStartX, textY + 38 * S, textStartX + 32 * S, textY + 38 * S, 16 * S, 90, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)
    addSatinBlock(textStartX + 32 * S, textY - 34 * S, textStartX + 48 * S, textY, 16 * S, 45, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)
    addSatinBlock(textStartX + 48 * S, textY, textStartX + 32 * S, textY + 34 * S, 16 * S, -45, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)

    // Letter 'A' (1)
    const a1X = textStartX + 75 * S
    addSatinBlock(a1X, textY + 45 * S, a1X + 25 * S, textY - 45 * S, 17 * S, 65, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)
    addSatinBlock(a1X + 25 * S, textY - 45 * S, a1X + 50 * S, textY + 45 * S, 17 * S, -65, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)
    addSatinBlock(a1X + 12 * S, textY + 12 * S, a1X + 38 * S, textY + 12 * S, 14 * S, 90, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)

    // Letter 'S'
    const sX = textStartX + 150 * S
    addSatinBlock(sX + 40 * S, textY - 36 * S, sX + 6 * S, textY - 42 * S, 16 * S, 90, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)
    addSatinBlock(sX + 6 * S, textY - 42 * S, sX, textY - 14 * S, 16 * S, 15, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)
    addSatinBlock(sX, textY - 14 * S, sX + 40 * S, textY + 14 * S, 16 * S, 45, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)
    addSatinBlock(sX + 40 * S, textY + 14 * S, sX + 34 * S, textY + 42 * S, 16 * S, -15, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)
    addSatinBlock(sX + 34 * S, textY + 42 * S, sX, textY + 36 * S, 16 * S, 90, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)

    // Letter 'A' (2)
    const a2X = textStartX + 218 * S
    addSatinBlock(a2X, textY + 45 * S, a2X + 25 * S, textY - 45 * S, 17 * S, 65, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)
    addSatinBlock(a2X + 25 * S, textY - 45 * S, a2X + 50 * S, textY + 45 * S, 17 * S, -65, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)
    addSatinBlock(a2X + 12 * S, textY + 12 * S, a2X + 38 * S, textY + 12 * S, 14 * S, 90, '#F1F5F9', '#FFFFFF', '#94A3B8', 1.2)

    // 3. Main Typography: "TECH" (Vibrant Cyan Satin Stitches)
    const techStartX = textStartX + 295 * S

    // Letter 'T'
    addSatinBlock(techStartX, textY - 42 * S, techStartX + 42 * S, textY - 42 * S, 17 * S, 90, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)
    addSatinBlock(techStartX + 21 * S, textY - 42 * S, techStartX + 21 * S, textY + 45 * S, 17 * S, 0, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)

    // Letter 'E'
    const eX = techStartX + 56 * S
    addSatinBlock(eX, textY - 45 * S, eX, textY + 45 * S, 17 * S, 0, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)
    addSatinBlock(eX, textY - 38 * S, eX + 34 * S, textY - 38 * S, 15 * S, 90, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)
    addSatinBlock(eX, textY, eX + 26 * S, textY, 13 * S, 90, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)
    addSatinBlock(eX, textY + 38 * S, eX + 34 * S, textY + 38 * S, 15 * S, 90, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)

    // Letter 'C'
    const cX = techStartX + 106 * S
    addSatinBlock(cX + 36 * S, textY - 38 * S, cX + 10 * S, textY - 42 * S, 16 * S, 90, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)
    addSatinBlock(cX + 10 * S, textY - 42 * S, cX, textY, 17 * S, 0, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)
    addSatinBlock(cX, textY, cX + 10 * S, textY + 42 * S, 17 * S, 0, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)
    addSatinBlock(cX + 10 * S, textY + 42 * S, cX + 36 * S, textY + 38 * S, 16 * S, 90, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)

    // Letter 'H'
    const hX = techStartX + 162 * S
    addSatinBlock(hX, textY - 45 * S, hX, textY + 45 * S, 17 * S, 0, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)
    addSatinBlock(hX + 36 * S, textY - 45 * S, hX + 36 * S, textY + 45 * S, 17 * S, 0, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)
    addSatinBlock(hX, textY, hX + 36 * S, textY, 15 * S, 90, '#00E5FF', '#A5F3FC', '#0891B2', 1.2)

    const totalStitches = stitches.length

    // Animation Timing Constants
    const WEAVE_DURATION = 4200 // 4.2 seconds steady timelapse pace
    const SHIMMER_DURATION = 1200 // 1.2 seconds luminous gleam sweep
    const startTime = performance.now()
    let hasTriggeredComplete = false

    // Main 60 FPS Render Loop
    const render = (now) => {
      const elapsed = now - startTime
      const weaveT = Math.min(elapsed / WEAVE_DURATION, 1)

      // Smooth cubic easing for fluid stitching without stutter
      const easeWeave = weaveT < 0.5 ? 4 * weaveT * weaveT * weaveT : 1 - Math.pow(-2 * weaveT + 2, 3) / 2
      const currentStitchIdx = Math.min(Math.floor(easeWeave * totalStitches), totalStitches)

      // Center offset
      const centerX = width / 2
      const centerY = height / 2

      // Responsive scale factor for smaller mobile displays
      const screenScale = Math.min(width / 1100, 1)

      // 1. Draw Fullscreen Woven Cotton Fabric
      if (fabricPattern) {
        ctx.fillStyle = fabricPattern
        ctx.fillRect(0, 0, width, height)
      } else {
        ctx.fillStyle = '#05070F'
        ctx.fillRect(0, 0, width, height)
      }

      // 2. Soft Directional Side-Lighting Gradient
      const sideLight = ctx.createLinearGradient(0, 0, width, height)
      sideLight.addColorStop(0, 'rgba(255, 255, 255, 0.08)')
      sideLight.addColorStop(0.35, 'rgba(139, 60, 255, 0.05)')
      sideLight.addColorStop(0.7, 'rgba(0, 0, 0, 0.35)')
      sideLight.addColorStop(1, 'rgba(0, 0, 0, 0.75)')
      ctx.fillStyle = sideLight
      ctx.fillRect(0, 0, width, height)

      // Ambient Central Glow
      const centerGlow = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, Math.max(width, height) * 0.6)
      centerGlow.addColorStop(0, 'rgba(139, 60, 255, 0.12)')
      centerGlow.addColorStop(0.5, 'rgba(0, 229, 255, 0.04)')
      centerGlow.addColorStop(1, 'rgba(5, 7, 15, 0.85)')
      ctx.fillStyle = centerGlow
      ctx.fillRect(0, 0, width, height)

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.scale(screenScale, screenScale)

      // 3. Render Drop Shadows for 3D Embroidered Depth
      ctx.save()
      ctx.shadowColor = 'rgba(0, 0, 0, 0.95)'
      ctx.shadowBlur = 8
      ctx.shadowOffsetX = 3.5
      ctx.shadowOffsetY = 4.5

      for (let i = 0; i < currentStitchIdx; i++) {
        const s = stitches[i]
        ctx.beginPath()
        ctx.moveTo(s.x1, s.y1)
        ctx.lineTo(s.x2, s.y2)
        ctx.strokeStyle = 'rgba(0,0,0,0.6)'
        ctx.lineWidth = s.thickness + 0.8
        ctx.lineCap = 'round'
        ctx.stroke()
      }
      ctx.restore()

      // 4. Render Satin Stitches with Silk Luster
      for (let i = 0; i < currentStitchIdx; i++) {
        const s = stitches[i]

        // Main Silk Thread Body
        ctx.beginPath()
        ctx.moveTo(s.x1, s.y1)
        ctx.lineTo(s.x2, s.y2)
        ctx.strokeStyle = s.colorMain
        ctx.lineWidth = s.thickness
        ctx.lineCap = 'round'
        ctx.stroke()

        // Specular thread highlight along the crest
        ctx.beginPath()
        const midX1 = s.x1 * 0.7 + s.x2 * 0.3
        const midY1 = s.y1 * 0.7 + s.y2 * 0.3
        const midX2 = s.x1 * 0.3 + s.x2 * 0.7
        const midY2 = s.y1 * 0.3 + s.y2 * 0.7
        ctx.moveTo(midX1, midY1)
        ctx.lineTo(midX2, midY2)
        ctx.strokeStyle = s.colorLight
        ctx.lineWidth = s.thickness * 0.45
        ctx.lineCap = 'round'
        ctx.stroke()
      }

      // 5. Dynamic Needle Weave Point & Active Floating Silk Thread
      if (currentStitchIdx > 0 && currentStitchIdx < totalStitches) {
        const activeStitch = stitches[currentStitchIdx]
        const headX = activeStitch.x2
        const headY = activeStitch.y2

        // Floating taut thread rising up from fabric surface
        ctx.save()
        const threadGrad = ctx.createLinearGradient(headX, headY - 110, headX, headY)
        threadGrad.addColorStop(0, 'rgba(192, 132, 252, 0.05)')
        threadGrad.addColorStop(0.7, activeStitch.colorLight)
        threadGrad.addColorStop(1, '#FFFFFF')

        ctx.beginPath()
        ctx.moveTo(headX + 50, headY - 140)
        ctx.quadraticCurveTo(headX + 20, headY - 60, headX, headY)
        ctx.strokeStyle = threadGrad
        ctx.lineWidth = 2.4
        ctx.lineCap = 'round'
        ctx.stroke()

        // Needle Pierce Point & Luminous Thread Flare
        const flareGrad = ctx.createRadialGradient(headX, headY, 0, headX, headY, 22)
        flareGrad.addColorStop(0, 'rgba(255, 255, 255, 1)')
        flareGrad.addColorStop(0.35, activeStitch.colorLight)
        flareGrad.addColorStop(0.7, activeStitch.colorMain)
        flareGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = flareGrad
        ctx.beginPath()
        ctx.arc(headX, headY, 20, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // 6. Post-Completion Animation Effect: Luminous Satin Shimmer Sweep
      if (weaveT >= 1) {
        const shimmerElapsed = elapsed - WEAVE_DURATION
        const shimmerT = Math.min(shimmerElapsed / SHIMMER_DURATION, 1)

        if (shimmerT > 0 && shimmerT <= 1) {
          const sweepX = -600 + shimmerT * 1400 // Sweeps across the entire logo
          const beamWidth = 220

          ctx.save()
          ctx.globalCompositeOperation = 'source-over'

          for (let i = 0; i < totalStitches; i++) {
            const s = stitches[i]
            const dist = Math.abs(s.cx - sweepX)

            if (dist < beamWidth) {
              const intensity = Math.cos((dist / beamWidth) * (Math.PI / 2))
              ctx.beginPath()
              ctx.moveTo(s.x1, s.y1)
              ctx.lineTo(s.x2, s.y2)
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.85 * intensity})`
              ctx.lineWidth = s.thickness * (1 + 0.4 * intensity)
              ctx.lineCap = 'round'
              ctx.stroke()
            }
          }

          // Shimmer Light Flare Beam
          const sweepGlow = ctx.createRadialGradient(sweepX, 0, 10, sweepX, 0, 240)
          sweepGlow.addColorStop(0, 'rgba(255, 255, 255, 0.4)')
          sweepGlow.addColorStop(0.4, 'rgba(0, 229, 255, 0.25)')
          sweepGlow.addColorStop(0.8, 'rgba(139, 60, 255, 0.1)')
          sweepGlow.addColorStop(1, 'rgba(0, 0, 0, 0)')

          ctx.fillStyle = sweepGlow
          ctx.fillRect(-700, -200, 1500, 400)
          ctx.restore()
        }

        // Trigger finish callback once shimmer completes
        if (shimmerT >= 1 && !hasTriggeredComplete) {
          hasTriggeredComplete = true
          setTimeout(() => {
            if (onComplete) onComplete()
          }, 300)
        }
      }

      ctx.restore()

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [onComplete])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-none select-none"
    />
  )
}
