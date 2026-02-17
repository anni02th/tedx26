/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            'fire-orange': '#FF6B1A',
            'fire-gold': '#FFB347',
            'fire-yellow': '#FFD700',
            'ember-red': '#CC2200',
            'ted-red': '#E62B1E',
         },
         fontFamily: {
            serif: ['Cinzel', 'serif'],
            sans: ['Rajdhani', 'sans-serif'],
            rajdhani: ['Rajdhani', 'sans-serif'],
            alt: ['"IM Fell English"', 'serif'],
         },
         animation: {
            'spin-slow': 'spin 10s linear infinite',
            'spin-reverse': 'spin 15s linear infinite reverse',
         }
      },
   },
   plugins: [],
}
