module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    container: {
      center: true,
    },
    animation: {
      'cell-in': 'cell-in .2s linear',
    },
    keyframes: {
      'cell-in': {
        '0%, 100%': {
          transform: 'scale(1)',
        },
        '50%': {
          transform: 'scale(1.1)',
        },
      },
    },
    extend: {},
  },
  plugins: [],
}
