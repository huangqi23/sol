<template>

  <div class="swipe-box">
    <!--<van-swipe :autoplay="3000">-->
      <!--<van-swipe-item v-for="(image, index) in images" :key="index">-->
        <!--<image :src="image" fit="cover" />-->
      <!--</van-swipe-item>-->

    <!--</van-swipe>-->

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in images">
        <img :src="item" alt="" width="100%">
      </van-swipe-item>
    </van-swipe>

  </div>

</template>

<script>
    export default {
        name: "swipe-model",
        data(){
            return{
                // images: [
                //     'https://img.yzcdn.cn/vant/apple-1.jpg',
                //     'https://img.yzcdn.cn/vant/apple-2.jpg'
                // ]

                images: [
                    'https://tsplus.zhibocloud.cn/api/v2/files/7837',
                    'https://tsplus.zhibocloud.cn/api/v2/files/7838',
                    'https://tsplus.zhibocloud.cn/api/v2/files/19637'
                ]

                // images: [
                //     'https://img.yzcdn.cn/vant/apple-1.jpg',
                //     'https://img.yzcdn.cn/vant/apple-2.jpg'
                // ]
                // images: [{"image":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoUCjXic2lqTNHBXCP4ia9gaPUwM5JQGnNn9KQhicZCAL0oZA5Wmk3N4xZL13wceUoicb9eSBicaQInsyQ/132"},{"image":""}],
            }
        }
    }
</script>

<style scoped>
  .swipe-box {
    margin: 0 10px;
    position: relative;
    padding-top: 1%;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
  }
  /*.swipe-box{*/
    /*border-top-right-radius:10px;*/
    /*border-top-left-radius:10px;*/
    /*border-bottom-left-radius:10px;*/
    /*border-bottom-right-radius:10px;*/
  /*}*/
</style>
