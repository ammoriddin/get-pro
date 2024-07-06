/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryGray: '#f7f7f7',
        primaryBorder: "#f2f2f2",
        primaryBlue: "#0072CE",
        secondaryColor: "#777777",
        yellow: "#FFB800",
      },
    },
  },
  plugins: [],
}

