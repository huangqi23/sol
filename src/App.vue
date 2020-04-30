<template>
  <div id="app">

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
          to="/product"
          :icon="active=='product'?'add':'add-o'"
        >
          发起接龙
        </van-tabbar-item>

        <van-tabbar-item
          name="cart"
          to="/near"
          :icon="active=='cart'?'friends':'friends-o'"
        >
          附近接龙
        </van-tabbar-item>

        <van-tabbar-item
          name="member"
          to="/user"
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
                // console.log(this.active)
            },
            '$route'(to) {
                this.setActive(to)
            }
        },
        mounted() {
            this.setActive(this.$route)
        },
        created(){

            //
            //
            // const queryString = require('query-string')
            // let href = window.location.href;
            // if (href.includes("?code")){
            //     let parsedUrl = queryString.parse(href.split('?')[1])
            //     this.$router.push({path:'/about',query:{code:parsedUrl.code}})
            //     // next({
            //     //     path:'/WxAuth',
            //     //     // query:{
            //     //     //     redirect: to.fullPath
            //     //     // }
            //     // })
            // }else{
            //     let wxUserInfo = localStorage.getItem('wxUserInfo')
            //     if (!wxUserInfo) {
            //         //保存当前路由地址，授权后还会跳到此地址
            //         // sessionStorage.setItem('wxRedirectUrl', to.fullPath)
            //         //请求微信授权,并跳转到 /WxAuth 路由
            //         let appId = 'wxfb5e3f583cf66988'
            //
            //         let url = window.location.href;
            //         let redirectUrl = encodeURIComponent(url)
            //         //判断是否为正式环境
            //         if (window.location.origin.indexOf('https://m.xxxxxx.com') !== -1) {
            //             appId = '正式服的AppId'
            //             redirectUrl = encodeURIComponent('https://m.xxxxxx.com/WxAuth')
            //         }
            //         window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
            //     }
            // }

            // else {
            //     next()
            // }
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
.margin-top{
  margin-top:15px !important;
}
.cblock {
  margin: 0 10px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
}
</style>
