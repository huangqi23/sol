<template>
  <div class="vinput">
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入接龙主题" />
      <van-field v-model="value" placeholder="请输入接龙描述" rows="4" autosize type="textarea" maxlength="200" />
    </van-cell-group>
  </div>
</template>

<script>
    export default {
        name: "description-model"
    }
</script>

<style scoped>

</style>
