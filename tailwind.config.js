const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['circe', 'ariel'],
        body: ['"circe"', 'ariel'],
      },
      colors: {
        blue: {
          DEFAULT: '#15BCFA',
          50: '#C9EFFE',
          100: '#B5EAFD',
          200: '#8DDEFD',
          300: '#65D3FC',
          400: '#3DC7FB',
          500: '#15BCFA',
          600: '#049BD2',
          700: '#03729B',
          800: '#024A65',
          900: '#01222E',
        },
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
        yellow: {
          DEFAULT: '#FFB811',
          50: '#FFEFC9',
          100: '#FFE9B4',
          200: '#FFDD8B',
          300: '#FFD063',
          400: '#FFC43A',
          500: '#FFB811',
          600: '#D89700',
          700: '#A07000',
          800: '#684900',
          900: '#302100',
        },
        green: {
          DEFAULT: '#25C779',
          50: '#B3F1D3',
          100: '#A2EEC9',
          200: '#7FE7B5',
          300: '#5DE1A1',
          400: '#3ADA8D',
          500: '#25C779',
          600: '#1C985C',
          700: '#13683F',
          800: '#0B3923',
          900: '#020A06',
        },
        grey: {
          14: '#262626',
          17: '#2d2d2d',
          20: '#353535',
          23: '#3d3d3d',
          26: '#444444',
          29: '#4c4c4c',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};

// font-family:"circe";
