module.exports = {
  head: {
    titleTemplate: 'Mihir (@citruspi) // %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  css: [
    'uikit/dist/css/uikit.css',
  ],
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false }
  ]
}