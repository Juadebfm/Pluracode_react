/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      blur: {
        cs: "182px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
