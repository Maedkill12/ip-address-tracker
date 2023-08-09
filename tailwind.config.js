/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-desktop": "url('/pattern-bg-desktop.png')",
        "pattern-mobile": "url('/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
