import Home from '../views/home/index.vue'

export default [

    {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue')
    }
];
