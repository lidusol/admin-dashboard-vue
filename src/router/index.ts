import { createRouter, createWebHistory } from 'vue-router'

import TheDashboard from '@/components/TheDashboard.vue'
import DisputePage from '@/components/DisputePage.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: TheDashboard,
  },
  {
    path: '/transaction-status',
    name: 'NewPage',
    component: DisputePage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
