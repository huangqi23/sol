import SearchModel from "../search";
import SwipeModel from "../swipe";
import ProductListModel from "../product-list"
import {wecahtLogin} from "../../../utils/actions"
export default {
    name: "index",
    components: {SwipeModel, SearchModel,ProductListModel},
    created(){

        //本地开发注释
        sessionStorage.code =   this.getUrlKey("code");
        sessionStorage.setItem("userId",1)
        if (!sessionStorage.code || sessionStorage.code === "" || sessionStorage.code === "null") {
            return;
        }

        if (sessionStorage.openid === undefined || String(sessionStorage.code) === "" || String(sessionStorage.openid) === "") {
            wecahtLogin({code: sessionStorage.code}).then(res => {
                if (res.success) {
                    console.log(res)
                    sessionStorage.setItem("nickname", res.data.userInfo.nickname);
                    sessionStorage.setItem("openid", res.data.userInfo.openid)
                    sessionStorage.setItem("headimgUrl", res.data.userInfo.headimgUrl)
                    sessionStorage.setItem("userId", res.data.userInfo.id)
                    console.log(sessionStorage)
                    // user = res.data.userInfo;
                } else {
                    return false
                }
            })

        } else {
            console.log("sb")
        }
    },
    methods:{
        getUrlKey(name){
            return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.href) || [, ""])[1].replace(/\+/g, "%20")) || null;
        }
    }
    // comments:{
    //     [search.name]: search,
    //     [swipe.name]: swipe,
    //
    // }
}
