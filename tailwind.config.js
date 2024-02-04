  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./index.html","./src/**/*.{html,js,vue}"],
    theme: {
      extend: {
        colors: {
          green: {
            50: '#30AF5B',
            90: '#292C27',
          },
          gray: {
            10: '#EEEEEE',
            20: '#A2A2A2',
            30: '#7B7B7B',
            50: '#585858',
            90: '#141414',
          },
          orange: {
            50: '#FF814C',
          },
          blue: {
            70: '#021639',
          },
          yellow: {
            50: '#FEC601',
          },
        },
        backgroundImage: {
          'bg-img-1': "url('../src/assets/img-1.png')",
          'bg-img-2': "url('../src/assets/img-2.png')",
          'feature-bg': "url('../src/assets/feature-bg.png')",
          pattern: "url('../src/assets/pattern.png')",
          'pattern-2': "url('../src/assets/pattern-bg.png')",
        },
        screens: {
          xs: '400px',
          '3xl': '1680px',
          '4xl': '2200px',
        },
        maxWidth: {
          '10xl': '1512px',
        },
        borderRadius: {
          '5xl': '40px',
        },
      },
    },
    plugins: [],
  }