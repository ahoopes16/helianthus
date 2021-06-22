module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        cream: '#FFFDE7',
        steel: '#C8C8C8',
        navy: '#1C2544',
        gold: '#F5A82C',
        cabernet: '#651528',
      },
      fontSize: {
        '8xl': '6rem',
      },
      scale: {
        'flip': '-1',
      },
      height: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '160': '40rem',
        '168': '42rem',
        '176': '44rem',
        '184': '46rem',
        '192': '48rem',
        '200': '50rem',
        '208': '52rem',
        '216': '54rem',
        '224': '56rem',
        '232': '58rem',
        '240': '60rem',
      },
      width: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '160': '40rem',
        '168': '42rem',
        '176': '44rem',
        '184': '46rem',
        '192': '48rem',
        '200': '50rem',
        '216': '54rem',
        '224': '56rem',
        '232': '58rem',
        '240': '60rem',
        '280': '70rem',
        '304': '76rem',
        '320': '80rem',
      },
      screens: {
        'mobile-md': '375px',
        'mobile-lg': '425px',
        'tablet': '768px',
        'laptop-sm': '1024px',
        'laptop-md': '1280px',
        'desktop': '1440px',
      }
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(['disabled']),
    borderColor: ({ after }) => after(['disabled']),
    borderOpacity: ({ after }) => after(['disabled']),
    borderRadius: ({ after }) => after(['disabled', 'hover']),
    borderStyle: ({ after }) => after(['disabled', 'hover']),
    borderWidth: ({ after }) => after(['disabled', 'hover']),
    cursor: ({ after }) => after(['disabled']),
    textColor: ({ after }) => after(['disabled']),
  },
  plugins: [],
}
