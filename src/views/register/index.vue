<template>
  <div class="input-div">
    <el-input class="input-style" v-model="email" :placeholder="myTranslation.emailInput"></el-input>
    <el-input
      class="input-style"
      v-model="password"
      :placeholder="myTranslation.passwordInput"
      show-password
    ></el-input>
    <el-input
      class="input-style"
      v-model="confirm_password"
      :placeholder="myTranslation.confirmPass"
      show-password
    ></el-input>
    <el-input class="input-style" v-model="email_code" :placeholder="myTranslation.verifyCode">
      <template #append>
        <el-button
          style="width: 100px; background-color: rgb(86, 159, 255);color: black;text-align: center;"
          type="text"
          @click="sendVerifyCode"
          :disabled="canSendCode"
        >{{ myTranslation.sendCode }}</el-button>
      </template>
    </el-input>
    <div class="privacy-policy">
      <el-checkbox v-model="read_policy"></el-checkbox>
      <span style="color: white; padding-left: 10px; font-size: 14px">{{ myTranslation.agree }}</span>
      <el-button
        type="text"
        style="color: rgb(68, 163, 68); padding: 5px;"
        @click="dialogVisible = true"
      >{{ myTranslation.pp }}</el-button>
    </div>
    <div style="padding-top: 10px;">
      <el-button @click="register" class="register-button">{{ myTranslation.button }}</el-button>
    </div>
    <div style="margin-top: 20px;">
      <span style="color: white;">{{ myTranslation.exist }}</span>
      <router-link
        to="/login"
        style="color: rgb(68, 163, 68); text-decoration: none; padding: 5px;"
      >{{ myTranslation.login }}</router-link>
    </div>

    <el-dialog v-model="dialogVisible" title="Privacy Policy" width="40%">
      <span>{{ privacyContent }}</span>
    </el-dialog>
  </div>
</template>

<script>
import { getAxios } from "../../assets/getaxios"
export default {
  data: function () {
    return {
      email: '',
      password: '',
      confirm_password: '',
      email_code: '',
      read_policy: false,
      dialogVisible: false,
      privacyContent: 'this is privacy',
      lang: '',
      canSendCode: false,
    }
  },

  created: function () {
    this.lang = this.$cookies.get('lang');
    this.$store.commit('lang/setAllTranslation', this.$cookies.get('lang'));
    this.keyupRegister();
  },

  computed: {
    myTranslation: function () {
      return this.$store.state.lang.allTranslation.register;
    },
  },

  methods: {
    keyupRegister: function () {
      document.onkeydown = e => {
        let _key = window.event.keyCode;
        if (_key === 13) {
          this.register();
        }
      };
    },

    popPrivacy: function () { },
    register: function () {
      let self = this;
      if (this.password === '') {
        this.$notify.error({
          title: 'Error!',
          message: self.myTranslation.msg1,
        });
        return
      }
      if (this.password !== this.confirm_password) {
        this.$notify.error({
          title: 'Error!',
          message: self.myTranslation.msg2,
        });
        return;
      }
      if (!this.read_policy) {
        this.$notify.error({
          title: 'Error!',
          message: self.myTranslation.msg3,
        });
        return;
      }
      let params = new FormData();
      params.append('lang', this.lang);
      params.append('email', this.email);
      params.append('password', this.password);
      params.append('email_code', this.email_code);
      params.append('invite_code', undefined);

      getAxios('http://api.1xch.one/index.php?c=user&a=reg', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return
        }
        self.$notify.success({
          title: 'Success!',
          message: self.myTranslation.msg4,
        });
        self.$router.push('/login');
      }).catch(error => {
        self.$notify.error({
          title: error,
          msg: error,
        });
        return;
      })
    },
    sendVerifyCode: function () {
      let self = this;
      let params = new FormData();
      params.append('lang', this.lang);
      params.append('email', this.email);

      getAxios('http://api.1xch.one/index.php?c=user&a=send_reg_email_code', 'post', params).then(response => {
        let resp = response.data;
        let self = this;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return
        }
        self.$notify.success({
          title: 'Success',
          message: self.myTranslation.msg,
        });

      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return
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

.register-button {
  padding-top: 10px;
  width: 500px;
  color: white;
  background-color: rgb(68, 163, 68);
  border: 0px;
}
</style>