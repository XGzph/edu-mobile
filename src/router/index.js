import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    components: () => import(/* webpackChunkName: 'login' */'@/views/login')
  },
  {
    path: '/',
    name: 'course',
    components: () => import(/* webpackChunkName: 'course' */'@/views/course')
  },
  {
    path: '/learn',
    name: 'learn',
    components: () => import(/* webpackChunkName: 'learn' */'@/views/learn')
  },
  {
    path: '/user',
    name: 'user',
    components: () => import(/* webpackChunkName: 'user' */'@/views/user')
  },
  {
    path: '*',
    name: 'error-page',
    components: () => import(/* webpackChunkName: 'error-page' */'@/views/error-page')
  }
]

const router = new VueRouter({
  routes
})

export default router
