import Vue from 'vue'
import DruxtFieldBasicString from './DruxtFieldBasicString'
import DruxtFieldDatetimeDefault from './DruxtFieldDatetimeDefault'
import DruxtFieldLink from './DruxtFieldLink'
import DruxtFieldListDefault from './DruxtFieldListDefault'
import DruxtFieldTimestamp from './DruxtFieldTimestamp'

const components = [
  DruxtFieldBasicString,
  DruxtFieldDatetimeDefault,
  DruxtFieldLink,
  DruxtFieldListDefault,
  DruxtFieldTimestamp,
]

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
