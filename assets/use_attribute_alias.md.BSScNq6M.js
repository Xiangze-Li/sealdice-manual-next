import{_ as s,c as a,o as n,a7 as i}from"./chunks/framework.ByDU-z0G.js";const g=JSON.parse('{"title":"属性同义词","description":"","frontmatter":{"lang":"zh-cn","title":"属性同义词"},"headers":[],"relativePath":"use/attribute_alias.md","filePath":"use/attribute_alias.md","lastUpdated":1714442589000}'),e={name:"use/attribute_alias.md"},p=i(`<h1 id="属性同义词" tabindex="-1">属性同义词 <a class="header-anchor" href="#属性同义词" aria-label="Permalink to &quot;属性同义词&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将介绍海豹在 CoC 和 D&amp;D 规则中默认使用的同义词。</p></div><h2 id="概念说明" tabindex="-1">概念说明 <a class="header-anchor" href="#概念说明" aria-label="Permalink to &quot;概念说明&quot;">​</a></h2><p>属性同义词是在录入和存储角色数据时，将若干个属性名视为同一个属性、互相可以替代使用。</p><p>这一设计是为了解决下面这样的问题：（由于笔者的游戏栈，使用 CoC 举例）</p><div class="info custom-block"><p class="custom-block-title">场景举例</p><p>用户可能使用某些自动工具创建了一名调查员，由工具生成了录入数据的指令。这指令可能包含了类似这样的内容：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.st 力量50str50</span></span></code></pre></div><p>我们知道，「str」是「力量」属性的英文缩写法，它们完全指代的是同一属性。</p><p>因此，我们期待这样的指令实际只录入一条属性，但是用户仍然可以用「力量」或「str」的任何一个名字使用这一属性。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ .st 力量50str50</span></span>
<span class="line"><span>&lt;木落&gt;的属性录入完成，本次共记录了2条数据 （其中1条为同义词）</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 实际上只有一条属性</span></span>
<span class="line"><span>$ .st show</span></span>
<span class="line"><span>&lt;木落&gt;的个人属性为：力量: 50</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 可以用各种名字使用</span></span>
<span class="line"><span>$ .ra 力量</span></span>
<span class="line"><span>&lt;木落&gt;尝试使用&quot;力量&quot;技能：D100=64/50 失败</span></span>
<span class="line"><span>$ .ra STR</span></span>
<span class="line"><span>&lt;木落&gt;尝试使用&quot;力量&quot;技能：D100=78/50 失败</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 可以用各种名字修改</span></span>
<span class="line"><span>$ .st str+10</span></span>
<span class="line"><span>&lt;木落&gt;的属性变化：</span></span>
<span class="line"><span>力量: 50 ➯ 60 (增加10=10)</span></span>
<span class="line"><span>$ .ra 力量</span></span>
<span class="line"><span>&lt;木落&gt;尝试使用&quot;力量&quot;技能：D100=90/60 失败</span></span></code></pre></div><p>类似地，在 CoC 中，「智力」与「灵感」是规则书规定的同一属性的两个名字。它们也被视为同义词。</p><p>一些分支专精技能的名字，如「冲锋枪」，我们将「射击：冲锋枪」作为它的同义词，以适配尽量多的用法。</p></div><p>我们在选择同义词时遵循以下几条原则：</p><ol><li>规定的同义词等价，如 <code>智力</code> 与 <code>灵感</code>，<code>教育</code> 与 <code>知识</code>；</li><li>中文和英文缩写等价，如 <code>力量</code> 与 <code>str</code>；</li><li>同一概念的不同常用称呼等价，如 <code>理智</code> 与 <code>理智值</code>，根据原则 2，<code>san</code> 和 <code>san值</code> 也指向同一属性；</li><li>日常用语中基本等价且易混淆的词汇等价，如 <code>侦查</code> 与 <code>侦察</code>；</li><li>不同版本规则之间的同一技能更换了用词，或翻译有变化，这些名字等价；如 CoC 6 版的 <code>快速交谈</code> 与 7 版的 <code>话术</code>；又如 7 版的 <code>魅惑</code> 与 <code>取悦</code>；</li><li>简体与繁体字等价，如 <code>体质</code> 与 <code>體質</code>；</li><li>在玩家中广泛使用的简称、别称与其正式名称等价，如 <code>克苏鲁神话</code> 与 <code>克苏鲁</code> 与 <code>克苏鲁神话知识</code>。</li></ol><h2 id="同义词表" tabindex="-1">同义词表 <a class="header-anchor" href="#同义词表" aria-label="Permalink to &quot;同义词表&quot;">​</a></h2><p>为了确保你不会获取到过时内容，我们决定不将列表放在手册中，敬请理解。</p><p>这些同义词都是符合直觉的，你通常也无需专门查阅列表。如果你确实想了解，请参考以下内容。</p><ul><li><p>CoC 规则的同义词，请自行理解 <a href="https://github.com/sealdice/sealdice-core/blob/master/dice/ext_coc7_template.go" target="_blank" rel="noreferrer">此源文件</a> 的内容。</p></li><li><p>D&amp;D 规则的同义词可在骰子启动后，在本地文件 <code>data/default/extensions/dnd5e/attribute.yaml</code> 中查看。</p><p>这个文件遵守以下格式。其中，<code>ac</code> 位置上的名字是海豹核心选用的主要名字，后续列出的是它的同义词。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ac</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">AC</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">护甲等级</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">护甲值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">护甲</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">護甲等級</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">護甲值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">護甲</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">装甲</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">裝甲</span></span></code></pre></div></li></ul>`,12),l=[p];function t(c,o,d,h,r,k){return n(),a("div",null,l)}const u=s(e,[["render",t]]);export{g as __pageData,u as default};
