import Vue from 'vue'
import DruxtFieldListDefault from './DruxtFieldListDefault'

const components = [DruxtFieldListDefault]

// Component registration
Vue.use({
  install: function (Vue) {
    // Ensure we only register components once.
    if (Vue.__components_installed) {
      return
    }
    Vue.__components_installed = true

    // Register components
    for (const component of components) {
      Vue.component(component.name, component)
    }
  },
})
