import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/antifakeai-page/',
  title: "Anti-Fake AI Project",
  description: "这里是Anti-Fake后端系统的开发文档",
  ignoreDeadLinks: true,
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
          { text: '产品介绍', link: '/quick_start/brief.md' },
          // { text: '性能指标', link: '/quick_start/brief.md' },
          { text: '快速开始', link: '/api-examples' },
          // { text: '管理面板', link: '/api-examples' }
        ]
      },
      {
        text: '支持软件',
        items: [
          { text: '总览', link: '/support/overview' },
          { text: '字节跳动', link: '/support/bytedance' },
          { text: '阿里巴巴', link: '/support/tongyi' },
          { text: '科大讯飞', link: '/support/xunfei' },
          { text: '智谱清言', link: '/support/zhipuqingyan' },
          { text: '腾讯', link: '/support/tencent' },
          { text: '百度', link: '/support/baidu' },
          { text: '商汤', link: '/support/sense' },
          { text: '快手', link: '/support/kuaishou' },
          { text: '美图', link: '/support/meitu' },
          { text: 'Stability AI', link: '/support/stabilityai' },
          { text: 'MidJourney', link: '/support/midjourney' },
          { text: 'Ideogram AI', link: '/support/ideogram' },
          { text: 'Copilot', link: '/support/copilot' },
          { text: 'Runway', link: '/support/runway' },
          { text: 'DeepAI', link: '/support/deepai' },
          { text: 'Canva', link: '/support/canva' },
          { text: '紫东太初', link: '/support/taichu' },
          { text: '云界 AI', link: '/support/yunjie' },
          { text: '天工 AI', link: '/support/tiangong' },
          { text: '即梦 AI', link: '/support/jimeng' },
          
        ]
      },
      {
        text: '接口文档',
        items: [
          { text: '检测接口', link: '/api_reference/detection.md' },
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
        text: '关于我们',
        items: [
          { text: '团队贡献', link: '/about/team' },
          { text: '荣誉证书', link: '/about/about' },
        ]
      },
      {
        text: '开发指导',
        items: [
          { text: '性能主题', link: '/development/performance' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '常见问题',
        items: [
          { text: 'FAQ', link: '/faq/faq' }
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
