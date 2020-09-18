const baseUrl = 'https://dev-druxt.pantheonsite.io/'

export default {
  modules: [
    '@nuxtjs/proxy',
    'druxt',
    'druxt-theme-umami-bootstrap'
  ],
  druxt: {
    baseUrl,
    breadcrumb: {
      component: 'b-breadcrumb',
      home: false
    },
    menu: { jsonApiMenuItems: true }
  },
  proxy: {
    '/sites/default/files': baseUrl
  }
}
