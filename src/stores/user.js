
import { defineStore } from "pinia";
import axios from "axios";

const apiURL = "https://663994011ae792804bec2940.mockapi.io/api/v1/";

const api = axios.create({
    baseURL: apiURL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

export const useUserStore = defineStore('user',()=>{

    const headers = [
        {
          title: 'id',
          align: 'start',
          sortable: false,
          key: 'id',
        },
        { title: 'Name', key: 'name', align: 'end' },
        { title: 'Created At', key: 'createdAt', align: 'end' },
    ]

    const getUsers = async () =>{
        try {
            const response = await api.get('users')
            let userDatas = response.data
            return userDatas
        } catch (error) {
            console.log(error)
        }
    }

    return{
        headers,
        getUsers
    }
})