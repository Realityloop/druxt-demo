<template>
  <div v-if="entities && typeof entities[0] !== 'undefined'">
    <b-card-img-lazy
      v-for="entity of entities"
      :key="entity.id"
      :src="
        entity.attributes.uri.value.replace(
          'public://',
          '/sites/default/files/'
        )
      "
    />
  </div>
</template>

<script>
import { DruxtFieldResponsiveImage } from 'druxt-entity'

export default DruxtFieldResponsiveImage
</script>

<style scoped>
img {
  width: 100%;
}
</style>
