/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#eef1f8',
        priBg: '#F5E6FE',
        priText: '#35AF8A',
        darkBg: '#1E1E2E',
        darkBgSec: '#27293D'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif']
      },
      fontSize: {
        nl: ['56px', '64px']
      },
      screens: {
        '2xs': '200px',
        '1xs': '350px',
        '1xl': '1400px',
        '3xl': '2000px'
      }
    }
  }
  // variants: {
  //   backgroundColor: [
  //     'dark',
  //     'dark-hover',
  //     'dark-group-hover',
  //     'dark-even',
  //     'dark-odd'
  //   ],
  //   borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
  //   textColor: ['dark', 'dark-hover', 'dark-active']
  // }
};
