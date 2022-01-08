module.exports = {
  purge: {
    enabled: false,
    content: ['./dist/**/*.html'],
  }, 
  darkMode: 'class',
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        headline: ['Oswald']
        },
      colors: {
        mainColor: '#212f49'
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  corePlugins: {
    float: false,
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
  ],
}
