/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kemc: {
          navy: {
            DEFAULT: '#002147',
            deep: '#00142e',
            light: '#0a2f5c',
            subtle: '#0f396e',
          },
          crimson: {
            DEFAULT: '#800020',
            dark: '#610018',
            hover: '#940025',
            light: '#fdf2f4',
          },
          gold: {
            DEFAULT: '#C5A059',
            light: '#d8b979',
            soft: '#faf4e6',
            dark: '#a8843e',
          },
          charcoal: '#0F172A',
          slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            600: '#475569',
            700: '#334155',
            900: '#0F172A',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-soft': '0 4px 20px -2px rgba(0, 33, 71, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 35px -8px rgba(0, 33, 71, 0.12), 0 8px 16px -4px rgba(0, 33, 71, 0.06)',
        'royal': '0 10px 30px -5px rgba(0, 33, 71, 0.3)',
        'crimson': '0 10px 25px -5px rgba(128, 0, 32, 0.35)',
      },
      backgroundImage: {
        'radial-pattern': 'radial-gradient(rgba(0, 33, 71, 0.05) 1px, transparent 1px)',
        'crest-glow': 'radial-gradient(circle at 50% 50%, rgba(197, 160, 89, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
};
