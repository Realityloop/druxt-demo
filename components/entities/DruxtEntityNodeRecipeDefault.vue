<template>
  <article>
    <slot />
  </article>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  name: 'DruxtEntityNodeRecipeDefault',

  mixins: [DruxtEntityMixin],
}
</script>
