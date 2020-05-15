import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, Dialog,Button,Popup,Picker,Card ,Row, Col ,Grid, GridItem,Cell,
    CellGroup,Icon,Sticky,Search,Swipe, SwipeItem,Divider, Tab, Tabs,Form ,Field,List,NavBar, PullRefresh        } from 'vant';
import 'vant/lib/index.css';

Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Dialog);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Sticky);
Vue.use(Search ).use(Swipe).use(SwipeItem).use(Divider ).use(Tab).use(Tabs).use(Form).use(Field).use(List).use(NavBar ).use(PullRefresh );
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
