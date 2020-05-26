<template>
  <div v-html="processed" />
</template>

<script>
import { DruxtFieldMixin } from 'druxt-entity'

export default {
  name: 'DruxtFieldTextDefault',

  mixins: [DruxtFieldMixin],

  props: {
    format: {
      type: String,
      default: 'full_html',
    },

    processed: {
      type: String,
      required: true,
    },

    value: {
      type: String,
      required: true,
    },
  },
}
</script>
