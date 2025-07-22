/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primitive-colour-neutral-600": "var(--primitive-colour-neutral-600)",
        "primitive-colour-tealb-900": "var(--primitive-colour-tealb-900)",
        "samantic-colour-border-secondary": "var(--samantic-colour-border-secondary)",
        "samantic-colour-content-primary": "var(--samantic-colour-content-primary)",
        "samantic-colour-content-secondary": "var(--samantic-colour-content-secondary)",
        white: "var(--white)",
        "your-brand-primary-100": "var(--your-brand-primary-100)",
        "your-brand-primary-active": "var(--your-brand-primary-active)",
      },
      fontFamily: {
        "text-m-regular": "var(--text-m-regular-font-family)",
        "text-s-regular": "var(--text-s-regular-font-family)",
        geist: ["Geist", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "drop-shadow-REG-NEW": "var(--drop-shadow-REG-NEW)",
      },
    },
  },
  plugins: [],
};