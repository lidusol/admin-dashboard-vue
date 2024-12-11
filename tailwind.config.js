/** @type {import('tailwindcss').Config} */

const extendedColors = {
  background: 'var(--vt-c-background)',
  primary: 'var(--vt-c-primary)',
  fadedGray: 'var(--vt-c-faded-gray)',
  green: 'var(--vt-c-green)',
  blue: {
    1: 'var(--vt-c-blue-1)',
    2: 'var(--vt-c-blue-2)',
  },
  divider: 'var(--vt-c-divider)',
}

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        20: '1.25rem',
        30: '1.875rem',
      },
      spacing: {
        6: '0.375rem',
        22: '1.375rem',
        30: '1.875rem',
        41: '2.563rem',
        49: '3.063rem',
        248: '15.5rem',
        290: '18.125rem',
      },
      colors: extendedColors,
      fontSize: {
        26: '1.625rem',
        34: '2.125rem',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
