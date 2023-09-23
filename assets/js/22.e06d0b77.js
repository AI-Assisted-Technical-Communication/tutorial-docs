(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{303:function(t,e,r){"use strict";r.r(e);var a=r(14),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docs-like-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docs-like-code"}},[t._v("#")]),t._v(" Docs Like Code")]),t._v(" "),e("p",[t._v("在实际的技术写作工作中，通常采用“代码即文档”（Docs Like Code）模式编写并管理文档。Docs Like Code 是指使用用编写代码的工具来编写文档，保证写文档与写代码的流程和工具链保持一致。由于软件开发节奏通常很快，通过这种方式可以让文档作者更好地融入开发团队，参与到整体的开发迭代和管理流程中。")]),t._v(" "),e("p",[t._v("在这种模式下，我们的写作的大致流程就会变成：")]),t._v(" "),e("ol",[e("li",[t._v("使用代码编辑器打开文件，如 Visual Studio Code")]),t._v(" "),e("li",[t._v("用纯文本标记语编辑文档 ，如 Markdown、reStructuredText")]),t._v(" "),e("li",[t._v("在 GitHub 等源代码托管服务平台存放文档")]),t._v(" "),e("li",[t._v("基于版本控制系统进行文档协作与版本管理，如 Git")])]),t._v(" "),e("p",[t._v("听起来是不是有点抽象？没关系！在本文会向你一一介绍：")]),t._v(" "),e("ul",[e("li",[t._v("什么是纯文本标记语言 Markdown")]),t._v(" "),e("li",[t._v("什么是 Git")]),t._v(" "),e("li",[t._v("如何玩转 Github")])]),t._v(" "),e("h2",{attrs:{id:"学习-markdown-及其语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#学习-markdown-及其语法"}},[t._v("#")]),t._v(" 学习 Markdown 及其语法")]),t._v(" "),e("p",[t._v("Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。在 2004 由约翰·格鲁伯（John Gruber）创建。Markdown 编写的文档可以导出 HTML 、Word、图像、PDF、Epub 等多种格式的文档。其文档后缀为 .md, .markdown。")]),t._v(" "),e("h3",{attrs:{id:"为什么使用md语法-内容与样式分离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用md语法-内容与样式分离"}},[t._v("#")]),t._v(" 为什么使用MD语法——内容与样式分离")]),t._v(" "),e("p",[t._v("也许你会问为什么要用这种语法写文档呢？为什么不能像 word 一样写文档呢？实际上这样的好处很多：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("只需关注文本本身，减少排版时间")]),t._v(" "),e("p",[t._v("Markdown 语法是通过简单的符号规定了文档的格式，写作的时候只需要敲击键盘。相比之下，使用word等一般的文字编辑器写完文档后，还得使用鼠标编辑调节字间距、字的大小和样式。")])]),t._v(" "),e("li",[e("p",[t._v("视觉逻辑更强")]),t._v(" "),e("p",[t._v("文本使用Markdown标注后，结构更清晰，逻辑也更明显。比如这样："),e("img",{attrs:{src:t.$withBase("/Image/markdown.png"),alt:"markdown"}})])])]),t._v(" "),e("h3",{attrs:{id:"常用语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用语法"}},[t._v("#")]),t._v(" 常用语法")]),t._v(" "),e("p",[t._v("以下是几种常用的 Markdown 语法用来简单标记文本格式：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("标题：有几级标题就在前面加几个 “#”")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 一级标题\n\n## 二级标题\n\n### 三级标题\n")])])])]),t._v(" "),e("li",[e("p",[t._v("列表: 无序列表在文字前加上 “-” 或 “*” 加 “空格”，有序列表直接用 “1.2.” 加 “空格”")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("无序列表：\n- 项目1\n- 项目2\n\n有序列表：\n1. 第一步\n2. 第二步\n")])])])]),t._v(" "),e("li",[e("p",[t._v("引用：在引用的文本前打符号 “>”")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> A successful book is not made of what is in it, but what is left out of it. ——Mark Twain\n")])])])]),t._v(" "),e("li",[e("p",[t._v("粗体与斜体：在文本前打上一个或两个 “*”")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("加粗：**文本** \n斜体：*文本* \n")])])])]),t._v(" "),e("li",[e("p",[t._v("图片与链接")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("链接：[](xxxxxxxxxxxx)\n图片：![](xxxxxxxxxx)\n")])])])])]),t._v(" "),e("p",[t._v("说了这么多，赶紧点击 "),e("a",{attrs:{href:"https://milkdown.dev/playground",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown 在线编辑器"),e("OutboundLink")],1),t._v(" 自己试一试吧！")]),t._v(" "),e("h3",{attrs:{id:"常用编辑器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用编辑器"}},[t._v("#")]),t._v(" 常用编辑器")]),t._v(" "),e("p",[t._v("以下是一些常用的Markdown编辑器供参考：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("在线Markdown编辑器：")]),t._v(" "),e("ul",[e("li",[t._v("Milkdown（https://milkdown.dev/）")]),t._v(" "),e("li",[t._v("Dillinger（https://dillinger.io/）")]),t._v(" "),e("li",[t._v("StackEdit（https://stackedit.io/）")])])]),t._v(" "),e("li",[e("p",[t._v("本地Markdown编辑器：")]),t._v(" "),e("ul",[e("li",[t._v("Typora（https://typora.io/）")]),t._v(" "),e("li",[t._v("Visual Studio Code（https://code.visualstudio.com/）")])])])]),t._v(" "),e("h2",{attrs:{id:"github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[t._v("#")]),t._v(" Github")]),t._v(" "),e("p",[t._v("Github是使用Git进行版本控制的代码托管服务平台，帮助程序员存储和管理他们的代码，同理，帮助TCer存储和管理技术文档。在Github中你可以创建自己的代码库，把代码上传到里面，并且和其他人一起协作开发。还可以浏览其他人的代码库，获取灵感或者学习别人的代码。\nGitHub汇聚了全世界众多的开源项目以及开发者，你可以找到并加入你感兴趣的开源项目，为这些项目贡献自己的代码或者提出改进意见。")]),t._v(" "),e("p",[t._v("讲了这么多，不如直接进入"),e("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),e("OutboundLink")],1),t._v("的世界开始探索吧。")]),t._v(" "),e("p",[t._v("以下是技术传播相关的 Github 开源项目：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/AI-Assisted-Technical-Communication",target:"_blank",rel:"noopener noreferrer"}},[t._v("AI-Assisted-Technical-Communication"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/lilin90/awesome-technical-communication",target:"_blank",rel:"noopener noreferrer"}},[t._v("lilin90/awesome-technical-communication: 😎 A curated list of awesome resources about technical communication"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/BolajiAyodeji/awesome-technical-writing",target:"_blank",rel:"noopener noreferrer"}},[t._v("BolajiAyodeji/awesome-technical-writing"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/CynthiaPeter/Technical-Writing-Resources",target:"_blank",rel:"noopener noreferrer"}},[t._v("CynthiaPeter/Technical-Writing-Resources: A collection of blogpost, resources, and links that has helped me in my journey as a technical writer"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/yikeke/zh-style-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("yikeke/zh-style-guide: An open-source style guide for writing Chinese technical documents"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),e("OutboundLink")],1),t._v(" 是一个分布式版本控制系统，通过Git可以进行多人协作来开发软件。")]),t._v(" "),e("p",[t._v("Git可以追踪人们和团队在项目中的协作过程中所做的更改历史。开发者对项目进行更改时，可以随时恢复到之前的任何版本。")]),t._v(" "),e("p",[t._v("开发者可以通过查看项目历史记录来了解：")]),t._v(" "),e("ul",[e("li",[t._v("做了哪些更改？")]),t._v(" "),e("li",[t._v("谁做了这些更改？")]),t._v(" "),e("li",[t._v("更改是在何时进行的？")]),t._v(" "),e("li",[t._v("为什么需要进行这些更改？")])]),t._v(" "),e("p",[t._v("为了更好地理解 Git，建议你先点击 "),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1h5411E7pM?p=1&vd_source=7a86dc52913a8801792dd314157e0b7c",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于Git为Github项目做贡献"),e("OutboundLink")],1),t._v("，看完这段视频再阅读以下信息。")]),t._v(" "),e("h3",{attrs:{id:"git-分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-分支管理"}},[t._v("#")]),t._v(" Git 分支管理")]),t._v(" "),e("p",[t._v("Git 的分支管理是指在项目中同时维护多个独立的代码线，每个代码线都有自己的提交历史和更改记录。这种能力使团队能够并行开发多个功能、修复 bug，而不会影响彼此的工作。分支管理是 Git 的一个强大功能，有助于在开发过程中实现更好的协作、版本控制和代码管理。")]),t._v(" "),e("p",[t._v("具体来说，Git 的分支管理包括以下关键概念和操作：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("主分支（Master/Main）： 主分支是项目的主要代码线，通常用于存放稳定的代码。在主分支上完成的工作应该是已经测试过并准备发布的代码。")])]),t._v(" "),e("li",[e("p",[t._v("分支创建： 在 Git 中，您可以从主分支（或其他分支）上创建新的分支，用于开发新功能、修复 bug 等。每个分支都是基于一个已有的提交。")])]),t._v(" "),e("li",[e("p",[t._v("分支切换： 您可以切换到不同的分支，以便在不同的代码线上工作。这允许您在不同分支之间切换，而无需影响其他人的工作。")])]),t._v(" "),e("li",[e("p",[t._v("分支合并： 在开发完成后，您可以将一个分支上的更改合并到另一个分支中，将特定的功能或修复并入主分支。合并时，Git 尝试将两个分支的更改整合在一起。")])]),t._v(" "),e("li",[e("p",[t._v("分支删除： 一旦分支的工作完成，可以将不再需要的分支删除，以保持代码库的整洁性。")])]),t._v(" "),e("li",[e("p",[t._v("分支命名约定： 使用有意义的分支名称，如 feature/(feature-name)、bugfix/(bug-name)，可以帮助团队更好地识别不同分支的用途。")])])]),t._v(" "),e("p",[t._v("分支管理使团队能够在不干扰彼此工作的情况下进行独立的开发和测试。每个人都可以在自己的分支上工作，然后在确保代码稳定后，将更改合并到主分支中。这种方式可以减少冲突、提高协作效率，并确保项目的稳定性。")]),t._v(" "),e("h3",{attrs:{id:"git-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-常用命令"}},[t._v("#")]),t._v(" Git 常用命令")]),t._v(" "),e("p",[t._v("一些最简单且常用的 Git 指令，熟悉这些指令可以帮助他们开始进行基本的版本控制操作。")]),t._v(" "),e("p",[t._v("为了方便你来理解，可以想象你和你的朋友一起写一本书，这本书是一个在远方的图书馆里的项目，你们用 Git 来协同写作的过程。")]),t._v(" "),e("ul",[e("li",[t._v('Clone： 你决定要加入这个协作写作项目，所以你在图书馆里复制了一份整个书本，这个复制的书本就是你的 "克隆"。现在你可以在家里阅读和编辑书本了。')]),t._v(" "),e("li",[t._v('Pull： 当你的朋友在图书馆里添加了新的章节，你需要 "拉取" 这些新内容，这样你就可以在你的书本上看到最新的内容了。')]),t._v(" "),e("li",[t._v('Commit： 你在书本上写了一段有趣的故事，觉得可以了，于是你在纸上签了个名字，这就是你的 "提交"。现在你的朋友可以在他们的书本上看到你的故事。')]),t._v(" "),e("li",[t._v('Stage： 你准备把自己的故事分享给大家，所以你把这个故事放在桌子上，表示它准备好了，这就是 "暂存"。现在你可以把你的提交（故事）一起分享了。')]),t._v(" "),e("li",[t._v('Push： 你把你的故事和其他人的故事一起放在桌子上，让大家都能看到，这就是 "推送"。你的故事现在也可以在图书馆的项目里看到了。')]),t._v(" "),e("li",[t._v('Merge： 你和你的朋友写了各自的章节，现在你们想把这些章节合并成一本完整的书。你们把各自的部分合并在一起，形成了一本完整的书，这就是 "合并"。')])]),t._v(" "),e("h2",{attrs:{id:"相关资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关资源"}},[t._v("#")]),t._v(" 相关资源")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/7QH8H5YtRyDdgpX2iHApoQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("现代软件文档开发：敏捷时代，要像写代码一样写文档！"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://jaycechant.info/2017/why-you-should-document-with-Markdown/",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么你应该用markdown写文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://markdown.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown官方教程"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV1h5411E7pM/?p=1&vd_source=7a86dc52913a8801792dd314157e0b7c",target:"_blank",rel:"noopener noreferrer"}},[t._v("B站教程：GitHub 新手指南"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://learngitbranching.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线游戏：Learn Git Branching"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://rogerdudler.github.io/git-guide/index.zh.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git简明指南"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=i.exports}}]);