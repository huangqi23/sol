<template>
<div>
  <van-nav-bar title="我的接龙"  left-arrow @click-left="onClickLeft" />
  <van-tabs v-model="active" sticky animated>
    <van-tab  title="未发布">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item.id" :title="item.dragonName" />
        </van-list>
      </van-pull-refresh>
    </van-tab>

    <van-tab  title="已发布">
      <van-pull-refresh v-model="refreshing1" @refresh="onRefresh1">
        <van-list
          v-model="loading1"
          :finished="finished1"
          finished-text="没有更多了"
          @load="onLoad1"
        >
          <van-cell v-for="item in list1" :key="item.id" :title="item.dragonName" />
        </van-list>
      </van-pull-refresh>
    </van-tab>

  </van-tabs>



</div>
</template>

<script src="./js/myDragon.js"></script>

<style scoped>

</style>
