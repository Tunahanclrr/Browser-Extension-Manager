import plugin from 'tailwindcss/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        neutral: {
          100: 'hsl(200, 60%, 99%)',
          200: 'hsl(10, 0%, 93%)',
          300: 'hsl(217, 61%, 90%)',
          400: 'hsl(0, 0%, 78%)',
          600: 'hsl(226, 11%, 37%)',
          700: 'hsl(225, 23%, 24%)',
          800: 'hsl(226, 25%, 17%)',
          900: 'hsl(227, 79%, 14%)',
        },
        red: {
          400: 'hsl(3, 86%, 64%)',
          500: 'hsl(3, 71%, 56%)',
          700: 'hsl(3, 77%, 44%)',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.text-preset-1': {
          fontSize: '2.125rem',
          fontWeight: 'bold',
          lineHeight: '1',
          letterSpacing: '-1px',
        },
        '.text-preset-2': {
          fontSize: '1.25rem',
          fontWeight: 'bold',
          lineHeight: '1.2',
          letterSpacing: '-0.2px',
        },
        '.text-preset-3': {
          fontSize: '1.25rem',
          fontWeight: '400',
          lineHeight: '1.4',
          letterSpacing: '-0.3px',
        },
        '.text-preset-5': {
          fontSize: '1rem',
          fontWeight: '400',
          lineHeight: '1.4',
          letterSpacing: '-0.5px',
        },
      })
    })
  ],
}
