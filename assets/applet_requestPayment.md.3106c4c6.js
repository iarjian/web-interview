import{_ as s,c as a,o as n,V as l}from"./chunks/framework.821f8c05.js";const u=JSON.parse('{"title":"面试官：说说微信小程序的支付流程？","description":"","frontmatter":{},"headers":[],"relativePath":"applet/requestPayment.md"}'),p={name:"applet/requestPayment.md"},e=l(`<h1 id="面试官-说说微信小程序的支付流程" tabindex="-1">面试官：说说微信小程序的支付流程？ <a class="header-anchor" href="#面试官-说说微信小程序的支付流程" aria-label="Permalink to &quot;面试官：说说微信小程序的支付流程？&quot;">​</a></h1><p><img src="https://static.vue-js.com/2266fff0-34a0-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="一、前言" tabindex="-1">一、前言 <a class="header-anchor" href="#一、前言" aria-label="Permalink to &quot;一、前言&quot;">​</a></h2><p>微信小程序为电商类小程序，提供了非常完善、优秀、安全的支付功能</p><p>在小程序内可调用微信的<code>API</code>完成支付功能，方便、快捷</p><p>场景如下图所示：</p><p><img src="https://static.vue-js.com/6e0cff40-34a0-11ec-a752-75723a64e8f5.png" alt=""></p><p><img src="https://static.vue-js.com/34864830-34a0-11ec-8e64-91fdec0f05a1.png" alt=""></p><ul><li>用户通过分享或扫描二维码进入商户小程序，用户选择购买，完成选购流程</li><li>调起微信支付控件，用户开始输入支付密码</li><li>密码验证通过，支付成功。商户后台得到支付成功的通知</li><li>返回商户小程序，显示购买成功</li><li>微信支付公众号下发支付凭证</li></ul><h2 id="二、流程" tabindex="-1">二、流程 <a class="header-anchor" href="#二、流程" aria-label="Permalink to &quot;二、流程&quot;">​</a></h2><p>以电商小程序为例</p><p>支付流程图如下所示：</p><p><img src="https://static.vue-js.com/76b66780-34a0-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>具体的做法：</p><ul><li>打开某小程序，点击直接下单</li><li>wx.login获取用户临时登录凭证code，发送到后端服务器换取openId</li><li>在下单时，小程序需要将购买的商品Id，商品数量，以及用户的openId传送到服务器</li><li>服务器在接收到商品Id、商品数量、openId后，生成服务期订单数据，同时经过一定的签名算法，向微信支付发送请求，获取预付单信息(prepay_id)，同时将获取的数据再次进行相应规则的签名，向小程序端响应必要的信息</li><li>小程序端在获取对应的参数后，调用wx.requestPayment()发起微信支付，唤醒支付工作台，进行支付</li><li>接下来的一些列操作都是由用户来操作的包括了微信支付密码，指纹等验证，确认支付之后执行鉴权调起支付</li><li>鉴权调起支付：在微信后台进行鉴权，微信后台直接返回给前端支付的结果，前端收到返回数据后对支付结果进行展示</li><li>推送支付结果：微信后台在给前端返回支付的结果后，也会向后台也返回一个支付结果，后台通过这个支付结果来更新订单的状态</li></ul><p>其中后端响应数据必要的信息则是<code>wx.requestPayment</code>方法所需要的参数，大致如下：</p><div class="language-JS line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">requestPayment</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 时间戳</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">timeStamp</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 随机字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">nonceStr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 统一下单接口返回的 prepay_id 参数值</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">package</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 签名类型</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">signType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 签名</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">paySign</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 调用成功回调</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">success</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 失败回调</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fail</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 接口调用结束回调</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">complete</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>参数表如下所示：</p><p><img src="https://files.mdnice.com/user/155/48efed1f-d67f-45a7-ab2c-89a6424fafa0.png" alt=""></p><h2 id="三、结束" tabindex="-1">三、结束 <a class="header-anchor" href="#三、结束" aria-label="Permalink to &quot;三、结束&quot;">​</a></h2><p>小程序支付和以往的网页、APP微信支付大同小异，可以说小程序的支付变得更加简洁，不需要设置支付目录、域名授权等操作</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_8_0.shtml" target="_blank" rel="noreferrer">https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_8_0.shtml</a></li><li><a href="https://juejin.cn/post/6844903895970349064" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903895970349064</a></li></ul>`,23),o=[e];function t(c,r,i,y,D,F){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
