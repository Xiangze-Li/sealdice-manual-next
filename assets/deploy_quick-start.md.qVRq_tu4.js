import{_ as o,D as h,c as d,I as l,w as a,a7 as n,j as i,o as c,a as s}from"./chunks/framework.ByDU-z0G.js";const R=JSON.parse('{"title":"快速开始","description":"","frontmatter":{"lang":"zh-cn","title":"快速开始"},"headers":[],"relativePath":"deploy/quick-start.md","filePath":"deploy/quick-start.md","lastUpdated":1716131425000}'),r={name:"deploy/quick-start.md"},k=n('<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将会指导你如何在你的 PC、服务器、甚至安卓手机上搭建和部署海豹核心。</p><p>如果你对计算机、服务器等相关知识没有任何了解，或者在阅读本节时，对内容中的一些名词完全不理解，我们非常建议你先行阅读 <a href="./about_pc.html">计算机相关</a> 与 <a href="./about_opensource.html">开源程序相关</a> 的科普内容后，再返回这一节。</p></div><h2 id="获取海豹" tabindex="-1">获取海豹 <a class="header-anchor" href="#获取海豹" aria-label="Permalink to &quot;获取海豹&quot;">​</a></h2><p>可以从以下两个渠道获取海豹核心安装包：</p><ul><li><p>官网：从 <a href="https://dice.weizaima.com/download" target="_blank" rel="noreferrer">官网下载页</a> 获取最新的正式版海豹核心安装包。</p></li><li><p>GitHub：从 <a href="https://github.com/sealdice/sealdice-build/releases" target="_blank" rel="noreferrer">GitHub Release</a> 获取海豹核心安装包。</p><p>这一渠道提供两个版本：以 <code>版本号+发布日期</code> 命名的正式版，与官网一致；以 <code>Latest Dev Build+日期</code> 命名的最新构建，可能有各种 Bug，不推荐一般用户使用。</p></li></ul><div class="tip custom-block"><p class="custom-block-title">提示：我该选择从哪里获取？</p><p>我们非常建议你使用从<strong>官网</strong>获取的正式版海豹。对于绝大多数用户来说，官网的下载最顺畅和便捷，所提供的正式版也适合绝大多数用户使用。</p></div><p>海豹提供了多个平台的安装包，请确认你的操作系统并选择对应版本的安装包。提供的平台如下：</p><ul><li>Windows：普通用户首选，适用于 Windows 7 或者更高，同样可以部署在 Windows 云服务器。 <ul><li>64 位：适合绝大多数用户使用。</li><li>32 位：只在你明确知道为何要使用 32 位版本的情况下使用 32 位版本。</li></ul></li><li>Linux: 提供给更专业的用户使用，需要使用终端启动。适用于服务器、树莓派等设备。 <ul><li>x64：绝大多数使用 Intel 或 AMD CPU 的服务器都应使用此版本。</li><li>arm64：树莓派等 arm 设备请使用 arm64 版。</li></ul></li><li>MacOS：提供给 Mac 用户使用，需要使用终端启动。 <ul><li>arm64：Apple Silicon 芯片（M1、M2 等）请使用 arm64 版。</li><li>x64：Intel 芯片请使用 x64 版。</li></ul></li><li>Docker：提供对应 Docker 镜像，支持多种架构。 <ul><li>amd64</li><li>arm64</li></ul></li><li>Android：提供 Android 的 apk 安装包。</li></ul><h2 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p><strong>永远</strong>不要直接运行压缩包中的海豹核心，也不要在临时目录中运行海豹核心。</p></div><p>将安装包解压到合适的目录。考虑到后续升级，将目录名中的版本号删去或许是更好的做法。</p><p>根据系统不同，用以下方法即可启动海豹：</p>',12),p=i("p",null,[s("双击运行 "),i("code",null,"sealdice-core.exe"),s("。数秒钟后，海豹核心将会在后台运行并弹出提示。")],-1),u=i("p",null,"在任务栏中找到海豹图标，点击即可打开后台（WebUI）。",-1),g=i("p",null,[s("在 "),i("code",null,"sealdice-core"),s(" 所在的目录启动终端，输入以下命令：")],-1),F=i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"chmod"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," +x"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ./sealdice-core")])])])],-1),_=i("p",null,[s("给予其足够的运行权限。随后，运行 "),i("code",null,"./sealdice-core"),s(" 来启动海豹。在浏览器中输入 "),i("code",null,"localhost:3211"),s(" 来访问后台（WebUI）。")],-1),m=i("p",null,[s("在 "),i("code",null,"sealdice-core"),s(" 所在的目录启动终端，输入以下命令：")],-1),y=i("div",{class:"language-zsh vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"zsh"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"chmod"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," +x"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ./sealdice-core"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," && "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"xattr"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -rd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," com.apple.quarantine"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ./sealdice-core")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"chmod"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," +x"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ./lagrange/Lagrange.OneBot"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," && "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"xattr"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -rd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," com.apple.quarantine"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ./lagrange/Lagrange.OneBot")])])])],-1),b=i("p",null,[s("这两条命令移除海豹核心程序和 Lagrange 的 "),i("a",{href:"https://zhuanlan.zhihu.com/p/611471192",target:"_blank",rel:"noreferrer"},"隔离属性"),s("，并给予其足够的运行权限。")],-1),C=i("p",null,[s("随后，运行 "),i("code",null,"./sealdice-core"),s(" 来启动海豹。在浏览器中输入 "),i("code",null,"localhost:3211"),s(" 来访问后台（WebUI）。")],-1),B=i("div",{class:"info custom-block"},[i("p",{class:"custom-block-title"},"MacOS 启动海豹失败问题排查"),i("ol",null,[i("li",null,[s("启动时若出现 "),i("code",null,"Bad CPU type in executable"),s("，请确认你是否下载的是正确版本的海豹。"),i("strong",null,[s("Intel 芯片的 Mac 请下载 "),i("code",null,"darwin x64"),s(" ，Apple Silicon 芯片请下载 "),i("code",null,"darwin arm64"),s("。")])]),i("li",null,"请确认 MacOS 版本高于 10.12，低版本 MacOS 不支持运行，建议尽量将 MacOS 更新至最新稳定版本。")])],-1),f=i("p",null,[s("海豹提供了官方的 Docker 镜像，支持 amd64 和 arm64 两种架构。你可以在 "),i("a",{href:"https://github.com/sealdice/sealdice-build/pkgs/container/sealdice",target:"_blank",rel:"noreferrer"},"此处"),s(" 找到各个版本的镜像。")],-1),v=i("p",null,[s("标签为 edge 的镜像与名为 "),i("code",null,"Latest Dev Build"),s(" 的最新构建二进制发布内容一致。")],-1),E=i("p",null,[s("参考以下命令运行镜像。你可能需要自行通过 "),i("code",null,"-v"),s(" 选项来指定目录挂载、修改 "),i("code",null,"-p"),s(" 调整端口暴露等：")],-1),x=i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"docker"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," run"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -d"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --name"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," sealdice"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 3211:3211"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ghcr.io/sealdice/sealdice:edge")])])])],-1),D=i("p",null,[s("在挂载目录时请注意：海豹核心在容器中的工作目录是根目录，对应的数据目录路径是："),i("code",null,"/data"),s(" 和 "),i("code",null,"/backups"),s("。参考 "),i("a",{href:"./about_file.html"},"海豹的本地文件"),s("。")],-1),S=i("p",null,[s("如果你需要访问宿主机上监听 localhost 的服务（通常 QQ 连接服务和代理服务的默认配置皆是如此），你需要指定 "),i("code",null,"--network host"),s(" 而不是 "),i("code",null,"-p"),s("，使容器和宿主机位于同一网络中。")],-1),A=i("div",{class:"warning custom-block"},[i("p",{class:"custom-block-title"},"注意：容器模式下功能受限"),i("p",null,"Docker 部署的海豹功能有所限制，如无法使用内置客户端登录、无法在线更新等。")],-1),T=i("p",null,[s("请查看"),i("a",{href:"./android.html"},"安卓端登录"),s("。")],-1),q=n('<h2 id="连接平台" tabindex="-1">连接平台 <a class="header-anchor" href="#连接平台" aria-label="Permalink to &quot;连接平台&quot;">​</a></h2><p>在完成上面的步骤后，你已经成功启动了海豹核心。接下来请根据你所需要对接平台的接入手册，来连接海豹和对应平台。</p><p>见「连接平台」一章，包括：</p><ul><li><a href="./platform-qq.html">QQ</a></li><li><a href="./platform-kook.html">KOOK</a></li><li><a href="./platform-dodo.html">DoDo</a></li><li><a href="./platform-discord.html">Discord</a></li><li><a href="./platform-telegram.html">Telegram</a></li><li><a href="./platform-slack.html">Slack</a></li><li><a href="./platform-dingtalk.html">钉钉</a></li></ul><h2 id="安装为系统服务-可选" tabindex="-1">安装为系统服务（可选） <a class="header-anchor" href="#安装为系统服务-可选" aria-label="Permalink to &quot;安装为系统服务（可选）&quot;">​</a></h2><p>如果你使用远程 Linux 服务器部署，或者使用终端启动海豹核心，那么，随着终端关闭，通常海豹核心也会一同关闭。</p><p>海豹核心提供了一种自动安装为系统服务（systemd 服务项）的功能，可以免去手动配置。</p><p>服务名称和服务的启动用户均可以通过提供命令行参数自定义，请运行 <code>./sealdice-core -h</code> 查阅详细说明。</p><p>默认情况下，海豹核心将尝试安装一个由 <code>root</code> 用户运行的，名为 <code>sealdice.service</code> 的服务。这要求海豹核心拥有 root 权限（通常由 sudo 运行得到）。</p>',9),P=i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"$"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ./sealdice-core"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -i")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"正在安装系统服务，安装完成后，SealDice将自动随系统启动")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"安装完成，正在启动……")])])])],-1),w=i("p",null,"也提供自动卸载：",-1),I=i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"$"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ./sealdice-core"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --uninstall")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"正在卸载系统服务……")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"系统服务已删除")])])])],-1),L=i("p",null,"安装完成后，可以使用 systemctl 来管理服务：",-1),M=i("div",{class:"language-shell vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"shell"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"systemctl"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," status"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," sealdice"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"   # 查看运行状态")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"systemctl"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," start"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," sealdice"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    # 启动海豹核心")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"systemctl"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," restart"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," sealdice"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  # 启动或重启海豹核心")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"systemctl"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," stop"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," sealdice"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"     # 停止海豹核心")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"journalctl"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -xe"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -u"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," sealdice.service"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 查看日志")])])])],-1),O=i("p",null,[s("以上命令的详细用法，请查阅你系统的 "),i("code",null,"systemd"),s(" 文档。")],-1);function V(N,W,z,K,U,$){const e=h("PluginTabsTab"),t=h("PluginTabs");return c(),d("div",null,[k,l(t,{sharedStateKey:"os"},{default:a(()=>[l(e,{label:"Windows"},{default:a(()=>[p,u]),_:1}),l(e,{label:"Linux"},{default:a(()=>[g,F,_]),_:1}),l(e,{label:"MacOS"},{default:a(()=>[m,y,b,C,B]),_:1}),l(e,{label:"Docker"},{default:a(()=>[f,v,E,x,D,S,A]),_:1}),l(e,{label:"Android"},{default:a(()=>[T]),_:1})]),_:1}),q,l(t,{sharedStateKey:"os"},{default:a(()=>[l(e,{label:"Linux"},{default:a(()=>[P]),_:1})]),_:1}),w,l(t,{sharedStateKey:"os"},{default:a(()=>[l(e,{label:"Linux"},{default:a(()=>[I]),_:1})]),_:1}),L,l(t,{sharedStateKey:"os"},{default:a(()=>[l(e,{label:"Linux"},{default:a(()=>[M,O]),_:1})]),_:1})])}const j=o(r,[["render",V]]);export{R as __pageData,j as default};
