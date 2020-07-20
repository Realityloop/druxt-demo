import { DruxtRouter } from 'druxt-router'

export default (context, inject) => {
  const baseUrl = 'https://dev-druxt.pantheonsite.io'
  const options = {}

  const router = new DruxtRouter(baseUrl, options)
  inject('druxtRouter', () => router)
}
