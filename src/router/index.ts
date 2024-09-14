import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: { title: 'Home' } // Meta information
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: 'Login' },
      component: () => import('@/views/Login.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + ' - Naija Emporium'
  }
  next()
})

export default router
