import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/main/main.vue'
import Search from '../pages/search/search.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ],
  linkActiveClass: "", // active class for non-exact links.
  linkExactActiveClass: "active"
})

export default router
