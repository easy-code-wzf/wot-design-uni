import{d as e,r as a,a as l,b as t,o,c as n,w as u,e as s,f as d,t as r,u as c,z as i,i as p,j as m}from"./index-WwrgI7Rh.js";import{d as f,w as _,a as v,b as V}from"./page-wraper.XLZNc_u_.js";import{_ as w}from"./wd-search.vFrYTWIO.js";import{_ as h}from"./demo-block.BZqo-_az.js";import{_ as x}from"./wd-popover.DuTe_ou7.js";import{u as g}from"./clickoutside.Lnfi0-8V.js";import"./useTranslate.B9y1fU2w.js";import"./usePopover.CCDoDRa7.js";const j=V(e({__name:"Index",setup(e){const{closeOutside:V}=g(),j=a(""),k=a("初始文案"),C=a(""),b=a(""),U=a(""),y=a("全部"),z=a([{content:"全部"},{content:"订单号"},{content:"退款单号"}]);function I(e){i({title:"搜索"+e.value})}function A(){i({title:"清空"})}function B(){i({title:"取消"})}function M(e){console.log(e.value)}function O({item:e,index:a}){}return(e,a)=>{const i=l(t("wd-toast"),f),g=l(t("wd-search"),w),P=l(t("demo-block"),h),S=p,T=m,q=l(t("wd-icon"),_),D=l(t("wd-popover"),x),E=l(t("page-wraper"),v);return o(),n(S,{onClick:c(V)},{default:u((()=>[s(i),s(E,null,{default:u((()=>[s(P,{title:"基本用法",transparent:""},{default:u((()=>[s(g,{modelValue:j.value,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value=e),onSearch:I,onChange:M,onCancel:B,onClear:A},null,8,["modelValue"])])),_:1}),s(P,{title:"白色输入框",transparent:""},{default:u((()=>[s(g,{light:""})])),_:1}),s(P,{title:"搜索占位符居左",transparent:""},{default:u((()=>[s(g,{"placeholder-left":""})])),_:1}),s(P,{title:"禁用且隐藏取消按钮",transparent:""},{default:u((()=>[s(g,{disabled:"","hide-cancel":""})])),_:1}),s(S,{style:{margin:"15px 0",color:"#666"}},{default:u((()=>[s(S,{style:{padding:"0 15px",margin:"10px 0","font-size":"13px"}},{default:u((()=>[d("自定义左侧插槽")])),_:1}),s(g,{modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=e=>C.value=e)},{prefix:u((()=>[s(D,{mode:"menu",content:z.value,onMenuclick:O},{default:u((()=>[s(S,{class:"search-type"},{default:u((()=>[s(T,null,{default:u((()=>[d(r(y.value),1)])),_:1}),s(q,{class:"icon-arrow",name:"fill-arrow-down"})])),_:1})])),_:1},8,["content"])])),_:1},8,["modelValue"])])),_:1}),s(P,{title:"自定义右侧文案",transparent:""},{default:u((()=>[s(g,{placeholder:"请输入订单号/订单名称","cancel-txt":"搜索"})])),_:1}),s(P,{title:"设置最大长度",transparent:""},{default:u((()=>[s(g,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=e=>k.value=e),maxlength:4},null,8,["modelValue"])])),_:1}),s(P,{title:"清空后自动聚焦",transparent:""},{default:u((()=>[s(g,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e),"focus-when-clear":""},null,8,["modelValue"])])),_:1}),s(P,{title:"自动聚焦",transparent:""},{default:u((()=>[s(g,{modelValue:U.value,"onUpdate:modelValue":a[4]||(a[4]=e=>U.value=e),focus:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["onClick"])}}}),[["__scopeId","data-v-6d7882c1"]]);export{j as default};
