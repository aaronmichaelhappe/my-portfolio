const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        hibiscus: {
          DEFAULT: '#BE276F',
          50: '#EEAECD',
          100: '#EB9DC2',
          200: '#E47BAD',
          300: '#DD5A98',
          400: '#D63883',
          500: '#BE276F',
          600: '#8F1D54',
          700: '#611439',
          800: '#320A1D',
          900: '#040102',
        },
        grey: {
          14: '#262626',
          17: '2d2d2d',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
