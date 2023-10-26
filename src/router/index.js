import { createRouter, createWebHistory } from 'vue-router'

import HomeView       from '../views/HomeView.vue'
import CatalogueView  from '../views/CatalogueView.vue'
import CustomView     from '../views/CustomView.vue'
import MapView        from '../views/MapView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',              name: 'HomeView',           component: HomeView },
    { path: '/catalogue',     name: 'CatalogueView',      component: CatalogueView },
    { path: '/custom',        name: 'CustomView',         component: CustomView },
    { path: '/map',           name: 'MapView',            component: MapView },



  ]
})

export default router
