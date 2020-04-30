import product from '../views/near/index'
export default [
    {
        path: '/near',
        name: 'near',
        meta: {
            keepAlive: true
        },
        components: { default: product}
    },

];
