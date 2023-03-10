import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/main/main.vue'
// import Main from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      // path: '/empty',
      // name: 'empty',
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ],
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active"
})

export default router
