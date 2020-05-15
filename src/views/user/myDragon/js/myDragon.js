import {getDragonList } from "../../../../utils/actions";
export default {
    name: "myDragon",
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
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
        }
    }
}

