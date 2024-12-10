import{_ as e}from"./wd-message-box.Pzly-D2a.js";import{d as l,X as a,r as o,a as t,b as r,o as d,c as s,w as i,e as m,f as u,i as p,j as c}from"./index-WwrgI7Rh.js";import{c as n,d as f,_ as w,e as h,a as b,r as v,b as j}from"./page-wraper.XLZNc_u_.js";import{_ as V}from"./wd-input.CwfTBTsD.js";import{_ as g}from"./wd-select-picker.CKz2zT-1.js";import{_}from"./wd-picker.D-vbvbMY.js";import{_ as x}from"./wd-cell-group.ChcDjznc.js";import{_ as P}from"./wd-datetime-picker.Bxa9NklP.js";import{_ as k}from"./wd-calendar.DWJiHTPD.js";import{u as y,_ as U}from"./useColPickerData.C3B8H0ik.js";import{_ as q}from"./wd-textarea.C5jkhPU2.js";import{_ as I}from"./wd-input-number.B-5ivKhk.js";import{_ as C}from"./wd-upload.D1LRUtHj.js";import{_ as L}from"./wd-checkbox.BrXc8oFN.js";import{_ as N}from"./wd-button.Df9kCKkG.js";import{_ as z}from"./wd-form.BNv3gjca.js";import"./useTranslate.B9y1fU2w.js";import"./wd-search.vFrYTWIO.js";import"./wd-action-sheet.D6b_X7uj.js";import"./wd-checkbox-group.CnSNRywB.js";import"./useChildren.Da1LiOi9.js";import"./wd-radio-group.B1tM0Fvt.js";import"./wd-picker-view.CtCcaipr.js";import"./wd-datetime-picker-view.MsLFxtII.js";import"./dayjs.4bNf6ZFu.js";import"./wd-tabs.CoyOD7eI.js";import"./wd-badge.BgH63yVt.js";import"./wd-sticky-box.TVDANRTd.js";import"./wd-resize.BpIFxzaW.js";import"./useTouch.B02vohwq.js";import"./wd-tag.ByytchTu.js";import"./wd-calendar-view.DL0apFFD.js";const T=j(l({__name:"demo3",setup(l){const{colPickerData:j,findChildrenByCode:T}=y(),D=a({couponName:"",platform:[],promotion:"",threshold:"",price:"",date:null,time:"",address:[],count:1,content:"",switchVal:!0,cardId:"",phone:"",read:!1,fileList:[]}),Q={couponName:[{required:!0,pattern:/\d{6}/,message:"优惠券名称6个字以上",validator:e=>e?Promise.resolve():Promise.reject("请输入优惠券名称")}],content:[{required:!0,message:"请输入活动细则信息",validator:e=>e&&e.length>2?Promise.resolve():Promise.reject("请输入活动细则信息")}],threshold:[{required:!0,message:"请输入满减金额",validator:e=>e&&D.price?Promise.resolve():Promise.reject()}],platform:[{required:!0,message:"请选择推广平台",validator:e=>e&&v(e)&&e.length?Promise.resolve():Promise.reject("请选择推广平台")}],promotion:[{required:!0,message:"请选择推广平台",validator:e=>e?Promise.resolve():Promise.reject("请选择推广平台")}],time:[{required:!0,message:"请选择时间",validator:e=>e?Promise.resolve():Promise.reject("请选择时间")}],date:[{required:!0,message:"请选择日期",validator:e=>e?Promise.resolve():Promise.reject()}],address:[{required:!0,message:"请选择地址",validator:e=>v(e)&&e.length?Promise.resolve():Promise.reject("请选择地址")}],count:[{required:!0,message:"发货数量需要大于1",validator:e=>Number(e)>1?Promise.resolve():Promise.reject("发货数量需要大于1")}],cardId:[{required:!0,message:"请输入歪比巴卜",validator:e=>e?Promise.resolve():Promise.reject("请输入歪比巴卜")}],phone:[{required:!0,message:"请输入玛卡巴卡",validator:e=>e?Promise.resolve():Promise.reject()}],fileList:[{required:!0,message:"请选择活动图片",validator:e=>v(e)&&e.length?Promise.resolve():Promise.reject()}]},B=o([{value:"1",label:"京东"},{value:"2",label:"开普勒"},{value:"3",label:"手Q"},{value:"4",label:"微信"},{value:"5",label:"1号店"},{value:"6",label:"十元街"},{value:"7",label:"京东极速版"}]),F=o([{value:"1",label:"满减"},{value:"2",label:"无门槛"}]),G=o([j.map((e=>({value:e.value,label:e.text})))]),H=({selectedItem:e,resolve:l,finish:a})=>{const o=T(j,e.value);o&&o.length?l(o.map((e=>({value:e.value,label:e.text})))):a()},J=n(),K=o();function O({fileList:e}){D.fileList=e}function R(){K.value.validate().then((({valid:e,errors:l})=>{console.log(e),console.log(l)})).catch((e=>{console.log(e,"error")}))}function S(){J.info("优惠券提示信息")}return(l,a)=>{const o=t(r("wd-message-box"),e),n=t(r("wd-toast"),f),v=t(r("wd-input"),V),j=t(r("wd-select-picker"),g),y=t(r("wd-picker"),_),T=p,J=t(r("wd-cell"),w),W=t(r("wd-cell-group"),x),X=t(r("wd-datetime-picker"),P),Y=t(r("wd-calendar"),k),Z=t(r("wd-col-picker"),U),$=t(r("wd-textarea"),q),A=t(r("wd-input-number"),I),E=t(r("wd-switch"),h),M=t(r("wd-upload"),C),ee=c,le=t(r("wd-checkbox"),L),ae=t(r("wd-button"),N),oe=t(r("wd-form"),z),te=t(r("page-wraper"),b);return d(),s(T,null,{default:i((()=>[m(te,null,{default:i((()=>[m(o),m(n),m(oe,{ref_key:"form",ref:K,model:D,rules:Q},{default:i((()=>[m(W,{"custom-class":"group",title:"基础信息",border:""},{default:i((()=>[m(v,{label:"优惠券名称","label-width":"100px",maxlength:20,"show-word-limit":"",prop:"couponName",required:"","suffix-icon":"warn-bold",clearable:"",modelValue:D.couponName,"onUpdate:modelValue":a[0]||(a[0]=e=>D.couponName=e),placeholder:"请输入优惠券名称",onClicksuffixicon:S},null,8,["modelValue"]),m(j,{label:"推广平台","label-width":"100px",prop:"platform",modelValue:D.platform,"onUpdate:modelValue":a[1]||(a[1]=e=>D.platform=e),columns:B.value,placeholder:"请选择推广平台"},null,8,["modelValue","columns"]),m(y,{label:"优惠方式",placeholder:"请选择优惠方式","label-width":"100px",prop:"promotion",modelValue:D.promotion,"onUpdate:modelValue":a[2]||(a[2]=e=>D.promotion=e),columns:F.value},null,8,["modelValue","columns"]),m(J,{prop:"threshold",title:"券面额",required:"","title-width":"100px","custom-value-class":"cell-left"},{default:i((()=>[m(T,{style:{"text-align":"left"}},{default:i((()=>[m(T,{class:"inline-txt",style:{"margin-left":"0"}},{default:i((()=>[u("满")])),_:1}),m(v,{"no-border":"","custom-style":"display: inline-block; width: 70px; vertical-align: middle",placeholder:"请输入金额",modelValue:D.threshold,"onUpdate:modelValue":a[3]||(a[3]=e=>D.threshold=e)},null,8,["modelValue"]),m(T,{class:"inline-txt"},{default:i((()=>[u("减")])),_:1}),m(v,{"no-border":"","custom-style":"display: inline-block; width: 70px; vertical-align: middle",placeholder:"请输入金额",modelValue:D.price,"onUpdate:modelValue":a[4]||(a[4]=e=>D.price=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(W,{"custom-class":"group",title:"时间和地址",border:""},{default:i((()=>[m(X,{label:"时间","label-width":"100px",placeholder:"请选择时间",prop:"time",modelValue:D.time,"onUpdate:modelValue":a[5]||(a[5]=e=>D.time=e)},null,8,["modelValue"]),m(Y,{label:"日期","label-width":"100px",placeholder:"请选择日期",prop:"date",modelValue:D.date,"onUpdate:modelValue":a[6]||(a[6]=e=>D.date=e)},null,8,["modelValue"]),m(Z,{label:"地址",placeholder:"请选择地址","label-width":"100px",prop:"address",modelValue:D.address,"onUpdate:modelValue":a[7]||(a[7]=e=>D.address=e),columns:G.value,"column-change":H},null,8,["modelValue","columns"])])),_:1}),m(W,{"custom-class":"group",title:"其他信息",border:""},{default:i((()=>[m($,{label:"活动细则","label-width":"100px",type:"textarea",modelValue:D.content,"onUpdate:modelValue":a[8]||(a[8]=e=>D.content=e),maxlength:300,"show-word-limit":"",placeholder:"请输入活动细则信息",clearable:"",prop:"content"},null,8,["modelValue"]),m(J,{title:"发货数量","title-width":"100px",prop:"count"},{default:i((()=>[m(T,{style:{"text-align":"left"}},{default:i((()=>[m(A,{modelValue:D.count,"onUpdate:modelValue":a[9]||(a[9]=e=>D.count=e)},null,8,["modelValue"])])),_:1})])),_:1}),m(J,{title:"开启折扣","title-width":"100px",prop:"switchVal",center:""},{default:i((()=>[m(T,{style:{"text-align":"left"}},{default:i((()=>[m(E,{modelValue:D.switchVal,"onUpdate:modelValue":a[10]||(a[10]=e=>D.switchVal=e)},null,8,["modelValue"])])),_:1})])),_:1}),m(v,{label:"歪比巴卜","label-width":"100px",prop:"cardId","suffix-icon":"camera",placeholder:"请输入歪比巴卜",clearable:"",modelValue:D.cardId,"onUpdate:modelValue":a[11]||(a[11]=e=>D.cardId=e)},null,8,["modelValue"]),m(v,{label:"玛卡巴卡","label-width":"100px",prop:"phone",placeholder:"请输入玛卡巴卡",clearable:"",modelValue:D.phone,"onUpdate:modelValue":a[12]||(a[12]=e=>D.phone=e)},null,8,["modelValue"]),m(J,{title:"活动图片","title-width":"100px",prop:"fileList"},{default:i((()=>[m(M,{"file-list":D.fileList,action:"https://ftf.jd.com/api/uploadImg",onChange:O},null,8,["file-list"])])),_:1})])),_:1}),m(T,{class:"tip"},{default:i((()=>[m(le,{modelValue:D.read,"onUpdate:modelValue":a[13]||(a[13]=e=>D.read=e),prop:"read","custom-label-class":"label-class"},{default:i((()=>[u(" 已阅读并同意 "),m(ee,{style:{color:"#4d80f0"}},{default:i((()=>[u("《巴拉巴拉吧啦协议》")])),_:1})])),_:1},8,["modelValue"])])),_:1}),m(T,{class:"footer"},{default:i((()=>[m(ae,{type:"primary",size:"large",onClick:R,block:""},{default:i((()=>[u("提交")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-892a0610"]]);export{T as default};
