const baseUrl = 'http://dev-druxt.pantheonsite.io'

export default {
  modules: [
    '@nuxtjs/proxy',
    'druxt-theme-umami-bootstrap',
    'druxt'
  ],
  druxt: {
    baseUrl,
    breadcrumb: {
      component: 'b-breadcrumb',
      home: false
    },
    menu: { jsonApiMenuItems: true }
  },
  proxy: [
    baseUrl + '/sites/default/files'
  ]
}
