<template>
  <div>
    <!--<div>{{value}}</div>-->
    <!--<van-button type="default" @click="loadData()">默认按钮</van-button>-->
    <van-button type="primary" @click="showpopup">选择小区</van-button>
    <van-popup v-model="show" position="bottom" :overlay="true">
      <van-picker show-toolbar title="请选择小区" :columns="columns" @cancel="onCancel" @confirm="onConfirm" @change="onChange" />
    </van-popup>

    <div v-show="showdiv">
      <van-swipe-cell right-width="65" left-width="65"   class="carts-container"  >

      <van-card
        num="2"
        tag="鲜花"
        price="10.00"
        desc="鲜花"
        title="鲜花"
        thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585759155751&di=1081dd18a5c49343e54a8108bac64691&imgtype=0&src=http%3A%2F%2Fimg12.360buyimg.com%2Fn0%2Fjfs%2Ft487%2F186%2F172219343%2F143274%2Faa8475f4%2F54548db1N950b22a0.jpg"
      >
        <view slot="bottom">

          <van-button size="mini">进入接龙</van-button>
        </view>
      </van-card>

      <van-card
        num="10"
        tag="鲜花"
        price="14.00"
        desc="鲜花"
        title="鲜花"
        thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585759155751&di=1081dd18a5c49343e54a8108bac64691&imgtype=0&src=http%3A%2F%2Fimg12.360buyimg.com%2Fn0%2Fjfs%2Ft487%2F186%2F172219343%2F143274%2Faa8475f4%2F54548db1N950b22a0.jpg"
      >
        <view slot="bottom">

          <van-button size="mini">进入接龙</van-button>
        </view>
      </van-card>
      </van-swipe-cell>
    </div>

  </div>


</template>

<script>
    import {getStatus} from "../../utils/actions.js";

    export default {
        name: "NewOrder",
        data() {
            return {
                message:"选择小区",
                show:false,
                showdiv:false,
                columns:['寰宇天下','凤凰苑','星耀城','彩虹城'],
                is_loaded: false,
                images: [],
                fourads:[],
                cates: [],
                goods: [],
                products: [],
                value: "",
                navbgClass: "bg-transparent"
            };
        },
        mounted() {
            // this.loadData();
        },
        methods: {

            // pageScroll() {
            //     let scrollTop = this.$refs.page.scrollTop;
            //     if (scrollTop >= window.innerWidth * 0.4) {
            //         this.navbgClass = "search-box";
            //     } else {
            //         this.navbgClass = "search-box bg-transparent";
            //     }
            // },
            onCancel(){
                this.show = false;
            },
            onConfirm(){
                this.show = false;
            },
            onChange(){
                this.showdiv = true;
            },
            showpopup(){
                this.show = true;
            },
            loadData() {
                this.params = {
                }

                getStatus(this.params).then(res => {
                    this.value = res.data;

                }).catch(err => {
                    this.$dialog(err.message);


                })
            }
        }
    }
</script>

<style scoped>
  view.van-card {
    padding-left: 0;
  }
</style>
