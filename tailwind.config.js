/** @type {import('tailwindcss').Config} */

const extendedColors = {
  background: 'var(--vt-c-background)',
  primary: 'var(--vt-c-primary)',
  fadedGray: 'var(--vt-c-faded-gray)',
  green: {
    1: 'var(--vt-c-green)',
    2: 'var(--vt-c-green-2)',
  },
  blue: {
    1: 'var(--vt-c-blue-1)',
    2: 'var(--vt-c-blue-2)',
    3: 'var(--vt-c-blue-3)',
  },
  divider: 'var(--vt-c-divider)',
  shadow: 'var(--vt-c-shadow)',
}

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        20: '1.25rem',
        30: '1.875rem',
        50: '3.125rem',
      },
      spacing: {
        6: '0.375rem',
        22: '1.375rem',
        30: '1.875rem',
        33: '2.063rem',
        41: '2.563rem',
        49: '3.063rem',
        94: '5.875rem',
        228: '14.25rem',
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
      screens: {
        mobile: '375px',
        tablet: '768px',
        laptop: '1440px',
        desktop: '1920px',
      },
      boxShadow: {
        teamCard: '0 18px 40px 0px var(--vt-c-shadow)',
      },
      maxHeight: {
        content: 'calc(100vh - 164px)',
      },
    },
  },
  plugins: [],
}
