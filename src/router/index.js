import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Page.vue'),
  },
  {
      path:'/sepet',
      name:'Sepet',
      component:()=> import('@/components/Box.vue')
  },
  {
    path:'/list',
    name:'List',
    component:()=> import('@/components/Home.vue')
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router