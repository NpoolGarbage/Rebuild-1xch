import{_}from"./index.be6e309c.js";import{r as n,o as u,c as p,a as t,w as d,j as c}from"./vendor.ae7442e4.js";const m={data:function(){return{currentPage:1,partOrderList:[],orderList:[{amount_profit_total:"0.0000",buy_time:"2021-09-13 15:59:57",cid:"16",computing_power_unit:"T",field_value:null,icon_url:"coin/20210330/943422859b06f838c0461cf703fa6940.png",mortgage_coin_num:"0.0000000000",num:"1",oid:"1",package_last:"0.0000",package_num:"1.000000",package_status:"1",package_status_date:"0",package_status_name:"\u5C01\u88C5\u5B8C\u6210",package_total:"1.0000",pay_coin:"USDT",pay_status:"0",pay_status_name:"\u672A\u652F\u4ED8",pay_time:"2021-09-13 15:59:57",pay_total_price:"100.00",pc_id:"6",pid:"12",platform_mortgage_coin_num:"0.0000000000",precision_bits:"4",price:"100.00",profit_end_date:"--",profit_last:"0.0000",profit_last_date:"0",profit_mortgage_rate:"0.0000",profit_start_date:"--",profit_status:"0",profit_status_name:"\u672A\u53D1\u653E",profit_total:"0.0000",profit_unfrozen_last:"0.0000",profit_unfrozen_total:"0.0000",service_charge_rate:"0.2000",status:"2",status_name:"\u8BA2\u5355\u5DF2\u4F5C\u5E9F",status_time:"2021-09-13 16:00:08",symbol:"CHIA",title:"CHIA+MASS MINING",total_price:"100.00",uid:"3"}]}},created:function(){this.$store.commit("lang/setAllTranslation",this.$cookies.get("lang"))},computed:{myTranslation:function(){return this.$store.state.lang.allTranslation.endorder},allOrder:function(){return this.$store.state.order.endOrder}},watch:{partOrderList:{deep:!0,immediate:!0,handler:function(r,l){}},currentPage:{deep:!0,immediate:!0,handler:function(r,l){}}},methods:{handleCurrentChange:function(r){this.partOrderList=this.allOrder.list.slice((r-1)*this.allOrder.limit,r*this.allOrder.limit+1)}}},f={class:"order-body"};function g(r,l,b,y,h,e){const a=n("el-table-column"),o=n("el-table"),i=n("el-pagination");return u(),p("div",f,[t(o,{data:e.allOrder.list,style:{width:"100%"}},{default:d(()=>[t(a,{prop:"oid",label:e.myTranslation.orderNum},null,8,["label"]),t(a,{prop:"buy_time",label:e.myTranslation.orderTime},null,8,["label"]),t(a,{prop:"package_total + computing_power_unit",label:e.myTranslation.power},null,8,["label"]),t(a,{prop:"symbol",label:e.myTranslation.coinType},null,8,["label"]),t(a,{prop:"profit_total",label:e.myTranslation.totalEarn},null,8,["label"]),t(a,{prop:"profit_last",label:e.myTranslation.yesterdayEarn},null,8,["label"]),t(a,{prop:"profit_end_date",label:e.myTranslation.daysLeft},null,8,["label"]),t(a,{prop:"status_name",label:e.myTranslation.status},null,8,["label"])]),_:1},8,["data"]),c("div",null,[t(i,{currentPage:r.currentPage,"onUpdate:currentPage":l[0]||(l[0]=s=>r.currentPage=s),"page-size":e.allOrder.limit,layout:"total, prev, pager, next",total:e.allOrder.total,onCurrentChange:e.handleCurrentChange},null,8,["currentPage","page-size","total","onCurrentChange"])])])}var C=_(m,[["render",g],["__scopeId","data-v-8fdae004"]]);export{C as default};