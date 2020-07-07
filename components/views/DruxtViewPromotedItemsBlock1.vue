<template>
  <b-row>
    <b-container class="mb-3 mt-3 mb-md-5 mt-md-5">
      <b-row>
        <slot v-bind="{ wrapper }" />
      </b-row>
    </b-container>
  </b-row>
</template>

<script>
import { DruxtViewsViewMixin } from 'druxt-views'

export default {
  name: 'DruxtViewPromotedItemsBlock1',

  mixins: [DruxtViewsViewMixin],

  computed: {
    wrapper: () => ({
      component: 'b-col',
      props: {
        cols: 12,
        md: 6,
      },
    }),
  },
}
</script>
