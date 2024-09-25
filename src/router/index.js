import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from '@/views/course/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'course',
    component: Course
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import(/* webpackChunkName: 'learn' */'@/views/learn/index.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: 'user' */'@/views/user/index.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName: 'error' */'@/views/error/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
