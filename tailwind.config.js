/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maison: {
          cream: "#F7F3ED",
          beige: "#E9DFD1",
          brown: "#49372C",
          gold: "#B18A55",
          dark: "#25211E",
        },
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};