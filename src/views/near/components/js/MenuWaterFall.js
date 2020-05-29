import {getDragonList, getNearDragonList} from "../../../../utils/actions";

export default {
    name: "MenuWaterFall.vue",
    data(){
        return{
            list: [],
            page: 0
        }
    },
    mounted(){
        this._initData();
    },
    methods:{
        async _initData () {

            getNearDragonList({
                page: 0,
                size: 10,
            }).then(res => {
                if (res.success) {
                    this.list = res.data.content;
                } else {
                    return false
                }
            })


            // // 第一条数据
            // let ref = await getNearDragonList('/lk01');
            // if (ref.success) {
            //     this.menulistDetail = ref.data.big_recommend.list;
            //     this.data = ref.data.big_recommend.list;
            // }
        },
        loadmore (num) {
            let index = ++this.page;
            let param;
            if (index > 31) {
                Toast({
                    message: '到底了,别拉了!',
                    duration: 800
                });
                return;
            } else {
                param = {
                    page: index,
                    size: 10,
                };
            }
            getTodayMenuDetail(param).then(response => {
                if (response.success) {
                    let newArray = response.data.big_recommend.list;
                    this.data = this.data.concat(newArray);
                }
            });
        }
    }
}
