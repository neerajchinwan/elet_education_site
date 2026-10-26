/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#191419',
        ivory: '#FAF5EF',
        champagne: '#C51F45',
        charcoal: '#202735',
        slatecopy: '#667085',
        line: '#E5E7EB'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        editorial: ['Playfair Display', 'serif']
      },
      boxShadow: { soft: '0 16px 48px rgba(16,24,39,.08)' }
    }
  },
  plugins: []
}
