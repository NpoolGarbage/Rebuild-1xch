<template>
  <div class="card-style">
    <div class="body-title">
      <span style="font-weight: bolder; color: rgb(68, 163, 68); padding-right: 5px;">|</span>
      {{ myTranslation.pageTitle }}
    </div>
    <div>
      <el-card>
        <div class="card-body">
          <div class="card-body-row">
            <span>UID</span>
            <span>{{ userInfo.uid }}</span>
          </div>
          <div class="card-body-row">
            <span>Email</span>
            <span>{{ userInfo.email }}</span>
          </div>
          <div class="card-body-row">
            <span>{{ myTranslation.phone }}</span>
            <span>{{ userInfo.phone === '' ? '--' : userInfo.phone }}</span>
          </div>
          <div class="card-body-row">
            <span>{{ myTranslation.phoneCertifyStatus.title }}</span>
            <span>
              {{ userInfo.phone_verify === 0 ? myTranslation.phoneCertifyStatus.label1f : myTranslation.phoneCertifyStatus.label1s }}
              <el-button
                type="text"
                v-if="userInfo.phone_verify === 0"
                style="color: red;"
                @click="phoneDialog = true"
                disabled
              >{{ myTranslation.phoneCertifyStatus.label2 }}</el-button>
            </span>
          </div>
          <div class="card-body-row">
            <span>{{ myTranslation.GaCertifyStatus.title }}</span>
            <span>
              {{ userInfo.ga_verify === 0 ? myTranslation.GaCertifyStatus.label1f : myTranslation.GaCertifyStatus.label1s }}
              <el-button
                type="text"
                v-if="userInfo.ga_verify === 0"
                style="color: red;"
                @click="gaDialog = true"
              >{{ myTranslation.GaCertifyStatus.label2 }}</el-button>
            </span>
          </div>
          <div class="card-body-row">
            <span>{{ myTranslation.KycCertifyStatus.title }}</span>
            <span>
              {{ userInfo.kyc_verify === 0 ? myTranslation.KycCertifyStatus.label1f : myTranslation.KycCertifyStatus.label1s }}
              <el-button
                type="text"
                v-if="userInfo.kyc_verify === 0"
                style="color: red;"
                @click="kycDialog = true"
              >{{ myTranslation.KycCertifyStatus.label2 }}</el-button>
            </span>
          </div>
          <div class="card-body-row">
            <span>{{ myTranslation.registerTime }}</span>
            <span>{{ userInfo.reg_time }}</span>
          </div>
          <div class="card-body-row">
            <span>{{ myTranslation.lastLoginIp }}</span>
            <span>{{ userInfo.login_last_ip }}</span>
          </div>
          <div class="card-body-row">
            <span>{{ myTranslation.loginNum }}</span>
            <span>{{ userInfo.login_num }}</span>
          </div>
          <div class="card-body-row">
            <span>{{ myTranslation.withdrawStatus.title }}</span>
            <span>{{ userInfo.withdraw_valid === "1" ? myTranslation.withdrawStatus.labels : myTranslation.withdrawStatus.labelf }}</span>
          </div>
        </div>
      </el-card>

      <el-dialog v-model="phoneDialog" :title="myTranslation.phoneCertifyDialog.title">
        <div class="dialog-row">
          <el-input
            v-model="phoneInput.phoneNum"
            :placeholder="myTranslation.phoneCertifyDialog.phoneNumInput"
          >
            <template #prepend>
              <el-select
                v-model="phoneInput.phonePre"
                :placeholder="myTranslation.phoneCertifyDialog.phonePre"
                filterable
                style="width: 200px;"
              >
                <el-option
                  v-for="pre in phonePreList"
                  :key="pre.value"
                  :label="pre.label"
                  :value="pre.value"
                ></el-option>
              </el-select>
            </template>
          </el-input>
        </div>

        <div class="dialog-row">
          <el-input
            v-model="phoneInput.phoneCode"
            :placeholder="myTranslation.phoneCertifyDialog.phoneCode"
          >
            <template #append>
              <el-button>{{ myTranslation.phoneCertifyDialog.getPoneCode }}</el-button>
            </template>
          </el-input>
        </div>

        <div class="dialog-row">
          <el-input
            v-model="phoneInput.password"
            :placeholder="myTranslation.phoneCertifyDialog.passInput"
          ></el-input>
        </div>

        <el-button @click="phoneDialog = false">{{ myTranslation.phoneCertifyDialog.cancel }}</el-button>
        <el-button
          type="primary"
          @click="confirmCertifyPhone"
        >{{ myTranslation.phoneCertifyDialog.confirm }}</el-button>
      </el-dialog>

      <el-dialog v-model="gaDialog" :title="myTranslation.GACertifyDialog.title">
        <div>
          <div style="width: 200px; height: 200px;margin: 20px 33%;">
            <el-image :src="gaVerifyUrl">
              <template #error>
                <div class="image-slot">如果图片加载不出来请访问{{ gaVerifyUrl }}</div>
              </template>
            </el-image>
          </div>

          <div style="margin: 10px 20px">
            <el-input v-model="gaInput.gaCode" :placeholder="myTranslation.GACertifyDialog.gaCode"></el-input>
          </div>
          <div style="margin: 10px 20px">
            <el-input
              v-model="gaInput.password"
              :placeholder="myTranslation.GACertifyDialog.passInput"
            ></el-input>
          </div>
          <div style="margin-left: 70%">
            <el-button @click="gaDialog = false">{{ myTranslation.GACertifyDialog.cancel }}</el-button>
            <el-button
              type="primary"
              @click="confirmGaCertify"
            >{{ myTranslation.GACertifyDialog.confirm }}</el-button>
          </div>
        </div>
      </el-dialog>

      <el-dialog v-model="kycDialog" :title="myTranslation.KYCCertifyDialog.title">
        <div class="kyc-dialog">
          <div class="dialog-select">
            <span
              style="padding-right: 10px;"
            >{{ myTranslation.KYCCertifyDialog.countryCode.title }}</span>
            <el-select
              v-model="kycInput.countryCode"
              :placeholder="myTranslation.KYCCertifyDialog.countryCode.label"
            >
              <el-option
                v-for="country in countryList"
                :key="country.cid"
                :label="country.name + ' ' + country.name_zh + ' ' + country.phonecode"
                :value="country.cid"
              ></el-option>
            </el-select>
          </div>

          <div class="dialog-select">
            <span
              style="padding-right: 10px;"
            >{{ myTranslation.KYCCertifyDialog.certificationType.title }}</span>
            <el-select
              v-model="kycInput.credentialType"
              :placeholder="myTranslation.KYCCertifyDialog.certificationType.label"
            >
              <el-option
                v-for="type in credentialTypes"
                :key="type.value"
                :label="type.label"
                :value="type.value"
              ></el-option>
            </el-select>
          </div>

          <div class="upload-img">
            <div>
              <span>身份证正面照/护照</span>
              <UploadVue @getfilepath="getFrontUrl" class="upload-style"></UploadVue>
            </div>
            <div>
              <span>身份证背面照</span>
              <UploadVue @getfilepath="getBackUrl" class="upload-style"></UploadVue>
            </div>
            <div>
              <span>手持身份证照/手持护照</span>
              <UploadVue @getfilepath="getUserUrl" class="upload-style"></UploadVue>
            </div>
          </div>

          <div class="name-inputs">
            <div class="name-input">
              <span style="margin-right: 10px;">{{ myTranslation.KYCCertifyDialog.firstname.title }}</span>
              <el-input
                v-model="kycInput.firstName"
                :placeholder="myTranslation.KYCCertifyDialog.firstname.label"
              ></el-input>
            </div>
            <div class="name-input">
              <span style="margin-right: 10px;">{{ myTranslation.KYCCertifyDialog.lastname.title }}</span>
              <el-input
                v-model="kycInput.lastName"
                :placeholder="myTranslation.KYCCertifyDialog.lastname.label"
              ></el-input>
            </div>
          </div>
          <div class="id-input">
            <span style="margin-right: 10px;">{{ myTranslation.KYCCertifyDialog.idNum.title }}</span>
            <el-input
              v-model="kycInput.idCardNumber"
              :placeholder="myTranslation.KYCCertifyDialog.idNum.label"
              style="width: 500px"
            ></el-input>
          </div>
          <div>
            <el-button @click="kycDialog = false">{{ myTranslation.KYCCertifyDialog.cancel }}</el-button>
            <el-button
              type="primary"
              @click="confirmKycCertify"
            >{{ myTranslation.KYCCertifyDialog.confirm }}</el-button>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getAxios } from "../../assets/getaxios";
import UploadVue from "../components/Upload.vue";
export default {
  components: { UploadVue },
  data: function () {
    return {
      gaInfo: null,
      phoneDialog: false,
      gaDialog: false,
      kycDialog: false,
      phonePreList: [
        {
          label: 'United States 美国 001',
          value: '1',
        },
        {
          label: 'Argentina 阿根廷 0054',
          value: '54',
        },
        {
          label: 'Australia 澳大利亚 0061',
          value: '61',
        },
        {
          label: 'Brazil 巴西 0055',
          value: '55',
        },
        {
          label: 'China 中国 0086',
          value: '86',
        },
        {
          label: 'Japan 日本 0081',
          value: '81',
        },
      ],
      phoneInput: {
        phonePre: '',
        phoneNum: '',
        phoneCode: '',
      },

      googleGaDoamin: 'https://www.google.com/chart?chs=200x200&chld=M|0&cht=qr&chl=',
      gaVerifyUrl: '',
      gaInput: {
        gaCode: '',
        password: '',
      },
      kycInput: {
        countryCode: '',
        credentialType: '',
        cardFrontUrl: '',
        cardBackUrl: '',
        cardUserUrl: '',
        firstName: '',
        lastName: '',
        idCardNumber: '',
      },
      countryList: null,
      credentialTypes: [
        {
          label: '身份证',
          value: '1',
        },
        {
          label: '护照',
          value: '2',
        },
      ],
      lang: '',
      tokenid: '',
      userCoinList: null,
    }
  },

  created: function () {
    this.lang = this.$cookies.get('lang');
    this.tokenid = this.$cookies.get('tokenid');
    // let params = new FormData();
    // params.append('lang', this.lang);
    // params.append('tokenid', this.tokenid);

    // this.$store.dispatch('user/getUserInfo', params);
    this.$store.commit('lang/setAllTranslation', this.$cookies.get('lang'));
  },

  mounted: function () {
    this.getUserInfo();
    this.getGaVerify();
    this.getUserCoinList();
    this.getCountryList();
  },

  computed: {
    myTranslation: function () {
      return this.$store.state.lang.allTranslation.security;
    },

    userInfo: function () {
      return this.$store.state.user.userInfo;
    },
  },

  methods: {
    getFrontUrl: function (e) {
      this.kycInput.cardFrontUrl = e;
    },

    getBackUrl: function (e) {
      this.kycInput.cardBackUrl = e;
    },

    getUserUrl: function (e) {
      this.kycInput.cardUserUrl = e;
    },

    confirmCertifyPhone: function () {
      this.phoneDialog = false;
    },

    confirmKycCertify: function () {
      let self = this;
      let params = new FormData();

      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);
      params.append('cid', this.kycInput.countryCode);
      params.append('id_type', this.kycInput.credentialType);
      params.append('idcard_front', this.kycInput.cardFrontUrl);
      params.append('idcard_back', this.kycInput.cardBackUrl);
      params.append('idcard_user', this.kycInput.cardUserUrl);
      params.append('first_name', this.kycInput.firstName);
      params.append('last_name', this.kycInput.lastName);
      params.append('idcard_no', this.kycInput.idCardNumber);

      getAxios('http://api.1xch.one/index.php?c=user&a=apply_kyc', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return
        }

        self.$notify.success({
          title: 'Success',
          message: 'Please wait for audit',
        });
        self.kycDialog = false;
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return;
      })

      this.kycDialog = false;
    },

    getUserInfo: function () {
      let self = this;
      let params = new FormData();
      params.append('tokenid', this.tokenid);
      params.append('lang', this.lang);

      getAxios('http://api.1xch.one/index.php?c=user&a=user_info', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          $notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return;
        }
        self.$store.commit('user/setUserInfo', resp);
      }).catch(error => {
        $notify.error({
          title: error,
          message: error,
        });
        return;
      })
    },

    getGaVerify: function () {
      let params = new FormData();
      let self = this;

      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);

      getAxios('http://api.1xch.one/index.php?c=user&a=get_on_ga_verify', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return
        }
        self.gaVerifyUrl = self.googleGaDoamin + resp.qrcode_url;
        self.GaInfo = resp;

      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return
      })
    },

    getUserCoinList: function () {
      let params = new FormData();
      let self = this;
      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);

      getAxios('http://api.1xch.one/index.php?c=balance&a=user_coin_list', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return;
        }
        self.userCoinList = resp.list;
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return
      })
    },

    getCountryList: function () {
      let params = new FormData();
      let self = this;
      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);

      getAxios('http://api.1xch.one/index.php?c=common&a=country_list', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return;
        }

        self.countryList = resp.list;
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return
      })
    },

    applyKycStatus: function () {
      let params = new FormData();
      let self = this;
      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);

      getAxios('http://api.1xch.one/index.php?c=user&a=apply_kyc_status', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return;
        }
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return
      })
    },

    confirmGaCertify: function () {
      let self = this;
      let params = new FormData();
      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);
      params.append('ga_code', this.gaInput.gaCode);
      params.append('password', this.gaInput.password);

      getAxios('http://api.1xch.one/index.php?c=user&a=on_ga_verify', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return;
        }

        self.$notify.success({
          title: 'Success',
          message: resp.msg,
        });
        self.gaDialog = false;

      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return;
      });
    },


  },

}
</script>

<style scoped>
.card-style {
  margin: 50px 120px;
}

.card-body-row {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
}

.body-title {
  margin-bottom: 20px;
}

.dialog-row {
  margin: 10px;
}

.name-input {
  width: 200px;
  display: flex;
  margin: 10px;
  align-items: center;
}

.dialog-select {
  margin: 10px;
}

.name-inputs {
  display: flex;
  margin: 10px 40px;
  justify-content: space-between;
}

.id-input {
  display: flex;
  margin: 10px 40px;
  align-items: center;
}

.upload-style {
  padding-left: 20%;
}
</style>