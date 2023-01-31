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
    props: {
      beginStage: 0
    },
    component: () => import('../views/BuyTicketView.vue')
  },
  {
    path: '/configure',
    name: 'configure',
    props: {
      beginStage: 1
    },
    component: () => import('../views/BuyTicketView.vue')
  },
  {
    path: '/tarife',
    name: 'tarife',
    component: () => import('../views/TarifuebersichtView.vue')
  },
  {
    path: '/mytickets',
    name: 'mytickets',
    component: () => import('../views/MyTicketsView.vue')
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: () => import('../views/ShowTicketView.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
