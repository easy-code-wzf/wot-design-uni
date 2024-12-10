import{d as e,r as t,H as a,v as s,q as l,m as r,ab as i,o,c as n,w as d,e as c,x as f,n as u,p as _,f as p,t as h,g as b,F as m,y as w,u as x,i as v,L as g,a as k,b as y,as as I,ag as $}from"./index-WwrgI7Rh.js";import{f as C,l as T,m as D,w as z,q as j,o as A,I as H,h as L,b as S,c as B,d as V,a as q}from"./page-wraper.XLZNc_u_.js";import{_ as G}from"./demo-block.BZqo-_az.js";import{_ as F}from"./wd-search.vFrYTWIO.js";import"./useTranslate.B9y1fU2w.js";const N=S(e({name:"wd-navbar",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...C,title:String,leftText:String,rightText:String,leftArrow:T(!1),bordered:T(!0),fixed:T(!1),placeholder:T(!1),zIndex:D(500),safeAreaInsetTop:T(!1),leftDisabled:T(!1),rightDisabled:T(!1)},emits:["click-left","click-right"],setup(e,{emit:k}){const y=e,I=k,$=t(""),{statusBarHeight:C}=a();s([()=>y.fixed,()=>y.placeholder],(()=>{V()}),{deep:!0,immediate:!1});const T=l((()=>{const e={};return y.fixed&&j(y.zIndex)&&(e["z-index"]=y.zIndex),y.safeAreaInsetTop&&(e["padding-top"]=L(C||0)),`${A(e)};${y.customStyle}`}));function D(){y.leftDisabled||I("click-left")}function S(){y.rightDisabled||I("click-right")}r((()=>{y.fixed&&y.placeholder&&i((()=>{V()}))}));const{proxy:B}=g();function V(){y.fixed&&y.placeholder&&H(".wd-navbar",!1,B).then((e=>{$.value=e.height}))}return(e,t)=>{const a=v;return o(),n(a,{style:w({height:x(L)($.value)})},{default:d((()=>[c(a,{class:u(`wd-navbar ${e.customClass} ${e.fixed?"is-fixed":""} ${e.bordered?"is-border":""}`),style:w(T.value)},{default:d((()=>[c(a,{class:"wd-navbar__content"},{default:d((()=>[e.$slots.capsule?(o(),n(a,{key:0,class:"wd-navbar__capsule"},{default:d((()=>[f(e.$slots,"capsule",{},void 0,!0)])),_:3})):e.$slots.left?(o(),n(a,{key:2,class:u("wd-navbar__left "+(e.leftDisabled?"is-disabled":"")),onClick:D},{default:d((()=>[f(e.$slots,"left",{},void 0,!0)])),_:3},8,["class"])):(o(),n(a,{key:1,class:u("wd-navbar__left "+(e.leftDisabled?"is-disabled":"")),onClick:D},{default:d((()=>[e.leftArrow?(o(),n(z,{key:0,name:"arrow-left","custom-class":"wd-navbar__arrow"})):_("",!0),e.leftText?(o(),n(a,{key:1,class:"wd-navbar__text"},{default:d((()=>[p(h(e.leftText),1)])),_:1})):_("",!0)])),_:1},8,["class"])),c(a,{class:"wd-navbar__title"},{default:d((()=>[f(e.$slots,"title",{},void 0,!0),!e.$slots.title&&e.title?(o(),b(m,{key:0},[p(h(e.title),1)],64)):_("",!0)])),_:3}),e.$slots.right||e.rightText?(o(),n(a,{key:3,class:u("wd-navbar__right "+(e.rightDisabled?"is-disabled":"")),onClick:S},{default:d((()=>[f(e.$slots,"right",{},void 0,!0),!e.$slots.right&&e.rightText?(o(),n(a,{key:0,class:"wd-navbar__text","hover-class":"wd-navbar__text--hover","hover-stay-time":70},{default:d((()=>[p(h(e.rightText),1)])),_:1})):_("",!0)])),_:3},8,["class"])):_("",!0)])),_:3})])),_:3},8,["class","style"])])),_:3},8,["style"])}}}),[["__scopeId","data-v-8e0cca2b"]]),R=S(e({name:"wd-navbar-capsule",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},emits:["back","back-home"],setup(e,{emit:t}){const a=t;function s(){a("back")}function l(){a("back-home")}return(e,t)=>{const a=v;return o(),n(a,{class:"wd-navbar-capsule"},{default:d((()=>[c(z,{onClick:s,name:"chevron-left","custom-class":"wd-navbar-capsule__icon"}),c(z,{onClick:l,name:"home","custom-class":"wd-navbar-capsule__icon"})])),_:1})}}}),[["__scopeId","data-v-1602ca34"]]),U=S(e({__name:"Index",setup(e){const a=t(""),{show:s}=B();function l(){I({})}function r(){s("按钮")}function i(){I({})}function n(){$({url:"/pages/index/Index"})}return(e,t)=>{const s=k(y("wd-toast"),V),f=k(y("wd-navbar"),N),u=k(y("demo-block"),G),_=k(y("wd-icon"),z),p=k(y("wd-navbar-capsule"),R),h=k(y("wd-search"),F),w=v,x=k(y("page-wraper"),q);return o(),b(m,null,[c(s),c(x,null,{default:d((()=>[c(f,{fixed:"",placeholder:"",title:"Navbar 导航条","left-arrow":"",safeAreaInsetTop:"",onClickLeft:l}),c(u,{title:"基础用法",transparent:""},{default:d((()=>[c(f,{title:"标题"})])),_:1}),c(u,{title:"返回上级",transparent:""},{default:d((()=>[c(f,{title:"标题","left-text":"返回","left-arrow":"",onClickLeft:l})])),_:1}),c(u,{title:"右侧按钮",transparent:""},{default:d((()=>[c(f,{title:"标题","left-text":"返回","left-arrow":"","right-text":"按钮",onClickLeft:l,onClickRight:r})])),_:1}),c(u,{title:"使用插槽",transparent:""},{default:d((()=>[c(f,{title:"标题",onClickLeft:l},{left:d((()=>[c(_,{name:"arrow-left",size:"24px",class:"wd-navbar__arrow"})])),right:d((()=>[c(_,{name:"search",size:"18"})])),_:1})])),_:1}),c(u,{title:"禁用按钮",transparent:""},{default:d((()=>[c(f,{title:"标题","left-text":"返回","right-text":"按钮","left-arrow":"","left-disabled":"","right-disabled":""})])),_:1}),c(u,{title:"胶囊样式",transparent:""},{default:d((()=>[c(f,{title:"标题","left-text":"返回","right-text":"设置","left-arrow":""},{capsule:d((()=>[c(p,{onBack:i,onBackHome:n})])),_:1})])),_:1}),c(u,{title:"带搜索栏",transparent:""},{default:d((()=>[c(f,{"left-text":"返回","right-text":"设置","left-arrow":""},{title:d((()=>[c(w,{class:"search-box"},{default:d((()=>[c(h,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),"hide-cancel":"","placeholder-left":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(w,{style:{height:"500rpx"}})])),_:1})],64)}}}),[["__scopeId","data-v-ae2e2e2f"]]);export{U as default};
