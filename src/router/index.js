import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Inicio.vue';
import SingleUser from '../components/SingleUser.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Inicio
  },
  {
    path: '/single/:id/:searcher',
    name: 'detail',
    component: SingleUser
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
