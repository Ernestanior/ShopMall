import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/order/Order.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart/Cart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/Profile.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/detail/GoodsDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
