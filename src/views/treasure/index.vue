<template>
  <div class="treasure-body">
    <div class="body-title">
      <span style="font-weight: bolder; color: rgb(68, 163, 68); padding-right: 5px;">|</span>
      {{ myTranslation.pageTitle }}
    </div>
    <div>
      <div style="padding-left: 85%">
        <el-button style="width: 160px" @click="goToBasicDetail">{{ myTranslation.accountDetail }}</el-button>
      </div>
      <div v-for="coin in userCoinList" :key="coin.cid" style="padding: 20px; width: 100%;">
        <el-card class="coin-card-style">
          <div class="card-body">
            <div class="card-left">
              <el-image
                class="img-style"
                :src="coin.icon_url.search('image') === -1 ? 'http://api.1xch.one/cache/image/' + coin.icon_url : 'http://api.1xch.one/cache' + coin.icon_url"
              ></el-image>
              <div style="margin-left: 10px;">
                <span class="title-text">{{ coin.symbol }} {{ myTranslation.card.wallet }}</span>
                <div class="info-style">
                  <div style="width: 100%">
                    {{ myTranslation.card.balance }}:
                    <span
                      style="font-weight: bolder;"
                    >{{ coin.amount }}</span>
                  </div>
                  <el-button
                    type="text"
                    style="padding-right: 150px;"
                    @click="goToBasicDetail"
                  >{{ myTranslation.card.record }}</el-button>
                </div>

                <div v-if="coin.symbol === 'FIL'" class="info-style">
                  <div>
                    {{ myTranslation.card.diya }}:
                    <span
                      style="font-weight: bolder;"
                    >{{ coin.amount_mortgage }}</span>
                  </div>
                  <el-button
                    type="text"
                    style="padding-right: 150px;"
                    @click="goToMortgageDetail"
                  >{{ myTranslation.card.record }}</el-button>
                </div>
                <div v-if="coin.symbol === 'FIL'" class="info-style">
                  <div>
                    {{ myTranslation.card.zhiya }}:
                    <span
                      style="font-weight: bolder;"
                    >{{ coin.amount_mortgage_frozen }}</span>
                  </div>

                  <el-button type="text" style="color: grey; padding-left: 100px;"></el-button>
                </div>
              </div>
            </div>

            <div class="card-right">
              <div style="padding: 10px 0;">
                <el-button
                  style="background-color: rgb(17, 224, 207); width: 120px;"
                  :disabled="coin.deposit_valid === 1 ? false : true"
                  @click="openDepositDialog(coin)"
                >{{ myTranslation.card.deposit }}</el-button>
                <el-button
                  type="text"
                  @click="goToDepositRecord(coin.symbol)"
                >{{ myTranslation.card.drecord }}</el-button>
              </div>
              <div style="padding: 10px 0;">
                <el-button
                  style="width: 120px;"
                  :disabled="coin.withdraw_valid === 1 ? false : true"
                  @click="openWithdrawDialog(coin)"
                >{{ myTranslation.card.withdraw }}</el-button>
                <el-button
                  type="text"
                  @click="goToWithdrawRecord(coin.symbol)"
                >{{ myTranslation.card.wrecord }}</el-button>
              </div>
            </div>

            <el-dialog v-model="depositDialog" :title="myTranslation.depositDialog.title">
              <div>
                {{depositAddressInfo}}
              </div>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="depositDialog = false">Cancel</el-button>
                  <el-button type="primary" @click="depositDialog = false">Confirm</el-button>
                </span>
              </template>
            </el-dialog>

            <el-dialog v-model="withdrawDialog" :title="myTranslation.withdrawDialog.title">
              <div>
                <div class="row-style">
                  <span>{{ myTranslation.withdrawDialog.coinType }}</span>
                  <span>{{ withdrawInfo.symbol }}</span>
                </div>
                <div class="row-style">
                  <span>{{ myTranslation.withdrawDialog.availableNum }}</span>
                  <span>{{ withdrawInfo.amount }}</span>
                </div>
                <div class="row-style">
                  <span>{{ myTranslation.withdrawDialog.totalNum }}</span>
                  <span>{{ withdrawInfo.amount_total }}</span>
                </div>
                <div class="row-style">
                  <span>{{ myTranslation.withdrawDialog.fee }}</span>
                  <span>{{ withdrawInfo.withdraw_fee }}</span>
                </div>
                <div class="row-style">
                  <span>{{ myTranslation.withdrawDialog.minNum }}</span>
                  <span>{{ withdrawInfo.withdraw_min_amount }}</span>
                </div>
              </div>

              <div class="with-input">
                <el-input
                  :v-model="withdrawAddress"
                  :placeholder="myTranslation.withdrawDialog.address"
                ></el-input>
              </div>
              <div class="with-input">
                <el-input :v-model="withdrawNum" :placeholder="myTranslation.withdrawDialog.amount"></el-input>
              </div>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="withdrawDialog = false">Cancel</el-button>
                  <el-button type="primary" @click="withdraw">Confirm</el-button>
                </span>
              </template>
            </el-dialog>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getAxios } from "../../assets/getaxios";
export default {
  data: function () {
    return {
      domain: 'http://api.1xch.one/cache/image/',
      depositDialog: false,
      withdrawDialog: false,
      chooseCoin: null,
      lang: '',
      tokenid: '',
      userCoinList: null,
      pageTotal: 0,
      total: 0,
      withdrawInfo: {},
      withdrawAddress: '',
      withdrawNum: '',
      depositInfo: null,
      depositAddressInfo: null,
    }
  },

  created: function () {
    this.lang = this.$cookies.get('lang');
    this.tokenid = this.$cookies.get('tokenid');
    this.$store.commit('lang/setAllTranslation', this.$cookies.get('lang'));
  },

  mounted: function () {
    this.getUserCoinList();
  },

  computed: {
    myTranslation: function () {
      return this.$store.state.lang.allTranslation.treasure;
    },
  },

  watch: {
    chooseCoin: {
      deep: true,
      immediate: true,
      handler: function (n, o) { },
    },
  },

  methods: {
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

    openWithdrawDialog: function (coin) {
      let self = this;
      let params = new FormData();
      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);
      params.append('symbol', coin.symbol);

      getAxios('http://api.1xch.one/index.php?c=balance&a=withdraw_info', 'post', params).then(response => {
        let resp = response.data;

        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return
        }
        self.withdrawInfo = resp;
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return;
      })

      this.withdrawDialog = true;
    },

    getDepositInfo: function () {
      let self = this;
      let params = new FormData();

      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);

      getAxios('http://api.1xch.one/index.php?c=balance&a=deposit_info', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return
        }
        self.depositInfo = resp;

      });
    },

    getDepositAddress: function (coin) {
      let self = this;
      let params = new FormData();

      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);
      params.append('symbol', coin.symbol);

      getAxios('http://api.1xch.one/index.php?c=balance&a=get_deposit_address', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return
        }
        self.depositAddressInfo = resp;
        self.depositDialog = true;
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        })
      })
    },

    openDepositDialog: function (coin) {
      this.getDepositInfo();
      this.getDepositAddress(coin);

    },

    deposit: function () {

    },
    withdraw: function () {
      let self = this;
      let params = new FormData();
      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);
      params.append('amount', this.withdrawNum);
      params.append('symbol', this.withdrawInfo.symbol);
      params.append('address', this.withdrawAddress);

      getAxios('http://api.1xch.one/index.php?c=balance&a=withdraw_apply', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return
        }
        self.$notify.success({
          title: 'Success!!!',
          message: '提现申请成功!!!',
        });
        self.withdrawDialog = false;
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        })
      })
    },

    goToBasicDetail: function () {
      this.$router.push({ path: '/main/basic-detail' });
    },

    goToMortgageDetail: function () {
      this.$router.push({ path: '/main/mortgage-detail' });
    },

    goToDepositRecord: function (symbol) {
      this.$router.push({ path: '/main/deposit-record/' + symbol });
    },

    goToWithdrawRecord: function (symbol) {
      this.$router.push({ path: '/main/withdraw-record/' + symbol });
    },
  }
}
</script>

<style scoped>
.treasure-body {
  margin: 50px 120px;
}

.img-style {
  width: 64px;
  height: 64px;
  padding-left: 20px;
}
.card-body {
  display: flex;
  justify-content: space-between;
}

.card-left {
  display: flex;
  align-items: center;
}

.info-style {
  height: 30px;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-text {
  font-weight: bolder;
  font-size: 24px;
  margin-bottom: 5px;
}

.row-style {
  display: flex;
  justify-content: space-between;
  margin: 5px 15px;
}

.body-title {
  margin-bottom: 20px;
}

.with-input {
  margin: 20px 0px;
}
</style>