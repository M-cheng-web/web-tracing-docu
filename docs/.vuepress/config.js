module.exports = {
  title: 'web-tracing', // 标题
  description: '基于 JS / VUE 的 【埋点 & 性能采集 & 异常采集 & 请求采集 & 路由采集】 插件',
  base: '/web-tracing-docu/', // github项目名
  theme: 'reco', // 主题
  locales: {
    '/': {
      lang: 'zh-CN' // 时间格式转换 1/1/2022 => 2022/1/1
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [ // 导航栏
      { text: '首页', link: '/' },
      // {
      //   text: '博客地址',
      //   items: [
      //     { text: 'Github', link: 'https://github.com/mqyqingfeng' },
      //     { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
      //   ]
      // }
    ],
    sidebar: [ // 标签页
      {
        title: '关于插件',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "介绍", path: "/" }
        ]
      },
      {
        title: "使用",
        path: '/use/js',
        collapsable: false,
        children: [
          { title: "在 JS 中使用", path: "/use/js" },
          { title: "在 Vue 中使用", path: "/use/vue" }
        ],
      },
      {
        title: "文档",
        path: '/docu/core',
      },
      {
        title: "示例",
        path: '/demo/core',
      }
    ]
  }
}