import{_ as s,c as a,o as e,V as o}from"./chunks/framework.821f8c05.js";const h=JSON.parse('{"title":"面试官：如果要做优化，CSS提高性能的方法有哪些？","description":"","frontmatter":{},"headers":[],"relativePath":"css/css_performance.md"}'),l={name:"css/css_performance.md"},n=o(`<h1 id="面试官-如果要做优化-css提高性能的方法有哪些" tabindex="-1">面试官：如果要做优化，CSS提高性能的方法有哪些？ <a class="header-anchor" href="#面试官-如果要做优化-css提高性能的方法有哪些" aria-label="Permalink to &quot;面试官：如果要做优化，CSS提高性能的方法有哪些？&quot;">​</a></h1><p><img src="https://static.vue-js.com/c071c820-9fa3-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、前言" tabindex="-1">一、前言 <a class="header-anchor" href="#一、前言" aria-label="Permalink to &quot;一、前言&quot;">​</a></h2><p>每一个网页都离不开<code>css</code>，但是很多人又认为，<code>css</code>主要是用来完成页面布局的，像一些细节或者优化，就不需要怎么考虑，实际上这种想法是不正确的</p><p>作为页面渲染和内容展现的重要环节，<code>css</code>影响着用户对整个网站的第一体验</p><p>因此，在整个产品研发过程中，<code>css</code>性能优化同样需要贯穿全程</p><h2 id="二、实现方式" tabindex="-1">二、实现方式 <a class="header-anchor" href="#二、实现方式" aria-label="Permalink to &quot;二、实现方式&quot;">​</a></h2><p>实现方式有很多种，主要有如下：</p><ul><li>内联首屏关键CSS</li><li>异步加载CSS</li><li>资源压缩</li><li>合理使用选择器</li><li>减少使用昂贵的属性</li><li>不要使用@import</li></ul><h3 id="内联首屏关键css" tabindex="-1">内联首屏关键CSS <a class="header-anchor" href="#内联首屏关键css" aria-label="Permalink to &quot;内联首屏关键CSS&quot;">​</a></h3><p>在打开一个页面，页面首要内容出现在屏幕的时间影响着用户的体验，而通过内联<code>css</code>关键代码能够使浏览器在下载完<code>html</code>后就能立刻渲染</p><p>而如果外部引用<code>css</code>代码，在解析<code>html</code>结构过程中遇到外部<code>css</code>文件，才会开始下载<code>css</code>代码，再渲染</p><p>所以，<code>CSS</code>内联使用使渲染时间提前</p><p>注意：但是较大的<code>css</code>代码并不合适内联（初始拥塞窗口、没有缓存），而其余代码则采取外部引用方式</p><h3 id="异步加载css" tabindex="-1">异步加载CSS <a class="header-anchor" href="#异步加载css" aria-label="Permalink to &quot;异步加载CSS&quot;">​</a></h3><p>在<code>CSS</code>文件请求、下载、解析完成之前，<code>CSS</code>会阻塞渲染，浏览器将不会渲染任何已处理的内容</p><p>前面加载内联代码后，后面的外部引用<code>css</code>则没必要阻塞浏览器渲染。这时候就可以采取异步加载的方案，主要有如下：</p><ul><li>使用javascript将link标签插到head标签最后</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 创建link标签</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myCSS </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">link</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">myCSS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rel </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">myCSS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mystyles.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 插入到header的最后位置</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insertBefore</span><span style="color:#A6ACCD;">( myCSS</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">childNodes[ document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">childNodes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nextSibling )</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>设置link标签media属性为noexis，浏览器会认为当前样式表不适用当前类型，会在不阻塞页面渲染的情况下再进行下载。加载完成后，将<code>media</code>的值设为<code>screen</code>或<code>all</code>，从而让浏览器开始解析CSS</li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mystyles.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">media</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">noexist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onload</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;this.</span><span style="color:#A6ACCD;">media</span><span style="color:#89DDFF;">=&#39;</span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>通过rel属性将link元素标记为alternate可选样式表，也能实现浏览器异步加载。同样别忘了加载完成之后，将rel设回stylesheet</li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alternate stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mystyles.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onload</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;this.</span><span style="color:#A6ACCD;">rel</span><span style="color:#89DDFF;">=&#39;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="资源压缩" tabindex="-1">资源压缩 <a class="header-anchor" href="#资源压缩" aria-label="Permalink to &quot;资源压缩&quot;">​</a></h3><p>利用<code>webpack</code>、<code>gulp/grunt</code>、<code>rollup</code>等模块化工具，将<code>css</code>代码进行压缩，使文件变小，大大降低了浏览器的加载时间</p><h3 id="合理使用选择器" tabindex="-1">合理使用选择器 <a class="header-anchor" href="#合理使用选择器" aria-label="Permalink to &quot;合理使用选择器&quot;">​</a></h3><p><code>css</code>匹配的规则是从右往左开始匹配，例如<code>#markdown .content h3</code>匹配规则如下：</p><ul><li>先找到h3标签元素</li><li>然后去除祖先不是.content的元素</li><li>最后去除祖先不是#markdown的元素</li></ul><p>如果嵌套的层级更多，页面中的元素更多，那么匹配所要花费的时间代价自然更高</p><p>所以我们在编写选择器的时候，可以遵循以下规则：</p><ul><li>不要嵌套使用过多复杂选择器，最好不要三层以上</li><li>使用id选择器就没必要再进行嵌套</li><li>通配符和属性选择器效率最低，避免使用</li></ul><h3 id="减少使用昂贵的属性" tabindex="-1">减少使用昂贵的属性 <a class="header-anchor" href="#减少使用昂贵的属性" aria-label="Permalink to &quot;减少使用昂贵的属性&quot;">​</a></h3><p>在页面发生重绘的时候，昂贵属性如<code>box-shadow</code>/<code>border-radius</code>/<code>filter</code>/透明度/<code>:nth-child</code>等，会降低浏览器的渲染性能</p><h3 id="不要使用-import" tabindex="-1">不要使用@import <a class="header-anchor" href="#不要使用-import" aria-label="Permalink to &quot;不要使用@import&quot;">​</a></h3><p>css样式文件有两种引入方式，一种是<code>link</code>元素，另一种是<code>@import</code></p><p><code>@import</code>会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时</p><p>而且多个<code>@import</code>可能会导致下载顺序紊乱</p><p>比如一个css文件<code>index.css</code>包含了以下内容：<code>@import url(&quot;reset.css&quot;)</code></p><p>那么浏览器就必须先把<code>index.css</code>下载、解析和执行后，才下载、解析和执行第二个文件<code>reset.css</code></p><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><ul><li>减少重排操作，以及减少不必要的重绘</li><li>了解哪些属性可以继承而来，避免对这些属性重复编写</li><li>cssSprite，合成所有icon图片，用宽高加上backgroud-position的背景图方式显现出我们要的icon图，减少了http请求</li><li>把小的icon图片转成base64编码</li><li>CSS3动画或者过渡尽量使用transform和opacity来实现动画，不要使用left和top属性</li></ul><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><p><code>css</code>实现性能的方式可以从选择器嵌套、属性特性、减少<code>http</code>这三面考虑，同时还要注意<code>css</code>代码的加载顺序</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://www.zhihu.com/question/19886806" target="_blank" rel="noreferrer">https://www.zhihu.com/question/19886806</a></li><li><a href="https://juejin.cn/post/6844903649605320711#heading-1" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903649605320711#heading-1</a></li><li><a href="https://vue3js.cn/interview/" target="_blank" rel="noreferrer">https://vue3js.cn/interview/</a></li></ul>`,45),p=[n];function t(c,r,i,d,D,y){return e(),a("div",null,p)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
