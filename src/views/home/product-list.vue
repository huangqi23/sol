<template>
  <div  ref="listRoot" >
    <van-tabs v-model="active" sticky animated>
      <van-tab  title="推荐">
        <van-grid class="product-list" column-num="2" :gutter="gutter" :border="false">
          <van-grid-item v-for="product in lists" :key="product.id" :to="'/product/detail/'+product.id">
            <div class="product-item" :style="{width:itemSize+'px'}">
              <img fit="scale-down" :width="itemSize" :height="itemSize" :src="product.image" />
              <h4 class="card-title van-ellipsis">{{product.title}}</h4>
              <div class="prodinfo">
                <div class="price-group">
                  <div class="price">{{product.min_price}}</div>
                </div>
                <!--<van-button class="my-btn"><van-icon name="cart-o"></van-icon></van-button>-->
              </div>
            </div>
          </van-grid-item>
        </van-grid>
      </van-tab>

      <van-tab  title="关注">
        <van-grid class="product-list" column-num="2" :gutter="gutter" :border="false">
          <van-grid-item v-for="product in lists1" :key="product.id" :to="'/product/detail/'+product.id">
            <div class="product-item" :style="{width:itemSize+'px'}">
              <img fit="scale-down" :width="itemSize" :height="itemSize" :src="product.image" />
              <h4 class="card-title van-ellipsis">{{product.title}}</h4>
              <div class="prodinfo">
                <div class="price-group">
                  <div class="price">{{product.min_price}}</div>
                </div>
                <!--<van-button class="my-btn"><van-icon name="cart-o"></van-icon></van-button>-->
              </div>
            </div>
          </van-grid-item>
        </van-grid>
      </van-tab>

    </van-tabs>


  </div>
  <!--<van-grid :column-num="2">-->
  <!--<van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />-->
  <!--</van-grid>-->
</template>

<script src="./js/product-list.js"></script>

<style scoped>
  img{border-top-right-radius:10px;border-top-left-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;}
</style>
