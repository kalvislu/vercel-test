import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import(/* webpackChunkName: "axios" */ '../views/example/AxiosPage.vue'),
  },
  {
    path: '/pinia',
    name: 'Pinia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pinia" */ '../views/example/PiniaPage.vue'),
  },
  {
    path: '/language',
    name: 'Language',
    component: () => import(/* webpackChunkName: "language" */ '../views/example/LanguagePage.vue'),
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import(/* webpackChunkName: "analytics" */ '../views/example/AnalyticsPage.vue'),
  },
  {
    path: '/router',
    name: 'Router',
    component: () => import(/* webpackChunkName: "router" */ '../views/example/RouterPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
