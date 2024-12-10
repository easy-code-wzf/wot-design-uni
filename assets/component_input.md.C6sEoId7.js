import{av as d,p as e,U as i,O as a,S as t,aQ as l,ag as h,m as n}from"./chunks/framework.ChOTG-bu.js";const b=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"component/input.md","filePath":"component/input.md","lastUpdated":1733839612000}'),p={name:"component/input.md"},r=l(`<h1 id="input-输入框" tabindex="-1">Input 输入框 <a class="header-anchor" href="#input-输入框" aria-label="Permalink to &quot;Input 输入框&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p><code>0.2.0</code>版本已将 <code>Input</code> 组件的 <code>textarea 文本域</code>功能迁移至 <a href="/component/textarea.html">Textarea</a>组件，所有API保持一致。</p></div><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>可以通过 <code>v-model</code> 双向绑定输入框的值，通过 <code>placeholder</code> 设置占位提示文字。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleChange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入用户名&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;handleChange&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="禁用" tabindex="-1">禁用 <a class="header-anchor" href="#禁用" aria-label="Permalink to &quot;禁用&quot;">​</a></h2><p>设置 <code>disabled</code> 属性。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="只读" tabindex="-1">只读 <a class="header-anchor" href="#只读" aria-label="Permalink to &quot;只读&quot;">​</a></h2><p>设置 <code>readonly</code> 属性。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readonly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="清空按钮" tabindex="-1">清空按钮 <a class="header-anchor" href="#清空按钮" aria-label="Permalink to &quot;清空按钮&quot;">​</a></h2><p>设置 <code>clearable</code> 属性。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> clearable</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;handleChange&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="有值且聚焦时展示清空按钮" tabindex="-1">有值且聚焦时展示清空按钮 <a class="header-anchor" href="#有值且聚焦时展示清空按钮" aria-label="Permalink to &quot;有值且聚焦时展示清空按钮&quot;">​</a></h2><p>设置 <code>clear-trigger</code> 属性，可以控制是否聚焦时才展示清空按钮。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>支付宝小程序暂不支持 <code>clear-trigger</code> 属性，且某种情况下清空按钮无法点击，原因参考此<a href="https://github.com/ant-design/ant-design-mini/issues/1255" target="_blank" rel="noreferrer">issue</a>（希望可以早点解决，所以直接给蚂蚁的组件库提了个issue）。</p></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> clear-trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;focus&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> clearable</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;handleChange&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="点击清除按钮时不自动聚焦" tabindex="-1">点击清除按钮时不自动聚焦 <a class="header-anchor" href="#点击清除按钮时不自动聚焦" aria-label="Permalink to &quot;点击清除按钮时不自动聚焦&quot;">​</a></h2><p>设置<code>focus-when-clear</code> 属性，可以控制点击清除按钮时是否自动聚焦。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :focus-when-clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> clearable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="密码输入框" tabindex="-1">密码输入框 <a class="header-anchor" href="#密码输入框" aria-label="Permalink to &quot;密码输入框&quot;">​</a></h2><p>设置 <code>show-password</code> 属性。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> clearable</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show-password</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;handleChange&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="前后icon" tabindex="-1">前后icon <a class="header-anchor" href="#前后icon" aria-label="Permalink to &quot;前后icon&quot;">​</a></h2><p>设置前置icon <code>prefix-icon</code>，设置后置icon <code>suffix-icon</code>，icon 为 <a href="/component/icon.html">icon</a> 章节中的图标，如果没有你需要的图标，则使用 <code>prefix</code>、<code>suffix</code> 插槽进行自定义插入。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  prefix-icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dong&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  suffix-icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;list&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;handleChange&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="限制字数输入" tabindex="-1">限制字数输入 <a class="header-anchor" href="#限制字数输入" aria-label="Permalink to &quot;限制字数输入&quot;">​</a></h2><p>设置 <code>maxlength</code> 属性，如果要显示字数限制，设置 <code>show-word-limit</code> 属性。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :maxlength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;20&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show-word-limit</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;handleChange&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="设置label标题" tabindex="-1">设置label标题 <a class="header-anchor" href="#设置label标题" aria-label="Permalink to &quot;设置label标题&quot;">​</a></h2><p>设置 <code>label</code> 标题，可以和 <code>cell-group</code> 组合使用，形成 <code>cell</code> 展示类型。可以通过 <code>label-width</code> 设置标题宽度，默认为 &#39;33%&#39;。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;基本用法&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="必填样式" tabindex="-1">必填样式 <a class="header-anchor" href="#必填样式" aria-label="Permalink to &quot;必填样式&quot;">​</a></h2><p>设置了 <code>label</code> 的情况下，设置 <code>required</code> 属性，展示必填样式。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入...&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;必填&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="输入框大小" tabindex="-1">输入框大小 <a class="header-anchor" href="#输入框大小" aria-label="Permalink to &quot;输入框大小&quot;">​</a></h2><p>通过设置 <code>size</code> 修改输入框大小，将 <code>size</code> 设置为 &#39;large&#39; 时字号为 16px。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;基本用法&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;large&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="错误状态" tabindex="-1">错误状态 <a class="header-anchor" href="#错误状态" aria-label="Permalink to &quot;错误状态&quot;">​</a></h2><p>设置 <code>error</code> 属性，输入框的值显示为红色。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入用户名&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="垂直居中" tabindex="-1">垂直居中 <a class="header-anchor" href="#垂直居中" aria-label="Permalink to &quot;垂直居中&quot;">​</a></h2><p>当设置 <code>label</code> 标题时，默认为顶部居中，设置 <code>center</code> 属性可以使标题和输入框垂直居中。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;基本用法&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>string</td><td>text / number / digit / idcard</td><td>text</td><td>-</td></tr><tr><td>v-model</td><td>绑定值</td><td>string / number</td><td>-</td><td>-</td><td>-</td></tr><tr><td>placeholder</td><td>占位文本</td><td>string</td><td>-</td><td>请输入...</td><td>-</td></tr><tr><td>clearable</td><td>显示清空按钮</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>maxlength</td><td>原生属性，最大长度</td><td>number</td><td>-</td><td>支付宝小程序无默认值，其余平台默认为-1</td><td>-</td></tr><tr><td>showPassword</td><td>显示为密码框</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>disabled</td><td>原生属性，禁用</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>readonly</td><td>只读</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>prefixIcon</td><td>前置图标，icon组件中的图标类名</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>suffixIcon</td><td>后置图标，icon组件中的图标类名</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>showWordLimit</td><td>显示字数限制，需要同时设置 maxlength</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>confirm-type</td><td>设置键盘右下角按钮的文字，仅在type=&#39;text&#39;时生效</td><td>string</td><td>done / go / next / search / send</td><td>done</td><td>-</td></tr><tr><td>confirm-hold</td><td>点击键盘右下角按钮时是否保持键盘不收起</td><td>Boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>always-embed</td><td>微信小程序原生属性，强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)</td><td>Boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>placeholderStyle</td><td>原生属性，指定 placeholder 的样式，目前仅支持color,font-size和font-weight</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>placeholderClass</td><td>原生属性，指定 placeholder 的样式类</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>focus</td><td>原生属性，获取焦点</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>cursorSpacing</td><td>原生属性，指定光标与键盘的距离。取 input 距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离</td><td>number</td><td>-</td><td>0</td><td>-</td></tr><tr><td>cursor</td><td>原生属性，指定focus时的光标位置</td><td>number</td><td>-</td><td>-1</td><td>-</td></tr><tr><td>selectionStart</td><td>原生属性，光标起始位置，自动聚集时有效，需与selection-end搭配使用</td><td>number</td><td>-</td><td>-1</td><td>-</td></tr><tr><td>selectionEnd</td><td>原生属性，光标结束位置，自动聚集时有效，需与selection-start搭配使用</td><td>number</td><td>-</td><td>-1</td><td>-</td></tr><tr><td>adjustPosition</td><td>原生属性，键盘弹起时，是否自动上推页面</td><td>boolean</td><td>-</td><td>true</td><td>-</td></tr><tr><td>label</td><td>设置左侧标题</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>size</td><td>设置输入框大小</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>error</td><td>设置输入框错误状态，错误状态时为红色</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>center</td><td>当有label属性时，设置标题和输入框垂直居中，默认为顶部居中</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>label-width</td><td>设置左侧标题宽度</td><td>string</td><td>-</td><td>33%</td><td>-</td></tr><tr><td>use-label-slot</td><td>使用 label 插槽</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>use-suffix-slot</td><td>使用 后置图标 插槽</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>use-prefix-slot</td><td>使用 前置图标 插槽</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>required</td><td>cell 类型下必填样式</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>no-border</td><td>非 cell 类型下是否隐藏下划线</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>prop</td><td>表单域 <code>model</code> 字段名，在使用表单校验功能的情况下，该属性是必填的</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>rules</td><td>表单验证规则，结合<code>wd-form</code>组件使用</td><td><code>FormItemRule []</code></td><td>-</td><td><code>[]</code></td><td>-</td></tr><tr><td>clearTrigger</td><td>显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示</td><td><code>InputClearTrigger</code></td><td><code>focus</code> / <code>always</code></td><td><code>always</code></td><td>1.3.7</td></tr><tr><td>focusWhenClear</td><td>是否在点击清除按钮时聚焦输入框</td><td>boolean</td><td>-</td><td>true</td><td>1.3.7</td></tr><tr><td>ignoreCompositionEvent</td><td>是否忽略组件内对文本合成系统事件的处理。为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件。</td><td>boolean</td><td>-</td><td>true</td><td>1.3.11</td></tr><tr><td>inputmode</td><td>提供用户在编辑元素或其内容时可能输入的数据类型的提示。</td><td>InputMode</td><td>-</td><td>text</td><td>1.5.0</td></tr></tbody></table><h3 id="inputmode-可选值" tabindex="-1">InputMode 可选值 <a class="header-anchor" href="#inputmode-可选值" aria-label="Permalink to &quot;InputMode 可选值&quot;">​</a></h3><blockquote><p>新增于 uni-app 3.6.16+ inputmode是html规范后期更新的内容。各家小程序还未支持此属性。</p></blockquote><p>在符合条件的高版本webview里，uni-app的web和app-vue平台中可使用本属性，参见<a href="https://uniapp.dcloud.net.cn/component/input.html#inputmode" target="_blank" rel="noreferrer">inputmode</a>。</p><table tabindex="0"><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>none</td><td>无虚拟键盘。在应用程序或者站点需要实现自己的键盘输入控件时很有用。</td></tr><tr><td>text</td><td>使用用户本地区域设置的标准文本输入键盘。</td></tr><tr><td>decimal</td><td>小数输入键盘，包含数字和分隔符（通常是“ . ”或者“ , ”），设备可能也可能不显示减号键。</td></tr><tr><td>numeric</td><td>数字输入键盘，所需要的就是 0 到 9 的数字，设备可能也可能不显示减号键。</td></tr><tr><td>tel</td><td>电话输入键盘，包含 0 到 9 的数字、星号（*）和井号（#）键。表单输入里面的电话输入通常应该使用 <input type="tel"> 。</td></tr><tr><td>search</td><td>为搜索输入优化的虚拟键盘，比如，返回键可能被重新标记为“搜索”，也可能还有其他的优化。</td></tr><tr><td>email</td><td>为邮件地址输入优化的虚拟键盘，通常包含&quot;@&quot;符号和其他优化。表单里面的邮件地址输入应该使用 <input type="email">。</td></tr><tr><td>url</td><td>为网址输入优化的虚拟键盘，比如，“/”键会更加明显、历史记录访问等。表单里面的网址输入通常应该使用 <input type="url">。</td></tr></tbody></table><h2 id="formitemrule" tabindex="-1">FormItemRule <a class="header-anchor" href="#formitemrule" aria-label="Permalink to &quot;FormItemRule&quot;">​</a></h2><table tabindex="0"><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>required</td><td>是否为必选字段</td><td><code>boolean</code></td></tr><tr><td>message</td><td>错误提示文案</td><td><code>string</code></td></tr><tr><td>validator</td><td>通过函数进行校验，可以返回一个 <code>Promise</code> 来进行异步校验</td><td><code>(value, rule) =&gt; boolean | Promise</code></td></tr><tr><td>pattern</td><td>通过正则表达式进行校验，正则无法匹配表示校验不通过</td><td><code>RegExp</code></td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名称</th><th>说明</th><th>参数</th><th>最低版本</th></tr></thead><tbody><tr><td>input</td><td>监听输入框input事件</td><td><code> {value, cursor, keyCode}</code></td><td>-</td></tr><tr><td>focus</td><td>监听输入框focus事件</td><td><code> { value, height }</code>, height 为键盘高度</td><td>-</td></tr><tr><td>blur</td><td>监听输入框blur事件</td><td><code> { value }</code></td><td>-</td></tr><tr><td>change</td><td>监听输入框修改事件</td><td><code> { value }</code></td><td>-</td></tr><tr><td>clear</td><td>监听输入框清空按钮事件</td><td>-</td><td>-</td></tr><tr><td>confirm</td><td>点击完成时， 触发 confirm 事件</td><td><code> { value }</code></td><td>-</td></tr><tr><td>keyboardheightchange</td><td>键盘高度发生变化的时候触发此事件</td><td><code> { height, duration }</code></td><td>-</td></tr><tr><td>clickprefixicon</td><td>点击前置图标时触发</td><td>-</td><td>-</td></tr><tr><td>clicksuffixicon</td><td>点击后置图标时触发</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slot" tabindex="-1">Slot <a class="header-anchor" href="#slot" aria-label="Permalink to &quot;Slot&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>使用插槽需要配置是否启用对应的插槽，分别对应<code>use-label-slot</code>、<code>use-suffix-slot</code>、<code>use-prefix-slot</code>。</p></div><table tabindex="0"><thead><tr><th>name</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>label</td><td>左侧标题插槽</td><td>-</td></tr><tr><td>prefix</td><td>前置插槽</td><td>-</td></tr><tr><td>suffix</td><td>后置插槽</td><td>-</td></tr></tbody></table><h2 id="外部样式类" tabindex="-1">外部样式类 <a class="header-anchor" href="#外部样式类" aria-label="Permalink to &quot;外部样式类&quot;">​</a></h2><table tabindex="0"><thead><tr><th>类名</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>custom-class</td><td>根节点样式</td><td>-</td></tr><tr><td>custom-input-class</td><td>input 外部自定义样式</td><td>-</td></tr><tr><td>custom-label-class</td><td>label 外部自定义样式</td><td>-</td></tr></tbody></table><h2 id="源代码" tabindex="-1">源代码 <a class="header-anchor" href="#源代码" aria-label="Permalink to &quot;源代码&quot;">​</a></h2>`,62);function o(k,c,g,E,u,y){const s=h("ExternalLink");return n(),e("div",null,[r,i(s,{href:"https://github.com/Moonofweisheng/wot-design-uni/tree/master/src/pages/input"},{default:a(()=>[t("文档")]),_:1}),t(" • "),i(s,{href:"https://github.com/Moonofweisheng/wot-design-uni/tree/master/src/uni_modules/wot-design-uni/components/wd-input"},{default:a(()=>[t("组件")]),_:1})])}const m=d(p,[["render",o]]);export{b as __pageData,m as default};
