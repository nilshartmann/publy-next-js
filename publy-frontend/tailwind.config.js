const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: colors.white,
      "publy-gray": colors.gray,
      "publy-green": colors.green,
      "publy-blue": colors.sky,
      "publy-yellow": colors.yellow,
      fuchsia: colors.fuchsia,
      amber: colors.amber,
      orange: colors.orange,
      rose: colors.rose,
    },
    fontFamily: {
      "open-sans": ["Open Sans", "sans-serif"],
      metro: ["Metropolis", "sans-serif"],
      helvetica: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: ".5rem",
      },
    },
  },
  plugins: [],
}
