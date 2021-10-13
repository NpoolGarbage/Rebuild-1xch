<template>
  <div class="login-style">
    <div class="input-div">
      <el-input class="input-style" v-model="email" :placeholder="myTranslation.emailInput"></el-input>
      <el-input
        class="input-style"
        v-model="password"
        :placeholder="myTranslation.passwordInput"
        show-password
      ></el-input>
    </div>

    <router-link class="forgot-password" to="/forget">{{myTranslation.forget}}</router-link>
    <div style="padding-top: 10px">
      <el-button @click="login" class="login-button">{{myTranslation.button}}</el-button>
    </div>

    <div style="margin-top: 20px;">
      <span style="color: white;">{{myTranslation.tip}}</span>
      <router-link to="/register" class="register-font">{{myTranslation.register}}</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ElNotification } from 'element-plus'
import { getAxios } from "../../assets/getaxios";

export default {
  data: function () {
    return {
      email: '',
      password: '',
      lang: '',
      tokenid: '',
    }
  },

  created: function () {
    var lang = this.$cookies.get('lang');
    if (lang === null || lang === '' || lang === undefined) {
      this.$cookies.set('lang', 'en');
    }
    this.lang = this.$cookies.get('lang');
    this.$store.commit('lang/setAllTranslation', this.lang);
    this.keyupLogin();

  },

  computed: {
    myTranslation: function () {
      return this.$store.state.lang.allTranslation.login;
    },
  },

  methods: {
    keyupLogin: function () {
      document.onkeydown = e => {
        let _key = window.event.keyCode;
        if (_key === 13) {
          this.login();
        }
      };
    },

    login: function () {
      let params = new FormData();
      let self = this;
      params.append('email', this.email);
      params.append('password', this.password);
      params.append('lang', this.lang);
      axios({
        url: 'http://api.1xch.one/index.php?c=user&a=login',
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: params,
      }).then(function (response) {
        let resp = response.data;

        if (resp.code !== 0) {
          ElNotification.error({
            title: resp.msg,
            message: resp.msg,
          });
          return;
        }
        self.tokenid = resp.tokenid;
        self.getUserInfo();
        self.$cookies.set('tokenid', resp.tokenid);
        self.$router.push({ path: '/main/treasure' });
      }).catch(error => {
        ElNotification.error({
          title: error,
          message: error,
        });
        return;
      })
    },

    getUserInfo: function () {
      let self = this;
      let params = new FormData();
      params.append('tokenid', this.tokenid);
      params.append('lang', this.lang);

      getAxios('http://api.1xch.one/index.php?c=user&a=user_info', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          ElNotification.error({
            title: resp.msg,
            message: resp.msg,
          });
          return;
        }
        self.$store.commit('user/setUserInfo', resp);
      }).catch(error => {
        ElNotification.error({
          title: error,
          message: error,
        });
        return;
      })
    },
  }
};
</script>

<style scoped>
.login-style {
  display: flex;
  flex-direction: column;
}

.input-div {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

.input-style {
  margin: 10px 0px;
  width: 400px;
}

.forgot-password {
  color: white;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;
  font-size: 12px;
  text-align: right;
}

.login-button {
  padding-top: 10px;
  width: 400px;
  color: white;
  background-color: rgb(68, 163, 68);
  border: 0px;
}

.register-font {
  color: rgb(68, 163, 68);
  text-decoration: none;
}
</style>