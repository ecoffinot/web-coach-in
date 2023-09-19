/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius : {
      none: "0",
      sm: "0.25rem",
      DEFAULT: "0.5rem",
      lg: "1rem",
      xl: "2rem"
    },
    extend: {
      spacing: {
        "spacer-0": "0",
        "spacer-1": "0.25rem",
        "spacer-2": "0.5rem",
        "spacer-3": "1rem",
        "spacer-4": "1.5rem",
        "spacer-5": "2rem",
        "spacer-6": "3rem",
        "spacer-7": "4rem",
        "spacer-8": "4.5rem",
        "spacer-9": "6rem"
      }
    },
  },
  plugins: [],
}