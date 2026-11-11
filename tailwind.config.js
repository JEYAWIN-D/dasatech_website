/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#D97706',
          hover: '#EA580C',
          light: '#FFFBEB',
          dark: '#141017',
          amber: '#F59E0B',
          copper: '#C85014',
          crimson: '#9F1239',
          gold: '#D97706',
          rose: '#BE123C'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          warm: '#FAF7F2',
          ivory: '#FDFBF7',
          subtle: '#FAF6F0',
          border: '#EFE6D8'
        },
        text: {
          dark: '#141017',
          secondary: '#6F6878'
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        orbitron: ['"Orbitron"', 'sans-serif']
      },
      backgroundImage: {
        'grad-luxury': 'linear-gradient(135deg, #F59E0B 0%, #EA580C 50%, #BE123C 100%)',
        'grad-gold': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        'grad-warm-subtle': 'linear-gradient(180deg, #FDFBF7 0%, #FFFFFF 100%)',
        'grad-luxury-radial': 'radial-gradient(circle at center, rgba(245, 158, 11, 0.12) 0%, rgba(255,255,255,1) 75%)',
        'grad-violet': 'linear-gradient(135deg, #F59E0B 0%, #EA580C 50%, #BE123C 100%)',
        'grad-violet-subtle': 'linear-gradient(180deg, #FDFBF7 0%, #FFFFFF 100%)',
        'grad-violet-radial': 'radial-gradient(circle at center, rgba(245, 158, 11, 0.12) 0%, rgba(255,255,255,1) 75%)'
      },
      boxShadow: {
        'luxury-sm': '0 2px 8px rgba(217, 119, 6, 0.08)',
        'luxury-md': '0 8px 24px -4px rgba(217, 119, 6, 0.18)',
        'luxury-glow': '0 10px 30px -5px rgba(234, 88, 12, 0.35)',
        'rose-glow': '0 10px 30px -5px rgba(225, 29, 72, 0.3)',
        'violet-sm': '0 2px 8px rgba(217, 119, 6, 0.08)',
        'violet-md': '0 8px 24px -4px rgba(217, 119, 6, 0.18)',
        'violet-glow': '0 10px 30px -5px rgba(234, 88, 12, 0.35)'
      }
    }
  },
  plugins: []
}
