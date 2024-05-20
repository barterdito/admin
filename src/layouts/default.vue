<template>
  <v-layout>
    <NavigationCard v-if="showNav"/>
    <v-main>
        <router-view />
    </v-main>
  </v-layout>
</template>

<script setup>
// eslint-disable-next-line no-undef
const showNav = ref(true)

</script>
