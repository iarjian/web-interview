import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.2eafe199.js";const m=JSON.parse('{"title":"面试官：说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？","description":"","frontmatter":{},"headers":[],"relativePath":"vue/structure.md","filePath":"vue/structure.md","lastUpdated":1694416341000}'),p={name:"vue/structure.md"},e=l(`<h1 id="面试官-说下你的vue项目的目录结构-如果是大型项目你该怎么划分结构和划分组件呢" tabindex="-1">面试官：说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？ <a class="header-anchor" href="#面试官-说下你的vue项目的目录结构-如果是大型项目你该怎么划分结构和划分组件呢" aria-label="Permalink to &quot;面试官：说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？&quot;">​</a></h1><p><img src="https://static.vue-js.com/b6cd6a60-4aba-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、为什么要划分" tabindex="-1">一、为什么要划分 <a class="header-anchor" href="#一、为什么要划分" aria-label="Permalink to &quot;一、为什么要划分&quot;">​</a></h2><p>使用<code>vue</code>构建项目，项目结构清晰会提高开发效率，熟悉项目的各种配置同样会让开发效率更高</p><p>在划分项目结构的时候，需要遵循一些基本的原则：</p><ul><li>文件夹和文件夹内部文件的语义一致性</li><li>单一入口/出口</li><li>就近原则，紧耦合的文件应该放到一起，且应以相对路径引用</li><li>公共的文件应该以绝对路径的方式从根目录引用</li><li><code>/src</code> 外的文件不应该被引入</li></ul><h3 id="文件夹和文件夹内部文件的语义一致性" tabindex="-1">文件夹和文件夹内部文件的语义一致性 <a class="header-anchor" href="#文件夹和文件夹内部文件的语义一致性" aria-label="Permalink to &quot;文件夹和文件夹内部文件的语义一致性&quot;">​</a></h3><p>我们的目录结构都会有一个文件夹是按照路由模块来划分的，如<code>pages</code>文件夹，这个文件夹里面应该包含我们项目所有的路由模块，并且仅应该包含路由模块，而不应该有别的其他的非路由模块的文件夹</p><p>这样做的好处在于一眼就从 <code>pages</code>文件夹看出这个项目的路由有哪些</p><h3 id="单一入口-出口" tabindex="-1">单一入口/出口 <a class="header-anchor" href="#单一入口-出口" aria-label="Permalink to &quot;单一入口/出口&quot;">​</a></h3><p>举个例子，在<code>pages</code>文件夹里面存在一个<code>seller</code>文件夹，这时候<code>seller</code> 文件夹应该作为一个独立的模块由外部引入，并且 <code>seller/index.js</code> 应该作为外部引入 seller 模块的唯一入口</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 错误用法</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> sellerReducer </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;src/pages/seller/reducer&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 正确用法</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { reducer </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> sellerReducer } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;src/pages/seller&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 错误用法</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> sellerReducer </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;src/pages/seller/reducer&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 正确用法</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { reducer </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> sellerReducer } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;src/pages/seller&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这样做的好处在于，无论你的模块文件夹内部有多乱，外部引用的时候，都是从一个入口文件引入，这样就很好的实现了隔离，如果后续有重构需求，你就会发现这种方式的优点</p><h3 id="就近原则-紧耦合的文件应该放到一起-且应以相对路径引用" tabindex="-1">就近原则，紧耦合的文件应该放到一起，且应以相对路径引用 <a class="header-anchor" href="#就近原则-紧耦合的文件应该放到一起-且应以相对路径引用" aria-label="Permalink to &quot;就近原则，紧耦合的文件应该放到一起，且应以相对路径引用&quot;">​</a></h3><p>使用相对路径可以保证模块内部的独立性</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 正确用法</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> styles </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./index.module.scss&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 错误用法</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> styles </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;src/pages/seller/index.module.scss&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 正确用法</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> styles </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./index.module.scss&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 错误用法</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> styles </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;src/pages/seller/index.module.scss&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>举个例子</p><p>假设我们现在的 seller 目录是在 <code>src/pages/seller</code>，如果我们后续发生了路由变更，需要加一个层级，变成 <code>src/pages/user/seller</code>。</p><p>如果我们采用第一种相对路径的方式，那就可以直接将整个文件夹拖过去就好，<code>seller</code> 文件夹内部不需要做任何变更。</p><p>但是如果我们采用第二种绝对路径的方式，移动文件夹的同时，还需要对每个 <code>import</code> 的路径做修改</p><h3 id="公共的文件应该以绝对路径的方式从根目录引用" tabindex="-1">公共的文件应该以绝对路径的方式从根目录引用 <a class="header-anchor" href="#公共的文件应该以绝对路径的方式从根目录引用" aria-label="Permalink to &quot;公共的文件应该以绝对路径的方式从根目录引用&quot;">​</a></h3><p>公共指的是多个路由模块共用，如一些公共的组件，我们可以放在<code>src/components</code>下</p><p>在使用到的页面中，采用绝对路径的形式引用</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 错误用法</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Input </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../../components/input&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 正确用法</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Input </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;src/components/input&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 错误用法</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Input </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../../components/input&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 正确用法</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Input </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;src/components/input&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>同样的，如果我们需要对文件夹结构进行调整。将 <code>/src/components/input</code> 变成 <code>/src/components/new/input</code>，如果使用绝对路径，只需要全局搜索替换</p><p>再加上绝对路径有全局的语义，相对路径有独立模块的语义</p><h3 id="src-外的文件不应该被引入" tabindex="-1">/src 外的文件不应该被引入 <a class="header-anchor" href="#src-外的文件不应该被引入" aria-label="Permalink to &quot;/src 外的文件不应该被引入&quot;">​</a></h3><p><code>vue-cli</code>脚手架已经帮我们做了相关的约束了，正常我们的前端项目都会有个<code>src</code>文件夹，里面放着所有的项目需要的资源，<code>js</code>,<code> css</code>, <code>png</code>, <code>svg</code> 等等。<code>src</code> 外会放一些项目配置，依赖，环境等文件</p><p>这样的好处是方便划分项目代码文件和配置文件</p><h2 id="二、目录结构" tabindex="-1">二、目录结构 <a class="header-anchor" href="#二、目录结构" aria-label="Permalink to &quot;二、目录结构&quot;">​</a></h2><p>单页面目录结构</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">project</span></span>
<span class="line"><span style="color:#E1E4E8;">│  .browserslistrc</span></span>
<span class="line"><span style="color:#E1E4E8;">│  .env.production</span></span>
<span class="line"><span style="color:#E1E4E8;">│  .eslintrc.js</span></span>
<span class="line"><span style="color:#E1E4E8;">│  .gitignore</span></span>
<span class="line"><span style="color:#E1E4E8;">│  babel.config.js</span></span>
<span class="line"><span style="color:#E1E4E8;">│  </span><span style="color:#F97583;">package-</span><span style="color:#E1E4E8;">lock.json</span></span>
<span class="line"><span style="color:#E1E4E8;">│  package.json</span></span>
<span class="line"><span style="color:#E1E4E8;">│  </span><span style="color:#79B8FF;">README</span><span style="color:#E1E4E8;">.md</span></span>
<span class="line"><span style="color:#E1E4E8;">│  vue.config.js</span></span>
<span class="line"><span style="color:#E1E4E8;">│  yarn</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">error.log</span></span>
<span class="line"><span style="color:#E1E4E8;">│  yarn.lock</span></span>
<span class="line"><span style="color:#E1E4E8;">│</span></span>
<span class="line"><span style="color:#E1E4E8;">├─public</span></span>
<span class="line"><span style="color:#E1E4E8;">│      favicon.ico</span></span>
<span class="line"><span style="color:#E1E4E8;">│      index.html</span></span>
<span class="line"><span style="color:#E1E4E8;">│</span></span>
<span class="line"><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> src</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> components</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> input</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> index.module.scss</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> pages</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> seller</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> components</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> input</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> index.module.scss</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> reducer.js</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> saga.js</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> index.module.scss</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> buyer</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;"> index.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">project</span></span>
<span class="line"><span style="color:#24292E;">│  .browserslistrc</span></span>
<span class="line"><span style="color:#24292E;">│  .env.production</span></span>
<span class="line"><span style="color:#24292E;">│  .eslintrc.js</span></span>
<span class="line"><span style="color:#24292E;">│  .gitignore</span></span>
<span class="line"><span style="color:#24292E;">│  babel.config.js</span></span>
<span class="line"><span style="color:#24292E;">│  </span><span style="color:#D73A49;">package-</span><span style="color:#24292E;">lock.json</span></span>
<span class="line"><span style="color:#24292E;">│  package.json</span></span>
<span class="line"><span style="color:#24292E;">│  </span><span style="color:#005CC5;">README</span><span style="color:#24292E;">.md</span></span>
<span class="line"><span style="color:#24292E;">│  vue.config.js</span></span>
<span class="line"><span style="color:#24292E;">│  yarn</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">error.log</span></span>
<span class="line"><span style="color:#24292E;">│  yarn.lock</span></span>
<span class="line"><span style="color:#24292E;">│</span></span>
<span class="line"><span style="color:#24292E;">├─public</span></span>
<span class="line"><span style="color:#24292E;">│      favicon.ico</span></span>
<span class="line"><span style="color:#24292E;">│      index.html</span></span>
<span class="line"><span style="color:#24292E;">│</span></span>
<span class="line"><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> src</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> components</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> input</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> index.js</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> index.module.scss</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> pages</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> seller</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> components</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> input</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> index.js</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> index.module.scss</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> reducer.js</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> saga.js</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> index.js</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> index.module.scss</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> buyer</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> index.js</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;"> index.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>多页面目录结构</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">my</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">vue</span><span style="color:#F97583;">-</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">:.</span></span>
<span class="line"><span style="color:#E1E4E8;">│  .browserslistrc</span></span>
<span class="line"><span style="color:#E1E4E8;">│  .env.production</span></span>
<span class="line"><span style="color:#E1E4E8;">│  .eslintrc.js</span></span>
<span class="line"><span style="color:#E1E4E8;">│  .gitignore</span></span>
<span class="line"><span style="color:#E1E4E8;">│  babel.config.js</span></span>
<span class="line"><span style="color:#E1E4E8;">│  </span><span style="color:#F97583;">package-</span><span style="color:#E1E4E8;">lock.json</span></span>
<span class="line"><span style="color:#E1E4E8;">│  package.json</span></span>
<span class="line"><span style="color:#E1E4E8;">│  </span><span style="color:#79B8FF;">README</span><span style="color:#E1E4E8;">.md</span></span>
<span class="line"><span style="color:#E1E4E8;">│  vue.config.js</span></span>
<span class="line"><span style="color:#E1E4E8;">│  yarn</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">error.log</span></span>
<span class="line"><span style="color:#E1E4E8;">│  yarn.lock</span></span>
<span class="line"><span style="color:#E1E4E8;">│</span></span>
<span class="line"><span style="color:#E1E4E8;">├─public</span></span>
<span class="line"><span style="color:#E1E4E8;">│      favicon.ico</span></span>
<span class="line"><span style="color:#E1E4E8;">│      index.html</span></span>
<span class="line"><span style="color:#E1E4E8;">│</span></span>
<span class="line"><span style="color:#E1E4E8;">└─src</span></span>
<span class="line"><span style="color:#E1E4E8;">    ├─apis </span><span style="color:#6A737D;">//接口文件根据页面或实例模块化</span></span>
<span class="line"><span style="color:#E1E4E8;">    │      index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │      login.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │</span></span>
<span class="line"><span style="color:#E1E4E8;">    ├─components </span><span style="color:#6A737D;">//全局公共组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  └─header</span></span>
<span class="line"><span style="color:#E1E4E8;">    │          index.less</span></span>
<span class="line"><span style="color:#E1E4E8;">    │          index.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">    │</span></span>
<span class="line"><span style="color:#E1E4E8;">    ├─config </span><span style="color:#6A737D;">//配置（环境变量配置不同passid等）</span></span>
<span class="line"><span style="color:#E1E4E8;">    │      env.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │      index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │</span></span>
<span class="line"><span style="color:#E1E4E8;">    ├─contant </span><span style="color:#6A737D;">//常量</span></span>
<span class="line"><span style="color:#E1E4E8;">    │      index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │</span></span>
<span class="line"><span style="color:#E1E4E8;">    ├─images </span><span style="color:#6A737D;">//图片</span></span>
<span class="line"><span style="color:#E1E4E8;">    │      logo.png</span></span>
<span class="line"><span style="color:#E1E4E8;">    │</span></span>
<span class="line"><span style="color:#E1E4E8;">    ├─pages </span><span style="color:#6A737D;">//多页面vue项目，不同的实例</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  ├─index </span><span style="color:#6A737D;">//主实例</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │  │  index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │  │  index.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │  │  main.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │  │  router.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │  │  store.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │  │</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │  ├─components </span><span style="color:#6A737D;">//业务组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │  └─pages </span><span style="color:#6A737D;">//此实例中的各个路由</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │      ├─amenu</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │      │      index.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │      │</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │      └─bmenu</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │              index.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  └─login </span><span style="color:#6A737D;">//另一个实例</span></span>
<span class="line"><span style="color:#E1E4E8;">    │          index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │          index.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">    │          main.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │</span></span>
<span class="line"><span style="color:#E1E4E8;">    ├─scripts </span><span style="color:#6A737D;">//包含各种常用配置，工具函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │  map.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  └─utils</span></span>
<span class="line"><span style="color:#E1E4E8;">    │          helper.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │</span></span>
<span class="line"><span style="color:#E1E4E8;">    ├─store </span><span style="color:#6A737D;">//vuex仓库</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │  index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  ├─index</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │      actions.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │      getters.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │      index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │      mutation</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">types.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │      mutations.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │      state.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  │</span></span>
<span class="line"><span style="color:#E1E4E8;">    │  └─user</span></span>
<span class="line"><span style="color:#E1E4E8;">    │          actions.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │          getters.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │          index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │          mutation</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">types.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │          mutations.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │          state.js</span></span>
<span class="line"><span style="color:#E1E4E8;">    │</span></span>
<span class="line"><span style="color:#E1E4E8;">    └─styles </span><span style="color:#6A737D;">//样式统一配置</span></span>
<span class="line"><span style="color:#E1E4E8;">        │  components.less</span></span>
<span class="line"><span style="color:#E1E4E8;">        │</span></span>
<span class="line"><span style="color:#E1E4E8;">        ├─animation</span></span>
<span class="line"><span style="color:#E1E4E8;">        │      index.less</span></span>
<span class="line"><span style="color:#E1E4E8;">        │      slide.less</span></span>
<span class="line"><span style="color:#E1E4E8;">        │</span></span>
<span class="line"><span style="color:#E1E4E8;">        ├─base</span></span>
<span class="line"><span style="color:#E1E4E8;">        │      index.less</span></span>
<span class="line"><span style="color:#E1E4E8;">        │      style.less</span></span>
<span class="line"><span style="color:#E1E4E8;">        │      var.less</span></span>
<span class="line"><span style="color:#E1E4E8;">        │      widget.less</span></span>
<span class="line"><span style="color:#E1E4E8;">        │</span></span>
<span class="line"><span style="color:#E1E4E8;">        └─common</span></span>
<span class="line"><span style="color:#E1E4E8;">                index.less</span></span>
<span class="line"><span style="color:#E1E4E8;">                reset.less</span></span>
<span class="line"><span style="color:#E1E4E8;">                style.less</span></span>
<span class="line"><span style="color:#E1E4E8;">                transition.less</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">my</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">vue</span><span style="color:#D73A49;">-</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">:.</span></span>
<span class="line"><span style="color:#24292E;">│  .browserslistrc</span></span>
<span class="line"><span style="color:#24292E;">│  .env.production</span></span>
<span class="line"><span style="color:#24292E;">│  .eslintrc.js</span></span>
<span class="line"><span style="color:#24292E;">│  .gitignore</span></span>
<span class="line"><span style="color:#24292E;">│  babel.config.js</span></span>
<span class="line"><span style="color:#24292E;">│  </span><span style="color:#D73A49;">package-</span><span style="color:#24292E;">lock.json</span></span>
<span class="line"><span style="color:#24292E;">│  package.json</span></span>
<span class="line"><span style="color:#24292E;">│  </span><span style="color:#005CC5;">README</span><span style="color:#24292E;">.md</span></span>
<span class="line"><span style="color:#24292E;">│  vue.config.js</span></span>
<span class="line"><span style="color:#24292E;">│  yarn</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">error.log</span></span>
<span class="line"><span style="color:#24292E;">│  yarn.lock</span></span>
<span class="line"><span style="color:#24292E;">│</span></span>
<span class="line"><span style="color:#24292E;">├─public</span></span>
<span class="line"><span style="color:#24292E;">│      favicon.ico</span></span>
<span class="line"><span style="color:#24292E;">│      index.html</span></span>
<span class="line"><span style="color:#24292E;">│</span></span>
<span class="line"><span style="color:#24292E;">└─src</span></span>
<span class="line"><span style="color:#24292E;">    ├─apis </span><span style="color:#6A737D;">//接口文件根据页面或实例模块化</span></span>
<span class="line"><span style="color:#24292E;">    │      index.js</span></span>
<span class="line"><span style="color:#24292E;">    │      login.js</span></span>
<span class="line"><span style="color:#24292E;">    │</span></span>
<span class="line"><span style="color:#24292E;">    ├─components </span><span style="color:#6A737D;">//全局公共组件</span></span>
<span class="line"><span style="color:#24292E;">    │  └─header</span></span>
<span class="line"><span style="color:#24292E;">    │          index.less</span></span>
<span class="line"><span style="color:#24292E;">    │          index.vue</span></span>
<span class="line"><span style="color:#24292E;">    │</span></span>
<span class="line"><span style="color:#24292E;">    ├─config </span><span style="color:#6A737D;">//配置（环境变量配置不同passid等）</span></span>
<span class="line"><span style="color:#24292E;">    │      env.js</span></span>
<span class="line"><span style="color:#24292E;">    │      index.js</span></span>
<span class="line"><span style="color:#24292E;">    │</span></span>
<span class="line"><span style="color:#24292E;">    ├─contant </span><span style="color:#6A737D;">//常量</span></span>
<span class="line"><span style="color:#24292E;">    │      index.js</span></span>
<span class="line"><span style="color:#24292E;">    │</span></span>
<span class="line"><span style="color:#24292E;">    ├─images </span><span style="color:#6A737D;">//图片</span></span>
<span class="line"><span style="color:#24292E;">    │      logo.png</span></span>
<span class="line"><span style="color:#24292E;">    │</span></span>
<span class="line"><span style="color:#24292E;">    ├─pages </span><span style="color:#6A737D;">//多页面vue项目，不同的实例</span></span>
<span class="line"><span style="color:#24292E;">    │  ├─index </span><span style="color:#6A737D;">//主实例</span></span>
<span class="line"><span style="color:#24292E;">    │  │  │  index.js</span></span>
<span class="line"><span style="color:#24292E;">    │  │  │  index.vue</span></span>
<span class="line"><span style="color:#24292E;">    │  │  │  main.js</span></span>
<span class="line"><span style="color:#24292E;">    │  │  │  router.js</span></span>
<span class="line"><span style="color:#24292E;">    │  │  │  store.js</span></span>
<span class="line"><span style="color:#24292E;">    │  │  │</span></span>
<span class="line"><span style="color:#24292E;">    │  │  ├─components </span><span style="color:#6A737D;">//业务组件</span></span>
<span class="line"><span style="color:#24292E;">    │  │  └─pages </span><span style="color:#6A737D;">//此实例中的各个路由</span></span>
<span class="line"><span style="color:#24292E;">    │  │      ├─amenu</span></span>
<span class="line"><span style="color:#24292E;">    │  │      │      index.vue</span></span>
<span class="line"><span style="color:#24292E;">    │  │      │</span></span>
<span class="line"><span style="color:#24292E;">    │  │      └─bmenu</span></span>
<span class="line"><span style="color:#24292E;">    │  │              index.vue</span></span>
<span class="line"><span style="color:#24292E;">    │  │</span></span>
<span class="line"><span style="color:#24292E;">    │  └─login </span><span style="color:#6A737D;">//另一个实例</span></span>
<span class="line"><span style="color:#24292E;">    │          index.js</span></span>
<span class="line"><span style="color:#24292E;">    │          index.vue</span></span>
<span class="line"><span style="color:#24292E;">    │          main.js</span></span>
<span class="line"><span style="color:#24292E;">    │</span></span>
<span class="line"><span style="color:#24292E;">    ├─scripts </span><span style="color:#6A737D;">//包含各种常用配置，工具函数</span></span>
<span class="line"><span style="color:#24292E;">    │  │  map.js</span></span>
<span class="line"><span style="color:#24292E;">    │  │</span></span>
<span class="line"><span style="color:#24292E;">    │  └─utils</span></span>
<span class="line"><span style="color:#24292E;">    │          helper.js</span></span>
<span class="line"><span style="color:#24292E;">    │</span></span>
<span class="line"><span style="color:#24292E;">    ├─store </span><span style="color:#6A737D;">//vuex仓库</span></span>
<span class="line"><span style="color:#24292E;">    │  │  index.js</span></span>
<span class="line"><span style="color:#24292E;">    │  │</span></span>
<span class="line"><span style="color:#24292E;">    │  ├─index</span></span>
<span class="line"><span style="color:#24292E;">    │  │      actions.js</span></span>
<span class="line"><span style="color:#24292E;">    │  │      getters.js</span></span>
<span class="line"><span style="color:#24292E;">    │  │      index.js</span></span>
<span class="line"><span style="color:#24292E;">    │  │      mutation</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">types.js</span></span>
<span class="line"><span style="color:#24292E;">    │  │      mutations.js</span></span>
<span class="line"><span style="color:#24292E;">    │  │      state.js</span></span>
<span class="line"><span style="color:#24292E;">    │  │</span></span>
<span class="line"><span style="color:#24292E;">    │  └─user</span></span>
<span class="line"><span style="color:#24292E;">    │          actions.js</span></span>
<span class="line"><span style="color:#24292E;">    │          getters.js</span></span>
<span class="line"><span style="color:#24292E;">    │          index.js</span></span>
<span class="line"><span style="color:#24292E;">    │          mutation</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">types.js</span></span>
<span class="line"><span style="color:#24292E;">    │          mutations.js</span></span>
<span class="line"><span style="color:#24292E;">    │          state.js</span></span>
<span class="line"><span style="color:#24292E;">    │</span></span>
<span class="line"><span style="color:#24292E;">    └─styles </span><span style="color:#6A737D;">//样式统一配置</span></span>
<span class="line"><span style="color:#24292E;">        │  components.less</span></span>
<span class="line"><span style="color:#24292E;">        │</span></span>
<span class="line"><span style="color:#24292E;">        ├─animation</span></span>
<span class="line"><span style="color:#24292E;">        │      index.less</span></span>
<span class="line"><span style="color:#24292E;">        │      slide.less</span></span>
<span class="line"><span style="color:#24292E;">        │</span></span>
<span class="line"><span style="color:#24292E;">        ├─base</span></span>
<span class="line"><span style="color:#24292E;">        │      index.less</span></span>
<span class="line"><span style="color:#24292E;">        │      style.less</span></span>
<span class="line"><span style="color:#24292E;">        │      var.less</span></span>
<span class="line"><span style="color:#24292E;">        │      widget.less</span></span>
<span class="line"><span style="color:#24292E;">        │</span></span>
<span class="line"><span style="color:#24292E;">        └─common</span></span>
<span class="line"><span style="color:#24292E;">                index.less</span></span>
<span class="line"><span style="color:#24292E;">                reset.less</span></span>
<span class="line"><span style="color:#24292E;">                style.less</span></span>
<span class="line"><span style="color:#24292E;">                transition.less</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br></div></div><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>项目的目录结构很重要，因为目录结构能体现很多东西，怎么规划目录结构可能每个人有自己的理解，但是按照一定的规范去进行目录的设计，能让项目整个架构看起来更为简洁，更加易用</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><p><a href="https://juejin.cn/post/6844904129186234381#heading-0" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904129186234381#heading-0</a></p></li><li><p><a href="https://zhuanlan.zhihu.com/p/89693668" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/89693668</a></p></li></ul>`,38),o=[e];function c(r,t,i,E,y,b){return n(),a("div",null,o)}const d=s(p,[["render",c]]);export{m as __pageData,d as default};
