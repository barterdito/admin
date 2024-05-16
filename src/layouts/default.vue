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
import NavigationCard from '@/components/NavigationCard.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const showNav = ref(true)

// watch(route, (newRoute) => {
//   if(newRoute.params.id != null && newRoute.params.id != undefined){
//     showNav.value = true
//   }
//   else{
//     showNav.value=false
//   }
// })
</script>
