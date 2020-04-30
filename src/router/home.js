import Home from '../views/home/index.vue'

export default [
    {
        path: '/',
        redirect: '/about',//设置默认指向的路径
        name: 'Home',
        component: Home
    },

    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue')
    },
    {
        path: '/newOrder',
        name: 'newOrder',
        component: () => import( '../components/order/NewOrder.vue')
    }
];
