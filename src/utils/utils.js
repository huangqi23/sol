
export default {
    formatDate(obj){ //时间戳转年月日
        var date = new Date(obj);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
    }
}
//
//
// function formatDate(obj){ //时间戳转年月日
//     var date = new Date(obj);
//     var y = date.getFullYear();
//     var m = date.getMonth() + 1;
//     m = m < 10 ? ('0' + m) : m;
//     var d = date.getDate();
//     d = d < 10 ? ('0' + d) : d;
//     var h = date.getHours();
//     h = h < 10 ? ('0' + h) : h;
//     var minute = date.getMinutes();
//     var second = date.getSeconds();
//     minute = minute < 10 ? ('0' + minute) : minute;
//     second = second < 10 ? ('0' + second) : second;
//     return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
// }
//
// function Trim(str){
//     var param = str.replace(/(^\s*)|(\s*$)/g, "");
//     var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\]<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
//     var rs = "";
//     for (var i = 0; i < param.length; i++) {
//         rs = rs+param.substr(i, 1).replace(pattern, '');
//     }
//     return rs;
// }
//
// function setCookie(name, value)
// {
//     var argv = setCookie.arguments;
//     var argc = setCookie.arguments.length;
//     var expires = (argc > 2) ? argv[2] : null;
//     if(expires!=null)
//     {
//         var LargeExpDate = new Date ();
//         LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));
//     }
//     document.cookie = name + "=" + escape (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()));
// }
//
// function getCookie(Name)
// {
//     var search = Name + "="
//     if(document.cookie.length > 0)
//     {
//         offset = document.cookie.indexOf(search)
//         if(offset != -1)
//         {
//             offset += search.length
//             end = document.cookie.indexOf(";", offset)
//             if(end == -1) end = document.cookie.length
//             return unescape(document.cookie.substring(offset, end))
//         }
//         else return ""
//     }
// }
//
// function deleteCookie(name)
// {
//     var expdate = new Date();
//     expdate.setTime(expdate.getTime() - (86400 * 1000 * 1));
//     setCookie(name, "", expdate);
// }
//
// /* 手机号隐藏中间4位*/
// function hidd_tel(param_tel){
//     return param_tel.substr(0,3) + "****" + param_tel.substr(7);
// }
//
// /**
//  * [verifi_fuwuqi 只能填写整数，不包括0]
//  */
// function verifi_fuwuqi(str){
//     var zf = /^(-)?[1-9][0-9]*$/
//     if(!zf.test(str)){
//         layer.alert('只能填写整数，不包括0');
//         return false;
//     }
// }
//
// /**
//  * [verifi_amount 只能填写数字【正整数、正浮点数】
//  */
// function verifi_amount(str) {
//     var positive_integer = /^[0-9]*[1-9][0-9]*$/　　//正整数
//     var float_number     = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/  //正浮点数
//     if (!positive_integer.test(str) && !float_number.test(str)) {
//         layer.alert('只能填写数字');
//         return false;
//     }else{
//         return true;
//     }
// }
//
// /**
//  * [verifi_amount_two 只能填写数字【正整数、正浮点数】
//  */
// function verifi_amount_two(str) {
//     var positive_integer = /^[0-9]*[1-9][0-9]*$/　　//正整数
//     var float_number     = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/  //正浮点数
//     if (!positive_integer.test(str) && !float_number.test(str)) {
//         return false;
//     }else{
//         return true;
//     }
// }
//
// /**
//  * [verifi_orderid 验证订单号，微信订单号(32位)，支付宝订单号(28位)]
//  */
// function verifi_orderid(wx_zfb, params)
// {
//     let site = ['runoob', 'google', 'taobao'];
//     wx_reg   = /^[A-Za-z0-9]{28}$/;
//     zfb_reg  = /^[A-Za-z0-9]{32}$/;
//     if(wx_zfb == 28){
//         return wx_reg.test(params);
//     }else if(wx_zfb == 32){
//         return zfb_reg.test(params);
//     }
// }
//
// // 验证是否是手机号
// function checkPhone(phone){
//     if(!(/^1[3456789]\d{9}$/.test(phone))){
//         return false;
//     }else{
//         return true;
//     }
// }
//
// // 将秒转换为 时：分：秒
// function formatSeconds(value) {
//     var secondTime = parseInt(value);// 秒
//     var minuteTime = 0;// 分
//     var hourTime   = 0;// 小时
//     if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
//         //获取分钟，除以60取整数，得到整数分钟
//         minuteTime = parseInt(secondTime / 60);
//         //获取秒数，秒数取佘，得到整数秒数
//         secondTime = parseInt(secondTime % 60);
//         //如果分钟大于60，将分钟转换成小时
//         if(minuteTime > 60) {
//             //获取小时，获取分钟除以60，得到整数小时
//             hourTime = parseInt(minuteTime / 60);
//             //获取小时后取佘的分，获取分钟除以60取佘的分
//             minuteTime = parseInt(minuteTime % 60);
//         }
//     }
//     var result = "" + parseInt(secondTime) + " 秒 ";  // 秒
//
//     if(minuteTime > 0) {
//         result = "" + parseInt(minuteTime) + " 分 " + result;  // 分钟
//     }
//     if(hourTime > 0) {
//         result = "" + parseInt(hourTime) + " 时 " + result;  // 小时
//     }
//     return result;
// }
//
// function onClose_all()
// {
//     var is_lock_data = _.indexOf(getCookie('lock_data'), '[');
//     if(is_lock_data == -1) return false;
//     var lock_data_obj      = JSON.parse(getCookie('lock_data'));
//     var onClose_all_params = {
//         cancel_type : 2,
//         params      : lock_data_obj[1]
//     }
//     $.ajax({
//         type  : "POST",
//         url   : lock_data_obj[0],
//         data  : onClose_all_params,
//         async : true,
//         beforeSend: function () {
//             jz = layer.load(0, {shade: 0.1});
//         },
//         error: function (request) {
//             layer.close(jz);
//         },
//         success: function (backdata) {
//             layer.close(jz);
//             deleteCookie('lock_data');
//         }
//     });
// };
