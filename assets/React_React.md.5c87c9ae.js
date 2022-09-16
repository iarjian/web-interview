import{_ as s,c as n,o as a,a as l}from"./app.f93e5564.js";const A=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9 React \u7684\u7406\u89E3\uFF1F\u6709\u54EA\u4E9B\u7279\u6027\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u7279\u6027","slug":"\u4E8C\u3001\u7279\u6027","link":"#\u4E8C\u3001\u7279\u6027","children":[{"level":3,"title":"\u58F0\u660E\u5F0F\u7F16\u7A0B","slug":"\u58F0\u660E\u5F0F\u7F16\u7A0B","link":"#\u58F0\u660E\u5F0F\u7F16\u7A0B","children":[]},{"level":3,"title":"Component","slug":"component","link":"#component","children":[]}]},{"level":2,"title":"\u4E09\u3001\u4F18\u52BF","slug":"\u4E09\u3001\u4F18\u52BF","link":"#\u4E09\u3001\u4F18\u52BF","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"React/React.md"}'),p={name:"React/React.md"},o=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9-react-\u7684\u7406\u89E3\uFF1F\u6709\u54EA\u4E9B\u7279\u6027\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9 React \u7684\u7406\u89E3\uFF1F\u6709\u54EA\u4E9B\u7279\u6027\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9-react-\u7684\u7406\u89E3\uFF1F\u6709\u54EA\u4E9B\u7279\u6027\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/671f5a90-d265-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>React\uFF0C\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 JavaScript \u5E93\uFF0C\u53EA\u63D0\u4F9B\u4E86 UI \u5C42\u9762\u7684\u89E3\u51B3\u65B9\u6848</p><p>\u9075\u5FAA\u7EC4\u4EF6\u8BBE\u8BA1\u6A21\u5F0F\u3001\u58F0\u660E\u5F0F\u7F16\u7A0B\u8303\u5F0F\u548C\u51FD\u6570\u5F0F\u7F16\u7A0B\u6982\u5FF5\uFF0C\u4EE5\u4F7F\u524D\u7AEF\u5E94\u7528\u7A0B\u5E8F\u66F4\u9AD8\u6548</p><p>\u4F7F\u7528\u865A\u62DF <code>DOM</code> \u6765\u6709\u6548\u5730\u64CD\u4F5C <code>DOM</code>\uFF0C\u9075\u5FAA\u4ECE\u9AD8\u9636\u7EC4\u4EF6\u5230\u4F4E\u9636\u7EC4\u4EF6\u7684\u5355\u5411\u6570\u636E\u6D41</p><p>\u5E2E\u52A9\u6211\u4EEC\u5C06\u754C\u9762\u6210\u4E86\u5404\u4E2A\u72EC\u7ACB\u7684\u5C0F\u5757\uFF0C\u6BCF\u4E00\u4E2A\u5757\u5C31\u662F\u7EC4\u4EF6\uFF0C\u8FD9\u4E9B\u7EC4\u4EF6\u4E4B\u95F4\u53EF\u4EE5\u7EC4\u5408\u3001\u5D4C\u5957\uFF0C\u6784\u6210\u6574\u4F53\u9875\u9762</p><p><code>react</code> \u7C7B\u7EC4\u4EF6\u4F7F\u7528\u4E00\u4E2A\u540D\u4E3A <code>render()</code> \u7684\u65B9\u6CD5\u6216\u8005\u51FD\u6570\u7EC4\u4EF6<code>return</code>\uFF0C\u63A5\u6536\u8F93\u5165\u7684\u6570\u636E\u5E76\u8FD4\u56DE\u9700\u8981\u5C55\u793A\u7684\u5185\u5BB9</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloMessage</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello </span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HelloMessage</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Taylor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello-example</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E0A\u8FF0\u8FD9\u79CD\u7C7B\u4F3C <code>XML</code> \u5F62\u5F0F\u5C31\u662F <code>JSX</code>\uFF0C\u6700\u7EC8\u4F1A\u88AB <code>babel</code> \u7F16\u8BD1\u4E3A\u5408\u6CD5\u7684 <code>JS</code> \u8BED\u53E5\u8C03\u7528</p><p>\u88AB\u4F20\u5165\u7684\u6570\u636E\u53EF\u5728\u7EC4\u4EF6\u4E2D\u901A\u8FC7 <code>this.props</code> \u5728 <code>render()</code> \u8BBF\u95EE</p><h2 id="\u4E8C\u3001\u7279\u6027" tabindex="-1">\u4E8C\u3001\u7279\u6027 <a class="header-anchor" href="#\u4E8C\u3001\u7279\u6027" aria-hidden="true">#</a></h2><p><code>React</code> \u7279\u6027\u6709\u5F88\u591A\uFF0C\u5982\uFF1A</p><ul><li>JSX \u8BED\u6CD5</li><li>\u5355\u5411\u6570\u636E\u7ED1\u5B9A</li><li>\u865A\u62DF DOM</li><li>\u58F0\u660E\u5F0F\u7F16\u7A0B</li><li>Component</li></ul><p>\u7740\u91CD\u4ECB\u7ECD\u4E0B\u58F0\u660E\u5F0F\u7F16\u7A0B\u53CA Component</p><h3 id="\u58F0\u660E\u5F0F\u7F16\u7A0B" tabindex="-1">\u58F0\u660E\u5F0F\u7F16\u7A0B <a class="header-anchor" href="#\u58F0\u660E\u5F0F\u7F16\u7A0B" aria-hidden="true">#</a></h3><p>\u58F0\u660E\u5F0F\u7F16\u7A0B\u662F\u4E00\u79CD\u7F16\u7A0B\u8303\u5F0F\uFF0C\u5B83\u5173\u6CE8\u7684\u662F\u4F60\u8981\u505A\u4EC0\u4E48\uFF0C\u800C\u4E0D\u662F\u5982\u4F55\u505A</p><p>\u5B83\u8868\u8FBE\u903B\u8F91\u800C\u4E0D\u663E\u5F0F\u5730\u5B9A\u4E49\u6B65\u9AA4\u3002\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u9700\u8981\u6839\u636E\u903B\u8F91\u7684\u8BA1\u7B97\u6765\u58F0\u660E\u8981\u663E\u793A\u7684\u7EC4\u4EF6</p><p>\u5982\u5B9E\u73B0\u4E00\u4E2A\u6807\u8BB0\u7684\u5730\u56FE\uFF1A</p><p>\u901A\u8FC7\u547D\u4EE4\u5F0F\u521B\u5EFA\u5730\u56FE\u3001\u521B\u5EFA\u6807\u8BB0\u3001\u4EE5\u53CA\u5728\u5730\u56FE\u4E0A\u6DFB\u52A0\u7684\u6807\u8BB0\u7684\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u5730\u56FE</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> Map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">map</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">zoom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">center</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> lat</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> lng </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u6807\u8BB0</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> marker </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> Map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">marker</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> lat</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> lng </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello Marker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5730\u56FE\u4E0A\u6DFB\u52A0\u6807\u8BB0</span></span>
<span class="line"><span style="color:#A6ACCD;">marker</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setMap</span><span style="color:#A6ACCD;">(map)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u800C\u7528 <code>React</code> \u5B9E\u73B0\u4E0A\u8FF0\u529F\u80FD\u5219\u5982\u4E0B\uFF1A</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Map</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">zoom</span><span style="color:#89DDFF;">={</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">center</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">(lat</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> lng)</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Marker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">position</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">(lat</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> lng)</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello Marker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u58F0\u660E\u5F0F\u7F16\u7A0B\u65B9\u5F0F\u4F7F\u5F97 <code>React</code> \u7EC4\u4EF6\u5F88\u5BB9\u6613\u4F7F\u7528\uFF0C\u6700\u7EC8\u7684\u4EE3\u7801\u7B80\u5355\u6613\u4E8E\u7EF4\u62A4</p><h3 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-hidden="true">#</a></h3><p>\u5728 <code>React</code> \u4E2D\uFF0C\u4E00\u5207\u7686\u4E3A\u7EC4\u4EF6\u3002\u901A\u5E38\u5C06\u5E94\u7528\u7A0B\u5E8F\u7684\u6574\u4E2A\u903B\u8F91\u5206\u89E3\u4E3A\u5C0F\u7684\u5355\u4E2A\u90E8\u5206\u3002 \u6211\u4EEC\u5C06\u6BCF\u4E2A\u5355\u72EC\u7684\u90E8\u5206\u79F0\u4E3A\u7EC4\u4EF6</p><p>\u7EC4\u4EF6\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\u6216\u8005\u662F\u4E00\u4E2A\u7C7B\uFF0C\u63A5\u53D7\u6570\u636E\u8F93\u5165\uFF0C\u5904\u7406\u5B83\u5E76\u8FD4\u56DE\u5728 <code>UI</code> \u4E2D\u5448\u73B0\u7684 <code>React</code> \u5143\u7D20</p><p>\u51FD\u6570\u5F0F\u7EC4\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Header </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Jumbotron</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">backgroundColor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">orange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">TODO App</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Jumbotron</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7C7B\u7EC4\u4EF6\uFF08\u6709\u72B6\u6001\u7EC4\u4EF6\uFF09\u5982\u4E0B\uFF1A</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dashboard</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dashboard</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ToDoForm</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ToDolist</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4E00\u4E2A\u7EC4\u4EF6\u8BE5\u6709\u7684\u7279\u70B9\u5982\u4E0B\uFF1A</p><ul><li>\u53EF\u7EC4\u5408\uFF1A\u6BCF\u4E2A\u7EC4\u4EF6\u6613\u4E8E\u548C\u5176\u5B83\u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528\uFF0C\u6216\u8005\u5D4C\u5957\u5728\u53E6\u4E00\u4E2A\u7EC4\u4EF6\u5185\u90E8</li><li>\u53EF\u91CD\u7528\uFF1A\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u662F\u5177\u6709\u72EC\u7ACB\u529F\u80FD\u7684\uFF0C\u5B83\u53EF\u4EE5\u88AB\u4F7F\u7528\u5728\u591A\u4E2A UI \u573A\u666F</li><li>\u53EF\u7EF4\u62A4\uFF1A\u6BCF\u4E2A\u5C0F\u7684\u7EC4\u4EF6\u4EC5\u4EC5\u5305\u542B\u81EA\u8EAB\u7684\u903B\u8F91\uFF0C\u66F4\u5BB9\u6613\u88AB\u7406\u89E3\u548C\u7EF4\u62A4</li></ul><h2 id="\u4E09\u3001\u4F18\u52BF" tabindex="-1">\u4E09\u3001\u4F18\u52BF <a class="header-anchor" href="#\u4E09\u3001\u4F18\u52BF" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4E0A\u9762\u7684\u521D\u6B65\u4E86\u89E3\uFF0C\u53EF\u4EE5\u611F\u53D7\u5230 <code>React</code> \u5B58\u5728\u7684\u4F18\u52BF\uFF1A</p><ul><li>\u9AD8\u6548\u7075\u6D3B</li><li>\u58F0\u660E\u5F0F\u7684\u8BBE\u8BA1\uFF0C\u7B80\u5355\u4F7F\u7528</li><li>\u7EC4\u4EF6\u5F0F\u5F00\u53D1\uFF0C\u63D0\u9AD8\u4EE3\u7801\u590D\u7528\u7387</li><li>\u5355\u5411\u54CD\u5E94\u7684\u6570\u636E\u6D41\u4F1A\u6BD4\u53CC\u5411\u7ED1\u5B9A\u7684\u66F4\u5B89\u5168\uFF0C\u901F\u5EA6\u66F4\u5FEB</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://segmentfault.com/a/1190000015924762" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000015924762</a></li><li><a href="https://react.docschina.org/" target="_blank" rel="noreferrer">https://react.docschina.org/</a></li></ul>`,38),e=[o];function c(r,t,D,F,y,i){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
