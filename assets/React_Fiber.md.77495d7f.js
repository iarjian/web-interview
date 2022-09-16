import{_ as s,c as n,o as a,a as l}from"./app.f93e5564.js";const b=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9Fiber\u67B6\u6784\u7684\u7406\u89E3\uFF1F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u95EE\u9898","slug":"\u4E00\u3001\u95EE\u9898","link":"#\u4E00\u3001\u95EE\u9898","children":[]},{"level":2,"title":"\u4E8C\u3001\u662F\u4EC0\u4E48","slug":"\u4E8C\u3001\u662F\u4EC0\u4E48","link":"#\u4E8C\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E09\u3001\u5982\u4F55\u89E3\u51B3","slug":"\u4E09\u3001\u5982\u4F55\u89E3\u51B3","link":"#\u4E09\u3001\u5982\u4F55\u89E3\u51B3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"React/Fiber.md"}'),p={name:"React/Fiber.md"},e=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9fiber\u67B6\u6784\u7684\u7406\u89E3\uFF1F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9Fiber\u67B6\u6784\u7684\u7406\u89E3\uFF1F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9fiber\u67B6\u6784\u7684\u7406\u89E3\uFF1F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/554da6d0-ed24-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u95EE\u9898" tabindex="-1">\u4E00\u3001\u95EE\u9898 <a class="header-anchor" href="#\u4E00\u3001\u95EE\u9898" aria-hidden="true">#</a></h2><p><code>JavaScript </code>\u5F15\u64CE\u548C\u9875\u9762\u6E32\u67D3\u5F15\u64CE\u4E24\u4E2A\u7EBF\u7A0B\u662F\u4E92\u65A5\u7684\uFF0C\u5F53\u5176\u4E2D\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u65F6\uFF0C\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u53EA\u80FD\u6302\u8D77\u7B49\u5F85</p><p>\u5982\u679C <code>JavaScript</code> \u7EBF\u7A0B\u957F\u65F6\u95F4\u5730\u5360\u7528\u4E86\u4E3B\u7EBF\u7A0B\uFF0C\u90A3\u4E48\u6E32\u67D3\u5C42\u9762\u7684\u66F4\u65B0\u5C31\u4E0D\u5F97\u4E0D\u957F\u65F6\u95F4\u5730\u7B49\u5F85\uFF0C\u754C\u9762\u957F\u65F6\u95F4\u4E0D\u66F4\u65B0\uFF0C\u4F1A\u5BFC\u81F4\u9875\u9762\u54CD\u5E94\u5EA6\u53D8\u5DEE\uFF0C\u7528\u6237\u53EF\u80FD\u4F1A\u611F\u89C9\u5230\u5361\u987F</p><p>\u800C\u8FD9\u4E5F\u6B63\u662F <code>React 15</code> \u7684 <code>Stack Reconciler </code>\u6240\u9762\u4E34\u7684\u95EE\u9898\uFF0C\u5F53 <code>React </code>\u5728\u6E32\u67D3\u7EC4\u4EF6\u65F6\uFF0C\u4ECE\u5F00\u59CB\u5230\u6E32\u67D3\u5B8C\u6210\u6574\u4E2A\u8FC7\u7A0B\u662F\u4E00\u6C14\u5475\u6210\u7684\uFF0C\u65E0\u6CD5\u4E2D\u65AD</p><p>\u5982\u679C\u7EC4\u4EF6\u8F83\u5927\uFF0C\u90A3\u4E48<code>js</code>\u7EBF\u7A0B\u4F1A\u4E00\u76F4\u6267\u884C\uFF0C\u7136\u540E\u7B49\u5230\u6574\u68F5<code>VDOM</code>\u6811\u8BA1\u7B97\u5B8C\u6210\u540E\uFF0C\u624D\u4F1A\u4EA4\u7ED9\u6E32\u67D3\u7684\u7EBF\u7A0B</p><p>\u8FD9\u5C31\u4F1A\u5BFC\u81F4\u4E00\u4E9B\u7528\u6237\u4EA4\u4E92\u3001\u52A8\u753B\u7B49\u4EFB\u52A1\u65E0\u6CD5\u7ACB\u5373\u5F97\u5230\u5904\u7406\uFF0C\u5BFC\u81F4\u5361\u987F\u7684\u60C5\u51B5</p><p><img src="https://static.vue-js.com/5eb3a850-ed24-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E8C\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E8C\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E8C\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>React Fiber \u662F Facebook \u82B1\u8D39\u4E24\u5E74\u4F59\u65F6\u95F4\u5BF9 React \u505A\u51FA\u7684\u4E00\u4E2A\u91CD\u5927\u6539\u53D8\u4E0E\u4F18\u5316\uFF0C\u662F\u5BF9 React \u6838\u5FC3\u7B97\u6CD5\u7684\u4E00\u6B21\u91CD\u65B0\u5B9E\u73B0\u3002\u4ECEFacebook\u5728 React Conf 2017 \u4F1A\u8BAE\u4E0A\u786E\u8BA4\uFF0CReact Fiber \u5728React 16 \u7248\u672C\u53D1\u5E03</p><p>\u5728<code>react</code>\u4E2D\uFF0C\u4E3B\u8981\u505A\u4E86\u4EE5\u4E0B\u7684\u64CD\u4F5C\uFF1A</p><ul><li>\u4E3A\u6BCF\u4E2A\u589E\u52A0\u4E86\u4F18\u5148\u7EA7\uFF0C\u4F18\u5148\u7EA7\u9AD8\u7684\u4EFB\u52A1\u53EF\u4EE5\u4E2D\u65AD\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u3002\u7136\u540E\u518D\u91CD\u65B0\uFF0C\u6CE8\u610F\u662F\u91CD\u65B0\u6267\u884C\u4F18\u5148\u7EA7\u4F4E\u7684\u4EFB\u52A1</li><li>\u589E\u52A0\u4E86\u5F02\u6B65\u4EFB\u52A1\uFF0C\u8C03\u7528requestIdleCallback api\uFF0C\u6D4F\u89C8\u5668\u7A7A\u95F2\u7684\u65F6\u5019\u6267\u884C</li><li>dom diff\u6811\u53D8\u6210\u4E86\u94FE\u8868\uFF0C\u4E00\u4E2Adom\u5BF9\u5E94\u4E24\u4E2Afiber\uFF08\u4E00\u4E2A\u94FE\u8868\uFF09\uFF0C\u5BF9\u5E94\u4E24\u4E2A\u961F\u5217\uFF0C\u8FD9\u90FD\u662F\u4E3A\u627E\u5230\u88AB\u4E2D\u65AD\u7684\u4EFB\u52A1\uFF0C\u91CD\u65B0\u6267\u884C</li></ul><p>\u4ECE\u67B6\u6784\u89D2\u5EA6\u6765\u770B\uFF0C<code>Fiber</code> \u662F\u5BF9 <code>React </code>\u6838\u5FC3\u7B97\u6CD5\uFF08\u5373\u8C03\u548C\u8FC7\u7A0B\uFF09\u7684\u91CD\u5199</p><p>\u4ECE\u7F16\u7801\u89D2\u5EA6\u6765\u770B\uFF0C<code>Fiber </code>\u662F <code>React </code>\u5185\u90E8\u6240\u5B9A\u4E49\u7684\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u5B83\u662F <code>Fiber </code>\u6811\u7ED3\u6784\u7684\u8282\u70B9\u5355\u4F4D\uFF0C\u4E5F\u5C31\u662F <code>React 16</code> \u65B0\u67B6\u6784\u4E0B\u7684\u865A\u62DF<code>DOM</code></p><p>\u4E00\u4E2A <code>fiber </code>\u5C31\u662F\u4E00\u4E2A <code>JavaScript </code>\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u5143\u7D20\u7684\u4FE1\u606F\u3001\u8BE5\u5143\u7D20\u7684\u66F4\u65B0\u64CD\u4F5C\u961F\u5217\u3001\u7C7B\u578B\uFF0C\u5176\u6570\u636E\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fiber</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u7528\u4E8E\u6807\u8BB0fiber\u7684WorkTag\u7C7B\u578B\uFF0C\u4E3B\u8981\u8868\u793A\u5F53\u524Dfiber\u4EE3\u8868\u7684\u7EC4\u4EF6\u7C7B\u578B\u5982FunctionComponent\u3001ClassComponent\u7B49</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tag</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WorkTag</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ReactElement\u91CC\u9762\u7684key</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ReactElement.type\uFF0C\u8C03\u7528\`createElement\`\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">elementType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// The resolved function/class/ associated with this fiber.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u8868\u793A\u5F53\u524D\u4EE3\u8868\u7684\u8282\u70B9\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u8868\u793A\u5F53\u524DFiberNode\u5BF9\u5E94\u7684element\u7EC4\u4EF6\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">stateNode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6307\u5411\u4ED6\u5728Fiber\u8282\u70B9\u6811\u4E2D\u7684\`parent\`\uFF0C\u7528\u6765\u5728\u5904\u7406\u5B8C\u8FD9\u4E2A\u8282\u70B9\u4E4B\u540E\u5411\u4E0A\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">return</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fiber</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6307\u5411\u81EA\u5DF1\u7684\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fiber</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6307\u5411\u81EA\u5DF1\u7684\u5144\u5F1F\u7ED3\u6784\uFF0C\u5144\u5F1F\u8282\u70B9\u7684return\u6307\u5411\u540C\u4E00\u4E2A\u7236\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sibling</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fiber</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ref</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> ((</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">handle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mixed</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">_stringRef</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RefObject</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5F53\u524D\u5904\u7406\u8FC7\u7A0B\u4E2D\u7684\u7EC4\u4EF6props\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pendingProps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u4E0A\u4E00\u6B21\u6E32\u67D3\u5B8C\u6210\u4E4B\u540E\u7684props</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">memoizedProps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u8BE5Fiber\u5BF9\u5E94\u7684\u7EC4\u4EF6\u4EA7\u751F\u7684Update\u4F1A\u5B58\u653E\u5728\u8FD9\u4E2A\u961F\u5217\u91CC\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">updateQueue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UpdateQueue</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u4E0A\u4E00\u6B21\u6E32\u67D3\u7684\u65F6\u5019\u7684state</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">memoizedState</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u4E00\u4E2A\u5217\u8868\uFF0C\u5B58\u653E\u8FD9\u4E2AFiber\u4F9D\u8D56\u7684context</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">firstContextDependency</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ContextDependency</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">mixed</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TypeOfMode</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// Effect</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u7528\u6765\u8BB0\u5F55Side Effect</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">effectTag</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SideEffectTag</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5355\u94FE\u8868\u7528\u6765\u5FEB\u901F\u67E5\u627E\u4E0B\u4E00\u4E2Aside effect</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">nextEffect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fiber</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5B50\u6811\u4E2D\u7B2C\u4E00\u4E2Aside effect</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">firstEffect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fiber</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5B50\u6811\u4E2D\u6700\u540E\u4E00\u4E2Aside effect</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lastEffect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fiber</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u4EE3\u8868\u4EFB\u52A1\u5728\u672A\u6765\u7684\u54EA\u4E2A\u65F6\u95F4\u70B9\u5E94\u8BE5\u88AB\u5B8C\u6210\uFF0C\u4E4B\u540E\u7248\u672C\u6539\u540D\u4E3A lanes</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">expirationTime</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExpirationTime</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5FEB\u901F\u786E\u5B9A\u5B50\u6811\u4E2D\u662F\u5426\u6709\u4E0D\u5728\u7B49\u5F85\u7684\u53D8\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">childExpirationTime</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExpirationTime</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// fiber\u7684\u7248\u672C\u6C60\uFF0C\u5373\u8BB0\u5F55fiber\u66F4\u65B0\u8FC7\u7A0B\uFF0C\u4FBF\u4E8E\u6062\u590D</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">alternate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fiber</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h2 id="\u4E09\u3001\u5982\u4F55\u89E3\u51B3" tabindex="-1">\u4E09\u3001\u5982\u4F55\u89E3\u51B3 <a class="header-anchor" href="#\u4E09\u3001\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a></h2><p><code>Fiber</code>\u628A\u6E32\u67D3\u66F4\u65B0\u8FC7\u7A0B\u62C6\u5206\u6210\u591A\u4E2A\u5B50\u4EFB\u52A1\uFF0C\u6BCF\u6B21\u53EA\u505A\u4E00\u5C0F\u90E8\u5206\uFF0C\u505A\u5B8C\u770B\u662F\u5426\u8FD8\u6709\u5269\u4F59\u65F6\u95F4\uFF0C\u5982\u679C\u6709\u7EE7\u7EED\u4E0B\u4E00\u4E2A\u4EFB\u52A1\uFF1B\u5982\u679C\u6CA1\u6709\uFF0C\u6302\u8D77\u5F53\u524D\u4EFB\u52A1\uFF0C\u5C06\u65F6\u95F4\u63A7\u5236\u6743\u4EA4\u7ED9\u4E3B\u7EBF\u7A0B\uFF0C\u7B49\u4E3B\u7EBF\u7A0B\u4E0D\u5FD9\u7684\u65F6\u5019\u5728\u7EE7\u7EED\u6267\u884C</p><p>\u5373\u53EF\u4EE5\u4E2D\u65AD\u4E0E\u6062\u590D\uFF0C\u6062\u590D\u540E\u4E5F\u53EF\u4EE5\u590D\u7528\u4E4B\u524D\u7684\u4E2D\u95F4\u72B6\u6001\uFF0C\u5E76\u7ED9\u4E0D\u540C\u7684\u4EFB\u52A1\u8D4B\u4E88\u4E0D\u540C\u7684\u4F18\u5148\u7EA7\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u4EFB\u52A1\u66F4\u65B0\u5355\u5143\u4E3A <code>React Element</code> \u5BF9\u5E94\u7684 <code>Fiber </code>\u8282\u70B9</p><p>\u5B9E\u73B0\u7684\u4E0A\u8FF0\u65B9\u5F0F\u7684\u662F<code>requestIdleCallback</code>\u65B9\u6CD5</p><p><code>window.requestIdleCallback()</code>\u65B9\u6CD5\u5C06\u5728\u6D4F\u89C8\u5668\u7684\u7A7A\u95F2\u65F6\u6BB5\u5185\u8C03\u7528\u7684\u51FD\u6570\u6392\u961F\u3002\u8FD9\u4F7F\u5F00\u53D1\u8005\u80FD\u591F\u5728\u4E3B\u4E8B\u4EF6\u5FAA\u73AF\u4E0A\u6267\u884C\u540E\u53F0\u548C\u4F4E\u4F18\u5148\u7EA7\u5DE5\u4F5C\uFF0C\u800C\u4E0D\u4F1A\u5F71\u54CD\u5EF6\u8FDF\u5173\u952E\u4E8B\u4EF6\uFF0C\u5982\u52A8\u753B\u548C\u8F93\u5165\u54CD\u5E94</p><p>\u9996\u5148 React \u4E2D\u4EFB\u52A1\u5207\u5272\u4E3A\u591A\u4E2A\u6B65\u9AA4\uFF0C\u5206\u6279\u5B8C\u6210\u3002\u5728\u5B8C\u6210\u4E00\u90E8\u5206\u4EFB\u52A1\u4E4B\u540E\uFF0C\u5C06\u63A7\u5236\u6743\u4EA4\u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C\u8BA9\u6D4F\u89C8\u5668\u6709\u65F6\u95F4\u518D\u8FDB\u884C\u9875\u9762\u7684\u6E32\u67D3\u3002\u7B49\u6D4F\u89C8\u5668\u5FD9\u5B8C\u4E4B\u540E\u6709\u5269\u4F59\u65F6\u95F4\uFF0C\u518D\u7EE7\u7EED\u4E4B\u524D React \u672A\u5B8C\u6210\u7684\u4EFB\u52A1\uFF0C\u662F\u4E00\u79CD\u5408\u4F5C\u5F0F\u8C03\u5EA6\u3002</p><p>\u8BE5\u5B9E\u73B0\u8FC7\u7A0B\u662F\u57FA\u4E8E <code>Fiber </code>\u8282\u70B9\u5B9E\u73B0\uFF0C\u4F5C\u4E3A\u9759\u6001\u7684\u6570\u636E\u7ED3\u6784\u6765\u8BF4\uFF0C\u6BCF\u4E2A <code>Fiber</code> \u8282\u70B9\u5BF9\u5E94\u4E00\u4E2A <code>React element</code>\uFF0C\u4FDD\u5B58\u4E86\u8BE5\u7EC4\u4EF6\u7684\u7C7B\u578B\uFF08\u51FD\u6570\u7EC4\u4EF6/\u7C7B\u7EC4\u4EF6/\u539F\u751F\u7EC4\u4EF6\u7B49\u7B49\uFF09\u3001\u5BF9\u5E94\u7684 DOM \u8282\u70B9\u7B49\u4FE1\u606F\u3002</p><p>\u4F5C\u4E3A\u52A8\u6001\u7684\u5DE5\u4F5C\u5355\u5143\u6765\u8BF4\uFF0C\u6BCF\u4E2A <code>Fiber</code> \u8282\u70B9\u4FDD\u5B58\u4E86\u672C\u6B21\u66F4\u65B0\u4E2D\u8BE5\u7EC4\u4EF6\u6539\u53D8\u7684\u72B6\u6001\u3001\u8981\u6267\u884C\u7684\u5DE5\u4F5C\u3002</p><p>\u6BCF\u4E2A Fiber \u8282\u70B9\u6709\u4E2A\u5BF9\u5E94\u7684 <code>React element</code>\uFF0C\u591A\u4E2A <code>Fiber </code>\u8282\u70B9\u6839\u636E\u5982\u4E0B\u4E09\u4E2A\u5C5E\u6027\u6784\u5EFA\u4E00\u9897\u6811\uFF1A</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// \u6307\u5411\u7236\u7EA7Fiber\u8282\u70B9</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">return </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#676E95;">// \u6307\u5411\u5B50Fiber\u8282\u70B9</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">child </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#676E95;">// \u6307\u5411\u53F3\u8FB9\u7B2C\u4E00\u4E2A\u5144\u5F1FFiber\u8282\u70B9</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">sibling </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u901A\u8FC7\u8FD9\u4E9B\u5C5E\u6027\u5C31\u80FD\u627E\u5230\u4E0B\u4E00\u4E2A\u6267\u884C\u76EE\u6807</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6926432527980691470" target="_blank" rel="noreferrer">https://juejin.cn/post/6926432527980691470</a></li><li><a href="https://zhuanlan.zhihu.com/p/137234573" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/137234573</a></li><li><a href="https://vue3js.cn/interview" target="_blank" rel="noreferrer">https://vue3js.cn/interview</a></li></ul>`,30),o=[e];function c(r,t,F,i,D,y){return a(),n("div",null,o)}const A=s(p,[["render",c]]);export{b as __pageData,A as default};
