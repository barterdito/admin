<template>
  <v-layout>
    <NavigationCard v-if="showNav"/>
    <v-main>
      <v-container fluid style="background-color: #fafafa;">
        <router-view />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
// eslint-disable-next-line no-undef
const showNav = ref(true)

</script>
