/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'auto': {
          blue: '#1e40af',    // Primary
          orange: '#ea580c',  // CTA buttons
          gray: '#64748b',    // Text
          light: '#f8fafc'    // Background
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}