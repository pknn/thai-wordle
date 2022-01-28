module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        fade: 'rgba(255, 255, 255, 0.7)',
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
    },
  },
  plugins: [],
}
