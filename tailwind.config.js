/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans:    ['Satoshi', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        // Per-product colors
        wb: {
          DEFAULT: '#0C245E',
          light:   '#DCE4F8',
          dark:    '#0A1A45',
        },
        cb: {
          DEFAULT: '#0B7261',
          light:   '#CCE9E4',
          dark:    '#074F43',
        },
        pb: {
          DEFAULT: '#1E6B8A',
          light:   '#D0E9F2',
          dark:    '#134F67',
        },
        // Global palette
        surface: {
          DEFAULT: '#FAFAF9',
          card:    '#F4F4F0',
        },
        border:  '#E4E4E7',
        muted:   '#71717A',
        ink:     '#18181B',
        dark:    '#0F172A',
      },
      maxWidth: {
        content: '1280px',
      },
      borderRadius: {
        sm:    '4px',
        DEFAULT:'8px',
        md:    '8px',
        lg:    '12px',
        xl:    '16px',
        '2xl': '20px',
        full:  '9999px',
      },
      boxShadow: {
        card:        '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover':'0 12px 32px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)',
        nav:         '0 1px 0 #E4E4E7',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
