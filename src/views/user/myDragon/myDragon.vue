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

            <div  class="mDragon" v-for="item in list">
              <div class="row1">
                <span class="a1">{{item.dragonName}}</span>
              </div>
              <div class="images">
                <van-grid class="image_grids" :column-num="3" :border="false" >
                  <van-grid-item v-for="value in 3" :key="value" icon="photo-o" >
                    <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                  </van-grid-item>
                </van-grid>
              </div>
              <div class="row3">
                <span>一群人正赶来接龙</span>
              </div>
              <div class="row4">
                <span>未发布</span>
              </div>


            </div>
            <!--<van-cell v-for="item in list" :key="item.id" :title="item.dragonName" value = "1" label = "2"/>-->
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
            <div  class="mDragon" v-for="item in list1">
              <van-row class="row1">
                <van-col span="20">
                  <span class="a1">{{item.dragonName}}</span>
                </van-col>
                <van-col span="4">
                  <span class="a1">分享></span>
                </van-col>
              </van-row>

              <van-row>
                <van-grid class="images"  :column-num="3" :border="false">
                  <van-grid-item v-for="value in 3" :key="value" icon="photo-o" >
                    <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                  </van-grid-item>
                </van-grid>
              </van-row>


              <van-row class="row3">
                <van-col span="20">
                  <span>一群人正赶来接龙</span>
                </van-col>

              </van-row>

              <van-row class="row4">
                <van-col span="20">
                  <span>未发布</span>
                </van-col>

              </van-row>


              <!--</van-row>-->
              <!--<div class="row1">-->
              <!--<span class="a1">{{item.dragonName}}</span>-->
              <!--</div>-->
              <!--<div class="images">-->
              <!--<van-grid :column-num="3">-->
              <!--<van-grid-item v-for="value in 3" :key="value" icon="photo-o" >-->
              <!--<van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />-->
              <!--</van-grid-item>-->
              <!--</van-grid>-->
              <!--</div>-->
              <!--<div class="row3">-->
              <!--<span>一群人正赶来接龙</span>-->
              <!--</div>-->
              <!--<div class="row4">-->
              <!--<span>未发布</span>-->
              <!--</div>-->


            </div>

            <!--<van-cell v-for="item in list1" :key="item.id" :title="item.dragonName" />-->
          </van-list>
        </van-pull-refresh>
      </van-tab>

    </van-tabs>



  </div>
</template>

<script src="./js/myDragon.js"></script>

<style>
  .row1{
    background-color: white;
    border-radius:15px 15px 0 0;

  }
  .row3{
    height: 4rem;
    background-color: white;

  }
  .row4{
    background-color: white;
    border-radius:0 0 15px 15px ;
  }
  .mDragon{
    margin: 1rem;

    border-radius:15px;
  }

</style>
