/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f85555",
        secondary: "#ababab",
      },
      fontFamily: {
        Yantramanav: ['Yantramanav', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

