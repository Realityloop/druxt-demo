<template>
  <b-container>
    <b-row>
      <slot name="header" />
    </b-row>

    <b-row>
      <b-card-group columns>
        <slot />
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'DruxtViewRecipesPage1',
}
</script>
