import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('./views/page2.vue')
  }
]

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes,
})

export default router
