<template>
  <v-app>
    <v-layout>
      <SideNav />
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import SideNav from './SideNav.vue';

</script>
