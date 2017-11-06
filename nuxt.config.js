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
  ],
  env: {
    menuItems: [
                {
                    title: "About Me",
                    path: "/about/"
                },
                {
                    title: "Photography",
                    path: "/photography/"
                },
                {
                    title: "Projects",
                    path: "/projects/"
                },
                {
                    title: "Travel",
                    path: "/travel/"
                },
                {
                    title: "Writing",
                    path: "/writing/"
                },
                {
                    title: "More",
                    path: "/more/"
                },
                {
                    title: "Resume",
                    path: "resume"
                }
            ]
  }
}