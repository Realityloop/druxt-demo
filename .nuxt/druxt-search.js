import { DruxtSearch } from 'druxt-search'

export default (context, inject) => {
  const baseUrl = 'https://dev-druxt.pantheonsite.io'
  const options = {}

  const druxtSearch = new DruxtSearch(baseUrl, options)
  inject('druxtSearch', druxtSearch)
}
