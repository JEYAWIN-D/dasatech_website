/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        violet: {
          50: '#F5F0FF',
          100: '#EDE4FF',
          200: '#DDD0FF',
          300: '#C2A8FF',
          400: '#A77BFF',
          500: '#8B5CF6',
          600: '#6C2BD9',
          700: '#581CBA',
          800: '#461498',
          900: '#38107A',
          950: '#230752'
        },
        brand: {
          DEFAULT: '#6C2BD9',
          hover: '#8B5CF6',
          light: '#F5F0FF',
          dark: '#17121F'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          violet: '#F5F0FF',
          subtle: '#FAF7FF',
          border: '#E9E2F5'
        },
        text: {
          dark: '#17121F',
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
        'grad-violet': 'linear-gradient(135deg, #6C2BD9 0%, #8B5CF6 100%)',
        'grad-violet-subtle': 'linear-gradient(180deg, #F5F0FF 0%, #FFFFFF 100%)',
        'grad-violet-radial': 'radial-gradient(circle at center, rgba(108, 43, 217, 0.12) 0%, rgba(255,255,255,1) 75%)'
      },
      boxShadow: {
        'violet-sm': '0 2px 8px rgba(108, 43, 217, 0.08)',
        'violet-md': '0 8px 24px -4px rgba(108, 43, 217, 0.15)',
        'violet-glow': '0 10px 30px -5px rgba(108, 43, 217, 0.3)'
      }
    }
  },
  plugins: []
}
