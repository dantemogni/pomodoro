import { createRouter, createWebHashHistory } from 'vue-router'
import Pomodoro  from '../views/Pomodoro/Pomodoro'

const routes = [
  {
    path: '/:type',
    name: 'Pomodoro',
    component: Pomodoro
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import( '../views/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
