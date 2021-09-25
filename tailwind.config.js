module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.css'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        notosans: ['Noto Sans JP'],
        ubuntumono: ['Ubuntu Mono']
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: [],
}
