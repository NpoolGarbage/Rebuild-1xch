import{g as y}from"./getaxios.1c553a85.js";import{_ as w}from"./index.ba543e87.js";import{r as p,o as V,c as k,a as l,w as r,j as d,t as i,k as u}from"./vendor.326b122b.js";const v={data:function(){return{email:"",password:"",confirm_password:"",email_code:"",read_policy:!1,dialogVisible:!1,privacyContent:"this is privacy",lang:"",canSendCode:!1}},created:function(){this.lang=this.$cookies.get("lang"),this.$store.commit("lang/setAllTranslation",this.$cookies.get("lang")),this.keyupRegister()},computed:{myTranslation:function(){return this.$store.state.lang.allTranslation.register}},methods:{keyupRegister:function(){document.onkeydown=e=>{window.event.keyCode===13&&this.register()}},popPrivacy:function(){},register:function(){let e=this;if(this.password===""){this.$notify.error({title:"Error!",message:e.myTranslation.msg1});return}if(this.password!==this.confirm_password){this.$notify.error({title:"Error!",message:e.myTranslation.msg2});return}if(!this.read_policy){this.$notify.error({title:"Error!",message:e.myTranslation.msg3});return}let t=new FormData;t.append("lang",this.lang),t.append("email",this.email),t.append("password",this.password),t.append("email_code",this.email_code),t.append("invite_code",void 0),y("http://api.1xch.one/index.php?c=user&a=reg","post",t).then(a=>{let n=a.data;if(n.code!==0){e.$notify.error({title:n.msg,message:n.msg});return}e.$notify.success({title:"Success!",message:e.myTranslation.msg4}),e.$router.push("/login")}).catch(a=>{e.$notify.error({title:a,msg:a})})},sendVerifyCode:function(){let e=this,t=new FormData;t.append("lang",this.lang),t.append("email",this.email),y("http://api.1xch.one/index.php?c=user&a=send_reg_email_code","post",t).then(a=>{let n=a.data,m=this;if(n.code!==0){m.$notify.error({title:n.msg,message:n.msg});return}m.$notify.success({title:"Success",message:m.myTranslation.msg})}).catch(a=>{e.$notify.error({title:a,message:a})})}}},b={class:"input-div"},T={class:"privacy-policy"},C={style:{color:"white","padding-left":"10px","font-size":"14px"}},x={style:{"padding-top":"10px"}},$={style:{"margin-top":"20px"}},U={style:{color:"white"}};function S(e,t,a,n,m,o){const c=p("el-input"),g=p("el-button"),f=p("el-checkbox"),h=p("router-link"),_=p("el-dialog");return V(),k("div",b,[l(c,{class:"input-style",modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=s=>e.email=s),placeholder:o.myTranslation.emailInput},null,8,["modelValue","placeholder"]),l(c,{class:"input-style",modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=s=>e.password=s),placeholder:o.myTranslation.passwordInput,"show-password":""},null,8,["modelValue","placeholder"]),l(c,{class:"input-style",modelValue:e.confirm_password,"onUpdate:modelValue":t[2]||(t[2]=s=>e.confirm_password=s),placeholder:o.myTranslation.confirmPass,"show-password":""},null,8,["modelValue","placeholder"]),l(c,{class:"input-style",modelValue:e.email_code,"onUpdate:modelValue":t[3]||(t[3]=s=>e.email_code=s),placeholder:o.myTranslation.verifyCode},{append:r(()=>[l(g,{style:{width:"100px","background-color":"rgb(86, 159, 255)",color:"black","text-align":"center"},type:"text",onClick:o.sendVerifyCode,disabled:e.canSendCode},{default:r(()=>[u(i(o.myTranslation.sendCode),1)]),_:1},8,["onClick","disabled"])]),_:1},8,["modelValue","placeholder"]),d("div",T,[l(f,{modelValue:e.read_policy,"onUpdate:modelValue":t[4]||(t[4]=s=>e.read_policy=s)},null,8,["modelValue"]),d("span",C,i(o.myTranslation.agree),1),l(g,{type:"text",style:{color:"rgb(68, 163, 68)",padding:"5px"},onClick:t[5]||(t[5]=s=>e.dialogVisible=!0)},{default:r(()=>[u(i(o.myTranslation.pp),1)]),_:1})]),d("div",x,[l(g,{onClick:o.register,class:"register-button"},{default:r(()=>[u(i(o.myTranslation.button),1)]),_:1},8,["onClick"])]),d("div",$,[d("span",U,i(o.myTranslation.exist),1),l(h,{to:"/login",style:{color:"rgb(68, 163, 68)","text-decoration":"none",padding:"5px"}},{default:r(()=>[u(i(o.myTranslation.login),1)]),_:1})]),l(_,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[6]||(t[6]=s=>e.dialogVisible=s),title:"Privacy Policy",width:"40%"},{default:r(()=>[d("span",null,i(e.privacyContent),1)]),_:1},8,["modelValue"])])}var B=w(v,[["render",S],["__scopeId","data-v-0c74f7e7"]]);export{B as default};