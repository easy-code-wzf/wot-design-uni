import{d as a,r as e,q as t,v as s,S as l,H as o,o as n,c as r,w as u,e as d,n as c,x as i,V as h,y as m,i as v,a8 as g,D as f,a as p,b as _,g as w,F as b,h as x,f as j,t as y,u as I}from"./index-WwrgI7Rh.js";import{f as T,m as M,M as S,l as $,ad as H,y as A,h as B,o as C,ae as D,b as V,c as F,d as P,_ as U,a as Y}from"./page-wraper.XLZNc_u_.js";import{_ as k}from"./wd-cell-group.ChcDjznc.js";import{u as z}from"./useTouch.B02vohwq.js";import{_ as G,a as J}from"./wd-tabs.CoyOD7eI.js";import"./useChildren.Da1LiOi9.js";import"./wd-badge.BgH63yVt.js";import"./wd-sticky-box.TVDANRTd.js";import"./wd-resize.BpIFxzaW.js";import"./useTranslate.B9y1fU2w.js";const K=V(a({name:"wd-floating-panel",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...T,height:M(0),anchors:S(),safeAreaInsetBottom:$(!1),showScrollbar:H,duration:A(300),contentDraggable:H},emits:["update:height","height-change"],setup(a,{emit:f}){const p=z(),_=a,w=f,b=e(_.height);let x;const j=e(0),y=e(!1),I=t((()=>({min:_.anchors[0]?_.anchors[0]:100,max:_.anchors[_.anchors.length-1]?_.anchors[_.anchors.length-1]:Math.round(.6*j.value)}))),T=t((()=>_.anchors.length>=2?_.anchors:[I.value.min,I.value.max])),M=t((()=>{const a={height:B(I.value.max),transform:`translateY(calc(100% + ${B(-b.value)}))`,transition:y.value?"none":`transform ${_.duration}ms cubic-bezier(0.18, 0.89, 0.32, 1.28)`};return`${C(a)};${_.customStyle}`})),S=a=>{b.value=a,w("update:height",a)},$=a=>{p.touchStart(a),y.value=!0,x=-b.value},H=a=>{if("content"==a.currentTarget.dataset.id&&!_.contentDraggable)return;p.touchMove(a);const e=p.deltaY.value+x;S(-V(e))},A=()=>{y.value=!1,S(D(T.value,b.value)),b.value!==-x&&w("height-change",{height:b.value})},V=a=>{const e=Math.abs(a),{min:t,max:s}=I.value;return e>s?-(s+.2*(e-s)):e<t?-(t-.2*(t-e)):a};return s((()=>_.height),(a=>{b.value=a})),s(I,(()=>{S(D(T.value,b.value))}),{immediate:!0}),l((()=>{const{windowHeight:a}=o();j.value=a})),(a,e)=>{const t=v,s=g;return n(),r(t,{class:c(`wd-floating-panel ${a.customClass} ${a.safeAreaInsetBottom?"is-safe":""}`),style:m(M.value),onTouchstartPassive:$,onTouchmovePassive:H,onTouchend:A,onTouchcancel:A},{default:u((()=>[d(t,{class:c("wd-floating-panel__header")},{default:u((()=>[d(t,{class:c("wd-floating-panel__header-bar")})])),_:1}),d(s,{class:c("wd-floating-panel__content"),"data-id":"content","show-scrollbar":a.showScrollbar,"scroll-y":"",onTouchmove:h(H,["stop","prevent"])},{default:u((()=>[i(a.$slots,"default",{},void 0,!0)])),_:3},8,["show-scrollbar"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-3746633c"]]),q=V(a({__name:"Index",setup(a){const{show:t}=F(),s=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],l=e(0),r=e(0),c=e(0),i=e([]),h=({height:a})=>{t(B(a))};return f((()=>{c.value=o().windowHeight,i.value=[100,Math.round(.4*c.value),Math.round(.7*c.value)],r.value=i.value[1]})),(a,e)=>{const t=p(_("wd-toast"),P),o=p(_("wd-cell"),U),c=p(_("wd-cell-group"),k),m=p(_("wd-floating-panel"),K),g=p(_("wd-tab"),G),f=v,T=p(_("wd-tabs"),J),M=p(_("page-wraper"),Y);return n(),w(b,null,[d(t),d(f,{class:"floating-panel"},{default:u((()=>[d(M,null,{default:u((()=>[d(T,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value=a)},{default:u((()=>[d(g,{title:"基础用法"},{default:u((()=>[d(m,{safeAreaInsetBottom:""},{default:u((()=>[d(c,{border:""},{default:u((()=>[(n(),w(b,null,x(s,(a=>d(o,{key:a,title:a},null,8,["title"]))),64))])),_:1})])),_:1})])),_:1}),d(g,{title:"自定义锚点"},{default:u((()=>[d(m,{height:r.value,"onUpdate:height":e[0]||(e[0]=a=>r.value=a),anchors:i.value,safeAreaInsetBottom:"",onHeightChange:h},{default:u((()=>[d(f,{class:"inner-content"},{default:u((()=>[j("自定义锚点 "+y(i.value.map(I(B)))+" - "+y(I(B)(r.value.toFixed(0))),1)])),_:1})])),_:1},8,["height","anchors"])])),_:1}),d(g,{title:"仅头部拖拽"},{default:u((()=>[d(m,{contentDraggable:!1},{default:u((()=>[d(f,{class:"inner-content"},{default:u((()=>[j("内容区不可以拖拽")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-29c5d28e"]]);export{q as default};
