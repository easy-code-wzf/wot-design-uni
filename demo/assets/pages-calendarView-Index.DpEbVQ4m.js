import{d as e,r as a,a as l,b as t,o,c as u,w as n,e as d,f as r,i as m}from"./index-WwrgI7Rh.js";import{_ as p,a as s}from"./wd-radio-group.B1tM0Fvt.js";import{w as f}from"./wd-calendar-view.DL0apFFD.js";import{_ as i}from"./demo-block.BZqo-_az.js";import{a as v}from"./page-wraper.XLZNc_u_.js";import"./useChildren.Da1LiOi9.js";import"./dayjs.4bNf6ZFu.js";import"./useTranslate.B9y1fU2w.js";import"./wd-picker-view.CtCcaipr.js";const w=e({__name:"Index",setup(e){const w=a("date"),g=a("daterange");a(Date.now());const V=a(Date.now()),_=a(null),h=a([Date.now()-28512e5,Date.now()]),y=a(Date.now()),D=a([Date.now()-2592e5,Date.now()-864e5]),c=a([Date.now()-2592e5,Date.now()-864e5]),x=a([Date.now()-2592e5,Date.now()-864e5]),b=a([Date.now()-2592e5,Date.now()-864e5]),j=({type:e,values:a})=>"minute"===e?a.filter((e=>e.value%10==0)):a,U=e=>{const a=new Date(e.date),l=new Date,t=a.getFullYear(),o=a.getMonth(),u=a.getDate(),n=l.getFullYear(),d=l.getMonth(),r=l.getDate();return t===n&&o===d&&u===r&&(e.topInfo="今天"),5===o&&18===u&&(e.topInfo="618大促"),10===o&&11===u&&(e.topInfo="京东双11"),"start"===e.type&&(e.bottomInfo="开始"),"end"===e.type&&(e.bottomInfo="结束"),"same"===e.type&&(e.bottomInfo="开始/结束"),e};function k({value:e}){g.value=e}function I({value:e}){console.log(e)}function C({value:e}){_.value=e}function z({value:e}){h.value=e}return(e,a)=>{const F=m,M=l(t("wd-radio"),p),Y=l(t("wd-radio-group"),s),P=l(t("wd-calendar-view"),f),Q=l(t("demo-block"),i),T=l(t("page-wraper"),v);return o(),u(T,null,{default:n((()=>[d(Q,{title:"单个日期选择",hor:0},{default:n((()=>[d(F,{style:{margin:"0 15px 10px"}},{default:n((()=>[d(F,{style:{"margin-bottom":"10px","font-size":"13px"}},{default:n((()=>[r("切换类型：")])),_:1}),d(Y,{modelValue:w.value,"onUpdate:modelValue":a[0]||(a[0]=e=>w.value=e),shape:"button"},{default:n((()=>[d(M,{value:"date"},{default:n((()=>[r("date")])),_:1}),d(M,{value:"week"},{default:n((()=>[r("week")])),_:1}),d(M,{value:"month"},{default:n((()=>[r("month")])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(P,{type:w.value,modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e),onChange:I},null,8,["type","modelValue"])])),_:1}),d(Q,{title:"多个日期选择",hor:0},{default:n((()=>[d(P,{type:"dates",modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=e=>_.value=e),onChange:C},null,8,["modelValue"])])),_:1}),d(Q,{title:"日期范围选择",hor:0},{default:n((()=>[d(F,{style:{margin:"0 24rpx 20rpx"}},{default:n((()=>[d(F,{style:{"margin-bottom":"20rpx","font-size":"26rpx"}},{default:n((()=>[r("切换类型：")])),_:1}),d(Y,{modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=e=>g.value=e),shape:"button",onChange:k},{default:n((()=>[d(M,{value:"daterange"},{default:n((()=>[r("daterange")])),_:1}),d(M,{value:"weekrange"},{default:n((()=>[r("weekrange")])),_:1}),d(M,{value:"monthrange"},{default:n((()=>[r("monthrange")])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(P,{type:g.value,"allow-same-day":"",modelValue:h.value,"onUpdate:modelValue":a[4]||(a[4]=e=>h.value=e),onChange:z},null,8,["type","modelValue"])])),_:1}),d(Q,{title:"时间类型",hor:0},{default:n((()=>[d(P,{type:"datetime",modelValue:y.value,"onUpdate:modelValue":a[5]||(a[5]=e=>y.value=e),"time-filter":j},null,8,["modelValue"])])),_:1}),d(Q,{title:"时间范围类型",hor:0},{default:n((()=>[d(P,{type:"datetimerange",modelValue:D.value,"onUpdate:modelValue":a[6]||(a[6]=e=>D.value=e)},null,8,["modelValue"])])),_:1}),d(Q,{title:"限制最大选择范围",hor:0},{default:n((()=>[d(P,{type:"daterange","max-range":3,modelValue:x.value,"onUpdate:modelValue":a[7]||(a[7]=e=>x.value=e)},null,8,["modelValue"])])),_:1}),d(Q,{title:"自定义日期",hor:0},{default:n((()=>[d(P,{type:"daterange","allow-same-day":"",modelValue:c.value,"onUpdate:modelValue":a[8]||(a[8]=e=>c.value=e),formatter:U},null,8,["modelValue"])])),_:1}),d(Q,{title:"设置周起始日",hor:0},{default:n((()=>[d(P,{"first-day-of-week":1,modelValue:b.value,"onUpdate:modelValue":a[9]||(a[9]=e=>b.value=e)},null,8,["modelValue"])])),_:1})])),_:1})}}});export{w as default};
