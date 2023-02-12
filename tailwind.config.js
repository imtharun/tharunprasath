/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      smd: "700px",
      md: "768px",
      mmd: "840px",
      mmmd: "940px",
      mmmmd: "980px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      display: ["group-hover"],
      colors: {
        light: "#fefde9",
        dark: "#343341",
      },
      fontFamily: {
        monts: ["Montserrat", "sans-serif"],
        explora: ["Explora", "cursive"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
