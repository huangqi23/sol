<template>
  <div class="vinput">
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

  </div>


</template>

<script>
    export default {
        name: "products-model"
    }
</script>

<style scoped>

  .productTitle{
    text-align: left;
    color: #fff;
    font-size: 20px;
  }
  .productPro{
    padding-top: 1.5rem;
  }

</style>
