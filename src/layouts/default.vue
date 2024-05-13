<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <SideNav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import SideNav from './SideNav.vue';

</script>
