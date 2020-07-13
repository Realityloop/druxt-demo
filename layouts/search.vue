<template>
  <b-container fluid>
    <!-- Header -->
    <b-navbar class="bg-white p-3" toggleable="lg" sticky>
      <!-- <druxt-block-region name="header" :theme="theme" /> -->
      <b-container>
        <!-- Branding -->
        <druxt-block uuid="6e9051e1-57a6-4432-bad0-30665207ae93" />

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse class="ml-auto" id="nav-collapse" is-nav>
          <!-- Main menu -->
          <druxt-block uuid="8d5d7b1b-89f9-4804-a594-bbe0015e601b" />
        </b-collapse>
      </b-container>
    </b-navbar>

    <!-- Content -->
    <b-row class="bg-light">
      <b-container :class="containerClass">
        <!-- Page title -->
        <b-row>
          <b-col class="mb-3 mb-md-5">
            <h1>Search</h1>
          </b-col>
        </b-row>

        <druxt-block-region :theme="theme" />
      </b-container>
    </b-row>

    <!-- Content: Bottom -->
    <b-row class="bg-secondary text-white">
      <b-container
        :class="containerClass.concat(['text-center', 'text-md-left'])"
      >
        <druxt-block-region name="content_bottom" :theme="theme" />
      </b-container>
    </b-row>

    <!-- Footer -->
    <b-row class="bg-dark text-white">
      <b-container
        :class="containerClass.concat(['text-center', 'text-md-left'])"
      >
        <druxt-block-region name="footer" :theme="theme" />
      </b-container>
    </b-row>

    <!-- Bottom -->
    <b-row>
      <b-container
        :class="containerClass.concat(['text-center', 'text-md-left'])"
      >
        <druxt-block-region name="bottom" :theme="theme" />
      </b-container>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'DruxtSearchLayout',

  computed: {
    containerClass: () => ['mb-3', 'mt-3', 'mb-md-5', 'mt-md-5'],

    theme: () => 'umami',
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.sticky-top {
  margin: 0 -15px;
}
</style>
