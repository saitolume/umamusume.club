module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '0 2px 0 #00000075'
    },
    extend: {
      colors: {
        uma: {
          text1: '#794016',
          text2: '#69C10C',
          text3: '#ffffff',
          border1: '#794016',
          border2: '#479000',
          border3: '#d1d5db',
          border4: '#79401625',
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
