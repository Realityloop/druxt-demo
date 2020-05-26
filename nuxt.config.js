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

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // @nuxtjs/proxy module.
    // https://github.com/nuxt-community/proxy-module
    '@nuxtjs/proxy',
    'bootstrap-vue/nuxt',
    'druxt-breadcrumb',
    'druxt-entity',
    'druxt-menu',
    'druxt-router',
    'druxt-schema'
  ],

  plugins: ['~/components'],

  /**
   * Druxt; DRUpal <-> nuXT.
   */
  druxt: {
    baseUrl: process.env.API_URL,
    auth: {
      type: 'oauth2',
      credentials: {
        clientId: process.env.API_CONSUMER_CLIENT_ID,
        clientSecret: process.env.API_CONSUMER_CLIENT_SECRET,
        username: process.env.API_CONSUMER_USERNAME,
        password: process.env.API_CONSUMER_PASSWORD
      }
    },
    router: {
      render: 'druxt-entity'
    }
  },

  /**
   * Proxy middleware; https://github.com/nuxt-community/proxy-module.
   */
  proxy: {
    '/sites/default': process.env.API_URL
  }
}
