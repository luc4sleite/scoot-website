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
        'about-hero-mobile': "url('./src/assets/images/about-hero-mobile.jpg')",
        'about-hero-tablet': "url('./src/assets/images/about-hero-tablet.jpg')",
        'about-hero-desktop': "url('./src/assets/images/about-hero-desktop.jpg')",
        'careers-location-hero-mobile': "url('./src/assets/images/careers-location-hero-mobile.jpg')",
        'careers-location-hero-tablet': "url('./src/assets/images/careers-location-hero-tablet.jpg')",
        'careers-location-hero-desktop': "url('./src/assets/images/careers-location-hero-desktop.jpg')",
        'white-circles': "url('./src/assets/patterns/white-circles.svg')",
      },
      gridTemplateColumns: {
        'home-features': 'auto 1fr',
        'dropdown': '1fr auto',
      }
    },
  },
  plugins: [],
}

