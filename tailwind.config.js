/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        play: ['Play', "sans-serif"]
      },
      colors: {
        primary: "#44749d",
        dark: "#383636",
        secondary: "#00bf7a",
      },
      screens: {
        "2xl": "1320px"
      },
    },
  },
  plugins: [],
}
