import{_ as e,o,c as a,Q as s}from"./chunks/framework.2eafe199.js";const b=JSON.parse('{"title":"面试官：说说 Node 文件查找的优先级以及 Require 方法的文件查找策略?","description":"","frontmatter":{},"headers":[],"relativePath":"NodeJS/require_order.md","filePath":"NodeJS/require_order.md","lastUpdated":1694416341000}'),l={name:"NodeJS/require_order.md"},n=s(`<h1 id="面试官-说说-node-文件查找的优先级以及-require-方法的文件查找策略" tabindex="-1">面试官：说说 Node 文件查找的优先级以及 Require 方法的文件查找策略? <a class="header-anchor" href="#面试官-说说-node-文件查找的优先级以及-require-方法的文件查找策略" aria-label="Permalink to &quot;面试官：说说 Node 文件查找的优先级以及 Require 方法的文件查找策略?&quot;">​</a></h1><p><img src="https://static.vue-js.com/15913530-c9ba-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、模块规范" tabindex="-1">一、模块规范 <a class="header-anchor" href="#一、模块规范" aria-label="Permalink to &quot;一、模块规范&quot;">​</a></h2><p><code>NodeJS</code>对<code>CommonJS</code>进行了支持和实现，让我们在开发<code>node</code>的过程中可以方便的进行模块化开发：</p><ul><li>在Node中每一个js文件都是一个单独的模块</li><li>模块中包括CommonJS规范的核心变量：exports、module.exports、require</li><li>通过上述变量进行模块化开发</li></ul><p>而模块化的核心是导出与导入，在<code>Node</code>中通过<code>exports</code>与<code>module.exports</code>负责对模块中的内容进行导出，通过<code>require</code>函数导入其他模块（自定义模块、系统模块、第三方库模块）中的内容</p><h2 id="二、查找策略" tabindex="-1">二、查找策略 <a class="header-anchor" href="#二、查找策略" aria-label="Permalink to &quot;二、查找策略&quot;">​</a></h2><p><code>require</code>方法接收一下几种参数的传递：</p><ul><li>原生模块：http、fs、path等</li><li>相对路径的文件模块：./mod或../mod</li><li>绝对路径的文件模块：/pathtomodule/mod</li><li>目录作为模块：./dirname</li><li>非原生模块的文件模块：mod</li></ul><p><code>require</code>参数较为简单，但是内部的加载却是十分复杂的，其加载优先级也各自不同，如下图：</p><p><img src="https://static.vue-js.com/33ae8ef0-c9ba-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>从上图可以看见，文件模块存在缓存区，寻找模块路径的时候都会优先从缓存中加载已经存在的模块</p><h3 id="原生模块" tabindex="-1">原生模块 <a class="header-anchor" href="#原生模块" aria-label="Permalink to &quot;原生模块&quot;">​</a></h3><p>而像原生模块这些，通过<code>require </code>方法在解析文件名之后，优先检查模块是否在原生模块列表中，如果在则从原生模块中加载</p><h3 id="绝对路径、相对路径" tabindex="-1">绝对路径、相对路径 <a class="header-anchor" href="#绝对路径、相对路径" aria-label="Permalink to &quot;绝对路径、相对路径&quot;">​</a></h3><p>如果<code>require</code>绝对路径的文件，则直接查找对应的路径，速度最快</p><p>相对路径的模块则相对于当前调用<code>require</code>的文件去查找</p><p>如果按确切的文件名没有找到模块，则 <code>NodeJs</code> 会尝试带上 <code>.js</code>、<code>.json </code>或 <code>.node </code>拓展名再加载</p><h3 id="目录作为模块" tabindex="-1">目录作为模块 <a class="header-anchor" href="#目录作为模块" aria-label="Permalink to &quot;目录作为模块&quot;">​</a></h3><p>默认情况是根据根目录中<code>package.json</code>文件的<code>main</code>来指定目录模块，如：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{ </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;some-library&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;main&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;main.js&quot;</span><span style="color:#E1E4E8;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{ </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;some-library&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;main&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;main.js&quot;</span><span style="color:#24292E;"> }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果这是在<code>./some-library node_modules</code>目录中，则 <code>require(&#39;./some-library&#39;)</code> 会试图加载 <code>./some-library/main.js</code></p><p>如果目录里没有 <code>package.json</code>文件，或者 <code>main</code>入口不存在或无法解析，则会试图加载目录下的 <code>index.js</code> 或 <code>index.node</code> 文件</p><h3 id="非原生模块" tabindex="-1">非原生模块 <a class="header-anchor" href="#非原生模块" aria-label="Permalink to &quot;非原生模块&quot;">​</a></h3><p>在每个文件中都存在<code>module.paths</code>，表示模块的搜索路径，<code>require</code>就是根据其来寻找文件</p><p>在<code>window</code>下输出如下：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[ </span><span style="color:#9ECBFF;">&#39;c:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">nodejs</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">node_modules&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;c:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">node_modules&#39;</span><span style="color:#E1E4E8;"> ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[ </span><span style="color:#032F62;">&#39;c:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">nodejs</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">node_modules&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&#39;c:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">node_modules&#39;</span><span style="color:#24292E;"> ]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可以看出<code>module path</code>的生成规则为：从当前文件目录开始查找<code>node_modules</code>目录；然后依次进入父目录，查找父目录下的<code>node_modules</code>目录，依次迭代，直到根目录下的<code>node_modules</code>目录</p><p>当都找不到的时候，则会从系统<code>NODE_PATH</code>环境变量查找</p><h4 id="举个例子" tabindex="-1">举个例子： <a class="header-anchor" href="#举个例子" aria-label="Permalink to &quot;举个例子：&quot;">​</a></h4><p>如果在<code>/home/ry/projects/foo.js</code>文件里调用了 <code>require(&#39;bar.js&#39;)</code>，则 Node.js 会按以下顺序查找：</p><ul><li>/home/ry/projects/node_modules/bar.js</li><li>/home/ry/node_modules/bar.js</li><li>/home/node_modules/bar.js</li><li>/node_modules/bar.js</li></ul><p>这使得程序本地化它们的依赖，避免它们产生冲突</p><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><p>通过上面模块的文件查找策略之后，总结下文件查找的优先级：</p><ul><li><p>缓存的模块优先级最高</p></li><li><p>如果是内置模块，则直接返回，优先级仅次缓存的模块</p></li><li><p>如果是绝对路径 / 开头，则从根目录找</p></li><li><p>如果是相对路径 ./开头，则从当前require文件相对位置找</p></li><li><p>如果文件没有携带后缀，先从js、json、node按顺序查找</p></li><li><p>如果是目录，则根据 package.json的main属性值决定目录下入口文件，默认情况为 index.js</p></li><li><p>如果文件为第三方模块，则会引入 node_modules 文件，如果不在当前仓库文件中，则自动从上级递归查找，直到根目录</p></li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="http://nodejs.cn/api/modules.html#modules_file_modules" target="_blank" rel="noreferrer">http://nodejs.cn/api/modules.html#modules_file_modules</a></li><li><a href="https://blog.csdn.net/qq_36801250/article/details/106352686" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_36801250/article/details/106352686</a></li><li><a href="https://www.cnblogs.com/samve/p/10805908.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/samve/p/10805908.html</a></li></ul>`,38),r=[n];function p(d,c,t,i,u,h){return o(),a("div",null,r)}const q=e(l,[["render",p]]);export{b as __pageData,q as default};
