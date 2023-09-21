/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'light': '#ffdda1',
      'light-blue': '#06bcc1',
      'blue': '#0892a5',
      'dark-blue': '#122c34',
      'brown': '#725752',
      'light-grey' : '#9AA899',
      'white' : '#FFFFFF'
    },
    borderRadius : {
      none: "0",
      sm: "0.25rem",
      DEFAULT: "0.5rem",
      lg: "1rem",
      xl: "2rem"
    },
    fontFamily: {
      sans: ['Calibri Light', 'sans-serif'],
      serif: ['Calibri Light', 'serif'],
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

