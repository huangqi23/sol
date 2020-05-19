<template>
<div>
  <van-sticky>
    <div class="navbgClass">
      <van-search
        slot="title"
        placeholder="输入商品名称搜索"
        shape="round"
        background="transparent"
        v-model="value"
        @search="onSearch"
        @cancel="onCancel"
      />
    </div>
  </van-sticky>
</div>
</template>

<script>
    export default {
        name: "search-model"
    }
</script>

<style scoped>

</style>
