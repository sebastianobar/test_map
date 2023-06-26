const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/components/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      // that is animation class
      animation: {
        'fade-out': 'fadeOut 5s both',
      },
      keyframes: {
        fadeOut: {
          "0%, 100%": {
            opacity: 0
          },
          "5%, 60%": {
            opacity: 1
          }
        }
      }
    }
  }
}
