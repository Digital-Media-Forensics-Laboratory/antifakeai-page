import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Anti-Fake平台开发文档",
  description: "这里是Anti-Fake后端系统的开发文档",
  themeConfig: {
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '简介',
        items: [
          { text: '系统介绍', link: '/quick_start/brief.md' },
          { text: '快速开始', link: '/api-examples' },
          { text: '管理面板', link: '/api-examples' }
        ]
      },
      {
        text: '应用指导',
        items: [
          { text: '部署', link: '/api-examples' },
          { text: '迁移', link: '/api-examples' },
        ]
      },
      {
        text: '系统架构',
        items: [
          { text: '总体架构', link: '/api-examples' },
          { text: '网关', link: '/api-examples' },
          { text: '文件服务', link: '/architecture/file_service' },
          { text: '检测服务', link: '/api-examples' },
        ]
      },
      {
        text: '开发指导',
        items: [
          { text: '新增模型', link: '/api-examples' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
