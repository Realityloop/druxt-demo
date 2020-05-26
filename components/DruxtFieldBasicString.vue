<template>
  <div v-html="value" />
</template>

<script>
import { DruxtFieldMixin } from 'druxt-entity'

export default {
  name: 'DruxtFieldBasicString',

  mixins: [DruxtFieldMixin],

  props: {
    value: {
      type: String,
      required: true,
    },
  },
}
</script>
