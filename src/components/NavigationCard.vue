<template>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>
          <v-img src="@/assets/logo.png" width="150"></v-img>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-bell" variant="text"></v-btn>
          <v-btn icon="mdi-logout" variant="text" to="/"></v-btn>
        </template>

      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list>
          <v-list-item
          v-for="([title,route,icon]) in itemsNav"
          :key="title"
          :title="title"
          :value="title"
          :prepend-icon="icon"
          :to="route"
          >

          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script setup>

const drawer = ref(false)
const itemsNav = [
  ['Dashboard','dashboard','mdi-view-dashboard'],
  ['Users','users','mdi-account-group'],
  ['Post','post','mdi-post'],
  ['Reports','reports','mdi-chart-box']
]

</script>
