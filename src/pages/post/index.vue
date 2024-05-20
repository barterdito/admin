<template>
    <v-container>
        <v-row
        v-for="(post,index) in postItems" :key="index"
        class="mx-auto my-auto"
        >
            <v-col>
                <v-card 
                class="pa-4 mx-auto my-auto"
                variant="elevated"
                :width="500"
                :title="post.title"
                :subtitle="post.name"
                >
                <template v-slot:text>
                    <v-img
                    :max-width="500"
                    aspect-ratio="16/9"
                    lazy-src="@/assets/gray.jpeg"
                    :src="post.itemImage"
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
                    <v-btn>Disable</v-btn>
                    <v-btn>Delete</v-btn>
                    {{ useDate().format(post.createdAt, 'fullDateTime24h') }}
                </template>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import {usePostStore} from '@/stores/post.js'
import { useDate } from 'vuetify'


const postItems = ref([])

const usePost = usePostStore()

usePost.getPost().then(value=>{
    postItems.value =value
})

</script>
