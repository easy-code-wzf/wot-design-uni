import{d as a,r as s,v as o,q as e,o as l,c as t,w as n,x as c,p as u,e as i,y as d,V as r,u as m,g as p,f,t as y,F as _,n as g,i as v,_ as k,j as w}from"./index-WwrgI7Rh.js";import{f as b,l as h,i as C,w as $,o as x,b as I}from"./page-wraper.XLZNc_u_.js";import{u as S}from"./useTranslate.B9y1fU2w.js";const j=I(a({name:"wd-tag",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...b,useIconSlot:h(!1),type:C("default"),icon:C(""),closable:h(!1),plain:h(!1),dynamic:h(!1),color:C(""),bgColor:C(""),round:h(!1),mark:h(!1)},emits:["click","close","confirm"],setup(a,{emit:b}){const h=a,C=b,{translate:I}=S("tag"),j=s(""),V=s(""),q=s(!1);o([()=>h.useIconSlot,()=>h.icon,()=>h.plain,()=>h.dynamic,()=>h.round,()=>h.mark],(()=>{H()}),{deep:!0,immediate:!0}),o((()=>h.type),(a=>{if(!a)return;const s=["primary","danger","warning","success","default"];-1===s.indexOf(a)&&console.error(`type must be one of ${s.toString()}`),H()}),{deep:!0,immediate:!0}),o((()=>q.value),(()=>{H()}),{deep:!0,immediate:!0});const B=e((()=>`wd-tag ${h.customClass} ${j.value}`)),F=e((()=>{const a={};return!h.plain&&h.bgColor&&(a.background=h.bgColor),h.bgColor&&(a["border-color"]=h.bgColor),`${x(a)};${h.customStyle}`})),G=e((()=>{const a={};return h.color&&(a.color=h.color),x(a)}));function H(){const{type:a,plain:s,round:o,mark:e,dynamic:l,icon:t,useIconSlot:n}=h;let c=[];a&&c.push(`is-${a}`),s&&c.push("is-plain"),o&&c.push("is-round"),e&&c.push("is-mark"),l&&c.push("is-dynamic"),q.value&&c.push("is-dynamic-input"),(t||n)&&c.push("is-icon"),j.value=c.join(" ")}function O(a){C("click",a)}function T(a){C("close",a)}function U(){q.value=!0,V.value=""}function z(){D()}function A(a){D(),C("confirm",{value:a.detail.value})}function D(){q.value=!1}return(a,s)=>{const o=v,e=k,b=w;return l(),t(o,{class:g(B.value),style:d(F.value),onClick:O},{default:n((()=>[a.useIconSlot?(l(),t(o,{key:0,class:"wd-tag__icon"},{default:n((()=>[c(a.$slots,"icon",{},void 0,!0)])),_:3})):a.icon?(l(),t($,{key:1,name:a.icon,"custom-class":"wd-tag__icon"},null,8,["name"])):u("",!0),i(o,{class:"wd-tag__text",style:d(G.value)},{default:n((()=>[c(a.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),a.closable&&a.round?(l(),t(o,{key:2,class:"wd-tag__close",onClick:r(T,["stop"])},{default:n((()=>[i($,{name:"error-fill"})])),_:1})):u("",!0),q.value&&a.dynamic?(l(),t(e,{key:3,class:"wd-tag__add-text",placeholder:m(I)("placeholder"),type:"text",focus:!0,modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=a=>V.value=a),onBlur:z,onConfirm:A},null,8,["placeholder","modelValue"])):a.dynamic?(l(),t(o,{key:4,class:"wd-tag__text",style:d(G.value),onClick:r(U,["stop"])},{default:n((()=>[a.$slots.add?c(a.$slots,"add",{key:0},void 0,!0):(l(),p(_,{key:1},[i($,{name:"add","custom-class":"wd-tag__add wd-tag__icon"}),i(b,null,{default:n((()=>[f(y(m(I)("add")),1)])),_:1})],64))])),_:3},8,["style"])):u("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-040f6e15"]]);export{j as _};
