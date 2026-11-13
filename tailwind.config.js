/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF7F2',
          100: '#F4ECE1',
          200: '#E8DCCF',
          300: '#D3C2AF',
          400: '#B8A18A',
          500: '#9A8169',
          600: '#7E6852',
          700: '#64513F',
          800: '#4A3B2E',
          900: '#2E241C',
          950: '#1B140F',
        },
        espresso: {
          800: '#2C2723',
          900: '#201C19',
          950: '#141210',
        },
        sage: {
          100: '#E9EFE9',
          200: '#CFDDD0',
          600: '#5F7A62',
        },
        terracotta: {
          100: '#F6EAE4',
          500: '#BA6D4D',
          600: '#A05537',
        },
      },
      fontFamily: {
        display: ['"Josefin Sans"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      },
    },
  },
  plugins: [],
}
