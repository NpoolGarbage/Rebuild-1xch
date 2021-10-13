<template>
  <div class="input-div">
    <el-input class="input-style" v-model="email" :placeholder="myTranslation.email"></el-input>
    <el-input class="input-style" v-model="sendCode" :placeholder="myTranslation.verifyCode">
      <template #append>
        <el-button
          style="width: 100px"
          type="text"
          @click="sendForgetEmail"
        >{{ myTranslation.sendCode }}</el-button>
      </template>
    </el-input>
    <el-input
      class="input-style"
      v-model="password"
      :placeholder="myTranslation.password"
      show-password
    ></el-input>
    <el-input
      class="input-style"
      v-model="confirmPassword"
      :placeholder="myTranslation.confirmPass"
      show-password
    ></el-input>
    <div style="margin-top: 20px;">
      <el-button @click="confirm" class="confirm-button">{{ myTranslation.button }}</el-button>
    </div>
  </div>
</template>

<script>
import { getAxios } from "../../assets/getaxios";
export default {
  data: function () {
    return {
      email: '',
      sendCode: '',
      password: null,
      confirmPassword: '',
      lang: '',
      sign: '',
      time: '',
    }
  },

  created: function () {
    this.lang = this.$cookies.get('lang');
    this.$store.commit('lang/setAllTranslation', this.$cookies.get('lang'));
    this.keyupForget();
  },

  computed: {
    myTranslation: function () {
      return this.$store.state.lang.allTranslation.forget;
    },
  },

  methods: {
    keyupForget: function () {
      document.onkeydown = e => {
        let _key = window.event.keyCode;
        if (_key === 13) {
          this.confirm();
        }
      };
    },

    sendForgetEmail: function () {
      let self = this;
      let params = new FormData();
      params.append('email', this.email);
      params.append('lang', this.lang);
      getAxios('http://api.1xch.one/index.php?c=user&a=forgot', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            msg: resp.msg,
          });
          return;
        }
        self.$message({
          showClose: true,
          message: resp.msg + '\n' + self.myTranslation.attention,
          center: true,
          offset: 300,
        })
        self.sign = resp.sql.split('&sign=')[1].split('<')[0].split('">')[0];
        self.time = resp.sql.split('&time=')[1].split('&sign=')[0];
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return;
      })
    },

    confirm: function () {
      if (this.password !== this.confirmPassword) {
        this.$notify.error({
          title: 'Error!',
          message: this.myTranslation.warn1,
        });
        return;
      }

      if (this.password === '' || this.confirmPassword === '') {
        this.$notify.error({
          title: 'Error!',
          message: this.myTranslation.warn2,
        });
        return;
      }

      let self = this;
      let params = new FormData();
      params.append('lang', this.lang);
      params.append('password', this.password);
      params.append('email', this.email);
      params.append('time', this.time);
      params.append('sign', this.sendCode);

      getAxios('http://api.1xch.one/index.php?c=user&a=reset', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return;
        }
        self.$notify.success({
          title: 'Success!!!',
          message: '邮箱密码更改成功，请重新登录！',
        });
        self.$router.push('/login')
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return;
      })
    },
  }
}
</script>


<style scoped>
.input-div {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

.input-style {
  margin: 10px 0px;
  width: 500px;
}

.privacy-policy {
  display: flex;
  align-items: center;
}

.confirm-button {
  padding-top: 10px;
  width: 500px;
  color: white;
  background-color: rgb(68, 163, 68);
  border: 0px;
}
</style>

<style>
.el-message__content {
  font-size: large;
}
</style>