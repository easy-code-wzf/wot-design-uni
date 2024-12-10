import{u as e,_ as o}from"./wd-message-box.Pzly-D2a.js";import{d as l,P as a,r as t,q as n,v as u,S as s,U as d,o as i,c as r,w as p,e as c,g as m,h as v,F as f,x as _,n as g,y as b,p as w,L as y,i as V,f as h,t as C,j as x,H as k,a as $,b as K,u as j,V as S}from"./index-WwrgI7Rh.js";import{f as U,m as z,i as I,l as T,M as P,g as N,k as M,C as O,w as B,q as F,b as H,H as Q,I as q,_ as G,a as L}from"./page-wraper.XLZNc_u_.js";import{p as A,r as E,q as D,c as J,u as R}from"./clickoutside.Lnfi0-8V.js";import{u as W}from"./useChildren.Da1LiOi9.js";import{_ as X}from"./demo-block.BZqo-_az.js";import{_ as Y}from"./wd-slider.D4xlMmzv.js";import{_ as Z}from"./wd-button.Df9kCKkG.js";import{w as ee}from"./wd-sort-button.CTEIXIWx.js";import"./wd-input.CwfTBTsD.js";import"./useTranslate.B9y1fU2w.js";import"./useTouch.B02vohwq.js";const oe=Symbol("wd-drop-menu"),le={...U,zIndex:z(12),direction:I("down"),modal:T(!0),closeOnClickModal:T(!0),duration:z(200)},ae=H(l({name:"wd-drop-menu-item",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...U,customTitle:I(""),customIcon:I(""),modelValue:[String,Number],options:P(),disabled:T(!1),iconName:I("check"),title:String,icon:I("arrow-down"),iconSize:I("14px"),beforeToggle:Function,valueKey:I("value"),labelKey:I("label"),tipKey:I("tip"),customPopupClass:I(""),customPopupStyle:I("")},emits:["change","update:modelValue","open","opened","closed","close"],setup(e,{expose:o,emit:l}){const k=e,$=l,K=a(D,null),j=t(!1),S=t(!1),U=t(),z=t(12),I=t(!0),T=t(!0),P=t(0),{parent:H}=N(oe),{proxy:Q}=y(),q=n((()=>{let e="";return e=j.value&&H?"down"===H.props.direction?`top: calc(var(--window-top) + ${H.offset.value}px); bottom: 0;`:`top: 0; bottom: calc(var(--window-bottom) + ${H.offset.value}px)`:"",e}));function G(){S.value&&(O(k.beforeToggle)?k.beforeToggle({status:!1,resolve:e=>{e&&L()}}):L())}function L(){S.value&&(S.value=!1)}function J(){S.value||(O(k.beforeToggle)?k.beforeToggle({status:!0,resolve:e=>{e&&R()}}):R())}function R(){j.value=!0,S.value=!0,H&&(I.value=Boolean(H.props.modal),P.value=Number(H.props.duration),T.value=Boolean(H.props.closeOnClickModal),U.value="down"===H.props.direction?"top":"bottom"),$("open")}function W(){j.value=!1,$("closed")}function X(){$("open")}function Y(){$("opened")}function Z(){$("close")}return u((()=>k.modelValue),(e=>{F(e)&&"number"!=typeof e&&"string"!=typeof e&&console.error("[wot-design] warning(wd-drop-menu-item): the type of value should be a number or a string.")}),{deep:!0,immediate:!0}),s((()=>{K&&K.pushToQueue?K.pushToQueue(Q):A(Q)})),d((()=>{K&&K.removeFromQueue?K.removeFromQueue(Q):E(Q)})),o({getShowPop:function(){return S.value},open:J,close:G,toggle:function(){S.value?G():J()}}),(e,o)=>{const l=x,a=V;return j.value?(i(),r(a,{key:0,class:g(`wd-drop-item  ${e.customClass}`),style:b(`z-index: ${z.value}; ${q.value};${e.customStyle}`)},{default:p((()=>[c(M,{modelValue:S.value,"onUpdate:modelValue":o[0]||(o[0]=e=>S.value=e),"z-index":z.value,duration:P.value,position:U.value,"custom-style":`position: absolute; max-height: 80%;${e.customPopupStyle}`,"custom-class":e.customPopupClass,"modal-style":"position: absolute;",modal:I.value,"close-on-click-modal":!1,onClickModal:o[1]||(o[1]=e=>T.value&&G()),onBeforeEnter:X,onAfterEnter:Y,onBeforeLeave:Z,onAfterLeave:W},{default:p((()=>[e.options.length?(i(),r(a,{key:0},{default:p((()=>[(i(!0),m(f,null,v(e.options,((o,t)=>(i(),r(a,{key:t,onClick:e=>function(e){if(k.disabled)return;const{valueKey:o}=k,l=k.options[e];$("update:modelValue",""!==l[o]&&void 0!==l[o]?l[o]:l),$("change",{value:""!==l[o]&&void 0!==l[o]?l[o]:l,selectedItem:l}),G()}(t),class:g("wd-drop-item__option "+((""!==o[e.valueKey]?o[e.valueKey]:o)===e.modelValue?"is-active":""))},{default:p((()=>[c(a,{class:g(`wd-drop-item__title ${e.customTitle}`)},{default:p((()=>[c(l,null,{default:p((()=>[h(C(o[e.labelKey]?o[e.labelKey]:o),1)])),_:2},1024),o[e.tipKey]?(i(),r(l,{key:0,class:"wd-drop-item__tip"},{default:p((()=>[h(C(o[e.tipKey]),1)])),_:2},1024)):w("",!0)])),_:2},1032,["class"]),(""!==o[e.valueKey]?o[e.valueKey]:o)===e.modelValue?(i(),r(B,{key:0,name:e.iconName,size:"20px",class:g(`wd-drop-item__icon ${e.customIcon}`)},null,8,["name","class"])):w("",!0)])),_:2},1032,["onClick","class"])))),128))])),_:1})):_(e.$slots,"default",{key:1},void 0,!0)])),_:3},8,["modelValue","z-index","duration","position","custom-style","custom-class","modal"])])),_:3},8,["class","style"])):w("",!0)}}}),[["__scopeId","data-v-12858034"]]),te=H(l({name:"wd-drop-menu",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:le,setup(e){const o=e,l=a(D,null),n=t(`dropMenuId${Q()}`),d=t(0),w=t(0),{proxy:x}=y(),{linkChildren:U,children:z}=W(oe);function I(e){e.preventDefault(),e.stopPropagation()}function T(e){const{title:o,modelValue:l,options:a,valueKey:t,labelKey:n}=e;if(o)return o;for(let u=0,s=a.length;u<s;u++)if(l===a[u][t])return a[u][n];console.error("[wot-design] warning(wd-drop-menu-item): no value is matched in the options option.")}function P(e){q(`#${n.value}`,!1,x).then((l=>{if(!l)return;const{top:a,bottom:t}=l;"down"===o.direction?d.value=Number(t):d.value=w.value-Number(a),e.$.exposed.toggle()}))}return U({props:o,fold:P,offset:d}),u((()=>o.direction),(e=>{["up","down"].includes(e)||console.error("[wot design] warning(wd-drop-menu): direction must be 'up' or 'down'")}),{deep:!0,immediate:!0}),s((()=>{w.value=k().windowHeight})),(e,o)=>{const a=V,t=$(K("wd-icon"),B);return i(),r(a,{style:b(e.customStyle),class:g(`wd-drop-menu ${e.customClass}`),onClick:S(I,["stop"]),id:n.value},{default:p((()=>[c(a,{class:"wd-drop-menu__list"},{default:p((()=>[(i(!0),m(f,null,v(j(z),((e,o)=>(i(),r(a,{key:o,onClick:o=>function(e){e&&!e.disabled&&(l&&l.closeOther?l.closeOther(e):J(e),P(e))}(e),class:g(`wd-drop-menu__item ${e.disabled?"is-disabled":""} ${e.$.exposed.getShowPop()?"is-active":""}`)},{default:p((()=>[c(a,{class:"wd-drop-menu__item-title"},{default:p((()=>[c(a,{class:"wd-drop-menu__item-title-text"},{default:p((()=>[h(C(T(e)),1)])),_:2},1024),c(t,{name:e.icon,size:e.iconSize,"custom-class":"wd-drop-menu__arrow"},null,8,["name","size"])])),_:2},1024)])),_:2},1032,["onClick","class"])))),128))])),_:1}),_(e.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","id"])}}}),[["__scopeId","data-v-d3c8be25"]]),ne=H(l({__name:"Index",setup(l){const{closeOutside:a}=R(),n=e(),u=t(),s=t(),d=t(30);t(!1);const m=t(1),v=t(0),f=t(0),_=t(0),g=t(0),b=t(0),w=t(0),y=t(0),C=t(0),x=t(0),k=t([{label:"全部商品",value:0},{label:"新款商品",value:1,tip:"这是补充信息"},{label:"这是比较长的筛选条件这是比较长的筛选条件",value:2}]),S=t([{label:"综合",value:0},{label:"销量",value:1},{label:"上架时间",value:2}]);function U(){var e;null==(e=s.value)||e.initSlider()}function z({value:e}){console.log(e)}function I({value:e}){console.log(e)}function T({value:e}){console.log(e)}function P({value:e}){console.log(e)}function N({value:e}){console.log(e)}function M({value:e}){console.log(e)}function O({value:e}){console.log(e)}function B({value:e}){console.log(e)}function F({value:e}){console.log(e)}function H(){u.value.close()}const Q=({status:e,resolve:o})=>{n.confirm({title:"异步"+(e?"打开":"关闭"),msg:`确定要${e?"打开":"关闭"}下拉菜单吗？`}).then((()=>{o(!0)})).catch((()=>{o(!1)}))};return(e,l)=>{const t=$(K("wd-message-box"),o),n=$(K("wd-drop-menu-item"),ae),q=$(K("wd-drop-menu"),te),A=$(K("demo-block"),X),E=$(K("wd-slider"),Y),D=$(K("wd-cell"),G),J=$(K("wd-button"),Z),R=V,W=$(K("wd-sort-button"),ee),oe=$(K("page-wraper"),L);return i(),r(oe,null,{default:p((()=>[c(t),c(R,{class:"demo-body",onClick:j(a)},{default:p((()=>[c(A,{title:"基本用法",transparent:""},{default:p((()=>[c(q,null,{default:p((()=>[c(n,{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=e=>m.value=e),options:k.value,onChange:z},null,8,["modelValue","options"]),c(n,{modelValue:v.value,"onUpdate:modelValue":l[1]||(l[1]=e=>v.value=e),options:S.value,onChange:I},null,8,["modelValue","options"])])),_:1})])),_:1}),c(A,{title:"自定义菜单内容",transparent:""},{default:p((()=>[c(q,null,{default:p((()=>[c(n,{modelValue:f.value,"onUpdate:modelValue":l[2]||(l[2]=e=>f.value=e),options:k.value,onChange:T},null,8,["modelValue","options"]),c(n,{ref_key:"dropMenu",ref:u,title:"筛选",onOpened:U},{default:p((()=>[c(R,null,{default:p((()=>[c(E,{modelValue:d.value,"onUpdate:modelValue":l[3]||(l[3]=e=>d.value=e),ref_key:"slider",ref:s},null,8,["modelValue"]),c(D,{title:"标题文字",value:"内容"}),c(D,{title:"标题文字",label:"描述信息",value:"内容"}),c(R,{style:{padding:"0 10px 20px","box-sizing":"border-box"}},{default:p((()=>[c(J,{block:"",size:"large",onClick:H},{default:p((()=>[h("主要按钮")])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})])),_:1}),c(A,{title:"自定义菜单选项",transparent:""},{default:p((()=>[c(R,{class:"custom-menu"},{default:p((()=>[c(q,{"custom-style":"flex: 1; min-width: 0"},{default:p((()=>[c(n,{modelValue:_.value,"onUpdate:modelValue":l[4]||(l[4]=e=>_.value=e),options:k.value,onChange:P},null,8,["modelValue","options"])])),_:1}),c(R,{style:{flex:"1"}},{default:p((()=>[c(W,{modelValue:g.value,"onUpdate:modelValue":l[5]||(l[5]=e=>g.value=e),title:"上架时间",onChange:N},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(A,{title:"自定义菜单图标",transparent:""},{default:p((()=>[c(q,null,{default:p((()=>[c(n,{title:"地图",icon:"location","icon-size":"24px"})])),_:1})])),_:1}),c(A,{title:"异步打开/关闭",transparent:""},{default:p((()=>[c(q,null,{default:p((()=>[c(n,{modelValue:x.value,"onUpdate:modelValue":l[6]||(l[6]=e=>x.value=e),options:k.value,onChange:z,"before-toggle":Q},null,8,["modelValue","options"])])),_:1})])),_:1}),c(A,{title:"向上弹出",transparent:""},{default:p((()=>[c(q,{direction:"up"},{default:p((()=>[c(n,{modelValue:b.value,"onUpdate:modelValue":l[7]||(l[7]=e=>b.value=e),options:k.value,onChange:M},null,8,["modelValue","options"]),c(n,{modelValue:w.value,"onUpdate:modelValue":l[8]||(l[8]=e=>w.value=e),options:S.value,onChange:O},null,8,["modelValue","options"])])),_:1})])),_:1}),c(A,{title:"禁用",transparent:""},{default:p((()=>[c(q,{direction:"up"},{default:p((()=>[c(n,{modelValue:y.value,"onUpdate:modelValue":l[9]||(l[9]=e=>y.value=e),disabled:"",options:k.value,onChange:B},null,8,["modelValue","options"]),c(n,{modelValue:C.value,"onUpdate:modelValue":l[10]||(l[10]=e=>C.value=e),options:S.value,onChange:F},null,8,["modelValue","options"])])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})}}}),[["__scopeId","data-v-668365bb"]]);export{ne as default};
