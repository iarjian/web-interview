import{_ as e,o as a,c as o,Q as c}from"./chunks/framework.2eafe199.js";const b=JSON.parse('{"title":"面试官：说说你在使用React 过程中遇到的常见问题？如何解决?","description":"","frontmatter":{},"headers":[],"relativePath":"React/summary.md","filePath":"React/summary.md","lastUpdated":1694416341000}'),t={name:"React/summary.md"},d=c('<h1 id="面试官-说说你在使用react-过程中遇到的常见问题-如何解决" tabindex="-1">面试官：说说你在使用React 过程中遇到的常见问题？如何解决? <a class="header-anchor" href="#面试官-说说你在使用react-过程中遇到的常见问题-如何解决" aria-label="Permalink to &quot;面试官：说说你在使用React 过程中遇到的常见问题？如何解决?&quot;">​</a></h1><p><img src="https://static.vue-js.com/7efcd400-f47d-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、前言" tabindex="-1">一、前言 <a class="header-anchor" href="#一、前言" aria-label="Permalink to &quot;一、前言&quot;">​</a></h2><p>在使用<code>react</code>开发项目过程中，每个人或多或少都会遇到一些&quot;奇怪&quot;的问题，本质上都是我们对其理解的不够透彻</p><p><code>react</code> 系列，33个工作日，33次凌晨还在亮起的台灯，到今天就圆满画上句号了，比心</p><p>在系列中我们列出了很多比较经典的考题，工作中遇到的问题也往往就藏中其中，只是以不同的表现形式存在罢了</p><p>今天的题解不算题解，准确来说是对整个系列的一次贯穿，总结</p><p>目录:</p><ul><li>react 有什么特性</li><li>生命周期有哪些不同阶段？每个阶段对应的方法是？</li><li>state 和 props有什么区别？</li><li>super()和super(props)有什么区别？</li><li>setState执行机制？</li><li>React的事件机制？</li><li>事件绑定的方式有哪些？</li><li>构建组件的方式有哪些？区别？</li><li>组件之间如何通信？</li><li>key有什么作用？</li><li>refs 的理解？应用场景？</li><li>Hooks的理解？解决了什么问题？</li><li>如何引入css？</li><li>redux工作原理？</li><li>redux中间件有哪些？</li><li>react-router组件有哪些？</li><li>render触发时机？</li><li>如何减少render？</li><li>JSX转化DOM过程？</li><li>性能优化手段有哪些</li><li>如何做服务端渲染？</li></ul><h3 id="react-有什么特性" tabindex="-1">react 有什么特性 <a class="header-anchor" href="#react-有什么特性" aria-label="Permalink to &quot;react 有什么特性&quot;">​</a></h3><p>主要的特性分为：</p><ul><li>JSX语法</li><li>单向数据绑定</li><li>虚拟DOM</li><li>声明式编程</li><li>Component</li></ul><p>借助这些特性，<code>react</code>整体使用起来更加简单高效，组件式开发提高了代码的复用率</p><h3 id="生命周期有哪些不同阶段-每个阶段对应的方法是" tabindex="-1">生命周期有哪些不同阶段？每个阶段对应的方法是？ <a class="header-anchor" href="#生命周期有哪些不同阶段-每个阶段对应的方法是" aria-label="Permalink to &quot;生命周期有哪些不同阶段？每个阶段对应的方法是？&quot;">​</a></h3><p>主要分成了新的生命周期和旧的生命周期：</p><ul><li><p>新版生命周期整体流程如下图所示：</p><p><img src="https://static.vue-js.com/66c999c0-d373-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>旧的生命周期流程图如下：</p><p><img src="https://static.vue-js.com/d379e420-d374-11eb-ab90-d9ae814b240d.png" alt=""></p></li></ul><h3 id="state-和-props有什么区别" tabindex="-1">state 和 props有什么区别？ <a class="header-anchor" href="#state-和-props有什么区别" aria-label="Permalink to &quot;state 和 props有什么区别？&quot;">​</a></h3><p>两者相同点：</p><ul><li>两者都是 JavaScript 对象</li><li>两者都是用于保存信息</li><li>props 和 state 都能触发渲染更新</li></ul><p>区别：</p><ul><li>props 是外部传递给组件的，而 state 是在组件内被组件自己管理的，一般在 constructor 中初始化</li><li>props 在组件内部是不可修改的，但 state 在组件内部可以进行修改</li><li>state 是多变的、可以修改</li></ul><h3 id="super-和super-props-有什么区别" tabindex="-1">super()和super(props)有什么区别？ <a class="header-anchor" href="#super-和super-props-有什么区别" aria-label="Permalink to &quot;super()和super(props)有什么区别？&quot;">​</a></h3><p>在<code>React</code>中，类组件基于<code>ES6</code>，所以在<code>constructor</code>中必须使用<code>super</code></p><p>在调用<code>super</code>过程，无论是否传入<code>props</code>，<code>React</code>内部都会将<code>porps</code>赋值给组件实例<code>porps</code>属性中</p><p>如果只调用了<code>super()</code>，那么<code>this.props</code>在<code>super()</code>和构造函数结束之间仍是<code>undefined</code></p><h3 id="setstate执行机制" tabindex="-1">setState执行机制？ <a class="header-anchor" href="#setstate执行机制" aria-label="Permalink to &quot;setState执行机制？&quot;">​</a></h3><p>在<code>react</code>类组件的状态需要通过<code>setState</code>进行更改，在不同场景下对应不同的执行顺序：</p><ul><li>在组件生命周期或React合成事件中，setState是异步</li><li>在setTimeout或者原生dom事件中，setState是同步</li></ul><p>当我们批量更改<code>state</code>的值的时候，<code>react</code>内部会将其进行覆盖，只取最后一次的执行结果</p><p>当需要下一个<code>state</code>依赖当前<code>state</code>的时候，则可以在<code>setState</code>中传递一个回调函数进行下次更新</p><h3 id="react的事件机制" tabindex="-1">React的事件机制？ <a class="header-anchor" href="#react的事件机制" aria-label="Permalink to &quot;React的事件机制？&quot;">​</a></h3><p><code>React</code>基于浏览器的事件机制自身实现了一套事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等</p><p>组件注册的事件最终会绑定在<code>document</code>这个 <code>DOM </code>上，而不是 <code>React </code>组件对应的 <code>DOM</code>，从而节省内存开销</p><p>自身实现了一套事件冒泡机制，阻止不同时间段的冒泡行为，需要对应使用不同的方法</p><h3 id="事件绑定的方式有哪些" tabindex="-1">事件绑定的方式有哪些？ <a class="header-anchor" href="#事件绑定的方式有哪些" aria-label="Permalink to &quot;事件绑定的方式有哪些？&quot;">​</a></h3><p><code>react</code>常见的绑定方式有如下：</p><ul><li>render方法中使用bind</li><li>render方法中使用箭头函数</li><li>constructor中bind</li><li>定义阶段使用箭头函数绑定</li></ul><p>前两种方式在每次组件<code>render</code>的时候都会生成新的方法实例，性能问题欠缺</p><h3 id="构建组件的方式有哪些-区别" tabindex="-1">构建组件的方式有哪些？区别？ <a class="header-anchor" href="#构建组件的方式有哪些-区别" aria-label="Permalink to &quot;构建组件的方式有哪些？区别？&quot;">​</a></h3><p>组件的创建主要分成了三种方式：</p><ul><li>函数式创建</li><li>继承 React.Component 创建</li><li>通过 React.createClass 方法创建</li></ul><p>如今一般都是前两种方式，对于一些无状态的组件创建，建议使用函数式创建的方式，再比如<code>hooks</code>的机制下，函数式组件能做类组件对应的事情，所以建议都使用函数式的方式来创建组件</p><h3 id="组件之间如何通信" tabindex="-1">组件之间如何通信？ <a class="header-anchor" href="#组件之间如何通信" aria-label="Permalink to &quot;组件之间如何通信？&quot;">​</a></h3><p>组件间通信可以通过<code>props</code>、传递回调函数、<code>context</code>、<code>redux</code>等形式进行组件之间通讯</p><h3 id="key有什么作用" tabindex="-1">key有什么作用？ <a class="header-anchor" href="#key有什么作用" aria-label="Permalink to &quot;key有什么作用？&quot;">​</a></h3><p>使用<code>key</code>是<code>react</code>性能优化的手段，在一系列数据最前面插入元素，如果没有<code>key</code>的值，则所有的元素都需要进行更换，而有<code>key</code>的情况只需要将最新元素插入到前面，不涉及删除操作</p><p>在使用<code>key</code>的时候应保证：</p><ul><li>key 应该是唯一的</li><li>key不要使用随机值（随机数在下一次 render 时，会重新生成一个数字）</li><li>避免使用 index 作为 key</li></ul><h3 id="refs-的理解-应用场景" tabindex="-1">refs 的理解？应用场景？ <a class="header-anchor" href="#refs-的理解-应用场景" aria-label="Permalink to &quot;refs 的理解？应用场景？&quot;">​</a></h3><p><code>Refs</code>允许我们访问 <code>DOM </code>节点或在 <code>render </code>方法中创建的 <code>React </code>元素</p><p>下面的场景使用<code>refs</code>非常有用：</p><ul><li>对Dom元素的焦点控制、内容选择、控制</li><li>对Dom元素的内容设置及媒体播放</li><li>对Dom元素的操作和对组件实例的操作</li><li>集成第三方 DOM 库</li></ul><h3 id="hooks的理解-解决了什么问题" tabindex="-1">Hooks的理解？解决了什么问题？ <a class="header-anchor" href="#hooks的理解-解决了什么问题" aria-label="Permalink to &quot;Hooks的理解？解决了什么问题？&quot;">​</a></h3><p><code>Hook</code> 是 React 16.8 的新增特性。它可以让你在不编写 <code>class</code> 的情况下使用 <code>state</code> 以及其他的 <code>React</code> 特性</p><p>解决问题如下：</p><ul><li>难以重用和共享组件中的与状态相关的逻辑</li><li>逻辑复杂的组件难以开发与维护，当我们的组件需要处理多个互不相关的 local state 时，每个生命周期函数中可能会包含着各种互不相关的逻辑在里面</li><li>类组件中的this增加学习成本，类组件在基于现有工具的优化上存在些许问题</li><li>由于业务变动，函数组件不得不改为类组件等等</li></ul><h3 id="如何引入css" tabindex="-1">如何引入css？ <a class="header-anchor" href="#如何引入css" aria-label="Permalink to &quot;如何引入css？&quot;">​</a></h3><p>常见的<code>CSS</code>引入方式有以下：</p><ul><li>在组件内直接使用</li><li>组件中引入 .css 文件</li><li>组件中引入 .module.css 文件</li><li>CSS in JS</li></ul><p>组件内直接使用<code>css</code>会导致大量的代码，而文件中直接引入<code>css</code>文件是全局作用域，发生层叠</p><p>引入<code>.module.css </code>文件能够解决局部作用域问题，但是不方便动态修改样式，需要使用内联的方式进行样式的编写</p><p><code>css in js </code>这种方法，可以满足大部分场景的应用，可以类似于预处理器一样样式嵌套、定义、修改状态等</p><h3 id="redux工作原理" tabindex="-1">redux工作原理？ <a class="header-anchor" href="#redux工作原理" aria-label="Permalink to &quot;redux工作原理？&quot;">​</a></h3><p><code>redux </code>要求我们把数据都放在 <code>store </code>公共存储空间</p><p>一个组件改变了 <code>store</code> 里的数据内容，其他组件就能感知到 <code>store </code>的变化，再来取数据，从而间接的实现了这些数据传递的功能</p><p>工作流程图如下所示：</p><p><img src="https://static.vue-js.com/27b2e930-e56b-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="redux中间件有哪些" tabindex="-1">redux中间件有哪些？ <a class="header-anchor" href="#redux中间件有哪些" aria-label="Permalink to &quot;redux中间件有哪些？&quot;">​</a></h3><p>市面上有很多优秀的<code>redux</code>中间件，如：</p><ul><li>redux-thunk：用于异步操作</li><li>redux-logger：用于日志记录</li></ul><h3 id="react-router组件有哪些" tabindex="-1">react-router组件有哪些？ <a class="header-anchor" href="#react-router组件有哪些" aria-label="Permalink to &quot;react-router组件有哪些？&quot;">​</a></h3><p>常见的组件有：</p><ul><li>BrowserRouter、HashRouter</li><li>Route</li><li>Link、NavLink</li><li>switch</li><li>redirect</li></ul><h3 id="render触发时机" tabindex="-1">render触发时机？ <a class="header-anchor" href="#render触发时机" aria-label="Permalink to &quot;render触发时机？&quot;">​</a></h3><p>在<code> React</code> 中，类组件只要执行了 <code>setState</code> 方法，就一定会触发 <code>render</code> 函数执行</p><p>函数组件<code>useState</code> 会判断当前值有无发生改变确定是否执行<code>render</code>方法，一旦父组件发生渲染，子组件也会渲染</p><h3 id="如何减少render" tabindex="-1">如何减少render？ <a class="header-anchor" href="#如何减少render" aria-label="Permalink to &quot;如何减少render？&quot;">​</a></h3><p>父组件渲染导致子组件渲染，子组件并没有发生任何改变，这时候就可以从避免无谓的渲染，具体实现的方式有如下：</p><ul><li>shouldComponentUpdate</li><li>PureComponent</li><li>React.memo</li></ul><h3 id="jsx转化dom过程" tabindex="-1">JSX转化DOM过程？ <a class="header-anchor" href="#jsx转化dom过程" aria-label="Permalink to &quot;JSX转化DOM过程？&quot;">​</a></h3><p><code>jsx</code>首先会转化成<code>React.createElement</code>这种形式，<code>React.createElement</code>作用是生成一个虚拟<code>Dom</code>对象，然后会通过<code>ReactDOM.render</code>进行渲染成真实<code>DOM</code></p><h3 id="性能优化手段有哪些" tabindex="-1">性能优化手段有哪些 <a class="header-anchor" href="#性能优化手段有哪些" aria-label="Permalink to &quot;性能优化手段有哪些&quot;">​</a></h3><p>除了减少<code>render</code>的渲染之外，还可以通过以下手段进行优化：</p><p>除此之外， 常见性能优化常见的手段有如下：</p><ul><li>避免使用内联函数</li><li>使用 React Fragments 避免额外标记</li><li>使用 Immutable</li><li>懒加载组件</li><li>事件绑定方式</li><li>服务端渲染</li></ul><h3 id="如何做服务端渲染" tabindex="-1">如何做服务端渲染？ <a class="header-anchor" href="#如何做服务端渲染" aria-label="Permalink to &quot;如何做服务端渲染？&quot;">​</a></h3><p><code>node server</code> 接收客户端请求，得到当前的请求<code>url</code> 路径，然后在已有的路由表内查找到对应的组件，拿到需要请求的数据，将数据作为 <code>props</code>、<code>context</code>或者<code>store</code> 形式传入组件</p><p>然后基于 <code>react</code> 内置的服务端渲染方法 <code>renderToString()</code>把组件渲染为 <code>html</code>字符串在把最终的 <code>html </code>进行输出前需要将数据注入到浏览器端</p><p>浏览器开始进行渲染和节点对比，然后执行完成组件内事件绑定和一些交互，浏览器重用了服务端输出的 <code>html</code> 节点，整个流程结束</p><p><img src="https://static.vue-js.com/a2894970-f3f7-11eb-85f6-6fac77c0c9b3.png" alt=""></p>',90),l=[d];function r(i,s,p,u,n,h){return a(),o("div",null,l)}const f=e(t,[["render",r]]);export{b as __pageData,f as default};
