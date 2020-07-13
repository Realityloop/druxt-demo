<template>
  <b-row>
    <b-container>
      <b-row>
        <b-col>
          <b-input-group>
            <b-input v-model="query" size="lg" />

            <b-input-group-append>
              <b-button size="lg">Search</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>

      <!-- Results -->
      <b-row class="mt-3 mt-md-5" v-if="query && results.length">
        <druxt-entity
          v-for="(result, key) of results"
          class="pb-3"
          :key="key"
          :type="result.type"
          :uuid="result.id"
          mode="teaser"
          :wrapper="{
            component: 'b-col',
            props: {
              class: 'd-flex',
              cols: '12',
              md: '6',
            },
          }"
        />
      </b-row>

      <!-- No results -->
      <b-row class="mt-3 mt-md-5" v-else>
        <b-col>
          <h4>Sorry, no results were found.</h4>
        </b-col>
      </b-row>
    </b-container>
  </b-row>
</template>

<script>
import { DruxtSearchMixin } from 'druxt-search'

export default {
  name: 'DruxtDemoSearch',

  layout: 'search',

  mixins: [DruxtSearchMixin],

  created() {
    if (typeof this.$route.query.query === 'undefined') {
      return
    }

    this.query = this.$route.query.query
  },
}
</script>
