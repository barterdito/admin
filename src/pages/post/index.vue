<template>
    <v-container>
        <v-row
        dense
        class="mx-auto my-auto"
        >
            <v-col
            cols="12"
            v-for="(post,index) in postItems" :key="index"
            >
                <v-card 
                class="pa-4 mx-auto my-auto"
                variant="elevated"
                :max-width="500"
                :title="post.title"
                :subtitle="post.name"
                >
                <template v-slot:text>
                    <v-img
                    :max-width="500"
                    aspect-ratio="16/9"
                    lazy-src="@/assets/gray.jpeg"
                    :src="post.itemImage"
                    rounded="lg"
                    >
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                                <v-progress-circular
                                color="grey-lighten-4"
                                indeterminate
                                ></v-progress-circular>
                            </div>
                        </template>
                    </v-img>
                    <div>
                        {{ post.description }}
                    </div>
                </template>
                <template v-slot:append>
                    <div>{{ post.category }}</div>
                </template>
                <template v-slot:actions>
                    <v-btn variant="elevated" rounded="lg">Disable</v-btn>
                    <v-btn variant="elevated" rounded="lg">Delete</v-btn>
                    <v-spacer></v-spacer>
                    <v-divider vertical class="ms-3" inset></v-divider>
                    {{ useDate().format(post.createdAt, 'fullDateTime24h') }}
                </template>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

<!-- <v-infinite-scroll :items="items" :onLoad="load">
  <template v-for="(item, index) in items" :key="item">
    <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
      Item number #{{ index }}
    </div>
  </template>
</v-infinite-scroll> -->
</template>

<script setup>
import {usePostStore} from '@/stores/post.js'
import { useDate } from 'vuetify'

const usePost = usePostStore()
const postItems = ref(await usePost.getPost())

//console.log(postItems.value)

const items = ref(Array.from({ length: 10 }, (k, v) => v + 1))

//   async function api () {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1))
//       }, 1000)
//     })
//   }
//   async function load ({ done }) {
//     // Perform API call
//     const res = await api()

//     items.value.push(...res)

//     done('ok')
//   }
</script>
