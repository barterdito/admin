<template>
  <div>
    <v-data-table
    :headers="headers"
    :items="serverItems"
    items-per-page="5"
    max-height="200"
    >
    </v-data-table>

    
      <!-- <template v-slot:item.actions="{ item }">
        <v-icon
          class="me-2"
          size="small"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          size="small"
        >
          mdi-delete
        </v-icon>
      </template> -->
  </div>
</template>

<script setup>
//import axios from 'axios'
//import {ref} from 'vue'

const serverItems = defineModel('serverItems')
const headers = defineModel('headers')

</script>
