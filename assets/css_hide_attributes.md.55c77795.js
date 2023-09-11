import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.2eafe199.js";const b=JSON.parse('{"title":"面试官：css中，有哪些方式可以隐藏页面元素？区别?","description":"","frontmatter":{},"headers":[],"relativePath":"css/hide_attributes.md","filePath":"css/hide_attributes.md","lastUpdated":1694416341000}'),p={name:"css/hide_attributes.md"},e=l(`<h1 id="面试官-css中-有哪些方式可以隐藏页面元素-区别" tabindex="-1">面试官：css中，有哪些方式可以隐藏页面元素？区别? <a class="header-anchor" href="#面试官-css中-有哪些方式可以隐藏页面元素-区别" aria-label="Permalink to &quot;面试官：css中，有哪些方式可以隐藏页面元素？区别?&quot;">​</a></h1><p><img src="https://static.vue-js.com/ccf96f50-929a-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、前言" tabindex="-1">一、前言 <a class="header-anchor" href="#一、前言" aria-label="Permalink to &quot;一、前言&quot;">​</a></h2><p>在平常的样式排版中，我们经常遇到将某个模块隐藏的场景</p><p>通过<code>css</code>隐藏元素的方法有很多种，它们看起来实现的效果是一致的</p><p>但实际上每一种方法都有一丝轻微的不同，这些不同决定了在一些特定场合下使用哪一种方法</p><h2 id="二、实现方式" tabindex="-1">二、实现方式 <a class="header-anchor" href="#二、实现方式" aria-label="Permalink to &quot;二、实现方式&quot;">​</a></h2><p>通过<code>css</code>实现隐藏元素方法有如下：</p><ul><li>display:none</li><li>visibility:hidden</li><li>opacity:0</li><li>设置height、width模型属性为0</li><li>position:absolute</li><li>clip-path</li></ul><h3 id="display-none" tabindex="-1">display:none <a class="header-anchor" href="#display-none" aria-label="Permalink to &quot;display:none&quot;">​</a></h3><p>设置元素的<code>display</code>为<code>none</code>是最常用的隐藏元素的方法</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.hide</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.hide</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>将元素设置为<code>display:none</code>后，元素在页面上将彻底消失</p><p>元素本身占有的空间就会被其他元素占有，也就是说它会导致浏览器的重排和重绘</p><p>消失后，自身绑定的事件不会触发，也不会有过渡效果</p><p>特点：元素不可见，不占据空间，无法响应点击事件</p><h3 id="visibility-hidden" tabindex="-1">visibility:hidden <a class="header-anchor" href="#visibility-hidden" aria-label="Permalink to &quot;visibility:hidden&quot;">​</a></h3><p>设置元素的<code>visibility</code>为<code>hidden</code>也是一种常用的隐藏元素的方法</p><p>从页面上仅仅是隐藏该元素，DOM结果均会存在，只是当时在一个不可见的状态，不会触发重排，但是会触发重绘</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.hidden</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">visibility</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">hidden</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.hidden</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">visibility</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">hidden</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>给人的效果是隐藏了，所以他自身的事件不会触发</p><p>特点：元素不可见，占据页面空间，无法响应点击事件</p><h3 id="opacity-0" tabindex="-1">opacity:0 <a class="header-anchor" href="#opacity-0" aria-label="Permalink to &quot;opacity:0&quot;">​</a></h3><p><code>opacity</code>属性表示元素的透明度，将元素的透明度设置为0后，在我们用户眼中，元素也是隐藏的</p><p>不会引发重排，一般情况下也会引发重绘</p><blockquote><p>如果利用 animation 动画，对 opacity 做变化（animation会默认触发GPU加速），则只会触发 GPU 层面的 composite，不会触发重绘</p></blockquote><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.transparent</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">opacity</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.transparent</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">opacity</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>由于其仍然是存在于页面上的，所以他自身的的事件仍然是可以触发的，但被他遮挡的元素是不能触发其事件的</p><p>需要注意的是：其子元素不能设置opacity来达到显示的效果</p><p>特点：改变元素透明度，元素不可见，占据页面空间，可以响应点击事件</p><h3 id="设置height、width属性为0" tabindex="-1">设置height、width属性为0 <a class="header-anchor" href="#设置height、width属性为0" aria-label="Permalink to &quot;设置height、width属性为0&quot;">​</a></h3><p>将元素的<code>margin</code>，<code>border</code>，<code>padding</code>，<code>height</code>和<code>width</code>等影响元素盒模型的属性设置成0，如果元素内有子元素或内容，还应该设置其<code>overflow:hidden</code>来隐藏其子元素</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.hiddenBox</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;     </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.hiddenBox</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;     </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>特点：元素不可见，不占据页面空间，无法响应点击事件</p><h3 id="position-absolute" tabindex="-1">position:absolute <a class="header-anchor" href="#position-absolute" aria-label="Permalink to &quot;position:absolute&quot;">​</a></h3><p>将元素移出可视区域</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.hide</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">absolute</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-9999</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-9999</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.hide</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">absolute</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-9999</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">left</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-9999</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>特点：元素不可见，不影响页面布局</p><h3 id="clip-path" tabindex="-1">clip-path <a class="header-anchor" href="#clip-path" aria-label="Permalink to &quot;clip-path&quot;">​</a></h3><p>通过裁剪的形式</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.hide</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">clip-path</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">polygon</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.hide</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">clip-path</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">polygon</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>特点：元素不可见，占据页面空间，无法响应点击事件</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>最常用的还是<code>display:none</code>和<code>visibility:hidden</code>，其他的方式只能认为是奇招，它们的真正用途并不是用于隐藏元素，所以并不推荐使用它们</p><h2 id="三、区别" tabindex="-1">三、区别 <a class="header-anchor" href="#三、区别" aria-label="Permalink to &quot;三、区别&quot;">​</a></h2><p>关于<code>display: none</code>、<code> visibility: hidden</code>、<code>opacity: 0</code>的区别，如下表所示：</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">display: none</th><th style="text-align:left;">visibility: hidden</th><th>opacity: 0</th></tr></thead><tbody><tr><td style="text-align:left;">页面中</td><td style="text-align:left;">不存在</td><td style="text-align:left;">存在</td><td>存在</td></tr><tr><td style="text-align:left;">重排</td><td style="text-align:left;">会</td><td style="text-align:left;">不会</td><td>不会</td></tr><tr><td style="text-align:left;">重绘</td><td style="text-align:left;">会</td><td style="text-align:left;">会</td><td>不一定</td></tr><tr><td style="text-align:left;">自身绑定事件</td><td style="text-align:left;">不触发</td><td style="text-align:left;">不触发</td><td>可触发</td></tr><tr><td style="text-align:left;">transition</td><td style="text-align:left;">不支持</td><td style="text-align:left;">支持</td><td>支持</td></tr><tr><td style="text-align:left;">子元素可复原</td><td style="text-align:left;">不能</td><td style="text-align:left;">能</td><td>不能</td></tr><tr><td style="text-align:left;">被遮挡的元素可触发事件</td><td style="text-align:left;">能</td><td style="text-align:left;">能</td><td>不能</td></tr></tbody></table><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/a-cat/p/9039962.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/a-cat/p/9039962.html</a></li></ul>`,49),o=[e];function t(c,r,i,d,y,E){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};
