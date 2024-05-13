<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="d-flex flex-wrap ga-3">
        
        <v-card :max-width="maxWidth" title="Users">
            <TableComp 
                v-model:serverItems="users"
                v-model:headers="userHeaders"
            >
                
            </TableComp>
        </v-card>

        <v-card :max-width="maxWidth" title="Post">
            <TableComp 
                v-model:serverItems="post"
                v-model:headers="postHeaders"
            >
                
            </TableComp>
        </v-card>

        <v-spacer></v-spacer>
        
        <v-card 
        :max-width="maxWidth"
        title="Total Number of Users"
        >
            <v-card-text
            class="text-h1"
            >
            
            <v-icon icon="mdi-account-circle"></v-icon>
                {{ users.length }}
            </v-card-text>
        </v-card>

        <v-card 
        :max-width="maxWidth"
        title="Total Number of Post"
        >
            <v-card-text
            class="text-h1"
            >
            
            <v-icon icon="mdi-account-circle"></v-icon>
                {{ post.length }}
            </v-card-text>
        </v-card>

        <v-card
        :max-width="maxWidth"
        >
            <v-card-text>
                <BarChar :chartData = "chartData"/>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';


const users = ref([])
const userHeaders = ref([])
const post = ref([])
const postHeaders = ref([])
const useUser = useUserStore()
const usePost = usePostStore()
const maxWidth = ref('500px')

userHeaders.value =useUser.headers
useUser.getUsers().then(value=>{users.value = value})

postHeaders.value =usePost.headers
usePost.getPost().then(value=>{post.value = value})


const chartData = {
        labels: [ 'Verified', 'Not-Verified',],
        datasets: [
          {
            label: 'Verified Users',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      }
</script>
