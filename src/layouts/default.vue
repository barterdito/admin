<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-layout>
    <SideNav />
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup>
import SideNav from './SideNav.vue';

</script>
