/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryGray: '#f7f7f7',
        secondaryGray: '#adadad',
        primaryBorder: "#f2f2f2",
        primaryBlue: "#0072CE",
        secondaryColor: "#777777",
        yellow: "#FFB800",
        secondaryBlack: '#323232',
        darkYellow: '#FDC500',
        primaryGreen: '#75cd67',
        secondaryGrayText: '#777777',
        lightBlue: '#e0eef9',
        secondayrDarkBlack: '#121212',
      },
    },
  },
  plugins: [],
}

