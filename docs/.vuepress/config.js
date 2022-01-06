module.exports = {
  title: 'web-tracing', // 标题
  description: '基于 JS / VUE 的 【埋点 & 性能采集 & 异常采集 & 请求采集 & 路由采集】 插件',
  base: '/web-tracing-docs/', // github项目名
  theme: 'reco', // 主题
  locales: {
    '/': {
      lang: 'zh-CN' // 时间格式转换 1/1/2022 => 2022/1/1
    }
  },
  themeConfig: {
    subSidebar: 'auto', // 右侧导航
    nav: [ // 导航栏
      { text: '首页', link: '/about/introduce' },
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
        path: '/about/introduce',
        collapsable: false, // 不折叠
        children: [
          { title: "介绍", path: "/about/introduce" },
          { title: "设计核心", path: "/about/core" }
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
        path: '/docs/core',
        collapsable: false,
        children: [
          { title: "基础说明", path: "/docs/core" },
          { title: "init 配置初始化", path: "/docs/init" },
          { title: "base 环境采集", path: "/docs/base" },
          { title: "event 事件采集", path: "/docs/event" },
          { title: "pv 路由采集", path: "/docs/pv" },
          { title: "http 请求采集", path: "/docs/http" },
          { title: "err 错误采集", path: "/docs/err" },
          { title: "performance 资源采集", path: "/docs/performance" }
        ],
      },
      {
        title: "待做",
        path: '/todo/core',
      },
      {
        title: "示例",
        path: '/demo/core',
      },
    ]
  }
}