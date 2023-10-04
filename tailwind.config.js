module.exports = {
    content: [
      './content/**/*.md',
      './themes/hugo-landing-page/layouts/partials/**/*.html',
      './themes/hugo-landing-page/layouts/**/*.html',
    ],
theme: {
    extend:
    {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },

  corePlugins: {},
  plugins: [],
}
