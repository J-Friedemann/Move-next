/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
    colors: {
      support1: "#333333",
      support2: "#858a8f",
      support3: "#aab0b7",
      support4: "#ffffff",
      support5: "#f5f6fa",
      support5: "#edeef6",
      alternative1: "#e5f1ff",
      alternative2: "#fff2d8",
      alternative3: "#ffe3de",
      emphasis1: "#377dff",
      emphasis2: "#2dca8c",
      emphasis3: "#ffbe3d",
      emphasis4: "#ff715b",
    },
  },
  plugins: [],
};
