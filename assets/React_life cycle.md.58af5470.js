import{_ as e,c as a,o as n,a as o}from"./app.e287249f.js";const D=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4 React \u751F\u547D\u5468\u671F\u6709\u54EA\u4E9B\u4E0D\u540C\u9636\u6BB5\uFF1F\u6BCF\u4E2A\u9636\u6BB5\u5BF9\u5E94\u7684\u65B9\u6CD5\u662F\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u6D41\u7A0B","slug":"\u4E8C\u3001\u6D41\u7A0B","link":"#\u4E8C\u3001\u6D41\u7A0B","children":[{"level":3,"title":"\u521B\u5EFA\u9636\u6BB5","slug":"\u521B\u5EFA\u9636\u6BB5","link":"#\u521B\u5EFA\u9636\u6BB5","children":[]},{"level":3,"title":"getDerivedStateFromProps","slug":"getderivedstatefromprops","link":"#getderivedstatefromprops","children":[]},{"level":3,"title":"render","slug":"render","link":"#render","children":[]},{"level":3,"title":"componentDidMount","slug":"componentdidmount","link":"#componentdidmount","children":[]},{"level":3,"title":"\u66F4\u65B0\u9636\u6BB5","slug":"\u66F4\u65B0\u9636\u6BB5","link":"#\u66F4\u65B0\u9636\u6BB5","children":[]},{"level":3,"title":"getDerivedStateFromProps","slug":"getderivedstatefromprops-1","link":"#getderivedstatefromprops-1","children":[]}]},{"level":2,"title":"shouldComponentUpdate","slug":"shouldcomponentupdate","link":"#shouldcomponentupdate","children":[{"level":3,"title":"render","slug":"render-1","link":"#render-1","children":[]},{"level":3,"title":"getSnapshotBeforeUpdate","slug":"getsnapshotbeforeupdate","link":"#getsnapshotbeforeupdate","children":[]},{"level":3,"title":"componentDidUpdate","slug":"componentdidupdate","link":"#componentdidupdate","children":[]},{"level":3,"title":"\u5378\u8F7D\u9636\u6BB5","slug":"\u5378\u8F7D\u9636\u6BB5","link":"#\u5378\u8F7D\u9636\u6BB5","children":[]}]},{"level":2,"title":"componentWillUnmount","slug":"componentwillunmount","link":"#componentwillunmount","children":[]},{"level":2,"title":"\u4E09\u3001\u603B\u7ED3","slug":"\u4E09\u3001\u603B\u7ED3","link":"#\u4E09\u3001\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"React/life cycle.md"}'),s={name:"React/life cycle.md"},t=o(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4-react-\u751F\u547D\u5468\u671F\u6709\u54EA\u4E9B\u4E0D\u540C\u9636\u6BB5\uFF1F\u6BCF\u4E2A\u9636\u6BB5\u5BF9\u5E94\u7684\u65B9\u6CD5\u662F\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4 React \u751F\u547D\u5468\u671F\u6709\u54EA\u4E9B\u4E0D\u540C\u9636\u6BB5\uFF1F\u6BCF\u4E2A\u9636\u6BB5\u5BF9\u5E94\u7684\u65B9\u6CD5\u662F\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4-react-\u751F\u547D\u5468\u671F\u6709\u54EA\u4E9B\u4E0D\u540C\u9636\u6BB5\uFF1F\u6BCF\u4E2A\u9636\u6BB5\u5BF9\u5E94\u7684\u65B9\u6CD5\u662F\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/5c717010-d373-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u5728<a href="https://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&amp;mid=2247484176&amp;idx=1&amp;sn=5623421ed2678046ed9e438aadf6e26f&amp;chksm=fc10c146cb67485015f24f7e9f5862c4c685fc33485fe30e1b375a534b4031978439c554e0c0&amp;scene=178&amp;cur_album_id=1711105826272116736#rd" target="_blank" rel="noreferrer">\u4EE5\u524D\u6587\u7AE0</a>\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u751F\u547D\u5468\u671F\u5B9A\u4E49</p><p>\u751F\u547D\u5468\u671F<code>\uFF08Life Cycle\uFF09</code>\u7684\u6982\u5FF5\u5E94\u7528\u5F88\u5E7F\u6CDB\uFF0C\u7279\u522B\u662F\u5728\u7ECF\u6D4E\u3001\u73AF\u5883\u3001\u6280\u672F\u3001\u793E\u4F1A\u7B49\u8BF8\u591A\u9886\u57DF\u7ECF\u5E38\u51FA\u73B0\uFF0C\u5176\u57FA\u672C\u6DB5\u4E49\u53EF\u4EE5\u901A\u4FD7\u5730\u7406\u89E3\u4E3A\u201C\u4ECE\u6447\u7BEE\u5230\u575F\u5893\u201D<code>\uFF08Cradle-to-Grave\uFF09</code>\u7684\u6574\u4E2A\u8FC7\u7A0B</p><p>\u8DDF<code>Vue</code>\u4E00\u6837\uFF0C<code>React</code>\u6574\u4E2A\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u5305\u62EC\u4ECE\u521B\u5EFA\u3001\u521D\u59CB\u5316\u6570\u636E\u3001\u7F16\u8BD1\u6A21\u677F\u3001\u6302\u8F7DDom\u2192\u6E32\u67D3\u3001\u66F4\u65B0\u2192\u6E32\u67D3\u3001\u5378\u8F7D\u7B49\u4E00\u7CFB\u5217\u8FC7\u7A0B</p><h2 id="\u4E8C\u3001\u6D41\u7A0B" tabindex="-1">\u4E8C\u3001\u6D41\u7A0B <a class="header-anchor" href="#\u4E8C\u3001\u6D41\u7A0B" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u4E3B\u8981\u8BB2\u8FF0<code>react16.4</code>\u4E4B\u540E\u7684\u751F\u547D\u5468\u671F\uFF0C\u53EF\u4EE5\u5206\u6210\u4E09\u4E2A\u9636\u6BB5\uFF1A</p><ul><li>\u521B\u5EFA\u9636\u6BB5</li><li>\u66F4\u65B0\u9636\u6BB5</li><li>\u5378\u8F7D\u9636\u6BB5</li></ul><h3 id="\u521B\u5EFA\u9636\u6BB5" tabindex="-1">\u521B\u5EFA\u9636\u6BB5 <a class="header-anchor" href="#\u521B\u5EFA\u9636\u6BB5" aria-hidden="true">#</a></h3><p>\u521B\u5EFA\u9636\u6BB5\u4E3B\u8981\u5206\u6210\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u751F\u547D\u5468\u671F\u65B9\u6CD5\uFF1A</p><ul><li>constructor</li><li>getDerivedStateFromProps</li><li>render</li><li>componentDidMount</li></ul><h4 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h4><p>\u5B9E\u4F8B\u8FC7\u7A0B\u4E2D\u81EA\u52A8\u8C03\u7528\u7684\u65B9\u6CD5\uFF0C\u5728\u65B9\u6CD5\u5185\u90E8\u901A\u8FC7<code>super</code>\u5173\u952E\u5B57\u83B7\u53D6\u6765\u81EA\u7236\u7EC4\u4EF6\u7684<code>props</code></p><p>\u5728\u8BE5\u65B9\u6CD5\u4E2D\uFF0C\u901A\u5E38\u7684\u64CD\u4F5C\u4E3A\u521D\u59CB\u5316<code>state</code>\u72B6\u6001\u6216\u8005\u5728<code>this</code>\u4E0A\u6302\u8F7D\u65B9\u6CD5</p><h3 id="getderivedstatefromprops" tabindex="-1">getDerivedStateFromProps <a class="header-anchor" href="#getderivedstatefromprops" aria-hidden="true">#</a></h3><p>\u8BE5\u65B9\u6CD5\u662F\u65B0\u589E\u7684\u751F\u547D\u5468\u671F\u65B9\u6CD5\uFF0C\u662F\u4E00\u4E2A\u9759\u6001\u7684\u65B9\u6CD5\uFF0C\u56E0\u6B64\u4E0D\u80FD\u8BBF\u95EE\u5230\u7EC4\u4EF6\u7684\u5B9E\u4F8B</p><p>\u6267\u884C\u65F6\u673A\uFF1A\u7EC4\u4EF6\u521B\u5EFA\u548C\u66F4\u65B0\u9636\u6BB5\uFF0C\u4E0D\u8BBA\u662F<code>props</code>\u53D8\u5316\u8FD8\u662F<code>state</code>\u53D8\u5316\uFF0C\u4E5F\u4F1A\u8C03\u7528</p><p>\u5728\u6BCF\u6B21<code>render</code>\u65B9\u6CD5\u524D\u8C03\u7528\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u5373\u5C06\u66F4\u65B0\u7684<code>props</code>\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u4E0A\u4E00\u4E2A\u72B6\u6001\u7684<code>state</code>\uFF0C\u53EF\u4EE5\u6BD4\u8F83<code>props</code> \u548C <code>state</code>\u6765\u52A0\u4E00\u4E9B\u9650\u5236\u6761\u4EF6\uFF0C\u9632\u6B62\u65E0\u7528\u7684state\u66F4\u65B0</p><p>\u8BE5\u65B9\u6CD5\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u4F5C\u4E3A\u65B0\u7684<code>state</code>\u6216\u8005\u8FD4\u56DE<code>null</code>\u8868\u793A<code>state</code>\u72B6\u6001\u4E0D\u9700\u8981\u66F4\u65B0</p><h3 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-hidden="true">#</a></h3><p>\u7C7B\u7EC4\u4EF6\u5FC5\u987B\u5B9E\u73B0\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u6E32\u67D3<code>DOM</code>\u7ED3\u6784\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u7EC4\u4EF6<code>state</code>\u4E0E<code>prop</code>\u5C5E\u6027</p><p>\u6CE8\u610F\uFF1A \u4E0D\u8981\u5728 <code>render</code> \u91CC\u9762 <code>setState</code>, \u5426\u5219\u4F1A\u89E6\u53D1\u6B7B\u5FAA\u73AF\u5BFC\u81F4\u5185\u5B58\u5D29\u6E83</p><h3 id="componentdidmount" tabindex="-1">componentDidMount <a class="header-anchor" href="#componentdidmount" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u6302\u8F7D\u5230\u771F\u5B9E<code>DOM</code>\u8282\u70B9\u540E\u6267\u884C\uFF0C\u5176\u5728<code>render</code>\u65B9\u6CD5\u4E4B\u540E\u6267\u884C</p><p>\u6B64\u65B9\u6CD5\u591A\u7528\u4E8E\u6267\u884C\u4E00\u4E9B\u6570\u636E\u83B7\u53D6\uFF0C\u4E8B\u4EF6\u76D1\u542C\u7B49\u64CD\u4F5C</p><h3 id="\u66F4\u65B0\u9636\u6BB5" tabindex="-1">\u66F4\u65B0\u9636\u6BB5 <a class="header-anchor" href="#\u66F4\u65B0\u9636\u6BB5" aria-hidden="true">#</a></h3><p>\u8BE5\u9636\u6BB5\u7684\u51FD\u6570\u4E3B\u8981\u4E3A\u5982\u4E0B\u65B9\u6CD5\uFF1A</p><ul><li>getDerivedStateFromProps</li><li>shouldComponentUpdate</li><li>render</li><li>getSnapshotBeforeUpdate</li><li>componentDidUpdate</li></ul><h3 id="getderivedstatefromprops-1" tabindex="-1">getDerivedStateFromProps <a class="header-anchor" href="#getderivedstatefromprops-1" aria-hidden="true">#</a></h3><p>\u8BE5\u65B9\u6CD5\u4ECB\u7ECD\u540C\u4E0A</p><h2 id="shouldcomponentupdate" tabindex="-1">shouldComponentUpdate <a class="header-anchor" href="#shouldcomponentupdate" aria-hidden="true">#</a></h2><p>\u7528\u4E8E\u544A\u77E5\u7EC4\u4EF6\u672C\u8EAB\u57FA\u4E8E\u5F53\u524D\u7684<code>props</code>\u548C<code>state</code>\u662F\u5426\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u8FD4\u56DE<code>true</code></p><p>\u6267\u884C\u65F6\u673A\uFF1A\u5230\u65B0\u7684props\u6216\u8005state\u65F6\u90FD\u4F1A\u8C03\u7528\uFF0C\u901A\u8FC7\u8FD4\u56DEtrue\u6216\u8005false\u544A\u77E5\u7EC4\u4EF6\u66F4\u65B0\u4E0E\u5426</p><p>\u4E00\u822C\u60C5\u51B5\uFF0C\u4E0D\u5EFA\u8BAE\u5728\u8BE5\u5468\u671F\u65B9\u6CD5\u4E2D\u8FDB\u884C\u6DF1\u5C42\u6BD4\u8F83\uFF0C\u4F1A\u5F71\u54CD\u6548\u7387</p><p>\u540C\u65F6\u4E5F\u4E0D\u80FD\u8C03\u7528<code>setState</code>\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u65E0\u9650\u5FAA\u73AF\u8C03\u7528\u66F4\u65B0</p><h3 id="render-1" tabindex="-1">render <a class="header-anchor" href="#render-1" aria-hidden="true">#</a></h3><p>\u4ECB\u7ECD\u5982\u4E0A</p><h3 id="getsnapshotbeforeupdate" tabindex="-1">getSnapshotBeforeUpdate <a class="header-anchor" href="#getsnapshotbeforeupdate" aria-hidden="true">#</a></h3><p>\u8BE5\u5468\u671F\u51FD\u6570\u5728<code>render</code>\u540E\u6267\u884C\uFF0C\u6267\u884C\u4E4B\u65F6<code>DOM</code>\u5143\u7D20\u8FD8\u6CA1\u6709\u88AB\u66F4\u65B0</p><p>\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7684\u4E00\u4E2A<code>Snapshot</code>\u503C\uFF0C\u4F5C\u4E3A<code>componentDidUpdate</code>\u7B2C\u4E09\u4E2A\u53C2\u6570\u4F20\u5165</p><div class="language-jsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#82AAFF;">getSnapshotBeforeUpdate</span><span style="color:#A6ACCD;">(prevProps</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> prevState) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#enter getSnapshotBeforeUpdate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">componentDidUpdate</span><span style="color:#A6ACCD;">(prevProps</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> prevState</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> snapshot) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#enter componentDidUpdate snapshot = </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">snapshot</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6B64\u65B9\u6CD5\u7684\u76EE\u7684\u5728\u4E8E\u83B7\u53D6\u7EC4\u4EF6\u66F4\u65B0\u524D\u7684\u4E00\u4E9B\u4FE1\u606F\uFF0C\u6BD4\u5982\u7EC4\u4EF6\u7684\u6EDA\u52A8\u4F4D\u7F6E\u4E4B\u7C7B\u7684\uFF0C\u5728\u7EC4\u4EF6\u66F4\u65B0\u540E\u53EF\u4EE5\u6839\u636E\u8FD9\u4E9B\u4FE1\u606F\u6062\u590D\u4E00\u4E9BUI\u89C6\u89C9\u4E0A\u7684\u72B6\u6001</p><h3 id="componentdidupdate" tabindex="-1">componentDidUpdate <a class="header-anchor" href="#componentdidupdate" aria-hidden="true">#</a></h3><p>\u6267\u884C\u65F6\u673A\uFF1A\u7EC4\u4EF6\u66F4\u65B0\u7ED3\u675F\u540E\u89E6\u53D1</p><p>\u5728\u8BE5\u65B9\u6CD5\u4E2D\uFF0C\u53EF\u4EE5\u6839\u636E\u524D\u540E\u7684<code>props</code>\u548C<code>state</code>\u7684\u53D8\u5316\u505A\u76F8\u5E94\u7684\u64CD\u4F5C\uFF0C\u5982\u83B7\u53D6\u6570\u636E\uFF0C\u4FEE\u6539<code>DOM</code>\u6837\u5F0F\u7B49</p><h3 id="\u5378\u8F7D\u9636\u6BB5" tabindex="-1">\u5378\u8F7D\u9636\u6BB5 <a class="header-anchor" href="#\u5378\u8F7D\u9636\u6BB5" aria-hidden="true">#</a></h3><h2 id="componentwillunmount" tabindex="-1">componentWillUnmount <a class="header-anchor" href="#componentwillunmount" aria-hidden="true">#</a></h2><p>\u6B64\u65B9\u6CD5\u7528\u4E8E\u7EC4\u4EF6\u5378\u8F7D\u524D\uFF0C\u6E05\u7406\u4E00\u4E9B\u6CE8\u518C\u662F\u76D1\u542C\u4E8B\u4EF6\uFF0C\u6216\u8005\u53D6\u6D88\u8BA2\u9605\u7684\u7F51\u7EDC\u8BF7\u6C42\u7B49</p><p>\u4E00\u65E6\u4E00\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u88AB\u5378\u8F7D\uFF0C\u5176\u4E0D\u4F1A\u88AB\u518D\u6B21\u6302\u8F7D\uFF0C\u800C\u53EA\u53EF\u80FD\u662F\u88AB\u91CD\u65B0\u521B\u5EFA</p><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1">\u4E09\u3001\u603B\u7ED3 <a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u65B0\u7248\u751F\u547D\u5468\u671F\u6574\u4F53\u6D41\u7A0B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/66c999c0-d373-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u65E7\u7684\u751F\u547D\u5468\u671F\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/d379e420-d374-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u901A\u8FC7\u4E24\u4E2A\u56FE\u7684\u5BF9\u6BD4\uFF0C\u53EF\u4EE5\u53D1\u73B0\u65B0\u7248\u7684\u751F\u547D\u5468\u671F\u51CF\u5C11\u4E86\u4EE5\u4E0B\u4E09\u79CD\u65B9\u6CD5\uFF1A</p><ul><li>componentWillMount</li><li>componentWillReceiveProps</li><li>componentWillUpdate</li></ul><p>\u5176\u5B9E\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u4ECD\u7136\u5B58\u5728\uFF0C\u53EA\u662F\u5728\u524D\u8005\u52A0\u4E0A\u4E86<code>UNSAFE_</code>\u524D\u7F00\uFF0C\u5982<code>UNSAFE_componentWillMount</code>\uFF0C\u5E76\u4E0D\u50CF\u5B57\u9762\u610F\u601D\u90A3\u6837\u8868\u793A\u4E0D\u5B89\u5168\uFF0C\u800C\u662F\u8868\u793A\u8FD9\u4E9B\u751F\u547D\u5468\u671F\u7684\u4EE3\u7801\u53EF\u80FD\u5728\u672A\u6765\u7684 <code>react </code>\u7248\u672C\u53EF\u80FD\u5E9F\u9664</p><p>\u540C\u65F6\u4E5F\u65B0\u589E\u4E86\u4E24\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\uFF1A</p><ul><li>getDerivedStateFromProps</li><li>getSnapshotBeforeUpdate</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/pomelovico/keep/issues/23" target="_blank" rel="noreferrer">https://github.com/pomelovico/keep/issues/23</a></li><li><a href="https://segmentfault.com/a/1190000020268993" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000020268993</a></li></ul>`,62),p=[t];function l(r,d,c,i,h,u){return n(),a("div",null,p)}const f=e(s,[["render",l]]);export{D as __pageData,f as default};