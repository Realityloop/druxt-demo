import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_a9a31e76 from 'nuxt_plugin_workbox_a9a31e76' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_druxtthemeumamibootstrap_1ae345c7 from 'nuxt_plugin_druxtthemeumamibootstrap_1ae345c7' // Source: ./druxt-theme-umami-bootstrap.js (mode: 'all')
import nuxt_plugin_druxtviews_d66922ca from 'nuxt_plugin_druxtviews_d66922ca' // Source: ./druxt-views.js (mode: 'all')
import nuxt_plugin_druxtsearch_4a62dee2 from 'nuxt_plugin_druxtsearch_4a62dee2' // Source: ./store/druxt-search.js (mode: 'all')
import nuxt_plugin_druxtsearch_69318086 from 'nuxt_plugin_druxtsearch_69318086' // Source: ./druxt-search.js (mode: 'all')
import nuxt_plugin_druxtschema_67b291f6 from 'nuxt_plugin_druxtschema_67b291f6' // Source: ./store/druxt-schema.js (mode: 'all')
import nuxt_plugin_druxtschema_584b4124 from 'nuxt_plugin_druxtschema_584b4124' // Source: ./druxt-schema.js (mode: 'all')
import nuxt_plugin_druxtrouter_7adcef4e from 'nuxt_plugin_druxtrouter_7adcef4e' // Source: ./store/druxt-router.js (mode: 'all')
import nuxt_plugin_druxtrouter_6b759e7c from 'nuxt_plugin_druxtrouter_6b759e7c' // Source: ./druxt-router.js (mode: 'all')
import nuxt_plugin_druxtmenu_5755fd10 from 'nuxt_plugin_druxtmenu_5755fd10' // Source: ./store/druxt-menu.js (mode: 'all')
import nuxt_plugin_druxtmenu_4fe8b7b4 from 'nuxt_plugin_druxtmenu_4fe8b7b4' // Source: ./druxt-menu.js (mode: 'all')
import nuxt_plugin_druxtentity_3545d3a2 from 'nuxt_plugin_druxtentity_3545d3a2' // Source: ./druxt-entity.js (mode: 'all')
import nuxt_plugin_druxtbreadcrumb_d280a6fc from 'nuxt_plugin_druxtbreadcrumb_d280a6fc' // Source: ./druxt-breadcrumb.js (mode: 'all')
import nuxt_plugin_druxtblocks_d50f39c2 from 'nuxt_plugin_druxtblocks_d50f39c2' // Source: ./druxt-blocks.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Druxt demo site"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"druxt-demo"},{"hid":"author","name":"author","content":"Stuart Clark"},{"hid":"theme-color","name":"theme-color","content":"black"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"druxt-demo"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"druxt-demo"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Druxt demo site"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.4cdf9920.json"}],"style":[],"script":[],"title":"druxt-demo","htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_a9a31e76 === 'function') {
    await nuxt_plugin_workbox_a9a31e76(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtthemeumamibootstrap_1ae345c7 === 'function') {
    await nuxt_plugin_druxtthemeumamibootstrap_1ae345c7(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtviews_d66922ca === 'function') {
    await nuxt_plugin_druxtviews_d66922ca(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtsearch_4a62dee2 === 'function') {
    await nuxt_plugin_druxtsearch_4a62dee2(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtsearch_69318086 === 'function') {
    await nuxt_plugin_druxtsearch_69318086(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtschema_67b291f6 === 'function') {
    await nuxt_plugin_druxtschema_67b291f6(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtschema_584b4124 === 'function') {
    await nuxt_plugin_druxtschema_584b4124(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtrouter_7adcef4e === 'function') {
    await nuxt_plugin_druxtrouter_7adcef4e(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtrouter_6b759e7c === 'function') {
    await nuxt_plugin_druxtrouter_6b759e7c(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtmenu_5755fd10 === 'function') {
    await nuxt_plugin_druxtmenu_5755fd10(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtmenu_4fe8b7b4 === 'function') {
    await nuxt_plugin_druxtmenu_4fe8b7b4(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtentity_3545d3a2 === 'function') {
    await nuxt_plugin_druxtentity_3545d3a2(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtbreadcrumb_d280a6fc === 'function') {
    await nuxt_plugin_druxtbreadcrumb_d280a6fc(app.context, inject)
  }

  if (typeof nuxt_plugin_druxtblocks_d50f39c2 === 'function') {
    await nuxt_plugin_druxtblocks_d50f39c2(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
