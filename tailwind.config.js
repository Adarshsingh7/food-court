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
        red: "#B00020",
      },
    },
  },
  plugins: [],
};
