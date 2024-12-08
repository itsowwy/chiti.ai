/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primaryColor: "#0083FF",
      secondaryColor: "#ECECEC",
      backgroundColor: "#FFFFFF",
      white: "#FFFFFF",
      black: "#000000"
    },
    extend: {
      fontFamily: {
        displayFont: ['"SF UI Display Medium"']
      }
    }
  },
  plugins: []
}
