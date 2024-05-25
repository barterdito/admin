import { defineStore } from "pinia";
//import { ref } from "vue";
import axios from "axios";

const apiURL = "https://663994011ae792804bec2940.mockapi.io/api/v1/"

const api = axios.create({
    baseURL: apiURL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

export const usePostStore = defineStore('post',()=>{
    const headers = [
        {
          title: 'id',
          align: 'start',
          sortable: false,
          key: 'id',
        },
        { title: 'Title', key: 'title', align: 'end' },
        { title: 'Description', key: 'description', align: 'end' },
        { title: 'Name', key: 'name', align: 'end' },
        { title: 'Created At', key: 'createdAt', align: 'end' },
    ]

    const getPost = async () =>{
        try {
            const response = await api.get('post')
            let postData = response.data
            return postData
        } catch (error) {
            console.log(error)
        }
    }

    return{
        headers,
        getPost
    }

})