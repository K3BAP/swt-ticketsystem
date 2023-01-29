import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/ListResultsView.vue')
  },
  {
    path: '/configure',
    name: 'configure',
    component: () => import('../views/ConfigureTicketView.vue')
  },
  {
    path: '/tarife',
    name: 'tarife',
    component: () => import('../views/TarifuebersichtView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
