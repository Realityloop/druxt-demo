<template>
  <b-card
    :class="{ shadow: hover }"
    tag="article"
    :title="entity.attributes.title"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <slot />

    <b-button
      block
      :class="{ 'mt-3': true, shadow: hover }"
      nuxt
      :to="entity.attributes.path.alias"
      :variant="hover ? 'primary' : 'secondary'"
    >
      View {{ schema.config.bundle }} <b-icon icon="arrow-right" />
    </b-button>
  </b-card>
</template>

<script>
import { BIcon, BIconArrowRight } from 'bootstrap-vue'
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  name: 'DruxtEntityCard',

  mixins: [DruxtEntityMixin],

  components: { BIcon, BIconArrowRight },

  data: () => ({
    hover: false,
  }),
}
</script>
