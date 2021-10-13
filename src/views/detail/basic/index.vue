<template>
  <div class="basic-page">
    <span class="title-text">{{myTranslation.pageTitle1}}</span>
    <div class="basic-table">
      <el-table :data="accountDetailList">
        <el-table-column :label="myTranslation.t1" prop="id"></el-table-column>
        <el-table-column :label="myTranslation.t2" prop="amount"></el-table-column>
        <el-table-column :label="myTranslation.t3" prop="symbol"></el-table-column>
        <el-table-column :label="myTranslation.t4" :prop="category === -1 ? myTranslation.zhichu : myTranslation.shouru"></el-table-column>
        <el-table-column :label="myTranslation.t5" prop="type_name"></el-table-column>
        <el-table-column :label="myTranslation.t6" prop="info"></el-table-column>
        <el-table-column :label="myTranslation.t7" prop="create_time"></el-table-column>
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
import { getAxios } from "../../../assets/getaxios"
export default {
  data: function () {
    return {
      accountDetailList: [],
      lang: '',
      tokenid: '',
      pageCount: 0,
      total: 0,
      limit: 10,
      currentPage: 1,
    }
  },

  created: function () {
    this.lang = this.$cookies.get('lang');
    this.tokenid = this.$cookies.get('tokenid');
    this.$store.commit('lang/setAllTranslation', this.$cookies.get('lang'));
  },

  computed: {
    myTranslation: function () {
      return this.$store.state.lang.allTranslation.detail;
    },
  },

  mounted: function () {
    this.getAmountDetail(1);
  },

  watch: {
    accountDetailList: {
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

  methods: {
    getAmountDetail: function (p) {
      let self = this;
      let params = new FormData();
      params.append('lang', this.lang);
      params.append('tokenid', this.tokenid);
      params.append('p', p);
      params.append('limit', this.limit);

      getAxios('http://api.1xch.one/index.php?c=balance&a=user_coin_amount_log', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return
        }
        self.accountDetailList = resp.list;
        self.pageCount = resp.pageCount;
        self.total = Number(resp.total);
      }).catch(error => {
        self.$notify.error({
          title: error,
          message: error,
        })
      })
    },

    handleCurrentChange: function (p) {
      this.getAmountDetail(p);
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