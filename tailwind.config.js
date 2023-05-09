/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E5ECF4',
        'secondary': '#333A44',
        'yellow': '#FCB72B',
      },
      fontFamily: {
        'lexend': ['Lexend Deca', 'sans-serif'],
      },
      backgroundImage: {
        'home-hero-mobile': "url('./src/assets/images/home-hero-mobile.jpg')",
        'home-hero-tablet': "url('./src/assets/images/home-hero-tablet.jpg')",
        'home-hero-desktop': "url('./src/assets/images/home-hero-desktop.jpg')",
      }
    },
  },
  plugins: [],
}

