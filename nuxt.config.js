import components from './components'

const baseUrl = 'http://dev-druxt.pantheonsite.io/'

export default {
  modules: [
    '@nuxtjs/proxy',
    'bootstrap-vue/nuxt',
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
  components,
  proxy: {
    '/sites/default/files': baseUrl
  }
}
