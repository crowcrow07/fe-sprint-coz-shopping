/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        80: "80px",
        58: "58px",
        264: "264px",
      },
      width: {
        264: "264px",
      },
    },
  },
  plugins: [],
};
