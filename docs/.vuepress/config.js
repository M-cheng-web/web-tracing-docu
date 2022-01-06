module.exports = {
  title: 'web-tracing', // 标题
  description: '前端 - 埋点, 性能采集, 异常采集, 请求采集, 路由采集', // 标题说明
  base: '/web-tracing-docu/', // github项目名
  theme: 'reco', // 主题
  locales: {
    '/': {
      lang: 'zh-CN' // 时间格式转换 1/1/2022 => 2022/1/1
    }
  },
  themeConfig: {
    nav: [ // 导航栏
      { text: '首页', link: '/' },
      {
        text: '博客地址',
        items: [
          { text: 'Github', link: 'https://github.com/mqyqingfeng' },
          { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ]
      }
    ],
    sidebar: [ // 标签页
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "学前必读", path: "/" }
        ]
      },
      {
        title: "基础学习",
        path: '/handbook/Geners',
        collapsable: false,
        children: [
          { title: "条件类型", path: "/handbook/Geners" },
          { title: "泛型", path: "/handbook/Geners_2" }
        ],
      }
    ]
  }
}