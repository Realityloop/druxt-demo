<template>
  <b-list-group>
    <b-list-group-item v-for="(item, key) of items" :key="key">
      {{ item }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { DruxtFieldString } from 'druxt-entity'

export default {
  name: 'DruxtFieldStringFieldIngredients',

  extends: DruxtFieldString,
}
</script>
