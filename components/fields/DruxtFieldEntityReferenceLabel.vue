<template>
  <div v-if="entities && typeof entities[0] !== 'undefined'">
    <component
      class="mr-1"
      :is="component"
      v-for="(entity, key) of entities"
      :key="key"
      v-bind="entity.props || false"
    >
      <b-badge pill>{{ entity.text }}</b-badge>
    </component>
  </div>
</template>

<script>
import { DruxtFieldEntityReferenceLabel } from 'druxt-entity'

export default DruxtFieldEntityReferenceLabel
</script>
