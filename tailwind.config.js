/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "san-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 20%",
      },
    },
  },
  plugins: [],
};
