import { createRouter, createWebHistory } from 'vue-router/auto'

const routes = [
  {
    path:'/',
    component:() => import('@/layouts/Default.vue'),
    children:[
      {
        path:'/login',
        name:'login',
        component:()=>import('@/pages/')
      },
      {
        path:'/dashboard',
        name:'dashboard',
        component:()=>import('@/pages/dashboard/')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
