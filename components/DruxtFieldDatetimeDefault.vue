<template>
  <div>{{ value }}</div>
</template>

<script>
import { DruxtFieldMixin } from 'druxt-entity'

export default {
  name: 'DruxtFieldDatetimeDefault',

  mixins: [DruxtFieldMixin],

  props: {
    value: {
      type: String,
      required: true,
    },
  },
}
</script>
