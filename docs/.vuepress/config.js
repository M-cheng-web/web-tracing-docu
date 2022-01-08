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
          { title: "数据结构", path: "/docs/scheme" },
          { title: "init 配置初始化", path: "/docs/init" },
          { title: "event 事件采集", path: "/docs/event" },
          { title: "pv 路由采集", path: "/docs/pv" },
          { title: "http 请求采集", path: "/docs/http" },
          { title: "err 错误采集", path: "/docs/err" },
          { title: "performance 资源采集", path: "/docs/performance" },
          { title: "methods 内置方法", path: "/docs/methods" }
        ],
      },
      {
        title: "示例",
        path: '/demo/core',
      },
      {
        title: "待做",
        path: '/todo/core',
      },
    ]
  }
}