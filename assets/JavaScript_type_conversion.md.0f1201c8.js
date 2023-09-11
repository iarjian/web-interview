import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.2eafe199.js";const b=JSON.parse('{"title":"面试官：谈谈 JavaScript 中的类型转换机制","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/type_conversion.md","filePath":"JavaScript/type_conversion.md","lastUpdated":1694416341000}'),p={name:"JavaScript/type_conversion.md"},o=l(`<h1 id="面试官-谈谈-javascript-中的类型转换机制" tabindex="-1">面试官：谈谈 JavaScript 中的类型转换机制 <a class="header-anchor" href="#面试官-谈谈-javascript-中的类型转换机制" aria-label="Permalink to &quot;面试官：谈谈 JavaScript 中的类型转换机制&quot;">​</a></h1><p><img src="https://static.vue-js.com/2abd00a0-6692-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、概述" tabindex="-1">一、概述 <a class="header-anchor" href="#一、概述" aria-label="Permalink to &quot;一、概述&quot;">​</a></h2><p>前面我们讲到，<code>JS </code>中有六种简单数据类型：<code>undefined</code>、<code>null</code>、<code>boolean</code>、<code>string</code>、<code>number</code>、<code>symbol</code>，以及引用类型：<code>object</code></p><p>但是我们在声明的时候只有一种数据类型，只有到运行期间才会确定当前类型</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> a;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> y </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> a;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面代码中，<code>x</code>的值在编译阶段是无法获取的，只有等到程序运行时才能知道</p><p>虽然变量的数据类型是不确定的，但是各种运算符对数据类型是有要求的，如果运算子的类型与预期不符合，就会触发类型转换机制</p><p>常见的类型转换有：</p><ul><li>强制转换（显示转换）</li><li>自动转换（隐式转换）</li></ul><h2 id="二、显示转换" tabindex="-1">二、显示转换 <a class="header-anchor" href="#二、显示转换" aria-label="Permalink to &quot;二、显示转换&quot;">​</a></h2><p>显示转换，即我们很清楚可以看到这里发生了类型的转变，常见的方法有：</p><ul><li>Number()</li><li>parseInt()</li><li>String()</li><li>Boolean()</li></ul><h3 id="number" tabindex="-1">Number() <a class="header-anchor" href="#number" aria-label="Permalink to &quot;Number()&quot;">​</a></h3><p>将任意类型的值转化为数值</p><p>先给出类型转换规则：</p><p><img src="https://static.vue-js.com/915b7300-6692-11eb-ab90-d9ae814b240d.png" alt=""></p><p>实践一下：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">324</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 324</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 字符串：如果可以被解析为数值，则转换为相应的数值</span></span>
<span class="line"><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;324&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 324</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 字符串：如果不可以被解析为数值，返回 NaN</span></span>
<span class="line"><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;324abc&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 空字符串转为0</span></span>
<span class="line"><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 布尔值：true 转成 1，false 转成 0</span></span>
<span class="line"><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// undefined：转成 NaN</span></span>
<span class="line"><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// null：转成0</span></span>
<span class="line"><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对象：通常转换成NaN(除了只包含单个数值的数组)</span></span>
<span class="line"><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">({a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}) </span><span style="color:#6A737D;">// NaN</span></span>
<span class="line"><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]) </span><span style="color:#6A737D;">// NaN</span></span>
<span class="line"><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]) </span><span style="color:#6A737D;">// 5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">324</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 324</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 字符串：如果可以被解析为数值，则转换为相应的数值</span></span>
<span class="line"><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;324&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 324</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 字符串：如果不可以被解析为数值，返回 NaN</span></span>
<span class="line"><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;324abc&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 空字符串转为0</span></span>
<span class="line"><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 布尔值：true 转成 1，false 转成 0</span></span>
<span class="line"><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// undefined：转成 NaN</span></span>
<span class="line"><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// null：转成0</span></span>
<span class="line"><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对象：通常转换成NaN(除了只包含单个数值的数组)</span></span>
<span class="line"><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">({a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">}) </span><span style="color:#6A737D;">// NaN</span></span>
<span class="line"><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]) </span><span style="color:#6A737D;">// NaN</span></span>
<span class="line"><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]) </span><span style="color:#6A737D;">// 5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>从上面可以看到，<code>Number</code>转换的时候是很严格的，只要有一个字符无法转成数值，整个字符串就会被转为<code>NaN</code></p><h3 id="parseint" tabindex="-1">parseInt() <a class="header-anchor" href="#parseint" aria-label="Permalink to &quot;parseInt()&quot;">​</a></h3><p><code>parseInt</code>相比<code>Number</code>，就没那么严格了，<code>parseInt</code>函数逐个解析字符，遇到不能转换的字符就停下来</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;32a3&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//32</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;32a3&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//32</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="string" tabindex="-1">String() <a class="header-anchor" href="#string" aria-label="Permalink to &quot;String()&quot;">​</a></h3><p>可以将任意类型的值转化成字符串</p><p>给出转换规则图：</p><p><img src="https://static.vue-js.com/48dd8eb0-6692-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>实践一下：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 数值：转为相应的字符串</span></span>
<span class="line"><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// &quot;1&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//字符串：转换后还是原来的值</span></span>
<span class="line"><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// &quot;a&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//布尔值：true转为字符串&quot;true&quot;，false转为字符串&quot;false&quot;</span></span>
<span class="line"><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// &quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//undefined：转为字符串&quot;undefined&quot;</span></span>
<span class="line"><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// &quot;undefined&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//null：转为字符串&quot;null&quot;</span></span>
<span class="line"><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// &quot;null&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//对象</span></span>
<span class="line"><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">({a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}) </span><span style="color:#6A737D;">// &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]) </span><span style="color:#6A737D;">// &quot;1,2,3&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 数值：转为相应的字符串</span></span>
<span class="line"><span style="color:#6F42C1;">String</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// &quot;1&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//字符串：转换后还是原来的值</span></span>
<span class="line"><span style="color:#6F42C1;">String</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// &quot;a&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//布尔值：true转为字符串&quot;true&quot;，false转为字符串&quot;false&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">String</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// &quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//undefined：转为字符串&quot;undefined&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">String</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// &quot;undefined&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//null：转为字符串&quot;null&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">String</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// &quot;null&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//对象</span></span>
<span class="line"><span style="color:#6F42C1;">String</span><span style="color:#24292E;">({a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">}) </span><span style="color:#6A737D;">// &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">String</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]) </span><span style="color:#6A737D;">// &quot;1,2,3&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="boolean" tabindex="-1">Boolean() <a class="header-anchor" href="#boolean" aria-label="Permalink to &quot;Boolean()&quot;">​</a></h3><p>可以将任意类型的值转为布尔值，转换规则如下：</p><p><img src="https://static.vue-js.com/53bdad10-6692-11eb-ab90-d9ae814b240d.png" alt=""></p><p>实践一下：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">NaN</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">({}) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">([]) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">NaN</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">({}) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">([]) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="三、隐式转换" tabindex="-1">三、隐式转换 <a class="header-anchor" href="#三、隐式转换" aria-label="Permalink to &quot;三、隐式转换&quot;">​</a></h2><p>在隐式转换中，我们可能最大的疑惑是 ：何时发生隐式转换？</p><p>我们这里可以归纳为两种情况发生隐式转换的场景：</p><ul><li>比较运算（<code>==</code>、<code>!=</code>、<code>&gt;</code>、<code>&lt;</code>）、<code>if</code>、<code>while</code>需要布尔值地方</li><li>算术运算（<code>+</code>、<code>-</code>、<code>*</code>、<code>/</code>、<code>%</code>）</li></ul><p>除了上面的场景，还要求运算符两边的操作数不是同一类型</p><h3 id="自动转换为布尔值" tabindex="-1">自动转换为布尔值 <a class="header-anchor" href="#自动转换为布尔值" aria-label="Permalink to &quot;自动转换为布尔值&quot;">​</a></h3><p>在需要布尔值的地方，就会将非布尔值的参数自动转为布尔值，系统内部会调用<code>Boolean</code>函数</p><p>可以得出个小结：</p><ul><li>undefined</li><li>null</li><li>false</li><li>+0</li><li>-0</li><li>NaN</li><li>&quot;&quot;</li></ul><p>除了上面几种会被转化成<code>false</code>，其他都换被转化成<code>true</code></p><h3 id="自动转换成字符串" tabindex="-1">自动转换成字符串 <a class="header-anchor" href="#自动转换成字符串" aria-label="Permalink to &quot;自动转换成字符串&quot;">​</a></h3><p>遇到预期为字符串的地方，就会将非字符串的值自动转为字符串</p><p>具体规则是：先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串</p><p>常发生在<code>+</code>运算中，一旦存在字符串，则会进行字符串拼接操作</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// &#39;51&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// &quot;5true&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// &quot;5false&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> {} </span><span style="color:#6A737D;">// &quot;5[object Object]&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> [] </span><span style="color:#6A737D;">// &quot;5&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (){} </span><span style="color:#6A737D;">// &quot;5function (){}&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// &quot;5undefined&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// &quot;5null&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// &#39;51&#39;</span></span>
<span class="line"><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// &quot;5true&quot;</span></span>
<span class="line"><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// &quot;5false&quot;</span></span>
<span class="line"><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> {} </span><span style="color:#6A737D;">// &quot;5[object Object]&quot;</span></span>
<span class="line"><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> [] </span><span style="color:#6A737D;">// &quot;5&quot;</span></span>
<span class="line"><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (){} </span><span style="color:#6A737D;">// &quot;5function (){}&quot;</span></span>
<span class="line"><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// &quot;5undefined&quot;</span></span>
<span class="line"><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// &quot;5null&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="自动转换成数值" tabindex="-1">自动转换成数值 <a class="header-anchor" href="#自动转换成数值" aria-label="Permalink to &quot;自动转换成数值&quot;">​</a></h3><p>除了<code>+</code>有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 3</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 10</span></span>
<span class="line"><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// -1</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> []    </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;abc&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// NaN</span></span>
<span class="line"><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// NaN</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 3</span></span>
<span class="line"><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 10</span></span>
<span class="line"><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// -1</span></span>
<span class="line"><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> []    </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#032F62;">&#39;abc&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">   </span><span style="color:#6A737D;">// NaN</span></span>
<span class="line"><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#005CC5;">undefined</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// NaN</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>null</code>转为数值时，值为<code>0</code> 。<code>undefined</code>转为数值时，值为<code>NaN</code></p>`,53),e=[o];function c(r,t,y,i,E,u){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{b as __pageData,F as default};
