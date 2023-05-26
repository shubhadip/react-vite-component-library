const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          1: '#EDEBFD',
          5: '#4836E7',
          30: '#4836e730',
          31: '#4836E731',
        },
        customblack: {
          1: '#111111',
          2: '#222222',
          3: '#333333',
          236: '#22222236',
        },
        critical: {
          1: '#D75757',
        },
        customgray: {
          1: '#F3F3F3',
          2: '#AAAAAA',
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
  },
  plugins: [],
};
