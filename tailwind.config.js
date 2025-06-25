/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          '900': '#0A0F17',
          '800': '#131A24',
          '700': '#1A2332',
          '600': '#1F2A3A',
          '500': '#253140',
          '400': '#3A4857',
          '300': '#4F5E6D',
          '200': '#7A8A98',
          '100': '#9BA8B5'
        },
        'energy': {
          'green': '#4ADE80',
          'blue': '#3B82F6',
          'yellow': '#FACC15',
          'red': '#EF4444'
        }
      }
    },
  },
  plugins: [],
} 