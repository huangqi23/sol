<template>
  <div class="albums">
    <!--<van-grid class="product-list" column-num="2" :gutter="gutter" :border="false">-->
    <!--<van-grid-item v-for="product in lists" :key="product.id" :to="'/product/detail/'+product.id">-->
    <!--<div class="product-item" :style="{width:itemSize+'px'}">-->
    <!--<img fit="scale-down" :width="itemSize" :height="itemSize" :src="product.image" />-->

    <!--</div>-->
    <!--</van-grid-item>-->
    <!--</van-grid>-->
    <!--<van-grid class="product-list" column-num="2" :gutter="gutter" :border="false">-->
      <!--<van-grid-item  >-->
        <!--<div class="albums-inner">-->
          <!--<div class="albums-tab">-->
            <!--<div class="box" >-->
              <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0001.jpg" class="all studio"  />-->
              <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0002.jpg" class="all studio"/>-->
              <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0003.jpg" class="all studio"/>-->
              <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0004.jpg" class="all studio"/>-->
              <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0005.jpg" class="all studio"/>-->
              <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0006.jpg" class="all studio"/>-->
              <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0001.jpg" class="all studio"/>-->
            <!--</div>-->
            <!--<div class="albums-tab-text">.sim-anim-1 <span>(7 pictures)</span></div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</van-grid-item>-->
    <!--</van-grid>-->
    <!--<div class="albums-tab">-->
    <!--<div class="albums-tab-thumb sim-anim-2">-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0001.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0002.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0003.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0004.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0010.jpg" class="all studio"/>-->
    <!--</div>-->
    <!--<div class="albums-tab-text">.sim-anim-2 <span>(5 pictures)</span></div>-->
    <!--</div>-->


    <!--<div class="albums-tab">-->
    <!--<div class="albums-tab-thumb sim-anim-3">-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0001.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0002.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0003.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0004.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0005.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0006.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0007.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0008.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0011.jpg" class="all studio"/>-->
    <!--</div>-->
    <!--<div class="albums-tab-text">.sim-anim-3 <span>(9 pictures)</span></div>-->
    <!--</div>-->


    <!--<div class="albums-tab">-->
    <!--<div class="albums-tab-thumb sim-anim-4">-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0001.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0002.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0003.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0004.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0005.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0006.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0007.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0008.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0009.jpg" class="all studio"/>-->
    <!--</div>-->
    <!--<div class="albums-tab-text">.sim-anim-4 <span>(9 pictures)</span></div>-->
    <!--</div>-->

    <!--<div class="albums-tab">-->
    <!--<div class="albums-tab-thumb sim-anim-5">-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0001.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0002.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0003.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0004.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0005.jpg" class="all studio"/>-->
    <!--</div>-->
    <!--<div class="albums-tab-text">.sim-anim-5 <span>(5 pictures)</span></div>-->
    <!--</div>-->


    <!--<div class="albums-tab">-->
    <!--<div class="albums-tab-thumb sim-anim-6">-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0001.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0009.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0003.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0004.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0005.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0006.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0007.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0008.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0002.jpg" class="all studio"/>-->
    <!--</div>-->
    <!--<div class="albums-tab-text">.sim-anim-6 <span>(9 pictures)</span></div>-->
    <!--</div>-->


    <!--<div class="albums-tab">-->
    <!--<div class="albums-tab-thumb sim-anim-7">-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0001.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0002.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0003.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0004.jpg" class="all studio"/>-->
    <!--</div>-->
    <!--<div class="albums-tab-text">.sim-anim-7 <span>(4 pictures)</span></div>-->
    <!--</div>-->

    <!--<div class="albums-tab">-->
    <!--<div class="albums-tab-thumb sim-anim-8">-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0001.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0002.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0009.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0004.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0005.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0006.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0007.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0008.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0003.jpg" class="all studio"/>-->
    <!--</div>-->
    <!--<div class="albums-tab-text">.sim-anim-8 <span>(9 pictures)</span></div>-->
    <!--</div>-->

    <!--<div class="albums-tab">-->
    <!--<div class="albums-tab-thumb sim-anim-9">-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0001.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0002.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0003.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0004.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0005.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0009.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0007.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0008.jpg" class="all studio"/>-->
    <!--<img src="https://www.jsdaima.com/Upload/201702/1488260043/studio_0006.jpg" class="all studio"/>-->
    <!--</div>-->
    <!--<div class="albums-tab-text">.sim-anim-9 <span>(9 pictures)</span></div>-->
    <!--</div>-->[

    <!--</div>-->

  </div>

</template>

<script>
    export default {
        name: "index",

        // props: {
        //     // lists: { type: Array, required: true },
        //     gutter: { type: Number, default: 8 },
        //     boxWidth: { type: Number, default: 0 },
        //     columnNum: { type: Number, default: 2 }
        // },
        // data() {
        //     return {
        //         lists:[
        //             {"id":"1","title":"商品1","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
        //             {"id":"2","title":"商品2","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
        //             {"id":"3","title":"商品3","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
        //             {"id":"4","title":"商品4","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
        //             {"id":"5","title":"商品5","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
        //             {"id":"6","title":"商品6","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
        //             {"id":"7","title":"商品7","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"},
        //             {"id":"8","title":"商品8","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7837"}
        //         ],
        //         lists1:[
        //             {"id":"1","title":"商品1","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
        //             {"id":"2","title":"商品2","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
        //             {"id":"3","title":"商品3","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
        //             {"id":"4","title":"商品4","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
        //             {"id":"5","title":"商品5","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
        //             {"id":"6","title":"商品6","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
        //             {"id":"7","title":"商品7","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"},
        //             {"id":"8","title":"商品8","min_price":"1.2","image":"https://tsplus.zhibocloud.cn/api/v2/files/7838"}
        //         ],
        //         origWidth:0
        //     };
        // },
        // computed: {
        //     itemSize() {
        //         let width = this.boxWidth > 0 ?
        //             this.boxWidth :
        //             this.origWidth;
        //         if (width > 0) {
        //             return (
        //                 (width -
        //                     (this.columnNum + 5) * this.gutter) /
        //                 this.columnNum
        //             );
        //         }
        //         return 200;
        //     }
        // },
        // mounted() {
        //     //console.log(this.$refs.listRoot)
        //     this.$nextTick(() => {
        //         this.origWidth = this.$refs.listRoot.offsetWidth;
        //     })
        //
        // }
    }
</script>

<style scoped>

  .box{

    position: relative;

    padding-top: 25%;

    overflow: hidden;

    width: 100%;

    float: left;

  }

  .box img{

    position: absolute;

    top: 0;

    width: 100%;

    height: 100%;

  }
</style>
