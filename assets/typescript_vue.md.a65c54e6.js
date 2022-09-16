import{_ as s,c as n,o as a,a as l}from"./app.f93e5564.js";const A=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5982\u4F55\u5728Vue\u9879\u76EE\u4E2D\u5E94\u7528TypeScript\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u524D\u8A00","slug":"\u4E00\u3001\u524D\u8A00","link":"#\u4E00\u3001\u524D\u8A00","children":[]},{"level":2,"title":"\u4E8C\u3001\u4F7F\u7528","slug":"\u4E8C\u3001\u4F7F\u7528","link":"#\u4E8C\u3001\u4F7F\u7528","children":[{"level":3,"title":"@Component","slug":"component","link":"#component","children":[]},{"level":3,"title":"computed\u3001data\u3001methods","slug":"computed\u3001data\u3001methods","link":"#computed\u3001data\u3001methods","children":[]},{"level":3,"title":"@props","slug":"props","link":"#props","children":[]},{"level":3,"title":"@watch","slug":"watch","link":"#watch","children":[]},{"level":3,"title":"@emit","slug":"emit","link":"#emit","children":[]}]},{"level":2,"title":"\u4E09 \u3001\u603B\u7ED3","slug":"\u4E09-\u3001\u603B\u7ED3","link":"#\u4E09-\u3001\u603B\u7ED3","children":[]}],"relativePath":"typescript/vue.md"}'),p={name:"typescript/vue.md"},e=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5982\u4F55\u5728vue\u9879\u76EE\u4E2D\u5E94\u7528typescript\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5982\u4F55\u5728Vue\u9879\u76EE\u4E2D\u5E94\u7528TypeScript\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5982\u4F55\u5728vue\u9879\u76EE\u4E2D\u5E94\u7528typescript\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/cc658c10-1565-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="\u4E00\u3001\u524D\u8A00" tabindex="-1">\u4E00\u3001\u524D\u8A00 <a class="header-anchor" href="#\u4E00\u3001\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u4E0Elink\u7C7B\u4F3C</p><p>\u5728<code>VUE</code>\u9879\u76EE\u4E2D\u5E94\u7528<code>typescript</code>\uFF0C\u6211\u4EEC\u9700\u8981\u5F15\u5165\u4E00\u4E2A\u5E93<code>vue-property-decorator</code>\uFF0C</p><p>\u5176\u662F\u57FA\u4E8E<code>vue-class-component</code>\u5E93\u800C\u6765\uFF0C\u8FD9\u4E2A\u5E93<code>vue</code>\u5B98\u65B9\u63A8\u51FA\u7684\u4E00\u4E2A\u652F\u6301\u4F7F\u7528<code>class</code>\u65B9\u5F0F\u6765\u5F00\u53D1<code>vue</code>\u5355\u6587\u4EF6\u7EC4\u4EF6\u7684\u5E93</p><p>\u4E3B\u8981\u7684\u529F\u80FD\u5982\u4E0B\uFF1A</p><ul><li>methods \u53EF\u4EE5\u76F4\u63A5\u58F0\u660E\u4E3A\u7C7B\u7684\u6210\u5458\u65B9\u6CD5</li><li>\u8BA1\u7B97\u5C5E\u6027\u53EF\u4EE5\u88AB\u58F0\u660E\u4E3A\u7C7B\u7684\u5C5E\u6027\u8BBF\u95EE\u5668</li><li>\u521D\u59CB\u5316\u7684 data \u53EF\u4EE5\u88AB\u58F0\u660E\u4E3A\u7C7B\u5C5E\u6027</li><li>data\u3001render \u4EE5\u53CA\u6240\u6709\u7684 Vue \u751F\u547D\u5468\u671F\u94A9\u5B50\u53EF\u4EE5\u76F4\u63A5\u4F5C\u4E3A\u7C7B\u7684\u6210\u5458\u65B9\u6CD5</li><li>\u6240\u6709\u5176\u4ED6\u5C5E\u6027\uFF0C\u9700\u8981\u653E\u5728\u88C5\u9970\u5668\u4E2D</li></ul><h2 id="\u4E8C\u3001\u4F7F\u7528" tabindex="-1">\u4E8C\u3001\u4F7F\u7528 <a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528" aria-hidden="true">#</a></h2><p>vue-property-decorator \u4E3B\u8981\u63D0\u4F9B\u4E86\u591A\u4E2A\u88C5\u9970\u5668\u548C\u4E00\u4E2A\u51FD\u6570:</p><ul><li>@Prop</li><li>@PropSync</li><li>@Model</li><li>@Watch</li><li>@Provide</li><li>@Inject</li><li>@ProvideReactive</li><li>@InjectReactive</li><li>@Emit</li><li>@Ref</li><li>@Component (\u7531 vue-class-component \u63D0\u4F9B)</li><li>Mixins (\u7531 vue-class-component \u63D0\u4F9B)</li></ul><h3 id="component" tabindex="-1">@Component <a class="header-anchor" href="#component" aria-hidden="true">#</a></h3><p><code>Component</code>\u88C5\u9970\u5668\u5B83\u6CE8\u660E\u4E86\u6B64\u7C7B\u4E3A\u4E00\u4E2A<code>Vue</code>\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u5373\u4F7F\u6CA1\u6709\u8BBE\u7F6E\u9009\u9879\u4E5F\u4E0D\u80FD\u7701\u7565</p><p>\u5982\u679C\u9700\u8981\u5B9A\u4E49\u6BD4\u5982 <code>name</code>\u3001<code>components</code>\u3001<code>filters</code>\u3001<code>directives</code>\u4EE5\u53CA\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u5C31\u53EF\u4EE5\u5728<code>Component</code>\u88C5\u9970\u5668\u4E2D\u5B9A\u4E49\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-vue line-numbers-mode"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">import {Component,Vue} from &#39;vue-property-decorator&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {componentA,componentB} from &#39;@/components&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> @Component({</span></span>
<span class="line"><span style="color:#A6ACCD;">    components:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        componentA,</span></span>
<span class="line"><span style="color:#A6ACCD;">        componentB,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    directives: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        focus: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u6307\u4EE4\u7684\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">            inserted: function (el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                el.focus()</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class YourCompoent extends Vue{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="computed\u3001data\u3001methods" tabindex="-1">computed\u3001data\u3001methods <a class="header-anchor" href="#computed\u3001data\u3001methods" aria-hidden="true">#</a></h3><p>\u8FD9\u91CC\u53D6\u6D88\u4E86\u7EC4\u4EF6\u7684data\u548Cmethods\u5C5E\u6027\uFF0C\u4EE5\u5F80data\u8FD4\u56DE\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u3001methods\u4E2D\u7684\u65B9\u6CD5\u9700\u8981\u76F4\u63A5\u5B9A\u4E49\u5728Class\u4E2D\uFF0C\u5F53\u505A\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">Component</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloDecorator</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vue</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u7C7B\u5C5E\u6027\u76F8\u5F53\u4E8E\u4EE5\u524D\u7684 data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">add</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u7C7B\u65B9\u6CD5\u5C31\u662F\u4EE5\u524D\u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u83B7\u53D6\u8BA1\u7B97\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">total</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u8BBE\u7F6E\u8BA1\u7B97\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">total</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">param</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">param</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="props" tabindex="-1">@props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u63A5\u6536\u5C5E\u6027\u7684\u88C5\u9970\u5668\uFF0C\u5982\u4E0B\u4F7F\u7528\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Component</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Prop</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> vue-property-decorator</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">Component</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">YourComponent</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vue</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Prop</span><span style="color:#A6ACCD;">(String)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">propA</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Prop</span><span style="color:#A6ACCD;">([String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Number])</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">propB</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Prop</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// type: [String , Number]</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u4E00\u822C\u4E3AString\u6216Number</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">//\u5982\u679C\u662F\u5BF9\u8C61\u6216\u6570\u7EC4\u7684\u8BDD\u3002\u9ED8\u8BA4\u503C\u4ECE\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\u4E2D\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// defatult: () =&gt; {</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">//     return [&#39;a&#39;,&#39;b&#39;]</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// }</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#82AAFF;">validator</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">InProcess</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Settled</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        ]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">propC</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="watch" tabindex="-1">@watch <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h3><p>\u5B9E\u9645\u5C31\u662F<code>Vue</code>\u4E2D\u7684\u76D1\u542C\u5668\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-vue line-numbers-mode"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Vue, Component, Watch } from &#39;vue-property-decorator&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">@Component</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class YourComponent extends Vue {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @Watch(&#39;child&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  onChildChanged(val: string, oldVal: string) {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  @Watch(&#39;person&#39;, { immediate: true, deep: true })</span></span>
<span class="line"><span style="color:#A6ACCD;">  onPersonChanged1(val: Person, oldVal: Person) {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  @Watch(&#39;person&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  onPersonChanged2(val: Person, oldVal: Person) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="emit" tabindex="-1">@emit <a class="header-anchor" href="#emit" aria-hidden="true">#</a></h3><p><code>vue-property-decorator</code> \u63D0\u4F9B\u7684 <code>@Emit</code> \u88C5\u9970\u5668\u5C31\u662F\u4EE3\u66FF<code>Vue </code>\u4E2D\u7684\u4E8B\u4EF6\u7684\u89E6\u53D1<code>$emit</code>\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-TS line-numbers-mode"><button class="copy"></button><span class="lang">TS</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Component</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Emit</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-property-decorator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Some</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">emit-todo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">emitTodo</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Emit</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">emitTodo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u4E09-\u3001\u603B\u7ED3" tabindex="-1">\u4E09 \u3001\u603B\u7ED3 <a class="header-anchor" href="#\u4E09-\u3001\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u770B\u5230\u4E0A\u8FF0<code>typescript</code>\u7248\u672C\u7684<code>vue class</code>\u7684\u8BED\u6CD5\u4E0E\u5E73\u65F6<code>javascript</code>\u7248\u672C\u4F7F\u7528\u8D77\u6765\u8FD8\u662F\u6709\u5F88\u5927\u7684\u4E0D\u540C\uFF0C\u591A\u5904\u7528\u5230<code>class</code>\u4E0E\u88C5\u9970\u5668\uFF0C\u4F46\u5B9E\u9645\u4E0A\u672C\u8D28\u662F\u4E00\u81F4\u7684\uFF0C\u53EA\u6709\u4E0D\u65AD\u7F16\u5199\u624D\u4F1A\u5F97\u5FC3\u5E94\u624B</p>`,29),o=[e];function r(c,t,i,y,D,F){return a(),n("div",null,o)}const u=s(p,[["render",r]]);export{A as __pageData,u as default};