import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/about',//设置默认指向的路径
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
        path: '/newOrder',
        name: 'newOrder',
        component: () => import( '../components/order/NewOrder.vue')
    }

]

const router = new VueRouter({
  mode: 'hash',
  base: '/data/web/sol/',
    // base:process.env.BASE_URL,
  routes
})

export default router;
