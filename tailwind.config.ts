import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Brand color palette — community-first, warm, trustworthy
      colors: {
        navy: {
          DEFAULT: '#1B3A6B',
          50: '#E8EEF7',
          100: '#C5D3EC',
          200: '#9CB5DC',
          300: '#6E91C8',
          400: '#4A73B7',
          500: '#1B3A6B',
          600: '#163160',
          700: '#112754',
          800: '#0C1D40',
          900: '#07132B',
        },
        terracotta: {
          DEFAULT: '#D4622A',
          50: '#FBF0EA',
          100: '#F5D6C4',
          200: '#EDB598',
          300: '#E3906A',
          400: '#DB7448',
          500: '#D4622A',
          600: '#BE5523',
          700: '#A3461C',
          800: '#843714',
          900: '#5E270D',
        },
        sage: {
          DEFAULT: '#4A7C59',
          50: '#EBF3EE',
          100: '#C8E0D0',
          200: '#A1CAAE',
          300: '#76B188',
          400: '#5A9B6E',
          500: '#4A7C59',
          600: '#3E6B4C',
          700: '#32583E',
          800: '#25432F',
          900: '#162B1D',
        },
        cream: '#FAF8F4',
        ink: '#1A1A1A',
      },
      // Brand typography
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      // Generous spacing scale
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      // Max content width
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
