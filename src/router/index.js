import AppLayout from '@/views/AppLayout.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import SchoolRegister from '@/views/SchoolRegister.vue'
import CalendarView from '@/views/CalendarView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'SchoolRegister',
    component: SchoolRegister,
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/app-layout',
    name: 'AppLayout',
    component: AppLayout,
  },
  {
    path: '/calendar-view',
    name: 'CalendarView',
    component: CalendarView,
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
