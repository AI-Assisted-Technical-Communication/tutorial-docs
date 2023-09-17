module.exports = {
  title: "AI-assisted Technical Communication",
  description: "一起探索 “AI+技术传播” 的职业新思路",
  base: "/tutorial-docs/",
  themeConfig: {
    logo: "/logo.jpeg",
    lastUpdated: "Last Updated", // string | boolean
    editLinks: true,
    // nav: [
    //   {
    //     text: "Github",
    //     link: "https://github.com/AI-Assisted-Technical-Communication/tutorial-docs",
    //   },
    // ],
    sidebar: [
      {
        title: "Reference",
        activeHeaderLinks: false, // 默认值：true
        path: "/Reference/tutorial-for-teaching",
        children: ["/Reference/tutorial-for-teaching.md"],
      },
      {
        title: "Overview",
        activeHeaderLinks: false, // 默认值：true
        path: "/Overview/Technical-Communication.md",
        children: [
          "/Overview/Technical-Communication.md",
          "/Overview/Technical-Writing.md",
          "/Overview/Docs-Like-Code.md",
        ],
      },
    ],
    displayAllHeaders: true, // 默认值：false
    repo: "https://github.com/AI-Assisted-Technical-Communication/tutorial-docs/tree/main",
    // repoLabel: "查看源码",

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo:
      "https://github.com/AI-Assisted-Technical-Communication/tutorial-docs/",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
  },
};
