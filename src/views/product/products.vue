<template>
  <div class="vinput">

    <div >
      <van-cell-group>
        <van-field v-model="dragonName" placeholder="请输入接龙主题" />
        <van-field v-model="description" placeholder="请输入接龙描述" rows="4" autosize type="textarea" maxlength="200" />
      </van-cell-group>
    </div>

    <div class="productTitle">
      <span>添加商品</span>
    </div>
    <div class="productPro">
      <van-cell-group>
        <van-field v-model="value" label="商品名称" />
        <van-field v-model="value" label="规格"  />
        <van-field v-model="value" label="价格"  />
        <van-field v-model="value" label="库存"  />
        <van-field v-model="value" label="是否限制购买"  />
        <van-field v-model="value" label="设置阶梯价格"  />
        <van-field v-model="value" label="物流设置"  />
        <van-field v-model="value" label="备注"  />
        <van-field v-model="value" label="备注"  />
      </van-cell-group>
    </div>


    <div  style="position: fixed;bottom: 3.5rem;width: 86%;">
      <!--<van-cell icon="records" title="我的订单" value="全部订单" is-link to="/member/order" />-->
      <van-row>
        <van-col span="12">
          <van-button round block plain  type="primary" native-type="submit" class="Scancode" @click="saveInfo" >
            保存
          </van-button>
        </van-col>
        <van-col span="12">
          <van-button round block type="primary" native-type="submit" class="Scancode" @click="publish">
            发布
          </van-button>
        </van-col>
      </van-row>
    </div>


    <div style="height: 7rem">
      <div class="bottomtest">
        <span>微信客服：汤达人</span>
      </div>
    </div>


  </div>


</template>

<script src="./js/products.js"></script>


<style scoped>

  .productTitle{
    text-align: left;
    color: #fff;
    font-size: 20px;
  }
  .productPro{
    padding-top: 1.5rem;
  }
  .Scancode {
    /*bottom: 20px;*/
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .bottomtest{
    text-align: center;
    color: #fff;
    font-size: 14px;
    padding-top: 2rem;
  }
</style>
