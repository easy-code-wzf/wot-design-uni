import{R as i}from"./chunks/theme.nscGMnDH.js";import{aM as o,aR as u,aS as l,aT as c,aU as f,aV as d,aW as m,aX as h,aY as g,aZ as A,a_ as w,l as P,aw as R,o as b,w as v,a$ as y,b0 as C,b1 as S,af as T}from"./chunks/framework.ChOTG-bu.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),E=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=R();return b(()=>{v(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&y(),C(),S(),s.setup&&s.setup(),()=>T(s.Layout)}});async function _(){globalThis.__VITEPRESS__=!0;const e=V(),a=D();a.provide(l,e);const t=c(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function D(){return g(E)}function V(){let e=o,a;return A(t=>{let n=w(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&_().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{_ as createApp};
