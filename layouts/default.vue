<template>
  <b-container>
    <b-row>
      <b-col>
        <druxt-breadcrumb component="b-breadcrumb" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <druxt-menu component="b-nav" :depth="2">
          <template #item="{ item: { entity } }">
            <b-nav-item :to="`/${entity.attributes.link.uri.substr(7)}`">
              {{ entity.attributes.title }}
            </b-nav-item>
          </template>

          <template #parent="{ item: { entity, children }}">
            <b-nav-item-dropdown :text="entity.attributes.title">
              <druxt-menu-item :item="{ entity, children: [] }" />

              <druxt-menu-item
                v-for="item in children"
                :key="item.entity.id"
                :item="item"
              />
            </b-nav-item-dropdown>
          </template>
        </druxt-menu>
      </b-col>
      <b-col>
        <nuxt />
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
