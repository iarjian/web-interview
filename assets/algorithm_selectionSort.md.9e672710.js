import{_ as s,c as n,o as a,a as l}from"./app.f93e5564.js";const C=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u9009\u62E9\u6392\u5E8F\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F\u5E94\u7528\u573A\u666F\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0","slug":"\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0","link":"#\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0","children":[]},{"level":2,"title":"\u4E09\u3001\u5E94\u7528\u573A\u666F","slug":"\u4E09\u3001\u5E94\u7528\u573A\u666F","link":"#\u4E09\u3001\u5E94\u7528\u573A\u666F","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"algorithm/selectionSort.md"}'),p={name:"algorithm/selectionSort.md"},o=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u9009\u62E9\u6392\u5E8F\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F\u5E94\u7528\u573A\u666F\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u9009\u62E9\u6392\u5E8F\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F\u5E94\u7528\u573A\u666F\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u9009\u62E9\u6392\u5E8F\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F\u5E94\u7528\u573A\u666F\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/50a05ed0-2671-11ec-a752-75723a64e8f5.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u9009\u62E9\u6392\u5E8F\uFF08Selection sort\uFF09\u662F\u4E00\u79CD\u7B80\u5355\u76F4\u89C2\u7684\u6392\u5E8F\u7B97\u6CD5\uFF0C\u65E0\u8BBA\u4EC0\u4E48\u6570\u636E\u8FDB\u53BB\u90FD\u662F <code>O(n\xB2) </code>\u7684\u65F6\u95F4\u590D\u6742\u5EA6\uFF0C\u6240\u4EE5\u7528\u5230\u5B83\u7684\u65F6\u5019\uFF0C\u6570\u636E\u89C4\u6A21\u8D8A\u5C0F\u8D8A\u597D</p><p>\u5176\u57FA\u672C\u601D\u60F3\u662F\uFF1A\u9996\u5148\u5728\u672A\u6392\u5E8F\u7684\u6570\u5217\u4E2D\u627E\u5230\u6700\u5C0F(or\u6700\u5927)\u5143\u7D20\uFF0C\u7136\u540E\u5C06\u5176\u5B58\u653E\u5230\u6570\u5217\u7684\u8D77\u59CB\u4F4D\u7F6E</p><p>\u7136\u540E\u518D\u4ECE\u5269\u4F59\u672A\u6392\u5E8F\u7684\u5143\u7D20\u4E2D\u7EE7\u7EED\u5BFB\u627E\u6700\u5C0F(or\u6700\u5927)\u5143\u7D20\uFF0C\u7136\u540E\u653E\u5230\u5DF2\u6392\u5E8F\u5E8F\u5217\u7684\u672B\u5C3E</p><p>\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u76F4\u5230\u6240\u6709\u5143\u7D20\u5747\u6392\u5E8F\u5B8C\u6BD5</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u4E00\u4E2A\u6570\u7EC4\u4E3A 56\u300112\u300180\u300191\u300129\uFF0C\u5176\u6392\u5E8F\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><ul><li>\u7B2C\u4E00\u6B21\u904D\u5386\u65F6\uFF0C\u4ECE\u4E0B\u6807\u4E3A 1 \u7684\u4F4D\u7F6E\u5373 56 \u5F00\u59CB\uFF0C\u627E\u51FA\u5173\u952E\u5B57\u503C\u6700\u5C0F\u7684\u8BB0\u5F55 12\uFF0C\u540C\u4E0B\u6807\u4E3A 0 \u7684\u5173\u952E\u5B57 56 \u4EA4\u6362\u4F4D\u7F6E\u3002\u6B64\u65F6\u6570\u7EC4\u4E3A 12\u300156\u300180\u300191\u300120</li></ul><p><img src="https://static.vue-js.com/60bd2050-2671-11ec-a752-75723a64e8f5.png" alt=""></p><ul><li>\u7B2C\u4E8C\u6B21\u904D\u5386\u65F6\uFF0C\u4ECE\u4E0B\u6807\u4E3A 2 \u7684\u4F4D\u7F6E\u5373 56 \u5F00\u59CB\uFF0C\u627E\u51FA\u6700\u5C0F\u503C 20\uFF0C\u540C\u4E0B\u6807\u4E3A 2 \u7684\u5173\u952E\u5B57 56 \u4E92\u6362\u4F4D\u7F6E\uFF0C\u6B64\u65F6\u6570\u7EC4\u4E3A12\u300120\u300180\u300191\u300156</li></ul><p><img src="https://static.vue-js.com/6b04cf40-2671-11ec-8e64-91fdec0f05a1.png" alt=""></p><ul><li>\u7B2C\u4E09\u6B21\u904D\u5386\u65F6\uFF0C\u4ECE\u4E0B\u6807\u4E3A 3 \u7684\u4F4D\u7F6E\u5373 80 \u5F00\u59CB\uFF0C\u627E\u51FA\u6700\u5C0F\u503C 56\uFF0C\u540C\u4E0B\u6807\u4E3A 3 \u7684\u5173\u952E\u5B57 80 \u4E92\u6362\u4F4D\u7F6E\uFF0C\u6B64\u65F6\u6570\u7EC4\u4E3A 12\u300120\u300156\u300191\u300180</li></ul><p><img src="https://static.vue-js.com/757f4e00-2671-11ec-a752-75723a64e8f5.png" alt=""></p><ul><li>\u7B2C\u56DB\u6B21\u904D\u5386\u65F6\uFF0C\u4ECE\u4E0B\u6807\u4E3A 4 \u7684\u4F4D\u7F6E\u5373 91 \u5F00\u59CB\uFF0C\u627E\u51FA\u6700\u5C0F\u662F 80\uFF0C\u540C\u4E0B\u6807\u4E3A 4 \u7684\u5173\u952E\u5B57 91 \u4E92\u6362\u4F4D\u7F6E\uFF0C\u6B64\u65F6\u6392\u5E8F\u5B8C\u6210\uFF0C\u53D8\u6210\u6709\u5E8F\u6570\u7EC4</li></ul><p><img src="https://static.vue-js.com/757f4e00-2671-11ec-a752-75723a64e8f5.png" alt=""></p><h2 id="\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0" tabindex="-1">\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0 <a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C\u5BF9\u4E8E\u5177\u6709 <code>n</code> \u4E2A\u8BB0\u5F55\u7684\u65E0\u5E8F\u8868\u904D\u5386 <code>n-1</code> \u6B21\uFF0C\u7B2C<code> i</code> \u6B21\u4ECE\u65E0\u5E8F\u8868\u4E2D\u7B2C <code>i</code> \u4E2A\u8BB0\u5F55\u5F00\u59CB\uFF0C\u627E\u51FA\u540E\u5E8F\u5173\u952E\u5B57\u4E2D\u6700\u5C0F\u7684\u8BB0\u5F55\uFF0C\u7136\u540E\u653E\u7F6E\u5728\u7B2C <code>i</code> \u7684\u4F4D\u7F6E\u4E0A</p><p>\u76F4\u81F3\u5230\u4ECE\u7B2C<code>n</code>\u4E2A\u548C\u7B2C<code>n-1</code>\u4E2A\u5143\u7D20\u4E2D\u9009\u51FA\u6700\u5C0F\u7684\u653E\u5728\u7B2C<code>n-1</code>\u4E2A\u4F4D\u7F6E</p><p>\u5982\u4E0B\u52A8\u753B\u6240\u793A\uFF1A</p><p><img src="https://www.runoob.com/wp-content/uploads/2019/03/selectionSort.gif" alt=""></p><p>\u7528\u4EE3\u7801\u8868\u793A\u5219\u5982\u4E0B\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">selectionSort</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">minIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">minIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">minIndex</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">     </span><span style="color:#676E95;">// \u5BFB\u627E\u6700\u5C0F\u7684\u6570</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">minIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">                 </span><span style="color:#676E95;">// \u5C06\u6700\u5C0F\u6570\u7684\u7D22\u5F15\u4FDD\u5B58</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">minIndex</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">minIndex</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u7B2C\u4E00\u6B21\u5185\u5FAA\u73AF\u6BD4\u8F83<code>N - 1</code>\u6B21\uFF0C\u7136\u540E\u662F<code>N-2</code>\u6B21\uFF0C<code>N-3</code>\u6B21\uFF0C\u2026\u2026\uFF0C\u6700\u540E\u4E00\u6B21\u5185\u5FAA\u73AF\u6BD4\u8F831\u6B21 \u5171\u6BD4\u8F83\u7684\u6B21\u6570\u662F <code>(N - 1) + (N - 2) + ... + 1</code>\uFF0C\u6C42\u7B49\u5DEE\u6570\u5217\u548C\uFF0C\u5F97 <code>(N - 1 + 1)* N / 2 = N^2 / 2</code>\uFF0C\u820D\u53BB\u6700\u9AD8\u9879\u7CFB\u6570\uFF0C\u5176\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A <code>O(N^2)</code></p><p>\u4ECE\u4E0A\u8FF0\u4E5F\u53EF\u4EE5\u770B\u5230\uFF0C\u9009\u62E9\u6392\u5E8F\u662F\u4E00\u79CD\u7A33\u5B9A\u7684\u6392\u5E8F</p><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1">\u4E09\u3001\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u548C\u5192\u6CE1\u6392\u5E8F\u4E00\u81F4\uFF0C\u76F8\u6BD4\u5176\u5B83\u6392\u5E8F\u7B97\u6CD5\uFF0C\u8FD9\u4E5F\u662F\u4E00\u4E2A\u76F8\u5BF9\u8F83\u9AD8\u7684\u65F6\u95F4\u590D\u6742\u5EA6\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0D\u63A8\u8350\u4F7F\u7528</p><p>\u4F46\u662F\u6211\u4EEC\u8FD8\u662F\u8981\u638C\u63E1\u5192\u6CE1\u6392\u5E8F\u7684\u601D\u60F3\u53CA\u5B9E\u73B0\uFF0C\u8FD9\u5BF9\u4E8E\u6211\u4EEC\u7684\u7B97\u6CD5\u601D\u7EF4\u662F\u6709\u5F88\u5927\u5E2E\u52A9\u7684</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://baike.baidu.com/item/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F/9762418" target="_blank" rel="noreferrer">https://baike.baidu.com/item/\u9009\u62E9\u6392\u5E8F/9762418</a></li><li><a href="https://zhuanlan.zhihu.com/p/29889599" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/29889599</a></li><li><a href="http://data.biancheng.net/view/72.html" target="_blank" rel="noreferrer">http://data.biancheng.net/view/72.html</a></li></ul>`,30),e=[o];function r(c,t,F,y,i,D){return a(),n("div",null,e)}const A=s(p,[["render",r]]);export{C as __pageData,A as default};
