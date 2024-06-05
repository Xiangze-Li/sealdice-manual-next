import{_ as c,D as d,c as a,j as t,I as o,a7 as s,a as n,o as l}from"./chunks/framework.ByDU-z0G.js";const Pt=JSON.parse('{"title":"龙与地下城 5E","description":"","frontmatter":{"lang":"zh-cn","title":"龙与地下城 5E"},"headers":[],"relativePath":"use/dnd5e.md","filePath":"use/dnd5e.md","lastUpdated":1714442589000}'),i={name:"use/dnd5e.md"},_=s('<h1 id="龙与地下城-5e" tabindex="-1">龙与地下城 5E <a class="header-anchor" href="#龙与地下城-5e" aria-label="Permalink to &quot;龙与地下城 5E&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将展示 <strong>D&amp;D 5E</strong> 玩家所需指令，请善用侧边栏和搜索，按需阅读文档。</p><p>我们假定你已对 D&amp;D 规则有适当了解，本节只涉及如何使用海豹核心完成规则中指定的操作。</p></div><div class="info custom-block"><p class="custom-block-title">龙与地下城</p><p><strong>「龙与地下城」</strong>（Dungeons &amp; Dragons, D&amp;D, DnD）是一款剑与魔法奇幻背景的叙事性角色扮演游戏。与孩提时代的过家家扮演游戏相似，D&amp;D 依靠的是玩家无穷的想象力。</p><p>你所需要做的，即是描述场景如暴风骤雨里，夜空下的某座高耸古堡。然后想象奇幻世界中的冒险者们会如何迎接即将到来的挑战。</p></div><h2 id="dnd-dndx-生成随机属性-制卡" tabindex="-1"><code>.dnd</code> / <code>.dndx</code> 生成随机属性（制卡） <a class="header-anchor" href="#dnd-dndx-生成随机属性-制卡" aria-label="Permalink to &quot;`.dnd` / `.dndx` 生成随机属性（制卡）&quot;">​</a></h2><p><code>.dnd (&lt;数量&gt;)</code> 随机生成指定组数的待分配属性，如果省略数量将生成 1 组。</p><p><code>.dndx (&lt;数量&gt;)</code> 随机生成带属性名的结果。</p>',6),h={class:"info custom-block"},r=t("p",{class:"custom-block-title"},"示例",-1),p=s('<h2 id="ri-先攻设置" tabindex="-1"><code>.ri</code> 先攻设置 <a class="header-anchor" href="#ri-先攻设置" aria-label="Permalink to &quot;`.ri` 先攻设置&quot;">​</a></h2><p><code>.ri &lt;先攻值&gt; (&lt;角色名&gt;)</code> 为指定角色设定先攻值。如果省略角色名则默认为当前角色，以下的角色名部分相同。</p><p>其中，先攻值部分支持以下三种写法</p><ol><li><code>.ri 12</code> 固定值 12；</li><li><code>.ri +2</code> 掷骰 D20+2；</li><li><code>.ri =D20+3</code> 掷骰 D15+3。</li></ol><p><code>.ri &lt;单项&gt;, &lt;单项&gt;, ...</code> 批量设定多个角色的先攻值，每个单项都是 <code>&lt;先攻值&gt; &lt;角色名&gt;</code> 形式。</p>',5),u={class:"info custom-block"},b=t("p",{class:"custom-block-title"},"示例",-1),f=s('<h2 id="init-先攻列表" tabindex="-1"><code>.init</code> 先攻列表 <a class="header-anchor" href="#init-先攻列表" aria-label="Permalink to &quot;`.init` 先攻列表&quot;">​</a></h2><p><code>.init</code> 查看先攻列表。</p><p><code>.init del &lt;单位1&gt; &lt;单位2&gt; ...</code> 从先攻列表中删除指定单位。</p><p><code>.init set &lt;单位名称&gt; &lt;先攻表达式&gt;</code> 为指定单位设定先攻值。</p><p><code>.init clr</code> 清除先攻列表。</p><p><code>.init end</code> 结束当前的回合，并开始下一回合；如果轮到玩家行动，会 at 将要行动的玩家。</p><p><code>.init help</code> 显示帮助。</p>',7),m={class:"info custom-block"},g=t("p",{class:"custom-block-title"},"示例",-1),k=t("p",null,"已经设置了先攻列表的情况",-1),T=s('<h2 id="st-操作角色卡" tabindex="-1"><code>.st</code> 操作角色卡 <a class="header-anchor" href="#st-操作角色卡" aria-label="Permalink to &quot;`.st` 操作角色卡&quot;">​</a></h2><h3 id="st-help-获取帮助信息" tabindex="-1"><code>.st help</code> 获取帮助信息 <a class="header-anchor" href="#st-help-获取帮助信息" aria-label="Permalink to &quot;`.st help` 获取帮助信息&quot;">​</a></h3><h3 id="列出属性" tabindex="-1">列出属性 <a class="header-anchor" href="#列出属性" aria-label="Permalink to &quot;列出属性&quot;">​</a></h3><p><code>.st show</code> 列出角色卡所有属性。</p><p><code>.st show &lt;属性1&gt; &lt;属性2&gt; ...</code> 列出指定的属性数值。</p><p><code>.st show &lt;数值&gt;</code> 列出高于指定数值的属性。</p><p><code>.st export</code> 导出属性值和法术位。</p><h3 id="删除属性" tabindex="-1">删除属性 <a class="header-anchor" href="#删除属性" aria-label="Permalink to &quot;删除属性&quot;">​</a></h3><p><code>.st clr/clear</code> 删除所有属性数值和法术位。</p><p><code>.st del &lt;属性1&gt; &lt;属性2&gt; ...</code> 删除指定属性。</p><h3 id="更新属性值" tabindex="-1">更新属性值 <a class="header-anchor" href="#更新属性值" aria-label="Permalink to &quot;更新属性值&quot;">​</a></h3><p><code>.st 模板</code> 获取角色卡录入模板。</p><p><code>.st &lt;属性&gt;:&lt;值&gt;</code> 设置指定属性，技能加值会自动计算。</p><p><code>.st &lt;属性&gt;=&lt;值&gt;</code> 与前一用法相同，可避免中英文冒号的识别问题。</p><p><code>.st &lt;属性&gt;±&lt;表达式&gt;</code> 将指定属性增加或减去表达式的计算结果。表达式中可以包含骰点。如 <code>.st 生命+1d4</code></p><p><code>.st hp-1d6 --over</code> 前一用法的特殊情况，不计算临时生命扣血。</p>',16),x={class:"info custom-block"},P=t("p",{class:"custom-block-title"},"示例",-1),q=t("p",null,"属性修改后，属性调整值会自动变更。不用再行关注。",-1),D={class:"info custom-block"},v=t("p",{class:"custom-block-title"},"对生命值的特殊支持",-1),S=t("ul",null,[t("li",null,"当存在临时生命 (buff 血量)，自动优先消耗。若临时生命不足以抵挡伤害，剩余会扣减血量；"),t("li",null,"当生命值归零，若伤害大于等于血量上限，判定人物死亡；"),t("li",null,"当生命值归零，若伤害小于血量上限，人物昏迷；"),t("li",null,"当人物已经昏迷，不足致死的伤害自动折算为死亡豁免失败。")],-1),A=s('<p><strong>退游小技巧，黑暗录卡：</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.st 力量:4d6k3 体质:4d6k3 敏捷:4d6k3 智力:4d6k3 感知:4d6k3 魅力:4d6k3 hp:10 hpmax: 10 熟练:2 运动:0 特技:0 巧手:0 隐匿:0 调查:0 奥秘:0 历史:0 自然:0 宗教:0 察觉:0 洞悉:0 驯养:0 医疗:0 生存:0 说服:0 欺诈:0 威吓:0 表演:0</span></span></code></pre></div><h3 id="代骰" tabindex="-1">代骰 <a class="header-anchor" href="#代骰" aria-label="Permalink to &quot;代骰&quot;">​</a></h3><p>以上功能均可以通过附加 <code>@其他人</code> 来操作对方的属性值。</p><h2 id="rc-检定" tabindex="-1"><code>.rc</code> 检定 <a class="header-anchor" href="#rc-检定" aria-label="Permalink to &quot;`.rc` 检定&quot;">​</a></h2><p><code>.rc &lt;属性&gt;</code> 进行检定。</p><p><code>.rc &lt;属性&gt;豁免</code> 进行豁免检定。</p><p><code>.rc &lt;表达式&gt;</code> 使用可带调整值的表达式进行检定，如 <code>力量+3</code>。</p><p><code>.rc (优势|劣势) &lt;表达式&gt;</code> 进行优势或劣势检定。</p>',9),C={class:"info custom-block"},V=t("p",{class:"custom-block-title"},"示例",-1),I=t("h3",{id:"代骰-1",tabindex:"-1"},[n("代骰 "),t("a",{class:"header-anchor",href:"#代骰-1","aria-label":'Permalink to "代骰"'},"​")],-1),E=t("p",null,[n("以上功能均可以通过附加 "),t("code",null,"@其他人"),n(" 来使用对方的技能进行检定。")],-1),N=t("h3",{id:"奇妙运用",tabindex:"-1"},[n("奇妙运用 "),t("a",{class:"header-anchor",href:"#奇妙运用","aria-label":'Permalink to "奇妙运用"'},"​")],-1),B=t("p",null,"你可以通过如下方式记录武器的熟练项。",-1),R={class:"info custom-block"},w=t("p",{class:"custom-block-title"},"示例",-1),$=s('<h2 id="buff-临时属性" tabindex="-1"><code>.buff</code> 临时属性 <a class="header-anchor" href="#buff-临时属性" aria-label="Permalink to &quot;`.buff` 临时属性&quot;">​</a></h2><p><code>.buff help</code> 显示帮助。</p><p><code>.buff</code> 展示当前 buff。</p><p><code>.buff clr</code> 清除 buff。</p><p><code>.buff del &lt;属性1&gt; &lt;属性2&gt; ...</code> 删除指定属性的 buff。</p><p><code>.buff &lt;属性&gt;:&lt;值&gt;</code> 为指定属性设定 buff。</p><p><code>.buff &lt;属性&gt;±&lt;表达式&gt;</code> 修改指定属性的 buff。</p><p>用于设置临时属性，例如虚假生命：</p>',8),y={class:"info custom-block"},F=t("p",{class:"custom-block-title"},"示例",-1),U=t("p",null,"也可以用来设置其他属性：",-1),j={class:"info custom-block"},z=t("p",{class:"custom-block-title"},"示例",-1),H=t("p",null,"临时的技能熟练（装备或法术效果）：",-1),J={class:"info custom-block"},O=t("p",{class:"custom-block-title"},"示例",-1),X=t("p",null,"删除和清空",-1),G={class:"info custom-block"},K=t("p",{class:"custom-block-title"},"示例",-1),L=s('<h3 id="代骰-2" tabindex="-1">代骰 <a class="header-anchor" href="#代骰-2" aria-label="Permalink to &quot;代骰&quot;">​</a></h3><p>以上功能均可以通过附加 <code>@其他人</code> 来操作对方的 buff。</p><h2 id="ss-法术位-spell-slots" tabindex="-1"><code>.ss</code> 法术位 (spell slots) <a class="header-anchor" href="#ss-法术位-spell-slots" aria-label="Permalink to &quot;`.ss` 法术位 (spell slots)&quot;">​</a></h2><p><code>.ss</code> 查看当前法术位状况。</p><p><code>.ss init 4 3 2</code> 设置 1 2 3 环的法术位上限，以此类推，上不封顶。</p><p><code>.ss set 2环 4</code> 单独设置某一环的法术位上限，可用逗号分隔地连写多组。</p><p><code>.ss clr</code> 清除法术位设置。</p><p><code>.ss rest</code> 恢复所有法术位 (不回复 hp)。</p><p><code>.ss 3环 +1</code> 增加一个 3 环法术位（不会超过上限）。</p><p><code>.ss lv3 +1</code> 同上，另一种写法。</p><p><code>.ss 3环 -1</code> 消耗一个 3 环法术位。</p>',11),M={class:"info custom-block"},Q=t("p",{class:"custom-block-title"},"示例",-1),W=t("h3",{id:"代骰-3",tabindex:"-1"},[n("代骰 "),t("a",{class:"header-anchor",href:"#代骰-3","aria-label":'Permalink to "代骰"'},"​")],-1),Y=t("p",null,[n("以上功能均可以通过附加 "),t("code",null,"@其他人"),n(" 来操作对方的法术位。")],-1),Z=t("h2",{id:"cast-使用法术位",tabindex:"-1"},[t("code",null,".cast"),n(" 使用法术位 "),t("a",{class:"header-anchor",href:"#cast-使用法术位","aria-label":'Permalink to "`.cast` 使用法术位"'},"​")],-1),tt=t("p",null,[t("code",null,".cast <环数> (<消耗数量>)"),n(" 消耗指定数量的指定法术位，省略消耗数量时，消耗 1 个。")],-1),et={class:"info custom-block"},ot=t("p",{class:"custom-block-title"},"示例",-1),nt=s('<h3 id="代骰-4" tabindex="-1">代骰 <a class="header-anchor" href="#代骰-4" aria-label="Permalink to &quot;代骰&quot;">​</a></h3><p>以上功能均可以通过附加 <code>@其他人</code> 来消耗对方的法术位。</p><h2 id="longrest-长休" tabindex="-1"><code>.longrest</code> / <code>.长休</code> <a class="header-anchor" href="#longrest-长休" aria-label="Permalink to &quot;`.longrest` / `.长休`&quot;">​</a></h2><p><code>.longrest</code> 恢复生命值和法术位。当前角色需已设定最大生命值且当前生命值大于 0。</p>',4),st={class:"info custom-block"},ct=t("p",{class:"custom-block-title"},"示例",-1),dt=s('<h3 id="代骰-5" tabindex="-1">代骰 <a class="header-anchor" href="#代骰-5" aria-label="Permalink to &quot;代骰&quot;">​</a></h3><p>以上功能均可以通过附加 <code>@其他人</code> 来令对方进行长休。</p><h2 id="ds-死亡豁免" tabindex="-1"><code>.ds</code> / <code>.死亡豁免</code> <a class="header-anchor" href="#ds-死亡豁免" aria-label="Permalink to &quot;`.ds` / `.死亡豁免`&quot;">​</a></h2><p><code>.ds help</code> 查看帮助。</p><p><code>.ds</code> 进行一次死亡豁免检定，此时角色 hp 必须为 0。</p><p><code>.ds +1d4</code> 检定时添加 1d4 的加值。</p><p><code>.ds (成功|失败)±&lt;变化值&gt;</code> 死亡豁免的成功或失败数量增加或减少指定值。成功和失败可分别简写为 <code>s</code> 与 <code>f</code>。</p><p><code>.ds stat</code> 查看当前死亡豁免情况。</p><p>st 指令对 hp 的操作也会自动触发死亡豁免。</p>',9),at={class:"info custom-block"},lt=t("p",{class:"custom-block-title"},"示例",-1),it=t("p",null,"昏迷后被攻击：",-1),_t=t("p",null,"死亡：",-1),ht=t("p",null,"医学奇迹：",-1),rt=t("h3",{id:"代骰-6",tabindex:"-1"},[n("代骰 "),t("a",{class:"header-anchor",href:"#代骰-6","aria-label":'Permalink to "代骰"'},"​")],-1),pt=t("p",null,[n("以上功能均可以通过附加 "),t("code",null,"@其他人"),n(" 来令对方进行死亡豁免。")],-1);function ut(bt,ft,mt,gt,kt,Tt){const e=d("ChatBox");return l(),a("div",null,[_,t("div",h,[r,o(e,{messages:[{content:".dnd 5",send:!0},{content:`<木落>的DnD5e人物作成(自由分配模式):
[16, 16, 14, 11, 10, 9] = 76
[16, 15, 15, 12, 9, 9] = 76
[16, 15, 14, 13, 13, 12] = 83
[18, 17, 15, 14, 13, 8] = 85
[15, 14, 13, 13, 10, 8] = 73
获取带属性名的预设请用.dndx`},{content:".dndx 5",send:!0},{content:`<木落>的DnD5e人物作成(预设模式):
力量:16 体质:9 敏捷:14 智力:10 感知:13 魅力:10 共计:72
力量:13 体质:12 敏捷:8 智力:8 感知:14 魅力:9 共计:64
力量:16 体质:10 敏捷:11 智力:14 感知:12 魅力:10 共计:73
力量:9 体质:17 敏捷:15 智力:9 感知:10 魅力:13 共计:73
力量:12 体质:6 敏捷:8 智力:13 感知:10 魅力:8 共计:57
自由分配模式请用.dnd`}]})]),p,t("div",u,[b,o(e,{messages:[{content:".ri +2",send:!0},{content:`<木落>对先攻点数设置如下:
1. 木落: 15[1d20=15] + 2=17`},{content:".ri +3 狗头人1",send:!0},{content:`<木落>对先攻点数设置如下:
1. 狗头人1: 15[1d20=15] + 3=18`},{content:".ri =D20+2 狗头人1",send:!0},{content:`<木落>对先攻点数设置如下:
1. 狗头人1: 13`},{content:".ri 30 狗头人1",send:!0},{content:`<木落>对先攻点数设置如下:
1. 狗头人1: 30`},{content:".ri 优势+2 狗头人2",send:!0},{content:`<木落>对先攻点数设置如下:
1. 狗头人2: 13[{13 | 11 }] + 2=15`},{content:".ri +2 狗头人1, 3 狗头人2, =d30 狗头人3, +3",send:!0},{content:`<木落>对先攻点数设置如下:
1. 木落: 19[1d20=19] + 3=22
2. 狗头人3: 17
3. 狗头人1: 15[1d20=15] + 2=17
4. 狗头人2: 3`}]})]),f,t("div",m,[g,k,o(e,{messages:[{content:".init",send:!0},{content:`当前先攻列表为:
1. 木落: 22
2. 狗头人3: 17
3. 狗头人1: 17
4. 狗头人2: 3
当前回合：木落`},{content:".init del 狗头人2",send:!0},{content:`<木落>将以下单位从先攻列表中移除:
1. 狗头人2`},{content:".init set 狗头人3 16",send:!0},{content:"<木落>已设置 狗头人3 的先攻点为16 16"},{content:".init end",send:!0},{content:"【木落】戏份结束了，下面该【狗头人1】出场了！"}]})]),T,t("div",x,[P,o(e,{messages:[{content:".st 模板",send:!0},{content:`人物卡模板(第二行文本):
.dst 力量:10 体质:10 敏捷:10 智力:10 感知:10 魅力:10 hp:10 hpmax: 10 熟练:2 运动:0 特技:0 巧手:0 隐匿:0 调查:0 奥秘:0 历史:0 自然:0 宗教:0 察觉:0 洞悉:0 驯养:0 医疗:0 生存:0 说服:0 欺诈:0 威吓:0 表演:0
注意: 技能只填写修正值即可，属性调整值会自动计算。熟练写为“运动*:0”`},{content:".st 力量:12 体质:10 敏捷:10 智力:10 感知:10 魅力:10 hp:10 hpmax: 10 熟练:2 运动*:3 特技:1 巧手:0 隐匿:0 调查:0 奥秘:0 历史:0 自然:0 宗教:0 察觉:0 洞悉:0 驯养:0 医疗:0 生存:0 说服:0 欺诈:0 威吓:0 表演:0",send:!0},{content:`<木落>的dnd5e人物属性设置如下:
读入: 力量:12, 体质:10, 敏捷:10, 智力:10, 感知:10, 魅力:10, hp:10, hpmax:10, 熟练:2, 运动:3[技能, 熟练], 特技:1[技能], 巧手:0[技能], 隐匿:0[技能], 调查:0[技能], 奥秘:0[技能], 历史:0[技能], 自然:0[技能], 宗教:0[技能], 察觉:0[技能], 洞悉:0[技能], 驯养:0[技能], 医疗:0[技能], 生存:0[技能], 说服:0[技能], 欺诈:0[技能], 威吓:0[技能], 表演:0[技能]`},{content:".st show",send:!0},{content:`<木落>的个人属性为:
力量: 12  敏捷: 10  体质: 10  智力: 10
感知: 10  魅力: 10  hp: 10  hpmax: 10
EXP: 0  熟练: 2   特技: 1[基础值1] 运动: 6[基础值3]
(下略)`},{content:".st show 力量 运动 熟练",send:!0},{content:`<木落>的个人属性为:
力量: 12  熟练: 2   运动: 6[基础值3]`},{content:".st 力量 + 2",send:!0},{content:`人物属性设置如下:
修改: 力量(12 ➯ 14)`}]})]),q,t("div",D,[v,S,o(e,{messages:[{content:".st hp-3 hp-3 hp-3",send:!0},{content:`<木落>的dnd5e人物属性设置如下:
修改: hp(2 ➯ 0), hp(0 ➯ 0), hp(0 ➯ 0)
<木落>遭受了1点过量伤害，生命值降至0，陷入了昏迷！
<木落>在昏迷状态下遭受了3点过量伤害，死亡豁免失败+1！
<木落>在昏迷状态下遭受了3点过量伤害，死亡豁免失败+1！`}]})]),A,t("div",C,[V,o(e,{messages:[{content:".rc 运动",send:!0},{content:`<木落>的“运动”检定结果为:
8[1d20=8] + 6[运动=6] = 14`},{content:".rc 优势 力量+4",send:!0},{content:`<木落>的“力量+4”检定结果为:
17[{17 | 11 }] + 12[力量=12] + 4 = 33`},{content:".rc 劣势 力量+4 推一下试试",send:!0},{content:`<木落>的“推一下试试”检定结果为:
17[{17 | 18 }] + 12[力量=12] + 4 = 33`}]})]),I,E,N,B,t("div",R,[w,o(e,{messages:[{content:".st 长剑=4",send:!0},{content:"<木落>的属性录入完成，本次录入了1条数据。"},{content:".rc 长剑",send:!0},{content:`<木落>的“长剑”检定(dnd5e)结果为:
16[1d20=16] + 4[长剑=4] = 20`}]})]),$,t("div",y,[F,o(e,{messages:[{content:".st hp:10",send:!0},{content:`<木落>的dnd5e人物属性设置如下:
读入: hp:10`},{content:".buff hp : 1d4+4",send:!0},{content:`<木落>的dnd5e人物Buff属性设置如下:
读入: hp:7`},{content:".st show hp",send:!0},{content:`<木落>的个人属性为:
hp:17[10]`}]})]),U,t("div",j,[z,o(e,{messages:[{content:".st 力量:10  运动:0",send:!0},{content:`<木落>的dnd5e人物属性设置如下:
读入: 力量:10, 运动:0[技能]`},{content:".buff 力量:6",send:!0},{content:`<木落>的dnd5e人物Buff属性设置如下:
读入: 力量:6`},{content:".st show 力量 运动",send:!0},{content:`<木落>的个人属性为:
力量:16[10] 运动:3[0]`}]})]),H,t("div",J,[O,o(e,{messages:[{content:".st 力量:10  运动:0 熟练:3",send:!0},{content:`<木落>的dnd5e人物属性设置如下:
读入: 力量:10, 运动:0[技能], 熟练:3`},{content:".buff 运动*:0",send:!0},{content:`<木落>的dnd5e人物Buff属性设置如下:
读入: 运动:0[技能, 熟练*]`},{content:".st show 力量 运动",send:!0},{content:`<木落>的个人属性为:
力量:16[10] 运动:6[0]`}]})]),X,t("div",G,[K,o(e,{messages:[{content:".buff del hp",send:!0},{content:"<木落>的如下buff属性被成功删除:hp，失败0项"},{content:".buff clr",send:!0},{content:"<木落>的BUFF数据已经清除，共计0条"}]})]),L,t("div",M,[Q,o(e,{messages:[{content:".ss init 3 4 5",send:!0},{content:"为<木落>设置法术位: 1环3个, 2环4个, 3环5个"},{content:".ss 1环 -1",send:!0},{content:"<木落>的1环法术位消耗至2个，上限3个"},{content:".ss",send:!0},{content:"<木落>的法术位状况: 1环:2/3, 2环:4/4, 3环:5/5"},{content:".ss rest",send:!0},{content:"<木落>的法术位已经完全恢复"},{content:".ss set 4环 3",send:!0},{content:"为<木落>设置法术位: 4环3个"}]})]),W,Y,Z,tt,t("div",et,[ot,o(e,{messages:[{content:".cast 2",send:!0},{content:"<木落>的2环法术位消耗至3个，上限4个"}]})]),nt,t("div",st,[ct,o(e,{messages:[{content:".长休",send:!0},{content:"<木落>的长休: hp得到了恢复，现为12 法术位得到了恢复"},{content:".长休",send:!0},{content:"<木落>的长休: 没有设置hpmax，无法回复hp"}]})]),dt,t("div",at,[lt,o(e,{messages:[{content:".st hp:3 hpmax:12",send:!0},{content:`<木落>的dnd5e人物属性设置如下:
读入: hp:3, hpmax:12`},{content:".st hp-10",send:!0},{content:`<木落>的dnd5e人物属性设置如下:
修改: hp(3 ➯ 0)
<木落>遭受了7点过量伤害，生命值降至0，陷入了昏迷！`}]}),it,o(e,{messages:[{content:`<木落>的dnd5e人物属性设置如下:
修改: hp(0 ➯ 0)
<木落>在昏迷状态下遭受了1点过量伤害，死亡豁免失败+1！`}]}),_t,o(e,{messages:[{content:`<木落>的死亡豁免检定: [1d20=3]=3 有些不妙！死亡豁免失败+1
你获得了3次死亡豁免检定失败，不幸去世了！`}]}),ht,o(e,{messages:[{content:"<木落>的死亡豁免检定: [1d20=20]=20 你觉得你还可以抢救一下！HP回复1点！"}]})]),rt,pt])}const qt=c(i,[["render",ut]]);export{Pt as __pageData,qt as default};
