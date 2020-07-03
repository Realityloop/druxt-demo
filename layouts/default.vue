<template>
  <b-container fluid>
    <!-- Header -->
    <b-row>
      <b-col>
        <b-container :class="containerClass">
          <druxt-block-region name="header" :theme="theme" />
        </b-container>
      </b-col>
    </b-row>

    <!-- Breadcrumbs -->
    <b-row v-if="isHomePath">
      <b-col>
        <b-container :class="containerClass">
          <druxt-block-region name="breadcrumbs" :theme="theme" />
        </b-container>
      </b-col>
    </b-row>

    <!-- Page title -->
    <b-row v-if="isHomePath">
      <b-col>
        <b-container :class="containerClass">
          <h1>{{ $store.state.druxtRouter.route.label }}</h1>
        </b-container>
      </b-col>
    </b-row>

    <!-- Content -->
    <b-row class="bg-light">
      <b-col>
        <b-container :class="containerClass">
          <druxt-block-region :theme="theme" />
        </b-container>
      </b-col>
    </b-row>

    <!-- Footer -->
    <b-row class="bg-dark text-white">
      <b-col>
        <b-container :class="containerClass">
          <druxt-block-region name="footer" :theme="theme" />
        </b-container>
      </b-col>
    </b-row>

    <!-- Footer -->
    <b-row>
      <b-col>
        <b-container :class="containerClass">
          <druxt-block-region name="bottom" :theme="theme" />
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Druxt',

  computed: {
    containerClass: () => ['p-3'],
    isHomePath() {
      return !this.$store.state.druxtRouter.route.isHomePath
    },

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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
