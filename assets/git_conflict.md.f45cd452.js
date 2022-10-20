import{_ as e,c as t,o as c,a as d}from"./app.e287249f.js";const f=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4 git \u53D1\u751F\u51B2\u7A81\u7684\u573A\u666F\uFF1F\u5982\u4F55\u89E3\u51B3\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u5206\u6790","slug":"\u4E8C\u3001\u5206\u6790","link":"#\u4E8C\u3001\u5206\u6790","children":[]},{"level":2,"title":"\u4E09\u3001\u603B\u7ED3","slug":"\u4E09\u3001\u603B\u7ED3","link":"#\u4E09\u3001\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"git/conflict.md"}'),o={name:"git/conflict.md"},a=d(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4-git-\u53D1\u751F\u51B2\u7A81\u7684\u573A\u666F\uFF1F\u5982\u4F55\u89E3\u51B3\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4 git \u53D1\u751F\u51B2\u7A81\u7684\u573A\u666F\uFF1F\u5982\u4F55\u89E3\u51B3\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4-git-\u53D1\u751F\u51B2\u7A81\u7684\u573A\u666F\uFF1F\u5982\u4F55\u89E3\u51B3\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/8aeccc40-fdb3-11eb-bc6f-3f06e1491664.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u51FA\u73B0\u5206\u652F\u7684\u573A\u666F\u6709\u5982\u4E0B\uFF1A</p><ul><li>\u591A\u4E2A\u5206\u652F\u4EE3\u7801\u5408\u5E76\u5230\u4E00\u4E2A\u5206\u652F\u65F6</li><li>\u591A\u4E2A\u5206\u652F\u5411\u540C\u4E00\u4E2A\u8FDC\u7AEF\u5206\u652F\u63A8\u9001</li></ul><p>\u5177\u4F53\u60C5\u51B5\u5C31\u662F\uFF0C\u591A\u4E2A\u5206\u652F\u4FEE\u6539\u4E86\u540C\u4E00\u4E2A\u6587\u4EF6\uFF08\u4EFB\u4F55\u5730\u65B9\uFF09\u6216\u8005\u591A\u4E2A\u5206\u652F\u4FEE\u6539\u4E86\u540C\u4E00\u4E2A\u6587\u4EF6\u7684\u540D\u79F0</p><p>\u5982\u679C\u4E24\u4E2A\u5206\u652F\u4E2D\u5206\u522B\u4FEE\u6539\u4E86\u4E0D\u540C\u6587\u4EF6\u4E2D\u7684\u90E8\u5206\uFF0C\u662F\u4E0D\u4F1A\u4EA7\u751F\u51B2\u7A81\uFF0C\u76F4\u63A5\u5408\u5E76\u5373\u53EF</p><p>\u5E94\u7528\u5728\u547D\u4EE4\u4E2D\uFF0C\u5C31\u662F<code>push</code>\u3001<code>pull</code>\u3001<code>stash</code>\u3001<code>rebase</code>\u7B49\u547D\u4EE4\u4E0B\u90FD\u6709\u53EF\u80FD\u4EA7\u751F\u51B2\u7A81\u60C5\u51B5\uFF0C\u4ECE\u672C\u8D28\u4E0A\u6765\u8BB2\uFF0C\u90FD\u662F<code>merge</code>\u548C<code>patch</code>\uFF08\u5E94\u7528\u8865\u4E01\uFF09\u65F6\u4EA7\u751F\u51B2\u7A81</p><h2 id="\u4E8C\u3001\u5206\u6790" tabindex="-1">\u4E8C\u3001\u5206\u6790 <a class="header-anchor" href="#\u4E8C\u3001\u5206\u6790" aria-hidden="true">#</a></h2><p>\u5728\u672C\u5730\u4E3B\u5206\u503C<code>master</code>\u521B\u5EFA\u4E00\u4E2A<code>a.txt</code>\u6587\u4EF6\uFF0C\u6587\u4EF6\u8D77\u59CB\u4F4D\u7F6E\u5199\u4E0A<code>master commit</code>\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/959ade20-fdb3-11eb-991d-334fd31f0201.png" alt=""></p><p>\u7136\u540E\u63D0\u4EA4\u5230\u4ED3\u5E93\uFF1A</p><ul><li>git add a.txt</li><li>git commit -m &#39;master first commit&#39;</li></ul><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5206\u652F<code>featurel1</code>\u5206\u652F\uFF0C\u5E76\u8FDB\u884C\u5207\u6362\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-cmd line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre><code><span class="line"><span style="color:#A6ACCD;">git checkout </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">b featurel1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u4FEE\u6539<code>a.txt</code>\u6587\u4EF6\u9996\u884C\u6587\u5B57\u4E3A <code>featurel commit</code>\uFF0C\u7136\u540E\u6DFB\u52A0\u5230\u6682\u5B58\u533A\uFF0C\u5E76\u5F00\u59CB\u8FDB\u884C\u63D0\u4EA4\u5230\u4ED3\u5E93\uFF1A</p><ul><li>git add a.txt</li><li>git commit -m &#39;featurel first change&#39;</li></ul><p>\u7136\u540E\u901A\u8FC7<code>git checkout master</code>\u5207\u6362\u5230\u4E3B\u5206\u652F\uFF0C\u901A\u8FC7<code>git merge</code>\u8FDB\u884C\u5408\u5E76\uFF0C\u53D1\u73B0\u4E0D\u4F1A\u51B2\u7A81</p><p>\u6B64\u65F6<code>a.txt</code>\u6587\u4EF6\u7684\u5185\u5BB9\u53D8\u6210<code>featurel commit</code>\uFF0C\u6CA1\u6709\u51FA\u73B0\u51B2\u7A81\u60C5\u51B5\uFF0C\u8FD9\u662F\u56E0\u4E3A<code>git</code>\u5728\u5185\u90E8\u53D1\u751F\u4E86\u5FEB\u901F\u5408\u5E76</p><blockquote><p>\u5982\u679C\u5F53\u524D\u5206\u652F\u7684\u6BCF\u4E00\u4E2A\u63D0\u4EA4(commit)\u90FD\u5DF2\u7ECF\u5B58\u5728\u53E6\u4E00\u4E2A\u5206\u652F\u91CC\u4E86\uFF0Cgit \u5C31\u4F1A\u6267\u884C\u4E00\u4E2A\u201C\u5FEB\u901F\u5411\u524D\u201D(fast forward)\u64CD\u4F5C</p><p>git \u4E0D\u521B\u5EFA\u4EFB\u4F55\u65B0\u7684\u63D0\u4EA4(commit)\uFF0C\u53EA\u662F\u5C06\u5F53\u524D\u5206\u652F\u6307\u5411\u5408\u5E76\u8FDB\u6765\u7684\u5206\u652F</p></blockquote><p>\u5982\u679C\u6B64\u65F6\u5207\u6362\u5230<code>featurel</code>\u5206\u652F\uFF0C\u5C06\u6587\u4EF6\u7684\u5185\u5BB9\u4FEE\u6539\u6210<code>featrue second commit</code>\uFF0C\u7136\u540E\u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93</p><p>\u7136\u540E\u5207\u6362\u5230\u4E3B\u5206\u652F\uFF0C\u5982\u679C\u6B64\u65F6\u5728<code>a.txt</code>\u6587\u4EF6\u518D\u6B21\u4FEE\u6539\uFF0C\u4FEE\u6539\u6210<code>mastet second commit</code>\uFF0C\u7136\u540E\u518D\u6B21\u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93</p><p>\u6B64\u65F6\uFF0C<code>master</code>\u5206\u652F\u548C<code>feature1</code>\u5206\u652F\u5404\u81EA\u90FD\u5206\u522B\u6709\u65B0\u7684\u63D0\u4EA4\uFF0C\u53D8\u6210\u4E86\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/a05488c0-fdb3-11eb-991d-334fd31f0201.png" alt=""></p><p>\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u65E0\u6CD5\u6267\u884C\u5FEB\u901F\u5408\u5E76\uFF0C\u53EA\u80FD\u8BD5\u56FE\u628A\u5404\u81EA\u7684\u4FEE\u6539\u5408\u5E76\u8D77\u6765\uFF0C\u4F46\u8FD9\u79CD\u5408\u5E76\u5C31\u53EF\u80FD\u4F1A\u6709\u51B2\u7A81</p><p>\u73B0\u5728\u901A\u8FC7<code>git merge featurel</code>\u8FDB\u884C\u5206\u652F\u5408\u5E76\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/b0991d90-fdb3-11eb-bc6f-3f06e1491664.png" alt=""></p><p>\u4ECE\u51B2\u7A81\u4FE1\u606F\u53EF\u4EE5\u770B\u5230\uFF0C<code>a.txt</code>\u53D1\u751F\u51B2\u7A81\uFF0C\u5FC5\u987B\u624B\u52A8\u89E3\u51B3\u51B2\u7A81\u4E4B\u540E\u518D\u63D0\u4EA4</p><p>\u800C<code>git status</code>\u540C\u6837\u53EF\u4EE5\u544A\u77E5\u6211\u4EEC\u51B2\u7A81\u7684\u6587\u4EF6\uFF1A</p><p><img src="https://static.vue-js.com/c5823430-fdb3-11eb-991d-334fd31f0201.png" alt=""></p><p>\u6253\u5F00<code>a.txt</code>\u6587\u4EF6\uFF0C\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u5185\u5BB9\uFF1A</p><p><img src="https://static.vue-js.com/ce7a0a90-fdb3-11eb-bc6f-3f06e1491664.png" alt=""></p><p><code>git</code>\u7528<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>\uFF0C<code>=======</code>\uFF0C<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>\u6807\u8BB0\u51FA\u4E0D\u540C\u5206\u652F\u7684\u5185\u5BB9\uFF1A</p><ul><li><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Invalid code snippet option</span></span></code></pre><div class="line-numbers-wrapper"></div></div></li><li>======= \u548C &gt;&gt;&gt;&gt;&gt;&gt;&gt; \u4E4B\u95F4\u7684\u533A\u57DF\u5C31\u662F\u4F20\u5165\u8FDB\u6765\u66F4\u6539\u7684\u5185\u5BB9</li></ul><p>\u73B0\u5728\u8981\u505A\u7684\u4E8B\u60C5\u5C31\u662F\u5C06\u51B2\u7A81\u7684\u5185\u5BB9\u8FDB\u884C\u66F4\u6539\uFF0C\u5BF9\u6BCF\u4E2A\u6587\u4EF6\u4F7F\u7528 <code>git add</code> \u547D\u4EE4\u6765\u5C06\u5176\u6807\u8BB0\u4E3A\u51B2\u7A81\u5DF2\u89E3\u51B3\u3002 \u4E00\u65E6\u6682\u5B58\u8FD9\u4E9B\u539F\u672C\u6709\u51B2\u7A81\u7684\u6587\u4EF6\uFF0C<code>Git </code>\u5C31\u4F1A\u5C06\u5B83\u4EEC\u6807\u8BB0\u4E3A\u51B2\u7A81\u5DF2\u89E3\u51B3\u7136\u540E\u518D\u63D0\u4EA4\uFF1A</p><ul><li>git add a.txt</li><li>git commit -m &quot;conflict fixed&quot;</li></ul><p>\u6B64\u65F6<code>master</code>\u5206\u652F\u548C<code>feature1</code>\u5206\u652F\u53D8\u6210\u4E86\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/d7421e60-fdb3-11eb-bc6f-3f06e1491664.png" alt=""></p><p>\u4F7F\u7528<code>git log</code>\u547D\u4EE4\u53EF\u4EE5\u770B\u5230\u5408\u5E76\u7684\u4FE1\u606F\uFF1A</p><p><img src="https://static.vue-js.com/e0dfd1b0-fdb3-11eb-991d-334fd31f0201.png" alt=""></p><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1">\u4E09\u3001\u603B\u7ED3 <a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u5F53<code>Git</code>\u65E0\u6CD5\u81EA\u52A8\u5408\u5E76\u5206\u652F\u65F6\uFF0C\u5C31\u5FC5\u987B\u9996\u5148\u89E3\u51B3\u51B2\u7A81\uFF0C\u89E3\u51B3\u51B2\u7A81\u540E\uFF0C\u518D\u63D0\u4EA4\uFF0C\u5408\u5E76\u5B8C\u6210</p><p>\u89E3\u51B3\u51B2\u7A81\u5C31\u662F\u628A<code>Git</code>\u5408\u5E76\u5931\u8D25\u7684\u6587\u4EF6\u624B\u52A8\u7F16\u8F91\u4E3A\u6211\u4EEC\u5E0C\u671B\u7684\u5185\u5BB9\uFF0C\u518D\u63D0\u4EA4</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://www.liaoxuefeng.com/wiki/896043488029600/900004111093344" target="_blank" rel="noreferrer">https://www.liaoxuefeng.com/wiki/896043488029600/900004111093344</a></li></ul>`,45),i=[a];function l(s,p,n,r,g,m){return c(),t("div",null,i)}const h=e(o,[["render",l]]);export{f as __pageData,h as default};