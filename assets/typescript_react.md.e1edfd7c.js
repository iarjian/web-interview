import{_ as s,c as n,o as a,a as l}from"./app.f93e5564.js";const A=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5982\u4F55\u5728 React \u9879\u76EE\u4E2D\u5E94\u7528 TypeScript\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u524D\u8A00","slug":"\u4E00\u3001\u524D\u8A00","link":"#\u4E00\u3001\u524D\u8A00","children":[]},{"level":2,"title":"\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F","slug":"\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F","link":"#\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F","children":[{"level":3,"title":"\u65E0\u72B6\u6001\u7EC4\u4EF6","slug":"\u65E0\u72B6\u6001\u7EC4\u4EF6","link":"#\u65E0\u72B6\u6001\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u6709\u72B6\u6001\u7EC4\u4EF6","slug":"\u6709\u72B6\u6001\u7EC4\u4EF6","link":"#\u6709\u72B6\u6001\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u53D7\u63A7\u7EC4\u4EF6","slug":"\u53D7\u63A7\u7EC4\u4EF6","link":"#\u53D7\u63A7\u7EC4\u4EF6","children":[]}]},{"level":2,"title":"\u4E09\u3001\u603B\u7ED3","slug":"\u4E09\u3001\u603B\u7ED3","link":"#\u4E09\u3001\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"typescript/react.md"}'),p={name:"typescript/react.md"},o=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5982\u4F55\u5728-react-\u9879\u76EE\u4E2D\u5E94\u7528-typescript\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5982\u4F55\u5728 React \u9879\u76EE\u4E2D\u5E94\u7528 TypeScript\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5982\u4F55\u5728-react-\u9879\u76EE\u4E2D\u5E94\u7528-typescript\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/a98974e0-13bc-11ec-a752-75723a64e8f5.png" alt=""></p><h2 id="\u4E00\u3001\u524D\u8A00" tabindex="-1">\u4E00\u3001\u524D\u8A00 <a class="header-anchor" href="#\u4E00\u3001\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u5355\u72EC\u7684\u4F7F\u7528 <code>TypeScript</code> \u5E76\u4E0D\u4F1A\u5BFC\u81F4\u5B66\u4E60\u6210\u672C\u5F88\u9AD8\uFF0C\u4F46\u662F\u7EDD\u5927\u90E8\u5206\u524D\u7AEF\u5F00\u53D1\u8005\u7684\u9879\u76EE\u90FD\u662F\u4F9D\u8D56\u4E8E\u6846\u67B6\u7684</p><p>\u4F8B\u5982\u4E0E <code>Vue</code>\u3001<code>React</code> \u8FD9\u4E9B\u6846\u67B6\u7ED3\u5408\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u4F1A\u6709\u4E00\u5B9A\u7684\u95E8\u69DB</p><p>\u4F7F\u7528 <code>TypeScript</code> \u7F16\u5199 <code>React</code> \u4EE3\u7801\uFF0C\u9664\u4E86\u9700\u8981 <code>TypeScript</code> \u8FD9\u4E2A\u5E93\u4E4B\u5916\uFF0C\u8FD8\u9700\u8981\u5B89\u88C5 <code>@types/react</code>\u3001<code>@types/react-dom</code></p><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i @types/react -s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">npm i @types/react-dom -s</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u81F3\u4E8E\u4E0A\u8FF0\u4F7F\u7528 <code>@types</code> \u7684\u5E93\u7684\u539F\u56E0\u5728\u4E8E\uFF0C\u76EE\u524D\u975E\u5E38\u591A\u7684 <code>JavaScript</code> \u5E93\u5E76\u6CA1\u6709\u63D0\u4F9B\u81EA\u5DF1\u5173\u4E8E <code>TypeScript</code> \u7684\u58F0\u660E\u6587\u4EF6</p><p>\u6240\u4EE5\uFF0C<code>ts</code> \u5E76\u4E0D\u77E5\u9053\u8FD9\u4E9B\u5E93\u7684\u7C7B\u578B\u4EE5\u53CA\u5BF9\u5E94\u5BFC\u51FA\u7684\u5185\u5BB9\uFF0C\u8FD9\u91CC <code>@types</code> \u5B9E\u9645\u5C31\u662F\u793E\u533A\u4E2D\u7684 <code>DefinitelyTyped</code> \u5E93\uFF0C\u5B9A\u4E49\u4E86\u76EE\u524D\u5E02\u9762\u4E0A\u7EDD\u5927\u591A\u6570\u7684 <code>JavaScript</code> \u5E93\u7684\u58F0\u660E</p><p>\u6240\u4EE5\u4E0B\u8F7D\u76F8\u5173\u7684 <code>JavaScript</code> \u5BF9\u5E94\u7684 <code>@types</code> \u58F0\u660E\u65F6\uFF0C\u5C31\u80FD\u591F\u4F7F\u7528\u4F7F\u7528\u8BE5\u5E93\u5BF9\u5E94\u7684\u7C7B\u578B\u5B9A\u4E49</p><h2 id="\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F" tabindex="-1">\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F <a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u5728\u7F16\u5199 <code>React</code> \u9879\u76EE\u7684\u65F6\u5019\uFF0C\u6700\u5E38\u89C1\u7684\u4F7F\u7528\u7684\u7EC4\u4EF6\u5C31\u662F\uFF1A</p><ul><li>\u65E0\u72B6\u6001\u7EC4\u4EF6</li><li>\u6709\u72B6\u6001\u7EC4\u4EF6</li><li>\u53D7\u63A7\u7EC4\u4EF6</li></ul><h3 id="\u65E0\u72B6\u6001\u7EC4\u4EF6" tabindex="-1">\u65E0\u72B6\u6001\u7EC4\u4EF6 <a class="header-anchor" href="#\u65E0\u72B6\u6001\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u4E3B\u8981\u4F5C\u7528\u662F\u7528\u4E8E\u5C55\u793A <code>UI</code>\uFF0C\u5982\u679C\u4F7F\u7528 <code>js</code> \u58F0\u660E\uFF0C\u5219\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">React</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Logo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">logo</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">className</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">alt</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">logo</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">className</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">alt</span><span style="color:#89DDFF;">} /&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4F46\u8FD9\u65F6\u5019 <code>ts</code> \u4F1A\u51FA\u73B0\u62A5\u9519\u63D0\u793A\uFF0C\u539F\u56E0\u5728\u4E8E\u6CA1\u6709\u5B9A\u4E49 <code>porps</code> \u7C7B\u578B\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>interface</code> \u63A5\u53E3\u53BB\u5B9A\u4E49 <code>porps</code> \u5373\u53EF\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-tsx line-numbers-mode"><button class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">React</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">logo</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">className</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">alt</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Logo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IProps</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">logo</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">className</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">alt</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">logo</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">className</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">alt</span><span style="color:#89DDFF;">} /&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4F46\u662F\u6211\u4EEC\u90FD\u77E5\u9053 <code>props</code> \u91CC\u9762\u5B58\u5728 <code>children</code> \u5C5E\u6027\uFF0C\u6211\u4EEC\u4E0D\u53EF\u80FD\u6BCF\u4E2A <code>porps</code> \u63A5\u53E3\u91CC\u9762\u5B9A\u4E49\u591A\u4E00\u4E2A <code>children</code>\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">logo</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">className</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">alt</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReactNode</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u66F4\u52A0\u89C4\u8303\u7684\u5199\u6CD5\u662F\u4F7F\u7528 <code>React</code> \u91CC\u9762\u5B9A\u4E49\u597D\u7684 <code>FC</code> \u5C5E\u6027\uFF0C\u91CC\u9762\u5DF2\u7ECF\u5B9A\u4E49\u597D <code>children</code> \u7C7B\u578B\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-tsx line-numbers-mode"><button class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Logo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">FC</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IProps</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">logo</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">className</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">alt</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">logo</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">className</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">alt</span><span style="color:#89DDFF;">} /&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p>React.FC \u663E\u5F0F\u5730\u5B9A\u4E49\u4E86\u8FD4\u56DE\u7C7B\u578B\uFF0C\u5176\u4ED6\u65B9\u5F0F\u662F\u9690\u5F0F\u63A8\u5BFC\u7684</p></li><li><p>React.FC \u5BF9\u9759\u6001\u5C5E\u6027\uFF1AdisplayName\u3001propTypes\u3001defaultProps \u63D0\u4F9B\u4E86\u7C7B\u578B\u68C0\u67E5\u548C\u81EA\u52A8\u8865\u5168</p></li><li><p>React.FC \u4E3A children \u63D0\u4F9B\u4E86\u9690\u5F0F\u7684\u7C7B\u578B\uFF08ReactElement | null\uFF09</p></li></ul><h3 id="\u6709\u72B6\u6001\u7EC4\u4EF6" tabindex="-1">\u6709\u72B6\u6001\u7EC4\u4EF6 <a class="header-anchor" href="#\u6709\u72B6\u6001\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u662F\u4E00\u4E2A\u7C7B\u7EC4\u4EF6\u4E14\u5B58\u5728 <code>props</code> \u548C <code>state</code> \u5C5E\u6027</p><p>\u5982\u679C\u4F7F\u7528 <code>TypeScript</code> \u58F0\u660E\u5219\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-tsx line-numbers-mode"><button class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">React</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IState</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IProps</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IState</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello world</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u4E0A\u8FF0\u901A\u8FC7\u6CDB\u578B\u5BF9 <code>props</code>\u3001<code>state</code> \u8FDB\u884C\u7C7B\u578B\u5B9A\u4E49\uFF0C\u7136\u540E\u5728\u4F7F\u7528\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u5728\u7F16\u8BD1\u5668\u4E2D\u83B7\u53D6\u66F4\u597D\u7684\u667A\u80FD\u63D0\u793A</p><p>\u5173\u4E8E <code>Component</code> \u6CDB\u578B\u7C7B\u7684\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B React \u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6 <code>node_modules/@types/React/index.d.ts</code>\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">P</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">S</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Readonly</span><span style="color:#89DDFF;">&lt;{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReactNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Readonly</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">P</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Readonly</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">S</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4ECE\u4E0A\u8FF0\u53EF\u4EE5\u770B\u5230\uFF0C<code>state</code> \u5C5E\u6027\u4E5F\u5B9A\u4E49\u4E86\u53EF\u8BFB\u7C7B\u578B\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u9632\u6B62\u76F4\u63A5\u8C03\u7528 <code>this.state</code> \u66F4\u65B0\u72B6\u6001</p><h3 id="\u53D7\u63A7\u7EC4\u4EF6" tabindex="-1">\u53D7\u63A7\u7EC4\u4EF6 <a class="header-anchor" href="#\u53D7\u63A7\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u53D7\u63A7\u7EC4\u4EF6\u7684\u7279\u6027\u5728\u4E8E\u5143\u7D20\u7684\u5185\u5BB9\u901A\u8FC7\u7EC4\u4EF6\u7684\u72B6\u6001 <code>state</code> \u8FDB\u884C\u63A7\u5236</p><p>\u7531\u4E8E\u7EC4\u4EF6\u5185\u90E8\u7684\u4E8B\u4EF6\u662F\u5408\u6210\u4E8B\u4EF6\uFF0C\u4E0D\u7B49\u540C\u4E8E\u539F\u751F\u4E8B\u4EF6\uFF0C</p><p>\u4F8B\u5982\u4E00\u4E2A <code>input</code> \u7EC4\u4EF6\u4FEE\u6539\u5185\u90E8\u7684\u72B6\u6001\uFF0C\u5E38\u89C1\u7684\u5B9A\u4E49\u7684\u65F6\u5019\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">private </span><span style="color:#82AAFF;">updateValue</span><span style="color:#A6ACCD;">(e: React</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ChangeEvent</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">HTMLInputElement</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> itemText</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5E38\u7528 <code>Event</code> \u4E8B\u4EF6\u5BF9\u8C61\u7C7B\u578B\uFF1A</p><ul><li>ClipboardEvent&lt;T = Element&gt; \u526A\u8D34\u677F\u4E8B\u4EF6\u5BF9\u8C61</li><li>DragEvent&lt;T = Element&gt; \u62D6\u62FD\u4E8B\u4EF6\u5BF9\u8C61</li><li>ChangeEvent&lt;T = Element&gt; Change \u4E8B\u4EF6\u5BF9\u8C61</li><li>KeyboardEvent&lt;T = Element&gt; \u952E\u76D8\u4E8B\u4EF6\u5BF9\u8C61</li><li>MouseEvent&lt;T = Element&gt; \u9F20\u6807\u4E8B\u4EF6\u5BF9\u8C61</li><li>TouchEvent&lt;T = Element&gt; \u89E6\u6478\u4E8B\u4EF6\u5BF9\u8C61</li><li>WheelEvent&lt;T = Element&gt; \u6EDA\u8F6E\u4E8B\u4EF6\u5BF9\u8C61</li><li>AnimationEvent&lt;T = Element&gt; \u52A8\u753B\u4E8B\u4EF6\u5BF9\u8C61</li><li>TransitionEvent&lt;T = Element&gt; \u8FC7\u6E21\u4E8B\u4EF6\u5BF9\u8C61</li></ul><p><code>T</code> \u63A5\u6536\u4E00\u4E2A <code>DOM</code> \u5143\u7D20\u7C7B\u578B</p><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1">\u4E09\u3001\u603B\u7ED3 <a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u4E0A\u8FF0\u53EA\u662F\u7B80\u5355\u7684\u5728 <code>React</code> \u9879\u76EE\u4F7F\u7528 <code>TypeScript</code>\uFF0C\u4F46\u5728\u7F16\u5199 <code>React</code> \u9879\u76EE\u7684\u65F6\u5019\uFF0C\u8FD8\u5B58\u5728 <code>hooks</code>\u3001\u9ED8\u8BA4\u53C2\u6570\u3001\u4EE5\u53CA <code>store</code> \u7B49\u7B49......</p><p><code>TypeScript</code> \u5728\u6846\u67B6\u4E2D\u4F7F\u7528\u7684\u5B66\u4E60\u6210\u672C\u76F8\u5BF9\u4F1A\u66F4\u9AD8\uFF0C\u9700\u8981\u4E0D\u65AD\u7F16\u5199\u624D\u80FD\u719F\u7EC3</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6952696734078369828" target="_blank" rel="noreferrer">https://juejin.cn/post/6952696734078369828</a></li><li><a href="https://juejin.cn/post/6844903684422254606" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903684422254606</a></li></ul>`,44),e=[o];function c(t,r,F,D,y,i){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
