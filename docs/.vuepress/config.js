module.exports = ctx => ({
  // 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束
  base: '/docs/',
  // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
  title: '使用文档',
  // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  description: '钉钉小程序框架、氚云开发文档、d2-admin框架',
  // 额外的需要被注入到当前页面的 HTML <head> 中的标签，每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?] 的格式指定，举个例子，增加一个自定义的 favicon
  head: [
    ['link', {rel: 'icon', href: '/logo.jpg'}]
  ],
  // 指定 dev server 的主机名
  host: '127.0.0.1',
  // 指定 dev server 的端口
  port: 8080,
  // 默认主题配置
  themeConfig: {
    // 上一次更新时间前缀
    lastUpdated: '上次更新',
    // 源码仓库链接
    repo: 'cjl255352',
    // 自定义仓库链接文字
    repoLabel: 'J.L.Chen',
    // 导航栏
    nav: [
      {
        text: "项目",
        items: [
          {
            text: "钉钉小程序框架",
            items: [
              {
                text: "指南",
                link: "/e-app/guide/"
              },
              {
                text: "组件",
                link: "/e-app/components/"
              },
              {
                text: "快速渲染",
                link: "/e-app/render/"
              }
            ]
          }
        ]
      }
    ],
    // 侧边栏
    sidebar: {
      '/e-app/guide/': [
        ['', '指南'],
        ['open-dev/', '开放平台'],
        ['ide/', '开发工具'],
      ],
      '/e-app/render/': [
        ['', '介绍'],
        ['list', 'listPage'],
        ['form', 'formPage']
      ],
      '/e-app/components/': [
        {
          title: '基础组件',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['base/', '介绍'],
            'base/address',
            'base/cascader',
            'base/date-picker',
            'base/dept-chooser',
            'base/input',
            'base/interval',
            'base/picker',
            'base/progress-bar',
            'base/scan',
            'base/search',
            'base/switch',
            'base/text-area',
            'base/user-chooser'
          ]
        },
        ['/e-app/components/menu/', '菜单组件'],
        ['/e-app/components/list/', '列表组件'],
        ['/e-app/components/form/', '表单组件']
      ]
    }
  },
  plugins: ['@vuepress/back-to-top']
})