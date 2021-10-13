<template>
  <div class="basic-page">
    <span class="title-text">{{ symbol }}{{myTranslation.pageTitle}}</span>
    <div class="basic-table">
      <el-table :data="depositRecordList">
        <el-table-column :label="myTranslation.t1" prop="did"></el-table-column>
        <el-table-column :label="myTranslation.t2" prop="blocknumber"></el-table-column>
        <el-table-column :label="myTranslation.t3" prop="txid"></el-table-column>
        <el-table-column :label="myTranslation.t4" prop="amount"></el-table-column>
        <el-table-column :label="myTranslation.t5" prop="address"></el-table-column>
        <el-table-column :label="myTranslation.t6" prop="dtime"></el-table-column>
        <el-table-column :label="myTranslation.t7" prop="done_name"></el-table-column>
      </el-table>
      <div>
        <el-pagination
          v-model:currentPage="currentPage"
          :page-size="limit"
          layout="total, prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getAxios } from "../../../assets/getaxios";
export default {
  data: function () {
    return {
      symbol: '',
      limit: 10,
      total: 0,
      pageCount: 0,
      depositRecordList: [],
      lang: '',
      tokenid: '',
      currentPage: 1,
    }
  },

  created: function () {
    this.symbol = this.$router.currentRoute.value.path.split('/')[3];
    this.lang = this.$cookies.get('lang');
    this.tokenid = this.$cookies.get('tokenid');
    this.$store.commit('lang/setAllTranslation', this.$cookies.get('lang'));
  },

  computed: {
    myTranslation: function () {
      return this.$store.state.lang.allTranslation.record.deposit;
    },
  },

  watch: {
    depositRecordList: {
      deep: true,
      immediate: true,
      handler: function (n, o) { },
    },

    currentPage: {
      deep: true,
      immediate: true,
      handler: function (n, o) { },
    },
  },

  mounted: function () {
    this.getDepositRecord(1);
  },

  methods: {
    getDepositRecord: function (p) {
      let self = this;
      let params = new FormData();
      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);
      params.append('p', p);
      params.append('limit', this.limit);
      params.append('symbol', this.symbol);

      getAxios('http://api.1xch.one/index.php?c=balance&a=deposit_list', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return;
        }
        self.depositRecordList = resp.list;
        self.total = Number(resp.total);
        self.pageCount = resp.pageCount;
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        });
        return;
      })
    },

    handleCurrentChange: function (p) {
      this.getDepositRecord(p);
    },
  },
}
</script>

<style scoped>
.basic-page {
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
}

.title-text {
  font-size: 32px;
}

.basic-table {
  width: 100%;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>