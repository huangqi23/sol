export default {
    name: "product-list-model",

    props: {
        // lists: { type: Array, required: true },
        gutter: { type: Number, default: 8 },
        boxWidth: { type: Number, default: 0 },
        columnNum: { type: Number, default: 2 }
    },
    data() {
        return {
            lists:[
                {"id":"1","title":"商品1","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
                {"id":"2","title":"商品2","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
                {"id":"3","title":"商品3","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
                {"id":"4","title":"商品4","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
                {"id":"5","title":"商品5","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
                {"id":"6","title":"商品6","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
                {"id":"7","title":"商品7","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
                {"id":"8","title":"商品8","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"}
            ],
            lists1:[
                {"id":"1","title":"商品1","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
                {"id":"2","title":"商品2","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
                {"id":"3","title":"商品3","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
                {"id":"4","title":"商品4","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
                {"id":"5","title":"商品5","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
                {"id":"6","title":"商品6","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
                {"id":"7","title":"商品7","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
                {"id":"8","title":"商品8","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"}
            ],
            origWidth:0
        };
    },
    computed: {
        itemSize() {
            let width = this.boxWidth > 0 ?
                this.boxWidth :
                this.origWidth;
            if (width > 0) {
                return (
                    (width -
                        (this.columnNum + 5) * this.gutter) /
                    this.columnNum
                );
            }
            return 200;
        }
    },
    mounted() {
        //console.log(this.$refs.listRoot)
        this.$nextTick(() => {
            this.origWidth = this.$refs.listRoot.offsetWidth;
        })

    }
}
