import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue';
import SingleUser from '../components/SingleUser.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
