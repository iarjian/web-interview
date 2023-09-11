import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.2eafe199.js";const b=JSON.parse('{"title":"面试官：Vue组件之间的通信方式都有哪些？","description":"","frontmatter":{},"headers":[],"relativePath":"vue/communication.md","filePath":"vue/communication.md","lastUpdated":1694416341000}'),p={name:"vue/communication.md"},e=l(`<h1 id="面试官-vue组件之间的通信方式都有哪些" tabindex="-1">面试官：Vue组件之间的通信方式都有哪些？ <a class="header-anchor" href="#面试官-vue组件之间的通信方式都有哪些" aria-label="Permalink to &quot;面试官：Vue组件之间的通信方式都有哪些？&quot;">​</a></h1><p><img src="https://static.vue-js.com/7de50d20-3aca-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、组件间通信的概念" tabindex="-1">一、组件间通信的概念 <a class="header-anchor" href="#一、组件间通信的概念" aria-label="Permalink to &quot;一、组件间通信的概念&quot;">​</a></h2><p>开始之前，我们把<strong>组件间通信</strong>这个词进行拆分</p><ul><li>组件</li><li>通信</li></ul><p>都知道组件是<code>vue</code>最强大的功能之一，<code>vue</code>中每一个<code>.vue</code>我们都可以视之为一个组件通信指的是发送者通过某种媒体以某种格式来传递信息到收信者以达到某个目的。广义上，任何信息的交通都是通信<strong>组件间通信</strong>即指组件(<code>.vue</code>)通过某种方式来传递信息以达到某个目的举个栗子我们在使用<code>UI</code>框架中的<code>table</code>组件，可能会往<code>table</code>组件中传入某些数据，这个本质就形成了组件之间的通信</p><h2 id="二、组件间通信解决了什么" tabindex="-1">二、组件间通信解决了什么 <a class="header-anchor" href="#二、组件间通信解决了什么" aria-label="Permalink to &quot;二、组件间通信解决了什么&quot;">​</a></h2><p>在古代，人们通过驿站、飞鸽传书、烽火报警、符号、语言、眼神、触碰等方式进行信息传递，到了今天，随着科技水平的飞速发展，通信基本完全利用有线或无线电完成，相继出现了有线电话、固定电话、无线电话、手机、互联网甚至视频电话等各种通信方式从上面这段话，我们可以看到通信的本质是信息同步，共享回到<code>vue</code>中，每个组件之间的都有独自的作用域，组件间的数据是无法共享的但实际开发工作中我们常常需要让组件之间共享数据，这也是组件通信的目的要让它们互相之间能进行通讯，这样才能构成一个有机的完整系统</p><h2 id="二、组件间通信的分类" tabindex="-1">二、组件间通信的分类 <a class="header-anchor" href="#二、组件间通信的分类" aria-label="Permalink to &quot;二、组件间通信的分类&quot;">​</a></h2><p>组件间通信的分类可以分成以下</p><ul><li>父子组件之间的通信</li><li>兄弟组件之间的通信</li><li>祖孙与后代组件之间的通信</li><li>非关系组件间之间的通信</li></ul><p>关系图:</p><p><img src="https://static.vue-js.com/85b92400-3aca-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="三、组件间通信的方案" tabindex="-1">三、组件间通信的方案 <a class="header-anchor" href="#三、组件间通信的方案" aria-label="Permalink to &quot;三、组件间通信的方案&quot;">​</a></h2><p>整理<code>vue</code>中8种常规的通信方案</p><ol><li>通过 props 传递</li><li>通过 $emit 触发自定义事件</li><li>使用 ref</li><li>EventBus</li><li>$parent 或$root</li><li>attrs 与 listeners</li><li>Provide 与 Inject</li><li>Vuex</li></ol><h3 id="props传递数据" tabindex="-1">props传递数据 <a class="header-anchor" href="#props传递数据" aria-label="Permalink to &quot;props传递数据&quot;">​</a></h3><p><img src="https://static.vue-js.com/8f80a670-3aca-11eb-ab90-d9ae814b240d.png" alt=""></p><ul><li>适用场景：父组件传递数据给子组件</li><li>子组件设置<code>props</code>属性，定义接收父组件传递过来的参数</li><li>父组件在使用子组件标签中通过字面量来传递值</li></ul><p><code>Children.vue</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">props</span><span style="color:#E1E4E8;">:{  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 字符串形式  </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">:String </span><span style="color:#6A737D;">// 接收的类型参数  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 对象形式  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">age</span><span style="color:#E1E4E8;">:{    </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">:Number, </span><span style="color:#6A737D;">// 接收的类型为数值  </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">defaule</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 默认值为18  </span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// age属性必须传递  </span></span>
<span class="line"><span style="color:#E1E4E8;">    }  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">props</span><span style="color:#24292E;">:{  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 字符串形式  </span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">:String </span><span style="color:#6A737D;">// 接收的类型参数  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 对象形式  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">age</span><span style="color:#24292E;">:{    </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">:Number, </span><span style="color:#6A737D;">// 接收的类型为数值  </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">defaule</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 默认值为18  </span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// age属性必须传递  </span></span>
<span class="line"><span style="color:#24292E;">    }  </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>Father.vue</code>组件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Children</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;jack&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">age</span><span style="color:#FDAEB7;font-style:italic;">=18</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Children</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;jack&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">age</span><span style="color:#B31D28;font-style:italic;">=18</span><span style="color:#24292E;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="emit-触发自定义事件" tabindex="-1">$emit 触发自定义事件 <a class="header-anchor" href="#emit-触发自定义事件" aria-label="Permalink to &quot;\\$emit 触发自定义事件&quot;">​</a></h3><ul><li>适用场景：子组件传递数据给父组件</li><li>子组件通过<code>$emit触发</code>自定义事件，<code>$emit</code>第二个参数为传递的数值</li><li>父组件绑定监听器获取到子组件传递过来的参数</li></ul><p><code>Chilfen.vue</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;add&#39;</span><span style="color:#E1E4E8;">, good)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;add&#39;</span><span style="color:#24292E;">, good)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>Father.vue</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Children</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@add=&quot;cartAdd($event)&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Children</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@add=&quot;cartAdd($event)&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;ref&quot;">​</a></h3><ul><li>父组件在使用子组件的时候设置<code>ref</code></li><li>父组件通过设置子组件<code>ref</code>来获取数据</li></ul><p>父组件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Children</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;"> /&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$refs.foo  </span><span style="color:#6A737D;">// 获取子组件实例，通过子组件实例我们就能拿到对应的数据</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Children</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;"> /&gt;  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$refs.foo  </span><span style="color:#6A737D;">// 获取子组件实例，通过子组件实例我们就能拿到对应的数据</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="eventbus" tabindex="-1">EventBus <a class="header-anchor" href="#eventbus" aria-label="Permalink to &quot;EventBus&quot;">​</a></h3><ul><li>使用场景：兄弟组件传值</li><li>创建一个中央事件总线<code>EventBus</code></li><li>兄弟组件通过<code>$emit</code>触发自定义事件，<code>$emit</code>第二个参数为传递的数值</li><li>另一个兄弟组件通过<code>$on</code>监听自定义事件</li></ul><p><code>Bus.js</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 创建一个中央时间总线类  </span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bus</span><span style="color:#E1E4E8;"> {  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() {  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callbacks </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};   </span><span style="color:#6A737D;">// 存放事件的名字  </span></span>
<span class="line"><span style="color:#E1E4E8;">  }  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">$on</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) {  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callbacks[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callbacks[name] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callbacks[name].</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(fn);  </span></span>
<span class="line"><span style="color:#E1E4E8;">  }  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callbacks[name]) {  </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callbacks[name].</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">cb</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cb</span><span style="color:#E1E4E8;">(args));  </span></span>
<span class="line"><span style="color:#E1E4E8;">    }  </span></span>
<span class="line"><span style="color:#E1E4E8;">  }  </span></span>
<span class="line"><span style="color:#E1E4E8;">}  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">// main.js  </span></span>
<span class="line"><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.$bus </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bus</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 将$bus挂载到vue实例的原型上  </span></span>
<span class="line"><span style="color:#6A737D;">// 另一种方式  </span></span>
<span class="line"><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.$bus </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// Vue已经实现了Bus的功能</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 创建一个中央时间总线类  </span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Bus</span><span style="color:#24292E;"> {  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() {  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.callbacks </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};   </span><span style="color:#6A737D;">// 存放事件的名字  </span></span>
<span class="line"><span style="color:#24292E;">  }  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">$on</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.callbacks[name] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.callbacks[name] </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> [];  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.callbacks[name].</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(fn);  </span></span>
<span class="line"><span style="color:#24292E;">  }  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.callbacks[name]) {  </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.callbacks[name].</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">cb</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cb</span><span style="color:#24292E;">(args));  </span></span>
<span class="line"><span style="color:#24292E;">    }  </span></span>
<span class="line"><span style="color:#24292E;">  }  </span></span>
<span class="line"><span style="color:#24292E;">}  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#6A737D;">// main.js  </span></span>
<span class="line"><span style="color:#005CC5;">Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.$bus </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Bus</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 将$bus挂载到vue实例的原型上  </span></span>
<span class="line"><span style="color:#6A737D;">// 另一种方式  </span></span>
<span class="line"><span style="color:#005CC5;">Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.$bus </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// Vue已经实现了Bus的功能</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><code>Children1.vue</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$bus.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$bus.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>Children2.vue</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$bus.</span><span style="color:#B392F0;">$on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handle)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$bus.</span><span style="color:#6F42C1;">$on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.handle)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="parent-或-root" tabindex="-1">$parent 或$ root <a class="header-anchor" href="#parent-或-root" aria-label="Permalink to &quot;$parent 或$ root&quot;">​</a></h3><ul><li>通过共同祖辈<code>$parent</code>或者<code>$root</code>搭建通信桥连</li></ul><p>兄弟组件</p><p><code>this.$parent.on(&#39;add&#39;,this.add) </code></p><p>另一个兄弟组件</p><p><code>this.$parent.emit(&#39;add&#39;) </code></p><h3 id="attrs-与-listeners" tabindex="-1">$attrs 与$ listeners <a class="header-anchor" href="#attrs-与-listeners" aria-label="Permalink to &quot;$attrs  与$ listeners&quot;">​</a></h3><ul><li>适用场景：祖先传递数据给子孙</li><li>设置批量向下传属性<code>$attrs</code>和 <code>$listeners</code></li><li>包含了父级作用域中不作为 <code>prop</code> 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。</li><li>可以通过 <code>v-bind=&quot;$attrs&quot;</code> 传⼊内部组件</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// child：并未在props中声明foo  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;{{$attrs.foo}}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">// parent  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">HelloWorld</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// child：并未在props中声明foo  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;{{$attrs.foo}}&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#6A737D;">// parent  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">HelloWorld</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 给Grandson隔代传值，communication/index.vue  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Child2</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">msg</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;lalala&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@some-event=&quot;onSomeEvent&quot;&gt;&lt;/Child2&gt;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">// Child2做展开  </span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;Grandson</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-bind</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;$attrs&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-on</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;$listeners&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#79B8FF;">Grandson</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">// Grandson使⽤  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;$emit(&#39;some-event&#39;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;msg from grandson&#39;</span><span style="color:#FDAEB7;font-style:italic;">)&quot;&gt;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">{{msg}}  </span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 给Grandson隔代传值，communication/index.vue  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Child2</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">msg</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;lalala&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@some-event=&quot;onSomeEvent&quot;&gt;&lt;/Child2&gt;</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#6A737D;">// Child2做展开  </span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;Grandson</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-bind</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;$attrs&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-on</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;$listeners&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#005CC5;">Grandson</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#6A737D;">// Grandson使⽤  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;$emit(&#39;some-event&#39;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;msg from grandson&#39;</span><span style="color:#B31D28;font-style:italic;">)&quot;&gt;</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">{{msg}}  </span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="provide-与-inject" tabindex="-1">provide 与 inject <a class="header-anchor" href="#provide-与-inject" aria-label="Permalink to &quot;provide 与 inject&quot;">​</a></h3><ul><li>在祖先组件定义<code>provide</code>属性，返回传递的值</li><li>在后代组件通过<code>inject</code>接收组件传递过来的值</li></ul><p>祖先组件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">provide</span><span style="color:#E1E4E8;">(){  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {  </span></span>
<span class="line"><span style="color:#E1E4E8;">        foo:</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    }  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">provide</span><span style="color:#24292E;">(){  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {  </span></span>
<span class="line"><span style="color:#24292E;">        foo:</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    }  </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>后代组件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">inject</span><span style="color:#E1E4E8;">:[</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 获取到祖先组件传递过来的值</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">inject</span><span style="color:#24292E;">:[</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// 获取到祖先组件传递过来的值</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="vuex" tabindex="-1"><code>vuex</code> <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;\`vuex\`&quot;">​</a></h3><ul><li><p>适用场景: 复杂关系的组件数据传递</p></li><li><p><code>Vuex</code>作用相当于一个用来存储共享变量的容器 <img src="https://static.vue-js.com/fa207cd0-3aca-11eb-ab90-d9ae814b240d.png" alt=""></p></li><li><p><code>state</code>用来存放共享变量的地方</p></li><li><p><code>getter</code>，可以增加一个<code>getter</code>派生状态，(相当于<code>store</code>中的计算属性），用来获得共享变量的值</p></li><li><p><code>mutations</code>用来存放修改<code>state</code>的方法。</p></li><li><p><code>actions</code>也是用来存放修改state的方法，不过<code>action</code>是在<code>mutations</code>的基础上进行。常用来做一些异步操作</p></li></ul><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><ul><li>父子关系的组件数据传递选择 <code>props</code>  与 <code>$emit</code>进行传递，也可选择<code>ref</code></li><li>兄弟关系的组件数据传递可选择<code>$bus</code>，其次可以选择<code>$parent</code>进行传递</li><li>祖先与后代组件数据传递可选择<code>attrs</code>与<code>listeners</code>或者 <code>Provide</code>与 <code>Inject</code></li><li>复杂关系的组件数据传递可以通过<code>vuex</code>存放共享的变量</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6844903990052782094#heading-0" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903990052782094#heading-0</a></li><li><a href="https://zh.wikipedia.org/wiki/%5C%E9%5C%80%5C%9A%5C%E4%5C%BF%5C%A1" target="_blank" rel="noreferrer">https://zh.wikipedia.org/wiki/\\�\\�\\�\\�\\�\\�</a></li><li><a href="https://vue3js.cn/docs/zh" target="_blank" rel="noreferrer">https://vue3js.cn/docs/zh</a></li></ul><p>面试官VUE系列总进度：5／33</p><p><a href="http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&amp;mid=2247484101&amp;idx=1&amp;sn=83b0983f0fca7d7c556e4cb0bff8c9b8&amp;chksm=fc10c093cb674985ef3bd2966f66fc28c5eb70b0037e4be1af4bf54fb6fa9571985abd31d52f&amp;scene=21#wechat_redirect" target="_blank" rel="noreferrer">面试官：说说你对vue的理解?</a></p><p><a href="http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&amp;mid=2247484119&amp;idx=1&amp;sn=d171b28a00d42549d279498944a98519&amp;chksm=fc10c081cb6749976814aaeda6a6433db418223cec57edda7e15b9e5a0ca69ad549655639c61&amp;scene=21#wechat_redirect" target="_blank" rel="noreferrer">面试官：说说你对SPA（单页应用）的理解?</a></p><p><a href="http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&amp;mid=2247484167&amp;idx=1&amp;sn=7b00b4333ab2722f25f12586b70667ca&amp;chksm=fc10c151cb6748476008dab2f4e6c6264f5d19678305955c85cec1b619e56e8f7457b7357fb9&amp;scene=21#wechat_redirect" target="_blank" rel="noreferrer">面试官：说说你对双向绑定的理解?</a></p><p><a href="http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&amp;mid=2247484176&amp;idx=1&amp;sn=5623421ed2678046ed9e438aadf6e26f&amp;chksm=fc10c146cb67485015f24f7e9f5862c4c685fc33485fe30e1b375a534b4031978439c554e0c0&amp;scene=21#wechat_redirect" target="_blank" rel="noreferrer">面试官：说说你对Vue生命周期的理解?</a></p><p><img src="https://static.vue-js.com/821b87b0-3ac6-11eb-ab90-d9ae814b240d.png" alt=""></p>`,69),o=[e];function c(t,r,i,E,y,d){return a(),n("div",null,o)}const h=s(p,[["render",c]]);export{b as __pageData,h as default};
