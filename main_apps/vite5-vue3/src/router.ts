import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/home.vue'

const routes: Array<RouteRecordRaw> = [
 {
    path: '/',
    name: 'Layout',
    component: () => import('./components/layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/subapp1/:page*',
        name: 'subapp1',
        component: () => import('./views/subapp1.vue'),
      },
      {
        path: '/subapp2/:page*',
        name: 'subapp2',
        component: () => import('./views/subapp2.vue'),
      }
    ]
 }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
