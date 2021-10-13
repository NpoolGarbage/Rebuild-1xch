<template>
  <div class="main" v-loading="loading">
    <div class="main-header">
      <div class="header-left">
        <el-image :src="logo"></el-image>
      </div>
      <div class="header-right">
        <div style="margin: 10px;">
          <el-dropdown trigger="click">
            <div>
              <el-avatar icon="el-icon-user-solid"></el-avatar>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>{{ email }}</el-dropdown-item>
                <el-dropdown-item command="安全中心">
                  <router-link
                    to="/main/security"
                    class="router-link"
                  >{{ myTranslation.userDropdown.security }}</router-link>
                </el-dropdown-item>
                <el-dropdown-item command="我的资产">
                  <router-link
                    to="/main/treasure"
                    class="router-link"
                  >{{ myTranslation.userDropdown.treasure }}</router-link>
                </el-dropdown-item>
                <el-dropdown-item command="我的算力">
                  <router-link
                    to="/main/power/myorder"
                    class="router-link"
                  >{{ myTranslation.userDropdown.power }}</router-link>
                </el-dropdown-item>
                <el-dropdown-item command="changepass">
                  <el-button
                    type="text"
                    style="color: grey;"
                    @click="changepassDialog = true"
                  >{{ myTranslation.userDropdown.changepass }}</el-button>
                </el-dropdown-item>
                <el-dropdown-item divided @click="logout">
                  <span style="display: block">{{ myTranslation.userDropdown.logout }}</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <el-dialog :title="myTranslation.userDropdown.changepass" v-model="changepassDialog">
            <div class="dialog-input">
              <span style="font-size: 16px">{{dialogTrans.oldPass}}</span>
              <el-input v-model="changePassInput.oldPassword" :placeholder="dialogTrans.oldPassInput" show-password></el-input>
            </div>
            <div class="dialog-input">
              <span style="font-size: 16px">{{dialogTrans.newPass}}</span>
              <el-input v-model="changePassInput.password" :placeholder="dialogTrans.newPassInput" show-password></el-input>
            </div>
            <div class="dialog-input">
              <span style="font-size: 16px">{{dialogTrans.confirmPass}}</span>
              <el-input v-model="changePassInput.confirmPassword" :placeholder="dialogTrans.confirmPassInput" show-password></el-input>
            </div>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="changepassDialog = false">{{dialogTrans.cancelBtn}}</el-button>
                <el-button type="primary" @click="changePassWord">{{dialogTrans.confirmBtn}}</el-button>
              </span>
            </template>
          </el-dialog>
        </div>

        <div style="color: white; margin-right: 10px;">
          <!-- <el-select v-model="lang" style="width: 120px" @change="selectLang">
            <el-option v-for="la in langs" :key="la.value" :label="la.label" :value="la.value"></el-option>
          </el-select> -->
          <change-lang :myLang="lang"></change-lang>
        </div>
      </div>
    </div>

    <div class="main-body">
      <router-view></router-view>
    </div>

    <div class="main-footer">
      <div class="footer-left">
        <div class="image-style">
          <el-image :src="logo"></el-image>
        </div>

        <div class="footer-text-style">
          <span class="footer-text">{{ myTranslation.footer.contact }} XXXX@XXX.com</span>
          <span class="footer-text">Copyright Digital Offers All Rights Reserved</span>
        </div>
      </div>

      <div class="footer-right">
        <div class="footer-right-content">
          <span class="footer-text">{{ myTranslation.footer.support }}</span>
          <div style="margin-bottom: 15px; margin-top: 15px;">
            <router-link
              to="/main/help"
              class="footer-text padding-text router-link"
            >{{ myTranslation.footer.help }}</router-link>
            <router-link
              to="/main/law"
              class="footer-text padding-text router-link"
            >{{ myTranslation.footer.law }}</router-link>
          </div>
          <div style="margin-bottom: 15px;">
            <router-link
              to="/main/protocol"
              class="footer-text padding-text router-link"
            >{{ myTranslation.footer.protocol }}</router-link>
            <router-link
              to="/main/aboutus"
              class="footer-text padding-text router-link"
            >{{ myTranslation.footer.about }}</router-link>
          </div>
          <router-link
            to="/main/policy"
            class="footer-text padding-text router-link"
          >{{ myTranslation.footer.policy }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import logoUrl from '../../assets/img/login-title.png'
import { getAxios } from '../../assets/getaxios';
import ChangeLang from '../components/ChangeLang.vue';

export default {
  components: { ChangeLang },
  data: function () {
    return {
      loading: false,
      changepassDialog: false,
      changePassInput: {
        password: '',
        oldPassword: '',
        confirmPassword: '',
      },
      logo: logoUrl,
      email: 'crazyzplzpl@163.com',
      lang: '',
      tokenid: '',
      langs: [
        {
          value: 'ch',
          label: '简体中文',
        },
        {
          value: 'ja',
          label: '日本語',
        },
        {
          value: 'en',
          label: 'English',
        },
      ],
    }
  },

  created: function () {
    this.tokenid = this.$cookies.get('tokenid');
    var lang = this.$cookies.get('lang');
    if (lang === null || lang === '' || lang === undefined) {
      this.$cookies.set('lang', 'en');
    }
    this.lang = this.$cookies.get('lang');
    this.$store.commit('lang/setAllTranslation', this.$cookies.get('lang'));
  },

  computed: {
    myTranslation: function () {
      return this.$store.state.lang.allTranslation.main;
    },

    dialogTrans: function () {
      return this.$store.state.lang.allTranslation.changepass;
    },
  },

  watch: {
    lang: {
      deep: true,
      immediate: true,
      handler: function (n, o) {
      },
    },
  },

  methods: {
    changePassWord: function(){
      let self = this;
      if (this.changePassInput.password === this.changePassInput.oldPassword) {
        this.$notify.error({
          title: 'Error',
          message: self.dialogTrans.notifyMsg1,
        });
        return;
      }

      if (this.changePassInput.password !== this.changePassInput.confirmPassword) {
        this.$notify.error({
          title: 'Error',
          message: self.dialogTrans.notifyMsg2,
        });
        return;
      }
      
      let params = new FormData();
      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);
      params.append('password', this.changePassInput.password);
      params.append('old_password', this.changePassInput.oldPassword);

      getAxios('http://api.1xch.one/index.php?c=user&a=change_pwd', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: 'Error',
            message: resp.msg,
          });
          return
        }

        self.$notify.success({
          title: 'Success',
          message: self.dialogTrans.notifyMsg3,
        });
        self.loading = true;
        setTimeout(() => {
          self.$cookies.remove('tokenid');
        },1000);
        self.loading = false;
        self.$router.push('/login');
      }).catch(error=>{
        self.$notify.error({
          title: 'Error',
          message: error,
        })
      })
    },

    logout: function () {
      let self = this;
      let params = new FormData();

      axios({
        url: 'http://api.1xch.one/index.php?c=user&a=logout',
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: params,
      }).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return;
        }

        self.$cookies.remove('tokenid');
        self.$router.push({ path: '/login' });
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return;
      })
    },

    selectLang: function (lang) {
      this.lang = lang;
      this.$cookies.set('lang', this.lang);

      this.$store.commit('lang/setAllTranslation', lang);

    },
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: block;
}

.main-body {
  min-height: calc(100% - 60px - 250px);
  height: auto !important;
  padding: 0% 5%;
  position: relative;
}

.body-title {
  margin-bottom: 20px;
}

.main-header {
  background-color: black;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-footer {
  background-color: black;
  width: 100%;
  height: 250px;
  top: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: baseline; */
}

.header-left {
  /* margin-left: 40%;
  padding-top: 40%; */
  width: 200px;
  height: 60px;
  padding-left: 10px;
}

.header-right {
  padding-right: 20px;
  display: flex;
  align-items: center;
}

.router-link {
  text-decoration: none;
  color: gray;
}

.footer-left {
  display: flex;
  flex-direction: column;
}

.image-style {
  width: 300px;
  height: 80px;
  margin: 40px 0px 10px 50px;
}

.footer-text-style {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.footer-text {
  color: white;
  font-size: 14px;
  margin: 5px 0px;
}

.padding-text {
  margin-right: 30px;
}

.footer-right {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 150px 0px 0px;
}

.footer-right-content {
  padding-top: 20%;
}

.dialog-input {
  margin: 10px;
}
</style>