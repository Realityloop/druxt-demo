<template>
  <div>{{ value }}</div>
</template>

<script>
import { DruxtFieldMixin } from 'druxt-entity'

export default {
  name: 'DruxtFieldTimestamp',

  mixins: [DruxtFieldMixin],

  props: {
    value: {
      type: String,
      required: true,
    },
  },
}
</script>
