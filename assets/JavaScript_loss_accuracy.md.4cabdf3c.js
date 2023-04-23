import{_ as s,c as a,o as n,V as l}from"./chunks/framework.821f8c05.js";const D=JSON.parse('{"title":"面试官：说说 Javascript 数字精度丢失的问题，如何解决？","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/loss_accuracy.md"}'),p={name:"JavaScript/loss_accuracy.md"},e=l(`<h1 id="面试官-说说-javascript-数字精度丢失的问题-如何解决" tabindex="-1">面试官：说说 Javascript 数字精度丢失的问题，如何解决？ <a class="header-anchor" href="#面试官-说说-javascript-数字精度丢失的问题-如何解决" aria-label="Permalink to &quot;面试官：说说 Javascript 数字精度丢失的问题，如何解决？&quot;">​</a></h1><p><img src="https://static.vue-js.com/09646a10-86f4-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、场景复现" tabindex="-1">一、场景复现 <a class="header-anchor" href="#一、场景复现" aria-label="Permalink to &quot;一、场景复现&quot;">​</a></h2><p>一个经典的面试题</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>为什么是<code>false</code>呢?</p><p>先看下面这个比喻</p><p>比如一个数 1÷3=0.33333333......</p><p>3会一直无限循环，数学可以表示，但是计算机要存储，方便下次取出来再使用，但0.333333...... 这个数无限循环，再大的内存它也存不下，所以不能存储一个相对于数学来说的值，只能存储一个近似值，当计算机存储后再取出时就会出现精度丢失问题</p><h2 id="二、浮点数" tabindex="-1">二、浮点数 <a class="header-anchor" href="#二、浮点数" aria-label="Permalink to &quot;二、浮点数&quot;">​</a></h2><p>“浮点数”是一种表示数字的标准，整数也可以用浮点数的格式来存储</p><p>我们也可以理解成，浮点数就是小数</p><p>在<code>JavaScript</code>中，现在主流的数值类型是<code>Number</code>，而<code>Number</code>采用的是<code>IEEE754</code>规范中64位双精度浮点数编码</p><p>这样的存储结构优点是可以归一化处理整数和小数，节省存储空间</p><p>对于一个整数，可以很轻易转化成十进制或者二进制。但是对于一个浮点数来说，因为小数点的存在，小数点的位置不是固定的。解决思路就是使用科学计数法，这样小数点位置就固定了</p><p>而计算机只能用二进制（0或1）表示，二进制转换为科学记数法的公式如下：</p><p><img src="https://static.vue-js.com/1b4b1620-86f4-11eb-ab90-d9ae814b240d.png" alt=""></p><p>其中，<code>a</code>的值为0或者1，e为小数点移动的位置</p><p>举个例子：</p><p>27.0转化成二进制为11011.0 ，科学计数法表示为：</p><p><img src="https://static.vue-js.com/37007090-86f4-11eb-ab90-d9ae814b240d.png" alt=""></p><p>前面讲到，<code>javaScript</code>存储方式是双精度浮点数，其长度为8个字节，即64位比特</p><p>64位比特又可分为三个部分：</p><ul><li>符号位S：第 1 位是正负数符号位（sign），0代表正数，1代表负数</li><li>指数位E：中间的 11 位存储指数（exponent），用来表示次方数，可以为正负数。在双精度浮点数中，指数的固定偏移量为1023</li><li>尾数位M：最后的 52 位是尾数（mantissa），超出的部分自动进一舍零</li></ul><p>如下图所示：</p><p><img src="https://static.vue-js.com/430d0100-86f4-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>举个例子：</p><p>27.5 转换为二进制11011.1</p><p>11011.1转换为科学记数法 <img src="https://www.zhihu.com/equation?tex=1.10111%2A2%5E4" alt="[公式]"></p><p>符号位为1(正数)，指数位为4+，1023+4，即1027</p><p>因为它是十进制的需要转换为二进制，即 <code>10000000011</code>，小数部分为<code>10111</code>，补够52位即： 1011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000\`</p><p>所以27.5存储为计算机的二进制标准形式（符号位+指数位+小数部分 (阶数)），既下面所示</p><p>0+10000000011+011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000\`</p><h2 id="二、问题分析" tabindex="-1">二、问题分析 <a class="header-anchor" href="#二、问题分析" aria-label="Permalink to &quot;二、问题分析&quot;">​</a></h2><p>再回到问题上</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通过上面的学习，我们知道，在<code>javascript</code>语言中，0.1 和 0.2 都转化成二进制后再进行运算</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 0.1 和 0.2 都转化成二进制后再进行运算</span></span>
<span class="line"><span style="color:#F78C6C;">0.00011001100110011001100110011001100110011001100110011010</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#F78C6C;">0.0011001100110011001100110011001100110011001100110011010</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#F78C6C;">0.0100110011001100110011001100110011001100110011001100111</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 转成十进制正好是 0.30000000000000004</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>所以输出<code>false</code></p><p>再来一个问题，那么为什么<code>x=0.1</code>得到<code>0.1</code>？</p><p>主要是存储二进制时小数点的偏移量最大为52位，最多可以表达的位数是<code>2^53=9007199254740992</code>，对应科学计数尾数是 <code>9.007199254740992</code>，这也是 JS 最多能表示的精度</p><p>它的长度是 16，所以可以使用 <code>toPrecision(16)</code> 来做精度运算，超过的精度会自动做凑整处理</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">.10000000000000000555</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toPrecision</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回 0.1000000000000000，去掉末尾的零后正好为 0.1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>但看到的 <code>0.1</code> 实际上并不是 <code>0.1</code>。不信你可用更高的精度试试：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toPrecision</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">21</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.100000000000000005551</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果整数大于 <code>9007199254740992</code> 会出现什么情况呢？</p><p>由于指数位最大值是1023，所以最大可以表示的整数是 <code>2^1024 - 1</code>，这就是能表示的最大整数。但你并不能这样计算这个数字，因为从 <code>2^1024</code> 开始就变成了 <code>Infinity</code></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt; Math.pow(2, 1023)</span></span>
<span class="line"><span style="color:#A6ACCD;">8.98846567431158e+307</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; Math.pow(2, 1024)</span></span>
<span class="line"><span style="color:#A6ACCD;">Infinity</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>那么对于 <code>(2^53, 2^63)</code> 之间的数会出现什么情况呢？</p><ul><li><code>(2^53, 2^54)</code> 之间的数会两个选一个，只能精确表示偶数</li><li><code>(2^54, 2^55)</code> 之间的数会四个选一个，只能精确表示4个倍数</li><li>... 依次跳过更多2的倍数</li></ul><p>要想解决大数的问题你可以引用第三方库 <code>bignumber.js</code>，原理是把所有数字当作字符串，重新实现了计算逻辑，缺点是性能比原生差很多</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>计算机存储双精度浮点数需要先把十进制数转换为二进制的科学记数法的形式，然后计算机以自己的规则{符号位+(指数位+指数偏移量的二进制)+小数部分}存储二进制的科学记数法</p><p>因为存储时有位数限制（64位），并且某些十进制的浮点数在转换为二进制数时会出现无限循环，会造成二进制的舍入操作(0舍1入)，当再转换为十进制时就造成了计算误差</p><h2 id="三、解决方案" tabindex="-1">三、解决方案 <a class="header-anchor" href="#三、解决方案" aria-label="Permalink to &quot;三、解决方案&quot;">​</a></h2><p>理论上用有限的空间来存储无限的小数是不可能保证精确的，但我们可以处理一下得到我们期望的结果</p><p>当你拿到 <code>1.4000000000000001</code> 这样的数据要展示时，建议使用 <code>toPrecision</code> 凑整并 <code>parseFloat</code> 转成数字后再显示，如下：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">parseFloat(1.4000000000000001.toPrecision(12)) === 1.4  // True</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>封装成方法就是：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">strip</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">num</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">precision</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">parseFloat</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toPrecision</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">precision</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>对于运算类操作，如 <code>+-*/</code>，就不能使用 <code>toPrecision</code> 了。正确的做法是把小数转成整数后再运算。以加法为例：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 精确加法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">num1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">num2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num1Digits</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">num1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num2Digits</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">num2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">baseNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">num1Digits</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num2Digits</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">num1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">baseNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">baseNum</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">baseNum</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>最后还可以使用第三方库，如<code>Math.js</code>、<code>BigDecimal.js</code></p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/100353781" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/100353781</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt</a></li></ul>`,65),o=[e];function c(t,r,i,y,d,F){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{D as __pageData,u as default};
