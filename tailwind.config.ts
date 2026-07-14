import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Brand color palette — evergreen + clay (pairteam-inspired warmth)
      // NOTE: token names kept ("navy" = primary dark, "terracotta" = accent)
      // so no component changes are needed to reskin the site.
      colors: {
        navy: {
          DEFAULT: '#215E61',
          50: '#E8F1F1',
          100: '#C4DBDC',
          200: '#9AC2C4',
          300: '#6FA8AB',
          400: '#468D91',
          500: '#215E61',
          600: '#1C5154',
          700: '#174346',
          800: '#123638',
          900: '#0B2324',
        },
        terracotta: {
          DEFAULT: '#D7630B',
          50: '#FCEFE4',
          100: '#F6D3B8',
          200: '#EFB58A',
          300: '#E6945B',
          400: '#DF7B33',
          500: '#D7630B',
          600: '#BC5609',
          700: '#9E4807',
          800: '#7C3805',
          900: '#572703',
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
        cream: '#FAF7F1',
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
