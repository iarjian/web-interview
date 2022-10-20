import{_ as s,c as a,o as n,a as l}from"./app.e287249f.js";const D=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u96C6\u5408\u7684\u7406\u89E3\uFF1F\u5E38\u89C1\u7684\u64CD\u4F5C\u6709\u54EA\u4E9B\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u64CD\u4F5C","slug":"\u4E8C\u3001\u64CD\u4F5C","link":"#\u4E8C\u3001\u64CD\u4F5C","children":[{"level":3,"title":"add()","slug":"add","link":"#add","children":[]},{"level":3,"title":"delete()","slug":"delete","link":"#delete","children":[]},{"level":3,"title":"has()","slug":"has","link":"#has","children":[]},{"level":3,"title":"clear()","slug":"clear","link":"#clear","children":[]},{"level":3,"title":"\u5E76\u96C6","slug":"\u5E76\u96C6","link":"#\u5E76\u96C6","children":[]},{"level":3,"title":"\u4EA4\u96C6","slug":"\u4EA4\u96C6","link":"#\u4EA4\u96C6","children":[]},{"level":3,"title":"\u5DEE\u96C6","slug":"\u5DEE\u96C6","link":"#\u5DEE\u96C6","children":[]}]},{"level":2,"title":"\u4E09\u3001\u5E94\u7528\u573A\u666F","slug":"\u4E09\u3001\u5E94\u7528\u573A\u666F","link":"#\u4E09\u3001\u5E94\u7528\u573A\u666F","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"algorithm/set.md"}'),e={name:"algorithm/set.md"},p=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u96C6\u5408\u7684\u7406\u89E3\uFF1F\u5E38\u89C1\u7684\u64CD\u4F5C\u6709\u54EA\u4E9B\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u96C6\u5408\u7684\u7406\u89E3\uFF1F\u5E38\u89C1\u7684\u64CD\u4F5C\u6709\u54EA\u4E9B\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u96C6\u5408\u7684\u7406\u89E3\uFF1F\u5E38\u89C1\u7684\u64CD\u4F5C\u6709\u54EA\u4E9B\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/e3de7810-1d36-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u96C6\u5408\uFF08Set\uFF09\uFF0C\u6307\u5177\u6709\u67D0\u79CD\u7279\u5B9A\u6027\u8D28\u7684\u4E8B\u7269\u7684\u603B\u4F53\uFF0C\u91CC\u9762\u7684\u6BCF\u4E00\u9879\u5185\u5BB9\u79F0\u4F5C\u5143\u7D20</p><p>\u5728\u6570\u5B66\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u4F1A\u9047\u5230\u96C6\u5408\u7684\u6982\u5FF5\uFF1A</p><ul><li>\u6709\u9650\u96C6\u5408\uFF1A\u4F8B\u5982\u4E00\u4E2A\u73ED\u96C6\u6240\u6709\u7684\u540C\u5B66\u6784\u6210\u7684\u96C6\u5408</li><li>\u65E0\u9650\u96C6\u5408\uFF1A\u4F8B\u5982\u5168\u4F53\u81EA\u7136\u6570\u96C6\u5408</li></ul><p>\u5728\u8BA1\u7B97\u673A\u4E2D\u96C6\u5408\u9053\u7406\u4E5F\u57FA\u672C\u4E00\u81F4\uFF0C\u5177\u6709\u4E09\u5927\u7279\u6027\uFF1A</p><ul><li>\u786E\u5B9A\u6027\uFF1A\u4E8E\u4E00\u4E2A\u7ED9\u5B9A\u7684\u96C6\u5408\uFF0C\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u662F\u786E\u5B9A\u7684\u3002\u5373\u4E00\u4E2A\u5143\u7D20\uFF0C\u6216\u8005\u5C5E\u4E8E\u8BE5\u96C6\u5408\uFF0C\u6216\u8005\u4E0D\u5C5E\u4E8E\u8BE5\u96C6\u5408\uFF0C\u4E24\u8005\u5FC5\u5C45\u5176\u4E00</li><li>\u65E0\u5E8F\u6027\uFF1A\u5728\u4E00\u4E2A\u96C6\u5408\u4E2D\uFF0C\u4E0D\u8003\u8651\u5143\u7D20\u4E4B\u95F4\u7684\u987A\u5E8F\uFF0C\u53EA\u8981\u5143\u7D20\u5B8C\u5168\u76F8\u540C\uFF0C\u5C31\u8BA4\u4E3A\u662F\u540C\u4E00\u4E2A\u96C6\u5408</li><li>\u4E92\u5F02\u6027\uFF1A\u96C6\u5408\u4E2D\u4EFB\u610F\u4E24\u4E2A\u5143\u7D20\u90FD\u662F\u4E0D\u540C\u7684</li></ul><h2 id="\u4E8C\u3001\u64CD\u4F5C" tabindex="-1">\u4E8C\u3001\u64CD\u4F5C <a class="header-anchor" href="#\u4E8C\u3001\u64CD\u4F5C" aria-hidden="true">#</a></h2><p>\u5728<code>ES6</code>\u4E2D\uFF0C\u96C6\u5408\u672C\u8EAB\u662F\u4E00\u4E2A\u6784\u5EFA\u51FD\u6570<code>Set</code>\uFF0C\u7528\u6765\u751F\u6210 <code>Set</code> \u6570\u636E\u7ED3\u6784\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5173\u4E8E\u96C6\u5408\u5E38\u89C1\u7684\u65B9\u6CD5\u6709\uFF1A</p><ul><li>add()\uFF1A\u589E</li><li>delete()\uFF1A\u5220</li><li>has()\uFF1A\u6539</li><li>clear()\uFF1A\u67E5</li></ul><h3 id="add" tabindex="-1">add() <a class="header-anchor" href="#add" aria-hidden="true">#</a></h3><p>\u6DFB\u52A0\u67D0\u4E2A\u503C\uFF0C\u8FD4\u56DE <code>Set</code> \u7ED3\u6784\u672C\u8EAB</p><p>\u5F53\u6DFB\u52A0\u5B9E\u4F8B\u4E2D\u5DF2\u7ECF\u5B58\u5728\u7684\u5143\u7D20\uFF0C<code>set</code>\u4E0D\u4F1A\u8FDB\u884C\u5904\u7406\u6DFB\u52A0</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 2\u53EA\u88AB\u6DFB\u52A0\u4E86\u4E00\u6B21</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F53\u73B0\u4E86\u96C6\u5408\u7684\u4E92\u5F02\u6027\u7279\u6027</p><h3 id="delete" tabindex="-1">delete() <a class="header-anchor" href="#delete" aria-hidden="true">#</a></h3><p>\u5220\u9664\u67D0\u4E2A\u503C\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5220\u9664\u662F\u5426\u6210\u529F</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="has" tabindex="-1">has() <a class="header-anchor" href="#has" aria-hidden="true">#</a></h3><p>\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u5224\u65AD\u8BE5\u503C\u662F\u5426\u4E3A<code>Set</code>\u7684\u6210\u5458</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="clear" tabindex="-1">clear() <a class="header-anchor" href="#clear" aria-hidden="true">#</a></h3><p>\u6E05\u9664\u6240\u6709\u6210\u5458\uFF0C\u6CA1\u6709\u8FD4\u56DE\u503C</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5173\u4E8E\u591A\u4E2A\u96C6\u5408\u5E38\u89C1\u7684\u64CD\u4F5C\u6709\uFF1A</p><ul><li>\u5E76\u96C6</li><li>\u4EA4\u96C6</li><li>\u5DEE\u96C6</li></ul><h3 id="\u5E76\u96C6" tabindex="-1">\u5E76\u96C6 <a class="header-anchor" href="#\u5E76\u96C6" aria-hidden="true">#</a></h3><p>\u4E24\u4E2A\u96C6\u5408\u7684\u5171\u540C\u5143\u7D20\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/ed96df50-1d36-11ec-a752-75723a64e8f5.png" alt=""></p><p>\u4EE3\u7801\u5B9E\u73B0\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5E76\u96C6</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> union </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">b])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// Set {1, 2, 3, 4}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u4EA4\u96C6" tabindex="-1">\u4EA4\u96C6 <a class="header-anchor" href="#\u4EA4\u96C6" aria-hidden="true">#</a></h3><p>\u4E24\u4E2A\u96C6\u5408<code>A</code> \u548C <code>B</code>\uFF0C\u5373\u5C5E\u4E8E<code>A</code>\u53C8\u5C5E\u4E8E<code>B</code>\u7684\u5143\u7D20\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/f8a9cd80-1d36-11ec-a752-75723a64e8f5.png" alt=""></p><p>\u7528\u4EE3\u7801\u6807\u8BC6\u5219\u5982\u4E0B\uFF1A</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4EA4\u96C6</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> intersect </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">a]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(x)))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// set {2, 3}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u5DEE\u96C6" tabindex="-1">\u5DEE\u96C6 <a class="header-anchor" href="#\u5DEE\u96C6" aria-hidden="true">#</a></h3><p>\u4E24\u4E2A\u96C6\u5408<code>A</code> \u548C <code>B</code>\uFF0C\u5C5E\u4E8E<code>A</code>\u7684\u5143\u7D20\u4F46\u4E0D\u5C5E\u4E8E<code>B</code>\u7684\u5143\u7D20\u79F0\u4E3A<code>A</code>\u76F8\u5BF9\u4E8E<code>B</code>\u7684\u5DEE\u96C6\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/0191c560-1d37-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>\u4EE3\u7801\u6807\u8BC6\u5219\u5982\u4E0B\uFF1A</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \uFF08a \u76F8\u5BF9\u4E8E b \u7684\uFF09\u5DEE\u96C6</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> difference </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">a]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(x)))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// Set {1}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1">\u4E09\u3001\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u6570\u7EC4\u7684\u6982\u7387\u4F1A\u6BD4\u96C6\u5408\u6982\u7387\u9AD8\u5F88\u591A</p><p>\u4F7F\u7528<code>set</code>\u96C6\u5408\u7684\u573A\u666F\u4E00\u822C\u662F\u501F\u52A9\u5176\u786E\u5B9A\u6027\uFF0C\u5176\u672C\u8EAB\u53EA\u5305\u542B\u4E0D\u540C\u7684\u5143\u7D20</p><p>\u6240\u4EE5\uFF0C\u53EF\u4EE5\u5229\u7528<code>Set</code>\u7684\u4E00\u4E9B\u539F\u751F\u65B9\u6CD5\u8F7B\u677E\u7684\u5B8C\u6210\u6570\u7EC4\u53BB\u91CD\uFF0C\u67E5\u627E\u6570\u7EC4\u516C\u5171\u5143\u7D20\u53CA\u4E0D\u540C\u5143\u7D20\u7B49\u64CD\u4F5C</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://zh.wikipedia.org/wiki/%E5%B9%B6%E9%9B%86" target="_blank" rel="noreferrer">https://zh.wikipedia.org/wiki/\u5E76\u96C6</a></li><li><a href="https://zh.wikipedia.org/wiki/%E8%A1%A5%E9%9B%86" target="_blank" rel="noreferrer">https://zh.wikipedia.org/wiki/\u8865\u96C6</a></li></ul>`,50),o=[p];function c(r,t,i,C,A,y){return n(),a("div",null,o)}const F=s(e,[["render",c]]);export{D as __pageData,F as default};