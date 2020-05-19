import tab_user from '../views/user/tabbar-user'
import myDragon from '../views/user/myDragon/myDragon'
export default [
    {
        path: 'user',
        name: 'user',
        meta: {
            keepAlive: true
        },
        components: { default: tab_user}
    },
    {
        path: 'myDragon',
        name: 'myDragon',
        meta: {
            keepAlive: true
        },
        components: { default: myDragon}
    },

];
