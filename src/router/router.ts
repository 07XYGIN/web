import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component:()=>import('../page/index.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router