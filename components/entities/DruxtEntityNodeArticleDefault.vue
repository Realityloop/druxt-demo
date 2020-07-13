<template>
  <article>
    <b-row class="mb-4">
      <b-col>
        <slot name="field_tags" />
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col>
        <slot name="field_summary" />
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col>
        <slot name="field_media_image" />
        <slot name="body" />
      </b-col>
      <b-col md="4">
        <druxt-block-region name="sidebar" :theme="theme" />
      </b-col>
    </b-row>
  </article>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  name: 'DruxtEntityNodeArticleDefault',

  mixins: [DruxtEntityMixin],

  computed: {
    theme: () => 'umami',
  },
}
</script>
