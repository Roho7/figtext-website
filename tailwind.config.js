/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Cabinet Grotesk, sans-serif",
        sans: "General Sans, sans-serif",
      },
      colors: {
        white: "#F8FCF7",
        whale: {
          500: "#3A63E9",
          800: "#011024",
          900: "#000D1E",
        },
        alga: {
          500: "#46F5C9",
        },
      },
    },
  },
  plugins: [],
};
