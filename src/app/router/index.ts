import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }else
    {
      return {top: 0}
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/pages/MainPage.vue")
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import("@/pages/ProjectsPage.vue")
    },
    {
      path: '/project/:id',
      name: 'project',
      component: () => import("@/pages/ProjectPage.vue")
    }
  ]
})

export default router
