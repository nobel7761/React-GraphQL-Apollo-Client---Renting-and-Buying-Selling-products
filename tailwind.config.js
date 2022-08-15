/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btnPrimary: "#6558F5",
        btnDanger: "#D3455B",
      },
    },
  },
  plugins: [require("daisyui")],
};
