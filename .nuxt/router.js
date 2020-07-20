import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1611e1aa = () => interopDefault(import('../pages/_langcode/search.vue' /* webpackChunkName: "pages/_langcode/search" */))
const _2c7334d3 = () => interopDefault(import('./components/druxt-router.js' /* webpackChunkName: "druxt-router" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/:langcode?/search",
    component: _1611e1aa,
    name: "langcode-search"
  }, {
    path: "*",
    component: _2c7334d3,
    name: "druxt-router"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
