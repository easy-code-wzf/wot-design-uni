import{d as e,r as t,v as s,q as o,o as r,c as a,w as n,x as i,p as l,e as c,f as u,t as f,n as d,y as p,j as m}from"./index-WwrgI7Rh.js";import{f as $,i as x,y,l as h,o as b,q as g,b as v}from"./page-wraper.XLZNc_u_.js";import{d as w}from"./dayjs.4bNf6ZFu.js";const j=v(e({name:"wd-text",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...$,type:x("default"),text:y(""),size:x(""),mode:x("text"),decoration:x("none"),call:h(!1),bold:h(!1),format:h(!1),color:x(""),prefix:String,suffix:String,lines:Number,lineHeight:x(""),customStyle:x(""),customClass:x("")},emits:["click"],setup(e,{emit:$}){const x=e,y=$,h=t("");s((()=>({type:x.type,text:x.text,mode:x.mode,color:x.color,bold:x.bold,lines:x.lines,format:x.format})),(({type:e})=>{const t=["primary","error","warning","success","default"];e&&!t.includes(e)&&console.error(`type must be one of ${t.toString()}`),function(){const{type:e,color:t,bold:s,lines:o}=x,r=[];t||r.push(`is-${e}`);g(o)&&r.push(`is-lines-${o}`);s&&r.push("is-bold"),h.value=r.join(" ")}()}),{deep:!0,immediate:!0});const v=o((()=>`wd-text ${x.customClass} ${h.value}`)),j=o((()=>{const e={};return x.color&&(e.color=x.color),x.size&&(e["font-size"]=`${x.size}`),x.lineHeight&&(e["line-height"]=`${x.lineHeight}`),x.decoration&&(e["text-decoration"]=`${x.decoration}`),`${b(e)};${x.customStyle}`}));const k=o((()=>{const{text:e,mode:t,format:s}=x;return"date"===t?w(Number(e)).format("YYYY-MM-DD"):"price"===t?function(e){const t=(e=Number(e).toFixed(2)).split(".");let s=t[0];const o=t.length>1?"."+t[1]:"",r=/(\d+)(\d{3})/;for(;r.test(s);)s=s.replace(r,"$1,$2");return s+o}(e):function(e,t,s){if(t){if("phone"===s)return e.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2");if("name"===s)return e.replace(/^(.).*(.)$/,"$1**$2");throw new Error("mode must be one of phone or name for encryption")}return e}(`${e}`,s,t)}));function S(e){y("click",e)}return(e,t)=>{const s=m;return r(),a(s,{onClick:S,class:d(v.value),style:p(j.value)},{default:n((()=>[e.$slots.prefix||e.prefix?i(e.$slots,"prefix",{key:0},(()=>[u(f(e.prefix),1)]),!0):l("",!0),c(s,null,{default:n((()=>[u(f(k.value),1)])),_:1}),e.$slots.suffix||e.suffix?i(e.$slots,"suffix",{key:1},(()=>[u(f(e.suffix),1)]),!0):l("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-878c8c4c"]]);export{j as w};
