import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/ListAnimal.vue';
import Details from '../components/DetailsAnimal.vue';



const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/animal/details/:id',
        name: 'details',
        component: Details
      },

  ]
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  


export default router