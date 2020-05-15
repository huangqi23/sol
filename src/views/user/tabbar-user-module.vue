<template>
  <div>
  <div class="cblock margin-top">
    <van-cell-group>
      <van-cell   icon="more-o" to="/myDragon" title="我的接龙" is-link />
      <!--<van-cell icon="gold-coin-o" @click="sorry" title="我的优惠券" is-link />-->
      <van-cell icon="location-o" to="/member/address" title="我的收货地址" is-link />
      <van-cell icon="info-o" to="/about/index" title="关于我们" is-link />
      <!--<van-cell icon="share" @click="quit" title="退出登录" is-link />-->
    </van-cell-group>
  </div>
  </div>
</template>

<script>
export default {
  name: 'user-module'
};

</script>


<!--<style scoped lang="scss">-->
<!--.user_module {-->
  <!--background-color: #fff;-->
<!--}-->
<!--</style>-->
