import { get, post } from "@/utils/ajax";

//获取程序配置
export function getConfig() {
    return get("static/config.json", null, { baseURL: "./" });
}

export function getStatus(params) {
    return post("/status/getStatus", params);
}

//微信登陆
export function wecahtLogin(params) {
    return post("/status/wecahtLogin", params);
}



/////////////////商品管理begin/////////////////

//添加接龙
export function saveDragon(params) {
    return post("/goods/saveDragon", params);
}

//获取接龙列表
export function getDragonList(params) {
    return post("/goods/getDragonList", params);
}




/////////////////商品管理end/////////////////
