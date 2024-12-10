import{d as t,o as e,g as a,c as s,w as i,e as o,p as l,F as n,h as r,f as u,t as c,y as p,n as d,i as m,r as g,v,q as y,u as h,x as f,ao as w,ap as _,L as C,l as x,ai as k,j,aq as b,a as $,b as I}from"./index-WwrgI7Rh.js";import{f as V,m as P,i as M,l as U,b as K,y as S,H as N,t as A,q as H,h as T,a0 as F,a1 as z,a8 as W,e as q,_ as D,a as E}from"./page-wraper.XLZNc_u_.js";import{_ as B}from"./demo-block.BZqo-_az.js";import{_ as G}from"./wd-cell-group.ChcDjznc.js";import{_ as L}from"./wd-button.Df9kCKkG.js";import"./useChildren.Da1LiOi9.js";const O=K(t({__name:"wd-swiper-nav",props:{...V,current:P(0),direction:M("horizontal"),minShowNum:P(2),indicatorPosition:M("bottom"),showControls:U(!1),total:P(0),type:M("dots")},emits:["change"],setup(t,{emit:g}){const v=g;function y(t){v("change",{dir:t,source:"nav"})}return(t,g)=>{const v=m;return e(),a(n,null,[t.showControls?(e(),s(v,{key:0,class:"wd-swiper-nav__btn"},{default:i((()=>[o(v,{class:"wd-swiper-nav__btn--prev",onClick:g[0]||(g[0]=t=>y("prev"))}),o(v,{class:"wd-swiper-nav__btn--next",onClick:g[1]||(g[1]=t=>y("next"))})])),_:1})):l("",!0),t.total>=t.minShowNum?(e(),s(v,{key:1,style:p(t.customStyle),class:d(`wd-swiper-nav wd-swiper-nav--${t.direction} wd-swiper-nav--${t.type} wd-swiper-nav--${t.indicatorPosition} ${t.customClass}`)},{default:i((()=>["dots"===t.type||"dots-bar"===t.type?(e(!0),a(n,{key:0},r(t.total,((a,i)=>(e(),s(v,{key:i,class:d(`wd-swiper-nav__item--${t.type} ${t.current===i?"is-active":""} is-${t.direction}`)},null,8,["class"])))),128)):l("",!0),"fraction"===t.type?(e(),a(n,{key:1},[u(c(t.current+1)+"/"+c(t.total),1)],64)):l("",!0)])),_:1},8,["style","class"])):l("",!0)],64)}}}),[["__scopeId","data-v-3a6b4a1d"]]),J=K(t({name:"wd-swiper",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...V,autoplay:U(!0),current:P(0),direction:M("horizontal"),displayMultipleItems:P(1),duration:P(300),easingFunction:M("default"),height:S("192"),interval:P(5e3),list:{type:Array,default:()=>[]},loop:U(!0),nextMargin:S("0"),indicatorPosition:M("bottom"),previousMargin:S("0"),snapToEdge:U(!1),indicator:{type:[Boolean,Object],default:!0},imageMode:M("aspectFill"),valueKey:M("value"),textKey:M("text"),autoplayVideo:U(!0),stopPreviousVideo:U(!0),stopAutoplayWhenVideoPlay:U(!1),adjustHeight:M("highest"),adjustVerticalHeight:U(!1),customIndicatorClass:M(""),customImageClass:M(""),customPrevImageClass:M(""),customNextImageClass:M(""),customItemClass:M(""),customPrevClass:M(""),customNextClass:M(""),customTextClass:M(""),customTextStyle:M("")},emits:["click","change","animationfinish","update:current"],setup(t,{emit:$}){const I=t,V=$,P=g(I.current),M=g(I.current),U=(t,e=!1)=>{M.value=t,e&&(P.value=t),V("update:current",t)},K=g(!1),{proxy:S}=C(),W=g(N());v((()=>I.current),(t=>{t<0?I.loop?J():L():t>=I.list.length?I.loop?L():J():G(t)}));const q=y((()=>{const{list:t,direction:e,indicatorPosition:a,indicator:s}=I,i={current:M.value||0,total:t.length||0,direction:e||"horizontal",indicatorPosition:a||"bottom"};return A(s)&&(i.type=s.type||"dots",i.minShowNum=s.minShowNum||2,i.showControls=s.showControls||!1),i})),D=(t,e)=>A(t)?t.type?t.type===e:"video"===e?F(t[I.valueKey]):z(t[I.valueKey]):"video"===e?F(t):z(t),E=t=>D(t,"video"),B=t=>D(t,"image");function G(t){t!==M.value&&U(t,!0)}function L(){G(0)}function J(){G(I.list.length-1)}function Q(){I.stopAutoplayWhenVideoPlay&&(K.value=!0)}function R(){K.value=!1}function X(t,e,a){let s="";return function(t,e,a){return(t-1+a.length)%a.length===e}(t,e,a)&&(s=I.customPrevClass||I.customPrevImageClass),function(t,e,a){return(t+1+a.length)%a.length===e}(t,e,a)&&(s=I.customNextClass||I.customNextImageClass),s}function Y(t){const{current:e,source:a}=t.detail,s=M.value;if(V("change",{current:e,source:a}),e!==M.value){U(e,"autoplay"===a||"touch"===a)}!function(t,e){(function(t){if(I.stopPreviousVideo){const e=I.list[t];if(H(e)&&E(e)){w(`video-${t}-${W.value}`,S).pause()}}else I.stopAutoplayWhenVideoPlay&&R()})(t),function(t){if(I.autoplayVideo){const e=I.list[t];if(H(e)&&E(e)){w(`video-${t}-${W.value}`,S).play()}}}(e)}(s,e)}function Z(t){const{current:e,source:a}=t.detail;if(e!==M.value){U(e,"autoplay"===a||"touch"===a)}V("animationfinish",{current:e,source:a})}function tt(t,e){V("click",{index:t,item:e})}function et({dir:t}){const{list:e,loop:a}=I,s=e.length;let i="next"===t?M.value+1:M.value-1;i=a?"next"===t?(M.value+1)%s:(M.value-1+s)%s:i<0||i>=s?M.value:i,i!==M.value&&G(i)}return(t,g)=>{const v=x,y=k,w=j,C=b,$=_,I=m;return e(),s(I,{class:d(`wd-swiper ${t.customClass}`),style:p(t.customStyle)},{default:i((()=>[o($,{"adjust-height":t.adjustHeight,"adjust-vertical-height":t.adjustVerticalHeight,class:"wd-swiper__track",autoplay:t.autoplay&&!K.value,current:P.value,interval:t.interval,duration:t.duration,circular:t.loop,vertical:"vertical"==t.direction,"easing-function":t.easingFunction,"previous-margin":h(T)(t.previousMargin),"next-margin":h(T)(t.nextMargin),"snap-to-edge":t.snapToEdge,"display-multiple-items":t.displayMultipleItems,style:p({height:h(T)(t.height)}),onChange:Y,onAnimationfinish:Z},{default:i((()=>[(e(!0),a(n,null,r(t.list,((a,o)=>(e(),s(C,{key:o,class:"wd-swiper__item"},{default:i((()=>[B(a)?(e(),s(v,{key:0,src:h(A)(a)?a[t.valueKey]:a,class:d(`wd-swiper__image ${t.customImageClass} ${t.customItemClass} ${X(M.value,o,t.list)}`),style:p({height:h(T)(t.height)}),mode:t.imageMode,onClick:t=>tt(o,a)},null,8,["src","class","style","mode","onClick"])):E(a)?(e(),s(y,{key:1,id:`video-${o}-${W.value}`,style:p({height:h(T)(t.height)}),src:h(A)(a)?a[t.valueKey]:a,poster:h(A)(a)?a.poster:"",class:d(`wd-swiper__video ${t.customItemClass} ${X(M.value,o,t.list)}`),onPlay:Q,onPause:R,"enable-progress-gesture":!1,loop:"",muted:"",autoplay:t.autoplayVideo,objectFit:"cover",onClick:t=>tt(o,a)},null,8,["id","style","src","poster","class","autoplay","onClick"])):l("",!0),h(A)(a)&&a[t.textKey]?(e(),s(w,{key:2,class:d(`wd-swiper__text ${t.customTextClass}`),style:p(t.customTextStyle)},{default:i((()=>[u(c(a[t.textKey]),1)])),_:2},1032,["class","style"])):l("",!0)])),_:2},1024)))),128))])),_:1},8,["adjust-height","adjust-vertical-height","autoplay","current","interval","duration","circular","vertical","easing-function","previous-margin","next-margin","snap-to-edge","display-multiple-items","style"]),t.indicator?(e(),a(n,{key:0},[f(t.$slots,"indicator",{current:M.value,total:t.list.length},void 0,!0),t.$slots.indicator?l("",!0):(e(),s(O,{key:0,"custom-class":t.customIndicatorClass,type:q.value.type,current:q.value.current,total:q.value.total,direction:q.value.direction,"indicator-position":q.value.indicatorPosition,"min-show-num":q.value.minShowNum,"show-controls":q.value.showControls,onChange:et},null,8,["custom-class","type","current","total","direction","indicator-position","min-show-num","show-controls"]))],64)):l("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-2c83a5d5"]]),Q=K(t({__name:"Index",setup(t){const a=g(["https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg","https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg","https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg","https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg","https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg"]),l=g([{url:"https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg",title:"小熊猫！"},{url:"https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg",title:"卡！皮！巴！拉！"},{url:"https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg",title:"大熊猫！"},{url:"https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg",title:"诗画中国！"}]),n=g(["https://unpkg.com/wot-design-uni-assets@1.0.3/VID_115503.mp4","https://unpkg.com/wot-design-uni-assets@1.0.3/VID_150752.mp4","https://unpkg.com/wot-design-uni-assets@1.0.3/VID_155516.mp4","https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg"]),r=g(0),p=g(1),d=g(2),v=g(3),y=g(4),h=g(0),f=g(0),w=g(0),_=g(0),C=g(0);g(0);const x=g(!1);function k(t){console.log(t)}function j(t){console.log(t)}return(t,g)=>{const b=$(I("wd-swiper"),J),V=$(I("demo-block"),B),P=m,M=$(I("wd-gap"),W),U=$(I("wd-switch"),q),K=$(I("wd-cell"),D),S=$(I("wd-cell-group"),G),N=$(I("wd-button"),L),A=$(I("page-wraper"),E);return e(),s(A,null,{default:i((()=>[o(V,{title:"点状指示器"},{default:i((()=>[o(b,{list:a.value,autoplay:"",current:r.value,"onUpdate:current":g[0]||(g[0]=t=>r.value=t),indicator:{type:"dots"},onClick:k,onChange:j},null,8,["list","current"])])),_:1}),o(V,{title:"点条状指示器"},{default:i((()=>[o(b,{list:a.value,autoplay:"",current:p.value,"onUpdate:current":g[1]||(g[1]=t=>p.value=t),indicator:{type:"dots-bar"},onClick:k,onChange:j},null,8,["list","current"])])),_:1}),o(V,{title:"数字指示器"},{default:i((()=>[o(b,{list:a.value,autoplay:"",current:d.value,"onUpdate:current":g[2]||(g[2]=t=>d.value=t),indicator:{type:"fraction"},"indicator-position":"bottom-right",onClick:k,onChange:j},null,8,["list","current"])])),_:1}),o(V,{title:"视频轮播"},{default:i((()=>[o(b,{list:n.value,autoplay:"",indicator:{type:"fraction"},"indicator-position":"top-right",onClick:k,onChange:j},null,8,["list"])])),_:1}),o(V,{title:"手动播放视频"},{default:i((()=>[o(b,{list:n.value,autoplay:"",autoplayVideo:!1,indicator:{type:"fraction"},"indicator-position":"top-right",onClick:k,onChange:j},null,8,["list"])])),_:1}),o(V,{title:"播放视频时停止轮播"},{default:i((()=>[o(b,{list:n.value,autoplay:"",stopAutoplayWhenVideoPlay:"",autoplayVideo:!1,indicator:{type:"fraction"},"indicator-position":"top-right",onClick:k,onChange:j},null,8,["list"])])),_:1}),o(V,{title:"手动切换"},{default:i((()=>[o(b,{list:a.value,autoplay:!1,current:v.value,"onUpdate:current":g[3]||(g[3]=t=>v.value=t),indicator:{showControls:!0},loop:!1,onClick:k,onChange:j},null,8,["list","current"])])),_:1}),o(V,{title:"卡片样式"},{default:i((()=>[o(P,{class:"card-swiper"},{default:i((()=>[o(b,{autoplay:"",current:y.value,"onUpdate:current":g[4]||(g[4]=t=>y.value=t),"custom-indicator-class":"custom-indicator-class","custom-image-class":"custom-image","custom-next-image-class":"custom-image-prev","custom-prev-image-class":"custom-image-prev",indicator:{type:"dots"},list:a.value,previousMargin:"24px",nextMargin:"24px"},null,8,["current","list"])])),_:1})])),_:1}),o(V,{title:"同时展示2个滑块"},{default:i((()=>[o(P,{class:"card-swiper"},{default:i((()=>[o(b,{autoplay:"",current:h.value,"onUpdate:current":g[5]||(g[5]=t=>h.value=t),"display-multiple-items":2,"custom-indicator-class":"custom-indicator-class","custom-image-class":"custom-image","custom-next-image-class":"custom-image-prev","custom-prev-image-class":"custom-image-prev",indicator:{type:"dots"},list:a.value,previousMargin:"24px",nextMargin:"24px"},null,8,["current","list"])])),_:1})])),_:1}),o(V,{title:"垂直方向"},{default:i((()=>[o(b,{list:a.value,direction:"vertical","indicator-position":"right",autoplay:"",current:f.value,"onUpdate:current":g[6]||(g[6]=t=>f.value=t),indicator:{type:"dots-bar"},onClick:k,onChange:j},null,8,["list","current"])])),_:1}),o(V,{title:"自定义指示器"},{default:i((()=>[o(b,{list:a.value,direction:"vertical","indicator-position":"right",autoplay:"",current:w.value,"onUpdate:current":g[7]||(g[7]=t=>w.value=t),onClick:k,onChange:j},{indicator:i((({current:t,total:e})=>[o(P,{class:"custom-indicator",style:{position:"absolute",bottom:"24rpx",right:"24rpx"}},{default:i((()=>[u(c(t+1)+"/"+c(e),1)])),_:2},1024)])),_:1},8,["list","current"])])),_:1}),o(V,{title:"指定valueKey和textKey"},{default:i((()=>[o(b,{"value-key":"url","text-key":"title",list:l.value,autoplay:"",current:C.value,"onUpdate:current":g[8]||(g[8]=t=>C.value=t),onClick:k,onChange:j},null,8,["list","current"])])),_:1}),o(V,{title:"属性控制切换"},{default:i((()=>[o(b,{loop:x.value,autoplay:!1,list:a.value,current:_.value,"onUpdate:current":g[9]||(g[9]=t=>_.value=t)},null,8,["loop","list","current"]),o(M),o(S,null,{default:i((()=>[o(K,{title:"loop"},{default:i((()=>[o(U,{modelValue:x.value,"onUpdate:modelValue":g[10]||(g[10]=t=>x.value=t),size:"24px"},null,8,["modelValue"])])),_:1}),o(K,{title:"current",value:_.value.toString()},null,8,["value"])])),_:1}),o(P,{style:{display:"flex","justify-content":"space-between"}},{default:i((()=>[o(N,{onClick:g[11]||(g[11]=t=>_.value--)},{default:i((()=>[u("prev")])),_:1}),o(N,{type:"success",onClick:g[12]||(g[12]=t=>_.value++)},{default:i((()=>[u("next")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-8f92eba8"]]);export{Q as default};
