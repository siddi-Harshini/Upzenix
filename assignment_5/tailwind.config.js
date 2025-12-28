/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1DB954',
        secondary: '#191414',
        dark: '#121212',
        lightDark: '#282828',
      },
    },
  },
  plugins: [],
}
