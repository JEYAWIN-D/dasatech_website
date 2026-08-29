import React, { useEffect, useRef } from 'react'

export default function WebGLFluidCanvas({ className = '', opacity = 0.85 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let cleanup = null

    try {
      cleanup = initFluidEngine(canvas)
    } catch (err) {
      console.warn('WebGL Fluid initialization skipped or fallback:', err)
    }

    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity }}
      />
      {/* Soft Radial Scrim Overlay for Perfect Typography Contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(115% 95% at 50% 46%, rgba(5,7,15,0.72) 0%, rgba(5,7,15,0.55) 35%, rgba(5,7,15,0.3) 70%, rgba(5,7,15,0.15) 100%)',
        }}
      />
    </div>
  )
}

function initFluidEngine(canvas) {
  canvas.width = canvas.clientWidth || window.innerWidth
  canvas.height = canvas.clientHeight || window.innerHeight

  let config = {
    SIM_RESOLUTION: 160,
    DYE_RESOLUTION: 512,
    DENSITY_DISSIPATION: 0.965,
    VELOCITY_DISSIPATION: 0.968,
    PRESSURE_DISSIPATION: 0.8,
    PRESSURE_ITERATIONS: 18,
    CURL: 38,
    SPLAT_RADIUS: 0.22,
    SHADING: true,
    COLORFUL: true,
    PAUSED: false,
    BACK_COLOR: { r: 5, g: 7, b: 15 }, // DASA TECH midnight base
    TRANSPARENT: false,
    BLOOM: false,
    BLOOM_ITERATIONS: 8,
    BLOOM_RESOLUTION: 256,
    BLOOM_INTENSITY: 0.8,
    BLOOM_THRESHOLD: 0.8,
    BLOOM_SOFT_KNEE: 0.7,
  }

  function pointerPrototype() {
    this.id = -1
    this.x = 0
    this.y = 0
    this.dx = 0
    this.dy = 0
    this.down = false
    this.moved = false
    this.color = [30, 0, 300]
  }

  let pointers = []
  let splatStack = []
  pointers.push(new pointerPrototype())

  const ctxObj = getWebGLContext(canvas)
  if (!ctxObj || !ctxObj.gl) return () => {}
  const { gl, ext } = ctxObj

  function getWebGLContext(canv) {
    const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false }
    let gl = canv.getContext('webgl2', params)
    const isWebGL2 = !!gl
    if (!isWebGL2) gl = canv.getContext('webgl', params) || canv.getContext('experimental-webgl', params)
    if (!gl) return null

    let halfFloat
    let supportLinearFiltering
    if (isWebGL2) {
      gl.getExtension('EXT_color_buffer_float')
      supportLinearFiltering = gl.getExtension('OES_texture_float_linear')
    } else {
      halfFloat = gl.getExtension('OES_texture_half_float')
      supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear')
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat ? halfFloat.HALF_FLOAT_OES : gl.UNSIGNED_BYTE

    let formatRGBA = getSupportedFormat(gl, isWebGL2 ? gl.RGBA16F : gl.RGBA, gl.RGBA, halfFloatTexType)
    let formatRG = getSupportedFormat(gl, isWebGL2 ? gl.RG16F : gl.RGBA, isWebGL2 ? gl.RG : gl.RGBA, halfFloatTexType)
    let formatR = getSupportedFormat(gl, isWebGL2 ? gl.R16F : gl.RGBA, isWebGL2 ? gl.RED : gl.RGBA, halfFloatTexType)

    return {
      gl,
      ext: {
        formatRGBA,
        formatRG,
        formatR,
        halfFloatTexType,
        supportLinearFiltering,
      },
    }
  }

  function getSupportedFormat(gl, internalFormat, format, type) {
    if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
      switch (internalFormat) {
        case gl.R16F:
          return getSupportedFormat(gl, gl.RG16F, gl.RG, type)
        case gl.RG16F:
          return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type)
        default:
          return null
      }
    }
    return { internalFormat, format }
  }

  function supportRenderTextureFormat(gl, internalFormat, format, type) {
    let texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null)

    let fbo = gl.createFramebuffer()
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)

    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
    return status === gl.FRAMEBUFFER_COMPLETE
  }

  class GLProgram {
    constructor(vertexShader, fragmentShader) {
      this.uniforms = {}
      this.program = gl.createProgram()
      gl.attachShader(this.program, vertexShader)
      gl.attachShader(this.program, fragmentShader)
      gl.linkProgram(this.program)

      if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(this.program))
      }

      const uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS)
      for (let i = 0; i < uniformCount; i++) {
        const uniformName = gl.getActiveUniform(this.program, i).name
        this.uniforms[uniformName] = gl.getUniformLocation(this.program, uniformName)
      }
    }
    bind() {
      gl.useProgram(this.program)
    }
  }

  function compileShader(type, source) {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(shader))
    }
    return shader
  }

  const baseVertexShader = compileShader(
    gl.VERTEX_SHADER,
    `
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `
  )

  const clearShader = compileShader(
    gl.FRAGMENT_SHADER,
    `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
  `
  )

  const colorShader = compileShader(
    gl.FRAGMENT_SHADER,
    `
    precision mediump float;
    uniform vec4 color;
    void main () {
        gl_FragColor = color;
    }
  `
  )

  const displayShader = compileShader(
    gl.FRAGMENT_SHADER,
    `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        vec3 C = texture2D(uTexture, vUv).rgb;
        float a = max(C.r, max(C.g, C.b));
        gl_FragColor = vec4(C, a);
    }
  `
  )

  const displayShadingShader = compileShader(
    gl.FRAGMENT_SHADER,
    `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform vec2 texelSize;
    void main () {
        vec3 L = texture2D(uTexture, vL).rgb;
        vec3 R = texture2D(uTexture, vR).rgb;
        vec3 T = texture2D(uTexture, vT).rgb;
        vec3 B = texture2D(uTexture, vB).rgb;
        vec3 C = texture2D(uTexture, vUv).rgb;
        float dx = length(R) - length(L);
        float dy = length(T) - length(B);
        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);
        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        C.rgb *= diffuse;
        float a = max(C.r, max(C.g, C.b));
        gl_FragColor = vec4(C, a);
    }
  `
  )

  const splatShader = compileShader(
    gl.FRAGMENT_SHADER,
    `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;
    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
  `
  )

  const advectionShader = compileShader(
    gl.FRAGMENT_SHADER,
    `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform float dt;
    uniform float dissipation;
    void main () {
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        gl_FragColor = dissipation * texture2D(uSource, coord);
        gl_FragColor.a = 1.0;
    }
  `
  )

  const divergenceShader = compileShader(
    gl.FRAGMENT_SHADER,
    `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
  `
  )

  const curlShader = compileShader(
    gl.FRAGMENT_SHADER,
    `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
  `
  )

  const vorticityShader = compileShader(
    gl.FRAGMENT_SHADER,
    `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;
    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
    }
  `
  )

  const pressureShader = compileShader(
    gl.FRAGMENT_SHADER,
    `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
  `
  )

  const gradientSubtractShader = compileShader(
    gl.FRAGMENT_SHADER,
    `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
  `
  )

  const blit = (() => {
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW)
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW)
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(0)

    return (destination) => {
      gl.bindFramebuffer(gl.FRAMEBUFFER, destination)
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
    }
  })()

  let simWidth, simHeight, dyeWidth, dyeHeight
  let density, velocity, divergence, curl, pressure

  const clearProgram = new GLProgram(baseVertexShader, clearShader)
  const colorProgram = new GLProgram(baseVertexShader, colorShader)
  const displayProgram = new GLProgram(baseVertexShader, displayShader)
  const displayShadingProgram = new GLProgram(baseVertexShader, displayShadingShader)
  const splatProgram = new GLProgram(baseVertexShader, splatShader)
  const advectionProgram = new GLProgram(baseVertexShader, advectionShader)
  const divergenceProgram = new GLProgram(baseVertexShader, divergenceShader)
  const curlProgram = new GLProgram(baseVertexShader, curlShader)
  const vorticityProgram = new GLProgram(baseVertexShader, vorticityShader)
  const pressureProgram = new GLProgram(baseVertexShader, pressureShader)
  const gradienSubtractProgram = new GLProgram(baseVertexShader, gradientSubtractShader)

  function getResolution(resolution) {
    let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight
    if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio
    let min = Math.round(resolution)
    let max = Math.round(resolution * aspectRatio)
    return gl.drawingBufferWidth > gl.drawingBufferHeight ? { width: max, height: min } : { width: min, height: max }
  }

  function createFBO(w, h, internalFormat, format, type, param) {
    gl.activeTexture(gl.TEXTURE0)
    let texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null)

    let fbo = gl.createFramebuffer()
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
    gl.viewport(0, 0, w, h)
    gl.clear(gl.COLOR_BUFFER_BIT)

    return {
      texture,
      fbo,
      width: w,
      height: h,
      attach(id) {
        gl.activeTexture(gl.TEXTURE0 + id)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        return id
      },
    }
  }

  function createDoubleFBO(w, h, internalFormat, format, type, param) {
    let fbo1 = createFBO(w, h, internalFormat, format, type, param)
    let fbo2 = createFBO(w, h, internalFormat, format, type, param)
    return {
      get read() {
        return fbo1
      },
      set read(value) {
        fbo1 = value
      },
      get write() {
        return fbo2
      },
      set write(value) {
        fbo2 = value
      },
      swap() {
        let temp = fbo1
        fbo1 = fbo2
        fbo2 = temp
      },
    }
  }

  function initFramebuffers() {
    let simRes = getResolution(config.SIM_RESOLUTION)
    let dyeRes = getResolution(config.DYE_RESOLUTION)
    simWidth = simRes.width
    simHeight = simRes.height
    dyeWidth = dyeRes.width
    dyeHeight = dyeRes.height

    const texType = ext.halfFloatTexType
    const rgba = ext.formatRGBA || { internalFormat: gl.RGBA, format: gl.RGBA }
    const rg = ext.formatRG || rgba
    const r = ext.formatR || rgba
    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST

    density = createDoubleFBO(dyeWidth, dyeHeight, rgba.internalFormat, rgba.format, texType, filtering)
    velocity = createDoubleFBO(simWidth, simHeight, rg.internalFormat, rg.format, texType, filtering)
    divergence = createFBO(simWidth, simHeight, r.internalFormat, r.format, texType, gl.NEAREST)
    curl = createFBO(simWidth, simHeight, r.internalFormat, r.format, texType, gl.NEAREST)
    pressure = createDoubleFBO(simWidth, simHeight, r.internalFormat, r.format, texType, gl.NEAREST)
  }

  function HSVtoRGB(h, s, v) {
    let r, g, b, i, f, p, q, t
    i = Math.floor(h * 6)
    f = h * 6 - i
    p = v * (1 - s)
    q = v * (1 - f * s)
    t = v * (1 - (1 - f) * s)
    switch (i % 6) {
      case 0:
        r = v; g = t; b = p; break
      case 1:
        r = q; g = v; b = p; break
      case 2:
        r = p; g = v; b = t; break
      case 3:
        r = p; g = q; b = v; break
      case 4:
        r = t; g = p; b = v; break
      case 5:
        r = v; g = p; b = q; break
      default:
        r = v; g = p; b = q; break
    }
    return { r, g, b }
  }

  function generateColor() {
    // Tuned for DASA TECH: electric cyan (0.50) -> cobalt (0.62) -> violet (0.76) -> magenta (0.86)
    let c = HSVtoRGB(0.52 + Math.random() * 0.38, 0.9, 1.0)
    c.r *= 0.18
    c.g *= 0.18
    c.b *= 0.18
    return c
  }

  function splat(x, y, dx, dy, color) {
    gl.viewport(0, 0, simWidth, simHeight)
    splatProgram.bind()
    gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0))
    gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height)
    gl.uniform2f(splatProgram.uniforms.point, x / canvas.width, 1.0 - y / canvas.height)
    gl.uniform3f(splatProgram.uniforms.color, dx, -dy, 1.0)
    gl.uniform1f(splatProgram.uniforms.radius, config.SPLAT_RADIUS / 100.0)
    blit(velocity.write.fbo)
    velocity.swap()

    gl.viewport(0, 0, dyeWidth, dyeHeight)
    gl.uniform1i(splatProgram.uniforms.uTarget, density.read.attach(0))
    gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b)
    blit(density.write.fbo)
    density.swap()
  }

  function multipleSplats(amount) {
    for (let i = 0; i < amount; i++) {
      const color = generateColor()
      color.r *= 8.0
      color.g *= 8.0
      color.b *= 8.0
      const x = canvas.width * Math.random()
      const y = canvas.height * Math.random()
      const dx = 1000 * (Math.random() - 0.5)
      const dy = 1000 * (Math.random() - 0.5)
      splat(x, y, dx, dy, color)
    }
  }

  initFramebuffers()
  // Strong initial burst on mount
  multipleSplats(28)
  for (let i = 0; i < 6; i++) {
    splatStack.push(8 + parseInt(Math.random() * 8, 10))
  }

  let orbitAngle = 0
  let vPrevX = 0, vPrevY = 0
  let virtualSeeded = false
  let virtualColor = null
  let lastVColorTime = 0
  const engineStart = Date.now()
  const ORBIT_RADIUS = 280
  const ORBIT_SPEED = 0.022
  const ORBIT_START_DELAY = 500

  let rafHandle = 0
  let destroyed = false

  function driveVirtualPointer() {
    if (Date.now() - engineStart < ORBIT_START_DELAY) return
    const cx = canvas.width / 2
    const cy = canvas.height / 2
    const base = Math.min(ORBIT_RADIUS, canvas.width * 0.35, canvas.height * 0.35)
    const r = base * (0.72 + 0.28 * Math.sin(orbitAngle * 0.35))
    orbitAngle += ORBIT_SPEED
    const x = cx + Math.cos(orbitAngle) * r
    const y = cy + Math.sin(orbitAngle) * r

    if (!virtualSeeded) {
      virtualSeeded = true
      vPrevX = x
      vPrevY = y
      return
    }

    if (!virtualColor || Date.now() - lastVColorTime > 140) {
      virtualColor = generateColor()
      virtualColor.r *= 3.0
      virtualColor.g *= 3.0
      virtualColor.b *= 3.0
      lastVColorTime = Date.now()
    }

    const dx = (x - vPrevX) * 8.5
    const dy = (y - vPrevY) * 8.5
    vPrevX = x
    vPrevY = y
    splat(x, y, dx, dy, virtualColor)
  }

  function resizeCanvas() {
    const w = canvas.clientWidth || window.innerWidth
    const h = canvas.clientHeight || window.innerHeight
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w
      canvas.height = h
      initFramebuffers()
    }
  }

  function step(dt) {
    gl.disable(gl.BLEND)
    gl.viewport(0, 0, simWidth, simHeight)

    curlProgram.bind()
    gl.uniform2f(curlProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight)
    gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0))
    blit(curl.fbo)

    vorticityProgram.bind()
    gl.uniform2f(vorticityProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight)
    gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0))
    gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1))
    gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL)
    gl.uniform1f(vorticityProgram.uniforms.dt, dt)
    blit(velocity.write.fbo)
    velocity.swap()

    divergenceProgram.bind()
    gl.uniform2f(divergenceProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight)
    gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0))
    blit(divergence.fbo)

    clearProgram.bind()
    gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0))
    gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE_DISSIPATION)
    blit(pressure.write.fbo)
    pressure.swap()

    pressureProgram.bind()
    gl.uniform2f(pressureProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight)
    gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0))
    for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
      gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1))
      blit(pressure.write.fbo)
      pressure.swap()
    }

    gradienSubtractProgram.bind()
    gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight)
    gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0))
    gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1))
    blit(velocity.write.fbo)
    velocity.swap()

    advectionProgram.bind()
    gl.uniform2f(advectionProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight)
    let velocityId = velocity.read.attach(0)
    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId)
    gl.uniform1i(advectionProgram.uniforms.uSource, velocityId)
    gl.uniform1f(advectionProgram.uniforms.dt, dt)
    gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION)
    blit(velocity.write.fbo)
    velocity.swap()

    gl.viewport(0, 0, dyeWidth, dyeHeight)
    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0))
    gl.uniform1i(advectionProgram.uniforms.uSource, density.read.attach(1))
    gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION)
    blit(density.write.fbo)
    density.swap()
  }

  function render() {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
    colorProgram.bind()
    let bc = config.BACK_COLOR
    gl.uniform4f(colorProgram.uniforms.color, bc.r / 255, bc.g / 255, bc.b / 255, 1)
    blit(null)

    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
    gl.enable(gl.BLEND)

    let program = config.SHADING ? displayShadingProgram : displayProgram
    program.bind()
    gl.uniform2f(program.uniforms.texelSize, 1.0 / gl.drawingBufferWidth, 1.0 / gl.drawingBufferHeight)
    gl.uniform1i(program.uniforms.uTexture, density.read.attach(0))
    blit(null)
  }

  function update() {
    if (destroyed) return
    resizeCanvas()
    driveVirtualPointer()

    if (splatStack.length > 0) {
      multipleSplats(splatStack.pop())
    }

    for (let i = 0; i < pointers.length; i++) {
      const p = pointers[i]
      if (p.moved) {
        splat(p.x, p.y, p.dx, p.dy, p.color)
        p.moved = false
      }
    }

    if (!config.PAUSED) step(0.016)
    render()
    rafHandle = requestAnimationFrame(update)
  }

  update()

  // Pointer & Touch Interaction Listeners
  let pointerInit = false
  const onPointerMove = (e) => {
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const p = pointers[0]
    if (!pointerInit) {
      pointerInit = true
      p.x = x
      p.y = y
      return
    }
    p.dx = (x - p.x) * 5.0
    p.dy = (y - p.y) * 5.0
    p.x = x
    p.y = y
    p.color = generateColor()
    p.color.r *= 2.5
    p.color.g *= 2.5
    p.color.b *= 2.5
    p.moved = true
  }

  let touchInit = false
  const onTouchMove = (e) => {
    if (e.targetTouches.length > 0) {
      const touch = e.targetTouches[0]
      const rect = canvas.getBoundingClientRect()
      const x = touch.clientX - rect.left
      const y = touch.clientY - rect.top
      const p = pointers[0]
      if (!touchInit) {
        touchInit = true
        p.x = x
        p.y = y
        return
      }
      p.dx = (x - p.x) * 6.0
      p.dy = (y - p.y) * 6.0
      p.x = x
      p.y = y
      p.color = generateColor()
      p.color.r *= 3.0
      p.color.g *= 3.0
      p.color.b *= 3.0
      p.moved = true
    }
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('touchmove', onTouchMove, { passive: true })

  return () => {
    destroyed = true
    cancelAnimationFrame(rafHandle)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('touchmove', onTouchMove)
  }
}
