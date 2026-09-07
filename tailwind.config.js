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
          // Iconic Lotus365 Emerald Greens (https://lottuss365.co/)
          emerald: '#14614C',
          emeraldLight: '#1E8A6C',
          emeraldDark: '#0D4939',
          emeraldDeep: '#093628',
          emeraldSurface: 'rgba(0, 0, 0, 0.2)',
          
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
          dark: '#14614C', // Exact reference site background
          deepDark: '#0D4435',
          surface: 'rgba(0, 0, 0, 0.20)',
          card: 'rgba(0, 0, 0, 0.25)',
          cardHover: 'rgba(0, 0, 0, 0.35)',
          border: 'rgba(255, 255, 255, 0.2)',
        },
      },
      fontFamily: {
        sans: ["'Poppins'", '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'],
        display: ["'Poppins'", 'sans-serif'],
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
