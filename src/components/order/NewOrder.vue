<template>
  <div>
    <div>{{value}}</div>
    <van-button type="default" @click="loadData()">默认按钮</van-button>
  </div>


</template>

<script>
    import {getStatus} from "../../utils/actions.js";

    export default {
        name: "NewOrder",
        data() {
            return {
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

</style>
