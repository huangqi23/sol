import product from '../views/product/index'
export default [
    {
        path: 'product',
        name: 'product',
        meta: {
            keepAlive: true
        },
        components: { default: product}
    },

];
