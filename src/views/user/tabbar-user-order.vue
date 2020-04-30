<template>
  <div>
  <div class="cblock user-links">
    <van-cell icon="records" title="我的订单" value="全部订单" is-link to="/member/order" />
    <van-row>
      <van-col span="6">
        <!--<van-tag v-if="counts[0] > 0" round type="danger">{{counts[0]}}</van-tag>-->
        <router-link to="/member/order?status=0">
          <van-icon name="pending-payment" />待付款
        </router-link>
      </van-col>
      <van-col span="6">
        <!--<van-tag v-if="counts[1] > 0" round type="danger">{{counts[1]}}</van-tag>-->
        <router-link to="/member/order?status=1">
          <van-icon name="records" />待发货
        </router-link>
      </van-col>
      <van-col span="6">
        <!--<van-tag v-if="counts[2] > 0" round type="danger">{{counts[2]}}</van-tag>-->
        <router-link to="/member/order?status=2">
          <van-icon name="tosend" />待收货
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="/member/order?status=4">
          <van-icon name="logistics" />已完成
        </router-link>
      </van-col>
    </van-row>
  </div>
  </div>
</template>

<script>

    export default {
        name: 'order-group',

    };
</script>

<style lang="scss" scoped>
  .user {
    &-poster {
      width: 100%;
      height: 220px;
      background: #099 center top no-repeat;
      background-size: cover;
      text-align: center;
      position: relative;
      .right-icon{
        position: absolute;
        right:20px;
        top:20px;
        color: #fff;
        text-shadow: 1px 1px 5px rgba(0,0,0,.1)
      }
    }
    &-info {
      padding-top: 4rem;
    }
    &-avatar {
      align-items: center;
      margin-right:10px;
    }
    &-info-text {
      text-align: left;
      color: #fff;
      font-size: 14px;
    }
    &-nickname {
      font-size: 18px;
    }

    &-group {
      margin-top: 15px;
    }

    &-links {
      margin-top: 15px;
      text-align: left;
      background-color: #fff;
      a {
        color: #444;
      }
      .van-row {
        padding: 15px 0;
        font-size: 12px;
        text-align: center;
        .van-col{
          position: relative;
        }
        .van-tag{
          position: absolute;
          left:60%;
          top:-5px;
        }
        .van-icon {
          display: block;
          font-size: 24px;
          color: #af8755;
        }
      }
    }
  }
  .points-box {
    height: 70px;
    margin: 0 10px;
    text-align: center;
    .van-grid {
      border-radius: 5px;
      margin-top: -35px;
      height: 70px;
      overflow: hidden;
      .van-grid-item__content {
        padding: 4px;
      }
      .balance-text {
        margin-top: 0;
        font-size: 10px;
        .balance-name {
          color: #666;
        }
        .balance-value {
          font-size: 10px;
          font-weight: bold;
          margin-top: 4px;
          color: #b00;
        }
      }
    }
  }
</style>
