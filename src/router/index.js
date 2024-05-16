import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = [
  {
    path:'/',
    name:'home',
    component:() => import('@/layouts/default.vue'),
    children:[
      {
        path:'/dashboard',
        name:'dashboard',
        component:()=>import('@/pages/dashboard/')
      },
      {
        path:'/reports',
        name:'reports',
        component:()=>import('@/pages/reports/')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
  routes
})

export default router
