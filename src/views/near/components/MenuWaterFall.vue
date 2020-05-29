<template>
  <div class="container-water-fall">
    <waterfall :col='2'
               :data="list"
               @loadmore="loadmore">
      <div class="cell-item"
           v-for="(item,index) in list"
           :key="item.id">
        <img :src="item.bigImg"   >
        <div class="item-body">
          <div class="item-desc">{{item.dragonName}}</div>
          <!--<div class="item-footer">-->
            <!--<img class="avatar"-->
                 <!--v-lazy="item.author_avatar"-->
                 <!--alt="">-->
            <!--<div class="name">{{item.author_name}}</div>-->
          <!--</div>-->
        </div>
      </div>
    </waterfall>
  </div>
</template>

<script src="./js/MenuWaterFall.js"></script>

<style lang="less" scoped>
.container-water-fall{
  width: 100%;
  box-sizing: border-box;
  background-color: #f5f5f5f5;
  .cell-item{
    width: 100%;
    background: #ffffff;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 1px;
    padding: 0.3rem;
    img {
      border-radius: 12px;
      width: 100%;
      display: block;
      // 等比缩小图片来适应元素的尺寸
      background-size: contain;
      background-image: url('../../../assets/images/placeholderImg/product-img-load.png');
    }
    .item-body {
      padding: 0.6rem;
      .item-desc {
        font-size: 0.8 rem;
        color: #333333;
        line-height: 1rem;
        font-weight: bold;
      }
      .item-footer {
        margin-top: 1rem;
        position: relative;
        display: flex;
        align-items: center;
        .avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
        .name {
          max-width: 150px;
          margin-left: 10px;
          font-size: 0.75rem;
          color: #999999;
        }
      }
    }
  }
}
</style>
