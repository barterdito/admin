<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-container>
        <v-row>
            <v-col>
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
            </v-col>
            <v-col>
                <v-card 
                :max-width="maxWidth"
                title="Total Number of Post"
                >
                    <v-card-text
                    class="text-h1"
                    >
                    
                    <v-icon icon="mdi-post"></v-icon>
                        {{ post.length }}
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                :max-width="maxWidth"
                >
                    <v-card-text>
                        <BarChar 
                        :chartLabels="chartLabels" 
                        :dataLabel="dataLabel" 
                        :dataCharts="dataCharts"/>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-card :max-width="maxWidth" title="Users">
                    <TableComp 
                        v-model:serverItems="users"
                        v-model:headers="userHeaders"
                    >
                        
                    </TableComp>
                </v-card>
            </v-col>
            <v-col>
                <v-card :max-width="maxWidth" title="Post">
                    <TableComp 
                        v-model:serverItems="post"
                        v-model:headers="postHeaders"
                    >
                        
                    </TableComp>
                </v-card>
            </v-col>
        </v-row>
        
    </v-container>
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

const chartLabels = ref(['Verified', 'Not-Verified',])
const dataLabel = ref('Verified Users')
const dataCharts = ref([30,55])
</script>
