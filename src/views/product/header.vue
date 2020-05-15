<template>
  <div>
    <div class="user-poster" >
      <!--<van-icon name="set" class="user_set" @click="toSetting" />-->
      <!--<div class="user_avatar">-->
      <!--<img :src="avatar" @click="toLogin" alt="头像" width="55" height="55">-->
      <!--</div>-->
      <!--<div>{{nick_name}}</div>-->

      <van-row class="user-info">
        <van-col>
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
  </div>
</template>

<script>

    export default {
        name: "header-model",
        created() {
            this.getUserInfo();
        },

        methods: {
            getUserInfo() {
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
    }
</script>

<style scoped>
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

  .user_set {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
  }

  .user-info{
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2rem;
  }

  .user-info-text{
    text-align: left;
    color: #fff;
    font-size: 20px;
  }

  div{
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
  }

</style>
