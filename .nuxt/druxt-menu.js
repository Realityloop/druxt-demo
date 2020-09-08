import Vue from 'vue'
import { DruxtMenu, DruxtMenuComponents } from 'druxt-menu'

Vue.use({
  install: function (Vue) {
    if (Vue._druxt_menu_installed) return
    Vue._druxt_menu_installed = true

    // Register components.
    for (const component in DruxtMenuComponents) {
      Vue.component(DruxtMenuComponents[component].name, DruxtMenuComponents[component])
    }
  }
})

export default (context, inject) => {
  const baseUrl = 'https://dev-druxt.pantheonsite.io'
  const options = {}

  options.menu = {"jsonApiMenuItems":true}

  const druxtMenu = new DruxtMenu(baseUrl, options)
  inject('druxtMenu', druxtMenu)
}
