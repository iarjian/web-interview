import{_ as a,c as e,o as t,V as c}from"./chunks/framework.821f8c05.js";const u=JSON.parse('{"title":"面试官：说说微信小程序中路由跳转的方式有哪些？区别？","description":"","frontmatter":{},"headers":[],"relativePath":"applet/navigate.md"}'),i={name:"applet/navigate.md"},o=c('<h1 id="面试官-说说微信小程序中路由跳转的方式有哪些-区别" tabindex="-1">面试官：说说微信小程序中路由跳转的方式有哪些？区别？ <a class="header-anchor" href="#面试官-说说微信小程序中路由跳转的方式有哪些-区别" aria-label="Permalink to &quot;面试官：说说微信小程序中路由跳转的方式有哪些？区别？&quot;">​</a></h1><p><img src="https://static.vue-js.com/52bd3820-31a5-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p>微信小程序拥有<code>web</code>网页和<code>Application</code>共同的特征，我们的页面都不是孤立存在的，而是通过和其他页面进行交互，来共同完成系统的功能</p><p>在微信小程序中，每个页面可以看成是一个<code> pageModel</code>，<code>pageModel </code>全部以栈的形式进行管理</p><h2 id="二、有哪些" tabindex="-1">二、有哪些 <a class="header-anchor" href="#二、有哪些" aria-label="Permalink to &quot;二、有哪些&quot;">​</a></h2><p>常见的微信小程序页面跳转方式有如下：</p><ul><li>wx.navigateTo(Object)</li><li>wx.redirectTo(Object)</li><li>wx.switchTab(Object)</li><li>wx.navigateBack(Object)</li><li>wx.reLaunch(Object)</li></ul><h3 id="wx-navigateto-object" tabindex="-1">wx.navigateTo(Object) <a class="header-anchor" href="#wx-navigateto-object" aria-label="Permalink to &quot;wx.navigateTo(Object)&quot;">​</a></h3><p><code>wx.navigateTo()</code>用于保留当前页面、跳转到应用内的某个页面，使用 <code>wx.navigateBack</code>可以返回到原页面</p><p>对于页面不是特别多的小程序，通常推荐使用 <code>wx.navigateTo</code>进行跳转， 以便返回原页面，以提高加载速度。当页面特别多时，则不推荐使用</p><p>参数表如下所示：</p><p><img src="https://static.vue-js.com/5e524ea0-31a5-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>流程图如下：</p><p><img src="https://static.vue-js.com/68f033e0-31a5-11ec-8e64-91fdec0f05a1.png" alt=""></p><h3 id="wx-redirectto-object" tabindex="-1">wx.redirectTo(Object) <a class="header-anchor" href="#wx-redirectto-object" aria-label="Permalink to &quot;wx.redirectTo(Object)&quot;">​</a></h3><p>重定向，当页面过多时，被保留页面会挤占微信分配给小程序的内存，或是达到微信所限制的 10 层页面栈的情况下，我们应该考虑选择 <code>wx.redirectTo</code></p><p><code>wx.redirectTo()</code>用于关闭当前页面，跳转到应用内的某个页面</p><p>这样的跳转，可以避免跳转前页面占据运行内存，但返回时页面需要重新加载，增加了返回页面的显示时间</p><p>参数表如下所示：</p><p><img src="https://static.vue-js.com/76066c20-31a5-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>流程图如下所示：</p><p><img src="https://static.vue-js.com/828c4b40-31a5-11ec-a752-75723a64e8f5.png" alt=""></p><h3 id="wx-switchtab-object" tabindex="-1">wx.switchTab(Object) <a class="header-anchor" href="#wx-switchtab-object" aria-label="Permalink to &quot;wx.switchTab(Object)&quot;">​</a></h3><p>跳转到 <code>tabBar </code>页面，并关闭其他所有非 <code>tabBar</code> 页面</p><p>参数表如下所示：</p><p><img src="https://static.vue-js.com/968869d0-31a5-11ec-a752-75723a64e8f5.png" alt=""></p><h3 id="wx-navigateback-object" tabindex="-1">wx.navigateBack(Object) <a class="header-anchor" href="#wx-navigateback-object" aria-label="Permalink to &quot;wx.navigateBack(Object)&quot;">​</a></h3><p><code>wx.navigateBack()</code> 用于关闭当前页面，并返回上一页面或多级页面，开发者可通过 <code>getCurrentPages()</code> 获取当前的页面栈，决定需要返回几层则设置对象的<code>delta</code>属性即可</p><p>参数表如下：</p><p><img src="https://static.vue-js.com/a28d8030-31a5-11ec-a752-75723a64e8f5.png" alt=""></p><h3 id="wx-relaunch-object" tabindex="-1">wx.reLaunch(Object) <a class="header-anchor" href="#wx-relaunch-object" aria-label="Permalink to &quot;wx.reLaunch(Object)&quot;">​</a></h3><p>关闭所有页面，打开到应用内的某个页面，返回的时候跳到首页</p><p>流程图如下所示：</p><p><img src="https://static.vue-js.com/accca3a0-31a5-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>参数表如下所示：</p><p><img src="https://static.vue-js.com/b98c7e80-31a5-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><p>关于上述五种跳转方式，做下总结：</p><ul><li>navigateTo 保留当前页面，跳转到应用内的某个页面，使用 wx.navigateBack 可以返回到原页</li><li>redirectTo 关闭当前页面，跳转到应用内的某个页面</li><li>switchTab 跳转到 tabBar 页面，同时关闭其他非 tabBar 页面</li><li>navigateBack 返回上一页面</li><li>reLanch 关闭所有页面，打开到应用内的某个页面</li></ul><p>其中关于它们的页面栈的关系如下：</p><ul><li>navigateTo 新页面入栈</li><li>redirectTo 当前页面出栈，新页面入栈</li><li>navigateBack 页面不断出栈，直到目标返回页，新页面入栈</li><li>switchTab 页面全部出栈，只留下新的 Tab 页面</li><li>reLanch 页面全部出栈，只留下新的页面</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html</a></li></ul>',44),r=[o];function l(p,n,d,s,h,b){return t(),e("div",null,r)}const x=a(i,[["render",l]]);export{u as __pageData,x as default};
