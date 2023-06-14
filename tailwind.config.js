/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#243F4D",
        secondary: "#41728B",
        tertiary: "#1A2E37",
        fourth: "#EF3400",
        fourthLight: "#FF7F5C",
        fourthDark: "#CC2C00",
        fifth: "#F0A800",
        fifthLight: "#FFC233",
        fifthDark: "#CC8F00",
        sixth: "#799871",
        sixthLight: "#A6BAA0",
        sixthDark: "#5C7656",
        hoverBG: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
