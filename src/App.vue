<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->

    </div>
    <router-view/>

    <div id="tabbar" class="page page-index">
      <van-tabbar v-model="active" active-color="#bb0000" route>
        <van-tabbar-item
          name="home"
          to="/"
          :icon="active=='home'?'wap-home':'wap-home-o'"
        >
          首页
        </van-tabbar-item>

        <van-tabbar-item
          name="product"
          to="/newOrder"
          :icon="active=='product'?'add':'add-o'"
        >
          发起接龙
        </van-tabbar-item>

        <van-tabbar-item
          name="cart"
          to="/cart"
          :icon="active=='cart'?'friends':'friends-o'"
        >
          附近接龙
        </van-tabbar-item>

        <van-tabbar-item
          name="member"
          to="/member"
          :icon="active=='member'?'manager':'user-o'"
        >
          我的
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>


<script>

    export default {
        name: 'index',
        components: {
        },
        data() {
            return {
                active: 'home'
            }
        },
        watch: {
            active() {
                console.log(this.active)
            },
            '$route'(to) {
                this.setActive(to)
            }
        },
        mounted() {
            this.setActive(this.$route)
        },
        methods: {
            setActive(route) {
                let routeName=route.name;
                if(routeName && routeName.indexOf('index-')===0){
                    let tab = routeName.replace('index-','');
                    if(this.active != tab){
                        this.active = tab
                    }
                }
            }
        }
    };
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-box{
  .page{
    height: calc(100vh - 50px);
    position: relative;
    overflow: auto;
  }
}
</style>
