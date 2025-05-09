/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b3c5d9',
          300: '#8da9c6',
          400: '#678db3',
          500: '#4171a0',
          600: '#345a80',
          700: '#274460',
          800: '#1a2d40',
          900: '#0d1720',
        },
        'accent-blue': '#b5c4ff',
        'accent-blue-light': '#d1dcff',
        'dark-bg': '#1a1f2e',
        'dark-card': '#232838',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        worship: 'url("/worship-overlay.jpg")',
      },
    },
  },
  plugins: [],
};
