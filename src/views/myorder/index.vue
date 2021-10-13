<template>
  <div class="order-body">
    <el-table :data="allOrder.list" style="width: 100%">
      <el-table-column prop="oid" :label="myTranslation.orderNum" />
      <el-table-column prop="buy_time" :label="myTranslation.orderTime" />
      <el-table-column prop="package_total + computing_power_unit" :label="myTranslation.power" />
      <el-table-column prop="symbol" :label="myTranslation.coinType" />
      <el-table-column prop="profit_total" :label="myTranslation.totalEarn" />
      <el-table-column prop="profit_last" :label="myTranslation.yesterdayEarn" />
      <el-table-column prop="profit_end_date" :label="myTranslation.daysLeft" />
      <el-table-column prop="status_name" :label="myTranslation.status" />
    </el-table>
    <div>
      <el-pagination
        v-model:currentPage="currentPage"
        :page-size="allOrder.limit"
        layout="total, prev, pager, next"
        :total="allOrder.total"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      currentPage: 1,
      partOrderList: [],
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
    }
  },

  created: function(){
    this.$store.commit('lang/setAllTranslation', this.$cookies.get('lang'));
  },

  computed: {
    myTranslation: function () {
      return this.$store.state.lang.allTranslation.myorder;
    },

    allOrder: function () {
      return this.$store.state.order.totalOrder
    },
  },

  watch: {
    partOrderList: {
      deep: true,
      immediate: true,
      handler: function (n, o) {

      },
    },

    currentPage: {
      deep: true,
      immediate: true,
      handler: function (n, o) { },
    },
  },

  methods: {
    handleCurrentChange: function (p) {
      this.partOrderList = this.allOrder.list.slice((p - 1) * this.allOrder.limit, p * this.allOrder.limit + 1);
    },
  },
}
</script>

<style scoped>
.order-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>