<template>
  <div class="vinput">

    <div >
      <van-cell-group>
        <van-field v-model="dragonName" placeholder="请输入接龙主题" />
        <van-field v-model="description" placeholder="请输入接龙描述" rows="4" autosize type="textarea" maxlength="200" />
      </van-cell-group>
    </div>


    <div class="productTitle">
      <van-row>
        <van-col span="16">
          <span>添加商品</span>
        </van-col>
        <van-col span="8" style="font-size: smaller">

          <router-link to="/myDragon">去商品库添加</router-link>
        </van-col>
      </van-row>
    </div>


    <div class="productPro">
      <van-cell-group>
        <van-field v-model="value" label="商品名称" />

        <van-field v-model="value" label="规格"  />
        <van-field v-model="value" label="价格"  />
        <van-field v-model="value" label="库存"  />

      </van-cell-group>
    </div>


    <div class="productTitle">
      <van-row>
        <van-col span="16">
          <span>其他设置</span>
        </van-col>

      </van-row>
    </div>

    <div class="productPro">
      <van-cell-group>

        <van-field
          v-model="this.utils.formatDate(beginTime)"
          label="开始时间"  readonly="readonly"
          @click="showBeginTime = true"
        />
        <van-field
          v-model="this.utils.formatDate(endTime)"
          label="截单时间"  readonly="readonly"
          @click="showEndTime = true"
        />
        <van-field
          v-model="this.utils.formatDate(deliveryTime)"
          label="提货时间"  readonly="readonly"
          @click="showDeliveryTime = true"
        />

        <van-field v-model="dragonTimes" label="限制接龙次数"  placeholder="输入0为不限次数"  />
        <!--<van-field v-model="value" label="设置阶梯价格"  />-->
        <!--<van-field v-model="value" label="物流设置"  />-->
        <van-field v-model="tips" label="重要提示"  />
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


    <van-popup v-model="showBeginTime" position="bottom">
      <van-datetime-picker
        v-model="beginTime"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </van-popup>

    <van-popup v-model="showEndTime" position="bottom">
      <van-datetime-picker
        v-model="endTime"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </van-popup>

    <van-popup v-model="showDeliveryTime" position="bottom">
      <van-datetime-picker
        v-model="deliveryTime"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </van-popup>

  </div>


</template>

<script src="./js/products.js"></script>


<style scoped>
  div{
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
  }
  .productTitle{
    padding-top: 2rem;
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
