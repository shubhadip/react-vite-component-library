const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bodyBg: '#F5F5FA',
        customgray: {
          1: '#F3F3F3',
          2: '#AAAAAA',
        },
        customblack: {
          1: '#111111',
          2: '#222222',
          3: '#333333',
          236: '#22222236',
        },
        primary: {
          1: '#4836E7',
          5: '#F7F9FF',
          10: '#D0DAFB',
          20: '#A0B5F8',
          30: '#597DF2',
          40: '#2A58EF',
          50: '#1246ED',
          60: '#0E38BE',
          70: '#0D31A6',
          80: '#092377',
          90: '#051547',
          DEFAULT: '#040E2F',
        },
        secondary: {
          5: '#EDFAFA',
          10: '#D5F5F6',
          20: '#AFECEF',
          30: '#7EDCE2',
          40: '#16BDCA',
          50: '#0694A2',
          60: '#047481',
          70: '#036672',
          80: '#05505C',
          90: '#014451',
          DEFAULT: '#01333C',
        },
        neutral: {
          5: '#F8FAFC',
          10: '#EEF2F7',
          20: '#E3EAF2',
          30: '#D3DDEA',
          40: '#B3C4DB',
          50: '#9EB4D1',
          60: '#829EC4',
          70: '#6789B7',
          80: '#4A6D9C',
          90: '#2B3F5A',
          DEFAULT: '#181B20',
        },
        critical: {
          1: '#D75757',
          10: '#FECDCD',
          50: '#FB1E1E',
          60: '#C80404',
          80: '#900303',
        },
        warning: {
          10: '#FFEBCC',
          50: '#FD9800',
          60: '#CC7A00',
          80: '#804D00',
        },
        success: {
          10: '#D3FFCC',
          50: '#23FE01',
          60: '#1CCB01',
          80: '#159A01',
        },
        info: {
          10: '#CCECFF',
          50: '#00A2FD',
          60: '#0081CC',
          80: '#005180',
        },
      },
      spacing: {
        144: '36rem',
      },
      fontSize: {
        xxs: '0.625rem',
        28: '1.75rem',
        32: '2rem',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1352px',
      },
    },
  },
  plugins: [],
};
