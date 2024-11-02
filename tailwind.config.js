/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      Playfair:['Playfair Display', 'serif'],
      Work_Sans: ['Work Sans', 'sans-serif']
    }
  },
  plugins: [],
}