module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Juan Martín Germano - Designer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Germi Portfolio' },
      { name: 'google-site-verification', content: 'nIZHKw4qeDLe6fDDzkdCgyZ5pclkp-U45xqq-6LumMA' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700' }
    ],
    script: [
      { src: '/js/fullstory.js' }
    ],
  },
  css: [
    '~/sass/main.sass'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  // router: {
  //   middleware: 'menu'
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
