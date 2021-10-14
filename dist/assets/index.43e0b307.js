import{g}from"./getaxios.1d8b7a65.js";import{_ as b}from"./index.be6e309c.js";import{r as f,o as u,c as w,j as e,k as c,t as o,a as d,w as r,F as T,v as C,n as x,q as I,s as A,u as _}from"./vendor.ae7442e4.js";const F={data:function(){return{domain:"http://api.1xch.one/cache/image/",depositDialog:!1,withdrawDialog:!1,chooseCoin:null,lang:"",tokenid:"",userCoinList:null,pageTotal:0,total:0,withdrawInfo:{},withdrawAddress:"",withdrawNum:"",depositInfo:null,depositAddressInfo:null}},created:function(){this.lang=this.$cookies.get("lang"),this.tokenid=this.$cookies.get("tokenid"),this.$store.commit("lang/setAllTranslation",this.$cookies.get("lang"))},mounted:function(){this.getUserCoinList()},computed:{myTranslation:function(){return this.$store.state.lang.allTranslation.treasure}},watch:{chooseCoin:{deep:!0,immediate:!0,handler:function(t,a){}}},methods:{getUserCoinList:function(){let t=new FormData,a=this;t.append("lang",this.lang),t.append("tokenid",this.tokenid),g("http://api.1xch.one/index.php?c=balance&a=user_coin_list","post",t).then(l=>{let i=l.data;if(i.code!==0){a.$notify.error({title:i.msg,message:i.msg});return}a.userCoinList=i.list}).catch(l=>{a.$notify.error({title:l,message:l})})},openWithdrawDialog:function(t){let a=this,l=new FormData;l.append("lang",this.lang),l.append("tokenid",this.tokenid),l.append("symbol",t.symbol),g("http://api.1xch.one/index.php?c=balance&a=withdraw_info","post",l).then(i=>{let h=i.data;if(h.code!==0){a.$notify.error({title:h.msg,message:h.msg});return}a.withdrawInfo=h}).catch(i=>{a.$notify.error({title:i,message:i})}),this.withdrawDialog=!0},getDepositInfo:function(){let t=this,a=new FormData;a.append("lang",this.lang),a.append("tokenid",this.tokenid),g("http://api.1xch.one/index.php?c=balance&a=deposit_info","post",a).then(l=>{let i=l.data;if(i.code!==0){t.$notify.error({title:i.msg,message:i.msg});return}t.depositInfo=i})},getDepositAddress:function(t){let a=this,l=new FormData;l.append("lang",this.lang),l.append("tokenid",this.tokenid),l.append("symbol",t.symbol),g("http://api.1xch.one/index.php?c=balance&a=get_deposit_address","post",l).then(i=>{let h=i.data;if(h.code!==0){a.$notify.error({title:h.msg,message:h.msg});return}a.depositAddressInfo=h,a.depositDialog=!0}).catch(i=>{a.$notify.error({title:i,message:i})})},openDepositDialog:function(t){this.getDepositInfo(),this.getDepositAddress(t)},deposit:function(){},withdraw:function(){let t=this,a=new FormData;a.append("lang",this.lang),a.append("tokenid",this.tokenid),a.append("amount",this.withdrawNum),a.append("symbol",this.withdrawInfo.symbol),a.append("address",this.withdrawAddress),g("http://api.1xch.one/index.php?c=balance&a=withdraw_apply","post",a).then(l=>{let i=l.data;if(i.code!==0){t.$notify.error({title:i.msg,message:i.msg});return}t.$notify.success({title:"Success!!!",message:"\u63D0\u73B0\u7533\u8BF7\u6210\u529F!!!"}),t.withdrawDialog=!1}).catch(l=>{t.$notify.error({title:l,message:l})})},goToBasicDetail:function(){this.$router.push({path:"/main/basic-detail"})},goToMortgageDetail:function(){this.$router.push({path:"/main/mortgage-detail"})},goToDepositRecord:function(t){this.$router.push({path:"/main/deposit-record/"+t})},goToWithdrawRecord:function(t){this.$router.push({path:"/main/withdraw-record/"+t})}}},N=t=>(x("data-v-ba04f65a"),t=t(),I(),t),V={class:"treasure-body"},L={class:"body-title"},B=N(()=>e("span",{style:{"font-weight":"bolder",color:"rgb(68, 163, 68)","padding-right":"5px"}},"|",-1)),S={style:{"padding-left":"85%"}},U={class:"card-body"},j={class:"card-left"},R={style:{"margin-left":"10px"}},W={class:"title-text"},z={class:"info-style"},M={style:{width:"100%"}},q={style:{"font-weight":"bolder"}},E={key:0,class:"info-style"},$={style:{"font-weight":"bolder"}},G={key:1,class:"info-style"},H={style:{"font-weight":"bolder"}},J={class:"card-right"},K={style:{padding:"10px 0"}},O={style:{padding:"10px 0"}},P={class:"dialog-footer"},Q=c("Cancel"),X=c("Confirm"),Y={class:"row-style"},Z={class:"row-style"},tt={class:"row-style"},et={class:"row-style"},at={class:"row-style"},st={class:"with-input"},ot={class:"with-input"},it={class:"dialog-footer"},lt=c("Cancel"),nt=c("Confirm");function dt(t,a,l,i,h,s){const p=f("el-button"),D=f("el-image"),y=f("el-dialog"),v=f("el-input"),k=f("el-card");return u(),w("div",V,[e("div",L,[B,c(" "+o(s.myTranslation.pageTitle),1)]),e("div",null,[e("div",S,[d(p,{style:{width:"160px"},onClick:s.goToBasicDetail},{default:r(()=>[c(o(s.myTranslation.accountDetail),1)]),_:1},8,["onClick"])]),(u(!0),w(T,null,C(t.userCoinList,n=>(u(),w("div",{key:n.cid,style:{padding:"20px",width:"100%"}},[n.symbol==="FIC"||n.symbol==="USDT"?(u(),A(k,{key:0,class:"coin-card-style"},{default:r(()=>[e("div",U,[e("div",j,[d(D,{class:"img-style",src:n.icon_url.search("image")===-1?"http://api.1xch.one/cache/image/"+n.icon_url:"http://api.1xch.one/cache"+n.icon_url},null,8,["src"]),e("div",R,[e("span",W,o(n.symbol)+" "+o(s.myTranslation.card.wallet),1),e("div",z,[e("div",M,[c(o(s.myTranslation.card.balance)+": ",1),e("span",q,o(n.amount),1)]),d(p,{type:"text",style:{"padding-right":"150px"},onClick:s.goToBasicDetail},{default:r(()=>[c(o(s.myTranslation.card.record),1)]),_:1},8,["onClick"])]),n.symbol==="FIL"?(u(),w("div",E,[e("div",null,[c(o(s.myTranslation.card.diya)+": ",1),e("span",$,o(n.amount_mortgage),1)]),d(p,{type:"text",style:{"padding-right":"150px"},onClick:s.goToMortgageDetail},{default:r(()=>[c(o(s.myTranslation.card.record),1)]),_:1},8,["onClick"])])):_("",!0),n.symbol==="FIL"?(u(),w("div",G,[e("div",null,[c(o(s.myTranslation.card.zhiya)+": ",1),e("span",H,o(n.amount_mortgage_frozen),1)]),d(p,{type:"text",style:{color:"grey","padding-left":"100px"}})])):_("",!0)])]),e("div",J,[e("div",K,[d(p,{style:{"background-color":"rgb(17, 224, 207)",width:"120px"},disabled:n.deposit_valid!==1,onClick:m=>s.openDepositDialog(n)},{default:r(()=>[c(o(s.myTranslation.card.deposit),1)]),_:2},1032,["disabled","onClick"]),d(p,{type:"text",onClick:m=>s.goToDepositRecord(n.symbol)},{default:r(()=>[c(o(s.myTranslation.card.drecord),1)]),_:2},1032,["onClick"])]),e("div",O,[d(p,{style:{width:"120px"},disabled:n.withdraw_valid!==1,onClick:m=>s.openWithdrawDialog(n)},{default:r(()=>[c(o(s.myTranslation.card.withdraw),1)]),_:2},1032,["disabled","onClick"]),d(p,{type:"text",onClick:m=>s.goToWithdrawRecord(n.symbol)},{default:r(()=>[c(o(s.myTranslation.card.wrecord),1)]),_:2},1032,["onClick"])])]),d(y,{modelValue:t.depositDialog,"onUpdate:modelValue":a[2]||(a[2]=m=>t.depositDialog=m),title:s.myTranslation.depositDialog.title},{footer:r(()=>[e("span",P,[d(p,{onClick:a[0]||(a[0]=m=>t.depositDialog=!1)},{default:r(()=>[Q]),_:1}),d(p,{type:"primary",onClick:a[1]||(a[1]=m=>t.depositDialog=!1)},{default:r(()=>[X]),_:1})])]),default:r(()=>[e("div",null,o(t.depositAddressInfo),1)]),_:1},8,["modelValue","title"]),d(y,{modelValue:t.withdrawDialog,"onUpdate:modelValue":a[4]||(a[4]=m=>t.withdrawDialog=m),title:s.myTranslation.withdrawDialog.title},{footer:r(()=>[e("span",it,[d(p,{onClick:a[3]||(a[3]=m=>t.withdrawDialog=!1)},{default:r(()=>[lt]),_:1}),d(p,{type:"primary",onClick:s.withdraw},{default:r(()=>[nt]),_:1},8,["onClick"])])]),default:r(()=>[e("div",null,[e("div",Y,[e("span",null,o(s.myTranslation.withdrawDialog.coinType),1),e("span",null,o(t.withdrawInfo.symbol),1)]),e("div",Z,[e("span",null,o(s.myTranslation.withdrawDialog.availableNum),1),e("span",null,o(t.withdrawInfo.amount),1)]),e("div",tt,[e("span",null,o(s.myTranslation.withdrawDialog.totalNum),1),e("span",null,o(t.withdrawInfo.amount_total),1)]),e("div",et,[e("span",null,o(s.myTranslation.withdrawDialog.fee),1),e("span",null,o(t.withdrawInfo.withdraw_fee),1)]),e("div",at,[e("span",null,o(s.myTranslation.withdrawDialog.minNum),1),e("span",null,o(t.withdrawInfo.withdraw_min_amount),1)])]),e("div",st,[d(v,{"v-model":t.withdrawAddress,placeholder:s.myTranslation.withdrawDialog.address},null,8,["v-model","placeholder"])]),e("div",ot,[d(v,{"v-model":t.withdrawNum,placeholder:s.myTranslation.withdrawDialog.amount},null,8,["v-model","placeholder"])])]),_:1},8,["modelValue","title"])])]),_:2},1024)):_("",!0)]))),128))])])}var ht=b(F,[["render",dt],["__scopeId","data-v-ba04f65a"]]);export{ht as default};
