import{_ as e,o as t,c,Q as a}from"./chunks/framework.2eafe199.js";const h=JSON.parse('{"title":"面试官：说说 git 发生冲突的场景？如何解决？","description":"","frontmatter":{},"headers":[],"relativePath":"git/conflict.md","filePath":"git/conflict.md","lastUpdated":1694416341000}'),o={name:"git/conflict.md"},d=a('<h1 id="面试官-说说-git-发生冲突的场景-如何解决" tabindex="-1">面试官：说说 git 发生冲突的场景？如何解决？ <a class="header-anchor" href="#面试官-说说-git-发生冲突的场景-如何解决" aria-label="Permalink to &quot;面试官：说说 git 发生冲突的场景？如何解决？&quot;">​</a></h1><p><img src="https://static.vue-js.com/8aeccc40-fdb3-11eb-bc6f-3f06e1491664.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p>一般情况下，出现分支的场景有如下：</p><ul><li>多个分支代码合并到一个分支时</li><li>多个分支向同一个远端分支推送</li></ul><p>具体情况就是，多个分支修改了同一个文件（任何地方）或者多个分支修改了同一个文件的名称</p><p>如果两个分支中分别修改了不同文件中的部分，是不会产生冲突，直接合并即可</p><p>应用在命令中，就是<code>push</code>、<code>pull</code>、<code>stash</code>、<code>rebase</code>等命令下都有可能产生冲突情况，从本质上来讲，都是<code>merge</code>和<code>patch</code>（应用补丁）时产生冲突</p><h2 id="二、分析" tabindex="-1">二、分析 <a class="header-anchor" href="#二、分析" aria-label="Permalink to &quot;二、分析&quot;">​</a></h2><p>在本地主分值<code>master</code>创建一个<code>a.txt</code>文件，文件起始位置写上<code>master commit</code>，如下：</p><p><img src="https://static.vue-js.com/959ade20-fdb3-11eb-991d-334fd31f0201.png" alt=""></p><p>然后提交到仓库：</p><ul><li>git add a.txt</li><li>git commit -m &#39;master first commit&#39;</li></ul><p>创建一个新的分支<code>featurel1</code>分支，并进行切换，如下：</p><div class="language-cmd vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git checkout </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">b featurel1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git checkout </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">b featurel1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后修改<code>a.txt</code>文件首行文字为 <code>featurel commit</code>，然后添加到暂存区，并开始进行提交到仓库：</p><ul><li>git add a.txt</li><li>git commit -m &#39;featurel first change&#39;</li></ul><p>然后通过<code>git checkout master</code>切换到主分支，通过<code>git merge</code>进行合并，发现不会冲突</p><p>此时<code>a.txt</code>文件的内容变成<code>featurel commit</code>，没有出现冲突情况，这是因为<code>git</code>在内部发生了快速合并</p><blockquote><p>如果当前分支的每一个提交(commit)都已经存在另一个分支里了，git 就会执行一个“快速向前”(fast forward)操作</p><p>git 不创建任何新的提交(commit)，只是将当前分支指向合并进来的分支</p></blockquote><p>如果此时切换到<code>featurel</code>分支，将文件的内容修改成<code>featrue second commit</code>，然后提交到本地仓库</p><p>然后切换到主分支，如果此时在<code>a.txt</code>文件再次修改，修改成<code>mastet second commit</code>，然后再次提交到本地仓库</p><p>此时，<code>master</code>分支和<code>feature1</code>分支各自都分别有新的提交，变成了下图所示：</p><p><img src="https://static.vue-js.com/a05488c0-fdb3-11eb-991d-334fd31f0201.png" alt=""></p><p>这种情况下，无法执行快速合并，只能试图把各自的修改合并起来，但这种合并就可能会有冲突</p><p>现在通过<code>git merge featurel</code>进行分支合并，如下所示：</p><p><img src="https://static.vue-js.com/b0991d90-fdb3-11eb-bc6f-3f06e1491664.png" alt=""></p><p>从冲突信息可以看到，<code>a.txt</code>发生冲突，必须手动解决冲突之后再提交</p><p>而<code>git status</code>同样可以告知我们冲突的文件：</p><p><img src="https://static.vue-js.com/c5823430-fdb3-11eb-991d-334fd31f0201.png" alt=""></p><p>打开<code>a.txt</code>文件，可以看到如下内容：</p><p><img src="https://static.vue-js.com/ce7a0a90-fdb3-11eb-bc6f-3f06e1491664.png" alt=""></p><p><code>git</code>用<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>，<code>=======</code>，<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>标记出不同分支的内容：</p><ul><li><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Invalid code snippet option</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Invalid code snippet option</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>======= 和 &gt;&gt;&gt;&gt;&gt;&gt;&gt; 之间的区域就是传入进来更改的内容</li></ul><p>现在要做的事情就是将冲突的内容进行更改，对每个文件使用 <code>git add</code> 命令来将其标记为冲突已解决。 一旦暂存这些原本有冲突的文件，<code>Git </code>就会将它们标记为冲突已解决然后再提交：</p><ul><li>git add a.txt</li><li>git commit -m &quot;conflict fixed&quot;</li></ul><p>此时<code>master</code>分支和<code>feature1</code>分支变成了下图所示：</p><p><img src="https://static.vue-js.com/d7421e60-fdb3-11eb-bc6f-3f06e1491664.png" alt=""></p><p>使用<code>git log</code>命令可以看到合并的信息：</p><p><img src="https://static.vue-js.com/e0dfd1b0-fdb3-11eb-991d-334fd31f0201.png" alt=""></p><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><p>当<code>Git</code>无法自动合并分支时，就必须首先解决冲突，解决冲突后，再提交，合并完成</p><p>解决冲突就是把<code>Git</code>合并失败的文件手动编辑为我们希望的内容，再提交</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://www.liaoxuefeng.com/wiki/896043488029600/900004111093344" target="_blank" rel="noreferrer">https://www.liaoxuefeng.com/wiki/896043488029600/900004111093344</a></li></ul>',45),i=[d];function s(p,l,r,n,g,m){return t(),c("div",null,i)}const f=e(o,[["render",s]]);export{h as __pageData,f as default};
