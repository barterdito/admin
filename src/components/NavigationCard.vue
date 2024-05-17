<template>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
     
        <template v-if="$vuetify.display.mdAndUp">
          <v-toolbar-title>
            <v-img src="@/assets/logo.png" width="150"></v-img>
          </v-toolbar-title>
        </template>
        <v-spacer></v-spacer>

        <v-btn icon="mdi-bell" variant="text"></v-btn>
        <v-btn icon="mdi-logout" variant="text" @click.stop="$router.push('/')"></v-btn>

      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="start"
        temporary
      >
        <v-list>
          <v-list-item
          v-for="(nav,index) in itemsNav"
          :key="index"
          :title="nav.title"
          :prepend-icon="nav.icon"
          :to="nav.to"
          >

          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script setup>
// eslint-disable-next-line no-undef
const drawer = ref(false)
const itemsNav = [
  {title:'Dashboard',to:'/dashboard',icon:'mdi-view-dashboard'},
  {title:'Users',to:'/users',icon:'mdi-account-group'},
  {title:'Post',to:'/post',icon:'mdi-post'},
  {title:'Reports',to:'/reports',icon:'mdi-chart-box'},
]

</script>
