import{_ as s,c as a,o as n,V as l}from"./chunks/framework.821f8c05.js";const u=JSON.parse('{"title":"面试官：SPA首屏加载速度慢的怎么解决？","description":"","frontmatter":{},"headers":[],"relativePath":"vue/first_page_time.md"}'),p={name:"vue/first_page_time.md"},e=l(`<h1 id="面试官-spa首屏加载速度慢的怎么解决" tabindex="-1">面试官：SPA首屏加载速度慢的怎么解决？ <a class="header-anchor" href="#面试官-spa首屏加载速度慢的怎么解决" aria-label="Permalink to &quot;面试官：SPA首屏加载速度慢的怎么解决？&quot;">​</a></h1><p><img src="https://static.vue-js.com/24617c00-3acc-11eb-ab90-d9ae814b240d.png" alt="image.png"></p><h2 id="一、什么是首屏加载" tabindex="-1">一、什么是首屏加载 <a class="header-anchor" href="#一、什么是首屏加载" aria-label="Permalink to &quot;一、什么是首屏加载&quot;">​</a></h2><p>首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容</p><p>首屏加载可以说是用户体验中<strong>最重要</strong>的环节</p><h3 id="关于计算首屏时间" tabindex="-1">关于计算首屏时间 <a class="header-anchor" href="#关于计算首屏时间" aria-label="Permalink to &quot;关于计算首屏时间&quot;">​</a></h3><p>利用<code>performance.timing</code>提供的数据：</p><p><img src="https://static.vue-js.com/2e2491a0-3acc-11eb-85f6-6fac77c0c9b3.png" alt="image.png"></p><p>通过<code>DOMContentLoad</code>或者<code>performance</code>来计算出首屏时间</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 方案一：</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">DOMContentLoaded</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">first contentful painting</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 方案二：</span></span>
<span class="line"><span style="color:#A6ACCD;">performance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getEntriesByName</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">first-contentful-paint</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">startTime</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// performance.getEntriesByName(&quot;first-contentful-paint&quot;)[0]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 会返回一个 PerformancePaintTiming的实例，结构如下：</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">first-contentful-paint</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">entryType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">paint</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">startTime</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">507.80000002123415</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">duration</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="二、加载慢的原因" tabindex="-1">二、加载慢的原因 <a class="header-anchor" href="#二、加载慢的原因" aria-label="Permalink to &quot;二、加载慢的原因&quot;">​</a></h2><p>在页面渲染的过程，导致加载速度慢的因素可能如下：</p><ul><li>网络延时问题</li><li>资源文件体积是否过大</li><li>资源是否重复发送请求去加载了</li><li>加载脚本的时候，渲染内容堵塞了</li></ul><h2 id="三、解决方案" tabindex="-1">三、解决方案 <a class="header-anchor" href="#三、解决方案" aria-label="Permalink to &quot;三、解决方案&quot;">​</a></h2><p>常见的几种SPA首屏优化方式</p><ul><li>减小入口文件积</li><li>静态资源本地缓存</li><li>UI框架按需加载</li><li>图片资源的压缩</li><li>组件重复打包</li><li>开启GZip压缩</li><li>使用SSR</li></ul><h3 id="减小入口文件体积" tabindex="-1">减小入口文件体积 <a class="header-anchor" href="#减小入口文件体积" aria-label="Permalink to &quot;减小入口文件体积&quot;">​</a></h3><p>常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加</p><p><img src="https://static.vue-js.com/486cee90-3acc-11eb-ab90-d9ae814b240d.png" alt="image.png"></p><p>在<code>vue-router</code>配置路由的时候，采用动态加载路由的形式</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[ </span></span>
<span class="line"><span style="color:#A6ACCD;">    path: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Blogs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ShowBlogs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    component: </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./components/ShowBlogs.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>以函数的形式加载路由，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件</p><h3 id="静态资源本地缓存" tabindex="-1">静态资源本地缓存 <a class="header-anchor" href="#静态资源本地缓存" aria-label="Permalink to &quot;静态资源本地缓存&quot;">​</a></h3><p>后端返回资源问题：</p><ul><li><p>采用<code>HTTP</code>缓存，设置<code>Cache-Control</code>，<code>Last-Modified</code>，<code>Etag</code>等响应头</p></li><li><p>采用<code>Service Worker</code>离线缓存</p></li></ul><p>前端合理利用<code>localStorage</code></p><h3 id="ui框架按需加载" tabindex="-1">UI框架按需加载 <a class="header-anchor" href="#ui框架按需加载" aria-label="Permalink to &quot;UI框架按需加载&quot;">​</a></h3><p>在日常使用<code>UI</code>框架，例如<code>element-UI</code>、或者<code>antd</code>，我们经常性直接引用整个<code>UI</code>库</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> ElementUI </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">element-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(ElementUI)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>但实际上我用到的组件只有按钮，分页，表格，输入与警告 所以我们要按需引用</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Button</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Input</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Pagination</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Table</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TableColumn</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MessageBox</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">element-ui</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(Button)</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(Input)</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(Pagination)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="组件重复打包" tabindex="-1">组件重复打包 <a class="header-anchor" href="#组件重复打包" aria-label="Permalink to &quot;组件重复打包&quot;">​</a></h3><p>假设<code>A.js</code>文件是一个常用的库，现在有多个路由使用了<code>A.js</code>文件，这就造成了重复下载</p><p>解决方案：在<code>webpack</code>的<code>config</code>文件中，修改<code>CommonsChunkPlugin</code>的配置</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">minChunks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>minChunks</code>为3表示会把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件</p><h3 id="图片资源的压缩" tabindex="-1">图片资源的压缩 <a class="header-anchor" href="#图片资源的压缩" aria-label="Permalink to &quot;图片资源的压缩&quot;">​</a></h3><p>图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素</p><p>对于所有的图片资源，我们可以进行适当的压缩</p><p>对页面上使用到的<code>icon</code>，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻<code>http</code>请求压力。</p><h3 id="开启gzip压缩" tabindex="-1">开启GZip压缩 <a class="header-anchor" href="#开启gzip压缩" aria-label="Permalink to &quot;开启GZip压缩&quot;">​</a></h3><p>拆完包之后，我们再用<code>gzip</code>做一下压缩 安装<code>compression-webpack-plugin</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cnmp i compression</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">webpack</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">plugin </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在<code>vue.congig.js</code>中引入并修改<code>webpack</code>配置</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> CompressionPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">compression-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">configureWebpack</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 为生产环境修改配置...</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                plugins</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CompressionPlugin</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">js</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">html</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//匹配文件名</span></span>
<span class="line"><span style="color:#F07178;">                    threshold</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10240</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//对超过10k的数据进行压缩</span></span>
<span class="line"><span style="color:#F07178;">                    deleteOriginalAssets</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//是否删除原文件</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)]</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在服务器我们也要做相应的配置 如果发送请求的浏览器支持<code>gzip</code>，就发送给它<code>gzip</code>格式的文件 我的服务器是用<code>express</code>框架搭建的 只要安装一下<code>compression</code>就能使用</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const compression = require(&#39;compression&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(compression())  // 在其他中间件使用之前调用</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="使用ssr" tabindex="-1">使用SSR <a class="header-anchor" href="#使用ssr" aria-label="Permalink to &quot;使用SSR&quot;">​</a></h3><p>SSR（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器</p><p>从头搭建一个服务端渲染是很复杂的，<code>vue</code>应用建议使用<code>Nuxt.js</code>实现服务端渲染</p><h3 id="小结" tabindex="-1">小结： <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结：&quot;">​</a></h3><p>减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：资源加载优化 和 页面渲染优化</p><p>下图是更为全面的首屏优化的方案</p><p><img src="https://static.vue-js.com/4fafe900-3acc-11eb-85f6-6fac77c0c9b3.png" alt="image.png"></p><p>大家可以根据自己项目的情况选择各种方式进行首屏渲染的优化</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/88639980?utm_source=wechat_session" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/88639980?utm_source=wechat_session</a></li><li><a href="https://www.chengrang.com/how-browsers-work.html" target="_blank" rel="noreferrer">https://www.chengrang.com/how-browsers-work.html</a></li><li><a href="https://juejin.cn/post/6844904185264095246" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904185264095246</a></li><li><a href="https://vue3js.cn/docs/zh" target="_blank" rel="noreferrer">https://vue3js.cn/docs/zh</a></li></ul>`,57),o=[e];function t(c,r,i,y,D,F){return n(),a("div",null,o)}const C=s(p,[["render",t]]);export{u as __pageData,C as default};
