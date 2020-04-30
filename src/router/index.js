import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import user from './user'
import product from './product'
import near from './near'


Vue.use(VueRouter)

// const routes = [
//     ...home, ...user
// ]

const router = new VueRouter({
  mode: 'hash',
  base: '/data/web/sol/',
    // base:process.env.BASE_URL,
  routes:[
      ...home,
      ...user,
      ...product,
      ...near
  ]
})


// router.beforeEach((to, from, next) => {
//
//     //判断如果不是微信打开，则不去认证
//     // if (!/micromessenger/i.test(navigator.userAgent)) {
//     //     next()
//     //     return
//     // }
//     //不要对 WxAuth 路由进行拦截，不进入 WxAuth 路由就拿不到微信返回的授权 code
//     if (to.name === 'WxAuth') {
//         next()
//         return
//     }
//     let href = window.location.href;
//     if (href.includes("?code")){
//         next({
//             path:'/WxAuth',
//             query:{
//                 redirect: to.fullPath
//             }
//         })
//     }
//     let wxUserInfo = localStorage.getItem('wxUserInfo')
//     if (!wxUserInfo) {
//         //保存当前路由地址，授权后还会跳到此地址
//         sessionStorage.setItem('wxRedirectUrl', to.fullPath)
//         //请求微信授权,并跳转到 /WxAuth 路由
//         let appId = 'wxfb5e3f583cf66988'
//
//          let url = window.location.href;
//         let redirectUrl = encodeURIComponent(url)
//         //判断是否为正式环境
//         if (window.location.origin.indexOf('https://m.xxxxxx.com') !== -1) {
//             appId = '正式服的AppId'
//             redirectUrl = encodeURIComponent('https://m.xxxxxx.com/WxAuth')
//         }
//         window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
//     } else {
//         next()
//     }
// })

export default router;
