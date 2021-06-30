import { createRouter, createWebHashHistory } from 'vue-router'
import Pomodoro  from '../views/Pomodoro'

const routes = [
  {
    /**Hacer otras vistas dependiendo el work, break, long break?
     * esto reutilizando los botones(haciendolos componentes) */ 
    path: '/',
    name: 'Pomodoro',
    component: Pomodoro,
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
