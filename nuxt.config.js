require('dotenv').config()

export default {
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],

  /**
   * Nuxt.js modules
   */
  modules: [
    // @nuxtjs/dotenv: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',

    // @nuxtjs/proxy: https://github.com/nuxt-community/proxy-module
    '@nuxtjs/proxy',

    // @nuxtjs/pwa: https://github.com/nuxt-community/pwa-module
    '@nuxtjs/pwa',

    // BootstrapVue: https://bootstrap-vue.org
    'bootstrap-vue/nuxt',

    // Druxt.js: https://github.com/druxt/druxt.js
    'druxt',

    // Druxt.js theme - Umami bootstrap: https://github.com/Realityloop/druxt-theme-umami-bootstrap.js
    'druxt-theme-umami-bootstrap'
  ],

  /**
   * Druxt.js
   */
  druxt: {
    baseUrl: process.env.API_URL,
    breadcrumb: {
      component: 'b-breadcrumb',
      home: false
    },
    // menu: {
    //   jsonApiMenuItems: true
    // }
    // Uncomment the lines below to enable the use of Oauth2 credentials via the .env file.
    //
    // auth: {
    //   type: 'oauth2',
    //   credentials: {
    //     clientId: process.env.API_CONSUMER_CLIENT_ID,
    //     clientSecret: process.env.API_CONSUMER_CLIENT_SECRET,
    //     username: process.env.API_CONSUMER_USERNAME,
    //     password: process.env.API_CONSUMER_PASSWORD
    //   }
    // }
  },

  /**
   * Proxy middleware; https://github.com/nuxt-community/proxy-module.
   */
  proxy: {
    '/sites/default': process.env.API_URL
  }
}
