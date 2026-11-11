/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#07080C',
          surface1: '#0F1117',
          surface2: '#151821',
          surface3: '#1C202C',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.18)',
        },
        neon: {
          blue: '#00D4FF',
          blueHover: '#33DEFF',
          green: '#22FF9A',
          greenHover: '#52FFB0',
        },
        brand: {
          DEFAULT: '#00D4FF',
          green: '#22FF9A',
          amber: '#F59E0B',
          orange: '#EA580C',
          ruby: '#E11D48',
        },
        muted: '#9AA3B2',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        orbitron: ['"Orbitron"', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 25px rgba(0, 212, 255, 0.35)',
        'neon-green': '0 0 25px rgba(34, 255, 154, 0.35)',
        'card-glow': '0 10px 40px -10px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 212, 255, 0.08)',
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: '-28' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        dash: 'dash 1.5s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
