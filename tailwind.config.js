module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '12',
      '200': '2',
    },
    minHeight: {
      '0': '0',
      '1/4': '15rem',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
    extend: {
      fontFamily: {
        'sans': ['Golden', 'Golden']
      }
    },
  },
  variants: {
    extend: {
      scale: ['hover', 'active', 'group-hover'],
      margin: ['hover'],
      visibility: ['hover', 'focus'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [],
}
