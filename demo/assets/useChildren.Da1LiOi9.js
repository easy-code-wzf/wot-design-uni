import{X as n,W as e,L as r}from"./index-WwrgI7Rh.js";const i=(n,e)=>{const r=n.indexOf(e);return-1===r?n.findIndex((n=>void 0!==e.key&&null!==e.key&&n.type===e.type&&n.key===e.key)):r};function o(n,e,r){const o=n&&n.subTree&&n.subTree.children?function(n){const e=[],r=n=>{Array.isArray(n)&&n.forEach((n=>{var i,o;(o=n)&&!0===o.__v_isVNode&&(e.push(n),(null==(i=n.component)?void 0:i.subTree)&&(e.push(n.component.subTree),r(n.component.subTree.children)),n.children&&r(n.children))}))};return r(n),e}(n.subTree.children):[];r.sort(((n,e)=>i(o,n.vnode)-i(o,e.vnode)));const s=r.map((n=>n.proxy));e.sort(((n,e)=>s.indexOf(n)-s.indexOf(e)))}function s(i){const s=n([]),c=n([]),t=r();return{children:s,linkChildren:n=>{e(i,Object.assign({link:n=>{n.proxy&&(c.push(n),s.push(n.proxy),o(t,s,c))},unlink:n=>{const e=c.indexOf(n);s.splice(e,1),c.splice(e,1)},children:s,internalChildren:c},n))}}}export{s as u};
