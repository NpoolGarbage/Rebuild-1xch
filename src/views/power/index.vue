<template>
  <div class="power-body" v-loading="loading">
    <div class="body-title">
      <span style="font-weight: bolder; color: rgb(68, 163, 68); padding-right: 5px;">|</span>
      {{ myTranslation.pageTitle }}
    </div>
    <div>
      <div class="cards-display">
        <el-card class="card-style">
          <div class="card-title-style">
            <span class="profit-font">${{ totalGet }}</span>
            <span
              style="font-size: 14px; padding-top: 10px; color: grey;"
            >{{ myTranslation.card.total }}</span>
          </div>
          <el-divider></el-divider>
          <div>
            <el-row :gutter="24">
              <el-col v-for="coin in userCoinList" :key="coin.cid" :span="12">
                <div style="display: flex;align-items: center;">
                  <el-image
                    style="width: 30px; height: 30px; padding: 5px;"
                    :src="coin.icon_url.search('image') === -1 ? 'http://api.1xch.one/cache/image/' + coin.icon_url : 'http://api.1xch.one/cache' + coin.icon_url"
                  ></el-image>
                  <span>{{ coin.symbol }}</span>
                  <span>${{ allCoinInfo[coin.symbol].total }}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <el-card class="card-style">
          <div class="card-title-style">
            <span class="profit-font">${{ yesterdayGet }}</span>
            <span
              style="font-size: 14px; padding-top: 10px; color: grey;"
            >{{ myTranslation.card.yesterday }}</span>
          </div>
          <el-divider></el-divider>
          <div>
            <el-row :gutter="24">
              <el-col v-for="coin in userCoinList" :key="coin.cid" :span="12">
                <div style="display: flex;align-items: center;">
                  <el-image
                    style="width: 30px; height: 30px; padding: 5px;"
                    :src="coin.icon_url.search('image') === -1 ? 'http://api.1xch.one/cache/image/' + coin.icon_url : 'http://api.1xch.one/cache' + coin.icon_url"
                  ></el-image>
                  <span>{{ coin.symbol }}</span>
                  <span>${{ allCoinInfo[coin.symbol].yesterday }}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <el-card class="card-style">
          <div class="card-title-style">
            <span class="profit-font">${{ availableGet }}</span>
            <span
              style="font-size: 14px; padding-top: 10px; color: grey;"
            >{{ myTranslation.card.available }}</span>
          </div>
          <el-divider></el-divider>
          <div>
            <el-row :gutter="24">
              <el-col v-for="coin in userCoinList" :key="coin.cid" :span="12">
                <div style="display: flex;align-items: center;">
                  <el-image
                    style="width: 30px; height: 30px; padding: 5px;"
                    :src="coin.icon_url.search('image') === -1 ? 'http://api.1xch.one/cache/image/' + coin.icon_url : 'http://api.1xch.one/cache' + coin.icon_url"
                  ></el-image>
                  <span>{{ coin.symbol }}</span>
                  <span>${{ allCoinInfo[coin.symbol].available }}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>

      <div style="margin: 30px 0px;">
        <el-card>
          <!-- <div class="sec-card-title">
            <a>
              <router-link
                to="/main/power/myorder"
                class="router-link-style"
              >{{ myTranslation.tablle.myOrder }}</router-link>
            </a>
            <a>
              <router-link
                to="/main/power/progressing"
                class="router-link-style"
              >{{ myTranslation.tablle.progress }}</router-link>
            </a>
            <a>
              <router-link
                to="/main/power/wait"
                class="router-link-style"
              >{{ myTranslation.tablle.wait }}</router-link>
            </a>
            <a>
              <router-link
                to="/main/power/end"
                class="router-link-style"
              >{{ myTranslation.tablle.end }}</router-link>
            </a>
          </div> -->
          <div  class="sec-card-title">
            <el-radio-group v-model="nowChoose">
              <el-radio-button :label="myTranslation.tablle.myOrder" @click="pushTo('myorder')">

              </el-radio-button>
              <el-radio-button :label="myTranslation.tablle.progress" @click="pushTo('progress')">

              </el-radio-button>
              <el-radio-button :label="myTranslation.tablle.wait" @click="pushTo('wait')">

              </el-radio-button>
              <el-radio-button :label="myTranslation.tablle.end" @click="pushTo('end')">

              </el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px;">
            <router-view></router-view>
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
      nowChoose: '',
      orderList: [
        {
          amount_profit_total: "0.0000",
          buy_time: "2021-09-13 15:59:57",
          cid: "16",
          computing_power_unit: "T",
          field_value: null,
          icon_url: "coin/20210330/943422859b06f838c0461cf703fa6940.png",
          mortgage_coin_num: "0.0000000000",
          num: "1",
          oid: "1",
          package_last: "0.0000",
          package_num: "1.000000",
          package_status: "1",
          package_status_date: "0",
          package_status_name: "封装完成",
          package_total: "1.0000",
          pay_coin: "USDT",
          pay_status: "0",
          pay_status_name: "未支付",
          pay_time: "2021-09-13 15:59:57",
          pay_total_price: "100.00",
          pc_id: "6",
          pid: "12",
          platform_mortgage_coin_num: "0.0000000000",
          precision_bits: "4",
          price: "100.00",
          profit_end_date: "--",
          profit_last: "0.0000",
          profit_last_date: "0",
          profit_mortgage_rate: "0.0000",
          profit_start_date: "--",
          profit_status: "0",
          profit_status_name: "未发放",
          profit_total: "0.0000",
          profit_unfrozen_last: "0.0000",
          profit_unfrozen_total: "0.0000",
          service_charge_rate: "0.2000",
          status: "2",
          status_name: "订单已作废",
          status_time: "2021-09-13 16:00:08",
          symbol: "CHIA",
          title: "CHIA+MASS MINING",
          total_price: "100.00",
          uid: "3",
        },
      ],
      domain: 'http://api.1xch.one/cache/image/',
      lang: '',
      tokenid: '',
      userCoinList: null,
      pageTotal: 0,
      total: 0,
      loading: true,
      totalGet: 0,
      yesterdayGet: 0,
      availableGet: 0,
      allCoinInfo: {
        FIL: {
          symbol: '',
          total: 0,
          img: '',
          yesterday: 0,
          available: 0,
        },
        CHIA: {
          symbol: '',
          total: 0,
          img: '',
          yesterday: 0,
          available: 0,
        },
        USDT: {
          symbol: '',
          total: 0,
          img: '',
          yesterday: 0,
          available: 0,
        },
        FIC: {
          symbol: '',
          total: 0,
          img: '',
          yesterday: 0,
          available: 0,
        },
      },
    }
  },

  created: function () {
    this.lang = this.$cookies.get('lang');
    this.tokenid = this.$cookies.get('tokenid');
    this.$store.commit('lang/setAllTranslation', this.$cookies.get('lang'));
    this.$router.push('/main/power/myorder');
    this.nowChoose = this.myTranslation.tablle.myOrder;
  },

  mounted: function () {
    this.getUserCoinList();
    this.getOrderList(1);
    this.getAllOrderList();
  },

  watch: {
    totalGet: {
      deep: true,
      immediate: true,
      handler: function (n, o) { },
    },

    yesterdayGet: {
      deep: true,
      immediate: true,
      handler: function (n, o) { },
    },

    availableGet: {
      deep: true,
      immediate: true,
      handler: function (n, o) { },
    },

    allCoinInfo: {
      deep: true,
      immediate: true,
      handler: function (n, o) { },
    },

    userCoinList: {
      deep: true,
      immediate: true,
      handler: function (n, o) { },
    },
  },

  computed: {
    myTranslation: function () {
      return this.$store.state.lang.allTranslation.power;
    },
  },

  methods: {
    pushTo: function(to) {
      switch (to) {
        case 'myorder':
          this.$router.push('/main/power/myorder');
          break;
          case 'progress':
          this.$router.push('/main/power/progressing');
          break;
          case 'wait':
          this.$router.push('/main/power/wait');
          break;
          case 'end':
          this.$router.push('/main/power/end');
          break;
      
        default:
          break;
      }
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

    getOrderList: function (p) {
      let self = this;
      let params = new FormData();
      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);
      params.append('p', p);
      params.append('limit', 10);
      params.append('cid', '');

      getAxios('http://api.1xch.one/index.php?c=order&a=my_order_list', 'post', params).then(response => {
        let resp = response.data;

        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp, msg,
          });
          return
        }
        self.pageTotal = resp.pageTotal;
        self.total = Number(resp.total);
        return resp.list;
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return
      })
    },

    getAllOrderList: function () {
      if (this.pageTotal === 0) {
        this.loading = false;
        return
      }
      let self = this;

      let totalOrderList = [];
      let waitOrderList = [];
      let progressingOrderList = [];
      let endOrderList = [];

      for (let i = 1; i <= this.pageTotal; i++) {
        let orderList = this.getOrderList(i);
        orderList.forEach(order => {
          self.totalGet += Number(order.profit_total);
          self.yesterdayGet += Number(order.profit_last);
          self.availableGet += Number(order.amount_profit_total);
          totalOrderList.push(order);
          switch (order.symbol) {
            case 'CHIA':
              self.allCoinInfo.CHIA.symbol = order.symbol;
              self.allCoinInfo.CHIA.total += Number(order.profit_total);
              self.allCoinInfo.CHIA.img = order.icon_url;
              self.allCoinInfo.CHIA.yesterday += Number(order.profit_last);
              self.allCoinInfo.CHIA.available += Number(order.amount_profit_total);
              break;
            case 'USDT':
              self.allCoinInfo.USDT.symbol = order.symbol;
              self.allCoinInfo.USDT.total += Number(order.profit_total);
              self.allCoinInfo.USDT.img = order.icon_url;
              self.allCoinInfo.USDT.yesterday += Number(order.profit_last);
              self.allCoinInfo.USDT.available += Number(order.amount_profit_total);
              break;
            case 'FIL':
              self.allCoinInfo.FIL.symbol = order.symbol;
              self.allCoinInfo.FIL.total += Number(order.profit_total);
              self.allCoinInfo.FIL.img = order.icon_url;
              self.allCoinInfo.FIL.yesterday += Number(order.profit_last);
              self.allCoinInfo.FIL.available += Number(order.amount_profit_total);
              break;
            case 'FIC':
              self.allCoinInfo.FIC.symbol = order.symbol;
              self.allCoinInfo.FIC.total += Number(order.profit_total);
              self.allCoinInfo.FIC.img = order.icon_url;
              self.allCoinInfo.FIC.yesterday += Number(order.profit_last);
              self.allCoinInfo.FIC.available += Number(order.amount_profit_total);
              break;

            default:
              break;
          }

          switch (order.status) {
            case '0':
              waitOrderList.push(order);
              break;
            case '1':
              progressingOrderList.push(order);
              break;
            case '2':
              endOrderList.push(order);
              break;
            case '3':
              endOrderList.push(order);
              break;
            default:
              break;
          }
        });
      }

      let totalOrder = {
        list: totalOrderList,
        limit: this.limit,
        total: totalOrderList.length,
        pageTotal: Math.ceil(totalOrderList.length / limit),
      };
      let waitOrder = {
        list: waitOrderList,
        limit: this.limit,
        total: waitOrderList.length,
        pageTotal: Math.ceil(totalOrderList.length / limit),
      };
      let progressOrder = {
        list: progressingOrderList,
        limit: this.limit,
        total: progressingOrderList.length,
        pageTotal: Math.ceil(totalOrderList.length / limit),
      };
      let endOrder = {
        list: endOrderList,
        limit: this.limit,
        total: endOrderList.length,
        pageTotal: Math.ceil(totalOrderList.length / limit),
      };

      this.$store.commit('order/setOrder', totalOrder, progressOrder, waitOrder, endOrder);
      this.loading = false;
    },
  },
}
</script>

<style scoped>
.power-body {
  margin: 50px 120px;
}

.cards-display {
  display: flex;
  justify-content: space-around;
}

.card-style {
  width: 350px;
  height: 220px;
  margin: 0 10px;
}

.profit-font {
  font-size: 24px;
  color: rgb(68, 163, 68);
  font-weight: bold;
}

.card-title-style {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.radio-button {
  border: 0px;
}

.router-link-style {
  text-decoration: none;
  color: grey;
  margin: 0px 10px;
}

a {
  text-decoration: none;
  color: grey;
}

a:visited {
  text-decoration: none;
  color: grey;
}

a:hover {
  color: rgb(68, 163, 68);
  text-decoration: underline rgb(68, 163, 68);
}

a:active {
  color: rgb(68, 163, 68);
  text-decoration: underline rgb(68, 163, 68);
}

.body-title {
  margin-bottom: 20px;
}
</style>