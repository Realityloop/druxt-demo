<template>
  <div>
    <a :href="uri">{{ title }}</a>
  </div>
</template>

<script>
import { DruxtFieldMixin } from 'druxt-entity'

export default {
  name: 'DruxtFieldLink',

  mixins: [DruxtFieldMixin],

  props: {
    title: {
      type: String,
      required: true,
    },
    uri: {
      type: String,
      required: true,
    },
  },
}
</script>
