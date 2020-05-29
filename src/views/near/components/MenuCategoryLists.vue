<template>
  <div id="allMenuWrapper">
    <div v-show="isShowMenuList" class="menuLists">
      <div class="menuWrapper">
        <span class="menuCategoryTitle"
        v-if="recentlyChooseLists.length>0">{{'最近'}}</span>
        <ul class="contentTip">
          <li v-for="(item,index) in recentlyChooseLists"
              :key="item.id"
              class="item">{{item.name}}</li>
        </ul>



        <span class="menuCategoryTitle">{{'接龙分类'}}</span>
        <ul class="contentTip">
          <li class="item"
              v-for="(item,index) in todayMenuCategoryLists"
              :key="item.id"
              @click="menuTitleClick(index)">{{item.name}}</li>
        </ul>
      </div>

    </div>

    <MenuWaterFall v-show="!isShowMenuList"></MenuWaterFall>
  </div>
</template>

<script>
    import MenuWaterFall from './MenuWaterFall'

    export default {
        name: "MenuCategoryLists",
        props:{
            todayMenuCategoryLists: Array,
            isShowMenuList: Boolean,
        },
        data (){
            return{
                recentlyChooseLists:[]
            }
        },
        components:{
            MenuWaterFall
        }
    }
</script>

<style lang="less" scoped>
.menuLists{
  padding: 0.5rem;
  width: 100%;
  background-color: white;
  overflow: auto;
  .menuCategoryTitle{
    font-size: 0.6rem;
    color: grey;
  }
  .menuWrapper{
    .contentTip{
      padding: 0.5rem;
      display: flex;
      flex-flow: row wrap; //从左往右，自动换行
      .item{
        text-align: center;
        margin-right: 1.45rem;
        margin-top: 0.4rem;
        /*width: 3.3rem;*/
        line-height: 1.5rem;
        height: 1.5rem;
        font-size: 0.6rem;
        border: 1px solid #dedede;
        color: rgba(0, 0, 0, 0.7);
        border-radius: 1rem;
      }
    }
  }
}
</style>
