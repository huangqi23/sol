<template>
  <div>
    <div class="user-poster" :style="{backgroundImage: `url(${background_image})`}">
      <!--<van-icon name="set" class="user_set" @click="toSetting" />-->
      <!--<div class="user_avatar">-->
      <!--<img :src="avatar" @click="toLogin" alt="头像" width="55" height="55">-->
      <!--</div>-->
      <!--<div>{{nick_name}}</div>-->

      <van-row class="user-info">
        <van-col offset="2">
          <div class="user_avatar">
            <img :src="avatar" @click="toLogin" alt="头像" width="55" height="55">
          </div>
        </van-col>
        <van-col span="12" class="user-info-text"offset="1">
          <div class="user-nickname">
            <span>{{nick_name}}</span>
            <!--<van-tag-->
            <!--v-if="member.is_agent > 0"-->
            <!--class="margin-left"-->
            <!--type="primary"-->
            <!--&gt;{{nick_name}}</van-tag>-->
          </div>

        </van-col>
      </van-row>
    </div>

    <div class="points-box">
      <van-grid :columnNum="2" size="16px">
        <van-grid-item icon="balance-o" to="/member/award_log">
          <div class="balance-text" slot="text">
            <div class="balance-name">钱包余额</div>
            <div class="balance-value">99999</div>
          </div>
        </van-grid-item>
        <van-grid-item icon="diamond-o" @click="toMoneyLog('credit')">
          <div class="balance-text" slot="text">
            <div class="balance-name">我的积分</div>
            <div class="balance-value">1000</div>
          </div>
        </van-grid-item>
        <!--<van-grid-item icon="balance-o" @click="toMoneyLog('reward')">-->
        <!--<div class="balance-text" slot="text">-->
        <!--<div class="balance-name">我的佣金</div>-->
        <!--<div class="balance-value">99999</div>-->
        <!--</div>-->
        <!--</van-grid-item>-->
      </van-grid>
    </div>
    <!--<div class="cblock user-links">-->
      <!--<van-cell icon="records" title="我的订单" value="全部订单" is-link to="/member/order" />-->
      <!--<van-row>-->
        <!--<van-col span="6">-->
          <!--&lt;!&ndash;<van-tag v-if="counts[0] > 0" round type="danger">{{counts[0]}}</van-tag>&ndash;&gt;-->
          <!--<router-link to="/member/order?status=0">-->
            <!--<van-icon name="pending-payment" />待付款-->
          <!--</router-link>-->
        <!--</van-col>-->
        <!--<van-col span="6">-->
          <!--&lt;!&ndash;<van-tag v-if="counts[1] > 0" round type="danger">{{counts[1]}}</van-tag>&ndash;&gt;-->
          <!--<router-link to="/member/order?status=1">-->
            <!--<van-icon name="records" />待发货-->
          <!--</router-link>-->
        <!--</van-col>-->
        <!--<van-col span="6">-->
          <!--&lt;!&ndash;<van-tag v-if="counts[2] > 0" round type="danger">{{counts[2]}}</van-tag>&ndash;&gt;-->
          <!--<router-link to="/member/order?status=2">-->
            <!--<van-icon name="tosend" />待收货-->
          <!--</router-link>-->
        <!--</van-col>-->
        <!--<van-col span="6">-->
          <!--<router-link to="/member/order?status=4">-->
            <!--<van-icon name="logistics" />已完成-->
          <!--</router-link>-->
        <!--</van-col>-->
      <!--</van-row>-->
    <!--</div>-->

    <!--<div class="cblock margin-top">-->
      <!--<van-cell-group>-->
        <!--&lt;!&ndash;<van-cell icon="gift-card-o" to="/member/credit_order" title="积分订单" is-link>&ndash;&gt;-->
          <!--&lt;!&ndash;<slot>&ndash;&gt;-->
            <!--&lt;!&ndash;<van-tag v-if="groupOrder > 0" round type="danger">{{creditOrder}}</van-tag>&ndash;&gt;-->
          <!--&lt;!&ndash;</slot>&ndash;&gt;-->
        <!--&lt;!&ndash;</van-cell>&ndash;&gt;-->
        <!--&lt;!&ndash;<van-cell v-if="openShare" icon="more-o" to="/member/share" title="我要分享" is-link />&ndash;&gt;-->
        <!--&lt;!&ndash;<van-cell v-if="openShare" icon="cluster-o" to="/member/team" title="我的团队" is-link />&ndash;&gt;-->
        <!---->
      <!--</van-cell-group>-->
    <!--</div>-->
    <!--<div class="cblock margin-top">-->
      <!--<van-cell-group>-->
        <!--<van-cell   icon="more-o" to="/member/share" title="我的接龙" is-link />-->
        <!--<van-cell icon="gold-coin-o" @click="sorry" title="我的优惠券" is-link />-->
        <!--<van-cell icon="location-o" to="/member/address" title="我的收货地址" is-link />-->
        <!--<van-cell icon="info-o" to="/about/index" title="关于我们" is-link />-->
        <!--&lt;!&ndash;<van-cell icon="share" @click="quit" title="退出登录" is-link />&ndash;&gt;-->
      <!--</van-cell-group>-->
    <!--</div>-->
  </div>
</template>

<script>
    import avatar_default from '../../assets/images/avatar_default.png';
    import bg_default from '../../assets/images/user_head_bg.png';
    // import { getLocalStorage } from 'core/utils/local-storage';

    export default {
        name: 'user-header',

        props: {
            isLogin: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                nick_name: '昵称',
                avatar: avatar_default,
                background_image: bg_default
            };
        },

        created() {
            this.getUserInfo();
        },

        methods: {
            getUserInfo() {
                // const infoData = sessionStorage.userInfo
                //
                //     getLocalStorage(
                //   'nick_name',
                //   'background_image',
                //   'avatar'
                // );
                this.nick_name = sessionStorage.nickname || '昵称';
                this.avatar = sessionStorage.headimgUrl || avatar_default;
                this.background_image = sessionStorage.background_image || bg_default;
            },
            toSetting() {
                this.$router.push({ name: 'user-information' });
            },
            toLogin() {
                !this.isLogin &&
                this.$router.push({ name: 'login', query: { redirect: 'user' } });
            }
        }
    };
</script>

<style lang="scss" scoped>
  .user_header {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    height: 130px;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    padding-top: 30px;
  }

  i.user_set {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
  }
  .user_avatar {
    margin-bottom: 10px;
    img {
      border: 0;
      border-radius: 50%;
    }
  }
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
