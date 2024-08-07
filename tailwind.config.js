/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFDE03",
        green: "#B2FF59",
        darkGreen: "#3C6010",
        red: "#B00020",
      },
    },
  },
  plugins: [],
};
