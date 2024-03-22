/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        backgroundChange: {
          "0%": {
            backgroundColor: "orange",
            width: "10%"
          },
          "50%": {
            backgroundColor: "orange",
            width: "50%"
          },
          "100%": {
            backgroundColor: "orange",
            width: "100%"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "backgroundChange": "backgroundChange 0.3s forwards ease-out",
      },
      colors: {
        'bright': 'orange',
        'background': '#f8f8ff',
        'dark': '#0C0C0C',
      },
      backgroundImage:{
        "hero": "url(/hero.jpg)"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}