import{_ as s,c as a,o,V as n}from"./chunks/framework.821f8c05.js";const h=JSON.parse('{"title":"面试官：说说你对BOM的理解，常见的BOM对象你了解哪些？","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/BOM.md"}'),e={name:"JavaScript/BOM.md"},l=n(`<h1 id="面试官-说说你对bom的理解-常见的bom对象你了解哪些" tabindex="-1">面试官：说说你对BOM的理解，常见的BOM对象你了解哪些？ <a class="header-anchor" href="#面试官-说说你对bom的理解-常见的bom对象你了解哪些" aria-label="Permalink to &quot;面试官：说说你对BOM的理解，常见的BOM对象你了解哪些？&quot;">​</a></h1><p><img src="https://static.vue-js.com/3e191c40-8089-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p><code>BOM</code> (Browser Object Model)，浏览器对象模型，提供了独立于内容与浏览器窗口进行交互的对象</p><p>其作用就是跟浏览器做一些交互效果,比如如何进行页面的后退，前进，刷新，浏览器的窗口发生变化，滚动条的滚动，以及获取客户的一些信息如：浏览器品牌版本，屏幕分辨率</p><p>浏览器的全部内容可以看成<code>DOM</code>，整个浏览器可以看成<code>BOM</code>。区别如下：</p><p><img src="https://static.vue-js.com/482f33e0-8089-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="二、window" tabindex="-1">二、window <a class="header-anchor" href="#二、window" aria-label="Permalink to &quot;二、window&quot;">​</a></h2><p><code>Bom</code>的核心对象是<code>window</code>，它表示浏览器的一个实例</p><p>在浏览器中，<code>window</code>对象有双重角色，即是浏览器窗口的一个接口，又是全局对象</p><p>因此所有在全局作用域中声明的变量、函数都会变成<code>window</code>对象的属性和方法</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">js每日一题</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">lookName</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//js每日一题</span></span>
<span class="line"><span style="color:#82AAFF;">lookName</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;">//js每日一题</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lookName</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;">//js每日一题</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>关于窗口控制方法如下：</p><ul><li><code>moveBy(x,y)</code>：从当前位置水平移动窗体x个像素，垂直移动窗体y个像素，x为负数，将向左移动窗体，y为负数，将向上移动窗体</li><li><code>moveTo(x,y)</code>：移动窗体左上角到相对于屏幕左上角的(x,y)点</li><li><code>resizeBy(w,h)</code>：相对窗体当前的大小，宽度调整w个像素，高度调整h个像素。如果参数为负值，将缩小窗体，反之扩大窗体</li><li><code>resizeTo(w,h)</code>：把窗体宽度调整为w个像素，高度调整为h个像素</li><li><code>scrollTo(x,y)</code>：如果有滚动条，将横向滚动条移动到相对于窗体宽度为x个像素的位置，将纵向滚动条移动到相对于窗体高度为y个像素的位置</li><li><code>scrollBy(x,y)</code>： 如果有滚动条，将横向滚动条向左移动x个像素，将纵向滚动条向下移动y个像素</li></ul><p><code>window.open()</code> 既可以导航到一个特定的<code>url</code>，也可以打开一个新的浏览器窗口</p><p>如果 <code>window.open()</code> 传递了第二个参数，且该参数是已有窗口或者框架的名称，那么就会在目标窗口加载第一个参数指定的URL</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">htttp://www.vue3js.cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">topFrame</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">==&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt; </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">target</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">topFrame</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/ </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>window.open()</code> 会返回新窗口的引用，也就是新窗口的 <code>window</code> 对象</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myWin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://www.vue3js.cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myWin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>window.close()</code> 仅用于通过 <code>window.open()</code> 打开的窗口</p><p>新创建的 <code>window</code> 对象有一个 <code>opener</code> 属性，该属性指向打开他的原始窗口对象</p><h2 id="三、location" tabindex="-1">三、location <a class="header-anchor" href="#三、location" aria-label="Permalink to &quot;三、location&quot;">​</a></h2><p><code>url</code>地址如下：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>location</code>属性描述如下：</p><table><thead><tr><th>属性名</th><th>例子</th><th>说明</th></tr></thead><tbody><tr><td>hash</td><td>&quot;#contents&quot;</td><td>utl中#后面的字符，没有则返回空串</td></tr><tr><td>host</td><td>www.wrox.com:80</td><td>服务器名称和端口号</td></tr><tr><td>hostname</td><td>www.wrox.com</td><td>域名，不带端口号</td></tr><tr><td>href</td><td><a href="http://www.wrox.com:80/WileyCDA/?q=javascript#contents" target="_blank" rel="noreferrer">http://www.wrox.com:80/WileyCDA/?q=javascript#contents</a></td><td>完整url</td></tr><tr><td>pathname</td><td>&quot;/WileyCDA/&quot;</td><td>服务器下面的文件路径</td></tr><tr><td>port</td><td>80</td><td>url的端口号，没有则为空</td></tr><tr><td>protocol</td><td>http:</td><td>使用的协议</td></tr><tr><td>search</td><td>?q=javascript</td><td>url的查询字符串，通常为？后面的内容</td></tr></tbody></table><p>除了 <code>hash </code>之外，只要修改<code>location</code>的一个属性，就会导致页面重新加载新<code> URL</code></p><p><code>location.reload()</code>，此方法可以重新刷新当前页面。这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载</p><p>如果要强制从服务器中重新加载，传递一个参数<code>true</code>即可</p><h2 id="四、navigator" tabindex="-1">四、navigator <a class="header-anchor" href="#四、navigator" aria-label="Permalink to &quot;四、navigator&quot;">​</a></h2><p><code>navigator</code> 对象主要用来获取浏览器的属性，区分浏览器类型。属性较多，且兼容性比较复杂</p><p>下表列出了<code>navigator</code>对象接口定义的属性和方法：</p><p><img src="https://static.vue-js.com/6797ab40-8089-11eb-ab90-d9ae814b240d.png" alt=""></p><p><img src="https://static.vue-js.com/74096620-8089-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="五、screen" tabindex="-1">五、screen <a class="header-anchor" href="#五、screen" aria-label="Permalink to &quot;五、screen&quot;">​</a></h2><p>保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息，比如像素宽度和像素高度</p><p><img src="https://static.vue-js.com/7d6b21e0-8089-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="六、history" tabindex="-1">六、history <a class="header-anchor" href="#六、history" aria-label="Permalink to &quot;六、history&quot;">​</a></h2><p><code>history</code>对象主要用来操作浏览器<code>URL</code>的历史记录，可以通过参数向前，向后，或者向指定<code>URL</code>跳转</p><p>常用的属性如下：</p><ul><li><code>history.go()</code></li></ul><p>接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转，</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maixaofei.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当参数为整数数字的时候，正数表示向前跳转指定的页面，负数为向后跳转指定的页面</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//向前跳转三个记录</span></span>
<span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//向后跳转一个记录</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><code>history.forward()</code>：向前跳转一个页面</li><li><code>history.back()</code>：向后跳转一个页面</li><li><code>history.length</code>：获取历史记录数</li></ul>`,46),p=[l];function t(c,r,i,d,y,D){return o(),a("div",null,p)}const u=s(e,[["render",t]]);export{h as __pageData,u as default};
