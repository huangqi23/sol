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
