import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
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
        collapsed: false,
        items: [
          { text: '产品介绍', link: '/quick_start/brief.md' },
        ]
      },
      {
        text: '图像检测',
        collapsed: false,
        items: [
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
          { text: '总览', link: '/support/overview' },
          { text: 'Stability AI', link: '/support/stabilityai' },
          { text: '字节跳动', link: '/support/bytedance' },
          { text: '腾讯', link: '/support/tencent' },
          { text: '阿里巴巴', link: '/support/tongyi' },
          { text: '百度', link: '/support/baidu' },
          { text: '商汤', link: '/support/sense' },
          { text: '即梦 AI', link: '/support/jimeng' },
          { text: 'MidJourney', link: '/support/midjourney' },
          { text: 'Ideogram AI', link: '/support/ideogram' },
          { text: 'Runway', link: '/support/runway' },
          { text: 'DeepAI', link: '/support/deepai' },
          { text: 'canva', link: '/support/canva' },
          { text: '快手', link: '/support/kuaishou' },
          { text: '美图', link: '/support/meitu' },
          { text: '紫东太初', link: '/support/taichu' },
          { text: '云界AI', link: '/support/yunjie' },
          { text: '天工AI', link: '/support/tiangong' },
          
=======
>>>>>>> yym
          {
            text: '支持软件',
            collapsed: true,
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
              { text: '即梦 AI', link: '/support/jimeng' }
            ]
          }
        ]
      },
      // {
      //   text: '音频检测',
      //   collapsed: true,
      //   items: [
      //     // 预留位置
      //   ]
      // },
      {
        text: '视频检测',
        collapsed: true,
        items: [
          { text: '总览', link: '/support/video/overview' },
          { text: '百度(Steamer-I2V)', link: '/support/video/baidu' },
          { text: '字节跳动(豆包)', link: '/support/video/bytedance' },
          { text: '即梦 Dreamina', link: '/support/video/jimeng' },
          { text: '快手(可灵 AI 视频)', link: '/support/video/kuaishou' },
          { text: '美图(MiracleVision)', link: '/support/video/meitu' },
          { text: 'Runway(Gen)', link: '/support/video/runway' },
          { text: '腾讯(元宝/混元)', link: '/support/video/tencent' },
          { text: '阿里巴巴(通义·视频)', link: '/support/video/tongyi' },
          { text: 'OpenAI(Sora)', link: '/support/video/sora' },
          { text: 'Vidu(U-ViT)', link: '/support/video/vidu' },
<<<<<<< HEAD
=======
          { text: 'DeepfaceLab', link: '/support/video/deepfacelab'},
          { text: 'DeepLiveCam', link: '/support/video/deepLivecam'},
          { text: 'FaceShifter', link: '/support/video/faceshifter'},
          { text: 'FaceSwap', link: '/support/video/faceswap'},
        ]
      },
      {
        text: '音频检测',
        collapsed: true,
        items: [
          { text: 'Google(AudioLM,USM)', link: '/support/audio/google' },
          { text: 'Microsoft(Valle)', link: '/support/audio/microsoft' },
          { text: 'Meta(VoiceBox)', link: '/support/audio/meta' },
          { text: 'SpeechGPT', link: '/support/audio/speechgpt' },
        ]
      },
      {
        text: '文本检测',
        collapsed: true,
        items: [
          { text: '阿里巴巴(Qwen)', link: '/support/text/ali' },
          { text: '百度(文心一言)', link: '/support/text/baidu' },
          { text: '字节跳动（豆包）', link: '/support/text/bytedance' },
          { text: 'Anthropic(Claude)', link: '/support/text/claude' },
          { text: 'Deepseek', link: '/support/text/deepseek' },
          { text: 'OpenAI(GPT)', link: '/support/text/openai' },
          { text: 'Google(Gemini)', link: '/support/text/google' },
          { text: 'Meta(LLaMA)', link: '/support/text/meta' },

>>>>>>> yym
        ]
      },
      {
        text: '水印技术',
        collapsed: true,
        items: [
          { text: 'AIGC政策合规与水印检测能力', link: '/support/watermark/watermark' },
        ]
      },
      {
        text: '大模型安全测评',
        collapsed: true,
        items: [
          // 预留位置
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> yym
        ]
      },
      {
        text: '接口文档',
        collapsed: false,
        items: [
          { text: '检测接口', link: '/api_reference/detection.md' }
        ]
      },
      {
        text: '系统架构',
        collapsed: false,
        items: [
          { text: '文件服务', link: '/architecture/file_service' },
        ]
      },
      {
        text: '开发指导',
        collapsed: false,
        items: [
          { text: '性能主题', link: '/development/performance' }
        ]
      },
      {
        text: '关于我们',
        collapsed: false,
        items: [
          { text: '团队介绍', link: '/about/team' },
          { text: '荣誉证书', link: '/about/about' }
        ]
      },
      {
        text: '常见问题',
        collapsed: false,
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
