import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '@/pages/Home/index.vue'
// @ts-ignore
import { urlPath } from '@/utils'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: urlPath.Home.path,
    name: urlPath.Home.name,
    component: Home
  },
  {
    path: urlPath.Products.path,
    name: urlPath.Products.name,
    component: () => import('../pages/Products/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
