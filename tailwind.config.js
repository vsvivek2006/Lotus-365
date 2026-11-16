/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Iconic Lotus365 Emerald Greens (Matching Mockup Reference)
          emerald: '#059669',
          emeraldLight: '#10B981',
          emeraldDark: '#044E37',
          emeraldDeep: '#022319',
          emeraldSurface: 'rgba(5, 150, 105, 0.15)',
          
          // Iconic Lotus365 Gold / Yellow
          gold: '#F0C419',
          goldBright: '#FFD000',
          goldDark: '#D49014',
          goldMuted: '#F9AD06',
          goldLight: '#FFFAE5',
          
          // Lotus365 Blue
          blue: '#045CB4',
          blueDark: '#023870',
          blueLight: '#38BDF8',
          
          // Surfaces & Neutrals
          dark: '#022319', // Deep luxury emerald background
          deepDark: '#011710',
          surface: 'rgba(6, 61, 44, 0.65)',
          card: 'rgba(4, 46, 33, 0.85)',
          cardHover: 'rgba(6, 61, 44, 0.95)',
          border: 'rgba(16, 185, 129, 0.25)',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'BlinkMacSystemFont', 'Arial', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -2px rgba(255, 208, 0, 0.45)',
        'emerald-glow': '0 0 30px -4px rgba(20, 97, 76, 0.6)',
        'blue-glow': '0 0 25px -3px rgba(4, 92, 180, 0.5)',
        'card': '0 12px 35px -10px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
