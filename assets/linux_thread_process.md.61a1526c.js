import{_ as e,c as t,o as a,a as i}from"./app.e287249f.js";const g=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4EC0\u4E48\u662F\u8FDB\u7A0B\uFF1F\u4EC0\u4E48\u662F\u7EBF\u7A0B\uFF1F\u533A\u522B\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u8FDB\u7A0B","slug":"\u4E00\u3001\u8FDB\u7A0B","link":"#\u4E00\u3001\u8FDB\u7A0B","children":[]},{"level":2,"title":"\u4E8C\u3001\u7EBF\u7A0B","slug":"\u4E8C\u3001\u7EBF\u7A0B","link":"#\u4E8C\u3001\u7EBF\u7A0B","children":[]},{"level":2,"title":"\u4E09\u3001\u533A\u522B","slug":"\u4E09\u3001\u533A\u522B","link":"#\u4E09\u3001\u533A\u522B","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"linux/thread_process.md"}'),l={name:"linux/thread_process.md"},r=i('<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4EC0\u4E48\u662F\u8FDB\u7A0B\uFF1F\u4EC0\u4E48\u662F\u7EBF\u7A0B\uFF1F\u533A\u522B\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4EC0\u4E48\u662F\u8FDB\u7A0B\uFF1F\u4EC0\u4E48\u662F\u7EBF\u7A0B\uFF1F\u533A\u522B\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4EC0\u4E48\u662F\u8FDB\u7A0B\uFF1F\u4EC0\u4E48\u662F\u7EBF\u7A0B\uFF1F\u533A\u522B\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/f414d8a0-02f6-11ec-a752-75723a64e8f5.png" alt=""></p><h2 id="\u4E00\u3001\u8FDB\u7A0B" tabindex="-1">\u4E00\u3001\u8FDB\u7A0B <a class="header-anchor" href="#\u4E00\u3001\u8FDB\u7A0B" aria-hidden="true">#</a></h2><p>\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u6700\u6838\u5FC3\u7684\u6982\u5FF5\u5C31\u662F\u8FDB\u7A0B\uFF0C\u8FDB\u7A0B\u662F\u5BF9\u6B63\u5728\u8FD0\u884C\u4E2D\u7684\u7A0B\u5E8F\u7684\u4E00\u4E2A\u62BD\u8C61\uFF0C\u662F\u7CFB\u7EDF\u8FDB\u884C\u8D44\u6E90\u5206\u914D\u548C\u8C03\u5EA6\u7684\u57FA\u672C\u5355\u4F4D</p><p>\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5176\u4ED6\u6240\u6709\u5185\u5BB9\u90FD\u662F\u56F4\u7ED5\u7740\u8FDB\u7A0B\u5C55\u5F00\u7684\uFF0C\u8D1F\u8D23\u6267\u884C\u8FD9\u4E9B\u4EFB\u52A1\u7684\u662F<code>CPU</code></p><p><img src="https://static.vue-js.com/3ff146b0-02f6-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>\u8FDB\u7A0B\u662F\u4E00\u79CD\u62BD\u8C61\u7684\u6982\u5FF5\uFF0C\u4ECE\u6765\u6CA1\u6709\u7EDF\u4E00\u7684\u6807\u51C6\u5B9A\u4E49\u770B\uFF0C\u4E00\u822C\u7531\u7A0B\u5E8F\u3001\u6570\u636E\u96C6\u5408\u548C\u8FDB\u7A0B\u63A7\u5236\u5757\u4E09\u90E8\u5206\u7EC4\u6210\uFF1A</p><ul><li>\u7A0B\u5E8F\u7528\u4E8E\u63CF\u8FF0\u8FDB\u7A0B\u8981\u5B8C\u6210\u7684\u529F\u80FD\uFF0C\u662F\u63A7\u5236\u8FDB\u7A0B\u6267\u884C\u7684\u6307\u4EE4\u96C6</li><li>\u6570\u636E\u96C6\u5408\u662F\u7A0B\u5E8F\u5728\u6267\u884C\u65F6\u6240\u9700\u8981\u7684\u6570\u636E\u548C\u5DE5\u4F5C\u533A</li><li>\u7A0B\u5E8F\u63A7\u5236\u5757\uFF0C\u5305\u542B\u8FDB\u7A0B\u7684\u63CF\u8FF0\u4FE1\u606F\u548C\u63A7\u5236\u4FE1\u606F\uFF0C\u662F\u8FDB\u7A0B\u5B58\u5728\u7684\u552F\u4E00\u6807\u5FD7</li></ul><h2 id="\u4E8C\u3001\u7EBF\u7A0B" tabindex="-1">\u4E8C\u3001\u7EBF\u7A0B <a class="header-anchor" href="#\u4E8C\u3001\u7EBF\u7A0B" aria-hidden="true">#</a></h2><p><strong>\u7EBF\u7A0B</strong>\uFF08thread\uFF09\u662F\u64CD\u4F5C\u7CFB\u7EDF\u80FD\u591F\u8FDB\u884C<strong>\u8FD0\u7B97\u8C03\u5EA6</strong>\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u5176\u662F\u8FDB\u7A0B\u4E2D\u7684\u4E00\u4E2A\u6267\u884C\u4EFB\u52A1\uFF08\u63A7\u5236\u5355\u5143\uFF09\uFF0C\u8D1F\u8D23\u5F53\u524D\u8FDB\u7A0B\u4E2D\u7A0B\u5E8F\u7684\u6267\u884C</p><p>\u4E00\u4E2A\u8FDB\u7A0B\u81F3\u5C11\u6709\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u8FD0\u884C\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u8FD9\u4E9B\u7EBF\u7A0B\u5171\u4EAB\u540C\u4E00\u5757\u5185\u5B58\uFF0C\u7EBF\u7A0B\u4E4B\u95F4\u53EF\u4EE5\u5171\u4EAB\u5BF9\u8C61\u3001\u8D44\u6E90\uFF0C\u5982\u679C\u6709\u51B2\u7A81\u6216\u9700\u8981\u534F\u540C\uFF0C\u8FD8\u53EF\u4EE5\u968F\u65F6\u6C9F\u901A\u4EE5\u89E3\u51B3\u51B2\u7A81\u6216\u4FDD\u6301\u540C\u6B65</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u8BBE\u4F60\u7ECF\u8425\u7740\u4E00\u5BB6\u7269\u4E1A\u7BA1\u7406\u516C\u53F8\u3002\u6700\u521D\uFF0C\u4E1A\u52A1\u91CF\u5F88\u5C0F\uFF0C\u4E8B\u4E8B\u90FD\u9700\u8981\u4F60\u4EB2\u529B\u4EB2\u4E3A\u3002\u7ED9\u8001\u5F20\u5BB6\u4FEE\u5B8C\u6696\u6C14\u7BA1\u9053\uFF0C\u7ACB\u9A6C\u518D\u53BB\u8001\u674E\u5BB6\u6362\u7535\u706F\u6CE1\u2014\u2014\u8FD9\u53EB\u5355\u7EBF\u7A0B\uFF0C\u6240\u6709\u7684\u5DE5\u4F5C\u90FD\u5F97\u987A\u5E8F\u6267\u884C</p><p>\u540E\u6765\u4E1A\u52A1\u62D3\u5C55\u4E86\uFF0C\u4F60\u96C7\u4F63\u4E86\u51E0\u4E2A\u5DE5\u4EBA\uFF0C\u8FD9\u6837\uFF0C\u4F60\u7684\u7269\u4E1A\u516C\u53F8\u5C31\u53EF\u4EE5\u540C\u65F6\u4E3A\u591A\u6237\u4EBA\u5BB6\u63D0\u4F9B\u670D\u52A1\u4E86\u2014\u2014\u8FD9\u53EB\u591A\u7EBF\u7A0B\uFF0C\u4F60\u662F\u4E3B\u7EBF\u7A0B</p><p><img src="https://static.vue-js.com/63de34c0-02f6-11ec-a752-75723a64e8f5.png" alt=""></p><p>\u4F46\u5B9E\u9645\u4E0A\uFF0C\u5E76\u4E0D\u662F\u7EBF\u7A0B\u8D8A\u591A\uFF0C\u8FDB\u7A0B\u7684\u5DE5\u4F5C\u6548\u7387\u8D8A\u9AD8\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5728\u4E00\u4E2A\u8FDB\u7A0B\u5185\uFF0C\u4E0D\u7BA1\u4F60\u521B\u5EFA\u4E86\u591A\u5C11\u7EBF\u7A0B\uFF0C\u5B83\u4EEC\u603B\u662F\u88AB\u9650\u5B9A\u5728\u4E00\u9897<code>CPU</code>\u5185\uFF0C\u6216\u8005\u591A\u6838<code>CPU</code>\u7684\u4E00\u4E2A\u6838\u5185</p><p>\u8FD9\u610F\u5473\u7740\uFF0C\u591A\u7EBF\u7A0B\u5728\u5B8F\u89C2\u4E0A\u662F\u5E76\u884C\u7684\uFF0C\u5728\u5FAE\u89C2\u4E0A\u5219\u662F\u5206\u65F6\u5207\u6362\u4E32\u884C\u7684\uFF0C\u591A\u7EBF\u7A0B\u7F16\u7A0B\u65E0\u6CD5\u5145\u5206\u53D1\u6325\u591A\u6838\u8BA1\u7B97\u8D44\u6E90\u7684\u4F18\u52BF</p><p>\u8FD9\u5BFC\u81F4\u4F7F\u7528\u591A\u7EBF\u7A0B\u505A\u4EFB\u52A1\u5E76\u884C\u5904\u7406\u65F6\uFF0C\u7EBF\u7A0B\u6570\u91CF\u8D85\u8FC7\u4E00\u5B9A\u6570\u503C\u540E\uFF0C\u7EBF\u7A0B\u8D8A\u591A\u901F\u5EA6\u53CD\u5012\u8D8A\u6162\u7684\u539F\u56E0</p><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1">\u4E09\u3001\u533A\u522B <a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a></h2><ul><li><p><strong>\u672C\u8D28\u533A\u522B</strong>\uFF1A\u8FDB\u7A0B\u662F\u64CD\u4F5C\u7CFB\u7EDF\u8D44\u6E90\u5206\u914D\u7684\u57FA\u672C\u5355\u4F4D\uFF0C\u800C\u7EBF\u7A0B\u662F\u4EFB\u52A1\u8C03\u5EA6\u548C\u6267\u884C\u7684\u57FA\u672C\u5355\u4F4D</p></li><li><p><strong>\u5728\u5F00\u9500\u65B9\u9762</strong>\uFF1A\u6BCF\u4E2A\u8FDB\u7A0B\u90FD\u6709\u72EC\u7ACB\u7684\u4EE3\u7801\u548C\u6570\u636E\u7A7A\u95F4\uFF08\u7A0B\u5E8F\u4E0A\u4E0B\u6587\uFF09\uFF0C\u7A0B\u5E8F\u4E4B\u95F4\u7684\u5207\u6362\u4F1A\u6709\u8F83\u5927\u7684\u5F00\u9500\uFF1B\u7EBF\u7A0B\u53EF\u4EE5\u770B\u505A\u8F7B\u91CF\u7EA7\u7684\u8FDB\u7A0B\uFF0C\u540C\u4E00\u7C7B\u7EBF\u7A0B\u5171\u4EAB\u4EE3\u7801\u548C\u6570\u636E\u7A7A\u95F4\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u6709\u81EA\u5DF1\u72EC\u7ACB\u7684\u8FD0\u884C\u6808\u548C\u7A0B\u5E8F\u8BA1\u6570\u5668\uFF08PC\uFF09\uFF0C\u7EBF\u7A0B\u4E4B\u95F4\u5207\u6362\u7684\u5F00\u9500\u5C0F</p></li><li><p><strong>\u6240\u5904\u73AF\u5883</strong>\uFF1A\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u80FD\u540C\u65F6\u8FD0\u884C\u591A\u4E2A\u8FDB\u7A0B\uFF08\u7A0B\u5E8F\uFF09\uFF1B\u800C\u5728\u540C\u4E00\u4E2A\u8FDB\u7A0B\uFF08\u7A0B\u5E8F\uFF09\u4E2D\u6709\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u6267\u884C\uFF08\u901A\u8FC7CPU\u8C03\u5EA6\uFF0C\u5728\u6BCF\u4E2A\u65F6\u95F4\u7247\u4E2D\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\uFF09</p></li><li><p><strong>\u5185\u5B58\u5206\u914D\u65B9\u9762</strong>\uFF1A\u7CFB\u7EDF\u5728\u8FD0\u884C\u7684\u65F6\u5019\u4F1A\u4E3A\u6BCF\u4E2A\u8FDB\u7A0B\u5206\u914D\u4E0D\u540C\u7684\u5185\u5B58\u7A7A\u95F4\uFF1B\u800C\u5BF9\u7EBF\u7A0B\u800C\u8A00\uFF0C\u9664\u4E86CPU\u5916\uFF0C\u7CFB\u7EDF\u4E0D\u4F1A\u4E3A\u7EBF\u7A0B\u5206\u914D\u5185\u5B58\uFF08\u7EBF\u7A0B\u6240\u4F7F\u7528\u7684\u8D44\u6E90\u6765\u81EA\u5176\u6240\u5C5E\u8FDB\u7A0B\u7684\u8D44\u6E90\uFF09\uFF0C\u7EBF\u7A0B\u7EC4\u4E4B\u95F4\u53EA\u80FD\u5171\u4EAB\u8D44\u6E90</p></li><li><p><strong>\u5305\u542B\u5173\u7CFB</strong>\uFF1A\u6CA1\u6709\u7EBF\u7A0B\u7684\u8FDB\u7A0B\u53EF\u4EE5\u770B\u505A\u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u5982\u679C\u4E00\u4E2A\u8FDB\u7A0B\u5185\u6709\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u5219\u6267\u884C\u8FC7\u7A0B\u4E0D\u662F\u4E00\u6761\u7EBF\u7684\uFF0C\u800C\u662F\u591A\u6761\u7EBF\uFF08\u7EBF\u7A0B\uFF09\u5171\u540C\u5B8C\u6210\u7684\uFF1B\u7EBF\u7A0B\u662F\u8FDB\u7A0B\u7684\u4E00\u90E8\u5206\uFF0C\u6240\u4EE5\u7EBF\u7A0B\u4E5F\u88AB\u79F0\u4E3A\u8F7B\u6743\u8FDB\u7A0B\u6216\u8005\u8F7B\u91CF\u7EA7\u8FDB\u7A0B</p></li></ul><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A\u8FDB\u7A0B=\u706B\u8F66\uFF0C\u7EBF\u7A0B=\u8F66\u53A2</p><ul><li>\u7EBF\u7A0B\u5728\u8FDB\u7A0B\u4E0B\u884C\u8FDB\uFF08\u5355\u7EAF\u7684\u8F66\u53A2\u65E0\u6CD5\u8FD0\u884C\uFF09</li><li>\u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u5305\u542B\u591A\u4E2A\u7EBF\u7A0B\uFF08\u4E00\u8F86\u706B\u8F66\u53EF\u4EE5\u6709\u591A\u4E2A\u8F66\u53A2\uFF09</li><li>\u4E0D\u540C\u8FDB\u7A0B\u95F4\u6570\u636E\u5F88\u96BE\u5171\u4EAB\uFF08\u4E00\u8F86\u706B\u8F66\u4E0A\u7684\u4E58\u5BA2\u5F88\u96BE\u6362\u5230\u53E6\u5916\u4E00\u8F86\u706B\u8F66\uFF0C\u6BD4\u5982\u7AD9\u70B9\u6362\u4E58\uFF09</li><li>\u540C\u4E00\u8FDB\u7A0B\u4E0B\u4E0D\u540C\u7EBF\u7A0B\u95F4\u6570\u636E\u5F88\u6613\u5171\u4EAB\uFF08A\u8F66\u53A2\u6362\u5230B\u8F66\u53A2\u5F88\u5BB9\u6613\uFF09</li><li>\u8FDB\u7A0B\u8981\u6BD4\u7EBF\u7A0B\u6D88\u8017\u66F4\u591A\u7684\u8BA1\u7B97\u673A\u8D44\u6E90\uFF08\u91C7\u7528\u591A\u5217\u706B\u8F66\u76F8\u6BD4\u591A\u4E2A\u8F66\u53A2\u66F4\u8017\u8D44\u6E90\uFF09</li><li>\u8FDB\u7A0B\u95F4\u4E0D\u4F1A\u76F8\u4E92\u5F71\u54CD\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u6302\u6389\u5C06\u5BFC\u81F4\u6574\u4E2A\u8FDB\u7A0B\u6302\u6389\uFF08\u4E00\u5217\u706B\u8F66\u4E0D\u4F1A\u5F71\u54CD\u5230\u53E6\u5916\u4E00\u5217\u706B\u8F66\uFF0C\u4F46\u662F\u5982\u679C\u4E00\u5217\u706B\u8F66\u4E0A\u4E2D\u95F4\u7684\u4E00\u8282\u8F66\u53A2\u7740\u706B\u4E86\uFF0C\u5C06\u5F71\u54CD\u5230\u6240\u6709\u8F66\u53A2\uFF09</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/106283969" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/106283969</a></li><li><a href="https://blog.csdn.net/ThinkWAon/article/details/102021274" target="_blank" rel="noreferrer">https://blog.csdn.net/ThinkWAon/article/details/102021274</a></li><li><a href="https://www.zhihu.com/question/25532384" target="_blank" rel="noreferrer">https://www.zhihu.com/question/25532384</a></li></ul>',23),n=[r];function s(h,o,p,c,d,u){return a(),t("div",null,n)}const f=e(l,[["render",s]]);export{g as __pageData,f as default};