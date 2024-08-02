import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        cobalt_blue: {
          50: '#e4e4e6',

          100: '#cacbcf',

          200: '#b0b2b9',

          300: '#979aa3',

          400: '#7e828f',

          500: '#666b7c',

          600: '#4e556b',

          700: '#36405d',

          800: '#1a2b51',

          900: '#0d1931',
        },
        blue_violet: {
          50: '#e5e4e7',

          100: '#cccad0',

          200: '#b3b1b9',

          300: '#9c98a4',

          400: '#858090',

          500: '#6f687e',

          600: '#5a516d',

          700: '#473a5f',

          800: '#352254',

          900: '#22103a',
        },
        orchid: {
          50: '#e6e4e6',

          100: '#cfcace',

          200: '#b8b0b6',

          300: '#a396a0',

          400: '#8e7d8a',

          500: '#7b6576',

          600: '#6a4c63',

          700: '#5b3353',

          800: '#4d1544',

          900: '#2e0d28',
        },
        amaranth: {
          50: '#e7e4e4',

          100: '#cfcaca',

          200: '#b9b0b0',

          300: '#a39797',

          400: '#8f7e7f',

          500: '#7c6667',

          600: '#6b4e4f',

          700: '#5d3637',

          800: '#511a1d',

          900: '#320e10',
        },
        gamboge: {
          50: '#e6e4e3',

          100: '#cdcbc8',

          200: '#b6b2ad',

          300: '#9f9992',

          400: '#898177',

          500: '#756a5c',

          600: '#61533e',

          700: '#503e18',

          800: '#382a0f',

          900: '#201909',
        },
        spring_bud: {
          50: '#e3e5e2',

          100: '#c9ccc6',

          200: '#afb4aa',

          300: '#959c8f',

          400: '#7b8672',

          500: '#627055',

          600: '#485c34',

          700: '#314713',

          800: '#22310d',

          900: '#141c08',
        },
        emerald_green: {
          50: '#e3e5e3',

          100: '#c7cdc7',

          200: '#abb5ac',

          300: '#909d91',

          400: '#748776',

          500: '#58725b',

          600: '#385e3c',

          700: '#144a1e',

          800: '#0e3315',

          900: '#081e0c',
        },
        opal: {
          50: '#e2e5e5',

          100: '#c6cccc',

          200: '#abb4b3',

          300: '#8f9d9b',

          400: '#738684',

          500: '#56716e',

          600: '#355c59',

          700: '#144844',

          800: '#0e322f',

          900: '#081d1c',
        },
      },
    },
  },
  plugins: [],
};
export default config;
