module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '0 2px 0 #00000075',
    },
    extend: {
      colors: {
        uma: {
          text1: '#794016',
          text2: '#69C10C',
          text3: '#ffffff',
          border1: '#794016',
          border2: '#79401650',
          border3: '#479000',
          border4: '#d1d5db',
          border5: '#79401625',
          surface1: '#ffffff',
          surface2: '#69C10C',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
