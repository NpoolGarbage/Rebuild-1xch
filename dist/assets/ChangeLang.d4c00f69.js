import{_ as c}from"./index.26cad032.js";import{r as d,o as _,c as u,a as t,w as a,k as i}from"./vendor.ae7442e4.js";const g={props:["myLang"],data:function(){return{myLang:"English"}},methods:{changeTo:function(o){this.$cookies.set("lang",o),this.$store.commit("lang/setAllTranslation",o)}}},f=i("English"),p=i("\u65E5\u672C\u8A9E");function h(o,e,l,k,v,s){const r=d("el-radio-button"),m=d("el-radio-group");return _(),u("div",null,[t(m,{modelValue:l.myLang,"onUpdate:modelValue":e[2]||(e[2]=n=>l.myLang=n)},{default:a(()=>[t(r,{label:"en",onClick:e[0]||(e[0]=n=>s.changeTo("en"))},{default:a(()=>[f]),_:1}),t(r,{label:"ja",onClick:e[1]||(e[1]=n=>s.changeTo("ja"))},{default:a(()=>[p]),_:1})]),_:1},8,["modelValue"])])}var L=c(g,[["render",h]]);export{L as C};