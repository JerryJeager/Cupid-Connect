/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        appBg: "#e6cfbd",
        lightGreen: "#38b000",
        lightRed: "#eb1d1d",
        pink: "#ff396f",
        yellow: "#ffe74c"
      }
    },
  },
  plugins: [],
}

