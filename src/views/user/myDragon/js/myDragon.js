import {getDragonList } from "../../../../utils/actions";
export default {
    name: "myDragon",
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            refreshing: false,

            list1: [],
            loading1: false,
            finished1: false,
            refreshing1: false,
        };
    },
    methods:{
        onClickLeft() {
            this.$router.back();
        },
        onLoad(){
            getDragonList({
                userId: sessionStorage.userId,
                isPublish: 0,
            }).then(res => {
                if (res.success) {
                    this.list = res.data.content;
                } else {
                    return false
                }
            })
            // 加载状态结束
            this.loading = false;
            // 数据全部加载完成
            if (this.list.length >= 1) {
                this.finished = true;
            }
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        },

        onLoad1(){
            getDragonList({
                userId: sessionStorage.userId,
                isPublish: 1,
            }).then(res => {
                if (res.success) {
                    this.list1 = res.data.content;
                } else {
                    return false
                }
            })
            // 加载状态结束
            this.loading1 = false;
            // 数据全部加载完成
            if (this.list1.length >= 1) {
                this.finished1 = true;
            }
        },
        onRefresh1() {
            // 清空列表数据
            this.finished1 = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading1 = true;
            this.onLoad1();
        }
    }
}

